 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head } from '@inertiajs/react';
 
 export default function ProductAdmin() {
     const products = [
         { 
             id: 1, 
             name: 'Premium Dog Food - Adult Breed', 
             category: 'Food',
             petType: 'Dog',
             price: 'Rp 459.000', 
             stock: 45,
             status: 'In Stock',
             image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=100'
         },
         { 
             id: 2, 
             name: 'Cat Scratching Post Tower', 
             category: 'Toys',
             petType: 'Cat',
             price: 'Rp 899.000', 
             stock: 12,
             status: 'Low Stock',
             image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=100'
         },
         { 
             id: 3, 
             name: 'Automatic Pet Feeder', 
             category: 'Accessories',
             petType: 'All Pets',
             price: 'Rp 1.299.000', 
             stock: 0,
             status: 'Out of Stock',
             image: 'https://images.unsplash.com/photo-1591768575383-310ff1cc0f8d?w=100'
         },
         { 
             id: 4, 
             name: 'Natural Cat Litter - Unscented', 
             category: 'Hygiene',
             petType: 'Cat',
             price: 'Rp 185.000', 
             stock: 78,
             status: 'In Stock',
             image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=100'
         },
         { 
             id: 5, 
             name: 'Orthopedic Dog Bed - Large', 
             category: 'Accessories',
             petType: 'Dog',
             price: 'Rp 1.450.000', 
             stock: 15,
             status: 'In Stock',
             image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=100'
         },
         { 
             id: 6, 
             name: 'Interactive Cat Toy Set', 
             category: 'Toys',
             petType: 'Cat',
             price: 'Rp 275.000', 
             stock: 8,
             status: 'Low Stock',
             image: 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?w=100'
         },
     ];
 
     const categories = ['All', 'Food', 'Toys', 'Accessories', 'Hygiene'];
 
     return (
         <AuthenticatedLayout
             header={
                 <div className="flex justify-between items-center">
                     <h2 className="text-xl font-semibold leading-tight text-gray-800">
                         Pet Products Management
                     </h2>
                     <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg font-semibold">
                         + Add New Product
                     </button>
                 </div>
             }
         >
             <Head title="Pet Products Admin" />
 
             <div className="py-12 bg-gradient-to-b from-orange-50 to-white min-h-screen">
                 <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
                     {/* Stats */}
                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
                         <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100 hover:shadow-lg transition-all">
                             <div className="flex items-center justify-between">
                                 <div>
                                     <p className="text-sm text-gray-600 mb-1 font-medium">Total Products</p>
                                     <h3 className="text-3xl font-bold text-gray-900">1,234</h3>
                                 </div>
                                 <div className="bg-orange-100 p-3 rounded-lg">
                                     <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                     </svg>
                                 </div>
                             </div>
                         </div>
                         <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all">
                             <div className="flex items-center justify-between">
                                 <div>
                                     <p className="text-sm text-gray-600 mb-1 font-medium">In Stock</p>
                                     <h3 className="text-3xl font-bold text-green-600">1,156</h3>
                                 </div>
                                 <div className="bg-green-100 p-3 rounded-lg">
                                     <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                     </svg>
                                 </div>
                             </div>
                         </div>
                         <div className="bg-white p-6 rounded-xl shadow-md border border-red-100 hover:shadow-lg transition-all">
                             <div className="flex items-center justify-between">
                                 <div>
                                     <p className="text-sm text-gray-600 mb-1 font-medium">Out of Stock</p>
                                     <h3 className="text-3xl font-bold text-red-600">78</h3>
                                 </div>
                                 <div className="bg-red-100 p-3 rounded-lg">
                                     <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                     </svg>
                                 </div>
                             </div>
                         </div>
                     </div>
 
                     {/* Filter & Search */}
                     <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-orange-100">
                         <div className="flex flex-col sm:flex-row gap-4">
                             {/* Search */}
                             <div className="flex-1">
                                 <div className="relative">
                                     <input
                                         type="text"
                                         placeholder="Search pet products..."
                                         className="w-full px-4 py-2.5 pl-11 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                                     />
                                     <svg
                                         className="absolute left-3 top-3 h-5 w-5 text-orange-400"
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
                             
                             {/* Category Filter */}
                             <div className="flex gap-2 overflow-x-auto">
                                 {categories.map((category) => (
                                     <button
                                         key={category}
                                         className="px-4 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 rounded-lg whitespace-nowrap transition-all font-medium hover:shadow-md"
                                     >
                                         {category}
                                     </button>
                                 ))}
                             </div>
                         </div>
                     </div>
 
                     {/* Products List */}
                     <div className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-100">
                         <div className="overflow-x-auto">
                             <table className="w-full">
                                 <thead className="bg-gradient-to-r from-orange-500 to-orange-600 border-b">
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
                                             Stock
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
                                         <tr key={product.id} className="hover:bg-orange-50 transition-all">
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                 <div className="flex items-center">
                                                     <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg mr-4 overflow-hidden border-2 border-orange-200">
                                                         <img 
                                                             src={product.image} 
                                                             alt={product.name}
                                                             className="w-full h-full object-cover"
                                                         />
                                                     </div>
                                                     <div>
                                                         <p className="font-semibold text-gray-900">
                                                             {product.name}
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
                                                     {product.petType}
                                                 </span>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                 <span className="text-sm font-bold text-orange-600">
                                                     {product.price}
                                                 </span>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                 <span className="text-sm font-semibold text-gray-700">
                                                     {product.stock} units
                                                 </span>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                 <span
                                                     className={`px-3 py-1.5 inline-flex text-xs leading-5 font-bold rounded-full ${
                                                         product.status === 'In Stock'
                                                             ? 'bg-green-100 text-green-800 border border-green-300'
                                                             : product.status === 'Low Stock'
                                                             ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                                                             : 'bg-red-100 text-red-800 border border-red-300'
                                                     }`}
                                                 >
                                                     {product.status}
                                                 </span>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                 <div className="flex gap-2">
                                                     <button className="text-blue-600 hover:text-blue-800 font-semibold hover:bg-blue-50 px-3 py-1 rounded transition-all">
                                                         Edit
                                                     </button>
                                                     <button className="text-red-600 hover:text-red-800 font-semibold hover:bg-red-50 px-3 py-1 rounded transition-all">
                                                         Delete
                                                     </button>
                                                 </div>
                                             </td>
                                         </tr>
                                     ))}
                                 </tbody>
                             </table>
                         </div>
                         
                         {/* Pagination */}
                         <div className="bg-orange-50 px-6 py-4 border-t border-orange-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                             <p className="text-sm text-gray-700 font-medium">
                                 Showing 1 to 6 of 1,234 pet products
                             </p>
                             <div className="flex gap-2">
                                 <button className="px-4 py-2 border-2 border-orange-300 text-orange-700 font-semibold rounded-lg hover:bg-orange-100 transition-all">
                                     Previous
                                 </button>
                                 <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md">
                                     1
                                 </button>
                                 <button className="px-4 py-2 border-2 border-orange-300 text-orange-700 font-semibold rounded-lg hover:bg-orange-100 transition-all">
                                     2
                                 </button>
                                 <button className="px-4 py-2 border-2 border-orange-300 text-orange-700 font-semibold rounded-lg hover:bg-orange-100 transition-all">
                                     3
                                 </button>
                                 <button className="px-4 py-2 border-2 border-orange-300 text-orange-700 font-semibold rounded-lg hover:bg-orange-100 transition-all">
                                     Next
                                 </button>
                             </div>
                         </div>
                     </div>
 
                     {/* Quick Actions */}
                     <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                         <button className="bg-white border-2 border-orange-300 text-orange-700 px-6 py-4 rounded-xl hover:bg-orange-50 transition-all font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                             </svg>
                             Import Products
                         </button>
                         <button className="bg-white border-2 border-orange-300 text-orange-700 px-6 py-4 rounded-xl hover:bg-orange-50 transition-all font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                             </svg>
                             Export Products
                         </button>
                         <button className="bg-white border-2 border-orange-300 text-orange-700 px-6 py-4 rounded-xl hover:bg-orange-50 transition-all font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                             </svg>
                             View Analytics
                         </button>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }