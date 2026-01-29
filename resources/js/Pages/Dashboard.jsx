import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    // Sample data
    const stats = [
        { label: 'Total Products', value: '1,234', color: 'bg-blue-500' },
        { label: 'Articles', value: '89', color: 'bg-green-500' },
        { label: 'Events', value: '24', color: 'bg-purple-500' },
        { label: 'Clients', value: '5,678', color: 'bg-orange-500' },
    ];

    const products = [
        { id: 1, name: 'Wireless Headphones', price: 'Rp 200.000', stock: 45 },
        { id: 2, name: 'Laptop Bag', price: 'Rp 150.000', stock: 12 },
        { id: 3, name: 'Smart Watch', price: 'Rp 800.000', stock: 28 },
    ];

    const articles = [
        { id: 1, title: 'Tips Growing E-commerce', views: 1250 },
        { id: 2, title: 'Customer Behavior 2026', views: 890 },
        { id: 3, title: 'Future of Online Shopping', views: 2100 },
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                            >
                                <div className={`w-12 h-12 ${stat.color} rounded-lg mb-4`}></div>
                                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Products & Articles Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Products */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold mb-4">Recent Products</h3>
                            <div className="space-y-3">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition"
                                    >
                                        <div>
                                            <p className="font-medium text-gray-900">{product.name}</p>
                                            <p className="text-sm text-gray-600">Stock: {product.stock}</p>
                                        </div>
                                        <p className="font-bold text-gray-900">{product.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Articles */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold mb-4">Recent Articles</h3>
                            <div className="space-y-3">
                                {articles.map((article) => (
                                    <div
                                        key={article.id}
                                        className="p-3 bg-gray-50 rounded hover:bg-gray-100 transition"
                                    >
                                        <p className="font-medium text-gray-900 mb-1">{article.title}</p>
                                        <p className="text-sm text-gray-600">{article.views} views</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="bg-white rounded-lg shadow p-6 mt-6">
                        <h3 className="text-lg font-semibold mb-4">Gallery</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {['Campaign', 'Products', 'Events', 'Team'].map((item, index) => (
                                <div
                                    key={index}
                                    className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition cursor-pointer"
                                >
                                    <p className="text-sm font-medium text-gray-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Events & Clients */}
                    <div className="grid grid-cols-1 gap-6 mt-6">
                        {/* Events */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
                            <div className="space-y-3">
                                <div className="border-l-4 border-blue-500 pl-4 py-2">
                                    <p className="font-medium">Flash Sale Weekend</p>
                                    <p className="text-sm text-gray-600">Feb 1, 2026</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4 py-2">
                                    <p className="font-medium">Product Launch</p>
                                    <p className="text-sm text-gray-600">Feb 5, 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}