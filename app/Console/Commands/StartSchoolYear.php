<?php
namespace App\Console\Commands;
use Illuminate\Console\Command;
class StartSchoolYear extends Command
{
    protected $signature='school:start-2026 {--apply} {--backup=} {--user=}';
    protected $description='Owner-authorized 2026/2027 promotion and fee reset; requires a private SQLite backup';
    public function handle(): int {
        if (!$this->option('apply')) { $this->info('Preview: preserve pupils, finish promotions without repeaters, clear the fee ledger and create fresh Term 1 tuition. Use --apply --backup=/private/backup.sqlite --user=ADMIN_ID.'); return 0; }
        $path=$this->option('backup');
        if (!$path || !is_file($path) || file_get_contents($path,false,null,0,16)!=="SQLite format 3\0" || realpath($path)===realpath(config('database.connections.sqlite.database'))) { $this->error('A separate SQLite backup is required.');return 1; }
        $user=\App\Models\User::findOrFail($this->option('user'));
        if (!in_array($user->role,['Director','Super Admin'])) return 1;
        $this->line(json_encode(app(\App\Services\StartSchoolYear::class)->run($user,$path),JSON_PRETTY_PRINT)); return 0;
    }
}
