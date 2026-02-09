import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function ArticleEdit({ article }) {
    const { data, setData, post, processing, errors } = useForm({
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        category: article.category,
        status: article.status,
        image: null,
        _method: "PUT"
    });

    const categories = ["Anjing", "Kucing", "Burung", "Ikan", "Reptil", "Tips"];

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("articles.update", article.id), {
            forceFormData: true,
        });
        //console.log('Form data:', data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Artikel" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">
                                            Edit Artikel
                                        </h2>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Edit artikel tips dan panduan
                                            perawatan hewan
                                        </p>
                                    </div>
                                    <Link
                                        href="/articles"
                                        className="text-gray-600 hover:text-gray-800 font-medium"
                                    >
                                        Kembali
                                    </Link>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Title */}
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Judul Artikel
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Contoh: Panduan Lengkap Merawat Anak Anjing Pertama Anda"
                                    />
                                    {errors.title && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.title}
                                        </p>
                                    )}
                                </div>

                                {/* Category */}
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Kategori
                                    </label>
                                    <select
                                        id="category"
                                        value={data.category}
                                        onChange={(e) =>
                                            setData("category", e.target.value)
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    >
                                        <option value="">Pilih Kategori</option>
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.category}
                                        </p>
                                    )}
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <label
                                        htmlFor="excerpt"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Ringkasan
                                    </label>
                                    <textarea
                                        id="excerpt"
                                        rows="3"
                                        value={data.excerpt}
                                        onChange={(e) =>
                                            setData("excerpt", e.target.value)
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Tulis ringkasan singkat artikel (max 200 karakter)"
                                    ></textarea>
                                    {errors.excerpt && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.excerpt}
                                        </p>
                                    )}
                                </div>

                                {/* Content */}
                                <div>
                                    <label
                                        htmlFor="content"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Konten Artikel
                                    </label>
                                    <textarea
                                        id="content"
                                        rows="12"
                                        value={data.content}
                                        onChange={(e) =>
                                            setData("content", e.target.value)
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Tulis konten artikel lengkap di sini..."
                                    ></textarea>
                                    {errors.content && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.content}
                                        </p>
                                    )}
                                </div>

                                {/* Image Upload */}
                                <div>
                                    <label
                                        htmlFor="image"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Thumbnail
                                    </label>
                                    <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center hover:border-orange-400 transition-all">
                                        <input
                                            type="file"
                                            name="image"
                                            id="image"
                                            accept="image/*"
                                            onChange={(e) =>
                                                setData(
                                                    "image",
                                                    e.target.files[0],
                                                )
                                            }
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="image"
                                            className="cursor-pointer"
                                        >
                                            <div className="flex flex-col items-center">
                                                <svg
                                                    className="w-12 h-12 text-orange-400 mb-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                    />
                                                </svg>
                                                <p className="text-sm text-gray-600 mb-1">
                                                    <span className="text-orange-600 font-semibold">
                                                        Click to upload
                                                    </span>{" "}
                                                    or drag and drop
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    PNG, JPG, WEBP up to 5MB
                                                </p>
                                            </div>
                                        </label>
                                        {data.image && (
                                            <p className="mt-3 text-sm text-green-600 font-medium">
                                                Selected: {data.image.name}
                                            </p>
                                        )}
                                    </div>
                                    {errors.image && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.image}
                                        </p>
                                    )}
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Status
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                value="draft"
                                                checked={
                                                    data.status === "draft"
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "status",
                                                        e.target.value,
                                                    )
                                                }
                                                className="mr-2 text-orange-500 focus:ring-orange-500"
                                            />
                                            <span className="text-sm text-gray-700">
                                                Draft
                                            </span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                value="published"
                                                checked={
                                                    data.status === "published"
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "status",
                                                        e.target.value,
                                                    )
                                                }
                                                className="mr-2 text-orange-500 focus:ring-orange-500"
                                            />
                                            <span className="text-sm text-gray-700">
                                                Published
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                                    <Link
                                        href="/articles"
                                        className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition duration-150"
                                    >
                                        Batal
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition duration-150 shadow-md disabled:opacity-50"
                                    >
                                        {processing
                                            ? "Menyimpan..."
                                            : "Simpan Artikel"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
