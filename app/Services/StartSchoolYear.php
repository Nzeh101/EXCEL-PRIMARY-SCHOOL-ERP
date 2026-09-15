<?php
namespace App\Services;
use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use RuntimeException;
class StartSchoolYear
{
    public function run(User $user, string $backup): array {
        $from='2025 / 2026'; $to='2026 / 2027';
        return DB::transaction(function() use($user,$backup,$from,$to) {
            if (DB::table('school_year_resets')->where('academic_year',$to)->exists()) throw new RuntimeException('This new-year reset has already been completed.');
            $state=AcademicPeriod::current();
            if (!in_array($state->current_year,[$from,$to])) throw new RuntimeException('Unexpected academic year.');
            $students=Student::orderBy('id')->get();
            if ($students->contains(fn($s)=>!empty($s->pending_changes))) throw new RuntimeException('Resolve pending student edits before the reset.');
            $summary=['pupils_preserved'=>$students->count(),'payments_removed'=>DB::table('payments')->count(),'balances_removed'=>DB::table('fee_balances')->count(),'promoted'=>0,'already_promoted'=>0,'graduated'=>0,'pending_preserved'=>0];
            // The owner requested an empty fee ledger, after a private backup.
            DB::table('payments')->delete(); DB::table('fee_balances')->delete();
            DB::table('register_entries')->update(['cells'=>'{}','issues'=>'[]']);
            DB::table('register_imports')->update(['summary'=>'{}']);
            DB::table('school_notifications')->where(fn($q)=>$q->where('title','like','%payment%')->orWhere('title','like','%fee%')->orWhere('title','like','%receipt%'))->delete();
            $pid=DB::table('class_promotions')->where('from_year',$from)->value('id');
            if (!$pid) $pid=DB::table('class_promotions')->insertGetId(['from_year'=>$from,'to_year'=>$to,'approved_by'=>$user->id,'approved_at'=>now()]);
            $classes=array_values(ClassWorkbook::CLASSES);
            foreach ($students as $student) {
                $row=DB::table('class_promotion_students')->where('promotion_id',$pid)->where('student_id',$student->id)->first();
                if ($student->status==='Graduated') { $summary['graduated']++; continue; }
                if ($student->academic_year===$to && (!$row || $row->outcome!=='Retained')) {
                    $summary['already_promoted']++;
                } else {
                    if (!in_array($student->status,['Active','Approved'])) $summary['pending_preserved']++;
                    $source=$row?->from_class ?? $student->class_name;
                    $index=array_search($source,$classes,true);
                    if ($index===false) throw new RuntimeException('Unknown class for pupil '.$student->id);
                    $target=$classes[$index+1]??'Graduated'; $outcome=$target==='Graduated'?'Graduated':'Promoted';
                    AcademicPeriod::enroll($student,$from,'Term 3',false);
                    DB::table('class_promotion_students')->updateOrInsert(['promotion_id'=>$pid,'student_id'=>$student->id],['from_class'=>$source,'to_class'=>$target,'outcome'=>$outcome]);
                    if ($row && $row->outcome!==$outcome) DB::table('promotion_corrections')->insert(['promotion_student_id'=>$row->id,'changed_by'=>$user->id,'before_class'=>$row->to_class,'after_class'=>$target,'before_outcome'=>$row->outcome,'after_outcome'=>$outcome,'changed_at'=>now()]);
                    if ($outcome==='Graduated') { $student->update(['status'=>'Graduated']);$summary['graduated']++;continue; }
                    $student->class_name=$target; $summary['promoted']++;
                }
                $student->academic_year=$to;
                $student->student_type=in_array($student->class_name,['Nursery','Reception'])?'Preschool':'Primary';
                $student->tuition_fee=$student->student_type==='Preschool'?70000:75000;
                $student->save();
                AcademicPeriod::enroll($student,$to,'Term 1');
                AcademicPeriod::syncCurrent($student);
                DB::table('student_enrollments')->where('student_id',$student->id)->where('academic_year',$to)->where('term','Term 1')->update(['class_name'=>$student->class_name,'student_type'=>$student->student_type,'status'=>$student->status]);
            }
            foreach ($classes as $class) {
                $count=DB::table('class_promotion_students')->where('promotion_id',$pid)->where('from_class',$class)->count();
                if ($count) DB::table('class_promotion_approvals')->updateOrInsert(['promotion_id'=>$pid,'class_name'=>$class],['approved_by'=>$user->id,'approved_at'=>now(),'student_count'=>$count]);
            }
            foreach (['Term 1'=>['2026-09-14','2026-12-18'],'Term 2'=>['2027-01-04','2027-03-25'],'Term 3'=>['2027-04-12','2027-07-16']] as $term=>$dates) {
                DB::table('school_terms')->updateOrInsert(['academic_year'=>$to,'term'=>$term],['starts_on'=>$dates[0],'ends_on'=>$dates[1],'updated_by'=>$user->id]);
            }
            AcademicPeriod::open($to,'Term 1',$from,'Term 3',$user);
            $summary['new_tuition_accounts']=DB::table('fee_balances')->count();
            DB::table('school_year_resets')->insert(['academic_year'=>$to,'performed_by'=>$user->id,'backup_path'=>$backup,'summary'=>json_encode($summary),'performed_at'=>now()]);
            return $summary;
        });
    }
}
