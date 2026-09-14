<?php

use App\Models\FeeBalance;
use App\Models\Student;
use App\Services\AcademicPeriod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

function erpAcademicYear(): string
{
    $current = DB::table('academic_state')->value('current_year');
    if ($current) {
        return $current;
    }
    $year = (int) now()->format('Y');
    $start = (int) now()->format('n') >= 9 ? $year : $year - 1;

    return $start.' / '.($start + 1);
}

function erpTuitionForType(string $studentType): int
{
    return strcasecmp($studentType, 'Preschool') === 0 ? 70000 : 75000;
}

function erpEnsureFeeBalance(Student $student, string $feeType, string $term, string $academicYear, ?int $amountDue = null): FeeBalance
{
    if ($feeType === 'Tuition Fee') {
        $entry = DB::table('register_entries')->join('register_imports', 'register_imports.id', '=', 'register_entries.import_id')
            ->where('register_entries.student_id', $student->id)->where('register_imports.academic_year', $academicYear)
            ->where('register_imports.term', $term)->value('register_entries.issues');
        if ($entry && json_decode($entry, true)) {
            throw ValidationException::withMessages(['student_id' => 'Reconcile this student’s flagged spreadsheet amounts before posting payments for this period.']);
        }
    }
    $due = $amountDue ?? ($feeType === 'Tuition Fee' ? (int) $student->tuition_fee : 0);

    return FeeBalance::firstOrCreate(
        [
            'student_id' => $student->id,
            'academic_year' => $academicYear,
            'term' => $term,
            'fee_type' => $feeType,
        ],
        [
            'amount_due' => $due,
            'amount_paid' => 0,
            'balance' => $due,
            'status' => $due > 0 ? 'Unpaid' : 'Open',
        ]
    );
}

function erpSelectedPeriod(Request $request): array
{
    $data = $request->validate(['academic_year' => ['sometimes', 'regex:/^\d{4} \/ \d{4}$/'], 'term' => ['sometimes', 'in:Term 1,Term 2,Term 3']]);
    $state = AcademicPeriod::current();
    $year = $data['academic_year'] ?? $state->current_year ?? erpAcademicYear();
    if ((int) substr($year, -4) !== (int) substr($year, 0, 4) + 1) {
        throw ValidationException::withMessages(['academic_year' => 'Use consecutive academic years.']);
    }

    return ['academic_year' => $year, 'term' => $data['term'] ?? $state->current_term];
}

function erpSaveStudentGuardian(Student $student, array &$changes): void
{
    $guardian = [];
    foreach (['name', 'phone', 'email', 'relationship', 'address'] as $field) {
        if (array_key_exists('guardian_'.$field, $changes)) {
            $guardian[$field] = $changes['guardian_'.$field];
            unset($changes['guardian_'.$field]);
        }
    }
    if ($guardian && ($student->guardian || collect($guardian)->filter()->isNotEmpty())) {
        $guardian['name'] = ($guardian['name'] ?? $student->guardian?->name) ?: 'Guardian details pending';
        \App\Models\Guardian::updateOrCreate(['student_id' => $student->id], $guardian);
    }
}
