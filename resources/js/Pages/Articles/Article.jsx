import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function ArticleShow({ article }) {
    const user = usePage().props.auth?.user ?? null;

    // Category colors mapping
    const categoryColors = {
        Anjing: "bg-orange-100 text-orange-800 border-orange-200",
        Kucing: "bg-pink-100 text-pink-800 border-pink-200",
        Burung: "bg-blue-100 text-blue-800 border-blue-200",
        Ikan: "bg-cyan-100 text-cyan-800 border-cyan-200",
        Reptil: "bg-green-100 text-green-800 border-green-200",
        Tips: "bg-purple-100 text-purple-800 border-purple-200",
    };

    return (
        <AuthenticatedLayout>
            <Head title={article.title} />

            <div className="py-12">
                <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Back Button */}
                            <Link
                                href={route("articles.index")}
                                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold mb-6 transition duration-150"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                                Kembali ke Daftar Artikel
                            </Link>

                            {/* Article Header */}
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-3 items-center mb-4">
                                    <span
                                        className={`px-4 py-1.5 inline-flex text-sm leading-5 font-bold rounded-full border ${categoryColors[article.category] || "bg-gray-100 text-gray-800 border-gray-200"}`}
                                    >
                                        {article.category}
                                    </span>
                                    <span
                                        className={`px-4 py-1.5 inline-flex text-sm leading-5 font-bold rounded-full ${
                                            article.status === "published"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                        }`}
                                    >
                                        {article.status === "published"
                                            ? "Published"
                                            : "Draft"}
                                    </span>
                                </div>

                                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                                    {article.title}
                                </h1>

                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-orange-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        {new Date(
                                            article.created_at,
                                        ).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-orange-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        {new Date(
                                            article.updated_at,
                                        ).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Featured Image */}
                            <div className="mb-8 rounded-xl overflow-hidden border-4 border-orange-200 shadow-lg">
                                <img
                                    src={`/storage/${article.image}`}
                                    alt={article.title}
                                    className="w-full h-[450px] overflow-hidden object-cover"
                                />
                            </div>

                            {/* Article Excerpt */}
                            <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg border-l-4 border-orange-500">
                                <p className="text-lg text-gray-700 italic font-medium leading-relaxed">
                                    {article.excerpt}
                                </p>
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none mb-8">
                                <div
                                    className="text-gray-800 leading-relaxed whitespace-pre-line"
                                    dangerouslySetInnerHTML={{
                                        __html: article.content,
                                    }}
                                />
                            </div>

                            {/* Action Buttons */}
                            {user && (
                            <div className="flex gap-4 pt-6 border-t-2 border-gray-200">
                                <Link
                                    href={route("articles.edit", article.id)}
                                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 font-semibold shadow-md inline-flex items-center gap-2"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                    Edit Artikel
                                </Link>
                                <Link
                                    href={route("articles.destroy", article.id)}
                                    method="delete"
                                    as="button"
                                    className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-150 font-semibold shadow-md inline-flex items-center gap-2"
                                    onClick={(e) => {
                                        if (
                                            !confirm(
                                                "Apakah Anda yakin ingin menghapus artikel ini?",
                                            )
                                        ) {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                    Hapus Artikel
                                </Link>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}