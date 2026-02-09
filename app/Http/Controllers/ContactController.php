<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
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
}

