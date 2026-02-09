<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact/Contact');
    }

    public function table()
    {
        $messages = Contact::latest()->get();

        return Inertia::render('Contact/ContactTable', [
            'messages' => $messages
        ]);
    }

    public function store(Request $request)
    {
        // validasi
        $request->validate([
            'name'   => 'required|string|max:100',
            'email'  => 'required|email',
            'phone'=> 'nullable|string|max:20',
            'subject' => 'required|string|max:100',
            'message'  => 'required|string',
        ]);

        // simpan ke database
        Contact::create($request->all());

        return redirect()->back()->with('success', 'Pesan berhasil dikirim!');
    }

    public function destroy($id) 
    {
        $message = Contact::find($id);

        $message->delete();

        return redirect()->back();
    }
}

