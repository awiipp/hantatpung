<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/home', fn () => Inertia::render('Home/Home'));
Route::get('/products', fn () => Inertia::render('Products/Products'))->name('products.index');
Route::get('/about-us', fn () => Inertia::render('AboutUs/AboutUs'))->name('products.index');
Route::get('/company-profile', fn () => Inertia::render('CompanyProfile/CompanyProfile'))->name('products.index');

require __DIR__.'/auth.php';
