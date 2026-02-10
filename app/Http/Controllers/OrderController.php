<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with('product')
            ->orderBy('created_at', 'desc')
            ->get();

        // Stats
        $total = $orders->count();
        $pending = $orders->where('status', 'pending')->count();
        $progress = $orders->where('status', 'progress')->count();
        $completed = $orders->where('status', 'completed')->count();
        $cancelled = $orders->where('status', 'cancelled')->count();

        return Inertia::render('Orders/OrdersTable', [
            'orders' => $orders,
            'total' => $total,
            'pending' => $pending,
            'progress' => $progress,
            'completed' => $completed,
            'cancelled' => $cancelled,
        ]);
    }

    public function create($id)
    {
        $product = Product::find($id);

        return Inertia::render('Orders/OrdersCreate', [
            'product' => $product
        ]);
    }

    public function store(Request $request, $id)
    {
        $product = Product::find($id);

        $validator = Validator::make($request->all(), [
            'full_name' => ['required', 'string'],
            'email' => ['required', 'email'],
            'whatsapp' => ['required', 'string'],
            'quantity' => ['required', 'numeric'],
            'note' => ['nullable', 'string'],
            'total_estimate' => ['required', 'numeric'],
        ]);

        $validated = $validator->validated();

        $validated['product_id'] = $id;
        $validated['order_number'] =  Str::upper(Str::random(4)) . '-' . Str::upper(Str::random(4)) . '-' . Str::upper(Str::random(4));
    
        $order = Order::create($validated);
        
        return redirect()->route('orders.invoice', $order->id);
    }

    public function invoice($id)
    {
        $order = Order::with('product')->where('id', $id)->first();

        return Inertia::render('Orders/Invoice', [
            'order' => $order
        ]);
    }


    public function destroy($id)
    {
        $order = Order::find($id);

        $order->delete();

        return redirect()->route('orders');
    }
}
