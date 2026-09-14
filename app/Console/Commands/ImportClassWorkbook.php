<?php

namespace App\Console\Commands;

use App\Models\FeeBalance;
use App\Models\Payment;
use App\Models\Student;
use App\Services\AcademicPeriod;
use App\Services\AdmissionNumber;
use App\Services\ClassWorkbook;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportClassWorkbook extends Command
{
    protected $signature = 'school:import-classes {file : Local XLSX file} {--year= : Academic year, e.g. 2025 / 2026} {--term= : Term 1, Term 2 or Term 3} {--apply : Write the reviewed import}';

    protected $description = 'Preview or import class registers, preserving original cells and reporting discrepancies';

    public function handle(ClassWorkbook $reader): int
    {
        $year = $this->option('year');
        $term = $this->option('term');
        if (! preg_match('/^(\d{4}) \/ (\d{4})$/', $year ?? '', $m) || (int) $m[2] !== (int) $m[1] + 1 || ! in_array($term, ['Term 1', 'Term 2', 'Term 3'])) {
            $this->error('Supply --year="2025 / 2026" and --term="Term 3" (using the actual source period).');

            return self::FAILURE;
        }
        $rows = $reader->read($this->argument('file'));
        $checksum = hash_file('sha256', $this->argument('file'));
        if (DB::table('register_imports')->where('checksum', $checksum)->exists()) {
            $this->info('This workbook was already imported. No changes made.');

            return self::SUCCESS;
        }
        // No stable school admission IDs exist in this source: never silently merge or re-import a revised workbook.
        if (DB::table('register_imports')->exists()) {
            $this->error('A class workbook is already present. Reconcile revised workbooks before importing to avoid duplicate pupils.');

            return self::FAILURE;
        }
        $summary = [];
        foreach ($rows as $row) {
            $summary[$row['sheet']] ??= ['students' => 0, 'review' => 0];
            $summary[$row['sheet']]['students']++;
            if ($row['issues']) {
                $summary[$row['sheet']]['review']++;
            }
        }
        $this->table(['Class tab', 'Students', 'Rows needing financial review'], collect($summary)->map(fn ($v, $k) => [$k, $v['students'], $v['review']])->all());
        $this->info(count($rows).' students. TRIP and projection tables excluded. Existing records are preserved.');
        if (! $this->option('apply')) {
            $this->info('Preview only. Add --apply to import.');

            return self::SUCCESS;
        }
        DB::transaction(function () use ($rows, $checksum, $year, $term, $summary) {
            $state = DB::table('academic_state')->where('id', 1)->lockForUpdate()->first();
            if ($state->current_year && $state->current_year !== $year) {
                throw new \RuntimeException('The active academic year differs from this workbook.');
            }
            $id = DB::table('register_imports')->insertGetId(['checksum' => $checksum, 'source' => 'Google Sheets class workbook', 'academic_year' => $year, 'term' => $term, 'summary' => json_encode($summary), 'created_at' => now(), 'updated_at' => now()]);
            foreach ($rows as $row) {
                $c = $row['cells'];
                $student = Student::create([
                    'admission_no' => AdmissionNumber::next((int) substr($year, 0, 4)),
                    'admission_year' => (int) substr($year, 0, 4),
                    'academic_year' => $year, 'first_name' => $c['C'], 'last_name' => $c['B'], 'class_name' => $row['class'],
                    'student_type' => in_array($row['class'], ['Nursery', 'Reception']) ? 'Preschool' : 'Primary',
                    'tuition_fee' => in_array($row['class'], ['Nursery', 'Reception']) ? 70000 : 75000,
                    'roll_no' => (string) (int) $c['A'], 'gender' => ['F' => 'Female', 'M' => 'Male'][$c['D'] ?? ''] ?? null,
                    'joined_on' => null, 'status' => 'Active', 'created_by_role' => 'Spreadsheet Import',
                ]);
                AcademicPeriod::enroll($student, $year, $term, false);
                DB::table('register_entries')->insert(['import_id' => $id, 'student_id' => $student->id, 'sheet' => $row['sheet'], 'source_row' => $row['row'], 'cells' => json_encode($c), 'issues' => json_encode($row['issues'])]);
                // Inconsistent financial rows stay in the register for review; do not invent ledger amounts.
                if ($row['issues']) {
                    continue;
                }
                $due = (int) $c['E'];
                $paid = 0;
                foreach (['F', 'G', 'H'] as $index => $col) {
                    $amount = (int) ($c[$col] ?? 0);
                    $paid += $amount;
                    if (! $amount) {
                        continue;
                    }
                    Payment::create(['student_id' => $student->id, 'receipt_no' => 'IMP-'.$id.'-'.$student->id.'-'.($index + 1), 'fee_type' => 'Tuition Fee', 'academic_year' => $year, 'term' => $term, 'amount' => $amount, 'balance_after' => max(0, $due - $paid), 'method' => 'Not recorded', 'status' => 'Paid', 'paid_at' => null, 'notes' => 'Imported '.$row['sheet'].' row '.$row['row'].', payment '.($index + 1).'. Original receipt, date and method not supplied.']);
                }
                FeeBalance::create(['student_id' => $student->id, 'academic_year' => $year, 'term' => $term, 'fee_type' => 'Tuition Fee', 'amount_due' => $due, 'amount_paid' => $paid, 'balance' => $due - $paid, 'status' => $due === $paid ? 'Cleared' : ($paid ? 'Partial' : 'Unpaid')]);
            }
            DB::table('school_terms')->insertOrIgnore(['academic_year' => $year, 'term' => $term, 'opened_at' => now()]);
            DB::table('academic_state')->where('id', 1)->update(['current_year' => $year, 'current_term' => $term]);
        });
        $this->info('Imported successfully. Original financial cells and review flags are preserved in the database.');

        return self::SUCCESS;
    }
}
