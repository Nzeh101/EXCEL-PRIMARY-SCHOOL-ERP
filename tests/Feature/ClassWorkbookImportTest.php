<?php

namespace Tests\Feature;

use App\Models\Student;
use App\Models\User;
use App\Services\ClassWorkbook;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;
use ZipArchive;

class ClassWorkbookImportTest extends TestCase
{
    use RefreshDatabase;

    private function workbook(): string
    {
        $path = tempnam(sys_get_temp_dir(), 'class-test-');
        $zip = new ZipArchive;
        $zip->open($path, ZipArchive::OVERWRITE);
        $sheets = '';
        $rels = '';
        $index = 0;
        foreach (ClassWorkbook::CLASSES as $name => $class) {
            $index++;
            $sheets .= '<sheet name="'.$name.'" sheetId="'.$index.'" r:id="r'.$index.'"/>';
            $rels .= '<Relationship Id="r'.$index.'" Target="worksheets/sheet'.$index.'.xml"/>';
            $cell = fn ($col, $row, $value) => '<c r="'.$col.$row.'" t="inlineStr"><is><t>'.htmlspecialchars($value).'</t></is></c>';
            $head = $cell('B', 2, 'SURNAME').$cell('C', 2, 'FIRSTNAME');
            $cells = ['A' => '1', 'B' => 'Example', 'C' => 'Learner', 'D' => 'F', 'E' => '52000', 'F' => '30000', 'G' => '22000', 'I' => $index === 1 ? '999' : '52000', 'J' => '0'];
            $data = '';
            foreach ($cells as $col => $value) {
                $data .= $cell($col, 3, $value);
            }
            $zip->addFromString('xl/worksheets/sheet'.$index.'.xml', '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData><row r="1">'.$cell('A', 1, 'WRONG HEADING').'</row><row r="2">'.$head.'</row><row r="3">'.$data.'</row><row r="4">'.$cell('B', 4, 'TOTAL').'</row></sheetData></worksheet>');
        }
        $zip->addFromString('xl/workbook.xml', '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'.$sheets.'</sheets></workbook>');
        $zip->addFromString('xl/_rels/workbook.xml.rels', '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'.$rels.'</Relationships>');
        $zip->close();

        return $path;
    }

    public function test_import_preserves_source_flags_inconsistent_rows_and_is_idempotent(): void
    {
        $file = $this->workbook();
        try {
            $args = ['file' => $file, '--year' => '2025 / 2026', '--term' => 'Term 3'];
            $this->artisan('school:import-classes', $args)->assertSuccessful();
            $this->assertDatabaseCount('students', 0);
            $this->artisan('school:import-classes', [...$args, '--apply' => true])->assertSuccessful();
            $this->assertDatabaseCount('students', 10);
            $this->assertDatabaseCount('register_entries', 10);
            $this->assertDatabaseCount('fee_balances', 9);
            $this->assertDatabaseCount('payments', 18);
            $entry = DB::table('register_entries')->where('sheet', 'NURSERY')->first();
            $this->assertSame('999', json_decode($entry->cells, true)['I']);
            $this->assertContains('Total differs from payment installments', json_decode($entry->issues, true));
            $this->assertSame('Nursery', Student::find($entry->student_id)->class_name);
            $this->assertDatabaseHas('students', ['class_name' => 'Standard 8', 'joined_on' => null]);
            $this->assertDatabaseHas('payments', ['academic_year' => '2025 / 2026', 'term' => 'Term 3', 'paid_at' => null, 'method' => 'Not recorded']);
            $this->artisan('school:import-classes', [...$args, '--apply' => true])->assertSuccessful();
            $this->assertDatabaseCount('students', 10);
            $this->assertDatabaseCount('payments', 18);
            $user = User::create(['name' => 'Director', 'role' => 'Director', 'email' => 'director@example.com', 'password' => 'secret']);
            $this->actingAs($user)->getJson('/erp-api/class-register')->assertOk()->assertJsonCount(10, 'entries');
            $this->getJson('/erp-api/bootstrap')->assertOk()->assertJsonCount(10, 'students');
            $this->postJson('/erp-api/payments', ['student_id' => $entry->student_id, 'fee_type' => 'Tuition Fee', 'academic_year' => '2025 / 2026', 'term' => 'Term 3', 'amount' => 1000, 'method' => 'Cash', 'created_by_role' => 'Director'])->assertUnprocessable();
            $this->assertDatabaseCount('payments', 18);

        } finally {
            unlink($file);
        }
    }
}
