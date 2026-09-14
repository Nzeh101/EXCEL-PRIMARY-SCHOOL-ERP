<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('students')->update(['section' => null]);
    }

    public function down(): void
    {
        // Sections are intentionally not restored because the school no longer uses them.
    }
};
