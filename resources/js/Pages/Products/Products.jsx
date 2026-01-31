import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function ProductUser() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState('All');

    const products = [
        { 
            id: 1, 
            name: 'Wireless Headphones Pro', 
            category: 'Electronics',
            price: 2999000,
            originalPrice: 3499000,
            rating: 4.5,
            reviews: 128,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
            badge: 'Sale'
        },
        { 
            id: 2, 
            name: 'Leather Laptop Bag', 
            category: 'Accessories',
            price: 899000,
            rating: 4.8,
            reviews: 86,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            badge: null
        },
        { 
            id: 3, 
            name: 'Smart Watch Series 5', 
            category: 'Electronics',
            price: 3999000,
            rating: 4.7,
            reviews: 234,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
            badge: 'New'
        },
        { 
            id: 4, 
            name: 'Premium Coffee Maker', 
            category: 'Home',
            price: 1599000,
            originalPrice: 1999000,
            rating: 4.6,
            reviews: 95,
            image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
            badge: 'Sale'
        },
        { 
            id: 5, 
            name: 'Ergonomic Office Chair', 
            category: 'Furniture',
            price: 4499000,
            rating: 4.9,
            reviews: 167,
            image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400',
            badge: 'Best Seller'
        },
        { 
            id: 6, 
            name: 'Mechanical Keyboard RGB', 
            category: 'Electronics',
            price: 1299000,
            rating: 4.4,
            reviews: 203,
            image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
            badge: null
        },
        { 
            id: 7, 
            name: 'Premium Sneakers', 
            category: 'Fashion',
            price: 1899000,
            originalPrice: 2299000,
            rating: 4.7,
            reviews: 145,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
            badge: 'Sale'
        },
        { 
            id: 8, 
            name: 'Minimalist Backpack', 
            category: 'Accessories',
            price: 699000,
            rating: 4.5,
            reviews: 89,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            badge: null
        },
    ];

    const categories = ['All', 'Electronics', 'Accessories', 'Home', 'Furniture', 'Fashion'];
    const priceRanges = ['All', 'Under 1M', '1M - 2M', '2M - 4M', 'Above 4M'];

    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    };

    const renderStars = (rating) => {
        return (
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        className={`w-4 h-4 ${
                            star <= Math.floor(rating)
                                ? 'text-yellow-400 fill-current'
                                : star - 0.5 <= rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                        }`}
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
                <span className="text-sm text-gray-600 ml-1">({rating})</span>
            </div>
        );
    };

    return (
        <AuthenticatedLayout>
            <Head title="Products" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Our Products
                        </h2>
                        <p className="text-gray-600">
                            Discover amazing products with the best quality
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Category Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Category
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 rounded-md text-sm transition ${
                                                selectedCategory === category
                                                    ? 'bg-gray-800 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Search Bar */}
                        <div className="mt-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                                />
                                <svg
                                    className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition duration-300 group"
                            >
                                {/* Image */}
                                <div className="relative h-64 bg-gray-200 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                    />
                                    {product.badge && (
                                        <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
                                            product.badge === 'Sale' 
                                                ? 'bg-red-500 text-white' 
                                                : product.badge === 'New'
                                                ? 'bg-green-500 text-white'
                                                : 'bg-blue-500 text-white'
                                        }`}>
                                            {product.badge}
                                        </span>
                                    )}
                                    {/* Wishlist Button */}
                                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                                        <svg
                                            className="w-5 h-5 text-gray-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    {/* Category */}
                                    <p className="text-xs text-gray-500 mb-1">
                                        {product.category}
                                    </p>

                                    {/* Name */}
                                    <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 h-12">
                                        {product.name}
                                    </h3>

                                    {/* Rating */}
                                    <div className="mb-3">
                                        {renderStars(product.rating)}
                                        <span className="text-xs text-gray-500 ml-1">
                                            ({product.reviews} reviews)
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-gray-900">
                                                {formatPrice(product.price)}
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-gray-500 line-through">
                                                    {formatPrice(product.originalPrice)}
                                                </span>
                                            )}
                                        </div>
                                        {product.originalPrice && (
                                            <span className="text-xs text-red-600 font-medium">
                                                Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                                            </span>
                                        )}
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-150 flex items-center justify-center gap-2">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-12 text-center">
                        <button className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-md hover:border-gray-800 hover:text-gray-800 transition duration-150 font-medium">
                            Load More Products
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}