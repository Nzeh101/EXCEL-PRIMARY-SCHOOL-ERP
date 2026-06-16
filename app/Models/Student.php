<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

#[Fillable([
    'admission_no',
    'first_name',
    'last_name',
    'class_name',
    'section',
    'student_type',
    'tuition_fee',
    'roll_no',
    'gender',
    'joined_on',
    'status',
    'created_by_role',
])]
class Student extends Model
{
    protected function casts(): array
    {
        return [
            'joined_on' => 'date',
        ];
    }

    public function guardian(): HasOne
    {
        return $this->hasOne(Guardian::class);
    }

    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }

    public function feeBalances(): HasMany
    {
        return $this->hasMany(FeeBalance::class);
    }
}
