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
             <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 text-white py-24 px-4">
                 <div className="max-w-4xl mx-auto text-center">
                     <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Welcome to PawsCommerce</h1>
                     <p className="text-xl md:text-2xl mb-8 font-light">Segala Kebutuhan Hewan Kesayangan Anda</p>
                      <Link href={route('products.index')}>
                     <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg">
                          Belanja Sekarang
                        </button>
                        </Link>
                 </div>
             </div>
 
             {/* Featured Products */}
             <div className="py-20 px-4 bg-gray-50">
                 <div className="max-w-7xl mx-auto">
                     <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Produk Pilihan</h2>
                     <p className="text-center text-gray-600 mb-12">Produk terbaik untuk hewan kesayangan Anda</p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {products.map((product) => (
                            <Link href={route('products.show', product.id)} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                             <div className="relative overflow-hidden">
                                 <img src={`/storage/${product.image}`} className="bg-blue-100 h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                             </div>
                             <div className="p-6">
                                 <h3 className="font-bold text-lg mb-2 text-gray-800">{product.product_name}</h3>
                                 <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>
                                 <p className="text-orange-600 font-bold text-xl mb-4">{formatPrice(product.price)}</p>
                                <Link href={route('orders.create', product.id)} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg">
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
                 </div>
             </div>
 
             {/* Categories */}
             <div className="bg-gradient-to-b from-orange-50 to-pink-50 py-20 px-4">
                 <div className="max-w-7xl mx-auto">
                     <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Belanja Berdasarkan Hewan</h2>
                     <p className="text-center text-gray-600 mb-12">Temukan produk sesuai kebutuhan hewan peliharaan Anda</p>
                     
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                         <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                             <div className="text-5xl mb-4"></div>
                             <h3 className="font-bold text-lg text-gray-800 mb-2">Anjing</h3>
                             <p className="text-sm text-gray-500">Makanan & Aksesoris</p>
                         </div>
 
                         <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                             <div className="text-5xl mb-4"></div>
                             <h3 className="font-bold text-lg text-gray-800 mb-2">Kucing</h3>
                             <p className="text-sm text-gray-500">Makanan & Mainan</p>
                         </div>
 
                         <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                             <div className="text-5xl mb-4"></div>
                             <h3 className="font-bold text-lg text-gray-800 mb-2">Burung</h3>
                             <p className="text-sm text-gray-500">Kandang & Pakan</p>
                         </div>
 
                         <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                             <div className="text-5xl mb-4"></div>
                             <h3 className="font-bold text-lg text-gray-800 mb-2">Ikan</h3>
                             <p className="text-sm text-gray-500">Aquarium & Perlengkapan</p>
                         </div>
                     </div>
                 </div>
             </div>
 
             {/* Why Choose Us */}
             <div className="py-20 px-4 bg-white">
                 <div className="max-w-7xl mx-auto">
                     <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Kenapa Pilih Kami?</h2>
                     <p className="text-center text-gray-600 mb-12">Keunggulan PawsCommerce untuk hewan kesayangan Anda</p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                         <div className="text-center p-6 rounded-2xl hover:bg-orange-50 transition-all duration-300">
                             <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                 <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                 </svg>
                             </div>
                             <h3 className="font-bold text-xl mb-3 text-gray-800">Pengiriman Cepat</h3>
                             <p className="text-gray-600">Gratis ongkir untuk pembelian di atas Rp 200.000</p>
                         </div>
 
                         <div className="text-center p-6 rounded-2xl hover:bg-orange-50 transition-all duration-300">
                             <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                 <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                 </svg>
                             </div>
                             <h3 className="font-bold text-xl mb-3 text-gray-800">Produk Berkualitas</h3>
                             <p className="text-gray-600">Semua produk sudah tersertifikasi dan aman</p>
                         </div>
 
                         <div className="text-center p-6 rounded-2xl hover:bg-orange-50 transition-all duration-300">
                             <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                 <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                 </svg>
                             </div>
                             <h3 className="font-bold text-xl mb-3 text-gray-800">Konsultasi Gratis</h3>
                             <p className="text-gray-600">Chat dengan dokter hewan kami 24/7</p>
                         </div>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }