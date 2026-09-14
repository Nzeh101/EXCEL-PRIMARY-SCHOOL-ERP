<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('academic_state', function (Blueprint $table) {
            $table->string('current_term')->default('Term 3');
        });
        Schema::table('students', function (Blueprint $table) {
            $table->unsignedInteger('admission_year')->nullable();
        });
        Schema::create('admission_sequences', function (Blueprint $table) {
            $table->unsignedInteger('year')->primary();
            $table->unsignedInteger('last_number')->default(0);
        });
        Schema::create('school_terms', function (Blueprint $table) {
            $table->id();
            $table->string('academic_year');
            $table->string('term');
            $table->date('starts_on')->nullable();
            $table->date('ends_on')->nullable();
            $table->timestamp('opened_at')->nullable();
            $table->timestamp('closed_at')->nullable();
            $table->foreignId('updated_by')->nullable()->constrained('users');
            $table->unique(['academic_year', 'term']);
        });
        Schema::create('student_enrollments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained();
            $table->string('academic_year');
            $table->string('term');
            $table->string('class_name');
            $table->string('student_type');
            $table->string('status');
            $table->timestamps();
            $table->unique(['student_id', 'academic_year', 'term']);
        });
        Schema::create('term_transitions', function (Blueprint $table) {
            $table->id();
            $table->string('academic_year');
            $table->string('from_term');
            $table->string('to_term');
            $table->foreignId('approved_by')->constrained('users');
            $table->timestamp('approved_at');
            $table->unique(['academic_year', 'from_term']);
        });
        $current = DB::table('academic_state')->where('id', 1)->value('current_year');
        foreach (DB::table('students')->get() as $student) {
            if (preg_match('/^EPS-(\d{4})-(\d+)$/', $student->admission_no ?? '', $match)) {
                DB::table('admission_sequences')->updateOrInsert(['year' => (int) $match[1]], ['last_number' => max((int) $match[2], (int) DB::table('admission_sequences')->where('year', $match[1])->value('last_number'))]);
                DB::table('students')->where('id', $student->id)->update(['admission_year' => (int) $match[1]]);
            }
        }
        foreach (DB::table('students')->where('admission_no', 'like', 'EPS-IMP-%')->orderBy('id')->get() as $student) {
            // The owner explicitly selected 2025 for imported pupils whose admission dates are unavailable.
            DB::table('admission_sequences')->insertOrIgnore(['year' => 2025, 'last_number' => 0]);
            DB::table('admission_sequences')->where('year', 2025)->increment('last_number');
            $number = DB::table('admission_sequences')->where('year', 2025)->value('last_number');
            DB::table('students')->where('id', $student->id)->update(['admission_no' => sprintf('EPS-2025-%04d', $number), 'admission_year' => 2025]);
        }
        foreach (DB::table('students')->whereNotNull('academic_year')->get() as $student) {
            $periods = DB::table('register_entries')->join('register_imports', 'register_imports.id', '=', 'register_entries.import_id')->where('student_id', $student->id)->select('academic_year', 'term')->get();
            if ($periods->isEmpty()) {
                $periods = collect([(object) ['academic_year' => $student->academic_year, 'term' => 'Term 3']]);
            }
            foreach ($periods as $period) {
                DB::table('student_enrollments')->insertOrIgnore(['student_id' => $student->id, 'academic_year' => $period->academic_year, 'term' => $period->term, 'class_name' => $student->class_name, 'student_type' => $student->student_type, 'status' => $student->status, 'created_at' => now(), 'updated_at' => now()]);
                DB::table('school_terms')->insertOrIgnore(['academic_year' => $period->academic_year, 'term' => $period->term, 'opened_at' => now()]);
            }
            DB::table('students')->where('id', $student->id)->update(['tuition_fee' => $student->student_type === 'Preschool' ? 70000 : 75000]);
        }
        foreach (['users' => 'role', 'students' => 'created_by_role', 'school_notifications' => 'target_role', 'payments' => 'created_by_role', 'messages' => 'role'] as $table => $column) {
            DB::table($table)->where($column, 'Finance Officer')->update([$column => 'School Manager']);
        }
        DB::table('users')->where('name', 'Finance Officer')->update(['name' => 'School Manager']);
        DB::table('students')->where('pending_change_requested_by', 'Finance Officer')->update(['pending_change_requested_by' => 'School Manager']);
        DB::table('payments')->where('approved_by_role', 'Finance Officer')->update(['approved_by_role' => 'School Manager']);
    }

    public function down(): void
    {
        Schema::dropIfExists('term_transitions');
        Schema::dropIfExists('student_enrollments');
        Schema::dropIfExists('school_terms');
        Schema::dropIfExists('admission_sequences');
        Schema::table('students', function (Blueprint $table) {
            $table->dropColumn('admission_year');
        });
        Schema::table('academic_state', function (Blueprint $table) {
            $table->dropColumn('current_term');
        });
        // Permanent admission identifiers intentionally remain unchanged.
    }
};
