<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration {
    public function up(): void {
        Schema::create('promotion_corrections', function(Blueprint $t) {
            $t->id();$t->foreignId('promotion_student_id')->constrained('class_promotion_students');
            $t->foreignId('changed_by')->constrained('users');$t->string('before_class');$t->string('after_class');
            $t->string('before_outcome');$t->string('after_outcome');$t->timestamp('changed_at');
        });
    }
    public function down(): void {Schema::dropIfExists('promotion_corrections');}
};
