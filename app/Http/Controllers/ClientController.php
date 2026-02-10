<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('Clients/Clients', [
            'clients' => Client::latest()->get(),
        ]);
    }

    public function table()
    {
        return Inertia::render('Clients/ClientsTable', [
            'clients' => Client::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Clients/ClientsCreate');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'name' => ['required', 'string'],
            'company' => ['required', 'string'],
            'role' => ['required', 'string'],
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'review' => ['required', 'string'],
        ]);

        $validated = $validator->validated();

        // file handler
        if ($request->hasFile('image')) {
            $validated['image'] = Storage::disk('public')->put('client', $request->file('image'));
        }

        Client::create($validated);

        if (Auth::user()) {
            return redirect()->route('clients.table');
        } else {
            return redirect()->route('clients.index');
        }
    }

    public function update(Request $request, $id)
    {
        $client = Client::find($id);

        $validator = Validator::make($request->all(), [
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'name' => ['required', 'string'],
            'company' => ['required', 'string'],
            'role' => ['required', 'string'],
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'review' => ['required', 'string'],
        ]);

        $validated = $validator->validated();

        // file handler
        if ($request->hasFile('image')) {
            if ($client->image && Storage::disk('public')->exists($client->image)) {
                Storage::disk('public')->delete($client->image);
            }

            $validated['image'] = Storage::disk('public')->put('client', $request->file('image'));
        } else {
            unset($validated['image']);
        }

        $client->update($validated);

        return redirect()->back();
    }

    public function destroy($id)
    {
        $client = Client::find($id);

        if ($client->image && Storage::disk('public')->exists($client->image)) {
            Storage::disk('public')->delete($client->image);
        }

        $client->delete();
    }
}
