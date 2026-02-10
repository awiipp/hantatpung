 import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ 
    totalOrders,
    pendingOrders,
    progressOrders,
    completedOrders,
    dogCount,
    catCount,
    birdCount,
    fishCount,
    totalArticles,
    totalEvents,
    totalGallery
}) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Pet Shop Dashboard
                    </h2>
                    <div className="text-sm text-gray-600">
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    
                    {/* Order Stats */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                            <span className="text-orange-500"></span>
                            Order Statistics
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-orange-500 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm text-gray-600 font-medium">Total Orders</p>
                                    <div className="bg-orange-100 p-2 rounded-lg">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-4xl font-bold text-gray-900">{totalOrders}</h3>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-yellow-500 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm text-gray-600 font-medium">Pending</p>
                                    <div className="bg-yellow-100 p-2 rounded-lg">
                                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-4xl font-bold text-yellow-600">{pendingOrders}</h3>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-500 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm text-gray-600 font-medium">In Progress</p>
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-4xl font-bold text-blue-600">{progressOrders}</h3>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-green-500 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm text-gray-600 font-medium">Completed</p>
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-4xl font-bold text-green-600">{completedOrders}</h3>
                            </div>
                        </div>
                    </div>

                    {/* Pet Type Stats */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                            <span className="text-pink-500"></span>
                            Products by Pet Type
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center transform hover:scale-105 border-2 border-amber-200">
                                <div className="text-5xl mb-3"></div>
                                <p className="font-bold text-gray-700 text-lg mb-2">Dog</p>
                                <h3 className="text-4xl font-bold text-amber-700">{dogCount}</h3>
                                <p className="text-sm text-amber-600 mt-1">Products</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center transform hover:scale-105 border-2 border-purple-200">
                                <div className="text-5xl mb-3"></div>
                                <p className="font-bold text-gray-700 text-lg mb-2">Cat</p>
                                <h3 className="text-4xl font-bold text-purple-700">{catCount}</h3>
                                <p className="text-sm text-purple-600 mt-1">Products</p>
                            </div>
                            <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center transform hover:scale-105 border-2 border-sky-200">
                                <div className="text-5xl mb-3"></div>
                                <p className="font-bold text-gray-700 text-lg mb-2">Bird</p>
                                <h3 className="text-4xl font-bold text-sky-700">{birdCount}</h3>
                                <p className="text-sm text-sky-600 mt-1">Products</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center transform hover:scale-105 border-2 border-blue-200">
                                <div className="text-5xl mb-3"></div>
                                <p className="font-bold text-gray-700 text-lg mb-2">Fish</p>
                                <h3 className="text-4xl font-bold text-blue-700">{fishCount}</h3>
                                <p className="text-sm text-blue-600 mt-1">Products</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Stats */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                            <span className="text-indigo-500"></span>
                            Content Statistics
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-pink-500 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-pink-100 p-3 rounded-xl">
                                        <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 font-medium mb-2">Total Articles</p>
                                <h3 className="text-4xl font-bold text-gray-900">{totalArticles}</h3>
                                <p className="text-sm text-pink-600 mt-2">Published articles</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-indigo-500 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-indigo-100 p-3 rounded-xl">
                                        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 font-medium mb-2">Total Events</p>
                                <h3 className="text-4xl font-bold text-gray-900">{totalEvents}</h3>
                                <p className="text-sm text-indigo-600 mt-2">Upcoming & active</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-emerald-500 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-emerald-100 p-3 rounded-xl">
                                        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 font-medium mb-2">Total Gallery</p>
                                <h3 className="text-4xl font-bold text-gray-900">{totalGallery}</h3>
                                <p className="text-sm text-emerald-600 mt-2">Images uploaded</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-8 rounded-2xl shadow-xl">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                    ⚡ Quick Actions
                                </h3>
                                <p className="text-orange-50">
                                    Manage your pet shop content and products
                                </p>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <Link
                                    href={route("products.create")}
                                    className="bg-white text-orange-600 px-6 py-3 rounded-xl hover:bg-orange-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add Product
                                </Link>
                                <Link
                                    href={route("articles.create")}
                                    className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2 border-2 border-white"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add Article
                                </Link>
                                <Link
                                    href={route("events.create")}
                                    className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2 border-2 border-white"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add Event
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}