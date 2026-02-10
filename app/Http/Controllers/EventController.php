<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        return Inertia::render('Events/Events');
    }

    public function table()
    {
        return Inertia::render('Events/EventsTable', [
            'events' => Event::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Events/EventsCreate');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'date' => ['required', 'date'],
            'end_date' => ['required', 'date'],
            'time' => ['required'],
            'location' => ['required', 'string'],
            'category' => ['required', 'string'],
            'image' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'status' => ['required', 'string'],
        ]);

        $validated = $validator->validated();

        if ($request->hasFile('image')) {
            $validated['image'] = Storage::disk('public')->put('events', $request->file('image'));
        }

        Event::create($validated);

        return redirect()->route('events.table');
    }

    public function edit($id)
    {
        return Inertia::render('Events/EventsEdit', [
            'event' => Event::find($id),
        ]);
    }
}
