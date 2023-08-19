<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizAssignment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content_id',
        'title',
        'description',
        'due_date',
    ];

    # Relationships
    public function content()
    {
        return $this->belongsTo(CourseContent::class, 'content_id');
    }

    public function userProgresses()
    {
        return $this->hasMany(UserProgress::class);
    }
    
    public function submissions()
    {
        return $this->hasMany(Submission::class);
    }
}
