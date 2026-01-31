import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Product() {
    const products = [
        { 
            id: 1, 
            name: 'Wireless Headphones Pro', 
            category: 'Electronics',
            price: 'Rp 2.999.000', 
            stock: 45,
            status: 'In Stock',
            image: 'https://via.placeholder.com/100'
        },
        { 
            id: 2, 
            name: 'Leather Laptop Bag', 
            category: 'Accessories',
            price: 'Rp 899.000', 
            stock: 12,
            status: 'Out of Stock',
            image: 'https://via.placeholder.com/100'
        },
        { 
            id: 3, 
            name: 'Smart Watch Series 5', 
            category: 'Electronics',
            price: 'Rp 3.999.000', 
            stock: 0,
            status: 'Out of Stock',
            image: 'https://via.placeholder.com/100'
        },
        { 
            id: 4, 
            name: 'Premium Coffee Maker', 
            category: 'Home',
            price: 'Rp 1.599.000', 
            stock: 28,
            status: 'In Stock',
            image: 'https://via.placeholder.com/100'
        },
        { 
            id: 5, 
            name: 'Ergonomic Office Chair', 
            category: 'Furniture',
            price: 'Rp 4.499.000', 
            stock: 15,
            status: 'In Stock',
            image: 'https://via.placeholder.com/100'
        },
        { 
            id: 6, 
            name: 'Mechanical Keyboard', 
            category: 'Electronics',
            price: 'Rp 1.299.000', 
            stock: 8,
            status: 'Out of Stock',
            image: 'https://via.placeholder.com/100'
        },
    ];

    const categories = ['All', 'Electronics', 'Accessories', 'Home', 'Furniture'];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Products
                    </h2>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
                        + Add Product
                    </button>
                </div>
            }
        >
            <Head title="Products" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <p className="text-sm text-gray-600 mb-1">Total Products</p>
                            <h3 className="text-2xl font-bold text-gray-900">1,234</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <p className="text-sm text-gray-600 mb-1">In Stock</p>
                            <h3 className="text-2xl font-bold text-green-600">1,156</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <p className="text-sm text-gray-600 mb-1">Out of Stock</p>
                            <h3 className="text-2xl font-bold text-orange-600">78</h3>
                        </div>
                    </div>

                    {/* Filter & Search */}
                    <div className="bg-white rounded-lg shadow p-6 mb-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Search */}
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            
                            {/* Category Filter */}
                            <div className="flex gap-2 overflow-x-auto">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg whitespace-nowrap transition"
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Products List */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Product
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Stock
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50 transition">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
                                                    <div>
                                                        <p className="font-medium text-gray-900">
                                                            {product.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm text-gray-600">
                                                    {product.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm font-semibold text-gray-900">
                                                    {product.price}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm text-gray-600">
                                                    {product.stock}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        product.status === 'In Stock'
                                                            ? 'bg-green-100 text-green-800'
                                                            : product.status === 'Out of Stock'
                                                            ? 'bg-orange-100 text-orange-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                >
                                                    {product.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <button className="text-blue-600 hover:text-blue-800 mr-3">
                                                    Edit
                                                </button>
                                                <button className="text-red-600 hover:text-red-800">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        {/* Pagination */}
                        <div className="bg-gray-50 px-6 py-4 border-t flex justify-between items-center">
                            <p className="text-sm text-gray-600">
                                Showing 1 to 6 of 1,234 products
                            </p>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition">
                                    Previous
                                </button>
                                <button className="px-3 py-1 bg-blue-500 text-white rounded">
                                    1
                                </button>
                                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition">
                                    2
                                </button>
                                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition">
                                    3
                                </button>
                                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}