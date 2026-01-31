 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
 import { Head, Link } from '@inertiajs/react';
 import { useState } from 'react';
 
 export default function ClientsAdmin() {
     const [showModal, setShowModal] = useState(false);
     const [editMode, setEditMode] = useState(false);
     const [selectedClient, setSelectedClient] = useState(null);
     const [searchTerm, setSearchTerm] = useState('');
 
     const [clients, setClients] = useState([
         { 
             id: 1, 
             name: 'Pet Paradise Veterinary', 
             category: 'Veterinary',
             partnership: 'Premium Partner',
             since: '2020',
             logo: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400',
             description: 'Klinik hewan modern dengan dokter berpengalaman',
             email: 'contact@petparadise.id',
             phone: '+62 21 1234 5678',
             status: 'Active'
         },
         { 
             id: 2, 
             name: 'Golden Paws Grooming', 
             category: 'Grooming',
             partnership: 'Gold Partner',
             since: '2019',
             logo: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400',
             description: 'Salon hewan profesional dengan layanan premium',
             email: 'info@goldenpaws.id',
             phone: '+62 21 8765 4321',
             status: 'Active'
         },
         { 
             id: 3, 
             name: 'Pawfect Training Academy', 
             category: 'Training',
             partnership: 'Premium Partner',
             since: '2021',
             logo: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400',
             description: 'Akademi pelatihan anjing tersertifikasi',
             email: 'support@pawfect.id',
             phone: '+62 21 5555 6666',
             status: 'Active'
         },
         { 
             id: 4, 
             name: 'Happy Tails Pet Hotel', 
             category: 'Boarding',
             partnership: 'Silver Partner',
             since: '2022',
             logo: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400',
             description: 'Hotel hewan dengan fasilitas mewah dan aman',
             email: 'admin@happytails.id',
             phone: '+62 21 7777 8888',
             status: 'Inactive'
         },
     ]);
 
     const handleAdd = () => {
         setEditMode(false);
         setSelectedClient(null);
         setShowModal(true);
     };
 
     const handleEdit = (client) => {
         setEditMode(true);
         setSelectedClient(client);
         setShowModal(true);
     };
 
     const handleDelete = (id) => {
         if (confirm('Apakah Anda yakin ingin menghapus partner ini?')) {
             setClients(clients.filter(client => client.id !== id));
         }
     };
 
     const filteredClients = clients.filter(client =>
         client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         client.category.toLowerCase().includes(searchTerm.toLowerCase())
     );
 
     const getStatusBadge = (status) => {
         return status === 'Active' 
             ? 'bg-green-100 text-green-800' 
             : 'bg-red-100 text-red-800';
     };
 
     const getPartnershipBadge = (partnership) => {
         switch(partnership) {
             case 'Premium Partner':
                 return 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800';
             case 'Gold Partner':
                 return 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800';
             case 'Silver Partner':
                 return 'bg-gray-100 text-gray-800';
             default:
                 return 'bg-blue-100 text-blue-800';
         }
     };
 
     return (
         <AuthenticatedLayout>
             <Head title="Manage Partners" />
 
             <div className="py-12">
                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                     {/* Header */}
                     <div className="mb-8 flex justify-between items-center">
                         <div>
                             <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                 🐾 Kelola Partner
                             </h2>
                             <p className="text-gray-600">
                                 Manage partner bisnis pet care Anda
                             </p>
                         </div>
                         <button
                             onClick={handleAdd}
                             className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 flex items-center gap-2 font-semibold shadow-md"
                         >
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                             </svg>
                             Tambah Partner Baru
                         </button>
                     </div>
 
                     {/* Stats */}
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                         <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                             <div className="flex items-center justify-between">
                                 <div>
                                     <p className="text-sm text-gray-600 mb-1">Total Partner</p>
                                     <p className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">{clients.length}</p>
                                 </div>
                                 <div className="p-3 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg">
                                     <span className="text-2xl">🤝</span>
                                 </div>
                             </div>
                         </div>
                         <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                             <div className="flex items-center justify-between">
                                 <div>
                                     <p className="text-sm text-gray-600 mb-1">Aktif</p>
                                     <p className="text-3xl font-bold text-green-600">
                                         {clients.filter(c => c.status === 'Active').length}
                                     </p>
                                 </div>
                                 <div className="p-3 bg-green-100 rounded-lg">
                                     <span className="text-2xl">✅</span>
                                 </div>
                             </div>
                         </div>
                         <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                             <div className="flex items-center justify-between">
                                 <div>
                                     <p className="text-sm text-gray-600 mb-1">Premium Partner</p>
                                     <p className="text-3xl font-bold text-purple-600">
                                         {clients.filter(c => c.partnership === 'Premium Partner').length}
                                     </p>
                                 </div>
                                 <div className="p-3 bg-purple-100 rounded-lg">
                                     <span className="text-2xl">⭐</span>
                                 </div>
                             </div>
                         </div>
                         <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                             <div className="flex items-center justify-between">
                                 <div>
                                     <p className="text-sm text-gray-600 mb-1">Bulan Ini</p>
                                     <p className="text-3xl font-bold text-gray-900">+2</p>
                                 </div>
                                 <div className="p-3 bg-blue-100 rounded-lg">
                                     <span className="text-2xl">📈</span>
                                 </div>
                             </div>
                         </div>
                     </div>
 
                     {/* Search and Filters */}
                     <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                         <div className="flex flex-col md:flex-row gap-4">
                             <div className="flex-1">
                                 <div className="relative">
                                     <input
                                         type="text"
                                         placeholder="Cari partner berdasarkan nama atau kategori..."
                                         value={searchTerm}
                                         onChange={(e) => setSearchTerm(e.target.value)}
                                         className="w-full px-4 py-2 pl-10 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                     />
                                     <svg
                                         className="absolute left-3 top-2.5 h-5 w-5 text-orange-400"
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
                             <div className="flex gap-2">
                                 <select className="px-4 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                     <option>Semua Status</option>
                                     <option>Active</option>
                                     <option>Inactive</option>
                                 </select>
                                 <select className="px-4 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                     <option>Semua Partnership</option>
                                     <option>Premium Partner</option>
                                     <option>Gold Partner</option>
                                     <option>Silver Partner</option>
                                 </select>
                             </div>
                         </div>
                     </div>
 
                     {/* Table */}
                     <div className="bg-white rounded-xl shadow-md overflow-hidden">
                         <div className="overflow-x-auto">
                             <table className="min-w-full divide-y divide-gray-200">
                                 <thead className="bg-gradient-to-r from-orange-50 to-pink-50">
                                     <tr>
                                         <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                             Partner
                                         </th>
                                         <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                             Kategori
                                         </th>
                                         <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                             Partnership
                                         </th>
                                         <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                             Kontak
                                         </th>
                                         <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                             Sejak
                                         </th>
                                         <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                             Status
                                         </th>
                                         <th className="px-6 py-3 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                                             Aksi
                                         </th>
                                     </tr>
                                 </thead>
                                 <tbody className="bg-white divide-y divide-gray-200">
                                     {filteredClients.map((client) => (
                                         <tr key={client.id} className="hover:bg-orange-50 transition">
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                 <div className="flex items-center">
                                                     <div className="flex-shrink-0 h-12 w-12">
                                                         <img
                                                             className="h-12 w-12 rounded-lg object-cover shadow-sm"
                                                             src={client.logo}
                                                             alt={client.name}
                                                         />
                                                     </div>
                                                     <div className="ml-4">
                                                         <div className="text-sm font-bold text-gray-900">
                                                             {client.name}
                                                         </div>
                                                         <div className="text-sm text-gray-500">
                                                             {client.description}
                                                         </div>
                                                     </div>
                                                 </div>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                 <span className="text-sm font-semibold text-orange-600">{client.category}</span>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                 <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${getPartnershipBadge(client.partnership)}`}>
                                                     {client.partnership}
                                                 </span>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                 <div className="font-medium">{client.email}</div>
                                                 <div className="text-gray-500">{client.phone}</div>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">
                                                 {client.since}
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                 <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${getStatusBadge(client.status)}`}>
                                                     {client.status}
                                                 </span>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                 <div className="flex justify-end gap-2">
                                                     <button
                                                         onClick={() => handleEdit(client)}
                                                         className="text-orange-600 hover:text-orange-800 p-1.5 hover:bg-orange-50 rounded transition"
                                                         title="Edit"
                                                     >
                                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                         </svg>
                                                     </button>
                                                     <button
                                                         onClick={() => handleDelete(client.id)}
                                                         className="text-red-600 hover:text-red-800 p-1.5 hover:bg-red-50 rounded transition"
                                                         title="Hapus"
                                                     >
                                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                         </svg>
                                                     </button>
                                                 </div>
                                             </td>
                                         </tr>
                                     ))}
                                 </tbody>
                             </table>
                         </div>
 
                         {/* Pagination */}
                         <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                             <div className="flex-1 flex justify-between sm:hidden">
                                 <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                     Sebelumnya
                                 </button>
                                 <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                     Selanjutnya
                                 </button>
                             </div>
                             <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                 <div>
                                     <p className="text-sm text-gray-700">
                                         Menampilkan <span className="font-medium">1</span> sampai <span className="font-medium">{filteredClients.length}</span> dari{' '}
                                         <span className="font-medium">{clients.length}</span> hasil
                                     </p>
                                 </div>
                                 <div>
                                     <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                         <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                             <span className="sr-only">Previous</span>
                                             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                                 <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                             </svg>
                                         </button>
                                         <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gradient-to-r from-orange-500 to-pink-500 text-sm font-medium text-white">
                                             1
                                         </button>
                                         <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                             <span className="sr-only">Next</span>
                                             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                                 <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                             </svg>
                                         </button>
                                     </nav>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
 
             {/* Modal */}
             {showModal && (
                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                     <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                         <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-pink-50">
                             <div className="flex justify-between items-center">
                                 <h3 className="text-xl font-bold text-gray-900">
                                     {editMode ? '✏️ Edit Partner' : '➕ Tambah Partner Baru'}
                                 </h3>
                                 <button
                                     onClick={() => setShowModal(false)}
                                     className="text-gray-400 hover:text-gray-600 transition"
                                 >
                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                     </svg>
                                 </button>
                             </div>
                         </div>
                         <div className="p-6">
                             <form className="space-y-4">
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                     <div>
                                         <label className="block text-sm font-bold text-gray-700 mb-1">
                                             Nama Partner *
                                         </label>
                                         <input
                                             type="text"
                                             className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                             placeholder="Masukkan nama partner"
                                         />
                                     </div>
                                     <div>
                                         <label className="block text-sm font-bold text-gray-700 mb-1">
                                             Kategori *
                                         </label>
                                         <select className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                             <option>Veterinary</option>
                                             <option>Grooming</option>
                                             <option>Training</option>
                                             <option>Boarding</option>
                                             <option>Cafe</option>
                                             <option>Aquatic</option>
                                         </select>
                                     </div>
                                 </div>
 
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                     <div>
                                         <label className="block text-sm font-bold text-gray-700 mb-1">
                                             Level Partnership *
                                         </label>
                                         <select className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                             <option>Premium Partner</option>
                                             <option>Gold Partner</option>
                                             <option>Silver Partner</option>
                                         </select>
                                     </div>
                                     <div>
                                         <label className="block text-sm font-bold text-gray-700 mb-1">
                                             Partner Sejak *
                                         </label>
                                         <input
                                             type="text"
                                             className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                             placeholder="2024"
                                         />
                                     </div>
                                 </div>
 
                                 <div>
                                     <label className="block text-sm font-bold text-gray-700 mb-1">
                                         Deskripsi *
                                     </label>
                                     <textarea
                                         rows="3"
                                         className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                         placeholder="Masukkan deskripsi partner"
                                     ></textarea>
                                 </div>
 
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                     <div>
                                         <label className="block text-sm font-bold text-gray-700 mb-1">
                                             Email *
                                         </label>
                                         <input
                                             type="email"
                                             className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                             placeholder="contact@partner.com"
                                         />
                                     </div>
                                     <div>
                                         <label className="block text-sm font-bold text-gray-700 mb-1">
                                             Telepon *
                                         </label>
                                         <input
                                             type="tel"
                                             className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                             placeholder="+62 21 xxxx xxxx"
                                         />
                                     </div>
                                 </div>
 
                                 <div>
                                     <label className="block text-sm font-bold text-gray-700 mb-1">
                                         URL Logo
                                     </label>
                                     <input
                                         type="text"
                                         className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                         placeholder="https://example.com/logo.jpg"
                                     />
                                 </div>
 
                                 <div>
                                     <label className="block text-sm font-bold text-gray-700 mb-1">
                                         Status *
                                     </label>
                                     <select className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                         <option>Active</option>
                                         <option>Inactive</option>
                                     </select>
                                 </div>
                             </form>
                         </div>
                         <div className="p-6 border-t border-gray-200 flex justify-end gap-3 bg-gray-50">
                             <button
                                 onClick={() => setShowModal(false)}
                                 className="px-5 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-semibold"
                             >
                                 Batal
                             </button>
                             <button
                                 className="px-5 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition font-semibold shadow-md"
                             >
                                 {editMode ? 'Update Partner' : 'Tambah Partner'}
                             </button>
                         </div>
                     </div>
                 </div>
             )}
         </AuthenticatedLayout>
     );
 }