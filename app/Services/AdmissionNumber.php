<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class AdmissionNumber
{
    /** Call inside the transaction that inserts the student. Numbers are never reused. */
    public static function next(int $year): string
    {
        DB::table('admission_sequences')->insertOrIgnore(['year' => $year, 'last_number' => 0]);
        $sequence = DB::table('admission_sequences')->where('year', $year)->lockForUpdate()->first();
        $next = $sequence->last_number + 1;
        while (DB::table('students')->where('admission_no', sprintf('EPS-%d-%04d', $year, $next))->exists()) {
            $next++;
        }
        DB::table('admission_sequences')->where('year', $year)->update(['last_number' => $next]);

        return sprintf('EPS-%d-%04d', $year, $next);
    }
}
