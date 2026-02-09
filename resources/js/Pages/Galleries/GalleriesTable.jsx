import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function GalleriesAdmin({galleries}) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedGallery, setSelectedGallery] = useState(null);

    const categories = ['All', 'Adoption', 'Workshop', 'Training', 'Competition', 'Community', 'Events', 'Health'];

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    const formatDateTime = (dateTimeString) => {
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateTimeString).toLocaleDateString('id-ID', options);
    };

    const handleDelete = (gallery) => {
        setSelectedGallery(gallery);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        console.log('Deleting gallery:', selectedGallery.id);
        setShowDeleteModal(false);
        setSelectedGallery(null);
    };

    const filteredGalleries = galleries
        .filter(gallery => selectedCategory === 'All' || gallery.category === selectedCategory)
        .filter(gallery => 
            gallery.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            gallery.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <AuthenticatedLayout>
            <Head title="Kelola Galeri" />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-3">Kelola Galeri</h1>
                <p className="text-xl">Manajemen galeri foto PawsCommerce</p>
            </div>

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Stats Section */}
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Statistik Galeri</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                                <div className="text-4xl font-bold text-orange-600 mb-2">{galleries.length}</div>
                                <p className="text-sm text-gray-700 font-medium">Total Galeri</p>
                            </div>
                            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                                <div className="text-4xl font-bold text-pink-600 mb-2">
                                    {categories.length - 1}
                                </div>
                                <p className="text-sm text-gray-700 font-medium">Kategori</p>
                            </div>
                            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                <div className="text-4xl font-bold text-blue-600 mb-2">
                                    {galleries.filter(g => g.category === 'Events').length}
                                </div>
                                <p className="text-sm text-gray-700 font-medium">Events</p>
                            </div>
                            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                                <div className="text-4xl font-bold text-green-600 mb-2">2024</div>
                                <p className="text-sm text-gray-700 font-medium">Update Terbaru</p>
                            </div>
                        </div>
                    </div>

                    {/* Header with Add Button */}
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Daftar Galeri
                            </h2>
                            <p className="text-gray-600">
                                Kelola galeri foto event dan kegiatan
                            </p>
                        </div>
                        <Link
                            href={route('galleries.create')}
                            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 flex items-center gap-2 font-bold shadow-md"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Tambah Galeri
                        </Link>
                    </div>

                    {/* Filters */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                        {/* Category Filter */}
                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                Filter Kategori
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
                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                Cari Galeri
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Cari berdasarkan judul atau kategori..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
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

                    {/* Table */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gradient-to-r from-orange-500 to-pink-500">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Gambar
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Judul
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Kategori
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Tanggal
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Dibuat
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Diperbarui
                                        </th>
                                        <th className="px-6 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredGalleries.length > 0 ? (
                                        filteredGalleries.map((gallery, index) => (
                                            <tr 
                                                key={gallery.id}
                                                className={index % 2 === 0 ? 'bg-white hover:bg-orange-50' : 'bg-gray-50 hover:bg-orange-50'}
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-bold text-gray-900">#{gallery.id}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <img 
                                                    src={`/storage/${gallery.image}`} 
                                                        alt={gallery.title}
                                                        className="w-20 h-20 rounded-lg object-cover shadow-md"
                                                    />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-bold text-gray-900 max-w-xs">
                                                        {gallery.title}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700">
                                                        {gallery.category}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 font-medium">
                                                        {formatDate(gallery.date)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-xs text-gray-600">
                                                        {formatDateTime(gallery.created_at)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-xs text-gray-600">
                                                        {formatDateTime(gallery.updated_at)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                                    <div className="flex items-center justify-center gap-2">
                                                        {/* Edit Button */}
                                                        <Link
                                                            href={route('galleries.edit', gallery.id)}
                                                            className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-150 shadow-md"
                                                            title="Edit"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </Link>

                                                        {/* Delete Button */}
                                                        <button
                                                            onClick={() => handleDelete(gallery)}
                                                            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-150 shadow-md"
                                                            title="Hapus"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="px-6 py-12 text-center">
                                                <div className="flex flex-col items-center justify-center">
                                                    <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                                    </svg>
                                                    <p className="text-gray-500 text-lg font-medium">Tidak ada galeri ditemukan</p>
                                                    <p className="text-gray-400 text-sm mt-1">Coba ubah filter atau kata kunci pencarian</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="mt-8 flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                            Menampilkan 1 sampai {filteredGalleries.length} dari {galleries.length} hasil
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-white border-2 border-orange-300 text-orange-600 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition duration-150 font-bold disabled:opacity-50 disabled:cursor-not-allowed">
                                Sebelumnya
                            </button>
                            <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 font-bold">
                                1
                            </button>
                            <button className="px-4 py-2 bg-white border-2 border-orange-300 text-orange-600 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition duration-150 font-bold">
                                Selanjutnya
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
                        <div className="text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Hapus Galeri</h3>
                            <p className="text-sm text-gray-600 mb-6">
                                Apakah Anda yakin ingin menghapus galeri "<span className="font-bold">{selectedGallery?.title}</span>"? 
                                Tindakan ini tidak dapat dibatalkan.
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={() => setShowDeleteModal(false)}
                                    className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-150 font-bold"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition duration-150 font-bold shadow-md"
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}