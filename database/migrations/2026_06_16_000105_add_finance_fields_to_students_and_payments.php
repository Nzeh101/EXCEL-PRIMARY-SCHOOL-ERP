<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('students', function (Blueprint $table) {
            $table->string('student_type')->default('Day Scholar')->after('section');
            $table->unsignedInteger('tuition_fee')->default(120000)->after('student_type');
        });

        Schema::table('payments', function (Blueprint $table) {
            $table->string('academic_year')->nullable()->after('fee_type');
            $table->string('term')->nullable()->after('academic_year');
            $table->unsignedInteger('balance_after')->default(0)->after('amount');
        });
    }

    public function down(): void
    {
        Schema::table('payments', function (Blueprint $table) {
            $table->dropColumn(['academic_year', 'term', 'balance_after']);
        });

        Schema::table('students', function (Blueprint $table) {
            $table->dropColumn(['student_type', 'tuition_fee']);
        });
    }
};
