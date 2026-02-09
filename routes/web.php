<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
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



Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
Route::post('/articles', [ArticleController::class, 'store'])->name('articles.store');
Route::get('/articles/table', [ArticleController::class, 'table'])->name('articles.table');
Route::get('/articles/create', [ArticleController::class, 'create'])->name('articles.create');
Route::get('/articles/{id}/edit', [ArticleController::class, 'edit'])->name('articles.edit');
Route::put('/articles/{id}', [ArticleController::class, 'update'])->name('articles.update');
Route::delete('/articles/{id}', [ArticleController::class, 'destroy'])->name('articles.destroy');

Route::get('/galleries', [GalleryController::class, 'index'])->name('galleries.index');
Route::post('/galleries', [GalleryController::class, 'store'])->name('galleries.store');
Route::get('/galleries/create', [GalleryController::class, 'create'])->name('galleries.create');
Route::get('/galleries/table', [GalleryController::class, 'table'])->name('galleries.table');
Route::get('/galleries/{id}/edit', [GalleryController::class, 'edit'])->name('galleries.edit');
Route::get('/galleries/{id}/edit', [GalleryController::class, 'edit'])->name('galleries.edit');
Route::delete('/galleries/{id}', [GalleryController::class, 'destroy'])->name('galleries.destroy');

Route::get('/clients', [ClientController::class, 'index'])->name('clients.index');
Route::post('/clients', [ClientController::class, 'store'])->name('clients.store');
Route::get('/clients/table', [ClientController::class, 'table'])->name('clients.table');
Route::get('/clients/create', [ClientController::class, 'create'])->name('clients.create');
Route::put('/clients/{id}', [ClientController::class, 'update'])->name('clients.update');
Route::delete('/clients/{id}', [ClientController::class, 'destroy'])->name('clients.destroy');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/contact/table', [ContactController::class, 'table'])->name('contact.table');
Route::delete('/contact/{id}', [ContactController::class, 'destroy'])->name('contact.destroy');

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/about-us', fn () => Inertia::render('AboutUs/AboutUs'))->name('about-us');
Route::get('/company-profile', fn () => Inertia::render('CompanyProfile/CompanyProfile'))->name('company-profile');
Route::get('/events', fn () => Inertia::render('Events/Events'))->name('events.index');
Route::get('/events/table', fn () => Inertia::render('Events/EventsTable'))->name('events.table');


require __DIR__.'/auth.php';
