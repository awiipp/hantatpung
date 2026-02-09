<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn()=> redirect()->route('home'));

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');
Route::get('/products/table', [ProductController::class, 'table'])->name('products.table');
Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
Route::get('/products/{id}/edit', [ProductController::class, 'edit'])->name('products.edit');
Route::put('/products/{id}', [ProductController::class, 'update'])->name('products.update');
Route::delete('/products/{id}', [ProductController::class, 'destroy'])->name('products.destroy');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');



Route::get('/home', fn () => Inertia::render('Home/Home'))->name('home');
Route::get('/about-us', fn () => Inertia::render('AboutUs/AboutUs'))->name('about-us');
Route::get('/company-profile', fn () => Inertia::render('CompanyProfile/CompanyProfile'))->name('company-profile');
Route::get('/contact', fn () => Inertia::render('Contact/Contact'))->name('contact');
Route::get('/articles', fn () => Inertia::render('Articles/Articles'))->name('articles.index');
Route::get('/articles/table', fn () => Inertia::render('Articles/ArticlesTable'))->name('articles.table');
Route::get('/events', fn () => Inertia::render('Events/Events'))->name('events.index');
Route::get('/events/table', fn () => Inertia::render('Events/EventsTable'))->name('events.table');
Route::get('/galleries', fn () => Inertia::render('Galleries/Galleries'))->name('galleries.index');
Route::get('/clients', fn () => Inertia::render('Clients/Clients'))->name('clients.index');
Route::get('/clients/table', fn () => Inertia::render('Clients/ClientsTable'))->name('clients.table');
Route::get('/articles/create', fn () => Inertia::render('Articles/ArticlesCreate'))->name('articles.create');


require __DIR__.'/auth.php';
