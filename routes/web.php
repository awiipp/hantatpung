<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => redirect()->route('home'));

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

});

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');
Route::get('/products/table', [ProductController::class, 'table'])->name('products.table');
Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
Route::get('/products/{id}/edit', [ProductController::class, 'edit'])->name('products.edit');
Route::get('/products/{id}', [ProductController::class, 'show'])->name('products.show');
Route::put('/products/{id}', [ProductController::class, 'update'])->name('products.update');
Route::delete('/products/{id}', [ProductController::class, 'destroy'])->name('products.destroy');
Route::get('/products', [ProductController::class, 'index'])->name('products.index');

Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
Route::post('/articles', [ArticleController::class, 'store'])->name('articles.store');
Route::get('/articles/table', [ArticleController::class, 'table'])->name('articles.table');
Route::get('/articles/create', [ArticleController::class, 'create'])->name('articles.create');
Route::get('/articles/{id}/edit', [ArticleController::class, 'edit'])->name('articles.edit');
Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');
Route::put('/articles/{id}', [ArticleController::class, 'update'])->name('articles.update');
Route::delete('/articles/{id}', [ArticleController::class, 'destroy'])->name('articles.destroy');

Route::get('/events', [EventController::class, 'index'])->name('events.index');
Route::post('/events', [EventController::class, 'store'])->name('events.store');
Route::get('/events/create', [EventController::class, 'create'])->name('events.create');
Route::get('/events/table', [EventController::class, 'table'])->name('events.table');
Route::get('/events/{id}/edit', [EventController::class, 'edit'])->name('events.edit');
Route::get('/events/{id}', [EventController::class, 'show'])->name('events.show');
Route::put('/events/{id}', [EventController::class, 'update'])->name('events.update');
Route::delete('/events/{id}', [EventController::class, 'destroy'])->name('events.destroy');

Route::get('/galleries', [GalleryController::class, 'index'])->name('galleries.index');
Route::post('/galleries', [GalleryController::class, 'store'])->name('galleries.store');
Route::get('/galleries/create', [GalleryController::class, 'create'])->name('galleries.create');
Route::get('/galleries/table', [GalleryController::class, 'table'])->name('galleries.table');
Route::get('/galleries/{id}/edit', [GalleryController::class, 'edit'])->name('galleries.edit');
Route::delete('/galleries/{id}', [GalleryController::class, 'destroy'])->name('galleries.destroy');

Route::get('/clients', [ClientController::class, 'index'])->name('clients.index');
Route::post('/clients', [ClientController::class, 'store'])->name('clients.store');
Route::get('/clients/table', [ClientController::class, 'table'])->name('clients.table');
Route::get('/clients/create', [ClientController::class, 'create'])->name('clients.create');
Route::put('/clients/{id}', [ClientController::class, 'update'])->name('clients.update');
Route::delete('/clients/{id}', [ClientController::class, 'destroy'])->name('clients.destroy');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/contact/table', [ContactController::class, 'table'])->name('contact.table');
Route::delete('/contact/{id}', [ContactController::class, 'destroy'])->name('contact.destroy');

Route::get('/orders', [OrderController::class, 'index'])->name('orders');
Route::get('/orders/{id}/create', [OrderController::class, 'create'])->name('orders.create');
Route::get('/orders/{id}/invoice', [OrderController::class, 'invoice'])->name('orders.invoice');
Route::post('/orders/{id}', [OrderController::class, 'store'])->name('orders.store');
Route::delete('/orders/{id}', [OrderController::class, 'destroy'])->name('orders.destroy');

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/about-us', fn() => Inertia::render('AboutUs/AboutUs'))->name('about-us');
Route::get('/company-profile', fn() => Inertia::render('CompanyProfile/CompanyProfile'))->name('company-profile');

require __DIR__ . '/auth.php';
