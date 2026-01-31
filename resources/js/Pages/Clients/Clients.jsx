 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head, Link } from '@inertiajs/react';
 import { useState } from 'react';
 
 export default function ClientsUser() {
     const [selectedCategory, setSelectedCategory] = useState('All');
 
     const clients = [
         { 
             id: 1, 
             name: 'Pet Paradise Veterinary', 
             category: 'Veterinary',
             partnership: 'Premium Partner',
             since: '2020',
             logo: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400',
             description: 'Klinik hewan modern dengan dokter berpengalaman'
         },
         { 
             id: 2, 
             name: 'Golden Paws Grooming', 
             category: 'Grooming',
             partnership: 'Gold Partner',
             since: '2019',
             logo: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400',
             description: 'Salon hewan profesional dengan layanan premium'
         },
         { 
             id: 3, 
             name: 'Pawfect Training Academy', 
             category: 'Training',
             partnership: 'Premium Partner',
             since: '2021',
             logo: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400',
             description: 'Akademi pelatihan anjing tersertifikasi'
         },
         { 
             id: 4, 
             name: 'Happy Tails Pet Hotel', 
             category: 'Boarding',
             partnership: 'Silver Partner',
             since: '2022',
             logo: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400',
             description: 'Hotel hewan dengan fasilitas mewah dan aman'
         },
         { 
             id: 5, 
             name: 'Meow Meow Cat Cafe', 
             category: 'Cafe',
             partnership: 'Gold Partner',
             since: '2020',
             logo: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400',
             description: 'Cat cafe dengan koleksi kucing ras premium'
         },
         { 
             id: 6, 
             name: 'Aqua World Fish Store', 
             category: 'Aquatic',
             partnership: 'Premium Partner',
             since: '2018',
             logo: 'https://images.unsplash.com/photo-1520990142052-1c211d1f648f?w=400',
             description: 'Toko ikan hias terlengkap di Indonesia'
         },
         { 
             id: 7, 
             name: 'Feathered Friends Aviary', 
             category: 'Birds',
             partnership: 'Gold Partner',
             since: '2021',
             logo: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400',
             description: 'Penangkaran burung eksotis berkualitas'
         },
         { 
             id: 8, 
             name: 'Pet Insurance Plus', 
             category: 'Insurance',
             partnership: 'Silver Partner',
             since: '2023',
             logo: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400',
             description: 'Asuransi kesehatan hewan peliharaan'
         },
     ];
 
     const categories = ['All', 'Veterinary', 'Grooming', 'Training', 'Boarding', 'Cafe', 'Aquatic', 'Birds', 'Insurance'];
     
     const filteredClients = selectedCategory === 'All' 
         ? clients 
         : clients.filter(client => client.category === selectedCategory);
 
     const getPartnershipBadgeColor = (partnership) => {
         switch(partnership) {
             case 'Premium Partner':
                 return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
             case 'Gold Partner':
                 return 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white';
             case 'Silver Partner':
                 return 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800';
             default:
                 return 'bg-blue-500 text-white';
         }
     };
 
     return (
         <AuthenticatedLayout>
             <Head title="Our Partners" />
 
             <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                     {/* Header */}
                     <div className="mb-8 text-center">
                         <h2 className="text-4xl font-bold text-gray-900 mb-3">
                             🐾 Partner Terpercaya Kami
                         </h2>
                         <p className="text-gray-600 text-lg">
                             Jaringan bisnis pet care terbaik yang bekerja sama dengan PawsCommerce
                         </p>
                     </div>
 
                     {/* Stats Section */}
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                             <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">50+</div>
                             <div className="text-gray-600 text-sm font-medium">Partner Terpercaya</div>
                             <div className="text-2xl mt-2">🤝</div>
                         </div>
                         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                             <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">8+</div>
                             <div className="text-gray-600 text-sm font-medium">Kategori Layanan</div>
                             <div className="text-2xl mt-2">🏆</div>
                         </div>
                         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                             <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">98%</div>
                             <div className="text-gray-600 text-sm font-medium">Kepuasan Partner</div>
                             <div className="text-2xl mt-2">⭐</div>
                         </div>
                         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                             <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">5+</div>
                             <div className="text-gray-600 text-sm font-medium">Tahun Pengalaman</div>
                             <div className="text-2xl mt-2">📅</div>
                         </div>
                     </div>
 
                     {/* Filters */}
                     <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                         <div className="grid grid-cols-1 gap-6">
                             {/* Category Filter */}
                             <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-3">
                                     📂 Kategori Layanan
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
 
                             {/* Search Bar */}
                             <div>
                                 <div className="relative">
                                     <input
                                         type="text"
                                         placeholder="Cari partner..."
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
                     </div>
 
                     {/* Results Count */}
                     <div className="mb-4">
                         <p className="text-gray-600">
                             Menampilkan <span className="font-bold text-orange-600">{filteredClients.length}</span> partner
                         </p>
                     </div>
 
                     {/* Clients Grid */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                         {filteredClients.map((client) => (
                             <div
                                 key={client.id}
                                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group transform hover:-translate-y-1"
                             >
                                 {/* Logo */}
                                 <div className="relative h-48 bg-gradient-to-br from-orange-100 to-pink-100 overflow-hidden flex items-center justify-center p-6">
                                     <img
                                         src={client.logo}
                                         alt={client.name}
                                         className="max-w-full max-h-full object-contain group-hover:scale-110 transition duration-300 rounded-lg"
                                     />
                                     {/* Partnership Badge */}
                                     <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full shadow-lg ${
                                         getPartnershipBadgeColor(client.partnership)
                                     }`}>
                                         {client.partnership.split(' ')[0]}
                                     </span>
                                 </div>
 
                                 {/* Content */}
                                 <div className="p-5">
                                     {/* Category */}
                                     <p className="text-xs text-orange-600 font-bold mb-2 uppercase">
                                         {client.category}
                                     </p>
 
                                     {/* Name */}
                                     <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">
                                         {client.name}
                                     </h3>
 
                                     {/* Description */}
                                     <p className="text-sm text-gray-600 mb-3 line-clamp-2 h-10">
                                         {client.description}
                                     </p>
 
                                     {/* Partnership Info */}
                                     <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                                         <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                             <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                         </svg>
                                         <span className="font-medium">Partner sejak {client.since}</span>
                                     </div>
 
                                     {/* View Details Button */}
                                     <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2.5 rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 flex items-center justify-center gap-2 font-semibold shadow-md">
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
                                                 d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                             />
                                         </svg>
                                         Lihat Detail
                                     </button>
                                 </div>
                             </div>
                         ))}
                     </div>
 
                     {/* Testimonial Section */}
                     <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
                         <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                             💬 Testimoni Partner Kami
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="border-2 border-orange-200 rounded-xl p-6 hover:shadow-lg transition">
                                 <div className="flex items-center gap-1 mb-3">
                                     {[1, 2, 3, 4, 5].map((star) => (
                                         <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                         </svg>
                                     ))}
                                 </div>
                                 <p className="text-gray-700 mb-4 italic leading-relaxed">
                                     "Bekerja sama dengan PawsCommerce sangat membantu bisnis kami! Produk berkualitas dan support team yang luar biasa. Pelanggan kami sangat puas!"
                                 </p>
                                 <div className="flex items-center gap-3">
                                     <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full flex items-center justify-center text-2xl">
                                         🐕
                                     </div>
                                     <div>
                                         <p className="font-bold text-gray-900">Dr. Budi Santoso</p>
                                         <p className="text-sm text-gray-600">Owner, Pet Paradise Veterinary</p>
                                     </div>
                                 </div>
                             </div>
 
                             <div className="border-2 border-pink-200 rounded-xl p-6 hover:shadow-lg transition">
                                 <div className="flex items-center gap-1 mb-3">
                                     {[1, 2, 3, 4, 5].map((star) => (
                                         <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                         </svg>
                                     ))}
                                 </div>
                                 <p className="text-gray-700 mb-4 italic leading-relaxed">
                                     "Partnership dengan PawsCommerce membuka peluang baru untuk bisnis kami. Sistem yang profesional dan mudah digunakan. Highly recommended!"
                                 </p>
                                 <div className="flex items-center gap-3">
                                     <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center text-2xl">
                                         🐱
                                     </div>
                                     <div>
                                         <p className="font-bold text-gray-900">Siti Nurhaliza</p>
                                         <p className="text-sm text-gray-600">Owner, Golden Paws Grooming</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
 
                     {/* CTA Section */}
                     <div className="mt-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-8 text-center text-white shadow-xl">
                         <h3 className="text-3xl font-bold mb-3">
                             🤝 Bergabung Jadi Partner Kami!
                         </h3>
                         <p className="text-orange-100 mb-6 text-lg">
                             Kembangkan bisnis pet care Anda bersama jaringan terpercaya PawsCommerce
                         </p>
                         <button className="px-8 py-3 bg-white text-orange-600 rounded-full hover:bg-orange-50 transition duration-150 font-bold shadow-lg">
                             Hubungi Kami Sekarang 📞
                         </button>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }