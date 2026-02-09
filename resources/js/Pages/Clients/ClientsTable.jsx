import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function ClientsAdmin({clients}) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        company: '',
        role: '',
        rating: '5',
        review: '',
        image: null,
        _method: 'PUT'
    });

    const stars = (rating) => {
        return '⭐'.repeat(rating);
    };

    const averageRating = (clients) => {
        if (!clients || clients.length === 0) return 0;

        const total = clients.reduce((sum, client) => {
            return sum + (Number(client.rating) || 0);
        }, 0);

        return (total / clients.length).toFixed(1);
    };

    const handleEdit = (client) => {
        setSelectedClient(client);
        setData({
            name: client.name,
            company: client.company,
            role: client.role,
            rating: client.rating.toString(),
            review: client.review,
            image: null,
            _method: 'PUT'
        });
        setImagePreview(`/storage/${client.image}`);
        setShowEditModal(true);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('image', file);
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        post(route('clients.update', selectedClient.id), {
            forceFormData: true,
            onSuccess: () => {
                setShowEditModal(false);
                reset();
                setImagePreview(null);
            }
        });
    };

    const handleDelete = (client) => {
        setSelectedClient(client);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        router.delete(route('clients.destroy', selectedClient.id), {
            onSuccess: () => {
                setShowDeleteModal(false);
                setSelectedClient(null);
            }
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Kelola Client" />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-3">Kelola Client</h1>
                <p className="text-xl">Manage testimoni client PawsCommerce</p>
            </div>

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8 flex justify-between items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Daftar Client
                            </h2>
                            <p className="text-gray-600">
                                Kelola testimoni dan review dari client
                            </p>
                        </div>
                        <Link
                            href={route('clients.create')}
                            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 flex items-center gap-2 font-semibold shadow-md"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Tambah Client Baru
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-2 border-orange-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1 font-semibold">Total Client</p>
                                    <p className="text-3xl font-bold text-orange-600">{clients.length}</p>
                                </div>
                                <div className="p-3 bg-orange-100 rounded-lg">
                                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-2 border-yellow-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1 font-semibold">Rating Rata-rata</p>
                                    <p className="text-3xl font-bold text-yellow-500">
                                        {averageRating(clients)}
                                    </p>
                                </div>
                                <div className="p-3 bg-yellow-100 rounded-lg text-3xl text-yellow-500">
                                    <FaStar/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-orange-100">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gradient-to-r from-orange-500 to-pink-500">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Client
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Company
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Rating
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                            Review
                                        </th>
                                        <th className="px-6 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {clients.length > 0 ? (
                                        clients.map((client) => (
                                            <tr key={client.id} className="hover:bg-orange-50 transition">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-12 w-12">
                                                            <img
                                                                className="h-12 w-12 rounded-full object-cover shadow-sm border-2 border-orange-200"
                                                                src={`/storage/${client.image}`}
                                                                alt={client.name}
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-bold text-gray-900">
                                                                {client.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    <div className="font-medium">{client.company}</div>
                                                    <div className="text-gray-500">{client.role}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-bold">
                                                    {stars(client.rating)}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-600 max-w-md truncate">
                                                        {client.review}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                                    <div className="flex justify-center gap-2">
                                                        <button
                                                            onClick={() => handleEdit(client)}
                                                            className="text-orange-600 hover:text-orange-800 p-2 hover:bg-orange-50 rounded transition"
                                                            title="Edit"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(client)}
                                                            className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded transition"
                                                            title="Delete"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                                                Belum ada client
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            {showEditModal && selectedClient && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                        <div className="p-6 border-b-2 border-gray-200 bg-gradient-to-r from-orange-50 to-pink-50">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-gray-900">
                                    Edit Client
                                </h3>
                                <button
                                    onClick={() => {
                                        setShowEditModal(false);
                                        reset();
                                        setImagePreview(null);
                                    }}
                                    className="text-gray-400 hover:text-gray-600 transition"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleUpdate} className="p-6 space-y-6">
                            {/* Image Preview */}
                            <div className="flex items-center gap-6">
                                <div className="flex-shrink-0">
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            className="w-24 h-24 rounded-full object-cover border-4 border-orange-200"
                                        />
                                    ) : (
                                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-400">No Image</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Ganti Foto
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                                    />
                                    {errors.image && (
                                        <p className="mt-1 text-sm text-red-600">{errors.image}</p>
                                    )}
                                </div>
                            </div>

                            {/* Name and Company */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Perusahaan
                                    </label>
                                    <input
                                        type="text"
                                        value={data.company}
                                        onChange={(e) => setData('company', e.target.value)}
                                        className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        required
                                    />
                                    {errors.company && (
                                        <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                                    )}
                                </div>
                            </div>

                            {/* Role and Rating */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Jabatan
                                    </label>
                                    <input
                                        type="text"
                                        value={data.role}
                                        onChange={(e) => setData('role', e.target.value)}
                                        className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        required
                                    />
                                    {errors.role && (
                                        <p className="mt-1 text-sm text-red-600">{errors.role}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Rating
                                    </label>
                                    <select
                                        value={data.rating}
                                        onChange={(e) => setData('rating', e.target.value)}
                                        className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="5">⭐⭐⭐⭐⭐ (5 Bintang)</option>
                                        <option value="4">⭐⭐⭐⭐ (4 Bintang)</option>
                                        <option value="3">⭐⭐⭐ (3 Bintang)</option>
                                        <option value="2">⭐⭐ (2 Bintang)</option>
                                        <option value="1">⭐ (1 Bintang)</option>
                                    </select>
                                    {errors.rating && (
                                        <p className="mt-1 text-sm text-red-600">{errors.rating}</p>
                                    )}
                                </div>
                            </div>

                            {/* Review */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Review
                                </label>
                                <textarea
                                    rows="5"
                                    value={data.review}
                                    onChange={(e) => setData('review', e.target.value)}
                                    className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    required
                                ></textarea>
                                {errors.review && (
                                    <p className="mt-1 text-sm text-red-600">{errors.review}</p>
                                )}
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-3 pt-4 border-t-2 border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowEditModal(false);
                                        reset();
                                        setImagePreview(null);
                                    }}
                                    className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-semibold"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition font-semibold shadow-md disabled:opacity-50"
                                >
                                    {processing ? 'Menyimpan...' : 'Update Client'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {showDeleteModal && selectedClient && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 text-center">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Hapus Client?
                        </h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Hapus client <strong>{selectedClient.name}</strong>?
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                            >
                                Batal
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}