 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head } from '@inertiajs/react';
 
 export default function Dashboard() {
     // Pet Shop Stats
     const stats = [
         { 
             label: 'Total Pets', 
             value: '342', 
             color: 'bg-gradient-to-br from-pink-400 to-pink-600',
             icon: (
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                 </svg>
             ),
             
         },
         { 
             label: 'Appointments', 
             value: '89', 
             color: 'bg-gradient-to-br from-blue-400 to-blue-600',
             icon: (
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
             ),
             
         },
         { 
             label: 'Products Sold', 
             value: '1,234', 
             color: 'bg-gradient-to-br from-green-400 to-green-600',
             icon: (
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                 </svg>
             ),
             
         },
         { 
             label: 'Happy Clients', 
             value: '5,678', 
             color: 'bg-gradient-to-br from-orange-400 to-orange-600',
             icon: (
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
             ),
              
         },
     ];
 
     const petProducts = [
         { 
             id: 1, 
             name: 'Premium Dog Food', 
             category: 'Food',
             price: 'Rp 250.000', 
             stock: 45,
             image: '/images/makanan-anjing.jpeg'
         },
         { 
             id: 2, 
             name: 'Cat Litter Premium', 
             category: 'Supplies',
             price: 'Rp 150.000', 
             stock: 32,
             image: ''
         },
         { 
             id: 3, 
             name: 'Pet Carrier Bag', 
             category: 'Accessories',
             price: 'Rp 350.000', 
             stock: 18,
             image: ''
         },
         { 
             id: 4, 
             name: 'Interactive Pet Toy', 
             category: 'Toys',
             price: 'Rp 125.000', 
             stock: 56,
             image: ''
         },
     ];
 
     const recentAppointments = [
         { 
             id: 1, 
             petName: 'Max', 
             service: 'Grooming',
             owner: 'John Doe',
             time: '10:00 AM',
             status: 'Confirmed',
             petType: ''
         },
         { 
             id: 2, 
             petName: 'Luna', 
             service: 'Vet Checkup',
             owner: 'Jane Smith',
             time: '11:30 AM',
             status: 'In Progress',
             petType: ''
         },
         { 
             id: 3, 
             petName: 'Charlie', 
             service: 'Vaccination',
             owner: 'Mike Johnson',
             time: '02:00 PM',
             status: 'Waiting',
             petType: ''
         },
     ];
 
     const petCategories = [
         { name: 'Dogs', count: 156, icon: '', color: 'bg-amber-100 text-amber-800' },
         { name: 'Cats', count: 134, icon: '', color: 'bg-purple-100 text-purple-800' },
         { name: 'Birds', count: 28, icon: '', color: 'bg-sky-100 text-sky-800' },
         { name: 'Fish', count: 24, icon: '', color: 'bg-blue-100 text-blue-800' },
     ];
 
     const upcomingEvents = [
         { 
             id: 1,
             title: 'Pet Adoption Day', 
             date: 'Feb 5, 2026',
             type: 'Community Event',
             color: 'border-pink-500 bg-pink-50'
         },
         { 
             id: 2,
             title: 'Free Vaccination Campaign', 
             date: 'Feb 10, 2026',
             type: 'Health',
             color: 'border-green-500 bg-green-50'
         },
         { 
             id: 3,
             title: 'Pet Training Workshop', 
             date: 'Feb 15, 2026',
             type: 'Training',
             color: 'border-blue-500 bg-blue-50'
         },
     ];
 
     const getStatusColor = (status) => {
         switch(status) {
             case 'Confirmed':
                 return 'bg-green-100 text-green-800';
             case 'In Progress':
                 return 'bg-blue-100 text-blue-800';
             case 'Waiting':
                 return 'bg-yellow-100 text-yellow-800';
             default:
                 return 'bg-gray-100 text-gray-800';
         }
     };
 
     return (
         <AuthenticatedLayout
             header={
                 <div className="flex items-center justify-between">
                     <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                         <span></span> Pet Shop Dashboard
                     </h2>
                     <div className="text-sm text-gray-600">
                         {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                     </div>
                 </div>
             }
         >
             <Head title="Dashboard - Pet Shop" />
 
             <div className="py-12">
                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                     {/* Stats Grid */}
                     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                         {stats.map((stat, index) => (
                             <div
                                 key={index}
                                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                             >
                                 <div className="flex items-center justify-between mb-4">
                                     <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                         {stat.icon}
                                     </div>
                                
                                 </div>
                                 <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                                 <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                             </div>
                         ))}
                     </div>
 
                     {/* Pet Categories */}
                     <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                             <span></span> Pet Categories
                         </h3>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                             {petCategories.map((category, index) => (
                                 <div
                                     key={index}
                                     className={`${category.color} p-4 rounded-lg text-center hover:scale-105 transition-transform cursor-pointer`}
                                 >
                                     <div className="text-4xl mb-2">{category.icon}</div>
                                     <p className="font-semibold">{category.name}</p>
                                     <p className="text-2xl font-bold">{category.count}</p>
                                 </div>
                             ))}
                         </div>
                     </div>
 
                     {/* Products & Appointments Grid */}
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                         {/* Top Selling Products */}
                         <div className="bg-white rounded-xl shadow-md p-6">
                             <div className="flex items-center justify-between mb-4">
                                 <h3 className="text-lg font-semibold flex items-center gap-2">
                                     <span></span> Top Selling Products
                                 </h3>
                                 <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                     View All →
                                 </button>
                             </div>
                             <div className="space-y-3">
                                 {petProducts.map((product) => (
                                     <div
                                         key={product.id}
                                         className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 hover:border-gray-300 transition"
                                     >
                                         <div className="flex items-center gap-3">
                                             <div>
                                                 <p className="font-semibold text-gray-900">{product.name}</p>
                                                 <p className="text-xs text-gray-500">{product.category}</p>
                                                 <p className="text-sm text-gray-600">Stock: {product.stock} units</p>
                                             </div>
                                         </div>
                                         <p className="font-bold text-gray-900">{product.price}</p>
                                     </div>
                                 ))}
                             </div>
                         </div>
 
                         {/* Today's Appointments */}
                         <div className="bg-white rounded-xl shadow-md p-6">
                             <div className="flex items-center justify-between mb-4">
                                 <h3 className="text-lg font-semibold flex items-center gap-2">
                                     <span></span> Today's Appointments
                                 </h3>
                                 <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                     View All →
                                 </button>
                             </div>
                             <div className="space-y-3">
                                 {recentAppointments.map((appointment) => (
                                     <div
                                         key={appointment.id}
                                         className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 hover:border-gray-300 transition"
                                     >
                                         <div className="flex items-start justify-between mb-2">
                                             <div className="flex items-center gap-2">
                                                 <span className="text-2xl">{appointment.petType}</span>
                                                 <div>
                                                     <p className="font-semibold text-gray-900">{appointment.petName}</p>
                                                     <p className="text-xs text-gray-500">{appointment.owner}</p>
                                                 </div>
                                             </div>
                                             <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                                                 {appointment.status}
                                             </span>
                                         </div>
                                         <div className="flex items-center justify-between text-sm">
                                             <span className="text-gray-600">
                                                 <span className="font-medium">Service:</span> {appointment.service}
                                             </span>
                                             <span className="text-gray-500 font-medium">{appointment.time}</span>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                         </div>
                     </div>
 
                     {/* Upcoming Events */}
                     <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                             <span></span> Upcoming Events
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                             {upcomingEvents.map((event) => (
                                 <div
                                     key={event.id}
                                     className={`border-l-4 ${event.color} p-4 rounded-lg hover:shadow-md transition`}
                                 >
                                     <div className="flex items-start justify-between mb-2">
                                         <p className="font-semibold text-gray-900">{event.title}</p>
                                         <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 border">
                                             {event.type}
                                         </span>
                                     </div>
                                     <p className="text-sm text-gray-600 flex items-center gap-1">
                                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                         </svg>
                                         {event.date}
                                     </p>
                                 </div>
                             ))}
                         </div>
                     </div>
 
                     {/* Quick Actions */}
                     <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
                         <div className="flex flex-col md:flex-row items-center justify-between">
                             <div className="mb-4 md:mb-0">
                                 <h3 className="text-2xl font-bold mb-2">Need Help Managing Your Pet Shop?</h3>
                                 <p className="text-blue-100">Quick access to essential pet care services and inventory</p>
                             </div>
                             <div className="flex gap-3">
                                 <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold shadow-lg">
                                     Add Pet
                                 </button>
                                 <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold border-2 border-white">
                                     New Appointment
                                 </button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </AuthenticatedLayout>
     );
 }