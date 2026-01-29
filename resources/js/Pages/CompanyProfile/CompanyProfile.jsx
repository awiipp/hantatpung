import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function CompanyProfile() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Company Profile
                </h2>
            }
        >
            <Head title="Company Profile" />

            {/* Hero Banner */}
            <div className="bg-blue-500 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Hancommerce</h1>
                <p className="text-xl">Your Trusted E-Commerce Partner</p>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Company Overview */}
                    <div className="bg-white rounded-lg shadow p-8 mb-8">
                        <h3 className="text-2xl font-bold mb-4">About Our Company</h3>
                        <p className="text-gray-600 mb-4">
                            Hancommerce adalah platform e-commerce terkemuka di Indonesia yang didirikan pada tahun 2026. 
                            Kami berkomitmen untuk memberikan pengalaman berbelanja online yang mudah, aman, dan menyenangkan 
                            bagi jutaan pelanggan di seluruh Indonesia.
                        </p>
                        <p className="text-gray-600">
                            Dengan lebih dari 10.000 produk berkualitas dari berbagai kategori, kami terus berinovasi untuk 
                            memenuhi kebutuhan pelanggan dan memberikan layanan terbaik dengan harga yang kompetitif.
                        </p>
                    </div>

                    {/* Company Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h4 className="font-semibold text-lg mb-4">Company Details</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Company Name:</span>
                                    <span className="font-medium">PT Hancommerce Indonesia</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Founded:</span>
                                    <span className="font-medium">2026</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Industry:</span>
                                    <span className="font-medium">E-Commerce</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Employees:</span>
                                    <span className="font-medium">500+</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-gray-600 text-sm">Address</p>
                                    <p className="font-medium">Jl. Sudirman No. 123, Jakarta 12345</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm">Email</p>
                                    <p className="font-medium">info@hancommerce.com</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm">Phone</p>
                                    <p className="font-medium">+62 21 1234 5678</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm">Website</p>
                                    <p className="font-medium">www.hancommerce.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vision & Mission */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h4 className="font-semibold text-lg mb-3">Our Vision</h4>
                            <p className="text-gray-600">
                                Menjadi platform e-commerce terdepan di Indonesia yang menghadirkan pengalaman 
                                belanja online terbaik dan paling dipercaya oleh jutaan pelanggan.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <h4 className="font-semibold text-lg mb-3">Our Mission</h4>
                            <p className="text-gray-600">
                                Memberikan akses mudah ke produk berkualitas dengan harga terjangkau, 
                                layanan pengiriman cepat, dan customer service yang selalu siap membantu.
                            </p>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="bg-white rounded-lg shadow p-8 mb-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Our Achievements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-500 mb-2">10K+</div>
                                <p className="text-gray-600">Products</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-500 mb-2">50K+</div>
                                <p className="text-gray-600">Customers</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-500 mb-2">100+</div>
                                <p className="text-gray-600">Cities</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-500 mb-2">99%</div>
                                <p className="text-gray-600">Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="bg-white rounded-lg shadow p-8 mb-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Our Core Values</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-2">Quality</h4>
                                <p className="text-gray-600 text-sm">
                                    Kami hanya menyediakan produk berkualitas terbaik untuk kepuasan pelanggan
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-green-100 w-20 h-20 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-2">Trust</h4>
                                <p className="text-gray-600 text-sm">
                                    Kepercayaan pelanggan adalah aset paling berharga bagi kami
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-purple-100 w-20 h-20 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-2">Innovation</h4>
                                <p className="text-gray-600 text-sm">
                                    Terus berinovasi untuk memberikan pengalaman belanja terbaik
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Team */}
                    <div className="bg-white rounded-lg shadow p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Leadership Team</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-1">Ahmad Rizki</h4>
                                <p className="text-sm text-gray-600 mb-2">CEO & Founder</p>
                                <p className="text-xs text-gray-500">15+ years in e-commerce</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-1">Siti Nurhaliza</h4>
                                <p className="text-sm text-gray-600 mb-2">Chief Technology Officer</p>
                                <p className="text-xs text-gray-500">Expert in tech & innovation</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold mb-1">Budi Santoso</h4>
                                <p className="text-sm text-gray-600 mb-2">Head of Operations</p>
                                <p className="text-xs text-gray-500">Logistics & supply chain expert</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}