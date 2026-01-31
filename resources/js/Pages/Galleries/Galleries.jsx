 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head, Link } from '@inertiajs/react';
 import { useState } from 'react';
 
 export default function GalleryUser() {
     const [selectedCategory, setSelectedCategory] = useState('All');
     const [viewMode, setViewMode] = useState('grid'); // grid or masonry
 
     const galleries = [
         { 
             id: 1, 
             title: 'Adoption Day 2024 - Happy New Families', 
             category: 'Adoption',
             date: '2024-01-15',
             images: 45,
             image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800',
             photographer: 'Dr. Sarah Wijaya'
         },
         { 
             id: 2, 
             title: 'Pet Grooming Workshop - Before & After', 
             category: 'Workshop',
             date: '2024-01-20',
             images: 32,
             image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800',
             photographer: 'Budi Santoso'
         },
         { 
             id: 3, 
             title: 'Dog Training Success Stories', 
             category: 'Training',
             date: '2024-02-01',
             images: 28,
             image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800',
             photographer: 'Linda Kusuma'
         },
         { 
             id: 4, 
             title: 'Pet Fashion Show Winners', 
             category: 'Competition',
             date: '2024-02-10',
             images: 38,
             image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
             photographer: 'Dr. Sarah Wijaya'
         },
         { 
             id: 5, 
             title: 'Happy Customers & Their Pets', 
             category: 'Community',
             date: '2024-02-15',
             images: 52,
             image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800',
             photographer: 'Linda Kusuma'
         },
         { 
             id: 6, 
             title: 'Cat Cafe Grand Opening', 
             category: 'Events',
             date: '2024-02-20',
             images: 40,
             image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800',
             photographer: 'Budi Santoso'
         },
         { 
             id: 7, 
             title: 'Vaccination Day - Healthy Pets', 
             category: 'Health',
             date: '2024-03-01',
             images: 35,
             image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800',
             photographer: 'Dr. Sarah Wijaya'
         },
         { 
             id: 8, 
             title: 'Pet Birthday Party Celebrations', 
             category: 'Events',
             date: '2024-03-05',
             images: 42,
             image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800',
             photographer: 'Linda Kusuma'
         },
     ];
 
     const categories = ['All', 'Adoption', 'Workshop', 'Training', 'Competition', 'Community', 'Events', 'Health'];
 
     const formatDate = (dateString) => {
         const options = { year: 'numeric', month: 'long', day: 'numeric' };
         return new Date(dateString).toLocaleDateString('id-ID', options);
     };
 
     const filteredGalleries = selectedCategory === 'All' 
         ? galleries 
         : galleries.filter(gallery => gallery.category === selectedCategory);
 
     return (
         <AuthenticatedLayout>
             <Head title="Gallery" />
 
             {/* Hero Section */}
             <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16 text-center">
                 <h1 className="text-4xl font-bold mb-3">📸 Galeri Foto</h1>
                 <p className="text-xl">Momen-momen indah bersama hewan kesayangan</p>
             </div>
 
             <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                     {/* Header */}
                     <div className="mb-8 text-center">
                         <h2 className="text-3xl font-bold text-gray-900 mb-2">
                             Koleksi Foto PawsCommerce
                         </h2>
                         <p className="text-gray-600">
                             Jelajahi koleksi foto event, kegiatan, dan momen bahagia bersama pet lovers
                         </p>
                     </div>
 
                     {/* Filters */}
                     <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             {/* Category Filter */}
                             <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                                     <span>🏷️</span> Kategori
                                 </label>
                                 <div className="flex flex-wrap gap-2">
                                     {categories.map((category) => (
                                         <button
                                             key={category}
                                             onClick={() => setSelectedCategory(category)}
                                             className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                                                 selectedCategory === category
                                                     ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md'
                                                     : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                                             }`}
                                         >
                                             {category}
                                         </button>
                                     ))}
                                 </div>
                             </div>
 
                             {/* View Mode Toggle */}
                             <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                                     <span>👁️</span> Tampilan
                                 </label>
                                 <div className="flex gap-2">
                                     <button
                                         onClick={() => setViewMode('grid')}
                                         className={`px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${
                                             viewMode === 'grid'
                                                 ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md'
                                                 : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                                         }`}
                                     >
                                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                             <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                         </svg>
                                         Grid
                                     </button>
                                     <button
                                         onClick={() => setViewMode('masonry')}
                                         className={`px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${
                                             viewMode === 'masonry'
                                                 ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md'
                                                 : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                                         }`}
                                     >
                                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                             <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                         </svg>
                                         Masonry
                                     </button>
                                 </div>
                             </div>
                         </div>
 
                         {/* Search Bar */}
                         <div className="mt-6">
                             <div className="relative">
                                 <input
                                     type="text"
                                     placeholder="Cari galeri foto..."
                                     className="w-full px-4 py-3 pl-12 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                 />
                                 <svg
                                     className="absolute left-4 top-3.5 h-5 w-5 text-orange-400"
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
 
                     {/* Results Count */}
                     <div className="mb-4">
                         <p className="text-gray-600">
                             Menampilkan <span className="font-bold text-orange-600">{filteredGalleries.length}</span> galeri foto
                         </p>
                     </div>
 
                     {/* Gallery Grid */}
                     <div className={`grid gap-6 ${
                         viewMode === 'grid' 
                             ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                             : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                     }`}>
                         {filteredGalleries.map((gallery) => (
                             <div
                                 key={gallery.id}
                                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group cursor-pointer transform hover:-translate-y-1"
                             >
                                 {/* Image */}
                                 <div className={`relative bg-gray-200 overflow-hidden ${
                                     viewMode === 'grid' ? 'h-64' : 'h-56'
                                 }`}>
                                     <img
                                         src={gallery.image}
                                         alt={gallery.title}
                                         className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                     />
                                     {/* Overlay on hover */}
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                         <div className="text-center text-white">
                                             <svg
                                                 className="w-12 h-12 mx-auto mb-2"
                                                 fill="none"
                                                 stroke="currentColor"
                                                 viewBox="0 0 24 24"
                                             >
                                                 <path
                                                     strokeLinecap="round"
                                                     strokeLinejoin="round"
                                                     strokeWidth="2"
                                                     d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                 />
                                                 <path
                                                     strokeLinecap="round"
                                                     strokeLinejoin="round"
                                                     strokeWidth="2"
                                                     d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                 />
                                             </svg>
                                             <p className="font-semibold">Lihat Galeri</p>
                                         </div>
                                     </div>
                                     {/* Image Count Badge */}
                                     <div className="absolute bottom-3 right-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                             <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                         </svg>
                                         {gallery.images}
                                     </div>
                                 </div>
 
                                 {/* Content */}
                                 <div className="p-5">
                                     {/* Category */}
                                     <span className="inline-block px-3 py-1 text-xs font-bold bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 rounded-full mb-2">
                                         {gallery.category}
                                     </span>
 
                                     {/* Title */}
                                     <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 hover:text-orange-600 transition">
                                         {gallery.title}
                                     </h3>
 
                                     {/* Meta Info */}
                                     <div className="space-y-1 mb-3 bg-orange-50 p-3 rounded-lg">
                                         <div className="flex items-center text-sm text-gray-700">
                                             <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                             </svg>
                                             <span className="font-medium">{formatDate(gallery.date)}</span>
                                         </div>
                                         <div className="flex items-center text-sm text-gray-700">
                                             <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                                 <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                             </svg>
                                             <span className="font-medium">{gallery.photographer}</span>
                                         </div>
                                     </div>
 
                                     {/* View Button */}
                                     <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2.5 rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 flex items-center justify-center gap-2 font-bold shadow-md">
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
                                                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                             />
                                             <path
                                                 strokeLinecap="round"
                                                 strokeLinejoin="round"
                                                 strokeWidth="2"
                                                 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                             />
                                         </svg>
                                         Lihat Galeri
                                     </button>
                                 </div>
                             </div>
                         ))}
                     </div>
 
                     {/* Stats Section */}
                     <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
                         <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">📊 Statistik Galeri</h3>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                             <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-orange-600 mb-2">{galleries.length}</div>
                                 <p className="text-sm text-gray-700 font-medium">Total Galeri</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-pink-600 mb-2">
                                     {galleries.reduce((sum, g) => sum + g.images, 0)}
                                 </div>
                                 <p className="text-sm text-gray-700 font-medium">Total Foto</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-blue-600 mb-2">8</div>
                                 <p className="text-sm text-gray-700 font-medium">Kategori</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-green-600 mb-2">2024</div>
                                 <p className="text-sm text-gray-700 font-medium">Update Terbaru</p>
                             </div>
                         </div>
                     </div>
 
                     {/* Load More */}
                     <div className="mt-12 text-center">
                         <button className="px-8 py-3 bg-white border-2 border-orange-300 text-orange-600 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition duration-150 font-bold shadow-md">
                             Muat Galeri Lainnya 
                         </button>
                     </div>
 
                     {/* CTA Section */}
                     <div className="mt-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-8 text-center text-white shadow-xl">
                         <div className="text-5xl mb-4">📷</div>
                         <h3 className="text-3xl font-bold mb-2">
                             Bagikan Momen Anda!
                         </h3>
                         <p className="text-orange-100 mb-6 text-lg">
                             Punya foto menarik bersama hewan kesayangan? Tag kami di Instagram @pawscommerce
                         </p>
                         <div className="flex gap-4 justify-center">
                             <button className="px-8 py-3 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50 transition shadow-lg">
                                 Upload Foto 
                             </button>
                             <button className="px-8 py-3 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition shadow-lg">
                                 Follow Instagram 
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }