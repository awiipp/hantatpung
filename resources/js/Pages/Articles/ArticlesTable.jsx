 import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
 import { Head, Link } from "@inertiajs/react";
 
 export default function Article({ articles }) {
     // Sample data jika tidak ada props
     const sampleArticles = articles || [
         {
             id: 1,
             title: "Panduan Lengkap Merawat Anak Anjing Pertama Anda",
             excerpt: "Tips penting untuk pet parents baru! Pelajari cara merawat puppy mulai dari makanan, vaksinasi...",
             category: "Anjing",
             author: "Dr. Sarah Wijaya",
             published_date: "2024-01-25",
             status: "Published",
             image: "/images/puppy.jpg"
         },
         {
             id: 2,
             title: "5 Makanan yang Berbahaya untuk Kucing Kesayangan",
             excerpt: "Kenali makanan yang toxic untuk kucing! Artikel ini membahas daftar lengkap makanan yang harus dihindari...",
             category: "Kucing",
             author: "Dr. Sarah Wijaya",
             published_date: "2024-01-23",
             status: "Published",
             image: "/images/cat-food.jpg"
         },
         {
             id: 3,
             title: "Cara Melatih Burung Peliharaan Agar Bisa Berbicara",
             excerpt: "Panduan step-by-step melatih burung peliharaan untuk meniru suara dan kata-kata...",
             category: "Burung",
             author: "Budi Santoso",
             published_date: "2024-01-20",
             status: "Published",
             image: "/images/bird-training.jpg"
         },
         {
             id: 4,
             title: "Review: 10 Dry Food Anjing Terbaik untuk Berbagai Ras",
             excerpt: "Perbandingan lengkap brand dry food premium untuk anjing. Dari puppy hingga senior...",
             category: "Anjing",
             author: "Linda Kusuma",
             published_date: "2024-01-18",
             status: "Draft",
             image: "/images/dog-food.jpg"
         },
         {
             id: 5,
             title: "Tanda-Tanda Kucing Anda Stress dan Cara Mengatasinya",
             excerpt: "Pelajari bahasa tubuh kucing untuk mendeteksi stress sejak dini...",
             category: "Kucing",
             author: "Dr. Sarah Wijaya",
             published_date: "2024-01-15",
             status: "Published",
             image: "/images/cat-stress.jpg"
         }
     ];
 
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
             <Head title="Articles Management" />
 
             <div className="py-12">
                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                     <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                         <div className="p-6 text-gray-900">
                             {/* Header */}
                             <div className="flex justify-between items-center mb-6">
                                 <div>
                                     <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                         🐾 Pet Care Articles
                                     </h2>
                                     <p className="text-sm text-gray-600 mt-1">Kelola artikel tips dan panduan perawatan hewan</p>
                                 </div>
                                 <Link
                                     // href={route("articles.create")}
                                     className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2.5 rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 font-semibold shadow-md"
                                 >
                                     + Artikel Baru
                                 </Link>
                             </div>
 
                             {/* Filter Stats */}
                             <div className="grid grid-cols-4 gap-4 mb-6">
                                 <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                                     <div className="text-2xl font-bold text-orange-600">{sampleArticles.length}</div>
                                     <div className="text-xs text-orange-700 font-medium">Total Artikel</div>
                                 </div>
                                 <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                                     <div className="text-2xl font-bold text-green-600">
                                         {sampleArticles.filter(a => a.status === 'Published').length}
                                     </div>
                                     <div className="text-xs text-green-700 font-medium">Published</div>
                                 </div>
                                 <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-200">
                                     <div className="text-2xl font-bold text-yellow-600">
                                         {sampleArticles.filter(a => a.status === 'Draft').length}
                                     </div>
                                     <div className="text-xs text-yellow-700 font-medium">Draft</div>
                                 </div>
                                 <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg border border-pink-200">
                                     <div className="text-2xl font-bold text-pink-600">3.2K</div>
                                     <div className="text-xs text-pink-700 font-medium">Total Views</div>
                                 </div>
                             </div>
 
                             {/* Articles Table */}
                             <div className="overflow-x-auto rounded-lg border border-gray-200">
                                 <table className="min-w-full divide-y divide-gray-200">
                                     <thead className="bg-gradient-to-r from-orange-50 to-pink-50">
                                         <tr>
                                             <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                 Artikel
                                             </th>
                                             <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                 Kategori
                                             </th>
                                             <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                 Penulis
                                             </th>
                                             <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                 Tanggal
                                             </th>
                                             <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                 Status
                                             </th>
                                             <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                 Aksi
                                             </th>
                                         </tr>
                                     </thead>
                                     <tbody className="bg-white divide-y divide-gray-200">
                                         {sampleArticles.map((article) => (
                                             <tr key={article.id} className="hover:bg-orange-50 transition duration-150">
                                                 <td className="px-6 py-4">
                                                     <div className="flex items-center">
                                                         <div>
                                                             <div className="text-sm font-semibold text-gray-900">
                                                                 {article.title}
                                                             </div>
                                                             <div className="text-sm text-gray-500">
                                                                 {article.excerpt.substring(0, 60)}...
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </td>
                                                 <td className="px-6 py-4 whitespace-nowrap">
                                                     <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-800'}`}>
                                                         {article.category}
                                                     </span>
                                                 </td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">
                                                     {article.author}
                                                 </td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                     {new Date(article.published_date).toLocaleDateString('id-ID', {
                                                         day: 'numeric',
                                                         month: 'short',
                                                         year: 'numeric'
                                                     })}
                                                 </td>
                                                 <td className="px-6 py-4 whitespace-nowrap">
                                                     <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                                                         article.status === 'Published' 
                                                             ? 'bg-green-100 text-green-800' 
                                                             : 'bg-yellow-100 text-yellow-800'
                                                     }`}>
                                                         {article.status}
                                                     </span>
                                                 </td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                     <Link
                                                         href={`/articles/${article.id}`}
                                                         className="text-blue-600 hover:text-blue-800 mr-3 font-semibold"
                                                     >
                                                         👁️ View
                                                     </Link>
                                                     <Link
                                                         href={`/articles/${article.id}/edit`}
                                                         className="text-orange-600 hover:text-orange-800 mr-3 font-semibold"
                                                     >
                                                         ✏️ Edit
                                                     </Link>
                                                     <button
                                                         className="text-red-600 hover:text-red-800 font-semibold"
                                                     >
                                                         🗑️ Delete
                                                     </button>
                                                 </td>
                                             </tr>
                                         ))}
                                     </tbody>
                                 </table>
                             </div>
 
                             {/* Pagination */}
                             <div className="mt-6 flex justify-between items-center">
                                 <div className="text-sm text-gray-700">
                                     Menampilkan <span className="font-semibold">1</span> sampai{" "}
                                     <span className="font-semibold">{sampleArticles.length}</span> dari{" "}
                                     <span className="font-semibold">{sampleArticles.length}</span> artikel
                                 </div>
                                 <div className="flex space-x-2">
                                     <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 font-medium transition">
                                         ← Previous
                                     </button>
                                     <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg text-sm font-semibold shadow-md">
                                         1
                                     </button>
                                     <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 font-medium transition">
                                         Next →
                                     </button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }