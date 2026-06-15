<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('admission_no')->unique()->nullable();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('class_name');
            $table->string('section')->nullable();
            $table->string('roll_no')->nullable();
            $table->string('gender')->nullable();
            $table->date('joined_on')->nullable();
            $table->string('status')->default('Active');
            $table->string('created_by_role')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
