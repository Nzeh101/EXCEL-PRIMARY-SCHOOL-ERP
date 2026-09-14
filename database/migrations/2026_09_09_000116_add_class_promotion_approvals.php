<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('class_promotion_approvals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('promotion_id')->constrained('class_promotions');
            $table->string('class_name');
            $table->foreignId('approved_by')->constrained('users');
            $table->timestamp('approved_at');
            $table->unsignedInteger('student_count');
            $table->unique(['promotion_id', 'class_name']);
        });
    }
    public function down(): void { Schema::dropIfExists('class_promotion_approvals'); }
};
