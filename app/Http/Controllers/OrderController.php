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
    
        Order::create($validated);
        
        // return invoice
    }
}
