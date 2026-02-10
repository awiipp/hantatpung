<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Mockery\Matcher\Any;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::latest()->get();

        return Inertia::render('Articles/Articles', [
            'articles' => $articles,
        ]);
    }

    public function table()
    {
        $articles = Article::latest()->get();

        return Inertia::render('Articles/ArticlesTable', [
            'articles' => $articles,
            'published' => Article::where('status', 'published')->count(),
            'draft' => Article::where('status', 'draft')->count(),
        ]);
    }

    public function show($id)
    {
        $article = Article::find($id);

        return Inertia::render('Articles/Article', [
            'article' => $article,
        ]);
    }

    public function create()
    {
        return Inertia::render('Articles/ArticlesCreate');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string'],
            'excerpt' => ['required', 'string'],
            'content' => ['required', 'string'],
            'category' => ['required', 'string'],
            'image' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'status' => ['required', 'string', 'in:draft,published'],
        ]);

        $validated = $validator->validated();

        // file handler
        if ($request->hasFile('image')) {
            $validated['image'] = Storage::disk('public')->put('articles', $request->file('image'));
        }

        Article::create($validated);

        return redirect()->route('articles.table');
    }

    public function edit($id)
    {
        $article = Article::find($id);

        return Inertia::render('Articles/ArticlesEdit', [
            'article' => $article
        ]);
    }

    public function update(Request $request, $id)
    {
        $article = Article::find($id);

        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string'],
            'excerpt' => ['required', 'string'],
            'content' => ['required', 'string'],
            'category' => ['required', 'string'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'status' => ['required', 'string', 'in:draft,published'],
        ]);

        $validated = $validator->validated();

        // file handler
        if ($request->hasFile('image')) {
            if ($article->image && Storage::disk('public')->exists($article->image)) {
                Storage::disk('public')->delete($article->image);
            }
            $validated['image'] = Storage::disk('public')->put('articles', $request->file('image'));
        } else {
            unset($validated['image']);
        }

        $article->update($validated);

        return redirect()->route('articles.table');
    }

    public function destroy($id)
    {
        $article = Article::find($id);
        if ($article->image && Storage::disk('public')->exists($article->image)) {
            Storage::disk('public')->delete($article->image);
        }

        $article->delete();
        return redirect()->route('articles.table');
    }
}
