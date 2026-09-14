<?php

namespace App\Services;

use App\Models\FeeBalance;
use App\Models\Payment;
use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class FeeCollection
{
    public const TYPES = ['Tuition Fee', 'Uniform Fee', 'School Bus Fee', 'Trip Fee'];

    private function balance(Student $student, string $year, string $term, string $type): FeeBalance
    {
        $enrollment = DB::table('student_enrollments')->where('student_id', $student->id)->where('academic_year', $year)->where('term', $term)->first();
        $opened = DB::table('school_terms')->where('academic_year', $year)->where('term', $term)->value('opened_at');
        if (! $enrollment || ! $opened) {
            throw ValidationException::withMessages(['student_id' => 'This student is not enrolled in the selected year and term.']);
        }
        $due = match ($type) {
            'Tuition Fee' => $enrollment->student_type === 'Preschool' ? 70000 : 75000, 'Uniform Fee' => 40000, default => 0
        };
        $balance = erpEnsureFeeBalance($student, $type, $term, $year, $due);

        return FeeBalance::whereKey($balance->id)->lockForUpdate()->firstOrFail();
    }

    private function post(FeeBalance $balance, int $amount, string $type): void
    {
        $flexible = in_array($type, ['School Bus Fee', 'Trip Fee']);
        if (! $flexible && $amount > $balance->balance) {
            throw ValidationException::withMessages(['amount' => 'The amount exceeds the remaining fee balance of MWK '.number_format($balance->balance).'.']);
        }
        $due = (int) $balance->amount_due + ($flexible ? $amount : 0);
        $paid = (int) $balance->amount_paid + $amount;
        $balance->update(['amount_due' => $due, 'amount_paid' => $paid, 'balance' => max(0, $due - $paid), 'status' => $due === $paid ? 'Cleared' : 'Partial']);
    }

    public function collect(User $user, array $data): Payment
    {
        abort_unless(in_array($user->role, ['Director', 'Super Admin', 'School Manager']), 403);

        return DB::transaction(function () use ($user, $data) {
            DB::table('academic_state')->where('id', 1)->lockForUpdate()->first();
            $student = Student::findOrFail($data['student_id']);
            $balance = $this->balance($student, $data['academic_year'], $data['term'], $data['fee_type']);
            if (in_array($data['fee_type'], ['Tuition Fee', 'Uniform Fee'])) {
                $reserved = Payment::where('student_id', $student->id)->where('academic_year', $data['academic_year'])->where('term', $data['term'])->where('fee_type', $data['fee_type'])->where('status', 'Pending Approval')->sum('amount');
                if ($data['amount'] > $balance->balance - $reserved) {
                    throw ValidationException::withMessages(['amount' => 'The amount exceeds the remaining fee after pending payments.']);
                }
            }
            $approved = in_array($user->role, ['Director', 'Super Admin']);
            if ($approved) {
                $this->post($balance, $data['amount'], $data['fee_type']);
            }

            return Payment::create(['student_id' => $student->id, 'receipt_no' => 'RCPT-'.now()->format('ymd').'-'.strtoupper(Str::random(10)), 'fee_type' => $data['fee_type'], 'academic_year' => $data['academic_year'], 'term' => $data['term'], 'amount' => $data['amount'], 'balance_after' => $balance->balance, 'method' => $data['method'], 'status' => $approved ? 'Paid' : 'Pending Approval', 'created_by_role' => $user->role, 'approved_by_role' => $approved ? $user->role : null, 'approved_at' => $approved ? now() : null, 'paid_at' => now(), 'notes' => $data['notes'] ?? null])->load('student');
        });
    }

    public function approve(User $user, Payment $payment): Payment
    {
        abort_unless(in_array($user->role, ['Director', 'Super Admin']), 403);

        return DB::transaction(function () use ($user, $payment) {
            DB::table('academic_state')->where('id', 1)->lockForUpdate()->first();
            $payment = Payment::whereKey($payment->id)->lockForUpdate()->firstOrFail();
            if ($payment->status !== 'Pending Approval') {
                return $payment->load('student');
            }
            $balance = $this->balance($payment->student, $payment->academic_year, $payment->term, $payment->fee_type);
            $this->post($balance, $payment->amount, $payment->fee_type);
            $payment->update(['balance_after' => $balance->balance, 'status' => 'Paid', 'approved_by_role' => $user->role, 'approved_at' => now()]);

            return $payment->fresh('student');
        });
    }
}
