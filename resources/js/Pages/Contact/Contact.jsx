 import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
 import { Head } from "@inertiajs/react";
 
 export default function Contact() {
     return (
         <AuthenticatedLayout>
             <Head title="Contact Us" />
 
             {/* Hero Section */}
             <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16 text-center">
                 <h1 className="text-4xl font-bold mb-3">💬 Hubungi Kami</h1>
                 <p className="text-xl">Kami siap membantu Anda dan hewan kesayangan!</p>
             </div>
 
             <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                     {/* Quick Contact Cards */}
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                             <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                                 <span className="text-3xl">📞</span>
                             </div>
                             <h4 className="font-bold text-gray-800 mb-1">Telepon</h4>
                             <p className="text-sm text-orange-600 font-semibold">+62 812-PAWS-CARE</p>
                         </div>
                         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                             <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                                 <span className="text-3xl">📧</span>
                             </div>
                             <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                             <p className="text-sm text-pink-600 font-semibold">info@pawscommerce.id</p>
                         </div>
                         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                             <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                                 <span className="text-3xl">💬</span>
                             </div>
                             <h4 className="font-bold text-gray-800 mb-1">WhatsApp</h4>
                             <p className="text-sm text-green-600 font-semibold">Chat Langsung</p>
                         </div>
                         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                             <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                                 <span className="text-3xl">📍</span>
                             </div>
                             <h4 className="font-bold text-gray-800 mb-1">Lokasi</h4>
                             <p className="text-sm text-blue-600 font-semibold">Jakarta, Indonesia</p>
                         </div>
                     </div>
 
                     <div className="overflow-hidden bg-white shadow-xl sm:rounded-2xl">
                         <div className="p-8 text-gray-900">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 {/* Contact Information */}
                                 <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-xl">
                                     <h3 className="text-2xl font-bold mb-6 text-orange-600 flex items-center gap-2">
                                         <span>🐾</span> Informasi Kontak
                                     </h3>
                                     
                                     <div className="space-y-6">
                                         <div className="bg-white p-4 rounded-lg shadow-sm">
                                             <div className="flex items-start gap-3">
                                                 <div className="bg-orange-100 p-2 rounded-lg">
                                                     <span className="text-2xl">📍</span>
                                                 </div>
                                                 <div>
                                                     <p className="font-bold text-gray-800 mb-1">
                                                         Alamat
                                                     </p>
                                                     <p className="text-gray-600">
                                                         Jl. Pet Care Avenue No. 123
                                                         <br />
                                                         Jakarta Selatan, Indonesia 12345
                                                     </p>
                                                 </div>
                                             </div>
                                         </div>
 
                                         <div className="bg-white p-4 rounded-lg shadow-sm">
                                             <div className="flex items-start gap-3">
                                                 <div className="bg-pink-100 p-2 rounded-lg">
                                                     <span className="text-2xl">📞</span>
                                                 </div>
                                                 <div>
                                                     <p className="font-bold text-gray-800 mb-1">
                                                         Telepon
                                                     </p>
                                                     <p className="text-gray-600">
                                                         +62 812-PAWS-CARE (7297-2273)
                                                         <br />
                                                         +62 21 1234 5678
                                                     </p>
                                                 </div>
                                             </div>
                                         </div>
 
                                         <div className="bg-white p-4 rounded-lg shadow-sm">
                                             <div className="flex items-start gap-3">
                                                 <div className="bg-blue-100 p-2 rounded-lg">
                                                     <span className="text-2xl">📧</span>
                                                 </div>
                                                 <div>
                                                     <p className="font-bold text-gray-800 mb-1">
                                                         Email
                                                     </p>
                                                     <p className="text-gray-600">
                                                         info@pawscommerce.id
                                                         <br />
                                                         support@pawscommerce.id
                                                     </p>
                                                 </div>
                                             </div>
                                         </div>
 
                                         <div className="bg-white p-4 rounded-lg shadow-sm">
                                             <div className="flex items-start gap-3">
                                                 <div className="bg-green-100 p-2 rounded-lg">
                                                     <span className="text-2xl">🕐</span>
                                                 </div>
                                                 <div>
                                                     <p className="font-bold text-gray-800 mb-1">
                                                         Jam Operasional
                                                     </p>
                                                     <p className="text-gray-600">
                                                         Senin - Jumat: 09:00 - 18:00 WIB
                                                         <br />
                                                         Sabtu: 09:00 - 15:00 WIB
                                                         <br />
                                                         Minggu: 10:00 - 14:00 WIB
                                                     </p>
                                                 </div>
                                             </div>
                                         </div>
 
                                         <div className="bg-white p-4 rounded-lg shadow-sm">
                                             <div className="flex items-start gap-3">
                                                 <div className="bg-purple-100 p-2 rounded-lg">
                                                     <span className="text-2xl">🏥</span>
                                                 </div>
                                                 <div>
                                                     <p className="font-bold text-gray-800 mb-1">
                                                         Konsultasi Dokter Hewan
                                                     </p>
                                                     <p className="text-gray-600">
                                                         Tersedia 24/7 via Chat
                                                         <br />
                                                         <span className="text-orange-600 font-semibold">GRATIS untuk member!</span>
                                                     </p>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
 
                                     {/* Social Media */}
                                     <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                                         <p className="font-bold text-gray-800 mb-3">Follow Us 🐾</p>
                                         <div className="flex gap-3">
                                             <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
                                                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                                 </svg>
                                             </button>
                                             <button className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition">
                                                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                                 </svg>
                                             </button>
                                             <button className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition">
                                                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                                 </svg>
                                             </button>
                                             <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
                                                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                                 </svg>
                                             </button>
                                         </div>
                                     </div>
                                 </div>
 
                                 {/* Contact Form */}
                                 <div>
                                     <h3 className="text-2xl font-bold mb-6 text-pink-600 flex items-center gap-2">
                                         <span>✉️</span> Kirim Pesan
                                     </h3>
 
                                     <form className="space-y-4">
                                         <div>
                                             <label
                                                 htmlFor="name"
                                                 className="block text-sm font-bold text-gray-700 mb-2"
                                             >
                                                 Nama Lengkap *
                                             </label>
                                             <input
                                                 type="text"
                                                 id="name"
                                                 name="name"
                                                 placeholder="Masukkan nama Anda"
                                                 className="w-full rounded-lg border-2 border-orange-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 px-4 py-2"
                                                 required
                                             />
                                         </div>
 
                                         <div>
                                             <label
                                                 htmlFor="email"
                                                 className="block text-sm font-bold text-gray-700 mb-2"
                                             >
                                                 Email *
                                             </label>
                                             <input
                                                 type="email"
                                                 id="email"
                                                 name="email"
                                                 placeholder="email@example.com"
                                                 className="w-full rounded-lg border-2 border-orange-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 px-4 py-2"
                                                 required
                                             />
                                         </div>
 
                                         <div>
                                             <label
                                                 htmlFor="phone"
                                                 className="block text-sm font-bold text-gray-700 mb-2"
                                             >
                                                 Nomor Telepon
                                             </label>
                                             <input
                                                 type="tel"
                                                 id="phone"
                                                 name="phone"
                                                 placeholder="+62 812-xxxx-xxxx"
                                                 className="w-full rounded-lg border-2 border-orange-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 px-4 py-2"
                                             />
                                         </div>
 
                                         <div>
                                             <label
                                                 htmlFor="subject"
                                                 className="block text-sm font-bold text-gray-700 mb-2"
                                             >
                                                 Subjek *
                                             </label>
                                             <select
                                                 id="subject"
                                                 name="subject"
                                                 className="w-full rounded-lg border-2 border-orange-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 px-4 py-2"
                                                 required
                                             >
                                                 <option value="">Pilih subjek...</option>
                                                 <option value="product">Pertanyaan Produk</option>
                                                 <option value="order">Status Pesanan</option>
                                                 <option value="consultation">Konsultasi Hewan</option>
                                                 <option value="complaint">Keluhan</option>
                                                 <option value="partnership">Kerjasama</option>
                                                 <option value="other">Lainnya</option>
                                             </select>
                                         </div>
 
                                         <div>
                                             <label
                                                 htmlFor="message"
                                                 className="block text-sm font-bold text-gray-700 mb-2"
                                             >
                                                 Pesan *
                                             </label>
                                             <textarea
                                                 id="message"
                                                 name="message"
                                                 rows="5"
                                                 placeholder="Tulis pesan Anda di sini..."
                                                 className="w-full rounded-lg border-2 border-orange-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 px-4 py-2"
                                                 required
                                             ></textarea>
                                         </div>
 
                                         <button
                                             type="submit"
                                             className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 font-bold shadow-lg flex items-center justify-center gap-2"
                                         >
                                             <span>Kirim Pesan</span>
                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                                             </svg>
                                         </button>
                                     </form>
 
                                     {/* Additional Info */}
                                     <div className="mt-6 bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border-2 border-blue-200">
                                         <p className="text-sm text-gray-700 flex items-start gap-2">
                                             <span className="text-xl">ℹ️</span>
                                             <span>
                                                 <strong>Catatan:</strong> Tim kami akan merespons pesan Anda dalam waktu maksimal 1x24 jam pada hari kerja. 
                                                 Untuk pertanyaan mendesak, hubungi kami via WhatsApp.
                                             </span>
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
 
                     {/* FAQ Section */}
                     <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
                         <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">❓ Pertanyaan yang Sering Diajukan</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="bg-orange-50 p-4 rounded-lg">
                                 <h4 className="font-bold text-orange-600 mb-2">Bagaimana cara memesan produk?</h4>
                                 <p className="text-sm text-gray-600">Pilih produk, tambahkan ke keranjang, lalu checkout. Kami menerima berbagai metode pembayaran.</p>
                             </div>
                             <div className="bg-pink-50 p-4 rounded-lg">
                                 <h4 className="font-bold text-pink-600 mb-2">Berapa lama pengiriman?</h4>
                                 <p className="text-sm text-gray-600">Pengiriman 1-3 hari untuk area Jakarta, 3-5 hari untuk luar Jakarta.</p>
                             </div>
                             <div className="bg-blue-50 p-4 rounded-lg">
                                 <h4 className="font-bold text-blue-600 mb-2">Apakah bisa konsultasi dokter hewan gratis?</h4>
                                 <p className="text-sm text-gray-600">Ya! Member PawsCommerce dapat konsultasi gratis 24/7 via chat dengan dokter hewan kami.</p>
                             </div>
                             <div className="bg-green-50 p-4 rounded-lg">
                                 <h4 className="font-bold text-green-600 mb-2">Bagaimana kebijakan retur?</h4>
                                 <p className="text-sm text-gray-600">Produk dapat diretur dalam 7 hari dengan kondisi tertentu. Hubungi customer service untuk detail.</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }