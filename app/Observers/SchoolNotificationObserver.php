<?php
namespace App\Observers;
use App\Models\SchoolNotification;
use App\Models\User;
use App\Notifications\SchoolAlert;
class SchoolNotificationObserver
{
    public function created(SchoolNotification $notice): void {
        User::whereIn('role', ['Director','School Manager','Super Admin'])->where('email_notifications', true)
            ->when($notice->target_role, fn($q) => $q->where('role', $notice->target_role))
            ->each(fn($user) => $user->notify(new SchoolAlert($notice->title, $notice->body)));
    }
}
