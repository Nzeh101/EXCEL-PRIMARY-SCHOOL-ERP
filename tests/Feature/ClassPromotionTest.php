<?php

namespace Tests\Feature;

use App\Models\FeeBalance;
use App\Models\Student;
use App\Models\User;
use App\Services\AcademicPeriod;
use App\Services\ClassWorkbook;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class ClassPromotionTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->travelTo(now()->setDate(2026, 9, 8));
        DB::table('academic_state')->where('id', 1)->update(['current_year' => '2025 / 2026', 'current_term' => 'Term 3']);
        DB::table('school_terms')->insert(['academic_year' => '2025 / 2026', 'term' => 'Term 3', 'starts_on' => '2026-05-01', 'ends_on' => '2026-08-31', 'opened_at' => now()]);
        DB::table('school_terms')->insert(['academic_year' => '2026 / 2027', 'term' => 'Term 1', 'starts_on' => '2026-09-01', 'ends_on' => '2026-12-15']);
    }

    private function account(string $role = 'Director'): User
    {
        return User::create(['name' => $role, 'role' => $role, 'email' => uniqid().'@example.com', 'password' => 'secret-pass']);
    }

    private function pupil(string $class = 'Nursery', string $status = 'Active'): Student
    {
        $student = Student::create(['academic_year' => '2025 / 2026', 'first_name' => 'Test', 'last_name' => 'Pupil', 'class_name' => $class, 'student_type' => in_array($class, ['Nursery', 'Reception']) ? 'Preschool' : 'Primary', 'tuition_fee' => 52000, 'status' => $status]);
        AcademicPeriod::enroll($student, '2025 / 2026', 'Term 3', false);

        return $student;
    }

    public function test_approved_decisions_can_be_corrected_only_before_year_completion(): void
    {
        $director = $this->account();
        $this->actingAs($director);
        $pupil = $this->pupil('Reception');
        $this->pupil('Nursery');
        $payload = ['from_year' => '2025 / 2026', 'class_name' => 'Reception', 'retain' => [$pupil->id]];
        $preview = $this->postJson('/erp-api/class-promotions/preview', $payload)->assertOk()->json();
        $this->postJson('/erp-api/class-promotions/approve', [...$payload, 'token' => $preview['token'], 'confirmed' => true])->assertOk()->assertJsonPath('year_complete', false);
        $id = DB::table('class_promotion_students')->where('student_id', $pupil->id)->value('id');
        $url = "/erp-api/class-promotions/students/$id";
        $this->actingAs($this->account('School Manager'))->patchJson($url, ['retain' => false, 'expected_outcome' => 'Retained'])->assertForbidden();
        $this->actingAs($director)->patchJson($url, ['retain' => false, 'expected_outcome' => 'Retained'])->assertOk();
        $this->assertSame('Standard 1', $pupil->fresh()->class_name);
        $this->assertDatabaseHas('student_enrollments', ['student_id' => $pupil->id, 'academic_year' => '2026 / 2027', 'term' => 'Term 1', 'class_name' => 'Standard 1']);
        $this->assertDatabaseHas('fee_balances', ['student_id' => $pupil->id, 'academic_year' => '2026 / 2027', 'fee_type' => 'Tuition Fee', 'amount_due' => 75000]);
        $this->assertDatabaseCount('promotion_corrections', 1);
        $this->patchJson($url, ['retain' => true, 'expected_outcome' => 'Retained'])->assertConflict();
        $this->patchJson($url, ['retain' => true, 'expected_outcome' => 'Promoted'])->assertOk();
        $this->assertSame('Reception', $pupil->fresh()->class_name);
        $payload = ['from_year' => '2025 / 2026', 'class_name' => 'Nursery', 'retain' => []];
        $preview = $this->postJson('/erp-api/class-promotions/preview', $payload)->assertOk()->json();
        $this->postJson('/erp-api/class-promotions/approve', [...$payload, 'token' => $preview['token'], 'confirmed' => true])->assertOk()->assertJsonPath('year_complete', true);
        $this->patchJson($url, ['retain' => false, 'expected_outcome' => 'Retained'])->assertConflict();
    }

    public function test_real_login_and_permissions_are_verified_on_server(): void
    {
        $user = $this->account('Teacher');
        $this->getJson('/erp-api/bootstrap')->assertUnauthorized();
        $this->postJson('/erp-api/login', ['email' => $user->email, 'password' => 'wrong'])->assertUnprocessable();
        $this->postJson('/erp-api/login', ['email' => $user->email, 'password' => 'secret-pass'])->assertOk()->assertJsonPath('role', 'Teacher');
        $this->postJson('/erp-api/class-promotions/preview', ['from_year' => '2025 / 2026', 'retain' => [], 'role' => 'Director'])->assertForbidden();
        $this->postJson('/erp-api/class-promotions/approve', ['role' => 'Director'])->assertForbidden();
        $this->postJson('/erp-api/logout')->assertOk();
        $this->assertGuest();
        $response = $this->getJson('/erp-api/class-register');
        $response->assertUnauthorized();
    }

    public function test_all_classes_move_once_with_retention_graduation_and_fee_history(): void
    {
        $user = $this->account('Super Admin');
        $this->actingAs($user);
        $students = collect(ClassWorkbook::CLASSES)->map(fn ($class) => $this->pupil($class))->values();
        $held = $this->pupil('Standard 3');
        $inactive = $this->pupil('Standard 4', 'Withdrawn');
        $balance = FeeBalance::create(['student_id' => $students[1]->id, 'academic_year' => '2025 / 2026', 'term' => 'Term 3', 'fee_type' => 'Tuition Fee', 'amount_due' => 52000, 'amount_paid' => 40000, 'balance' => 12000, 'status' => 'Partial']);
        $originalBalance = $balance->fresh()->toArray();
        foreach (array_values(ClassWorkbook::CLASSES) as $class) {
            $payload = ['from_year' => '2025 / 2026', 'class_name' => $class, 'retain' => $class === 'Standard 3' ? [$held->id] : []];
            $preview = $this->postJson('/erp-api/class-promotions/preview', $payload)->assertOk()->json();
            $approval = [...$payload, 'token' => $preview['token'], 'confirmed' => true];
            $this->postJson('/erp-api/class-promotions/approve', $approval)->assertOk();
            if ($class === 'Nursery') {
                $this->assertSame('Reception', $students[0]->fresh()->class_name);
                $this->assertSame('Reception', $students[1]->fresh()->class_name);
                $this->assertDatabaseHas('academic_state', ['current_year' => '2025 / 2026']);
                $this->assertDatabaseCount('class_promotion_students', 1);
                $this->postJson('/erp-api/class-promotions/approve', $approval)->assertUnprocessable();
            }
        }
        $classes = array_values(ClassWorkbook::CLASSES);
        foreach ($students->take(9) as $i => $student) {
            $this->assertSame($classes[$i + 1], $student->fresh()->class_name);
        }
        $this->assertSame('Primary', $students[1]->fresh()->student_type);
        $this->assertSame('Graduated', $students[9]->fresh()->status);
        $this->assertSame('Standard 3', $held->fresh()->class_name);
        $this->assertSame('Standard 4', $inactive->fresh()->class_name);
        $this->assertSame($originalBalance, $balance->fresh()->toArray());
        $this->assertDatabaseCount('class_promotion_students', 11);
        $this->assertDatabaseHas('academic_state', ['current_year' => '2026 / 2027']);
        $this->postJson('/erp-api/class-promotions/approve', $approval)->assertUnprocessable();
        $this->postJson('/erp-api/class-promotions/preview', ['from_year' => '2026 / 2027', 'retain' => []])->assertUnprocessable();
        $this->assertDatabaseCount('class_promotions', 1);
    }

    public function test_class_approval_only_creates_selected_enrollments_and_keeps_source_classes(): void
    {
        $this->actingAs($this->account());
        $nursery=$this->pupil('Nursery');
        $reception=$this->pupil('Reception');
        $this->postJson('/erp-api/class-promotions/preview',['from_year'=>'2025 / 2026','retain'=>[]])->assertUnprocessable();
        $payload=['from_year'=>'2025 / 2026','class_name'=>'Reception','retain'=>[]];
        $preview=$this->postJson('/erp-api/class-promotions/preview',$payload)->assertOk()->assertJsonCount(1,'rows')->json();
        $this->postJson('/erp-api/class-promotions/approve',[...$payload,'class_name'=>'Nursery','token'=>$preview['token'],'confirmed'=>true])->assertUnprocessable();
        $this->postJson('/erp-api/class-promotions/approve',[...$payload,'token'=>$preview['token'],'confirmed'=>true])->assertOk()->assertJsonPath('year_complete',false)->assertJsonPath('remaining_students',1);
        $this->getJson('/erp-api/bootstrap?academic_year=2026%20%2F%202027&term=Term%201')->assertOk()->assertJsonCount(1,'students')->assertJsonPath('students.0.id',$reception->id)->assertJsonPath('students.0.class_name','Standard 1')->assertJsonPath('balances.0.amount_due',75000)->assertJsonPath('balances.0.amount_paid',0);
        $register=$this->getJson('/erp-api/class-register')->assertOk()->assertJsonCount(1,'class_approvals')->json();
        $this->assertSame('Reception',collect($register['active_students'])->firstWhere('id',$reception->id)['class_name']);
        $this->assertSame('Nursery',$nursery->fresh()->class_name);
        $this->postJson('/erp-api/class-promotions/preview',[...$payload,'class_name'=>'Nursery','retain'=>[$reception->id]])->assertUnprocessable();
        $payload['class_name']='Nursery';
        $preview=$this->postJson('/erp-api/class-promotions/preview',$payload)->assertOk()->assertJsonCount(1,'rows')->json();
        $this->postJson('/erp-api/class-promotions/approve',[...$payload,'token'=>$preview['token'],'confirmed'=>true])->assertOk()->assertJsonPath('year_complete',true);
        $this->assertSame('Reception',$nursery->fresh()->class_name);
        $this->assertSame('Standard 1',$reception->fresh()->class_name);
        $this->assertDatabaseCount('class_promotion_approvals',2);
        $this->assertDatabaseHas('academic_state',['current_year'=>'2026 / 2027','current_term'=>'Term 1']);
    }

    public function test_standard_two_cohorts_remain_separate_by_year_during_partial_promotion(): void
    {
        $this->actingAs($this->account());
        $incoming=$this->pupil('Standard 1');
        $previous=$this->pupil('Standard 2');
        $payload=['from_year'=>'2025 / 2026','class_name'=>'Standard 1','retain'=>[]];
        $preview=$this->postJson('/erp-api/class-promotions/preview',$payload)->assertOk()->json();
        $this->postJson('/erp-api/class-promotions/approve',[...$payload,'token'=>$preview['token'],'confirmed'=>true])->assertOk();
        $old=$this->getJson('/erp-api/bootstrap?academic_year=2025%20%2F%202026&term=Term%203')->assertOk()->json('students');
        $new=$this->getJson('/erp-api/bootstrap?academic_year=2026%20%2F%202027&term=Term%201')->assertOk()->json('students');
        $this->assertSame([$previous->id],collect($old)->where('class_name','Standard 2')->pluck('id')->all());
        $this->assertSame([$incoming->id],collect($new)->where('class_name','Standard 2')->pluck('id')->all());
        $this->assertSame('Standard 1',collect($old)->firstWhere('id',$incoming->id)['class_name']);
        $this->assertDatabaseMissing('student_enrollments',['student_id'=>$previous->id,'academic_year'=>'2026 / 2027']);
    }

    public function test_stale_preview_and_pending_students_cannot_be_approved(): void
    {
        $this->actingAs($this->account());
        $student = $this->pupil();
        $payload = ['from_year' => '2025 / 2026', 'class_name' => 'Nursery', 'retain' => []];
        $preview = $this->postJson('/erp-api/class-promotions/preview', $payload)->assertOk()->json();
        $student->update(['class_name' => 'Reception']);
        $this->postJson('/erp-api/class-promotions/approve', [...$payload, 'token' => $preview['token'], 'confirmed' => true])->assertUnprocessable();
        $this->assertDatabaseCount('class_promotions', 0);
        $student->update(['status' => 'Pending Approval']);
        $this->postJson('/erp-api/class-promotions/preview', $payload)->assertUnprocessable();
    }
}
