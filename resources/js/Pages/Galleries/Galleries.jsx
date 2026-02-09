 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head, Link } from '@inertiajs/react';
 import { useState } from 'react';
 
 export default function GalleryUser({galleries}) {
     const [selectedCategory, setSelectedCategory] = useState('All');
     const [viewMode, setViewMode] = useState('grid');
 
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
                 <h1 className="text-4xl font-bold mb-3">Galeri Foto</h1>
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
                         <div className="grid grid-cols-1 gap-6">
                             {/* Category Filter */}
                             <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                                      Kategori
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
                                         src={`/storage/${gallery.image}`}
                                         alt={gallery.title}
                                         className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                     />
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
                                     </div>
                                 </div>
                             </div>
                         ))}
                     </div>
 
                      
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }