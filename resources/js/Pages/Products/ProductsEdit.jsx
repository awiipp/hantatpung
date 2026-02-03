import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function ProductEdit({ product }) {
    const { data, setData, post, processing, errors } = useForm({
        product_name: product.product_name || '',
        category: product.category || '',
        pet_type: product.pet_type || '',
        price: product.price || '',
        description: product.description || '',
        status: product.status || 'available',
        image: null,
        _method: "PUT",
    });

    const categories = [
        'Food',
        'Toys',
        'Accessories',
        'Healthcare',
        'Grooming'
    ];

    const petTypes = [
        'Dog',
        'Cat',
        'Bird',
        'Fish',
        'Rabbit'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('products.update', product.id), {
            forceFormData: true,
        });

        console.log(data);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Edit Product
                    </h2>
                    <Link
                        href="/products"
                        className="text-gray-600 hover:text-gray-800 font-medium"
                    >
                        Back to Products
                    </Link>
                </div>
            }
        >
            <Head title="Edit Product" />

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white min-h-screen">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-100">
                        <div className="p-6 sm:p-8">
                            {/* Form Header */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    Product Information
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Update the details below to edit the product
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Product Name */}
                                <div>
                                    <label htmlFor="product_name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        id="product_name"
                                        value={data.product_name}
                                        onChange={(e) => setData('product_name', e.target.value)}
                                        className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                                        placeholder="e.g., Premium Dog Food - Adult Breed"
                                    />
                                    {errors.product_name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.product_name}</p>
                                    )}
                                </div>

                                {/* Category and Pet Type */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Category
                                        </label>
                                        <select
                                            id="category"
                                            value={data.category}
                                            onChange={(e) => setData('category', e.target.value)}
                                            className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                                        >
                                            <option value="">Select Category</option>
                                            {categories.map((cat) => (
                                                <option key={cat} value={cat}>
                                                    {cat}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category && (
                                            <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="pet_type" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Pet Type
                                        </label>
                                        <select
                                            id="pet_type"
                                            value={data.pet_type}
                                            onChange={(e) => setData('pet_type', e.target.value)}
                                            className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                                        >
                                            <option value="">Select Pet Type</option>
                                            {petTypes.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.pet_type && (
                                            <p className="mt-1 text-sm text-red-600">{errors.pet_type}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Price */}
                                <div>
                                    <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Price (Rp)
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        value={data.price}
                                        min={0}
                                        onChange={(e) => setData('price', e.target.value)}
                                        className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                                        placeholder="e.g., 459000"
                                    />
                                    {errors.price && (
                                        <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                                    )}
                                </div>

                                {/* Description */}
                                <div>
                                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Product Description
                                    </label>
                                    <textarea
                                        id="description"
                                        rows="5"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                                        placeholder="Describe the product features, benefits, and specifications..."
                                    ></textarea>
                                    {errors.description && (
                                        <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                                    )}
                                </div>

                                {/* Product Image */}
                                <div>
                                    <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Product Image
                                    </label>
                                    
                                    {/* Current Image Preview */}
                                    {product.image && !data.image && (
                                        <div className="mb-4">
                                            <p className="text-sm text-gray-600 mb-2">Current Image:</p>
                                            <img 
                                                src={`/storage/${product.image}`} 
                                                alt={product.product_name}
                                                className="w-32 h-32 object-cover rounded-lg border-2 border-orange-200"
                                            />
                                        </div>
                                    )}

                                    <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center hover:border-orange-400 transition-all">
                                        <input
                                            type="file"
                                            name="image"
                                            id="image"
                                            accept="image/*"
                                            onChange={(e) => setData('image', e.target.files[0])}
                                            className="hidden"
                                        />
                                        <label htmlFor="image" className="cursor-pointer">
                                            <div className="flex flex-col items-center">
                                                <svg className="w-12 h-12 text-orange-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <p className="text-sm text-gray-600 mb-1">
                                                    <span className="text-orange-600 font-semibold">Click to upload new image</span> or drag and drop
                                                </p>
                                                <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB</p>
                                                <p className="text-xs text-gray-400 mt-1">Leave empty to keep current image</p>
                                            </div>
                                        </label>
                                        {data.image && (
                                            <p className="mt-3 text-sm text-green-600 font-medium">
                                                New image selected: {data.image.name}
                                            </p>
                                        )}
                                    </div>
                                    {errors.image && (
                                        <p className="mt-1 text-sm text-red-600">{errors.image}</p>
                                    )}
                                </div>

                                {/* Stock Status */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Stock Status
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <label className="relative flex items-center justify-center p-4 border-2 border-orange-200 rounded-lg cursor-pointer hover:bg-orange-50 transition-all">
                                            <input
                                                type="radio"
                                                value="available"
                                                checked={data.status === 'available'}
                                                onChange={(e) => setData('status', e.target.value)}
                                                className="absolute left-4 text-orange-500 focus:ring-orange-500"
                                            />
                                            <span className="ml-6 text-sm font-semibold text-gray-700">Available</span>
                                        </label>
                                        <label className="relative flex items-center justify-center p-4 border-2 border-orange-200 rounded-lg cursor-pointer hover:bg-orange-50 transition-all">
                                            <input
                                                type="radio"
                                                value="soldout"
                                                checked={data.status === 'soldout'}
                                                onChange={(e) => setData('status', e.target.value)}
                                                className="absolute left-4 text-orange-500 focus:ring-orange-500"
                                            />
                                            <span className="ml-6 text-sm font-semibold text-gray-700">Sold Out</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200">
                                    <Link
                                        href="/products"
                                        className="px-6 py-2.5 border-2 border-orange-300 text-orange-700 rounded-lg font-semibold hover:bg-orange-50 transition-all"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                                    >
                                        {processing ? 'Updating...' : 'Update Product'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Help Section */}
                    <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Product Guidelines</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Use clear, descriptive product names that include brand and key features
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Upload high-quality product images with good lighting and clear details
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Include detailed descriptions with ingredients, sizes, and usage instructions
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Set accurate stock quantities and update regularly to avoid overselling
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}