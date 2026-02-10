import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function OrderCreate({ product }) {
    const { data, setData, post, processing, errors } = useForm({
        product_id: product.id,
        full_name: "",
        email: "",
        whatsapp: "",
        quantity: 1,
        note: "",
        total_estimate: product.price,
    });

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

    // Handle quantity change and calculate total
    const handleQuantityChange = (value) => {
        const qty = parseInt(value) || 1;
        setData({
            ...data,
            quantity: qty,
            total_estimate: product.price * qty,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("orders.store", product.id));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Buat Pesanan Baru" />

            <div className="py-12">
                <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Back Button */}
                            <Link
                                href={route("products.show", product.id)}
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
                                Kembali ke Detail Produk
                            </Link>

                            {/* Page Header */}
                            <div className="mb-8">
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                    Buat Pesanan Baru
                                </h1>
                                <p className="text-gray-600">
                                    Lengkapi formulir di bawah untuk membuat
                                    pesanan
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Product Information */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        Informasi Produk
                                    </h2>
                                    <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg border-2 border-orange-200 p-6">
                                        {/* Product Image */}
                                        <div className="mb-4 rounded-lg overflow-hidden border-2 border-orange-200">
                                            <img
                                                src={`/storage/${product.image}`}
                                                alt={product.product_name}
                                                className="w-full h-64 object-cover"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="space-y-3">
                                            <div className="flex flex-wrap gap-2">
                                                <span
                                                    className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${categoryColors[product.category] || "bg-gray-100 text-gray-800 border-gray-200"}`}
                                                >
                                                    {product.category}
                                                </span>
                                                <span
                                                    className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${petTypeColors[product.pet_type] || "bg-gray-100 text-gray-800 border-gray-200"}`}
                                                >
                                                    {product.pet_type}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {product.product_name}
                                            </h3>

                                            <div className="pt-3 border-t-2 border-orange-200">
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Harga Satuan:
                                                </p>
                                                <p className="text-3xl font-bold text-orange-600">
                                                    {formatPrice(product.price)}
                                                </p>
                                            </div>

                                            <div className="pt-3">
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Deskripsi:
                                                </p>
                                                <p className="text-gray-700">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        Informasi Pemesan
                                    </h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="space-y-6">
                                            <div>
                                                <label
                                                    htmlFor="full_name"
                                                    className="block text-sm font-bold text-gray-700 mb-2"
                                                >
                                                    Nama Lengkap
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="full_name"
                                                    value={data.full_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "full_name",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150"
                                                    placeholder="Masukkan nama lengkap"
                                                />
                                                {errors.full_name && (
                                                    <p className="mt-1 text-sm text-red-600">
                                                        {errors.full_name}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-bold text-gray-700 mb-2"
                                                >
                                                    Email
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150"
                                                    placeholder="contoh@email.com"
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-sm text-red-600">
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="whatsapp"
                                                    className="block text-sm font-bold text-gray-700 mb-2"
                                                >
                                                    Nomor WhatsApp
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="whatsapp"
                                                    value={data.whatsapp}
                                                    onChange={(e) =>
                                                        setData(
                                                            "whatsapp",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150"
                                                    placeholder="08123456789"
                                                />
                                                {errors.whatsapp && (
                                                    <p className="mt-1 text-sm text-red-600">
                                                        {errors.whatsapp}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="quantity"
                                                    className="block text-sm font-bold text-gray-700 mb-2"
                                                >
                                                    Jumlah
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="number"
                                                    id="quantity"
                                                    min="1"
                                                    value={data.quantity}
                                                    onChange={(e) =>
                                                        handleQuantityChange(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150"
                                                />
                                                {errors.quantity && (
                                                    <p className="mt-1 text-sm text-red-600">
                                                        {errors.quantity}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="note"
                                                    className="block text-sm font-bold text-gray-700 mb-2"
                                                >
                                                    Catatan (Opsional)
                                                </label>
                                                <textarea
                                                    id="note"
                                                    rows="4"
                                                    value={data.note}
                                                    onChange={(e) =>
                                                        setData(
                                                            "note",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150"
                                                    placeholder="Tambahkan catatan untuk pesanan Anda..."
                                                />
                                                {errors.note && (
                                                    <p className="mt-1 text-sm text-red-600">
                                                        {errors.note}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg border-2 border-orange-200 p-6">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg font-bold text-gray-700">
                                                        Total Estimasi:
                                                    </span>
                                                    <span className="text-3xl font-bold text-orange-600">
                                                        {formatPrice(
                                                            data.total_estimate,
                                                        )}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mt-2">
                                                    {data.quantity} item x{" "}
                                                    {formatPrice(product.price)}
                                                </p>
                                            </div>

                                            <div className="flex gap-4 pt-4">
                                                <button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-500 text-white px-8 py-4 rounded-lg transition duration-150 font-bold shadow-lg inline-flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    {processing
                                                        ? "Memproses..."
                                                        : "Buat Pesanan"}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}