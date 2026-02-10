import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function OrderInvoice({ order }) {
    // Format price to Indonesian Rupiah
    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Order Invoice" />

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white min-h-screen">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    {/* Success Banner */}
                    <div className="mb-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl shadow-xl p-8 text-white text-center animate-fade-in">
                        <div className="flex justify-center mb-4">
                            <div className="bg-white rounded-full p-4">
                                <svg
                                    className="w-16 h-16 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold mb-3">
                            Pesanan Berhasil Diajukan!
                        </h1>
                        <p className="text-xl text-green-50">
                            Terima kasih atas pesanan Anda. Kami akan segera
                            memprosesnya.
                        </p>
                    </div>

                    {/* Invoice Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-orange-200">
                        {/* Invoice Header */}
                        <div className="bg-gradient-to-r from-orange-400 to-pink-500 px-8 py-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        INVOICE
                                    </h2>
                                    <p className="text-white/90 text-sm">
                                        Pet Shop Order
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                                        <p className="text-xs text-white/80 mb-1">
                                            Order Number
                                        </p>
                                        <p className="text-lg font-bold text-white">
                                            {order.order_number}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Invoice Body */}
                        <div className="p-8 space-y-8">
                            {/* Order Info & Customer Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {/* Order Information */}
                                <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 border-2 border-orange-200">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-orange-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        Order Information
                                    </h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">
                                                Order Date
                                            </p>
                                            <p className="font-semibold text-gray-900">
                                                {formatDate(order.created_at)}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">
                                                Status
                                            </p>
                                            <span className="px-4 py-2 inline-flex text-sm font-bold rounded-full bg-yellow-100 text-yellow-800 border-2 border-yellow-300">
                                                Pending
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Customer Information */}
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        Customer Information
                                    </h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">
                                                Full Name
                                            </p>
                                            <p className="font-semibold text-gray-900">
                                                {order.full_name}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">
                                                Email
                                            </p>
                                            <p className="font-semibold text-gray-900">
                                                {order.email}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">
                                                WhatsApp
                                            </p>
                                            <p className="font-semibold text-gray-900">
                                                {order.whatsapp}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="border-2 border-gray-200 rounded-xl overflow-hidden mb-8">
                                <div className="bg-gray-50 px-6 py-3 border-b-2 border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Order Details
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-6">
                                        {/* Product Image */}
                                        <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl overflow-hidden border-4 border-orange-200 flex-shrink-0">
                                            <img
                                                src={`/storage/${order.product.image}`}
                                                alt={order.product.product_name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-1">
                                            <h4 className="text-2xl font-bold text-gray-900 mb-3">
                                                {order.product.product_name}
                                            </h4>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <p className="text-sm text-gray-600 mb-1">
                                                        Category
                                                    </p>
                                                    <span className="text-sm font-semibold text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                                                        {order.product.category}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600 mb-1">
                                                        Pet Type
                                                    </p>
                                                    <span className="text-sm font-semibold text-gray-700">
                                                        {order.product.pet_type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Note */}
                            {order.note && (
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 mb-8">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-purple-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                            />
                                        </svg>
                                        Order Note
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed italic">
                                        "{order.note}"
                                    </p>
                                </div>
                            )}

                            {/* Price Breakdown */}
                            <div className="border-2 border-gray-200 rounded-xl overflow-hidden mb-8">
                                <div className="bg-gray-50 px-6 py-3 border-b-2 border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Payment Summary
                                    </h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="text-gray-700 font-medium">
                                            Unit Price
                                        </span>
                                        <span className="font-semibold text-gray-900">
                                            {formatPrice(order.product.price)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="text-gray-700 font-medium">
                                            Quantity
                                        </span>
                                        <span className="font-semibold text-gray-900">
                                            {order.quantity}x
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center pt-3 bg-gradient-to-r from-orange-50 to-pink-50 -mx-6 px-6 py-4 rounded-lg">
                                        <span className="text-xl font-bold text-gray-900">
                                            Total Estimate
                                        </span>
                                        <span className="text-3xl font-bold text-orange-600">
                                            {formatPrice(order.total_estimate)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Important Notice */}
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300">
                                <div className="flex gap-4">
                                    <svg
                                        className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">
                                            Informasi Penting:
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-0.5">
                                                    •
                                                </span>
                                                <span>
                                                    Tim kami akan menghubungi
                                                    Anda melalui WhatsApp untuk
                                                    konfirmasi pesanan
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-0.5">
                                                    •
                                                </span>
                                                <span>
                                                    Email konfirmasi telah
                                                    dikirim ke {order.email}
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-0.5">
                                                    •
                                                </span>
                                                <span>
                                                    Simpan nomor order Anda:{" "}
                                                    <strong>
                                                        {order.order_number}
                                                    </strong>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-0.5">
                                                    •
                                                </span>
                                                <span>
                                                    Estimasi waktu pemrosesan:
                                                    1-3 hari kerja
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Invoice Footer */}
                        <div className="bg-gray-50 px-8 py-6 border-t-2 border-gray-200">
                            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                                <p className="text-sm text-gray-600 text-center sm:text-left">
                                    Terima kasih telah berbelanja di Pet Shop
                                    kami!
                                </p>
                                <div className="flex gap-3">
                                    <Link
                                        href={route("products.index")}
                                        className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all font-semibold inline-flex items-center gap-2"
                                    >
                                        Back to Products
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    .bg-gradient-to-b {
                        background: white !important;
                    }
                    .invoice-card,
                    .invoice-card * {
                        visibility: visible;
                    }
                    .invoice-card {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                    }
                    button,
                    .no-print {
                        display: none !important;
                    }
                }
            `}</style>
        </AuthenticatedLayout>
    );
}