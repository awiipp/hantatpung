import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function OrderAdmin({ orders, total, pending, progress, completed, cancelled }) {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showModal, setShowModal] = useState(false);

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
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    // Get status color
    const getStatusColor = (status) => {
        const colors = {
            pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
            progress: "bg-blue-100 text-blue-800 border-blue-300",
            completed: "bg-green-100 text-green-800 border-green-300",
            cancelled: "bg-red-100 text-red-800 border-red-300",
        };
        return colors[status] || "bg-gray-100 text-gray-800 border-gray-300";
    };

    // Get status label
    const getStatusLabel = (status) => {
        const labels = {
            pending: "Pending",
            progress: "In Progress",
            completed: "Completed",
            cancelled: "Cancelled",
        };
        return labels[status] || status;
    };

    // Handle view order
    const handleViewOrder = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    // Close modal
    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => setSelectedOrder(null), 300);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Order Management
                    </h2>
                    <div className="flex gap-3">
                        <Link
                            href={route("products.index")}
                            className="bg-white text-orange-600 border-2 border-orange-400 px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg font-semibold hover:bg-orange-50"
                        >
                            View Products
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Order Management" />

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1 font-medium">
                                        Total Orders
                                    </p>
                                    <h3 className="text-3xl font-bold text-gray-900">
                                        {total}
                                    </h3>
                                </div>
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <svg
                                        className="w-8 h-8 text-orange-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-yellow-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1 font-medium">
                                        Pending
                                    </p>
                                    <h3 className="text-3xl font-bold text-yellow-600">
                                        {pending}
                                    </h3>
                                </div>
                                <div className="bg-yellow-100 p-3 rounded-lg">
                                    <svg
                                        className="w-8 h-8 text-yellow-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1 font-medium">
                                        In Progress
                                    </p>
                                    <h3 className="text-3xl font-bold text-blue-600">
                                        {progress}
                                    </h3>
                                </div>
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <svg
                                        className="w-8 h-8 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1 font-medium">
                                        Completed
                                    </p>
                                    <h3 className="text-3xl font-bold text-green-600">
                                        {completed}
                                    </h3>
                                </div>
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <svg
                                        className="w-8 h-8 text-green-600"
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
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-red-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1 font-medium">
                                        Cancelled
                                    </p>
                                    <h3 className="text-3xl font-bold text-red-600">
                                        {cancelled}
                                    </h3>
                                </div>
                                <div className="bg-red-100 p-3 rounded-lg">
                                    <svg
                                        className="w-8 h-8 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Orders Table */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-100">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-orange-400 to-pink-500 border-b">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Order Number
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Customer
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Product
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Quantity
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Total
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {orders.length > 0 ? (
                                        orders.map((order) => (
                                            <tr
                                                key={order.id}
                                                className="hover:bg-orange-50 transition-all"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <p className="font-bold text-orange-600 text-sm">
                                                        {order.order_number}
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <p className="font-semibold text-gray-900 text-sm">
                                                            {order.full_name}
                                                        </p>
                                                        <p className="text-xs text-gray-500">
                                                            {order.email}
                                                        </p>
                                                        <p className="text-xs text-gray-500">
                                                            📱 {order.whatsapp}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg mr-3 overflow-hidden border-2 border-orange-200">
                                                            <img
                                                                src={`/storage/${order.product.image}`}
                                                                alt={
                                                                    order
                                                                        .product
                                                                        .product_name
                                                                }
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-900 text-sm">
                                                                {
                                                                    order
                                                                        .product
                                                                        .product_name
                                                                }
                                                            </p>
                                                            <p className="text-xs text-gray-500">
                                                                {
                                                                    order
                                                                        .product
                                                                        .category
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-sm font-bold text-gray-700">
                                                        {order.quantity}x
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-sm font-bold text-orange-600">
                                                        {formatPrice(
                                                            order.total_estimate,
                                                        )}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className={`px-3 py-1.5 inline-flex text-xs leading-5 font-bold rounded-full border ${getStatusColor(order.status)}`}
                                                    >
                                                        {getStatusLabel(
                                                            order.status,
                                                        )}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <p className="text-xs text-gray-600">
                                                        {formatDate(
                                                            order.created_at,
                                                        )}
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleViewOrder(order)}
                                                            className="text-blue-600 hover:text-blue-800 font-semibold hover:bg-blue-50 px-3 py-1 rounded transition-all"
                                                        >
                                                            View
                                                        </button>
                                                        <Link
                                                             href={route(
                                                                 "orders.destroy",
                                                                 order.id,
                                                             )}
                                                            method="delete"
                                                            as="button"
                                                            className="text-red-600 hover:text-red-800 font-semibold hover:bg-red-50 px-3 py-1 rounded transition-all"
                                                            onClick={(e) => {
                                                                if (
                                                                    !confirm(
                                                                        "Are you sure you want to delete this order?",
                                                                    )
                                                                ) {
                                                                    e.preventDefault();
                                                                }
                                                            }}
                                                        >
                                                            Delete
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="8"
                                                className="px-6 py-12 text-center"
                                            >
                                                <div className="flex flex-col items-center justify-center">
                                                    <svg
                                                        className="w-16 h-16 text-gray-300 mb-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                        />
                                                    </svg>
                                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                                        No Orders Found
                                                    </h3>
                                                    <p className="text-gray-500 text-sm">
                                                        There are no orders in
                                                        the system yet.
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Note Section */}
                    {orders.some((order) => order.note) && (
                        <div className="mt-8 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl shadow-md p-6 border-l-4 border-orange-500">
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
                                Recent Order Notes
                            </h3>
                            <div className="space-y-2">
                                {orders
                                    .filter((order) => order.note)
                                    .slice(0, 3)
                                    .map((order) => (
                                        <div
                                            key={order.id}
                                            className="bg-white p-3 rounded-lg border border-orange-200"
                                        >
                                            <p className="text-sm font-semibold text-gray-700">
                                                {order.order_number} -{" "}
                                                {order.full_name}
                                            </p>
                                            <p className="text-sm text-gray-600 mt-1">
                                                "{order.note}"
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal View Order */}
            {showModal && selectedOrder && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-4 flex justify-between items-center rounded-t-2xl">
                            <h2 className="text-2xl font-bold text-white">
                                Order Details
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-white hover:bg-white/20 rounded-lg p-2 transition-all"
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
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-6">
                            {/* Order Info */}
                            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 border-2 border-orange-200">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">
                                            Order Number
                                        </p>
                                        <p className="font-bold text-orange-600 text-lg">
                                            {selectedOrder.order_number}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">
                                            Status
                                        </p>
                                        <span
                                            className={`px-4 py-2 inline-flex text-sm font-bold rounded-full border ${getStatusColor(selectedOrder.status)}`}
                                        >
                                            {getStatusLabel(selectedOrder.status)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">
                                            Order Date
                                        </p>
                                        <p className="font-semibold text-gray-900">
                                            {formatDate(selectedOrder.created_at)}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">
                                            Last Updated
                                        </p>
                                        <p className="font-semibold text-gray-900">
                                            {formatDate(selectedOrder.updated_at)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
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
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                    Customer Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">
                                            Full Name
                                        </p>
                                        <p className="font-semibold text-gray-900">
                                            {selectedOrder.full_name}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">
                                            Email
                                        </p>
                                        <p className="font-semibold text-gray-900">
                                            {selectedOrder.email}
                                        </p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="text-sm text-gray-600 mb-1">
                                            WhatsApp
                                        </p>
                                        <p className="font-semibold text-gray-900">
                                            📱 {selectedOrder.whatsapp}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
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
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>
                                    Product Information
                                </h3>
                                <div className="flex items-center gap-6">
                                    <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl overflow-hidden border-4 border-orange-200">
                                        <img
                                            src={`/storage/${selectedOrder.product.image}`}
                                            alt={selectedOrder.product.product_name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                                            {selectedOrder.product.product_name}
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-600">
                                                    Category:
                                                </span>
                                                <span className="text-sm font-semibold text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                                                    {selectedOrder.product.category}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-600">
                                                    Pet Type:
                                                </span>
                                                <span className="text-sm font-semibold text-gray-700">
                                                    {selectedOrder.product.pet_type}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-600">
                                                    Unit Price:
                                                </span>
                                                <span className="text-sm font-bold text-orange-600">
                                                    {formatPrice(selectedOrder.product.price)}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-600">
                                                    Quantity:
                                                </span>
                                                <span className="text-lg font-bold text-gray-900">
                                                    {selectedOrder.quantity}x
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Note */}
                            {selectedOrder.note && (
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
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
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                            />
                                        </svg>
                                        Customer Note
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed italic">
                                        "{selectedOrder.note}"
                                    </p>
                                </div>
                            )}

                            {/* Total */}
                            <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl p-6 text-white">
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold">
                                        Total Estimate:
                                    </span>
                                    <span className="text-4xl font-bold">
                                        {formatPrice(selectedOrder.total_estimate)}
                                    </span>
                                </div>
                                <p className="text-sm text-white/80 mt-2">
                                    {selectedOrder.quantity} item(s) × {formatPrice(selectedOrder.product.price)}
                                </p>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="border-t-2 border-gray-200 px-6 py-4 flex justify-end gap-3 bg-gray-50 rounded-b-2xl">
                            <button
                                onClick={closeModal}
                                className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all font-semibold"
                            >
                                Close
                            </button>
                            <Link
                                href={route("orders.destroy", selectedOrder.id)}
                                method="delete"
                                as="button"
                                className="px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-semibold"
                                onClick={(e) => {
                                    if (!confirm("Are you sure you want to delete this order?")) {
                                        e.preventDefault();
                                    } else {
                                        closeModal();
                                    }
                                }}
                            >
                                Delete Order
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}