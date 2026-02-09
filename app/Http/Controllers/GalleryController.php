<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::latest()->get();

        return Inertia::render('Galleries/Galleries', [
            'galleries' => $galleries,
        ]);
    }

    public function table()
    {
        $galleries = Gallery::latest()->get();

        return Inertia::render('Galleries/GalleriesTable', [
            'galleries' => $galleries,
        ]);
    }

    public function create()
    {
        return Inertia::render('Galleries/GalleriesCreate');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string'],
            'category' => ['required', 'string'],
            'date' => ['required', 'date'],
            'image' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ]);

        $validated = $validator->validated();

        // file handler
        if ($request->hasFile('image')) {
            $validated['image'] = Storage::disk('public')->put('galeries', $request->file('image'));
        }

        Gallery::create($validated);

        return redirect()->route('galleries.table');
    }

    public function edit($id)
    {
        $gallery = Gallery::find($id);
        
        return Inertia::render('Galleries/GalleriesEdit', [
        'gallery' => $gallery,
        ]);
    }
    
    public function update(Request $request, $id)
    {
        $gallery = Gallery::find($id);

        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string'],
            'category' => ['required', 'string'],
            'date' => ['required', 'date'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ]);

        $validated = $validator->validated();

        // file handler
        if ($request->hasFile('image')) {
            if ($gallery->image && Storage::disk('public')->exists($gallery->image)) {
                Storage::disk('public')->delete($gallery->image);
            }

            $validated['image'] = Storage::disk('public')->put('galeries', $request->file('image'));
        } else {
            unset($validated['image']);
        }

        $gallery->update($validated);
        return redirect()->route('galleries.table');

    }
    
    public function destroy($id)
    {
        $gallery = Gallery::find($id);

        if ($gallery->image && Storage::disk('public')->exists($gallery->image)) {
            Storage::disk('public')->delete($gallery->image);
        }

        $gallery->delete();

        return redirect()->back();
    }
}
