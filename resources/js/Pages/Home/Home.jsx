 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head } from '@inertiajs/react';
 
 export default function Home() {
     return (
         <AuthenticatedLayout>
             <Head title="Home" />
 
             {/* Hero Section */}
             <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-20 text-center">
                 <h1 className="text-4xl font-bold mb-4">Welcome to PawsCommerce</h1>
                 <p className="text-xl mb-6">Segala Kebutuhan Hewan Kesayangan Anda</p>
                 <button className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
                     Belanja Sekarang
                 </button>
             </div>
 
             {/* Featured Products */}
             <div className="py-16 px-4">
                 <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Produk Pilihan</h2>
                 
                 <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
                     {/* Product 1 */}
                     <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
                         <img src='/images/anjing-makanan.jpeg' className="bg-orange-100 w-full object-cover rounded-lg h-48 flex items-center justify-center mb-4"/>
                         <h3 className="font-semibold mb-2">Premium Dog Food</h3>
                         <p className="text-gray-600 mb-1 text-sm">Makanan anjing berkualitas tinggi</p>
                         <p className="text-orange-600 font-bold mb-3">Rp 299.000</p>
                         <button className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 transition">
                             Tambah ke Keranjang
                         </button>
                     </div>
 
                     {/* Product 2 */}
                     <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
                         <img src='/images/scratch-cat.jpeg' className="bg-pink-100 w-full object-cover rounded-lg h-48 flex items-center justify-center mb-4"/>
                         <h3 className="font-semibold mb-2">Cat Scratching Post</h3>
                         <p className="text-gray-600 mb-1 text-sm">Mainan cakaran untuk kucing</p>
                         <p className="text-orange-600 font-bold mb-3">Rp 450.000</p>
                         <button className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 transition">
                             Tambah ke Keranjang
                         </button>
                     </div>
 
                     {/* Product 3 */}
                     <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
                         <img src='/images/kandang-burung.jpeg' className="bg-blue-100 rounded-lg h-48 flex items-center justify-center mb-4"/>
                         <h3 className="font-semibold mb-2">Bird Cage Deluxe</h3>
                         <p className="text-gray-600 mb-1 text-sm">Kandang burung premium</p>
                         <p className="text-orange-600 font-bold mb-3">Rp 899.000</p>
                         <button className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 transition">
                             Tambah ke Keranjang
                         </button>
                     </div>
                 </div>
             </div>
 
             {/* Categories */}
             <div className="bg-gradient-to-b from-orange-50 to-pink-50 py-16 px-4">
                 <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Belanja Berdasarkan Hewan</h2>
                 
                 <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6">
                     <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer">
                         <h3 className="font-semibold text-gray-700">Anjing</h3>
                         <p className="text-xs text-gray-500 mt-1">Makanan & Aksesoris</p>
                     </div>
 
                     <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer">
                         <h3 className="font-semibold text-gray-700">Kucing</h3>
                         <p className="text-xs text-gray-500 mt-1">Makanan & Mainan</p>
                     </div>
 
                     <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer">
                         <h3 className="font-semibold text-gray-700">Burung</h3>
                         <p className="text-xs text-gray-500 mt-1">Kandang & Pakan</p>
                     </div>
 
                     <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer">
                         <h3 className="font-semibold text-gray-700">Ikan</h3>
                         <p className="text-xs text-gray-500 mt-1">Aquarium & Perlengkapan</p>
                     </div>
                 </div>
             </div>
 
             {/* Why Choose Us */}
             <div className="py-16 px-4">
                 <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Kenapa Pilih Kami?</h2>
                 
                 <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-center">
                     <div>
                         <h3 className="font-semibold mb-2">Pengiriman Cepat</h3>
                         <p className="text-gray-600">Gratis ongkir untuk pembelian di atas Rp 200.000</p>
                     </div>
 
                     <div>
                         <h3 className="font-semibold mb-2">Produk Berkualitas</h3>
                         <p className="text-gray-600">Semua produk sudah tersertifikasi dan aman</p>
                     </div>
 
                     <div>
                         <h3 className="font-semibold mb-2">Konsultasi Gratis</h3>
                         <p className="text-gray-600">Chat dengan dokter hewan kami 24/7</p>
                     </div>
                 </div>
             </div>
 
             {/* Footer */}
             <footer className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-8 px-4">
                 <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 mb-6">
                     <div>
                         <h4 className="font-bold mb-3 flex items-center gap-2">
                          PawsCommerce
                         </h4>
                         <p className="text-orange-100 text-sm">Sahabat terbaik hewan kesayangan Anda sejak 2026</p>
                     </div>
 
                     <div>
                         <h4 className="font-bold mb-3">Menu Cepat</h4>
                         <ul className="space-y-2 text-orange-100 text-sm">
                             <li className="cursor-pointer hover:text-white">Tentang Kami</li>
                             <li className="cursor-pointer hover:text-white">Hubungi Kami</li>
                             <li className="cursor-pointer hover:text-white">FAQ</li>
                             <li className="cursor-pointer hover:text-white">Tips Perawatan</li>
                         </ul>
                     </div>
 
                     <div>
                         <h4 className="font-bold mb-3">Kontak</h4>
                         <ul className="space-y-2 text-orange-100 text-sm">
                             <li>info@pawscommerce.com</li>
                             <li>0812-PAWS-CARE</li>
                             <li>Jakarta, Indonesia</li>
                         </ul>
                     </div>
                 </div>
 
                 <div className="border-t border-orange-400 pt-4 text-center text-orange-100 text-sm">
                     <p>&copy; 2026 PawsCommerce. Dibuat dengan hati untuk hewan kesayangan Anda</p>
                 </div>
             </footer>
         </AuthenticatedLayout>
     );
 }