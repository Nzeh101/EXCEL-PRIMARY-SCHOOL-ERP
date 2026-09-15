<?php
namespace App\Notifications;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
class SchoolAlert extends Notification implements ShouldQueue
{
    use Queueable;
    public int $tries = 3;
    public function __construct(public string $heading, public string $body) { $this->afterCommit(); }
    public function via(object $notifiable): array { return ['mail']; }
    public function toMail(object $notifiable): MailMessage {
        return (new MailMessage)->subject('Excel Primary School — '.$this->heading)->greeting('Hello, '.$notifiable->name)
            ->line($this->body)->action('Open school dashboard', config('app.url').'/#/dashboard')
            ->line('This is an automated notification from Excel Primary School.')->salutation('Excel Primary School');
    }
}
