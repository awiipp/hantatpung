import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";

export default function AdminMessages({ messages }) {
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleDelete = (id) => {
        router.delete(route('contact.destroy', id), {
            onSuccess: () => {
                setShowDeleteModal(false);
                setSelectedMessage(null);
            }
        });
    };

    const getSubjectLabel = (subject) => {
        const subjects = {
            'product': 'Pertanyaan Produk',
            'order': 'Status Pesanan',
            'consultation': 'Konsultasi Hewan',
            'complaint': 'Keluhan',
            'partnership': 'Kerjasama',
            'other': 'Lainnya'
        };
        return subjects[subject] || subject;
    };

    return (
        <AuthenticatedLayout>
            <Head title="Kelola Pesan" />

            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-3">Kelola Pesan Kontak</h1>
                <p className="text-xl">Total Pesan: {messages.length}</p>
            </div>

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white min-h-[70vh]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gradient-to-r from-orange-500 to-pink-500">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-white">No</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-white">Nama</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-white">Email</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-white">Telepon</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-white">Subjek</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-white">Tanggal</th>
                                        <th className="px-6 py-4 text-center text-sm font-bold text-white">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {messages.length > 0 ? (
                                        messages.map((message, index) => (
                                            <tr key={message.id} className="hover:bg-orange-50">
                                                <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                                                <td className="px-6 py-4 text-sm font-semibold text-gray-900">{message.name}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{message.email}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{message.phone || '-'}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{getSubjectLabel(message.subject)}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">
                                                    {new Date(message.created_at).toLocaleDateString('id-ID')}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedMessage(message);
                                                                setShowDetailModal(true);
                                                            }}
                                                            className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
                                                        >
                                                            <FaEye />
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setSelectedMessage(message);
                                                                setShowDeleteModal(true);
                                                            }}
                                                            className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                                                        >
                                                            <FaTrash />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                                                Tidak ada pesan
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Detail */}
            {showDetailModal && selectedMessage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 m-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Detail Pesan</h2>
                        
                        <div className="space-y-3">
                            <div>
                                <p className="font-bold text-gray-700">Nama:</p>
                                <p className="text-gray-600">{selectedMessage.name}</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700">Email:</p>
                                <p className="text-gray-600">{selectedMessage.email}</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700">Telepon:</p>
                                <p className="text-gray-600">{selectedMessage.phone || '-'}</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700">Subjek:</p>
                                <p className="text-gray-600">{getSubjectLabel(selectedMessage.subject)}</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700">Pesan:</p>
                                <p className="text-gray-600">{selectedMessage.message}</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700">Tanggal:</p>
                                <p className="text-gray-600">
                                    {new Date(selectedMessage.created_at).toLocaleString('id-ID')}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowDetailModal(false)}
                            className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-lg hover:from-orange-500 hover:to-pink-600"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}

            {/* Modal Hapus */}
            {showDeleteModal && selectedMessage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 text-center">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Hapus Pesan?
                        </h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Hapus pesan dari <strong>{selectedMessage.name}</strong>?
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                            >
                                Batal
                            </button>
                            <button
                                onClick={() => handleDelete(selectedMessage.id)}
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