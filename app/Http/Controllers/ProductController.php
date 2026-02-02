<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Products/Products');
    }

    public function table()
    {
        return Inertia::render('Products/ProductsTable');
    }

    public function create()
    {
        return Inertia::render('Products/ProductsCreate');
    }
}
