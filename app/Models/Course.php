<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    
    protected $fillable = [        
        'title',    
        'description',
        'enrollment_fee',  
        'instructor_id',              
    ];

    # Relationships
    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id');
    }

    public function contents()
    {
        return $this->hasMany(CourseContent::class);
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }
}
