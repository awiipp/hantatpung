 import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
 import { Head, Link } from "@inertiajs/react";
 import { useState } from "react";
 
 export default function EventUser() {
     const [selectedFilter, setSelectedFilter] = useState('All');
 
     const events = [
         {
             id: 1,
             title: "Adoption Day - Cari Keluarga untuk Kucing Terlantar",
             description: "Event adopsi kucing gratis! Bawa pulang sahabat berbulu baru dan dapatkan starter kit gratis senilai 500K.",
             date: "2024-02-15",
             endDate: "2024-02-17",
             time: "10:00 - 18:00",
             location: "PawsCommerce Store Jakarta",
             category: "Adoption",
             image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
             status: "Upcoming",
             discount: "Free Starter Kit"
         },
         {
             id: 2,
             title: "Pet Care Workshop: Grooming 101",
             description: "Belajar teknik grooming dasar untuk anjing dan kucing dari expert groomer. Gratis untuk 30 peserta pertama!",
             date: "2024-02-10",
             time: "14:00 - 17:00",
             location: "PawsCommerce HQ, Jakarta",
             category: "Workshop",
             image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600",
             status: "Active",
             discount: "Free Entry"
         },
         {
             id: 3,
             title: "Flash Sale Pet Food & Accessories",
             description: "Diskon hingga 70% untuk makanan hewan dan aksesoris! Promo terbatas hanya untuk 100 pembeli pertama.",
             date: "2024-02-20",
             endDate: "2024-02-21",
             time: "00:00 - 23:59",
             location: "Online",
             category: "Sale",
             image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600",
             status: "Upcoming",
             discount: "Up to 70%"
         },
         {
             id: 4,
             title: "Vaccination Day - Vaksin Gratis untuk Hewan Anda",
             description: "Vaksinasi gratis untuk anjing dan kucing! Bekerjasama dengan dokter hewan bersertifikat. Daftar sekarang!",
             date: "2024-02-12",
             time: "09:00 - 15:00",
             location: "PawsCommerce Pet Clinic",
             category: "Health",
             image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600",
             status: "Active",
             discount: "Free Vaccine"
         },
         {
             id: 5,
             title: "Pet Fashion Show & Competition",
             description: "Ajang kompetisi fashion untuk hewan peliharaan! Hadiah total 10 juta rupiah untuk pemenang. Daftarkan pet Anda!",
             date: "2024-02-25",
             time: "13:00 - 18:00",
             location: "Central Park Mall, Jakarta",
             category: "Competition",
             image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600",
             status: "Upcoming",
             discount: "Prize 10Jt"
         },
         {
             id: 6,
             title: "Meet & Greet: Influencer Pet Indonesia",
             description: "Bertemu langsung dengan pet influencer favorit! Photobooth gratis, games menarik, dan banyak hadiah.",
             date: "2024-02-28",
             time: "11:00 - 16:00",
             location: "Plaza Senayan, Jakarta",
             category: "Special Event",
             image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600",
             status: "Upcoming",
             discount: "Free Entry"
         }
     ];
 
     const filters = ['All', 'Adoption', 'Workshop', 'Sale', 'Health', 'Competition', 'Special Event'];
 
     const getStatusColor = (status) => {
         switch(status) {
             case 'Active':
                 return 'bg-green-100 text-green-800 border-2 border-green-300';
             case 'Upcoming':
                 return 'bg-blue-100 text-blue-800 border-2 border-blue-300';
             case 'Ended':
                 return 'bg-gray-100 text-gray-800 border-2 border-gray-300';
             default:
                 return 'bg-gray-100 text-gray-800 border-2 border-gray-300';
         }
     };
 
     const formatDate = (dateString) => {
         const options = { day: 'numeric', month: 'long', year: 'numeric' };
         return new Date(dateString).toLocaleDateString('id-ID', options);
     };
 
     const getDaysUntil = (dateString) => {
         const today = new Date();
         const eventDate = new Date(dateString);
         const diffTime = eventDate - today;
         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
         return diffDays;
     };
 
     return (
         <AuthenticatedLayout>
             <Head title="Events" />
 
             {/* Hero Section */}
             <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16 text-center">
                 <h1 className="text-4xl font-bold mb-3">🎉 Event & Kegiatan</h1>
                 <p className="text-xl">Jangan lewatkan event seru untuk Anda dan hewan kesayangan!</p>
             </div>
 
             <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                     {/* Header */}
                     <div className="mb-8 text-center">
                         <h2 className="text-3xl font-bold text-gray-900 mb-2">
                             Event Mendatang
                         </h2>
                         <p className="text-gray-600">
                             Ikuti berbagai kegiatan menarik dan dapatkan benefit eksklusif
                         </p>
                     </div>
 
                     {/* Filter */}
                     <div className="mb-8 flex gap-3 overflow-x-auto pb-2 justify-center">
                         {filters.map((filter) => (
                             <button
                                 key={filter}
                                 onClick={() => setSelectedFilter(filter)}
                                 className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${
                                     selectedFilter === filter
                                         ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                                         : 'bg-white border-2 border-orange-300 text-orange-700 hover:bg-orange-50'
                                 }`}
                             >
                                 {filter}
                             </button>
                         ))}
                     </div>
 
                     {/* Events Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {events.map((event) => (
                             <div
                                 key={event.id}
                                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group transform hover:-translate-y-1"
                             >
                                 {/* Image */}
                                 <div className="relative h-48 bg-gray-200 overflow-hidden">
                                     <img
                                         src={event.image}
                                         alt={event.title}
                                         className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                     />
                                     
                                     {/* Status Badge */}
                                     <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full ${getStatusColor(event.status)}`}>
                                         {event.status}
                                     </span>
 
                                     {/* Discount Badge */}
                                     {event.discount && (
                                         <span className="absolute top-3 right-3 px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-lg">
                                             {event.discount}
                                         </span>
                                     )}
 
                                     {/* Days Until */}
                                     {event.status === 'Upcoming' && getDaysUntil(event.date) > 0 && (
                                         <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                                             <span className="text-xs font-bold text-orange-600">
                                                 ⏰ {getDaysUntil(event.date)} hari lagi
                                             </span>
                                         </div>
                                     )}
                                 </div>
 
                                 {/* Content */}
                                 <div className="p-5">
                                     {/* Category */}
                                     <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 text-xs font-bold rounded-full mb-3">
                                         {event.category}
                                     </span>
 
                                     {/* Title */}
                                     <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition">
                                         {event.title}
                                     </h3>
 
                                     {/* Description */}
                                     <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                                         {event.description}
                                     </p>
 
                                     {/* Event Details */}
                                     <div className="space-y-2 mb-4 bg-orange-50 p-3 rounded-lg">
                                         {/* Date */}
                                         <div className="flex items-start gap-2">
                                             <svg
                                                 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                                                 fill="none"
                                                 stroke="currentColor"
                                                 viewBox="0 0 24 24"
                                             >
                                                 <path
                                                     strokeLinecap="round"
                                                     strokeLinejoin="round"
                                                     strokeWidth="2"
                                                     d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                 />
                                             </svg>
                                             <span className="text-xs text-gray-700 font-medium">
                                                 {formatDate(event.date)}
                                                 {event.endDate && ` - ${formatDate(event.endDate)}`}
                                             </span>
                                         </div>
 
                                         {/* Time */}
                                         <div className="flex items-start gap-2">
                                             <svg
                                                 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                                                 fill="none"
                                                 stroke="currentColor"
                                                 viewBox="0 0 24 24"
                                             >
                                                 <path
                                                     strokeLinecap="round"
                                                     strokeLinejoin="round"
                                                     strokeWidth="2"
                                                     d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                 />
                                             </svg>
                                             <span className="text-xs text-gray-700 font-medium">
                                                 {event.time}
                                             </span>
                                         </div>
 
                                         {/* Location */}
                                         <div className="flex items-start gap-2">
                                             <svg
                                                 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                                                 fill="none"
                                                 stroke="currentColor"
                                                 viewBox="0 0 24 24"
                                             >
                                                 <path
                                                     strokeLinecap="round"
                                                     strokeLinejoin="round"
                                                     strokeWidth="2"
                                                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                 />
                                                 <path
                                                     strokeLinecap="round"
                                                     strokeLinejoin="round"
                                                     strokeWidth="2"
                                                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                 />
                                             </svg>
                                             <span className="text-xs text-gray-700 font-medium">
                                                 {event.location}
                                             </span>
                                         </div>
                                     </div>
 
                                     {/* Action Button */}
                                     <Link
                                         href={`/events/${event.id}`}
                                         className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center py-2.5 rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 font-bold shadow-md"
                                     >
                                         {event.status === 'Active' ? 'Daftar Sekarang 🐾' : 'Lihat Detail 📋'}
                                     </Link>
                                 </div>
                             </div>
                         ))}
                     </div>
 
                     {/* Stats Section */}
                     <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
                         <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">📊 Event Stats 2024</h3>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                             <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
                                 <p className="text-sm text-gray-700 font-medium">Event Terselenggara</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-pink-600 mb-2">200+</div>
                                 <p className="text-sm text-gray-700 font-medium">Hewan Teradopsi</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-blue-600 mb-2">5K+</div>
                                 <p className="text-sm text-gray-700 font-medium">Peserta Workshop</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-green-600 mb-2">1K+</div>
                                 <p className="text-sm text-gray-700 font-medium">Vaksinasi Gratis</p>
                             </div>
                         </div>
                     </div>
 
                     {/* Newsletter Section */}
                     <div className="mt-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-8 text-white shadow-xl">
                         <div className="max-w-2xl mx-auto text-center">
                             <div className="text-5xl mb-4">📬</div>
                             <h3 className="text-3xl font-bold mb-2">
                                 Jangan Lewatkan Event Kami!
                             </h3>
                             <p className="text-orange-100 mb-6 text-lg">
                                 Subscribe newsletter dan dapatkan info event terbaru, promo eksklusif, dan tips perawatan hewan
                             </p>
                             <div className="flex gap-3 max-w-md mx-auto">
                                 <input
                                     type="email"
                                     placeholder="Masukkan email Anda"
                                     className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                                 />
                                 <button className="px-6 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition duration-150 shadow-lg">
                                     Subscribe 🐾
                                 </button>
                             </div>
                         </div>
                     </div>
 
                     {/* Past Events Highlights */}
                     <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
                         <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">🎬 Sorotan Event Sebelumnya</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             <div className="text-center">
                                 <div className="bg-orange-100 h-32 rounded-lg mb-3 flex items-center justify-center">
                                     <span className="text-5xl">🐕</span>
                                 </div>
                                 <h4 className="font-bold text-gray-800 mb-1">Dog Training Workshop</h4>
                                 <p className="text-sm text-gray-600">150+ peserta puas</p>
                             </div>
                             <div className="text-center">
                                 <div className="bg-pink-100 h-32 rounded-lg mb-3 flex items-center justify-center">
                                     <span className="text-5xl">🐱</span>
                                 </div>
                                 <h4 className="font-bold text-gray-800 mb-1">Cat Adoption Fair</h4>
                                 <p className="text-sm text-gray-600">80 kucing menemukan rumah</p>
                             </div>
                             <div className="text-center">
                                 <div className="bg-blue-100 h-32 rounded-lg mb-3 flex items-center justify-center">
                                     <span className="text-5xl">💉</span>
                                 </div>
                                 <h4 className="font-bold text-gray-800 mb-1">Free Vaccination Day</h4>
                                 <p className="text-sm text-gray-600">300+ hewan divaksinasi</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }