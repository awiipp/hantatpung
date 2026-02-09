 import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
 import { Head, Link } from "@inertiajs/react";
 
 export default function ArticleUser({ articles }) {
 
     // Category colors mapping
     const categoryColors = {
         "Anjing": "bg-orange-100 text-orange-800",
         "Kucing": "bg-pink-100 text-pink-800",
         "Burung": "bg-blue-100 text-blue-800",
         "Ikan": "bg-cyan-100 text-cyan-800",
         "Reptil": "bg-green-100 text-green-800",
         "Tips": "bg-purple-100 text-purple-800"
     };
 
     return (
         <AuthenticatedLayout>
             <Head title="Articles" />
 
             <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                     {/* Header */}
                     <div className="mb-8 text-center">
                         <h2 className="text-4xl font-bold text-gray-900 mb-3">
                              Pet Care Articles
                         </h2>
                         <p className="text-gray-600 text-lg">
                             Tips, panduan, dan informasi terkini untuk merawat hewan kesayangan Anda
                         </p>
                     </div>
 
                     {/* Filter Categories */}
                     <div className="mb-8 flex gap-3 flex-wrap justify-center">
                         <button className="px-5 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition">
                             Semua
                         </button>
                         <button className="px-5 py-2 bg-white border-2 border-orange-300 text-orange-600 rounded-full text-sm font-semibold hover:bg-orange-50 transition">
                              Anjing
                         </button>
                         <button className="px-5 py-2 bg-white border-2 border-pink-300 text-pink-600 rounded-full text-sm font-semibold hover:bg-pink-50 transition">
                              Kucing
                         </button>
                         <button className="px-5 py-2 bg-white border-2 border-blue-300 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-50 transition">
                              Burung
                         </button>
                         <button className="px-5 py-2 bg-white border-2 border-cyan-300 text-cyan-600 rounded-full text-sm font-semibold hover:bg-cyan-50 transition">
                              Ikan
                         </button>
                     </div>
 
                     {/* Articles Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {articles.map((article) => (
                             <div
                                 key={article.id}
                                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                             >
                                 {/* Image */}
                                 <div className="h-48 bg-gray-200 overflow-hidden relative">
                                     <img
                                     src={`/storage/${article.image}`}
                                         alt={article.title}
                                         className="w-full h-full object-cover hover:scale-110 transition duration-500"
                                     />
                                     {/* Category Badge on Image */}
                                     <div className="absolute top-3 left-3">
                                         <span className={`px-3 py-1 ${categoryColors[article.category] || 'bg-gray-100 text-gray-800'} text-xs font-bold rounded-full shadow-sm`}>
                                             {article.category}
                                         </span>
                                     </div>
                                 </div>
 
                                 {/* Content */}
                                 <div className="p-5">
                                     {/* Author & Date */}
                                     <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                                         <span className="flex items-center gap-1">
                                              {article.author}
                                         </span>
                                         <span className="flex items-center gap-1">
                                              {new Date(article.published_date).toLocaleDateString('id-ID', {
                                                 day: 'numeric',
                                                 month: 'short',
                                                 year: 'numeric'
                                             })}
                                         </span>
                                     </div>
 
                                     {/* Title */}
                                     <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition">
                                         {article.title}
                                     </h3>
 
                                     {/* Excerpt */}
                                     <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                         {article.excerpt}
                                     </p>
 
                                     {/* Read More */}
                                     <Link
                                         href={`/articles/${article.id}`}
                                         className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-pink-600 transition"
                                     >
                                         Baca Selengkapnya
                                         <svg
                                             className="ml-1 w-4 h-4"
                                             fill="none"
                                             stroke="currentColor"
                                             viewBox="0 0 24 24"
                                         >
                                             <path
                                                 strokeLinecap="round"
                                                 strokeLinejoin="round"
                                                 strokeWidth="2"
                                                 d="M9 5l7 7-7 7"
                                             />
                                         </svg>
                                     </Link>
                                 </div>
                             </div>
                         ))}
                     </div>
 
                     {/* Load More Button */}
                     <div className="mt-12 text-center">
                         <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-pink-600 transition duration-300">
                             Muat Artikel Lainnya 
                         </button>
                     </div>
 
                     {/* Newsletter CTA */}
                     <div className="mt-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl shadow-lg p-8 text-center text-white">
                         <h3 className="text-2xl font-bold mb-3">Hubungi Kami!</h3>
                         <p className="mb-5">Dapatkan tips perawatan hewan dan artikel terbaru langsung ke email Anda</p>
                         <div className="flex gap-3 max-w-md mx-auto">
                             <input
                                 type="email"
                                 placeholder="Email Anda"
                                 className="flex-1 px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                             />
                             <button className="px-6 py-2 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition">
                                 Subscribe
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }