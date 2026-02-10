<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Symfony\Component\Routing\RequestContext;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::latest()->get();
        
        return Inertia::render('Products/Products', [
        'products' => $products,
        ]);
    }

    public function table()
    {
        $products = Product::latest()->get();
        $total = Product::count();
        $available = Product::where('status', 'available')->count();
        $soldout = Product::where('status', 'soldout')->count();
        

        return Inertia::render('Products/ProductsTable', [
            'products' => $products,
            'total' => $total, 
            'available' => $available,
            'soldout' => $soldout,
        ]);
    }

    public function show($id)
    {
        return Inertia::render('Products/Product', [
            'product' => Product::find($id),

        ]);
    }

    public function create()
    {
        return Inertia::render('Products/ProductsCreate');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'product_name' => ['required', 'string'],
            'category' => ['required', 'string'],
            'pet_type' => ['required', 'string'],
            'price' => ['required', 'numeric', 'min:0'],
            'description' => ['required', 'string'],
            'image' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'status' => ['required', 'string', 'in:available,soldout'],
        ]);

        $validated = $validator->validated();

        // file handler
        if ($request->hasFile('image')) {
            $validated['image'] = Storage::disk('public')->put('products', $request->file('image'));
        }

        Product::create($validated);

        return redirect()->route('products.table');
    }

    public function edit($id)
    {
        $product = Product::find($id);

        return Inertia::render('Products/ProductsEdit', [
            'product' => $product,
        ]);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        $validator = Validator::make($request->all(), [
            'product_name' => ['required', 'string'],
            'category' => ['required', 'string'],
            'pet_type' => ['required', 'string'],
            'price' => ['required', 'numeric', 'min:0'],
            'description' => ['required', 'string'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'status' => ['required', 'string', 'in:available,soldout'],
        ]);

        $validated = $validator->validated();

        if ($request->hasFile('image')) {
            if ($product->image && Storage::disk('public')->exists($product->image)) {
                Storage::disk('public')->delete($product->image);
            }

            $validated['image'] = Storage::disk('public')->put('products', $request->file('image'));
        } else {
            unset($validated['image']);
        }

        $product->update($validated);

        return redirect()->route('products.table');
    }

    public function destroy($id)
    {
        $product = Product::find($id);

        if ($product->image && Storage::disk('public')->exists($product->image)) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return redirect()->route('products.table');
    }
}
