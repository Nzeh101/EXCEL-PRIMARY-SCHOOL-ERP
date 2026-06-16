<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('fee_balances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained()->cascadeOnDelete();
            $table->string('academic_year');
            $table->string('term');
            $table->string('fee_type');
            $table->unsignedInteger('amount_due')->default(0);
            $table->unsignedInteger('amount_paid')->default(0);
            $table->unsignedInteger('balance')->default(0);
            $table->string('status')->default('Unpaid');
            $table->timestamps();
            $table->unique(['student_id', 'academic_year', 'term', 'fee_type'], 'fee_balances_unique_scope');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fee_balances');
    }
};
