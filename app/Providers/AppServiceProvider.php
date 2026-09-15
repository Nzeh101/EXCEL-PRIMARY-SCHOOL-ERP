<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        \Illuminate\Support\Facades\View::composer('erp', function ($view) {
            $state = \App\Services\AcademicPeriod::current();
            $count = \Illuminate\Support\Facades\DB::table('student_enrollments')
                ->join('students', 'students.id', '=', 'student_enrollments.student_id')
                ->where('student_enrollments.academic_year', $state->current_year)
                ->where('student_enrollments.term', $state->current_term)
                ->where('students.status', '!=', 'Graduated')->distinct()->count('students.id');
            $view->with('schoolStudentCount', $count);
        });
        \App\Models\SchoolNotification::observe(\App\Observers\SchoolNotificationObserver::class);
    }
}
