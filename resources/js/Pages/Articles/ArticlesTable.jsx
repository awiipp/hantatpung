import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Article({ articles }) {
    // Sample data jika tidak ada props
    const sampleArticles = articles || [
        {
            id: 1,
            title: "Introducing Our New Smart Watch Series",
            excerpt: "Discover the latest innovation in wearable technology with advanced health tracking features...",
            category: "Electronics",
            author: "Admin",
            published_date: "2024-01-25",
            status: "Published",
            image: "/images/smartwatch.jpg"
        },
        {
            id: 2,
            title: "5 Tips Memilih Laptop yang Tepat untuk Kebutuhan Anda",
            excerpt: "Panduan lengkap memilih laptop sesuai budget dan kebutuhan kerja atau gaming...",
            category: "Electronics",
            author: "Admin",
            published_date: "2024-01-23",
            status: "Published",
            image: "/images/laptop.jpg"
        },
        {
            id: 3,
            title: "Tren Fashion 2024: Koleksi Baju Terbaru",
            excerpt: "Simak koleksi fashion terbaru kami yang mengikuti tren internasional...",
            category: "Fashion",
            author: "Admin",
            published_date: "2024-01-20",
            status: "Published",
            image: "/images/fashion.jpg"
        },
        {
            id: 4,
            title: "Review Headphone Premium dengan Noise Cancelling",
            excerpt: "Pengalaman mendengarkan musik yang lebih berkualitas dengan teknologi noise cancelling...",
            category: "Electronics",
            author: "Admin",
            published_date: "2024-01-18",
            status: "Draft",
            image: "/images/headphone.jpg"
        }
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Articles" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">
                                    Product Articles
                                </h2>
                                <Link
                                    // href={route("articles.create")}
                                    className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-150"
                                >
                                    + New Article
                                </Link>
                            </div>

                            {/* Articles Table */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Title
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Category
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Author
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {sampleArticles.map((article) => (
                                            <tr key={article.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {article.title}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                {article.excerpt.substring(0, 60)}...
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                        {article.category}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {article.author}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {new Date(article.published_date).toLocaleDateString('id-ID')}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        article.status === 'Published' 
                                                            ? 'bg-green-100 text-green-800' 
                                                            : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                        {article.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <Link
                                                        href={`/articles/${article.id}`}
                                                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                                                    >
                                                        View
                                                    </Link>
                                                    <Link
                                                        href={`/articles/${article.id}/edit`}
                                                        className="text-blue-600 hover:text-blue-900 mr-3"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="mt-6 flex justify-between items-center">
                                <div className="text-sm text-gray-700">
                                    Showing <span className="font-medium">1</span> to{" "}
                                    <span className="font-medium">4</span> of{" "}
                                    <span className="font-medium">4</span> results
                                </div>
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">
                                        Previous
                                    </button>
                                    <button className="px-3 py-1 bg-gray-800 text-white rounded-md text-sm">
                                        1
                                    </button>
                                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}