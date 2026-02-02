 import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function EventAdmin({ events }) {
    // Sample data jika tidak ada props
    const sampleEvents = events || [
        {
            id: 1,
            title: "Adoption Day - Cari Keluarga untuk Kucing Terlantar",
            category: "Adoption",
            date: "2024-02-15",
            location: "PawsCommerce Store Jakarta",
            status: "Upcoming",
            createdBy: "Admin",
            createdAt: "2024-01-28"
        },
        {
            id: 2,
            title: "Pet Care Workshop: Grooming 101",
            category: "Workshop",
            date: "2024-02-10",
            endDate: null,
            location: "PawsCommerce HQ, Jakarta",
            status: "Active",
            createdBy: "Admin",
            createdAt: "2024-01-25"
        },
        {
            id: 3,
            title: "Flash Sale Pet Food & Accessories",
            category: "Sale",
            date: "2024-02-20",
            location: "Online",
            status: "Upcoming",
            createdBy: "Admin",
            createdAt: "2024-01-26"
        },
        {
            id: 4,
            title: "Vaccination Day - Vaksin Gratis",
            category: "Health",
            date: "2024-02-12",
            endDate: null,
            location: "PawsCommerce Pet Clinic",
            status: "Active",
            createdBy: "Admin",
            createdAt: "2024-01-27"
        },
        {
            id: 5,
            title: "Pet Fashion Show & Competition",
            category: "Competition",
            date: "2024-02-25",
            endDate: null,
            location: "Central Park Mall, Jakarta",
            status: "Upcoming",
            participants: 15,
            maxParticipants: 50,
            createdBy: "Admin",
            createdAt: "2024-01-29"
        },
        {
            id: 6,
            title: "Meet & Greet: Influencer Pet Indonesia",
            category: "Special Event",
            date: "2024-02-28",
            endDate: null,
            location: "Plaza Senayan, Jakarta",
            status: "Upcoming",
            participants: 42,
            maxParticipants: 200,
            createdBy: "Admin",
            createdAt: "2024-01-30"
        },
        {
            id: 7,
            title: "Dog Training Workshop",
            category: "Workshop",
            date: "2024-01-20",
            endDate: null,
            location: "PawsCommerce Training Center",
            status: "Ended",
            participants: 30,
            maxParticipants: 30,
            createdBy: "Admin",
            createdAt: "2024-01-15"
        }
    ];

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
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const getParticipantPercentage = (current, max) => {
        if (!max) return null;
        return Math.round((current / max) * 100);
    };

    // Stats calculation
    const totalEvents = sampleEvents.length;
    const activeEvents = sampleEvents.filter(e => e.status === 'Active').length;
    const upcomingEvents = sampleEvents.filter(e => e.status === 'Upcoming').length;
    const totalParticipants = sampleEvents.reduce((sum, e) => sum + e.participants, 0);

    return (
        <AuthenticatedLayout>
            <Head title="Events Management" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-xl sm:rounded-2xl">
                        <div className="p-6 text-gray-900">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        Kelola Event
                                    </h2>
                                    <p className="text-sm text-gray-600 mt-1">Manage event dan kegiatan PawsCommerce</p>
                                </div>
                                <Link
                                    href="/events/create"
                                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2.5 rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 font-semibold shadow-md"
                                >
                                    + Event Baru
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl border-2 border-orange-200 hover:shadow-lg transition">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-orange-700 font-semibold mb-1">Total Event</p>
                                            <h3 className="text-3xl font-bold text-orange-900">{totalEvents}</h3>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border-2 border-green-200 hover:shadow-lg transition">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-green-700 font-semibold mb-1">Event Aktif</p>
                                            <h3 className="text-3xl font-bold text-green-900">{activeEvents}</h3>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-200 hover:shadow-lg transition">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-blue-700 font-semibold mb-1">Mendatang</p>
                                            <h3 className="text-3xl font-bold text-blue-900">{upcomingEvents}</h3>
                                        </div>
                                         
                                    </div>
                                </div>
                                
                            </div>

                            {/* Filter & Search */}
                            <div className="mb-6 flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Cari event..."
                                    className="flex-1 px-4 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                                <select className="px-4 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                    <option>Semua Status</option>
                                    <option>Active</option>
                                    <option>Upcoming</option>
                                    <option>Ended</option>
                                </select>
                                <select className="px-4 py-2 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                    <option>Semua Kategori</option>
                                    <option>Adoption</option>
                                    <option>Workshop</option>
                                    <option>Sale</option>
                                    <option>Health</option>
                                    <option>Competition</option>
                                    <option>Special Event</option>
                                </select>
                            </div>

                            {/* Events Table */}
                            <div className="overflow-x-auto rounded-lg border-2 border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gradient-to-r from-orange-50 to-pink-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider text-center">
                                                Event
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider text-center">
                                                Kategori
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider text-center">
                                                Tanggal
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider text-center">
                                                Lokasi
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider text-center">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider text-center">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {sampleEvents.map((event) => (
                                            <tr key={event.id} className="hover:bg-orange-50 transition">
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <div className="text-sm font-bold text-gray-900">
                                                            {event.title}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            Dibuat: {formatDate(event.createdAt)}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800">
                                                        {event.category}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    <div className="font-medium">
                                                        {formatDate(event.date)}
                                                        {event.endDate && (
                                                            <div className="text-xs text-gray-500">
                                                                s/d {formatDate(event.endDate)}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-600">
                                                    <div className="max-w-xs truncate font-medium" title={event.location}>
                                                        {event.location}
                                                    </div>
                                                </td>
                                                
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${getStatusColor(event.status)}`}>
                                                        {event.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <div className="flex gap-2">
                                                        <Link
                                                            href={`/events/${event.id}`}
                                                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded font-semibold transition"
                                                            title="View Details"
                                                        >
                                                            View
                                                        </Link>
                                                        <Link
                                                            href={`/events/${event.id}/edit`}
                                                            className="text-orange-600 hover:text-orange-800 hover:bg-orange-50 px-2 py-1 rounded font-semibold transition"
                                                            title="Edit Event"
                                                        >
                                                            Edit
                                                        </Link>
                                                        
                                                        <button
                                                            onClick={() => {
                                                                if (confirm('Apakah Anda yakin ingin menghapus event ini?')) {
                                                                    // Handle delete
                                                                    console.log('Delete event:', event.id);
                                                                }
                                                            }}
                                                            className="text-red-600 hover:text-red-800 hover:bg-red-50 px-2 py-1 rounded font-semibold transition"
                                                            title="Delete Event"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="mt-6 flex justify-between items-center">
                                <div className="text-sm text-gray-700">
                                    Menampilkan <span className="font-semibold">1</span> sampai{" "}
                                    <span className="font-semibold">7</span> dari{" "}
                                    <span className="font-semibold">7</span> event
                                </div>
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 border-2 border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 font-medium">
                                        Sebelumnya
                                    </button>
                                    <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg text-sm font-semibold shadow-md">
                                        1
                                    </button>
                                    <button className="px-4 py-2 border-2 border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 font-medium">
                                        Selanjutnya
                                    </button>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border-2 border-blue-200">
                                    <h4 className="font-bold text-blue-800 mb-2">
                                        Quick Stats
                                    </h4>
                                    <p className="text-sm text-blue-700">Event dengan peserta terbanyak: <span className="font-bold">Vaccination Day (87 peserta)</span></p>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border-2 border-green-200">
                                    <h4 className="font-bold text-green-800 mb-2">
                                        Action Needed
                                    </h4>
                                    <p className="text-sm text-green-700">Event mendekati kuota: <span className="font-bold">Pet Care Workshop (25/30)</span></p>
                                </div>
                                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border-2 border-orange-200">
                                    <h4 className="font-bold text-orange-800 mb-2">
                                        Upcoming
                                    </h4>
                                    <p className="text-sm text-orange-700">Event terdekat: <span className="font-bold">Flash Sale (20 Feb 2024)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}