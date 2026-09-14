<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class StandardizeImportedTuition extends Command
{
    protected $signature = 'school:standardize-imported-tuition {--apply}';
    protected $description = 'Apply standard tuition to imported periods, preserving payment amounts and original source cells.';

    public function handle(): int
    {
        $entries = DB::table('register_entries')->join('register_imports', 'register_imports.id', '=', 'register_entries.import_id')
            ->join('student_enrollments', function ($join) {
                $join->on('student_enrollments.student_id', '=', 'register_entries.student_id')->on('student_enrollments.academic_year', '=', 'register_imports.academic_year')->on('student_enrollments.term', '=', 'register_imports.term');
            })->select('register_entries.*', 'register_imports.academic_year', 'register_imports.term', 'student_enrollments.student_type')->get();
        $this->info($entries->count().' imported tuition assessments: preschool 70,000 / primary 75,000. Payment amounts and source cells remain unchanged.');
        if (! $this->option('apply')) return self::SUCCESS;
        DB::transaction(function () use ($entries) {
            foreach ($entries as $entry) {
                $due = $entry->student_type === 'Preschool' ? 70000 : 75000;
                $payments = DB::table('payments')->where('student_id', $entry->student_id)->where('academic_year', $entry->academic_year)->where('term', $entry->term)->where('fee_type', 'Tuition Fee')->orderBy('id')->get();
                $paid = 0;
                foreach ($payments as $payment) {
                    if ($payment->status === 'Paid') $paid += $payment->amount;
                    $changes = ['balance_after' => max(0, $due - $paid)];
                    if (! $payment->paid_at && str_starts_with($payment->receipt_no, 'IMP-')) {
                        // Reporting-only allocation; paid_at remains unknown. Never print this as an actual receipt date.
                        $installment = max(1, min(3, (int) substr($payment->receipt_no, strrpos($payment->receipt_no, '-') + 1)));
                        $term = DB::table('school_terms')->where('academic_year', $entry->academic_year)->where('term', $entry->term)->first();
                        $start = \Carbon\Carbon::parse($term?->starts_on ?: substr($entry->academic_year, -4).'-05-01');
                        $end = \Carbon\Carbon::parse($term?->ends_on ?: substr($entry->academic_year, -4).'-07-31');
                        $changes['reporting_date'] = $start->copy()->addDays((int) floor($start->diffInDays($end) * ($installment - 1) / 2))->toDateString();
                    }
                    DB::table('payments')->where('id', $payment->id)->update($changes);
                }
                $remaining = max(0, $due - $paid);
                DB::table('fee_balances')->updateOrInsert(['student_id' => $entry->student_id, 'academic_year' => $entry->academic_year, 'term' => $entry->term, 'fee_type' => 'Tuition Fee'], ['amount_due' => $due, 'amount_paid' => $paid, 'balance' => $remaining, 'status' => $remaining === 0 ? 'Cleared' : ($paid > 0 ? 'Partial' : 'Unpaid'), 'updated_at' => now()]);
            }
        });
        $this->info('Updated tuition and running balances. Missing import dates allocated across the configured term for charts only. Source rows requiring payment reconciliation remain flagged.');
        return self::SUCCESS;
    }
}
