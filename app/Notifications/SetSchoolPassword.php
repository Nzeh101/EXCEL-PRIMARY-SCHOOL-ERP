<?php
namespace App\Notifications;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
class SetSchoolPassword extends Notification implements ShouldQueue
{
    use Queueable;
    public int $tries = 3;
    public function __construct(public string $token) { $this->afterCommit(); }
    public function via(object $notifiable): array { return ['mail']; }
    public function toMail(object $notifiable): MailMessage {
        $url = config('app.url').'/reset-password/'.$this->token.'?email='.rawurlencode($notifiable->email);
        return (new MailMessage)->subject('Set your Excel Primary School password')->greeting('Welcome to Excel Primary School')
            ->line('Your '.$notifiable->role.' account uses '.$notifiable->email.'.')
            ->action('Set your password', $url)->line('This single-use link expires in '.config('auth.passwords.users.expire').' minutes. You can request a new link from the sign-in page.')
            ->line('School website: '.config('app.url'))->line('If you did not request this, you can ignore this email.')
            ->salutation('Excel Primary School — No Reply');
    }
}
