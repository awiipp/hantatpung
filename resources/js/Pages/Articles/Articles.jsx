import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function ArticleUser({ articles }) {
    // Sample data jika tidak ada props
    const sampleArticles = articles || [
        {
            id: 1,
            title: "Introducing Our New Smart Watch Series",
            excerpt: "Discover the latest innovation in wearable technology with advanced health tracking features, sleep monitoring, and seamless smartphone integration.",
            category: "Electronics",
            author: "Admin",
            published_date: "2024-01-25",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
        },
        {
            id: 2,
            title: "5 Tips Memilih Laptop yang Tepat untuk Kebutuhan Anda",
            excerpt: "Panduan lengkap memilih laptop sesuai budget dan kebutuhan kerja atau gaming. Pelajari spesifikasi yang penting dan cara mendapatkan value terbaik.",
            category: "Electronics",
            author: "Admin",
            published_date: "2024-01-23",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
        },
        {
            id: 3,
            title: "Tren Fashion 2024: Koleksi Baju Terbaru",
            excerpt: "Simak koleksi fashion terbaru kami yang mengikuti tren internasional. Dapatkan inspirasi gaya untuk tampil percaya diri setiap hari.",
            category: "Fashion",
            author: "Admin",
            published_date: "2024-01-20",
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400"
        },
        {
            id: 4,
            title: "Review Headphone Premium dengan Noise Cancelling",
            excerpt: "Pengalaman mendengarkan musik yang lebih berkualitas dengan teknologi noise cancelling terbaru. Nikmati audio jernih tanpa gangguan.",
            category: "Electronics",
            author: "Admin",
            published_date: "2024-01-18",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
        },
        {
            id: 5,
            title: "Panduan Perawatan Sepatu Sneakers Agar Awet",
            excerpt: "Tips dan trik merawat sepatu sneakers kesayangan agar tetap terlihat baru dan tahan lama. Investasi yang tepat untuk koleksi Anda.",
            category: "Fashion",
            author: "Admin",
            published_date: "2024-01-15",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
        },
        {
            id: 6,
            title: "Smartphone Gaming Terbaik di 2024",
            excerpt: "Review lengkap smartphone dengan performa gaming terbaik. Spesifikasi, harga, dan rekomendasi untuk para mobile gamers.",
            category: "Electronics",
            author: "Admin",
            published_date: "2024-01-12",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
        }
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Articles" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Latest Articles
                        </h2>
                        <p className="text-gray-600">
                            Discover tips, reviews, and insights about our products
                        </p>
                    </div>

                    {/* Filter Categories */}
                    <div className="mb-8 flex gap-3">
                        <button className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm">
                            All
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50">
                            Electronics
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50">
                            Fashion
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50">
                            Lifestyle
                        </button>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sampleArticles.map((article) => (
                            <div
                                key={article.id}
                                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-150"
                            >
                                {/* Image */}
                                <div className="h-48 bg-gray-200 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    {/* Category & Date */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {new Date(article.published_date).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                        {article.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    {/* Read More */}
                                    <Link
                                        href={`/articles/${article.id}`}
                                        className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-600"
                                    >
                                        Read More
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

                    {/* Load More Button */}
                    <div className="mt-10 text-center">
                        <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-150">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}