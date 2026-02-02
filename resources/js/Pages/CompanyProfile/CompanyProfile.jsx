 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head } from '@inertiajs/react';
 
 export default function CompanyProfile() {
     return (
         <AuthenticatedLayout
             header={
                 <h2 className="text-xl font-semibold leading-tight text-gray-800">
                     Profil Perusahaan
                 </h2>
             }
         >
             <Head title="Company Profile" />
 
             {/* Hero Banner */}
             <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-16 text-center">
                 <h1 className="text-5xl font-bold mb-4">PawsCommerce</h1>
                 <p className="text-2xl">Sahabat Terbaik untuk Hewan Kesayangan Anda</p>
             </div>
 
             <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                     {/* Company Overview */}
                     <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                         <h3 className="text-3xl font-bold mb-4 text-orange-600 flex items-center gap-2">
                             <span></span> Tentang Perusahaan Kami
                         </h3>
                         <p className="text-gray-600 mb-4 leading-relaxed">
                             PawsCommerce adalah platform pet shop online terkemuka di Indonesia yang didirikan pada tahun 2026 
                             oleh para pecinta hewan yang memahami kebutuhan dan keinginan terbaik untuk sahabat berbulu kita. 
                             Kami berkomitmen untuk memberikan produk pet care berkualitas premium dengan harga terjangkau dan 
                             layanan yang penuh kasih sayang.
                         </p>
                         <p className="text-gray-600 leading-relaxed">
                             Dengan lebih dari 5.000 produk berkualitas untuk anjing, kucing, burung, ikan, dan hewan peliharaan 
                             lainnya, kami terus berinovasi untuk memenuhi kebutuhan pet parents di seluruh Indonesia. Setiap 
                             produk kami kurasi dengan hati-hati untuk memastikan keamanan dan kesehatan hewan kesayangan Anda.
                         </p>
                     </div>
 
                     {/* Company Information */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                         <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
                             <h4 className="font-bold text-lg mb-4 text-orange-600 flex items-center gap-2">
                                 <span></span> Detail Perusahaan
                             </h4>
                             <div className="space-y-3">
                                 <div className="flex justify-between border-b border-gray-100 pb-2">
                                     <span className="text-gray-600">Nama Perusahaan:</span>
                                     <span className="font-semibold text-gray-800">PT PawsCommerce Indonesia</span>
                                 </div>
                                 <div className="flex justify-between border-b border-gray-100 pb-2">
                                     <span className="text-gray-600">Didirikan:</span>
                                     <span className="font-semibold text-gray-800">2026</span>
                                 </div>
                                 <div className="flex justify-between border-b border-gray-100 pb-2">
                                     <span className="text-gray-600">Industri:</span>
                                     <span className="font-semibold text-gray-800">Pet Care & E-Commerce</span>
                                 </div>
                                 <div className="flex justify-between border-b border-gray-100 pb-2">
                                     <span className="text-gray-600">Karyawan:</span>
                                     <span className="font-semibold text-gray-800">150+ Pet Lovers</span>
                                 </div>
                                 <div className="flex justify-between">
                                     <span className="text-gray-600">Sertifikasi:</span>
                                     <span className="font-semibold text-gray-800">ISO Pet Care Certified</span>
                                 </div>
                             </div>
                         </div>
 
                         <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500">
                             <h4 className="font-bold text-lg mb-4 text-pink-600 flex items-center gap-2">
                                 <span></span> Informasi Kontak
                             </h4>
                             <div className="space-y-3">
                                 <div>
                                     <p className="text-gray-600 text-sm mb-1">Alamat</p>
                                     <p className="font-semibold text-gray-800">Jl. Pet Care Avenue No. 123, Jakarta 12345</p>
                                 </div>
                                 <div>
                                     <p className="text-gray-600 text-sm mb-1">Email</p>
                                     <p className="font-semibold text-gray-800">info@pawscommerce.id</p>
                                 </div>
                                 <div>
                                     <p className="text-gray-600 text-sm mb-1">Telepon</p>
                                     <p className="font-semibold text-gray-800">+62 812-PAWS-CARE (7297-2273)</p>
                                 </div>
                                 <div>
                                     <p className="text-gray-600 text-sm mb-1">Website</p>
                                     <p className="font-semibold text-gray-800">www.pawscommerce.id</p>
                                 </div>
                                 <div>
                                     <p className="text-gray-600 text-sm mb-1">WhatsApp</p>
                                     <p className="font-semibold text-gray-800">+62 812-3456-7890</p>
                                 </div>
                             </div>
                         </div>
                     </div>
 
                     {/* Vision & Mission */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                         <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                             <h4 className="font-bold text-lg mb-3 text-center text-orange-600">Visi Kami</h4>
                             <p className="text-gray-600 text-center leading-relaxed">
                                 Menjadi pet shop online #1 di Indonesia yang dipercaya oleh jutaan pet parents untuk 
                                 memberikan yang terbaik bagi hewan kesayangan mereka. Kami ingin setiap hewan peliharaan 
                                 hidup bahagia, sehat, dan penuh kasih sayang.
                             </p>
                         </div>
 
                         <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                             <h4 className="font-bold text-lg mb-3 text-center text-pink-600">Misi Kami</h4>
                             <p className="text-gray-600 text-center leading-relaxed">
                                 Menyediakan produk pet care berkualitas premium dengan harga terjangkau, memberikan edukasi 
                                 perawatan hewan yang tepat, membangun komunitas pet lovers yang saling mendukung, dan 
                                 menjadikan kesehatan serta kebahagiaan hewan sebagai prioritas utama.
                             </p>
                         </div>
                     </div>
 
                     {/* Statistics */}
                     <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                             <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                                 <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">5K+</div>
                                 <p className="text-gray-700 font-semibold">Produk Pet Care</p>
                                 <p className="text-sm text-gray-500 mt-1">Semua kategori hewan</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                                 <div className="text-5xl font-bold text-green-600 mb-2">20K+</div>
                                 <p className="text-gray-700 font-semibold">Happy Pet Parents</p>
                                 <p className="text-sm text-gray-500 mt-1">Pelanggan setia kami</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                 <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
                                 <p className="text-gray-700 font-semibold">Kota di Indonesia</p>
                                 <p className="text-sm text-gray-500 mt-1">Jangkauan pengiriman</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                                 <div className="text-5xl font-bold text-purple-600 mb-2">99%</div>
                                 <p className="text-gray-700 font-semibold">Kepuasan</p>
                                 <p className="text-sm text-gray-500 mt-1">Rating dari pelanggan</p>
                             </div>
                         </div>
                     </div>
 
                     {/* Core Values */}
                     <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                         <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">Nilai-Nilai Inti Kami</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             <div className="text-center bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition">
                                 <h4 className="font-bold mb-2 text-lg text-red-600">Kasih Sayang</h4>
                                 <p className="text-gray-600 text-sm leading-relaxed">
                                     Kami memperlakukan setiap hewan seperti keluarga kami sendiri dan berkomitmen untuk 
                                     kesejahteraan mereka
                                 </p>
                             </div>
 
                             <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition">
                                 <h4 className="font-bold mb-2 text-lg text-green-600">Kualitas Premium</h4>
                                 <p className="text-gray-600 text-sm leading-relaxed">
                                     Hanya produk terbaik dan tersertifikasi untuk kesehatan dan kebahagiaan hewan 
                                     peliharaan Anda
                                 </p>
                             </div>
 
                             <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl hover:shadow-lg transition">
                                 <h4 className="font-bold mb-2 text-lg text-blue-600">Kepercayaan</h4>
                                 <p className="text-gray-600 text-sm leading-relaxed">
                                     Transparansi dan kejujuran dalam setiap transaksi adalah fondasi hubungan kami 
                                     dengan pelanggan
                                 </p>
                             </div>
                         </div>
                     </div>
 
                     {/* Leadership Team */}
                     <div className="bg-white rounded-xl shadow-lg p-8">
                         <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">Tim Kepemimpinan Kami</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             <div className="text-center group">
                                 <img src='/images/taesan-dokter.jpg' className="bg-gradient-to-br from-orange-200 to-orange-300 w-36 h-36 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition shadow-lg"/>
                                 <h4 className="font-bold mb-1 text-lg">Han Taesan S.TP</h4>
                                 <p className="text-sm text-orange-600 mb-2 font-semibold">Founder & CEO</p>
                                 <p className="text-xs text-gray-600 mb-1">Dokter Hewan Bersertifikat</p>
                                 <p className="text-xs text-gray-500">15+ tahun pengalaman di pet care industry</p>
                             </div>
 
                             <div className="text-center group">
                                 <div className="bg-gradient-to-br from-pink-200 to-pink-300 w-36 h-36 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition shadow-lg">
                                 </div>
                                 <h4 className="font-bold mb-1 text-lg">Budi Santoso</h4>
                                 <p className="text-sm text-pink-600 mb-2 font-semibold">Chief Operations Officer</p>
                                 <p className="text-xs text-gray-600 mb-1">Ahli Logistik Pet Care</p>
                                 <p className="text-xs text-gray-500">Expert dalam supply chain management</p>
                             </div>
 
                             <div className="text-center group">
                                 <div className="bg-gradient-to-br from-blue-200 to-blue-300 w-36 h-36 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition shadow-lg">
                                 </div>
                                 <h4 className="font-bold mb-1 text-lg">Linda Kusuma</h4>
                                 <p className="text-sm text-blue-600 mb-2 font-semibold">Head of Customer Care</p>
                                 <p className="text-xs text-gray-600 mb-1">Pet Care Consultant</p>
                                 <p className="text-xs text-gray-500">Selalu siap membantu pet parents 24/7</p>
                             </div>
                         </div>
                     </div>
 
                     {/* CTA Section */}
                     <div className="mt-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-8 text-center text-white shadow-xl">
                         <h3 className="text-3xl font-bold mb-3">Bergabunglah dengan Keluarga PawsCommerce!</h3>
                         <p className="text-lg mb-6 text-orange-100">
                             Mulai memberikan yang terbaik untuk hewan kesayangan Anda hari ini
                         </p>
                         <div className="flex gap-4 justify-center">
                             <button className="px-8 py-3 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50 transition shadow-lg">
                                 Belanja Sekarang 
                             </button>
                             <button className="px-8 py-3 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition shadow-lg">
                                 Hubungi Kami 
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }