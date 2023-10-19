<?php

namespace App\Models;

use App\Traits\HasSurveys;
use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Course extends Model
{
    use HasFactory, HasSurveys, Searchable;

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'grades' => 'array'
    ];

    /**
     * Get all of the course's sections.
     */
    public function sections(): HasMany
    {
        return $this->HasMany(CourseSection::class);
    }

    /**
     * Get the course's subject.
     */
    public function subject(): HasOne
    {
        return $this->HasOne(Subject::class);
    }

    /**
     * Get the searchable columns for the model.
     */
    public static function searchableColumns(): array
    {  
        return ['title'];
    }
}