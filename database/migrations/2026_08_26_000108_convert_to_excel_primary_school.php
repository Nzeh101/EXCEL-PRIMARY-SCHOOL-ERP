<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('users')->where('email', 'like', '%@hillside.edu')->get()->each(function ($user) {
            DB::table('users')->where('id', $user->id)->update(['email' => str_replace('@hillside.edu', '@excelprimaryschool.org', $user->email)]);
        });
        DB::table('students')->orderBy('id')->each(function ($student) {
            $className = preg_replace('/^Form\s+/', 'Standard ', $student->class_name);
            $type = in_array($className, ['Nursery', 'Reception'], true) ? 'Preschool' : 'Primary';
            $fee = $type === 'Preschool' ? 70000 : 75000;
            DB::table('students')->where('id', $student->id)->update([
                'admission_no' => str_replace(['HSS-', 'ADM-'], 'EPS-', $student->admission_no),
                'class_name' => $className,
                'student_type' => $type,
                'tuition_fee' => $fee,
            ]);
            DB::table('fee_balances')->where('student_id', $student->id)->where('fee_type', 'Tuition Fee')->get()->each(function ($balance) use ($fee) {
                $remaining = max(0, $fee - (int) $balance->amount_paid);
                DB::table('fee_balances')->where('id', $balance->id)->update([
                    'amount_due' => $fee,
                    'balance' => $remaining,
                    'status' => $remaining === 0 ? 'Cleared' : ((int) $balance->amount_paid > 0 ? 'Partial' : 'Unpaid'),
                ]);
            });
        });
    }

    public function down(): void
    {
        // School conversion is intentionally not reversed because new Excel records may exist.
    }
};
