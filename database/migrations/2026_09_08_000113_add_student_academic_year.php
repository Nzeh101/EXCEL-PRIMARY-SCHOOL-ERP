<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('students', function (Blueprint $table) {
            $table->string('academic_year')->nullable()->index();
        });
        foreach (DB::table('register_imports')->get() as $import) {
            DB::table('students')->whereIn('id', DB::table('register_entries')->where('import_id', $import->id)->select('student_id'))->update(['academic_year' => $import->academic_year]);
        }
    }

    public function down(): void
    {
        Schema::table('students', function (Blueprint $table) {
            $table->dropColumn('academic_year');
        });
    }
};
