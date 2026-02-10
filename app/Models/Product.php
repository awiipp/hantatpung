<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = ['id'];

    // relasi
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
