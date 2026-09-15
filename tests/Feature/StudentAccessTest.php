<?php

namespace Tests\Feature;

use App\Models\Student;
use App\Models\User;
use App\Models\FeeBalance;
use App\Services\AcademicPeriod;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class StudentAccessTest extends TestCase
{
    use RefreshDatabase;

    public function test_admissions_cannot_retrieve_financial_fields_or_export_them(): void
    {
        $student = $this->pupil();
        $user = User::create(['name'=>'Admissions','email'=>'admissions@test.test','password'=>'secret','role'=>'Admissions Officer']);
        $this->actingAs($user);
        $response = $this->getJson('/erp-api/bootstrap')->assertOk();
        $response->assertJsonMissingPath('balances')->assertJsonMissingPath('payments')->assertJsonMissingPath('students.0.tuition_fee')->assertJsonMissingPath('students.0.fee_balances');
        $this->getJson('/erp-api/dashboards/finance')->assertForbidden();
        $this->postJson('/erp-api/payments',[])->assertForbidden();
        $this->get('/erp-api/classes/print?class_name=Nursery')->assertOk()->assertDontSee('Fees Due')->assertDontSee('Balance (MWK)')->assertSee($student->admission_no);
    }

    public function test_guardian_edit_is_saved_with_director_edit_and_pending_for_admissions(): void
    {
        $student = $this->pupil();
        $admissions = User::create(['name'=>'Admissions','email'=>'a@test.test','password'=>'secret','role'=>'Admissions Officer']);
        $director = User::create(['name'=>'Director','email'=>'d@test.test','password'=>'secret','role'=>'Director']);
        $payload = ['role'=>'Admissions Officer','first_name'=>'Ada','last_name'=>'Pupil','student_type'=>'Preschool','class_name'=>'Nursery','gender'=>'Female','guardian_name'=>'Parent','guardian_phone'=>'0999000000','guardian_email'=>'parent@test.test','guardian_relationship'=>'Mother','guardian_address'=>'Blantyre'];
        $this->actingAs($admissions)->patchJson('/erp-api/students/'.$student->id,$payload)->assertOk()->assertJsonPath('pending_approval',true);
        $this->assertDatabaseMissing('guardians',['student_id'=>$student->id]);
        $this->getJson('/erp-api/inbox')->assertOk()->assertJsonPath('pending_record_approvals',1)->assertJsonPath('notifications.0.title','Waiting for Director approval');
        $this->actingAs($director);
        $token=$this->getJson('/erp-api/students/'.$student->id.'/review')->assertOk()->json('review_token');
        $this->patchJson('/erp-api/students/'.$student->id.'/approve',['role'=>'Director','review_token'=>$token])->assertOk();
        $this->assertDatabaseHas('guardians',['student_id'=>$student->id,'name'=>'Parent','phone'=>'0999000000']);
        $payload['role']='Director';$payload['guardian_phone']='0888000000';
        $this->patchJson('/erp-api/students/'.$student->id,$payload)->assertOk();
        $this->assertDatabaseHas('guardians',['student_id'=>$student->id,'phone'=>'0888000000']);
    }

    public function test_standardization_preserves_payments_and_uses_estimated_dates_within_term(): void
    {
        $student=$this->pupil();
        DB::table('school_terms')->insert(['academic_year'=>'2025 / 2026','term'=>'Term 3','starts_on'=>'2026-02-02','ends_on'=>'2026-06-08']);
        $import=DB::table('register_imports')->insertGetId(['checksum'=>'test','source'=>'test','academic_year'=>'2025 / 2026','term'=>'Term 3','summary'=>'{}']);
        DB::table('register_entries')->insert(['import_id'=>$import,'student_id'=>$student->id,'sheet'=>'NURSERY','source_row'=>1,'cells'=>'{"E":52000,"F":10000}','issues'=>'[]']);
        $payment=\App\Models\Payment::create(['student_id'=>$student->id,'receipt_no'=>'IMP-1-1-3','fee_type'=>'Tuition Fee','academic_year'=>'2025 / 2026','term'=>'Term 3','amount'=>10000,'balance_after'=>42000,'status'=>'Paid','method'=>'Not recorded']);
        $this->artisan('school:standardize-imported-tuition',['--apply'=>true])->assertSuccessful();
        $this->assertDatabaseHas('payments',['id'=>$payment->id,'amount'=>10000,'paid_at'=>null,'reporting_date'=>'2026-06-08','balance_after'=>60000]);
        $this->assertDatabaseHas('fee_balances',['student_id'=>$student->id,'amount_due'=>70000,'amount_paid'=>10000,'balance'=>60000]);
        $this->artisan('school:standardize-imported-tuition',['--apply'=>true])->assertSuccessful();
        $this->assertDatabaseCount('payments',1);
    }

    public function test_guardian_requests_reach_global_director_queue_and_notify_manager_after_approval(): void
    {
        $student=$this->pupil();
        $manager=User::create(['name'=>'Manager','email'=>'m@test.test','password'=>'secret','role'=>'School Manager']);
        $director=User::create(['name'=>'Director','email'=>'director@test.test','password'=>'secret','role'=>'Director']);
        $this->actingAs($manager)->putJson('/erp-api/students/'.$student->id.'/guardian',['role'=>'School Manager','name'=>'Requested Parent','phone'=>'0999999999'])->assertOk()->assertJsonPath('pending_approval',true);
        $this->assertDatabaseMissing('guardians',['student_id'=>$student->id]);
        $this->getJson('/erp-api/inbox')->assertOk()->assertJsonPath('pending_record_approvals',1)->assertJsonPath('notifications.0.title','Waiting for Director approval');
        $this->actingAs($director);
        $this->getJson('/erp-api/bootstrap')->assertOk()->assertJsonPath('students.0.status','Pending Edit Approval');
        $this->getJson('/erp-api/bootstrap?academic_year=2026%20%2F%202027&term=Term%201')->assertOk()->assertJsonCount(0,'students')->assertJsonPath('pending_record_approvals',1)->assertJsonPath('approval_requests.0.pending_changes.guardian_name','Requested Parent');
        $inbox=$this->getJson('/erp-api/inbox')->assertOk()->assertJsonPath('unread_notifications',1)->json();
        $this->postJson('/erp-api/notifications/mark-read',['ids'=>[$inbox['notifications'][0]['id']]])->assertOk();
        $this->getJson('/erp-api/inbox')->assertJsonPath('unread_notifications',0)->assertJsonPath('pending_record_approvals',1);
        $this->patchJson('/erp-api/students/'.$student->id.'/approve',['role'=>'Director'])->assertStatus(409);
        $token=$this->getJson('/erp-api/students/'.$student->id.'/review')->assertOk()->json('review_token');
        $this->assertDatabaseMissing('guardians',['student_id'=>$student->id]);
        $this->patchJson('/erp-api/students/'.$student->id.'/approve',['role'=>'Director','review_token'=>$token])->assertOk();
        $this->patchJson('/erp-api/students/'.$student->id.'/approve',['role'=>'Director'])->assertStatus(409);
        $this->getJson('/erp-api/inbox')->assertJsonPath('pending_record_approvals',0);
        $this->actingAs($manager)->getJson('/erp-api/inbox')->assertOk()->assertJsonPath('unread_notifications',2)->assertJsonPath('notifications.0.target_role','School Manager');
        $this->assertDatabaseHas('guardians',['student_id'=>$student->id,'name'=>'Requested Parent']);
        $guardian=$student->fresh('guardian')->guardian;
        $this->patchJson('/erp-api/guardians/'.$guardian->id,['role'=>'School Manager','name'=>'Updated Parent'])->assertOk()->assertJsonPath('pending_approval',true);
        $this->assertDatabaseHas('guardians',['id'=>$guardian->id,'name'=>'Requested Parent']);
    }

    public function test_student_edit_only_queues_changed_fields_and_notifies_requester(): void
    {
        $student=$this->pupil();
        $guardian=\App\Models\Guardian::create(['student_id'=>$student->id,'name'=>'Parent','phone'=>'0999000000']);
        $user=User::create(['name'=>'Admissions','email'=>'submitter@test.test','password'=>'secret','role'=>'Admissions Officer']);
        $this->actingAs($user)->patchJson('/erp-api/students/'.$student->id,['role'=>'Admissions Officer','first_name'=>'Ada','last_name'=>'Pupil','student_type'=>'Preschool','class_name'=>'Nursery','guardian_name'=>'Corrected Parent','guardian_phone'=>'0999000000','guardian_email'=>''])->assertOk();
        $this->assertSame(['guardian_name'=>'Corrected Parent'], $student->fresh()->pending_changes);
        $this->getJson('/erp-api/inbox')->assertOk()->assertJsonPath('pending_record_approvals',1)->assertJsonPath('unread_notifications',1)->assertJsonPath('notifications.0.title','Waiting for Director approval');
        $this->assertSame('Parent',$guardian->fresh()->name);
    }

    public function test_director_admission_is_returned_in_its_period_immediately(): void
    {
        $this->pupil();
        $user=User::create(['name'=>'Director','email'=>'newadmission@test.test','password'=>'secret','role'=>'Director']);
        $this->actingAs($user);
        $response=$this->postJson('/erp-api/students',['first_name'=>'New','last_name'=>'Learner','student_type'=>'Preschool','class_name'=>'Nursery','created_by_role'=>'Director'])->assertCreated()->assertJsonPath('academic_year','2025 / 2026')->assertJsonPath('term','Term 3')->assertJsonPath('student.status','Approved');
        $id=$response->json('student.id');
        $rows=$this->getJson('/erp-api/bootstrap?academic_year=2025%20%2F%202026&term=Term%203')->assertOk()->json('students');
        $this->assertContains($id,array_column($rows,'id'));
        $this->getJson('/erp-api/bootstrap?academic_year=2026%20%2F%202027&term=Term%201')->assertJsonCount(0,'students');
    }

    public function test_new_admissions_have_separate_badge_and_requester_notification(): void
    {
        $this->pupil();
        $manager=User::create(['name'=>'Manager','email'=>'admitmanager@test.test','password'=>'secret','role'=>'School Manager']);
        $director=User::create(['name'=>'Director','email'=>'admitdirector@test.test','password'=>'secret','role'=>'Director']);
        $this->actingAs($manager)->postJson('/erp-api/students',['first_name'=>'New','last_name'=>'Pupil','student_type'=>'Preschool','class_name'=>'Nursery','created_by_role'=>'School Manager'])->assertCreated();
        $this->getJson('/erp-api/inbox')->assertOk()->assertJsonPath('pending_new_admissions',1)->assertJsonPath('pending_record_approvals',0)->assertJsonCount(0,'approval_requests')->assertJsonPath('notifications.0.title','Admission recorded — waiting for Director approval');
        $this->actingAs($director)->getJson('/erp-api/inbox')->assertOk()->assertJsonPath('pending_new_admissions',1)->assertJsonPath('pending_record_approvals',0)->assertJsonCount(0,'approval_requests');
    }

    public function test_compact_bootstrap_preserves_roster_and_role_restrictions(): void
    {
        $student = $this->pupil();
        $director = User::create(['name'=>'Director','email'=>'compact@test.test','password'=>'secret','role'=>'Director']);
        $this->actingAs($director);
        $normal = $this->getJson('/erp-api/bootstrap')->assertOk()->json();
        $compact = $this->getJson('/erp-api/bootstrap?compact=1')->assertOk()->assertJsonPath('compact', true)->json();
        $this->assertSame($normal['students'], $compact['students']);
        $this->assertSame($normal['stats'], $compact['stats']);
        $this->assertSame($student->id, $compact['balances'][0]['student']['student_ref']);
        $this->assertArrayNotHasKey('first_name', $compact['balances'][0]['student']);
        $this->assertLessThan(strlen(json_encode($normal)), strlen(json_encode($compact)));
        $director->update(['role'=>'Admissions Officer']);
        $this->getJson('/erp-api/bootstrap?compact=1')->assertOk()
            ->assertJsonMissingPath('balances')->assertJsonMissingPath('payments')
            ->assertJsonMissingPath('students.0.tuition_fee')->assertJsonMissingPath('students.0.fee_balances');
    }

    private function pupil(): Student
    {
        DB::table('academic_state')->where('id',1)->update(['current_year'=>'2025 / 2026','current_term'=>'Term 3']);
        $student=Student::create(['admission_no'=>'EPS-2025-0001','first_name'=>'Ada','last_name'=>'Pupil','class_name'=>'Nursery','student_type'=>'Preschool','tuition_fee'=>70000,'status'=>'Active']);
        AcademicPeriod::enroll($student,'2025 / 2026','Term 3',false);
        FeeBalance::create(['student_id'=>$student->id,'academic_year'=>'2025 / 2026','term'=>'Term 3','fee_type'=>'Tuition Fee','amount_due'=>70000,'amount_paid'=>10000,'balance'=>60000,'status'=>'Partial']);
        return $student;
    }
}
