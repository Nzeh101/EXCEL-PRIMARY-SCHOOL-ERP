<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration {
    public function up(): void {
        Schema::table('users', fn(Blueprint $t) => $t->boolean('email_notifications')->default(false));
        Schema::create('school_year_resets', function(Blueprint $t) {
            $t->id(); $t->string('academic_year')->unique(); $t->foreignId('performed_by')->constrained('users');
            $t->string('backup_path'); $t->json('summary'); $t->timestamp('performed_at');
        });
    }
    public function down(): void {
        Schema::dropIfExists('school_year_resets');
        Schema::table('users', fn(Blueprint $t) => $t->dropColumn('email_notifications'));
    }
};
