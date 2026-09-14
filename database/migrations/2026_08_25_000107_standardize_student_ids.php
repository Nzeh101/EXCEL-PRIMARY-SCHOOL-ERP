<?php

use App\Models\Student;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        Student::query()->orderBy('id')->get()->groupBy(fn (Student $student) => optional($student->joined_on)->format('Y') ?? $student->created_at->format('Y'))->each(function ($students, $year) {
            $students->values()->each(fn (Student $student, int $index) => $student->update(['admission_no' => sprintf('HSS-%s-%03d', $year, $index + 1)]));
        });
    }

    public function down(): void
    {
    }
};
