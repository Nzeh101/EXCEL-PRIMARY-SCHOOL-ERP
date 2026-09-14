<?php

namespace Tests\Feature;

use App\Models\FeeBalance;
use App\Models\Student;
use App\Models\User;
use App\Services\AcademicPeriod;
use App\Services\AdmissionNumber;
use App\Services\ClassExport;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;
use ZipArchive;

class AcademicPeriodWorkflowTest extends TestCase
{
    use RefreshDatabase;

    private function user(string $role = 'Director'): User
    {
        return User::create(['name' => $role, 'role' => $role, 'email' => uniqid().'@example.com', 'password' => 'secret']);
    }

    private function setupPeriod(string $class = 'Reception'): Student
    {
        $this->travelTo(now()->setDate(2026, 9, 8));
        DB::table('academic_state')->where('id', 1)->update(['current_year' => '2025 / 2026', 'current_term' => 'Term 3']);
        DB::table('school_terms')->insert(['academic_year' => '2025 / 2026', 'term' => 'Term 3', 'starts_on' => '2026-05-01', 'ends_on' => '2026-08-31', 'opened_at' => now()]);
        DB::table('school_terms')->insert(['academic_year' => '2026 / 2027', 'term' => 'Term 1', 'starts_on' => '2026-09-01', 'ends_on' => '2026-12-15']);
        $s = Student::create(['admission_no' => 'EPS-2025-0001', 'admission_year' => 2025, 'academic_year' => '2025 / 2026', 'first_name' => 'Test', 'last_name' => 'Learner', 'class_name' => $class, 'student_type' => 'Preschool', 'tuition_fee' => 70000, 'status' => 'Active']);
        AcademicPeriod::enroll($s, '2025 / 2026', 'Term 3', false);
        FeeBalance::create(['student_id' => $s->id, 'academic_year' => '2025 / 2026', 'term' => 'Term 3', 'fee_type' => 'Tuition Fee', 'amount_due' => 52000, 'amount_paid' => 52000, 'balance' => 0, 'status' => 'Cleared']);

        return $s;
    }

    private function promote(): void
    {
        $payload = ['from_year' => '2025 / 2026', 'class_name' => Student::first()->class_name, 'retain' => []];
        $preview = $this->postJson('/erp-api/class-promotions/preview', $payload)->assertOk()->json();
        $this->postJson('/erp-api/class-promotions/approve', [...$payload, 'token' => $preview['token'], 'confirmed' => true])->assertOk();
    }

    public function test_future_is_empty_then_promotion_opens_unpaid_term_with_historical_classes_intact(): void
    {
        $s = $this->setupPeriod();
        $this->actingAs($this->user());
        $future = '/erp-api/bootstrap?academic_year=2026%20%2F%202027&term=Term%201';
        $this->getJson($future)->assertOk()->assertJsonCount(0, 'students')->assertJsonCount(0, 'payments')->assertJsonCount(0, 'balances')->assertJsonPath('stats.payments_total', 0)->assertJsonPath('period_opened', false);
        $this->getJson('/erp-api/class-register?academic_year=2026%20%2F%202027&term=Term%201')->assertOk()->assertJsonCount(0, 'entries');
        $this->promote();
        $this->getJson($future)->assertOk()->assertJsonPath('students.0.class_name', 'Standard 1')->assertJsonPath('balances.0.amount_due', 75000)->assertJsonPath('balances.0.amount_paid', 0)->assertJsonPath('balances.0.status', 'Unpaid')->assertJsonPath('current_term', 'Term 1');
        $this->getJson('/erp-api/bootstrap?academic_year=2025%20%2F%202026&term=Term%203')->assertOk()->assertJsonPath('students.0.class_name', 'Reception')->assertJsonPath('balances.0.amount_due', 52000)->assertJsonPath('balances.0.amount_paid', 52000)->assertJsonPath('balances.0.status', 'Cleared');
        $this->assertSame('EPS-2025-0001', $s->fresh()->admission_no);
        $this->getJson('/erp-api/bootstrap?academic_year=2026%20%2F%202027&term=Term%202')->assertOk()->assertJsonCount(0, 'students');
    }

    public function test_manager_can_set_dates_and_advance_term_without_changing_class_or_reusing_payments(): void
    {
        $s = $this->setupPeriod('Nursery');
        $this->actingAs($this->user());
        $this->promote();
        $manager = $this->user('School Manager');
        $this->actingAs($manager);
        $this->postJson('/erp-api/class-promotions/preview', ['from_year' => '2026 / 2027', 'retain' => []])->assertForbidden();
        $dates = ['academic_year' => '2026 / 2027', 'term' => 'Term 2', 'starts_on' => '2027-01-05', 'ends_on' => '2027-04-15'];
        $this->putJson('/erp-api/school-terms', $dates)->assertOk();
        $payload = ['academic_year' => '2026 / 2027', 'term' => 'Term 1', 'confirmed' => true];
        $this->postJson('/erp-api/term-transitions', $payload)->assertUnprocessable();
        $this->travelTo(now()->setDate(2026, 12, 16));
        $this->postJson('/erp-api/term-transitions', $payload)->assertOk()->assertJsonPath('term', 'Term 2');
        $this->postJson('/erp-api/term-transitions', $payload)->assertUnprocessable();
        $this->assertSame('Reception', $s->fresh()->class_name);
        $this->assertDatabaseHas('fee_balances', ['student_id' => $s->id, 'academic_year' => '2026 / 2027', 'term' => 'Term 2', 'amount_due' => 70000, 'amount_paid' => 0, 'balance' => 70000, 'status' => 'Unpaid']);
        $this->assertDatabaseCount('term_transitions', 1);
        $this->putJson('/erp-api/school-terms', [...$dates, 'starts_on' => '2026-12-01'])->assertUnprocessable();
        $this->actingAs($this->user('Teacher'))->putJson('/erp-api/school-terms', $dates)->assertForbidden();
    }

    public function test_uniform_fixed_limit_bus_variable_payments_and_manager_approval(): void
    {
        $s = $this->setupPeriod();
        $director = $this->user();
        $this->actingAs($director);
        $base = ['student_id' => $s->id, 'academic_year' => '2025 / 2026', 'term' => 'Term 3', 'method' => 'Cash'];
        $this->postJson('/erp-api/payments', [...$base, 'fee_type' => 'Uniform Fee', 'amount' => 40001])->assertUnprocessable();
        $this->postJson('/erp-api/payments', [...$base, 'fee_type' => 'Uniform Fee', 'amount' => 15000])->assertCreated();
        $this->actingAs($this->user('School Manager'));
        $payment = $this->postJson('/erp-api/payments', [...$base, 'fee_type' => 'Uniform Fee', 'amount' => 25000])->assertCreated()->assertJsonPath('payment.status', 'Pending Approval')->json('payment');
        $this->postJson('/erp-api/payments', [...$base, 'fee_type' => 'Uniform Fee', 'amount' => 1])->assertUnprocessable();
        $this->actingAs($director)->patchJson('/erp-api/payments/'.$payment['id'].'/approve')->assertOk();
        $this->patchJson('/erp-api/payments/'.$payment['id'].'/approve')->assertOk();
        $this->assertDatabaseHas('fee_balances', ['fee_type' => 'Uniform Fee', 'amount_due' => 40000, 'amount_paid' => 40000, 'balance' => 0]);
        foreach ([9000, 17000] as $amount) {
            $this->postJson('/erp-api/payments', [...$base, 'fee_type' => 'School Bus Fee', 'amount' => $amount])->assertCreated();
        }
        $this->assertDatabaseHas('fee_balances', ['fee_type' => 'School Bus Fee', 'amount_due' => 26000, 'amount_paid' => 26000, 'balance' => 0]);
        $this->postJson('/erp-api/payments', [...$base, 'fee_type' => 'Examination Fee', 'amount' => 1000])->assertUnprocessable();
        $this->postJson('/erp-api/payments', [...$base, 'academic_year' => '2026 / 2027', 'term' => 'Term 1', 'fee_type' => 'Uniform Fee', 'amount' => 40000])->assertUnprocessable();
        // The current school tariff must never overwrite a cleared imported period's historical tariff.
        $this->postJson('/erp-api/payments', [...$base, 'fee_type' => 'Tuition Fee', 'amount' => 1000])->assertUnprocessable();
        $this->assertDatabaseHas('fee_balances', ['fee_type' => 'Tuition Fee', 'amount_due' => 52000, 'amount_paid' => 52000]);
    }

    public function test_print_and_real_excel_export_use_selected_period_and_preserve_text_cells(): void
    {
        $s = $this->setupPeriod();
        $this->actingAs($this->user());
        $s->update(['last_name' => '=SUM(1,2)']);
        $this->get('/erp-api/classes/print?academic_year=2025%20%2F%202026&term=Term%203&class_name=Reception')->assertOk()->assertSee('EPS-2025-0001')->assertSee('52,000')->assertSee('Print / Save PDF');
        $this->get('/erp-api/classes/print?academic_year=2026%20%2F%202027&term=Term%201&class_name=Reception')->assertOk()->assertDontSee('EPS-2025-0001');
        $export = app(ClassExport::class);
        $file = $export->xlsx($export->table('2025 / 2026', 'Term 3', 'Reception'));
        try {
            $zip = new ZipArchive;
            $this->assertTrue($zip->open($file));
            $sheet = $zip->getFromName('xl/worksheets/sheet1.xml');
            $this->assertStringContainsString('t="inlineStr"><is><t xml:space="preserve">=SUM(1,2)', $sheet);
            $this->assertStringContainsString('<v>52000</v>', $sheet);
            $this->assertNotFalse($zip->getFromName('[Content_Types].xml'));
            $zip->close();
        } finally {
            unlink($file);
        }
    }

    public function test_admission_sequence_is_per_year_and_never_uses_class_names(): void
    {
        $first = DB::transaction(fn () => AdmissionNumber::next(2025));
        $second = DB::transaction(fn () => AdmissionNumber::next(2025));
        $nextYear = DB::transaction(fn () => AdmissionNumber::next(2026));
        $this->assertSame('EPS-2025-0001', $first);
        $this->assertSame('EPS-2025-0002', $second);
        $this->assertSame('EPS-2026-0001', $nextYear);
    }
}
