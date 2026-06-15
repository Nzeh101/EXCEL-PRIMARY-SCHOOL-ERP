<?php

use App\Models\Guardian;
use App\Models\Message;
use App\Models\Payment;
use App\Models\SchoolNotification;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('erp');
});

Route::prefix('erp-api')->group(function () {
    Route::get('/bootstrap', function () {
        $students = Student::query()
            ->with('guardian')
            ->latest()
            ->limit(50)
            ->get();

        $guardians = Guardian::query()
            ->with('student')
            ->latest()
            ->limit(50)
            ->get();

        $payments = Payment::query()
            ->with('student')
            ->latest('paid_at')
            ->limit(50)
            ->get();

        $notifications = SchoolNotification::query()
            ->latest()
            ->limit(8)
            ->get();

        $messages = Message::query()
            ->orderBy('sent_at')
            ->limit(80)
            ->get();

        return response()->json([
            'students' => $students,
            'guardians' => $guardians,
            'payments' => $payments,
            'notifications' => $notifications,
            'messages' => $messages,
            'stats' => [
                'students' => Student::count(),
                'guardians' => Guardian::count(),
                'payments_total' => Payment::sum('amount'),
                'payments_today' => Payment::query()->whereDate('paid_at', now()->toDateString())->sum('amount'),
                'pending_notifications' => SchoolNotification::query()->whereNull('read_at')->count(),
            ],
            'server_date' => now()->toDateString(),
        ]);
    });

    Route::post('/students', function (Request $request) {
        $data = $request->validate([
            'first_name' => ['required', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'class_name' => ['required', 'string', 'max:40'],
            'section' => ['nullable', 'string', 'max:20'],
            'gender' => ['nullable', 'string', 'max:30'],
            'joined_on' => ['nullable', 'date'],
            'guardian_name' => ['required', 'string', 'max:160'],
            'guardian_email' => ['nullable', 'email', 'max:160'],
            'guardian_phone' => ['nullable', 'string', 'max:60'],
            'created_by_role' => ['nullable', 'string', 'max:80'],
        ]);

        $student = DB::transaction(function () use ($data) {
            $student = Student::create([
                'admission_no' => 'ADM-' . now()->format('Y') . '-' . str_pad((string) (Student::count() + 1), 4, '0', STR_PAD_LEFT),
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'class_name' => $data['class_name'],
                'section' => $data['section'] ?? null,
                'gender' => $data['gender'] ?? null,
                'joined_on' => $data['joined_on'] ?? now()->toDateString(),
                'status' => 'Submitted',
                'created_by_role' => $data['created_by_role'] ?? null,
            ]);

            Guardian::create([
                'student_id' => $student->id,
                'name' => $data['guardian_name'],
                'email' => $data['guardian_email'] ?? null,
                'phone' => $data['guardian_phone'] ?? null,
            ]);

            SchoolNotification::create([
                'title' => 'New admission received',
                'body' => $student->first_name . ' ' . $student->last_name . ' has been registered for ' . $student->class_name . '.',
                'type' => 'success',
                'target_role' => 'Admissions Officer',
            ]);

            return $student->load('guardian');
        });

        return response()->json(['student' => $student], 201);
    });

    Route::post('/payments', function (Request $request) {
        $data = $request->validate([
            'student_id' => ['nullable', 'exists:students,id'],
            'fee_type' => ['required', 'string', 'max:100'],
            'amount' => ['required', 'integer', 'min:1'],
            'method' => ['required', 'string', 'max:80'],
            'status' => ['nullable', 'string', 'max:40'],
            'notes' => ['nullable', 'string', 'max:500'],
        ]);

        $payment = Payment::create([
            'student_id' => $data['student_id'] ?? Student::query()->value('id'),
            'receipt_no' => 'RCPT-' . now()->format('ymd') . '-' . str_pad((string) (Payment::count() + 1), 4, '0', STR_PAD_LEFT),
            'fee_type' => $data['fee_type'],
            'amount' => $data['amount'],
            'method' => $data['method'],
            'status' => $data['status'] ?? 'Paid',
            'paid_at' => now(),
            'notes' => $data['notes'] ?? null,
        ])->load('student');

        SchoolNotification::create([
            'title' => 'Payment recorded',
            'body' => ($payment->student?->first_name ?? 'A student') . ' paid MWK ' . number_format($payment->amount) . ' for ' . $payment->fee_type . '.',
            'type' => 'success',
            'target_role' => 'Finance Officer',
        ]);

        return response()->json(['payment' => $payment], 201);
    });

    Route::post('/messages', function (Request $request) {
        $data = $request->validate([
            'contact_name' => ['required', 'string', 'max:120'],
            'body' => ['required', 'string', 'max:1000'],
            'role' => ['nullable', 'string', 'max:80'],
        ]);

        $message = Message::create([
            'contact_name' => $data['contact_name'],
            'direction' => 'out',
            'body' => $data['body'],
            'sent_at' => now(),
            'role' => $data['role'] ?? null,
        ]);

        return response()->json(['message' => $message], 201);
    });

    Route::patch('/notifications/{schoolNotification}/read', function (SchoolNotification $schoolNotification) {
        $schoolNotification->update(['read_at' => now()]);

        return response()->json(['notification' => $schoolNotification]);
    });
});

Route::get('/{any}', function () {
    return view('erp');
})->where('any', '.*');
