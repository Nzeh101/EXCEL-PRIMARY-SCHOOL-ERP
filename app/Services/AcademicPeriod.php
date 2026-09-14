<?php

namespace App\Services;

use App\Models\FeeBalance;
use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class AcademicPeriod
{
    public static function current(): object
    {
        return DB::table('academic_state')->where('id', 1)->first();
    }

    public static function enroll(Student $student, string $year, string $term, bool $charge = true): void
    {
        DB::table('student_enrollments')->insertOrIgnore(['student_id' => $student->id, 'academic_year' => $year, 'term' => $term, 'class_name' => $student->class_name, 'student_type' => $student->student_type, 'status' => $student->status, 'created_at' => now(), 'updated_at' => now()]);
        if ($charge) {
            $due = $student->student_type === 'Preschool' ? 70000 : 75000;
            FeeBalance::firstOrCreate(['student_id' => $student->id, 'academic_year' => $year, 'term' => $term, 'fee_type' => 'Tuition Fee'], ['amount_due' => $due, 'amount_paid' => 0, 'balance' => $due, 'status' => 'Unpaid']);
        }
    }

    public static function roster(string $year, string $term)
    {
        return Student::whereIn('id', DB::table('student_enrollments')->where('academic_year', $year)->where('term', $term)->select('student_id'));
    }

    public static function syncCurrent(Student $student): void
    {
        $state = self::current();
        if ($student->academic_year !== $state->current_year) return;
        DB::table('student_enrollments')->where('student_id', $student->id)->where('academic_year', $state->current_year)->where('term', $state->current_term)
            ->update(['class_name' => $student->class_name, 'student_type' => $student->student_type, 'status' => $student->status, 'updated_at' => now()]);
    }

    public static function requireEnded(string $year, string $term): void
    {
        $record = DB::table('school_terms')->where('academic_year', $year)->where('term', $term)->first();
        if (! $record?->ends_on) {
            throw ValidationException::withMessages(['term' => 'Set the closing term’s start and end dates before advancing.']);
        }
        if (now()->toDateString() <= $record->ends_on) {
            throw ValidationException::withMessages(['term' => 'This term has not ended yet. Check its dates in Term Dates.']);
        }
    }

    public static function requireTargetDates(string $year, string $term, string $fromYear, string $fromTerm): void
    {
        $target = DB::table('school_terms')->where('academic_year', $year)->where('term', $term)->first();
        $source = DB::table('school_terms')->where('academic_year', $fromYear)->where('term', $fromTerm)->first();
        if (! $target?->starts_on || ! $target?->ends_on || $target->starts_on <= $source->ends_on) {
            throw ValidationException::withMessages(['term' => 'Set the next term’s dates after the closing term’s end date.']);
        }
        if ($target->opened_at) {
            throw ValidationException::withMessages(['term' => 'The next term has already been opened.']);
        }
    }

    public static function open(string $year, string $term, string $fromYear, string $fromTerm, User $user): void
    {
        DB::table('school_terms')->where('academic_year', $fromYear)->where('term', $fromTerm)->update(['closed_at' => now(), 'updated_by' => $user->id]);
        DB::table('school_terms')->where('academic_year', $year)->where('term', $term)->update(['opened_at' => now(), 'updated_by' => $user->id]);
        DB::table('academic_state')->where('id', 1)->update(['current_year' => $year, 'current_term' => $term]);
    }

    public function advance(User $user, string $year, string $term): array
    {
        abort_unless(in_array($user->role, ['Director', 'Super Admin', 'School Manager']), 403);

        return DB::transaction(function () use ($user, $year, $term) {
            $state = DB::table('academic_state')->where('id', 1)->lockForUpdate()->first();
            if ($state->current_year !== $year || $state->current_term !== $term || ! in_array($term, ['Term 1', 'Term 2'])) {
                throw ValidationException::withMessages(['term' => 'Advance the active term only. Term 3 requires Director/Admin annual class promotion.']);
            }
            self::requireEnded($year, $term);
            $next = $term === 'Term 1' ? 'Term 2' : 'Term 3';
            self::requireTargetDates($year, $next, $year, $term);
            $all = self::roster($year, $term)->lockForUpdate()->get();
            if ($all->contains(fn ($s) => in_array($s->status, ['Pending', 'Pending Approval', 'Pending Edit Approval']))) {
                throw ValidationException::withMessages(['students' => 'Resolve pending admissions and student edits first.']);
            }
            $students = $all->whereIn('status', ['Active', 'Approved']);
            if ($students->isEmpty()) {
                throw ValidationException::withMessages(['students' => 'There are no active students to advance.']);
            }
            DB::table('term_transitions')->insert(['academic_year' => $year, 'from_term' => $term, 'to_term' => $next, 'approved_by' => $user->id, 'approved_at' => now()]);
            foreach ($students as $student) {
                self::enroll($student, $year, $next);
            }
            self::open($year, $next, $year, $term, $user);

            return ['academic_year' => $year, 'term' => $next, 'students' => $students->count()];
        });
    }
}
