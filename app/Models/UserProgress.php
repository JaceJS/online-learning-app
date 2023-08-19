<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProgress extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'content_id',
        'quiz_id',
        'is_completed',
        'score',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function content()
    {
        return $this->belongsTo(CourseContent::class, 'content_id');
    }

    public function quiz()
    {
        return $this->belongsTo(QuizAssignment::class, 'quiz_id');
    }
}
