import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function ArticleUser({ articles }) {
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    // Category colors mapping
    const categoryColors = {
        Anjing: "bg-orange-100 text-orange-800",
        Kucing: "bg-pink-100 text-pink-800",
        Burung: "bg-blue-100 text-blue-800",
        Ikan: "bg-cyan-100 text-cyan-800",
        Reptil: "bg-green-100 text-green-800",
        Tips: "bg-purple-100 text-purple-800",
    };

    // Category button colors
    const categoryButtonColors = {
        Anjing: "border-orange-300 text-orange-600 hover:bg-orange-50",
        Kucing: "border-pink-300 text-pink-600 hover:bg-pink-50",
        Burung: "border-blue-300 text-blue-600 hover:bg-blue-50",
        Ikan: "border-cyan-300 text-cyan-600 hover:bg-cyan-50",
        Reptil: "border-green-300 text-green-600 hover:bg-green-50",
        Tips: "border-purple-300 text-purple-600 hover:bg-purple-50",
    };

    const categories = ["Anjing", "Kucing", "Burung", "Ikan", "Reptil", "Tips"];

    // Filter articles based on selected category
    const filteredArticles =
        selectedCategory === "Semua"
            ? articles
            : articles.filter(
                  (article) => article.category === selectedCategory,
              );

    return (
        <AuthenticatedLayout>
            <Head title="Articles" />

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-3">
                            🐾 Pet Care Articles
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Tips, panduan, dan informasi terkini untuk merawat
                            hewan kesayangan Anda
                        </p>
                    </div>

                    {/* Filter Categories */}
                    <div className="mb-8 flex gap-3 flex-wrap justify-center">
                        <button
                            onClick={() => setSelectedCategory("Semua")}
                            className={`px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition ${
                                selectedCategory === "Semua"
                                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                                    : "bg-white border-2 border-gray-300 text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                            Semua
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition border-2 ${
                                    selectedCategory === category
                                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white border-transparent shadow-md"
                                        : `bg-white ${categoryButtonColors[category]}`
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Articles Grid */}
                    {filteredArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredArticles.map((article) => (
                                <div
                                    key={article.id}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                                >
                                    {/* Image */}
                                    <div className="h-48 bg-gray-200 overflow-hidden relative">
                                        <img
                                            src={`/storage/${article.image}`}
                                            alt={article.title}
                                            className="w-full h-full object-cover hover:scale-110 transition duration-500"
                                        />
                                        {/* Category Badge on Image */}
                                        <div className="absolute top-3 left-3">
                                            <span
                                                className={`px-3 py-1 ${categoryColors[article.category] || "bg-gray-100 text-gray-800"} text-xs font-bold rounded-full shadow-sm`}
                                            >
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        {/* Author & Date */}
                                        <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                                            <span className="flex items-center gap-1">
                                                {new Date(
                                                    article.created_at,
                                                ).toLocaleDateString("id-ID", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition">
                                            {article.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                            {article.excerpt}
                                        </p>

                                        {/* Read More */}
                                        <Link
                                            href={`/articles/${article.id}`}
                                            className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-pink-600 transition"
                                        >
                                            Baca Selengkapnya
                                            <svg
                                                className="ml-1 w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-2xl font-bold text-gray-700 mb-2">
                                Tidak Ada Artikel
                            </h3>
                            <p className="text-gray-500">
                                Belum ada artikel dalam kategori{" "}
                                <span className="font-bold text-orange-600">
                                    {selectedCategory}
                                </span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
