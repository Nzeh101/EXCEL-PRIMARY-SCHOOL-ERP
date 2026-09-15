<?php

use App\Models\Guardian;
use App\Models\FeeBalance;
use App\Models\Message;
use App\Models\Payment;
use App\Models\SchoolNotification;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;

require_once app_path('Services/erp_helpers.php');

Route::get('/', function () {
    return response()
        ->view('erp')
        ->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        ->header('Pragma', 'no-cache');
});

Route::prefix('erp-api')->middleware(\App\Http\Middleware\RequireErpLogin::class)->group(function () {
    Route::get('/inbox', fn (Request $request) => \App\Services\ApprovalInbox::data($request->user()));

    Route::post('/notifications/mark-read', function (Request $request) {
        $ids = $request->validate(['ids' => ['required', 'array'], 'ids.*' => ['integer']])['ids'];
        \App\Services\ApprovalInbox::notices($request->user())->whereIn('id', $ids)->whereNull('read_at')->update(['read_at' => now()]);

        return response()->json(['ok' => true, 'unread' => \App\Services\ApprovalInbox::notices($request->user())->whereNull('read_at')->count()]);
    });

    Route::get('/bootstrap', function (Request $request, \App\Services\PeriodData $data) {
        $period = erpSelectedPeriod($request);
        return $data->bootstrap($period['academic_year'], $period['term'], $request->boolean('compact'));
    });

    Route::get('/dashboards/finance', function (Request $request, \App\Services\PeriodData $data) {
        $period = erpSelectedPeriod($request);
        return $data->bootstrap($period['academic_year'], $period['term'])['finance_dashboard'];
    });

    Route::post('/students', function (Request $request) {
        $data = $request->validate([
            'first_name' => ['required', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'class_name' => ['required', 'string', 'max:40'],
            'student_type' => ['required', 'in:Preschool,Primary'],
            'gender' => ['nullable', 'string', 'max:30'],
            'joined_on' => ['nullable', 'date'],
            'guardian_name' => ['nullable', 'string', 'max:160'],
            'guardian_email' => ['nullable', 'email', 'max:160'],
            'guardian_phone' => ['nullable', 'string', 'max:60'],
            'created_by_role' => ['nullable', 'string', 'max:80'],
        ]);

        $student = DB::transaction(function () use ($data) {
            DB::table('academic_state')->where('id', 1)->lockForUpdate()->first();
            if (DB::table('class_promotions')->where('from_year', erpAcademicYear())->exists()) throw ValidationException::withMessages(['class_name' => 'Complete the remaining class promotions before admitting students to the new year.']);
            $studentType = $data['student_type'];
            $allowedClasses = $studentType === 'Preschool'
                ? ['Nursery', 'Reception']
                : array_map(fn (int $standard) => "Standard {$standard}", range(1, 8));

            if (! in_array($data['class_name'], $allowedClasses, true)) {
                throw ValidationException::withMessages([
                    'class_name' => "The selected class is not available for {$studentType} students.",
                ]);
            }
            $tuitionFee = erpTuitionForType($studentType);
            $student = Student::create([
                'admission_no' => \App\Services\AdmissionNumber::next((int) substr($data['joined_on'] ?? now()->toDateString(), 0, 4)),
                'admission_year' => (int) substr($data['joined_on'] ?? now()->toDateString(), 0, 4),
                'academic_year' => erpAcademicYear(),
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'class_name' => $data['class_name'],
                'section' => null,
                'student_type' => $studentType,
                'tuition_fee' => $tuitionFee,
                'gender' => $data['gender'] ?? null,
                'joined_on' => $data['joined_on'] ?? now()->toDateString(),
                'status' => ($data['created_by_role'] ?? null) === 'Director' ? 'Approved' : 'Pending Approval',
                'created_by_role' => $data['created_by_role'] ?? null,
            ]);

            if (filled($data['guardian_name'] ?? null) || filled($data['guardian_email'] ?? null) || filled($data['guardian_phone'] ?? null)) {
                Guardian::create([
                    'student_id' => $student->id,
                    'name' => $data['guardian_name'] ?: 'Guardian details pending',
                    'email' => $data['guardian_email'] ?? null,
                    'phone' => $data['guardian_phone'] ?? null,
                ]);
            }

            \App\Services\AcademicPeriod::enroll($student, erpAcademicYear(), \App\Services\AcademicPeriod::current()->current_term);

            $needsApproval = $student->status === 'Pending Approval';
            SchoolNotification::create([
                'title' => $needsApproval ? 'Admission approval required' : 'New admission received',
                'body' => $student->first_name . ' ' . $student->last_name . ' was registered by ' . ($student->created_by_role ?: 'school staff') . ' for ' . $student->class_name . ($needsApproval ? ' and is waiting for Director approval.' : '.'),
                'type' => $needsApproval ? 'warning' : 'success',
                'target_role' => $needsApproval ? 'Director' : null,
            ]);

            if ($needsApproval) {
                SchoolNotification::create(['title' => 'Admission recorded — waiting for Director approval', 'body' => $student->first_name.' '.$student->last_name.' ('.$student->admission_no.') has been admitted and is waiting for Director approval. Track it in New Admissions.', 'type' => 'info', 'target_role' => $student->created_by_role]);
            }
            return $student->load('guardian');
        });

        return response()->json(['student' => $student, 'academic_year' => $student->academic_year, 'term' => DB::table('student_enrollments')->where('student_id', $student->id)->value('term')], 201);
    });

    Route::patch('/guardians/{guardian}', function (Request $request, Guardian $guardian) {
        $data = $request->validate([
            'role' => ['required', 'in:Director,Super Admin,Admissions Officer,School Manager'],
            'name' => ['required', 'string', 'max:160'],
            'email' => ['nullable', 'email', 'max:160'],
            'phone' => ['nullable', 'string', 'max:60'],
        ]);

        return DB::transaction(fn () => \App\Services\ApprovalInbox::requestGuardian($guardian->student()->lockForUpdate()->firstOrFail(), $data, $request->user()));

    });

    Route::put('/students/{student}/guardian', function (Request $request, Student $student) {
        $data = $request->validate([
            'role' => ['required', 'in:Director,Super Admin,Admissions Officer,School Manager'],
            'name' => ['required', 'string', 'max:160'],
            'email' => ['nullable', 'email', 'max:160'],
            'phone' => ['nullable', 'string', 'max:60'],
        ]);

        return DB::transaction(fn () => \App\Services\ApprovalInbox::requestGuardian(Student::whereKey($student->id)->lockForUpdate()->firstOrFail(), $data, $request->user()));

    });

    Route::get('/students/{student}/review', function (Request $request, Student $student) {
        abort_unless(in_array($request->user()->role, ['Director', 'Super Admin']), 403);
        abort_unless(in_array($student->status, ['Pending Approval', 'Pending Edit Approval']), 409, 'This request has already been resolved.');
        return ['student' => $student->load('guardian'), 'review_token' => \App\Services\ApprovalInbox::reviewToken($student)];
    });

    Route::patch('/students/{student}/approve', function (Request $request, Student $student) {
        $request->validate(['role' => ['required', 'in:Director,Super Admin']]);
        return DB::transaction(function () use ($student, $request) {
        $student = Student::whereKey($student->id)->lockForUpdate()->firstOrFail();
        abort_unless(in_array($student->status, ['Pending Approval', 'Pending Edit Approval']), 409, 'This request has already been resolved.');
        abort_unless(hash_equals(\App\Services\ApprovalInbox::reviewToken($student), (string) $request->input('review_token', '')), 409, 'Open the change preview before approving. Refresh the page if using an older screen.');
        $pendingChanges = $student->pending_changes ?: [];
        erpSaveStudentGuardian($student, $pendingChanges);
        $requestedBy = $student->pending_change_requested_by ?: $student->created_by_role;
        $student->update([
            ...$pendingChanges,
            'status' => 'Approved',
            'pending_changes' => null,
            'pending_change_requested_by' => null,
        ]);
        \App\Services\AcademicPeriod::syncCurrent($student);
        if (array_key_exists('tuition_fee', $pendingChanges)) {
            $student->feeBalances()->where('fee_type', 'Tuition Fee')->where('academic_year', erpAcademicYear())->whereNotIn('academic_year', DB::table('register_imports')->select('academic_year'))->get()->each(function (FeeBalance $balance) use ($student) {
                $remaining = max(0, (int) $student->tuition_fee - (int) $balance->amount_paid);
                $balance->update(['amount_due' => $student->tuition_fee, 'balance' => $remaining, 'status' => $remaining === 0 ? 'Cleared' : ((int) $balance->amount_paid > 0 ? 'Partial' : 'Unpaid')]);
            });
        }

        SchoolNotification::create([
            'title' => 'Student / guardian request approved',
            'body' => $student->first_name . ' ' . $student->last_name . ($pendingChanges ? ' had their requested changes approved by the Director.' : ' was approved by the Director.'),
            'type' => 'success',
            'target_role' => $requestedBy,
        ]);

        return response()->json(['student' => $student->fresh(['guardian', 'feeBalances'])]);
        });
    });

    Route::patch('/students/{student}', function (Request $request, Student $student) {
        $data = $request->validate([
            'role' => ['required', 'in:Director,Super Admin,Admissions Officer,School Manager'],
            'first_name' => ['required', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'class_name' => ['required', 'string', 'max:40'],
            'student_type' => ['required', 'in:Preschool,Primary'],
            'gender' => ['nullable', 'string', 'max:30'],
            'guardian_name' => ['nullable', 'string', 'max:160'],
            'guardian_phone' => ['nullable', 'string', 'max:160'],
            'guardian_email' => ['nullable', 'email', 'max:160'],
            'guardian_relationship' => ['nullable', 'string', 'max:160'],
            'guardian_address' => ['nullable', 'string', 'max:500'],

        ]);

        $allowedClasses = $data['student_type'] === 'Preschool'
            ? ['Nursery', 'Reception']
            : array_map(fn (int $standard) => "Standard {$standard}", range(1, 8));

        if (! in_array($data['class_name'], $allowedClasses, true)) {
            throw ValidationException::withMessages([
                'class_name' => "The selected class is not available for {$data['student_type']} students.",
            ]);
        }

        if ($data['class_name'] !== $student->class_name && DB::table('class_promotion_approvals')->join('class_promotions', 'class_promotions.id', '=', 'class_promotion_approvals.promotion_id')->where('class_promotions.from_year', $student->academic_year)->where('class_promotion_approvals.class_name', $data['class_name'])->exists()) {
            throw ValidationException::withMessages(['class_name' => 'That class has already been promoted. Complete this pupil’s class promotion first.']);
        }
        $tuitionFee = (int) $student->tuition_fee;
        $changes = [...collect($data)->except('role')->all(), 'section' => null, 'tuition_fee' => $tuitionFee];

        if (! in_array($data['role'], ['Director', 'Super Admin'])) {
            $changes = \App\Services\ApprovalInbox::changedFields($student, $changes);
            if (! $changes) throw ValidationException::withMessages(['first_name' => 'No student or guardian details have changed.']);
            $student->update([
                'pending_changes' => [...($student->pending_changes ?: []), ...$changes],
                'pending_change_requested_by' => $data['role'],
                'status' => $student->status === 'Pending Approval' ? 'Pending Approval' : 'Pending Edit Approval',
            ]);

            SchoolNotification::create([
                'title' => 'Student edit approval required',
                'body' => $data['role'] . ' requested changes to ' . $student->first_name . ' ' . $student->last_name . '. Open Change Approvals to review.',
                'type' => 'warning',
                'target_role' => 'Director',
            ]);

            \App\Services\ApprovalInbox::waitingNotification($student, $data['role']);
            return response()->json(['student' => $student->fresh(['guardian', 'feeBalances']), 'pending_approval' => true]);
        }

        erpSaveStudentGuardian($student, $changes);
        $student->update([...$changes, 'pending_changes' => null, 'pending_change_requested_by' => null]);
        \App\Services\AcademicPeriod::syncCurrent($student);
        $student->feeBalances()->where('fee_type', 'Tuition Fee')->where('academic_year', erpAcademicYear())->whereNotIn('academic_year', DB::table('register_imports')->select('academic_year'))->get()->each(function (FeeBalance $balance) use ($tuitionFee) {
            $remaining = max(0, $tuitionFee - (int) $balance->amount_paid);
            $balance->update(['amount_due' => $tuitionFee, 'balance' => $remaining, 'status' => $remaining === 0 ? 'Cleared' : ((int) $balance->amount_paid > 0 ? 'Partial' : 'Unpaid')]);
        });

        return response()->json(['student' => $student->fresh(['guardian', 'feeBalances'])]);
    });

    Route::delete('/students/{student}', function (Request $request, Student $student) {
        $request->validate(['role' => ['required', 'in:Director']]);
        if (DB::table('register_entries')->where('student_id', $student->id)->exists() || DB::table('class_promotion_students')->where('student_id', $student->id)->exists()) {
            throw ValidationException::withMessages(['student' => 'This student has an archived register or promotion history and cannot be deleted.']);
        }
        $student->delete();

        return response()->json(['ok' => true]);
    });

    Route::post('/payments', function (Request $request, \App\Services\FeeCollection $service) {
        $data = $request->validate([
            'student_id' => ['required', 'integer', 'exists:students,id'],
            'fee_type' => ['required', \Illuminate\Validation\Rule::in(\App\Services\FeeCollection::TYPES)],
            'academic_year' => ['required', 'regex:/^\d{4} \/ \d{4}$/'], 'term' => ['required', 'in:Term 1,Term 2,Term 3'],
            'amount' => ['required', 'integer', 'min:1', 'max:100000000'], 'method' => ['required', 'string', 'max:80'], 'notes' => ['nullable', 'string', 'max:500'],
        ]);
        $payment = $service->collect($request->user(), $data);
        SchoolNotification::create(['title' => $payment->status === 'Paid' ? 'Payment recorded' : 'Payment approval required', 'body' => $payment->fee_type.' payment of MWK '.number_format($payment->amount).' recorded.', 'type' => $payment->status === 'Paid' ? 'success' : 'warning', 'target_role' => 'Director']);
        return response()->json(['payment' => $payment], 201);
    });

    Route::patch('/payments/{payment}/approve', function (Request $request, Payment $payment, \App\Services\FeeCollection $service) {
        return ['payment' => $service->approve($request->user(), $payment)];
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

    Route::patch('/notifications/{schoolNotification}/read', function (Request $request, SchoolNotification $schoolNotification) {
        abort_unless(\App\Services\ApprovalInbox::notices($request->user())->whereKey($schoolNotification->id)->exists(), 403);
        $schoolNotification->update(['read_at' => now()]);

        return response()->json(['notification' => $schoolNotification]);
    });
});

require __DIR__.'/academic.php';
require __DIR__.'/passwords.php';

Route::get('/{any}', function () {
    return view('erp');
})->where('any', '.*');
