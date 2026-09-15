<?php
namespace Tests\Feature;
use App\Models\{User,Student,SchoolNotification};
use App\Notifications\{SchoolAlert,SetSchoolPassword};
use App\Services\{AcademicPeriod,StartSchoolYear};
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\{DB,Notification,Password,Hash};
use Tests\TestCase;
class SchoolLaunchTest extends TestCase
{
    use RefreshDatabase;
    public function test_password_link_is_single_use_and_changes_login(): void {
        Notification::fake();
        $user=User::create(['name'=>'Director','email'=>'director@example.com','password'=>'old-secret','role'=>'Director']);
        $this->post('/forgot-password',['email'=>$user->email])->assertRedirect();
        Notification::assertSentTo($user,SetSchoolPassword::class);
        $token=Password::createToken($user);
        $data=['email'=>$user->email,'token'=>$token,'password'=>'A-new-school-password','password_confirmation'=>'A-new-school-password'];
        $this->get('/reset-password/'.$token.'?email='.$user->email)->assertOk()->assertSee('Set your password');
        $this->post('/reset-password',$data)->assertRedirect('/forgot-password');
        $this->assertTrue(Hash::check($data['password'],$user->fresh()->password));
        $this->post('/reset-password',$data)->assertSessionHasErrors('email');
    }
    public function test_notifications_only_email_opted_in_recipients_of_the_target_role(): void {
        Notification::fake();
        $director=User::create(['name'=>'Director','email'=>'director@example.com','password'=>'secret','role'=>'Director','email_notifications'=>true]);
        $finance=User::create(['name'=>'Finance','email'=>'finance@example.com','password'=>'secret','role'=>'School Manager','email_notifications'=>true]);
        $other=User::create(['name'=>'Other','email'=>'other@example.com','password'=>'secret','role'=>'Director']);
        SchoolNotification::create(['title'=>'Approval needed','body'=>'Review the record','target_role'=>'Director','type'=>'info']);
        Notification::assertSentTo($director,SchoolAlert::class);
        Notification::assertNotSentTo($finance,SchoolAlert::class);Notification::assertNotSentTo($other,SchoolAlert::class);
    }
    public function test_new_year_preserves_pupils_avoids_double_promotion_and_rejects_repeat_reset(): void {
        $admin=User::create(['name'=>'Admin','email'=>'admin@example.com','password'=>'secret','role'=>'Super Admin']);
        DB::table('academic_state')->where('id',1)->update(['current_year'=>'2025 / 2026','current_term'=>'Term 3']);
        $make=function($number,$class,$year) {
            return Student::create(['admission_no'=>$number,'first_name'=>'Pupil','last_name'=>$number,'class_name'=>$class,'student_type'=>'Preschool','tuition_fee'=>70000,'status'=>'Active','academic_year'=>$year]);
        };
        $old=$make('ONE','Nursery','2025 / 2026');$done=$make('TWO','Reception','2026 / 2027');$graduate=$make('THREE','Standard 8','2025 / 2026');
        foreach([$old,$graduate] as $student) AcademicPeriod::enroll($student,'2025 / 2026','Term 3');
        AcademicPeriod::enroll($done,'2026 / 2027','Term 1');
        $pid=DB::table('class_promotions')->insertGetId(['from_year'=>'2025 / 2026','to_year'=>'2026 / 2027','approved_by'=>$admin->id,'approved_at'=>now()]);
        DB::table('class_promotion_students')->insert(['promotion_id'=>$pid,'student_id'=>$done->id,'from_class'=>'Nursery','to_class'=>'Reception','outcome'=>'Promoted']);
        $summary=app(StartSchoolYear::class)->run($admin,'/private/verified-backup.sqlite');
        $this->assertSame(3,Student::count());$this->assertSame('Reception',$old->fresh()->class_name);$this->assertSame('Reception',$done->fresh()->class_name);
        $this->assertSame('Graduated',$graduate->fresh()->status);$this->assertSame('2026 / 2027',AcademicPeriod::current()->current_year);
        $this->assertDatabaseCount('fee_balances',2);$this->assertDatabaseMissing('fee_balances',['academic_year'=>'2025 / 2026']);
        $this->assertSame(2,$summary['new_tuition_accounts']);
        $this->expectException(\RuntimeException::class);app(StartSchoolYear::class)->run($admin,'/private/verified-backup.sqlite');
    }
}
