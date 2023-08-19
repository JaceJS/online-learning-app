<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'content_type',
        'content_data',
        'sequence_order',
    ];

    # Relationships
    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function quiz()
    {
        return $this->hasOne(QuizAssignment::class);
    }

    public function userProgresses()
    {
        return $this->hasMany(UserProgress::class);
    }
}
