import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function ProductShow({ product }) {
    // Category colors mapping
    const categoryColors = {
        Food: "bg-orange-100 text-orange-800 border-orange-200",
        Toys: "bg-pink-100 text-pink-800 border-pink-200",
        Accessories: "bg-blue-100 text-blue-800 border-blue-200",
        Healthcare: "bg-green-100 text-green-800 border-green-200",
        Grooming: "bg-purple-100 text-purple-800 border-purple-200",
    };

    const petTypeColors = {
        Dog: "bg-amber-100 text-amber-800 border-amber-200",
        Cat: "bg-rose-100 text-rose-800 border-rose-200",
        Bird: "bg-sky-100 text-sky-800 border-sky-200",
        Fish: "bg-cyan-100 text-cyan-800 border-cyan-200",
        Rabbit: "bg-violet-100 text-violet-800 border-violet-200",
    };

    // Format price to Indonesian Rupiah
    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <AuthenticatedLayout>
            <Head title={product.product_name} />

            <div className="py-12">
                <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Back Button */}
                            <Link
                                href={route("products.index")}
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
                                Kembali ke Daftar Produk
                            </Link>

                            {/* Product Image */}
                            <div className="mb-8 rounded-xl overflow-hidden border-4 border-orange-200 shadow-lg">
                                <img
                                    src={`/storage/${product.image}`}
                                    alt={product.product_name}
                                    className="w-full h-[450px] overflow-hidden object-cover"
                                />
                            </div>

                            <div className="mb-6">
                                <div className="flex flex-wrap gap-3 items-center mb-4">
                                    <span
                                        className={`px-4 py-1.5 inline-flex text-sm leading-5 font-bold rounded-full border ${categoryColors[product.category] || "bg-gray-100 text-gray-800 border-gray-200"}`}
                                    >
                                        {product.category}
                                    </span>
                                    <span
                                        className={`px-4 py-1.5 inline-flex text-sm leading-5 font-bold rounded-full border ${petTypeColors[product.pet_type] || "bg-gray-100 text-gray-800 border-gray-200"}`}
                                    >
                                        {product.pet_type}
                                    </span>
                                    <span
                                        className={`px-4 py-1.5 inline-flex text-sm leading-5 font-bold rounded-full ${
                                            product.status === "available"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                        {product.status === "available"
                                            ? "Available"
                                            : "Sold Out"}
                                    </span>
                                </div>

                                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                                    {product.product_name}
                                </h1>

                                {/* Price Display */}
                                <div className="mb-6">
                                    <div className="text-3xl font-bold text-orange-600">
                                        {formatPrice(product.price)}
                                    </div>
                                </div>
                            </div>

                            {/* Product Description */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Deskripsi Produk
                                </h2>
                                <div className="p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg border-l-4 border-orange-500">
                                    <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-6 border-t-2 border-gray-200">
                                <Link
                                    href={route('orders.create', product.id)}
                                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-green-600 hover:to-emerald-600 transition duration-150 font-bold shadow-lg inline-flex items-center gap-2 text-lg"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    Order Sekarang
                                </Link>
                                <Link
                                    href={route("products.edit", product.id)}
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
                                    Edit Produk
                                </Link>
                                <Link
                                    href={route("products.destroy", product.id)}
                                    method="delete"
                                    as="button"
                                    className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-150 font-semibold shadow-md inline-flex items-center gap-2"
                                    onClick={(e) => {
                                        if (
                                            !confirm(
                                                "Apakah Anda yakin ingin menghapus produk ini?",
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
                                    Hapus Produk
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}