<?php

namespace App\Services;

use App\Models\FeeBalance;
use App\Models\Guardian;
use App\Models\Message;
use App\Models\Payment;
use App\Models\SchoolNotification;
use App\Models\Student;
use Illuminate\Support\Facades\DB;

class PeriodData
{
    public function bootstrap(string $year, string $term, bool $compact = false): array
    {
        $enrollments = DB::table('student_enrollments')->where('academic_year', $year)->where('term', $term)->get()->keyBy('student_id');
        $students = Student::with(['guardian', 'feeBalances' => fn ($q) => $q->where('academic_year', $year)->where('term', $term)])->whereIn('id', $enrollments->keys())->orderBy('last_name')->orderBy('first_name')->get();
        foreach ($students as $student) {
            $snapshot = $enrollments[$student->id];
            $student->class_name = $snapshot->class_name;
            $student->student_type = $snapshot->student_type;
            $student->academic_year = $year;
            $student->status = in_array($student->status, ['Pending Approval', 'Pending Edit Approval']) ? $student->status : $snapshot->status;
        }
        $byId = $students->keyBy('id');
        $payments = Payment::where('academic_year', $year)->where('term', $term)->whereIn('student_id', $byId->keys())->latest('paid_at')->get();
        $balances = FeeBalance::where('academic_year', $year)->where('term', $term)->whereIn('student_id', $byId->keys())->get();
        // Relations use the class in the selected period, never the student's later promoted class.
        foreach ($payments as $payment) {
            $payment->setRelation('student', $byId[$payment->student_id]->withoutRelations());
        }
        foreach ($balances as $balance) {
            $balance->setRelation('student', $byId[$balance->student_id]->withoutRelations());
        }
        $guardians = Guardian::whereIn('student_id', $byId->keys())->get();
        foreach ($guardians as $guardian) {
            $guardian->setRelation('student', $byId[$guardian->student_id]->withoutRelations());
        }
        $paid = $payments->where('status', 'Paid');
        $total = (int) $paid->sum('amount');
        $due = (int) $balances->sum('amount_due');
        $outstanding = (int) $balances->sum('balance');
        $today = (int) $paid->filter(fn ($p) => $p->paid_at?->isToday())->sum('amount');
        $finance = [
            'kpis' => ['fees_collected' => $total, 'pending_fees' => $outstanding, 'overdue_payments' => $outstanding, 'payments_today' => $today, 'arrears_count' => $balances->where('balance', '>', 0)->unique('student_id')->count(), 'collection_rate' => $due ? round(($due - $outstanding) / $due * 100) : 0],
            'collection_activity' => $paid->groupBy('method')->map(fn ($items, $method) => ['label' => $method, 'value' => $items->sum('amount'), 'count' => $items->count(), 'percent' => round($items->sum('amount') / max(1, $total) * 100), 'tone' => 'green'])->values(),
            'fee_type_progress' => $balances->groupBy('fee_type')->map(fn ($items, $type) => ['title' => $type, 'amount_due' => $items->sum('amount_due'), 'amount_paid' => $items->sum('amount_paid'), 'percent' => round($items->sum('amount_paid') / max(1, $items->sum('amount_due')) * 100), 'tone' => 'green'])->values(),
            'daily_collections' => $paid->filter(fn ($p) => $p->paid_at)->groupBy(fn ($p) => $p->paid_at->toDateString())->map(fn ($items, $date) => ['date' => $date, 'total' => $items->sum('amount'), 'count' => $items->count()])->values(),
            'top_arrears' => $balances->where('balance', '>', 0)->sortByDesc('balance')->take(6)->values(), 'recent_payments' => $paid->take(8)->values(), 'notices' => [],
        ];

        $result = [...ApprovalInbox::data(request()->user()), 'students' => $students, 'guardians' => $guardians, 'payments' => $payments, 'balances' => $balances,
            'admission_follow_ups' => $students->filter(fn ($s) => ! $s->guardian || ! $s->guardian->phone)->values(),
            'messages' => Message::orderBy('sent_at')->limit(80)->get(),
            'finance_dashboard' => $finance, 'stats' => ['students' => $students->count(), 'guardians' => $guardians->count(), 'payments_total' => $total, 'payments_today' => $today, 'balances_due' => $due, 'balances_outstanding' => $outstanding,
                'pending_notifications' => SchoolNotification::whereNull('read_at')->count(), 'pending_admissions' => $students->whereIn('status', ['Pending Approval', 'Pending Edit Approval'])->count(), 'pending_payments' => $payments->where('status', 'Pending Approval')->count()],
            'user_role' => request()->user()->role, 'academic_year' => $year, 'term' => $term, 'current_year' => AcademicPeriod::current()->current_year, 'current_term' => AcademicPeriod::current()->current_term,
            'period_opened' => (bool) DB::table('school_terms')->where('academic_year', $year)->where('term', $term)->value('opened_at'), 'server_date' => now()->toDateString()];
        if (! $compact) return $result;

        // Send each student once; clients restore relations from the selected-period roster.
        $result = json_decode(json_encode($result, JSON_THROW_ON_ERROR), true, 512, JSON_THROW_ON_ERROR);
        $pack = function (array $value) use (&$pack): array {
            foreach ($value as $key => $item) {
                if ($key === 'student' && is_array($item) && isset($item['id'])) {
                    $value[$key] = ['student_ref' => $item['id']];
                } elseif (is_array($item)) {
                    $value[$key] = $pack($item);
                }
            }
            return $value;
        };
        $result = $pack($result);
        $result['admission_follow_ups'] = array_map(fn ($student) => ['student_ref' => $student['id']], $result['admission_follow_ups']);
        $result['compact'] = true;
        return $result;
    }
}
