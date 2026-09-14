<?php

namespace App\Services;

use App\Models\SchoolNotification;
use App\Models\Student;
use App\Models\User;

class ApprovalInbox
{
    public static function reviewToken(Student $student): string
    {
        return hash_hmac('sha256', json_encode([$student->id, $student->status, $student->pending_changes, $student->updated_at, $student->fresh('guardian')->guardian]), config('app.key'));
    }

    public static function notices(User $user)
    {
        return SchoolNotification::where(fn ($q) => $q->whereNull('target_role')->orWhere('target_role', $user->role));
    }

    public static function data(User $user): array
    {
        $canApprove = in_array($user->role, ['Director', 'Super Admin'], true);
        $query = Student::with('guardian')->whereIn('status', ['Pending Approval', 'Pending Edit Approval']);
        if (! $canApprove) {
            $query->where(function ($q) use ($user) {
                $q->where('pending_change_requested_by', $user->role)
                    ->orWhere(fn ($q) => $q->whereNull('pending_change_requested_by')->where('created_by_role', $user->role));
            });
        }
        $pending = in_array($user->role, ['Director', 'Super Admin', 'School Manager', 'Admissions Officer'], true) ? $query->orderBy('updated_at')->get() : collect();
        return ['notifications' => self::notices($user)->latest()->limit(50)->get(),
            'unread_notifications' => self::notices($user)->whereNull('read_at')->count(),
            'approval_requests' => $pending->where('status', 'Pending Edit Approval')->values(), 'pending_record_approvals' => $pending->where('status', 'Pending Edit Approval')->count(),
            'pending_new_admissions' => $pending->where('status', 'Pending Approval')->count()];
    }

    public static function changedFields(Student $student, array $changes): array
    {
        return array_filter($changes, function ($value, $key) use ($student) {
            $current = str_starts_with($key, 'guardian_') ? $student->guardian?->{substr($key, 9)} : $student->{$key};
            return trim((string) ($value ?? '')) !== trim((string) ($current ?? ''));
        }, ARRAY_FILTER_USE_BOTH);
    }

    public static function waitingNotification(Student $student, string $role): void
    {
        SchoolNotification::create(['title' => 'Waiting for Director approval',
            'body' => 'Your student / guardian change request for '.$student->first_name.' '.$student->last_name.' ('.$student->admission_no.') is waiting for Director approval. Track it in Change Approvals.',
            'type' => 'info', 'target_role' => $role]);
    }

    public static function requestGuardian(Student $student, array $data, User $user): array
    {
        $changes = [];
        foreach (['name', 'email', 'phone', 'relationship', 'address'] as $field) {
            if (array_key_exists($field, $data)) $changes['guardian_'.$field] = $data[$field];
        }
        if (in_array($user->role, ['Director', 'Super Admin'], true)) {
            erpSaveStudentGuardian($student, $changes);
            return ['guardian' => $student->fresh('guardian')->guardian, 'pending_approval' => false];
        }
        $changes = self::changedFields($student, $changes);
        if (! $changes) throw \Illuminate\Validation\ValidationException::withMessages(['name' => 'No guardian details have changed.']);
        $student->update(['pending_changes' => [...($student->pending_changes ?: []), ...$changes], 'pending_change_requested_by' => $user->role,
            'status' => $student->status === 'Pending Approval' ? 'Pending Approval' : 'Pending Edit Approval']);
        SchoolNotification::create(['title' => 'Guardian change approval required', 'body' => $user->role.' requested guardian changes for '.$student->first_name.' '.$student->last_name.'. Open Change Approvals to review.', 'type' => 'warning', 'target_role' => 'Director']);
        self::waitingNotification($student, $user->role);
        return ['pending_approval' => true];
    }
}
