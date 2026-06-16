<?php

namespace Database\Seeders;

use App\Models\Guardian;
use App\Models\FeeBalance;
use App\Models\Message;
use App\Models\Payment;
use App\Models\SchoolNotification;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $accounts = [
            ['Super Admin', 'admin@hillside.edu'],
            ['Director', 'director@hillside.edu'],
            ['Admissions Officer', 'admissions@hillside.edu'],
            ['Finance Officer', 'finance@hillside.edu'],
            ['Exams Officer', 'exams@hillside.edu'],
            ['Teacher', 'teacher@hillside.edu'],
        ];

        foreach ($accounts as [$name, $email]) {
            User::updateOrCreate(
                ['email' => $email],
                ['name' => $name, 'password' => Hash::make('password')]
            );
        }

        $students = [
            ['ADM-2026-0001', 'Roshni', 'Negi', 'Form 3', 'A', 'Female', 'Mercy Negi', 'mercy.negi@example.com', '+265 991 445 201'],
            ['ADM-2026-0002', 'Akash', 'Rawat', 'Form 4', 'B', 'Male', 'Neil Das', 'neil.das@example.com', '+265 992 448 112'],
            ['ADM-2026-0003', 'Aarav', 'Sharma', 'Form 3', 'A', 'Female', 'Ritika Dutta', 'ritika.dutta@example.com', '+265 993 114 822'],
            ['ADM-2026-0004', 'Vivaan', 'Mehta', 'Form 1', 'B', 'Male', 'Pratham Roy', 'pratham.roy@example.com', '+265 884 502 707'],
            ['ADM-2026-0005', 'Riya', 'Verma', 'Form 2', 'B', 'Female', 'Priya Sethi', 'priya.sethi@example.com', '+265 999 230 615'],
            ['ADM-2026-0006', 'Ananya', 'Singh', 'Form 1', 'A', 'Female', 'Arvind Reddy', 'arvind.reddy@example.com', '+265 888 210 114'],
        ];

        foreach ($students as $index => [$admission, $first, $last, $class, $section, $gender, $guardian, $email, $phone]) {
            $studentType = $index % 3 === 1 ? 'Boarding' : 'Day Scholar';
            $tuitionFee = $studentType === 'Boarding' ? 550000 : 120000;

            $student = Student::updateOrCreate(
                ['admission_no' => $admission],
                [
                    'first_name' => $first,
                    'last_name' => $last,
                    'class_name' => $class,
                    'section' => $section,
                    'student_type' => $studentType,
                    'tuition_fee' => $tuitionFee,
                    'roll_no' => str_pad((string) ($index + 1), 4, '0', STR_PAD_LEFT),
                    'gender' => $gender,
                    'joined_on' => now()->subMonths($index + 1)->toDateString(),
                    'status' => $index === 1 ? 'Pending' : 'Active',
                    'created_by_role' => 'Admissions Officer',
                ]
            );

            Guardian::updateOrCreate(
                ['student_id' => $student->id],
                [
                    'name' => $guardian,
                    'relationship' => 'Parent',
                    'email' => $email,
                    'phone' => $phone,
                    'status' => 'Active',
                ]
            );

            foreach (['Term 1', 'Term 2', 'Term 3'] as $term) {
                FeeBalance::updateOrCreate(
                    [
                        'student_id' => $student->id,
                        'academic_year' => '2025 / 2026',
                        'term' => $term,
                        'fee_type' => 'Tuition Fee',
                    ],
                    [
                        'amount_due' => $tuitionFee,
                        'amount_paid' => 0,
                        'balance' => $tuitionFee,
                        'status' => 'Unpaid',
                    ]
                );
            }
        }

        $paymentSeed = [
            ['ADM-2026-0001', 'Tuition Fee', 'Term 1', 60000, 'Mobile Money', 'Paid'],
            ['ADM-2026-0002', 'Tuition Fee', 'Term 1', 200000, 'Bank Transfer', 'Paid'],
            ['ADM-2026-0003', 'Examination Fee', 'Term 1', 38000, 'Cash', 'Paid'],
            ['ADM-2026-0004', 'Trip Fee', 'Term 2', 45000, 'Mobile Money', 'Paid'],
            ['ADM-2026-0005', 'Tuition Fee', 'Term 1', 120000, 'Cash', 'Paid'],
        ];

        foreach ($paymentSeed as $index => [$admission, $type, $term, $amount, $method, $status]) {
            $student = Student::where('admission_no', $admission)->first();
            $balance = null;

            if ($student) {
                $balance = FeeBalance::firstOrCreate(
                    [
                        'student_id' => $student->id,
                        'academic_year' => '2025 / 2026',
                        'term' => $term,
                        'fee_type' => $type,
                    ],
                    [
                        'amount_due' => $type === 'Tuition Fee' ? $student->tuition_fee : $amount,
                        'amount_paid' => 0,
                        'balance' => $type === 'Tuition Fee' ? $student->tuition_fee : $amount,
                        'status' => 'Unpaid',
                    ]
                );

                $paid = min((int) $balance->amount_due, (int) $balance->amount_paid + $amount);
                $remaining = max(0, (int) $balance->amount_due - $paid);
                $balance->update([
                    'amount_paid' => $paid,
                    'balance' => $remaining,
                    'status' => $remaining === 0 ? 'Cleared' : 'Partial',
                ]);
            }

            Payment::updateOrCreate(
                ['receipt_no' => 'RCPT-260615-' . str_pad((string) ($index + 1), 4, '0', STR_PAD_LEFT)],
                [
                    'student_id' => $student?->id,
                    'fee_type' => $type,
                    'academic_year' => '2025 / 2026',
                    'term' => $term,
                    'amount' => $amount,
                    'balance_after' => $balance?->balance ?? 0,
                    'method' => $method,
                    'status' => $status,
                    'paid_at' => now()->subDays($index),
                    'notes' => 'Seeded school payment',
                ]
            );
        }

        SchoolNotification::updateOrCreate(
            ['title' => 'Fee payment confirmed'],
            [
                'body' => 'Roshni Negi paid Term 1 fees. Receipt is ready for finance review.',
                'type' => 'success',
                'target_role' => 'Finance Officer',
            ]
        );

        SchoolNotification::updateOrCreate(
            ['title' => 'Admission follow-up'],
            [
                'body' => 'Akash Rawat still needs a transfer letter before approval.',
                'type' => 'warning',
                'target_role' => 'Admissions Officer',
            ]
        );

        foreach ([
            ['Ritika', 'in', 'Good afternoon. Please confirm whether the fee reminder should be sent to all Form 3 parents.'],
            ['Ritika', 'out', 'Confirmed. Send it to Form 3 A and B first, then share the delivery report.'],
            ['Ritika', 'in', 'Noted. I will prepare the notice and attach the outstanding balance list.'],
        ] as $index => [$contact, $direction, $body]) {
            Message::updateOrCreate(
                ['contact_name' => $contact, 'body' => $body],
                [
                    'direction' => $direction,
                    'sent_at' => now()->subMinutes(45 - ($index * 8)),
                    'role' => 'Director',
                ]
            );
        }
    }
}
