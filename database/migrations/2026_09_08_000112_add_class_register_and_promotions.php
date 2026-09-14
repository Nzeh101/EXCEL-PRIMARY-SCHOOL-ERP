<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->nullable();
        });
        foreach (['admin' => 'Super Admin', 'director' => 'Director', 'admissions' => 'Admissions Officer', 'finance' => 'Finance Officer', 'exams' => 'Exams Officer', 'teacher' => 'Teacher'] as $account => $role) {
            DB::table('users')->where('email', $account.'@excelprimaryschool.org')->update(['role' => $role]);
        }
        Schema::create('register_imports', function (Blueprint $table) {
            $table->id();
            $table->string('checksum')->unique();
            $table->string('source');
            $table->string('academic_year');
            $table->string('term');
            $table->json('summary');
            $table->timestamps();
        });
        Schema::create('register_entries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('import_id')->constrained('register_imports');
            $table->foreignId('student_id')->constrained();
            $table->string('sheet');
            $table->integer('source_row');
            $table->json('cells');
            $table->json('issues');
            $table->unique(['import_id', 'sheet', 'source_row']);
        });
        Schema::create('academic_state', function (Blueprint $table) {
            $table->id();
            $table->string('current_year')->nullable();
        });
        DB::table('academic_state')->insert(['id' => 1, 'current_year' => null]);
        Schema::create('class_promotions', function (Blueprint $table) {
            $table->id();
            $table->string('from_year')->unique();
            $table->string('to_year')->unique();
            $table->foreignId('approved_by')->constrained('users');
            $table->timestamp('approved_at');
        });
        Schema::create('class_promotion_students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('promotion_id')->constrained('class_promotions');
            $table->foreignId('student_id')->constrained();
            $table->string('from_class');
            $table->string('to_class');
            $table->string('outcome');
            $table->unique(['promotion_id', 'student_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('class_promotion_students');
        Schema::dropIfExists('class_promotions');
        Schema::dropIfExists('academic_state');
        Schema::dropIfExists('register_entries');
        Schema::dropIfExists('register_imports');
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role');
        });
    }
};
