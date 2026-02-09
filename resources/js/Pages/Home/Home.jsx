 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head, Link } from '@inertiajs/react';
 
 export default function Home({products}) {
         const formatPrice = (price) => {
         return new Intl.NumberFormat('id-ID', {
             style: 'currency',
             currency: 'IDR',
             minimumFractionDigits: 0
         }).format(price);
     };

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
                     {products.map((product) => (
                        <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
                         <img src={`/storage/${product.image}`} className="bg-blue-100 rounded-lg h-48 w-full object-cover flex items-center justify-center mb-4"/>
                         <h3 className="font-semibold mb-2">{product.product_name}</h3>
                         <p className="text-gray-600 mb-1 text-sm">{product.description}</p>
                         <p className="text-orange-600 font-bold mb-3">{formatPrice(product.price)}</p>
                        <Link className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg">
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
                     ))}
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
         </AuthenticatedLayout>
     );
 }