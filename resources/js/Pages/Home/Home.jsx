import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <AuthenticatedLayout>
            <Head title="Home" />

            {/* Hero Section */}
            <div className="bg-blue-500 text-white py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Hancommerce</h1>
                <p className="text-xl mb-6">Belanja Online Mudah dan Terpercaya</p>
                <button className="bg-white text-blue-500 px-6 py-3 rounded font-semibold">
                    Shop Now
                </button>
            </div>

            {/* Featured Products */}
            <div className="py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                
                <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
                    {/* Product 1 */}
                    <div className="bg-white rounded shadow p-4">
                        <img 
                            src="/images/earphone.jpeg" 
                            alt="Wireless Headphones" 
                            className="w-full h-48 object-cover rounded mb-4"
                        />
                        <h3 className="font-semibold mb-2">Wireless Headphones</h3>
                        <p className="text-gray-600 mb-3">Rp 2.999.000</p>
                        <button className="bg-blue-500 text-white w-full py-2 rounded">
                            Add to Cart
                        </button>
                    </div>

                    {/* Product 2 */}
                    <div className="bg-white rounded shadow p-4">
                        <img 
                            src="/images/laptop-bag.jpeg" 
                            alt="Laptop Bag" 
                            className="w-full h-48 object-cover rounded mb-4"
                        />
                        <h3 className="font-semibold mb-2">Laptop Bag</h3>
                        <p className="text-gray-600 mb-3">Rp 899.000</p>
                        <button className="bg-blue-500 text-white w-full py-2 rounded">
                            Add to Cart
                        </button>
                    </div>

                    {/* Product 3 */}
                    <div className="bg-white rounded shadow p-4">
                        <img 
                            src="/images/smartwatch.jpeg" 
                            alt="Smart Watch" 
                            className="w-full h-48 object-cover rounded mb-4"
                        />
                        <h3 className="font-semibold mb-2">Smart Watch</h3>
                        <p className="text-gray-600 mb-3">Rp 3.999.000</p>
                        <button className="bg-blue-500 text-white w-full py-2 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-100 py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
                
                <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6">
                    <div className="bg-white rounded shadow p-6 text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-semibold">Electronics</h3>
                    </div>

                    <div className="bg-white rounded shadow p-6 text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-semibold">Fashion</h3>
                    </div>

                    <div className="bg-white rounded shadow p-6 text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-semibold">Home</h3>
                    </div>

                    <div className="bg-white rounded shadow p-6 text-center">
                        <div className="bg-orange-100 w-16 h-16 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-semibold">Sports</h3>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                
                <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-semibold mb-2">Free Shipping</h3>
                        <p className="text-gray-600">Gratis ongkir untuk pembelian di atas Rp 100.000</p>
                    </div>

                    <div>
                        <div className="bg-green-100 w-20 h-20 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-semibold mb-2">Secure Payment</h3>
                        <p className="text-gray-600">Pembayaran aman dan terpercaya</p>
                    </div>

                    <div>
                        <div className="bg-purple-100 w-20 h-20 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-600">Customer service siap membantu Anda</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 mb-6">
                    <div>
                        <h4 className="font-bold mb-3">Hancommerce</h4>
                        <p className="text-gray-400 text-sm">Toko online terpercaya sejak 2026</p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-3">Contact</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Email: info@hancommerce.com</li>
                            <li>Phone: 0812-3456-7890</li>
                            <li>Address: Jakarta, Indonesia</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                    <p>&copy; 2026 Hancommerce. All rights reserved.</p>
                </div>
            </footer>
        </AuthenticatedLayout>
    );
}