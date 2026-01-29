 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AboutUs() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    About Us
                </h2>
            }
        >
            <Head title="About Us" />

            {/* Hero Section */}
            <div className="bg-blue-500 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">About Hancommerce</h1>
                <p className="text-xl">Your Trusted Online Shopping Destination</p>
            </div>

            {/* Main Content */}
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Company Story */}
                    <div className="bg-white rounded-lg shadow p-8 mb-8">
                        <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                        <p className="text-gray-600 mb-4">
                            Hancommerce didirikan pada tahun 2026 dengan visi untuk menyediakan pengalaman belanja online yang mudah, 
                            aman, dan terpercaya bagi semua pelanggan di Indonesia.
                        </p>
                        <p className="text-gray-600">
                            Kami berkomitmen untuk memberikan produk berkualitas tinggi dengan harga terbaik, disertai layanan pelanggan 
                            yang responsif dan profesional.
                        </p>
                    </div>

                    {/* Vision & Mission */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow p-8">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                            <p className="text-gray-600">
                                Menjadi platform e-commerce terdepan di Indonesia yang menghadirkan pengalaman belanja online terbaik 
                                dan paling dipercaya oleh jutaan pelanggan.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-8">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                            <p className="text-gray-600">
                                Memberikan akses mudah ke produk berkualitas dengan harga terjangkau, layanan pengiriman cepat, 
                                dan customer service yang selalu siap membantu.
                            </p>
                        </div>
                    </div>

                    {/* Our Values */}
                    <div className="bg-white rounded-lg shadow p-8 mb-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Our Values</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-purple-100 w-20 h-20 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-2">Quality</h4>
                                <p className="text-gray-600 text-sm">Kami hanya menyediakan produk berkualitas terbaik</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-orange-100 w-20 h-20 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-2">Trust</h4>
                                <p className="text-gray-600 text-sm">Kepercayaan pelanggan adalah prioritas utama kami</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-pink-100 w-20 h-20 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-2">Innovation</h4>
                                <p className="text-gray-600 text-sm">Terus berinovasi untuk pengalaman belanja terbaik</p>
                            </div>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <h4 className="text-3xl font-bold text-blue-500 mb-2">10K+</h4>
                            <p className="text-gray-600">Products</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <h4 className="text-3xl font-bold text-green-500 mb-2">50K+</h4>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <h4 className="text-3xl font-bold text-purple-500 mb-2">100+</h4>
                            <p className="text-gray-600">Cities</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <h4 className="text-3xl font-bold text-orange-500 mb-2">24/7</h4>
                            <p className="text-gray-600">Support</p>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="bg-white rounded-lg shadow p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Our Team</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-1">John Doe</h4>
                                <p className="text-gray-600 text-sm">CEO & Founder</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-1">Jane Smith</h4>
                                <p className="text-gray-600 text-sm">Chief Technology Officer</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-1">Mike Johnson</h4>
                                <p className="text-gray-600 text-sm">Head of Operations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}