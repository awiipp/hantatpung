 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head, Link } from '@inertiajs/react';
 import { useState } from 'react';
 
 export default function ProductPetShop({products}) {
     const [selectedCategory, setSelectedCategory] = useState('All');
     const [selectedPetType, setSelectedPetType] = useState('All');
 
     // const products = [
     //     { 
     //         id: 1, 
     //         name: 'Premium Dog Food - Adult Breed', 
     //         category: 'Food',
     //         petType: 'Dog',
     //         price: 459000,
     //         originalPrice: 550000,
     //         image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400',
     //         weight: '5kg'
     //     },
     //     { 
     //         id: 2, 
     //         name: 'Cat Scratching Post Tower', 
     //         category: 'Toys',
     //         petType: 'Cat',
     //         price: 899000,
     //         rating: 4.7,
     //         reviews: 156,
     //         image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400',
     //         badge: null,
     //         weight: null
     //     },
     //     { 
     //         id: 3, 
     //         name: 'Automatic Pet Feeder', 
     //         category: 'Accessories',
     //         petType: 'All',
     //         price: 1299000,
     //         originalPrice: 1599000,
     //         rating: 4.6,
     //         reviews: 98,
     //         image: 'https://images.unsplash.com/photo-1591768575383-310ff1cc0f8d?w=400',
     //         weight: null
     //     },
     //     { 
     //         id: 4, 
     //         name: 'Natural Cat Litter - Unscented', 
     //         category: 'Hygiene',
     //         petType: 'Cat',
     //         price: 185000,
     //         rating: 4.9,
     //         reviews: 312,
     //         image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400',
     //         weight: '10L'
     //     },
     //     { 
     //         id: 5, 
     //         name: 'Orthopedic Dog Bed - Large', 
     //         category: 'Accessories',
     //         petType: 'Dog',
     //         price: 1450000,
     //         rating: 4.8,
     //         reviews: 167,
     //         image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400',
     //         badge: null,
     //         weight: null
     //     },
     //     { 
     //         id: 6, 
     //         name: 'Interactive Cat Toy Set', 
     //         category: 'Toys',
     //         petType: 'Cat',
     //         price: 275000,
     //         originalPrice: 350000,
     //         rating: 4.5,
     //         reviews: 203,
     //         image: 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?w=400',
     //         weight: null
     //     },
     //     { 
     //         id: 7, 
     //         name: 'Durable Chew Rope Toy', 
     //         category: 'Toys',
     //         petType: 'Dog',
     //         price: 149000,
     //         rating: 4.6,
     //         reviews: 145,
     //         image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
     //         badge: null,
     //         weight: null
     //     },
     //     { 
     //         id: 8, 
     //         name: 'Pet Grooming Brush Kit', 
     //         category: 'Hygiene',
     //         petType: 'All',
     //         price: 325000,
     //         rating: 4.7,
     //         reviews: 189,
     //         image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400',
     //         badge: null,
     //         weight: null
     //     },
     // ];
 
     const categories = ['All', 'Food', 'Toys', 'Accessories', 'Hygiene'];
     const petTypes = ['All', 'Dog', 'Cat', 'Bird', 'Fish'];
 
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
                                 ? 'text-amber-400 fill-current'
                                 : star - 0.5 <= rating
                                 ? 'text-amber-400 fill-current'
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
                             <div
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
                                     <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg">
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