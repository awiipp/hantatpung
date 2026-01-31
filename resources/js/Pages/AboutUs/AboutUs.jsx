 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head } from '@inertiajs/react';
 
 export default function AboutUs() {
     return (
         <AuthenticatedLayout
             header={
                 <h2 className="text-xl font-semibold leading-tight text-gray-800">
                     Tentang Kami
                 </h2>
             }
         >
             <Head title="About Us" />
 
             {/* Hero Section */}
             <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16 text-center">
                 <h1 className="text-4xl font-bold mb-4">🐾 Tentang PawsCommerce 🐾</h1>
                 <p className="text-xl">Sahabat Terbaik untuk Hewan Kesayangan Anda</p>
             </div>
 
             {/* Main Content */}
             <div className="py-12">
                 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                     {/* Company Story */}
                     <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                         <h3 className="text-2xl font-bold mb-4 text-orange-600">Kisah Kami</h3>
                         <p className="text-gray-600 mb-4">
                             PawsCommerce didirikan pada tahun 2026 oleh para pecinta hewan yang memahami betapa pentingnya 
                             memberikan perawatan terbaik untuk sahabat berbulu kita. Kami memulai perjalanan dengan satu misi sederhana: 
                             menyediakan produk berkualitas tinggi untuk hewan peliharaan dengan harga yang terjangkau.
                         </p>
                         <p className="text-gray-600">
                             Setiap produk yang kami jual telah melalui kurasi ketat dan kami hanya bekerja sama dengan brand-brand 
                             terpercaya yang mengutamakan kesehatan dan kebahagiaan hewan. Dari makanan bergizi hingga mainan edukatif, 
                             kami ada untuk mendukung setiap momen berharga bersama hewan kesayangan Anda.
                         </p>
                     </div>
 
                     {/* Vision & Mission */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                         <div className="bg-white rounded-lg shadow-lg p-8">
                             <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                 <span className="text-3xl">👁️</span>
                             </div>
                             <h3 className="text-xl font-bold mb-3 text-orange-600">Visi Kami</h3>
                             <p className="text-gray-600">
                                 Menjadi pet shop online #1 di Indonesia yang dipercaya oleh jutaan pet parents untuk memberikan 
                                 yang terbaik bagi hewan kesayangan mereka. Kami ingin setiap hewan peliharaan hidup bahagia, 
                                 sehat, dan penuh kasih sayang.
                             </p>
                         </div>
 
                         <div className="bg-white rounded-lg shadow-lg p-8">
                             <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                 <span className="text-3xl">⚡</span>
                             </div>
                             <h3 className="text-xl font-bold mb-3 text-pink-600">Misi Kami</h3>
                             <p className="text-gray-600">
                                 Menyediakan produk pet care berkualitas premium dengan harga terjangkau, memberikan edukasi 
                                 perawatan hewan yang tepat, dan membangun komunitas pet lovers yang saling mendukung. 
                                 Kesehatan dan kebahagiaan hewan adalah prioritas utama kami.
                             </p>
                         </div>
                     </div>
 
                     {/* Our Values */}
                     <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg shadow-lg p-8 mb-8">
                         <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Nilai-Nilai Kami</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             <div className="text-center bg-white rounded-lg p-6 shadow">
                                 <div className="text-5xl mb-3">❤️</div>
                                 <h4 className="font-semibold mb-2 text-orange-600">Kasih Sayang</h4>
                                 <p className="text-gray-600 text-sm">Kami memperlakukan setiap hewan seperti keluarga kami sendiri</p>
                             </div>
 
                             <div className="text-center bg-white rounded-lg p-6 shadow">
                                 <div className="text-5xl mb-3">✅</div>
                                 <h4 className="font-semibold mb-2 text-pink-600">Kualitas</h4>
                                 <p className="text-gray-600 text-sm">Hanya produk terbaik dan tersertifikasi untuk sahabat berbulu Anda</p>
                             </div>
 
                             <div className="text-center bg-white rounded-lg p-6 shadow">
                                 <div className="text-5xl mb-3">🌟</div>
                                 <h4 className="font-semibold mb-2 text-purple-600">Kepercayaan</h4>
                                 <p className="text-gray-600 text-sm">Transparansi dan kejujuran dalam setiap transaksi</p>
                             </div>
                         </div>
                     </div>
 
                     {/* Statistics */}
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                         <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition">
                             <h4 className="text-3xl font-bold text-orange-500 mb-2">5K+</h4>
                             <p className="text-gray-600">Produk Pet Care</p>
                             <p className="text-xs text-gray-400 mt-1">🛍️</p>
                         </div>
 
                         <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition">
                             <h4 className="text-3xl font-bold text-pink-500 mb-2">20K+</h4>
                             <p className="text-gray-600">Happy Pet Parents</p>
                             <p className="text-xs text-gray-400 mt-1">😊</p>
                         </div>
 
                         <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition">
                             <h4 className="text-3xl font-bold text-purple-500 mb-2">50+</h4>
                             <p className="text-gray-600">Kota di Indonesia</p>
                             <p className="text-xs text-gray-400 mt-1">🇮🇩</p>
                         </div>
 
                         <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition">
                             <h4 className="text-3xl font-bold text-blue-500 mb-2">24/7</h4>
                             <p className="text-gray-600">Konsultasi Vet</p>
                             <p className="text-xs text-gray-400 mt-1">💬</p>
                         </div>
                     </div>
 
                     {/* Team Section */}
                     <div className="bg-white rounded-lg shadow-lg p-8">
                         <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Tim Pecinta Hewan Kami</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             <div className="text-center">
                                 <div className="bg-gradient-to-br from-orange-200 to-orange-300 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                                     <span className="text-5xl">🐕</span>
                                 </div>
                                 <h4 className="font-semibold mb-1">Dr. Sarah Wijaya</h4>
                                 <p className="text-gray-600 text-sm">Founder & Veterinarian</p>
                                 <p className="text-xs text-gray-400 mt-2">🏆 15 tahun pengalaman</p>
                             </div>
 
                             <div className="text-center">
                                 <div className="bg-gradient-to-br from-pink-200 to-pink-300 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                                     <span className="text-5xl">🐱</span>
                                 </div>
                                 <h4 className="font-semibold mb-1">Budi Santoso</h4>
                                 <p className="text-gray-600 text-sm">Head of Operations</p>
                                 <p className="text-xs text-gray-400 mt-2">📦 Ahli logistik pet care</p>
                             </div>
 
                             <div className="text-center">
                                 <div className="bg-gradient-to-br from-blue-200 to-blue-300 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                                     <span className="text-5xl">🐦</span>
                                 </div>
                                 <h4 className="font-semibold mb-1">Linda Kusuma</h4>
                                 <p className="text-gray-600 text-sm">Customer Care Lead</p>
                                 <p className="text-xs text-gray-400 mt-2">💕 Selalu siap membantu</p>
                             </div>
                         </div>
                     </div>
 
                     {/* Call to Action */}
                     <div className="mt-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-lg p-8 text-center text-white">
                         <h3 className="text-2xl font-bold mb-3">Bergabunglah dengan Keluarga PawsCommerce! 🐾</h3>
                         <p className="mb-6">Dapatkan tips perawatan hewan, promo eksklusif, dan update produk terbaru</p>
                         <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
                             Subscribe Newsletter
                         </button>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }