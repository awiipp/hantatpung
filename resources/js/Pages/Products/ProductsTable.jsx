import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function ProductAdmin({ products, total, available, soldout }) {
    console.log(products);

    const categories = [
        "Food",
        "Toys",
        "Accessories",
        "Healthcare",
        "Grooming",
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Pet Products Management
                    </h2>
                    <Link
                        href="/products/create"
                        className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg font-semibold"
                    >
                        + Add New Product
                    </Link>
                </div>
            }
        >
            <Head title="Pet Products Admin" />

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1 font-medium">
                                        Total Products
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
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1 font-medium">
                                        In Stock
                                    </p>
                                    <h3 className="text-3xl font-bold text-green-600">
                                        {available}
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
                                        Out of Stock
                                    </p>
                                    <h3 className="text-3xl font-bold text-red-600">
                                        {soldout}
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
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products List */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-100">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-orange-400 to-pink-500 border-b">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Product
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Pet Type
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <tr
                                            key={product.id}
                                            className="hover:bg-orange-50 transition-all"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-20 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg mr-4 overflow-hidden border-2 border-orange-200 object-cover">
                                                        <img
                                                            src={`/storage/${product.image}`}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-gray-900">
                                                            {
                                                                product.product_name
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm font-medium text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                                                    {product.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm text-gray-600 font-medium">
                                                    {product.pet_type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm font-bold text-orange-600">
                                                    {product.price}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`px-3 py-1.5 inline-flex text-xs leading-5 font-bold rounded-full ${
                                                        product.status ===
                                                        "available"
                                                            ? "bg-green-100 text-green-800 border border-green-300"
                                                            : "bg-red-100 text-red-800 border border-red-300"
                                                    }`}
                                                >
                                                    {product.status ===
                                                    "soldout"
                                                        ? "sold out"
                                                        : product.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <div className="flex gap-2">
                                                     <Link
                                                        href={route('products.show', product.id)}
                                                        className="text-blue-600 hover:text-blue-800 font-semibold hover:bg-blue-50 px-3 py-1 rounded transition-all"
                                                    >
                                                        View
                                                    </Link>
                                                    <Link
                                                        href={route('products.edit', product.id)}
                                                        className="text-blue-600 hover:text-blue-800 font-semibold hover:bg-blue-50 px-3 py-1 rounded transition-all"
                                                    >
                                                        Edit
                                                    </Link>
                                            <Link
    href={route("products.destroy", product.id)}
    method="delete"
    as="button"
    onBefore={() => confirm('Apakah Anda yakin ingin menghapus product ini?')}
    className="text-red-600 hover:text-red-800 font-semibold hover:bg-red-50 px-3 py-1 rounded transition-all"
>
    Delete
</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
