<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('students', function (Blueprint $table) {
            $table->json('pending_changes')->nullable()->after('created_by_role');
            $table->string('pending_change_requested_by')->nullable()->after('pending_changes');
        });
    }

    public function down(): void
    {
        Schema::table('students', function (Blueprint $table) {
            $table->dropColumn(['pending_changes', 'pending_change_requested_by']);
        });
    }
};
