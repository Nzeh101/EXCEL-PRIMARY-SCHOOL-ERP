<?php

use App\Http\Middleware\RequireErpLogin;
use App\Services\AcademicPeriod;
use App\Services\ClassExport;
use App\Services\ClassPromotion;
use App\Services\ClassWorkbook;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

Route::prefix('erp-api')->group(function () {
    Route::post('/login', function (Request $request) {
        $credentials = $request->validate(['email' => ['required', 'email'], 'password' => ['required', 'string']]);
        if (! Auth::attempt($credentials)) {
            throw ValidationException::withMessages(['email' => 'The email or password is incorrect.']);
        }
        $request->session()->regenerate();

        return ['role' => $request->user()->role, 'csrf_token' => csrf_token()];
    })->middleware('throttle:10,1');
    Route::post('/logout', function (Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return ['csrf_token' => csrf_token()];
    });
    Route::middleware(RequireErpLogin::class)->group(function () {
        Route::get('/class-register', function (Request $request) {
            $period = erpSelectedPeriod($request);
            $imports = DB::table('register_imports')->where('academic_year', $period['academic_year'])->where('term', $period['term'])->orderByDesc('id')->get()->map(function ($row) {
                $row->summary = json_decode($row->summary);

                return $row;
            });
            $entries = DB::table('register_entries')->join('students', 'students.id', '=', 'register_entries.student_id')
                ->whereIn('register_entries.import_id', $imports->pluck('id'))->select('register_entries.*', 'students.class_name', 'students.status')->orderBy('register_entries.id')->get()
                ->map(function ($row) {
                    $row->cells = json_decode($row->cells);
                    $row->issues = json_decode($row->issues);

                    return $row;
                });

            return ['imports' => $imports, 'entries' => $entries, 'current_year' => DB::table('academic_state')->value('current_year'),
                'current_term' => AcademicPeriod::current()->current_term,
                'calendar' => DB::table('school_terms')->orderBy('academic_year')->orderBy('term')->get(),
                'active_students' => DB::table('student_enrollments as source')->join('students', 'students.id', '=', 'source.student_id')->where('source.academic_year', AcademicPeriod::current()->current_year)->where('source.term', AcademicPeriod::current()->current_term)->select('students.id', 'students.first_name', 'students.last_name', 'students.admission_no', 'students.gender', 'students.status', 'source.class_name')->orderBy('students.last_name')->get(),
                'class_approvals' => DB::table('class_promotion_approvals')->join('class_promotions', 'class_promotions.id', '=', 'class_promotion_approvals.promotion_id')->join('users', 'users.id', '=', 'class_promotion_approvals.approved_by')->select('class_promotion_approvals.*', 'class_promotions.from_year', 'class_promotions.to_year', 'users.name as approved_by_name')->get(),
                'promotion_outcomes' => DB::table('class_promotion_students')->whereIn('promotion_id', DB::table('class_promotions')->where('from_year', AcademicPeriod::current()->current_year)->select('id'))->get(),
                'term_history' => DB::table('term_transitions')->orderByDesc('id')->get(),
                'history' => DB::table('class_promotions')->join('users', 'users.id', '=', 'class_promotions.approved_by')->select('class_promotions.*', 'users.name as approved_by_name')->orderByDesc('class_promotions.id')->get()];
        });
        Route::put('/school-terms', function (Request $request) {
            abort_unless(in_array($request->user()->role, ['Director', 'Super Admin', 'School Manager']), 403);
            $data = $request->validate(['academic_year' => ['required', 'regex:/^\d{4} \/ \d{4}$/'], 'term' => ['required', 'in:Term 1,Term 2,Term 3'], 'starts_on' => ['required', 'date_format:Y-m-d'], 'ends_on' => ['required', 'date_format:Y-m-d', 'after:starts_on']]);
            erpSelectedPeriod($request);

            return DB::transaction(function () use ($request, $data) {
                DB::table('academic_state')->where('id', 1)->lockForUpdate()->first();
                $order = (int) substr($data['academic_year'], 0, 4) * 10 + (int) substr($data['term'], -1);
                foreach (DB::table('school_terms')->whereNotNull('starts_on')->get() as $other) {
                    $otherOrder = (int) substr($other->academic_year, 0, 4) * 10 + (int) substr($other->term, -1);
                    if (($otherOrder < $order && $other->ends_on >= $data['starts_on']) || ($otherOrder > $order && $other->starts_on <= $data['ends_on'])) {
                        throw ValidationException::withMessages(['starts_on' => 'Term dates must be chronological and must not overlap other terms.']);
                    }
                }
                DB::table('school_terms')->updateOrInsert(['academic_year' => $data['academic_year'], 'term' => $data['term']], ['starts_on' => $data['starts_on'], 'ends_on' => $data['ends_on'], 'updated_by' => $request->user()->id]);

                return ['ok' => true];
            });
        });
        Route::post('/term-transitions', function (Request $request, AcademicPeriod $service) {
            $data = $request->validate(['academic_year' => ['required', 'string'], 'term' => ['required', 'in:Term 1,Term 2'], 'confirmed' => ['accepted']]);

            return $service->advance($request->user(), $data['academic_year'], $data['term']);
        });
        Route::get('/classes/export', function (Request $request, ClassExport $service) {
            $period = erpSelectedPeriod($request);
            $class = $request->validate(['class_name' => ['required', Rule::in(array_values(ClassWorkbook::CLASSES))]])['class_name'];
            $path = $service->xlsx($service->table($period['academic_year'], $period['term'], $class));

            return response()->download($path, str_replace(' ', '-', $class).'-register.xlsx', ['Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'])->deleteFileAfterSend(true);
        });
        Route::get('/classes/print', function (Request $request, ClassExport $service) {
            $period = erpSelectedPeriod($request);
            $class = $request->validate(['class_name' => ['required', Rule::in(array_values(ClassWorkbook::CLASSES))]])['class_name'];

            return response()->view('class-print', $service->table($period['academic_year'], $period['term'], $class));
        });
        Route::patch('/class-promotions/students/{row}', function(Request $request, int $row, ClassPromotion $service) {
            $data=$request->validate(['retain'=>['required','boolean'],'expected_outcome'=>['required','in:Retained,Promoted,Graduated']]);
            return $service->correct($request->user(),$row,$data['retain'],$data['expected_outcome']);
        });
        Route::post('/class-promotions/preview', function (Request $request, ClassPromotion $service) {
            abort_unless(in_array($request->user()->role, ['Director', 'Super Admin']), 403);
            $data = $request->validate(['from_year' => ['required', 'string'], 'class_name' => ['required', Rule::in(array_values(ClassWorkbook::CLASSES))], 'retain' => ['present', 'array'], 'retain.*' => ['integer', 'distinct']]);

            return $service->preview($data['from_year'], $data['retain'], $data['class_name']);
        });
        Route::post('/class-promotions/approve', function (Request $request, ClassPromotion $service) {
            abort_unless(in_array($request->user()->role, ['Director', 'Super Admin']), 403);
            $data = $request->validate(['from_year' => ['required', 'string'], 'class_name' => ['required', Rule::in(array_values(ClassWorkbook::CLASSES))], 'retain' => ['present', 'array'], 'retain.*' => ['integer', 'distinct'], 'token' => ['required', 'string', 'size:64'], 'confirmed' => ['accepted']]);

            return $service->approve($request->user(), $data['from_year'], $data['retain'], $data['token'], $data['class_name']);
        });
    });
});
