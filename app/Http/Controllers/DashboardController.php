<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Event;
use App\Models\Gallery;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Order Statistics
        $totalOrders = Order::count();
        $pendingOrders = Order::where('status', 'pending')->count();
        $progressOrders = Order::where('status', 'progress')->count();
        $completedOrders = Order::where('status', 'completed')->count();

        // Pet Type Count
        $dogCount = Product::where('pet_type', 'Dog')->count();
        $catCount = Product::where('pet_type', 'Cat')->count();
        $birdCount = Product::where('pet_type', 'Bird')->count();
        $fishCount = Product::where('pet_type', 'Fish')->count();

        // Content Count
        $totalArticles = Article::count();
        $totalEvents = Event::count();
        $totalGallery = Gallery::count();

        return Inertia::render('Dashboard', [
            'totalOrders' => $totalOrders,
            'pendingOrders' => $pendingOrders,
            'progressOrders' => $progressOrders,
            'completedOrders' => $completedOrders,
            'dogCount' => $dogCount,
            'catCount' => $catCount,
            'birdCount' => $birdCount,
            'fishCount' => $fishCount,
            'totalArticles' => $totalArticles,
            'totalEvents' => $totalEvents,
            'totalGallery' => $totalGallery,
        ]);
    }
}
