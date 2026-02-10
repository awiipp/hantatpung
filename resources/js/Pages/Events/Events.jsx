import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
 import { Head, Link } from "@inertiajs/react";
 import { useState } from "react";
 
 export default function EventUser({events, total, upcoming, active, ended}) {
     const [selectedFilter, setSelectedFilter] = useState('All');
 
     
 
     const filters = ['All', 'Adoption', 'Workshop', 'Sale', 'Health', 'Competition', 'Special Event'];

     const filteredEvents = selectedFilter === 'All' 
         ? events 
         : events.filter(event => event.category === selectedFilter);
 
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
                 <h1 className="text-4xl font-bold mb-3">Event & Kegiatan</h1>
                 <p className="text-xl">Jangan lewatkan event seru untuk Anda dan hewan kesayangan!</p>
             </div>
 
             <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                     {/* Stats Section */}
                     <div className="mb-10 bg-white rounded-xl shadow-lg p-8">
                         <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Event Stats</h3>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                             <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-orange-600 mb-2">{total}</div>
                                 <p className="text-sm text-gray-700 font-medium">Event Terselenggara</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-pink-600 mb-2">{upcoming}</div>
                                 <p className="text-sm text-gray-700 font-medium">Event Mendatang</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-blue-600 mb-2">{active}</div>
                                 <p className="text-sm text-gray-700 font-medium">Event Berlangsung</p>
                             </div>
                             <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                                 <div className="text-4xl font-bold text-green-600 mb-2">{ended}</div>
                                 <p className="text-sm text-gray-700 font-medium">Event Selesai</p>
                             </div>
                         </div>
                     </div>
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
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[50vh]">
                         {filteredEvents.map((event) => (
                             <div
                                 key={event.id}
                                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group transform hover:-translate-y-1"
                             >
                                 {/* Image */}
                                 <div className="relative h-48 bg-gray-200 overflow-hidden">
                                     <img
                                         src={`/storage/${event.image}`}
                                         alt={event.title}
                                         className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                     />
                                     
                                     {/* Status Badge */}
                                     <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full ${getStatusColor(event.status)}`}>
                                         {event.status}
                                     </span>
 
                                     {/* Days Until */}
                                     {event.status === 'Upcoming' && getDaysUntil(event.date) > 0 && (
                                         <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                                             <span className="text-xs font-bold text-orange-600">
                                                 {getDaysUntil(event.date)} hari lagi
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
                                                 {event.end_date && ` - ${formatDate(event.end_date)}`}
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
                                         Lihat Detail
                                     </Link>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }