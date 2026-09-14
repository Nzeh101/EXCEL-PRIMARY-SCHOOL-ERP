<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('payments', function (Blueprint $table) {
            $table->string('created_by_role')->nullable()->after('status');
            $table->string('approved_by_role')->nullable()->after('created_by_role');
            $table->timestamp('approved_at')->nullable()->after('approved_by_role');
        });
    }

    public function down(): void
    {
        Schema::table('payments', fn (Blueprint $table) => $table->dropColumn(['created_by_role', 'approved_by_role', 'approved_at']));
    }
};
