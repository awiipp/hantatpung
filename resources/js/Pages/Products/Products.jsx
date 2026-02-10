 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head, Link } from '@inertiajs/react';
 import { useState } from 'react';
 
 export default function ProductPetShop({products}) {
     const [selectedCategory, setSelectedCategory] = useState('All');
     const [selectedPetType, setSelectedPetType] = useState('All');
 
     const categories = ['All', 'Food', 'Toys', 'Accessories', 'Hygiene'];
     const petTypes = ['All', 'Dog', 'Cat', 'Bird', 'Fish'];
 
     const formatPrice = (price) => {
         return new Intl.NumberFormat('id-ID', {
             style: 'currency',
             currency: 'IDR',
             minimumFractionDigits: 0
         }).format(price);
     };
 
     const filteredProducts = products.filter(product => {
         const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
         const petTypeMatch = selectedPetType === 'All' || product.petType === selectedPetType || product.petType === 'All';
         return categoryMatch && petTypeMatch;
     });
 
     return (
         <AuthenticatedLayout>
             <Head title="Pet Shop Products" />
 
             <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                     {/* Header */}
                     <div className="mb-8 text-center">
                         <h2 className="text-4xl font-bold text-gray-900 mb-3">
                             Pet Care Products
                         </h2>
                         <p className="text-lg text-gray-600">
                             Everything your furry friends need to stay happy and healthy
                         </p>
                     </div>
 
                     {/* Filters */}
                     <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-orange-100">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             {/* Category Filter */}
                             <div>
                                 <label className="block text-sm font-semibold text-gray-700 mb-3">
                                     Product Category
                                 </label>
                                 <div className="flex flex-wrap gap-2">
                                     {categories.map((category) => (
                                         <button
                                             key={category}
                                             onClick={() => setSelectedCategory(category)}
                                             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                 selectedCategory === category
                                                     ? 'bg-orange-500 text-white shadow-md'
                                                     : 'bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200'
                                             }`}
                                         >
                                             {category}
                                         </button>
                                     ))}
                                 </div>
                             </div>
 
                             {/* Pet Type Filter */}
                             <div>
                                 <label className="block text-sm font-semibold text-gray-700 mb-3">
                                     Pet Type
                                 </label>
                                 <div className="flex flex-wrap gap-2">
                                     {petTypes.map((petType) => (
                                         <button
                                             key={petType}
                                             onClick={() => setSelectedPetType(petType)}
                                             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                 selectedPetType === petType
                                                     ? 'bg-orange-500 text-white shadow-md'
                                                     : 'bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200'
                                             }`}
                                         >
                                             {petType}
                                         </button>
                                     ))}
                                 </div>
                             </div>
                         </div>
  
                     </div>
 
                     {/* Products Grid */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                         {filteredProducts.map((product) => (
                             <Link
                                 href={route('products.show', product.id)}
                                 key={product.id}
                                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                             >
                                 {/* Image */}
                                 <div className="relative h-64 bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden">
                                     <img
                                       src={`/storage/${product.image}`}
                                         alt={product.product_name}
                                         className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                     />
                                     
                                     {/* Pet Type Badge */}
                                     <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-orange-700 text-xs font-semibold rounded-full border border-orange-200">
                                         {product.pet_type}
                                     </span>

                                     {product.status === 'soldout' && (
                                        <span className="absolute top-3 left-3 px-3 py-1 bg-red-500 backdrop-blur-sm text-orange-50 text-xs font-semibold rounded-full border-2 border-orange-400">
                                         Sold Out
                                        </span>
                                     )}
                                 </div>
 
                                 {/* Content */}
                                 <div className="p-5">
                                     {/* Category & Weight */}
                                     <div className="flex items-center justify-between mb-2">
                                         <p className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
                                             {product.category}
                                         </p>
                                     </div>
 
                                     {/* Name */}
                                     <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                                         {product.product_name}
                                     </h3>
                                     
                                     {/* Description */}
                                     <h3 className="text-base text-gray-900 mb-2 line-clamp-2">
                                         {product.description}
                                     </h3>
 
                                    
 
                                     {/* Price */}
                                     <div className="mb-4 pb-4 border-b border-gray-100">
                                         <div className="flex items-center gap-2">
                                             <span className="text-xl font-bold text-orange-600">
                                                 {formatPrice(product.price)}
                                             </span>
                                          
                                         </div>
                                   
                                     </div>
 
                                     {/* Add to Cart Button */}
                                     <Link href={route('orders.create', product.id)} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg">
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
                                         Order Sekarang
                                     </Link>
                                 </div>
                             </Link>
                         ))}
                     </div>
 
                     {/* Info Banner */}
                     <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white text-center shadow-lg">
                         <h3 className="text-2xl font-bold mb-2">Free Delivery for Orders Above Rp 500.000</h3>
                         <p className="text-orange-100">Quality products for your beloved pets with fast and safe shipping</p>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }