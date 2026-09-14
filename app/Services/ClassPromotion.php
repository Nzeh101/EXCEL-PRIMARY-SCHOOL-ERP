<?php

namespace App\Services;

use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class ClassPromotion
{
    public static function sourceRoster(string $year)
    {
        return Student::join('student_enrollments as source', 'source.student_id', '=', 'students.id')
            ->where('source.academic_year', $year)->where('source.term', 'Term 3')
            ->select('students.*', 'source.class_name as source_class');
    }

    public function preview(string $from, array $retain, string $class): array
    {
        $state = AcademicPeriod::current();
        if ($from !== $state->current_year || $state->current_term !== 'Term 3') {
            throw ValidationException::withMessages(['from_year' => 'Select a class in the active year’s Term 3.']);
        }
        $classes = array_values(ClassWorkbook::CLASSES);
        if (! in_array($class, $classes, true)) throw ValidationException::withMessages(['class_name' => 'Select a valid class.']);
        $promotion = DB::table('class_promotions')->where('from_year', $from)->first();
        if ($promotion && DB::table('class_promotion_approvals')->where('promotion_id', $promotion->id)->where('class_name', $class)->exists()) {
            throw ValidationException::withMessages(['class_name' => 'This class has already been approved.']);
        }
        AcademicPeriod::requireEnded($from, 'Term 3');
        $start = (int) substr($from, 0, 4) + 1;
        $to = $start.' / '.($start + 1);
        if (! $promotion) AcademicPeriod::requireTargetDates($to, 'Term 1', $from, 'Term 3');
        else {
            $source = DB::table('school_terms')->where('academic_year', $from)->where('term', 'Term 3')->first();
            $target = DB::table('school_terms')->where('academic_year', $to)->where('term', 'Term 1')->first();
            if (! $target?->starts_on || ! $target?->ends_on || $target->starts_on <= $source->ends_on) {
                throw ValidationException::withMessages(['term' => 'Set valid next term dates after the closing term.']);
            }
        }
        foreach (self::sourceRoster($from)->where('students.status', 'Pending Edit Approval')->get() as $pending) {
            if (isset($pending->pending_changes['class_name']) && $pending->pending_changes['class_name'] !== $pending->source_class) {
                throw ValidationException::withMessages(['students' => 'Resolve pending class-placement changes before promoting classes.']);
            }
        }
        $roster = self::sourceRoster($from)->where('source.class_name', $class)->orderBy('students.id')->get();
        if ($roster->contains(fn ($s) => in_array($s->status, ['Pending', 'Pending Approval', 'Pending Edit Approval']))) {
            throw ValidationException::withMessages(['students' => 'Resolve pending admissions and edits in this class first.']);
        }
        $students = $roster->whereIn('status', ['Active', 'Approved']);
        if ($students->isEmpty()) throw ValidationException::withMessages(['students' => 'There are no active students in this class.']);
        if (array_diff($retain, $students->modelKeys())) throw ValidationException::withMessages(['retain' => 'Retained pupils must belong to the selected class.']);
        if (DB::table('class_promotion_students')->whereIn('student_id', $students->modelKeys())->whereIn('promotion_id', DB::table('class_promotions')->where('from_year', $from)->select('id'))->exists()) {
            throw ValidationException::withMessages(['class_name' => 'These students have already been processed.']);
        }
        $rows = $students->map(function ($student) use ($classes, $retain, $class) {
            $index = array_search($class, $classes, true);
            $held = in_array($student->id, $retain);
            return ['student_id' => $student->id, 'name' => $student->first_name.' '.$student->last_name, 'from_class' => $class,
                'to_class' => $held ? $class : ($classes[$index + 1] ?? 'Graduated'), 'outcome' => $held ? 'Retained' : ($index === 9 ? 'Graduated' : 'Promoted')];
        })->values()->all();
        return ['from_year' => $from, 'to_year' => $to, 'class_name' => $class, 'rows' => $rows,
            'token' => hash('sha256', json_encode([$from, $class, $rows, $students->toArray(), DB::table('school_terms')->orderBy('id')->get()->toArray()]))];
    }

    public function approve(User $user, string $from, array $retain, string $token, string $class): array
    {
        abort_unless(in_array($user->role, ['Director', 'Super Admin']), 403);
        return DB::transaction(function () use ($user, $from, $retain, $token, $class) {
            DB::table('academic_state')->where('id', 1)->lockForUpdate()->first();
            Student::orderBy('id')->lockForUpdate()->get();
            $preview = $this->preview($from, $retain, $class);
            if (! hash_equals($preview['token'], $token)) throw ValidationException::withMessages(['preview' => 'The roster changed. Preview this class again.']);
            $id = DB::table('class_promotions')->where('from_year', $from)->value('id');
            if (! $id) $id = DB::table('class_promotions')->insertGetId(['from_year' => $from, 'to_year' => $preview['to_year'], 'approved_by' => $user->id, 'approved_at' => now()]);
            foreach ($preview['rows'] as $row) {
                DB::table('class_promotion_students')->insert(['promotion_id' => $id, ...collect($row)->except('name')->all()]);
                $student = Student::findOrFail($row['student_id']);
                if ($row['outcome'] === 'Graduated') $student->update(['status' => 'Graduated']);
                else {
                    $type = in_array($row['to_class'], ['Nursery', 'Reception']) ? 'Preschool' : 'Primary';
                    $student->update(['academic_year' => $preview['to_year'], 'class_name' => $row['to_class'], 'student_type' => $type, 'tuition_fee' => $type === 'Preschool' ? 70000 : 75000]);
                    AcademicPeriod::enroll($student, $preview['to_year'], 'Term 1');
                }
            }
            DB::table('class_promotion_approvals')->insert(['promotion_id' => $id, 'class_name' => $class, 'approved_by' => $user->id, 'approved_at' => now(), 'student_count' => count($preview['rows'])]);
            DB::table('school_terms')->where('academic_year', $preview['to_year'])->where('term', 'Term 1')->whereNull('opened_at')->update(['opened_at' => now(), 'updated_by' => $user->id]);
            $remaining = self::sourceRoster($from)->whereIn('students.status', ['Active', 'Approved', 'Pending', 'Pending Approval', 'Pending Edit Approval'])
                ->whereNotIn('students.id', DB::table('class_promotion_students')->where('promotion_id', $id)->select('student_id'))->count();
            if (! $remaining) AcademicPeriod::open($preview['to_year'], 'Term 1', $from, 'Term 3', $user);
            return ['promotion_id' => $id, 'class_name' => $class, 'year_complete' => $remaining === 0, 'remaining_students' => $remaining, 'to_year' => $preview['to_year']];
        });
    }
    public function correct(User $user, int $rowId, bool $retain, string $expected): array
    {
        abort_unless(in_array($user->role, ['Director', 'Super Admin']), 403);
        return DB::transaction(function () use ($user, $rowId, $retain, $expected) {
            $state = DB::table('academic_state')->where('id', 1)->lockForUpdate()->first();
            $row = DB::table('class_promotion_students')->where('id', $rowId)->lockForUpdate()->first();
            abort_unless($row, 404);
            $promotion = DB::table('class_promotions')->where('id', $row->promotion_id)->first();
            abort_unless($state->current_year === $promotion->from_year && $state->current_term === 'Term 3', 409, 'All classes are complete; this promotion can no longer be edited.');
            abort_unless($row->outcome === $expected, 409, 'This decision changed. Reload before editing.');
            $student = Student::whereKey($row->student_id)->lockForUpdate()->firstOrFail();
            abort_if(in_array($student->status, ['Pending Approval','Pending Edit Approval']), 409, 'Resolve the pending student changes first.');
            $classes = array_values(ClassWorkbook::CLASSES);
            $index = array_search($row->from_class, $classes, true);
            abort_if($index === false, 422, 'Unknown original class.');
            $target = $retain ? $row->from_class : ($classes[$index + 1] ?? 'Graduated');
            $outcome = $retain ? 'Retained' : ($target === 'Graduated' ? 'Graduated' : 'Promoted');
            if ($row->outcome === $outcome) return ['ok' => true];
            $balances = \App\Models\FeeBalance::where('student_id', $student->id)->where('academic_year', $promotion->to_year)->where('term', 'Term 1');
            if ($target === 'Graduated') {
                abort_if(\App\Models\Payment::where('student_id', $student->id)->where('academic_year', $promotion->to_year)->exists() || (clone $balances)->where('amount_paid','>',0)->exists(), 409, 'Payments exist in the new year. Reconcile them before graduating this pupil.');
                $balances->delete();
                DB::table('student_enrollments')->where('student_id',$student->id)->where('academic_year',$promotion->to_year)->where('term','Term 1')->delete();
                $student->update(['academic_year'=>$promotion->from_year,'class_name'=>$row->from_class,'status'=>'Graduated']);
            } else {
                $type = in_array($target,['Nursery','Reception']) ? 'Preschool' : 'Primary';
                $due = $type === 'Preschool' ? 70000 : 75000;
                $tuition = (clone $balances)->where('fee_type','Tuition Fee')->first();
                $reserved=\App\Models\Payment::where('student_id',$student->id)->where('academic_year',$promotion->to_year)->where('term','Term 1')->where('fee_type','Tuition Fee')->where('status','Pending Approval')->sum('amount');
                abort_if(($tuition?->amount_paid ?? 0)+$reserved>$due,409,'Tuition payments exceed the corrected charge. Reconcile them first.');
                $student->update(['academic_year'=>$promotion->to_year,'class_name'=>$target,'student_type'=>$type,'tuition_fee'=>$due,'status'=>$student->status==='Graduated'?'Approved':$student->status]);
                AcademicPeriod::enroll($student,$promotion->to_year,'Term 1');
                DB::table('student_enrollments')->where('student_id',$student->id)->where('academic_year',$promotion->to_year)->where('term','Term 1')->update(['class_name'=>$target,'student_type'=>$type,'status'=>$student->status,'updated_at'=>now()]);
                if ($tuition) $tuition->update(['amount_due'=>$due,'balance'=>$due-$tuition->amount_paid,'status'=>$due===$tuition->amount_paid?'Cleared':($tuition->amount_paid?'Partial':'Unpaid')]);
            }
            DB::table('promotion_corrections')->insert(['promotion_student_id'=>$rowId,'changed_by'=>$user->id,'before_class'=>$row->to_class,'after_class'=>$target,'before_outcome'=>$row->outcome,'after_outcome'=>$outcome,'changed_at'=>now()]);
            DB::table('class_promotion_students')->where('id',$rowId)->update(['to_class'=>$target,'outcome'=>$outcome]);
            return ['ok'=>true];
        });
    }

}
