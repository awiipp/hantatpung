import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function EventAdmin({ events }) {
    const getStatusColor = (status) => {
        switch (status) {
            case "Active":
                return "bg-green-100 text-green-800 border-2 border-green-300";
            case "Upcoming":
                return "bg-blue-100 text-blue-800 border-2 border-blue-300";
            case "Ended":
                return "bg-gray-100 text-gray-800 border-2 border-gray-300";
            default:
                return "bg-gray-100 text-gray-800 border-2 border-gray-300";
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    const totalEvents = events.length;
    const activeEvents = events.filter((e) => e.status === "Active").length;
    const upcomingEvents = events.filter((e) => e.status === "Upcoming").length;

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
                                    <p className="text-sm text-gray-600 mt-1">
                                        Manage event dan kegiatan PawsCommerce
                                    </p>
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
                                            <p className="text-sm text-orange-700 font-semibold mb-1">
                                                Total Event
                                            </p>
                                            <h3 className="text-3xl font-bold text-orange-900">
                                                {totalEvents}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border-2 border-green-200 hover:shadow-lg transition">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-green-700 font-semibold mb-1">
                                                Event Aktif
                                            </p>
                                            <h3 className="text-3xl font-bold text-green-900">
                                                {activeEvents}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-200 hover:shadow-lg transition">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-blue-700 font-semibold mb-1">
                                                Mendatang
                                            </p>
                                            <h3 className="text-3xl font-bold text-blue-900">
                                                {upcomingEvents}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto rounded-lg border-2 border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gradient-to-r from-orange-50 to-pink-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                Event
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                Kategori
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                Tanggal
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                Lokasi
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {events.map((event) => (
                                            <tr
                                                key={event.id}
                                                className="hover:bg-orange-50 transition"
                                            >
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={`/storage/${event.image}`}
                                                            alt={event.name}
                                                            className="w-20 h-14 object-cover border-orange-200 border-2 rounded-lg"
                                                        />
                                                        <div className="text-sm font-bold text-gray-900">
                                                            {event.title}
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
                                                                s/d{" "}
                                                                {formatDate(
                                                                    event.endDate,
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-600">
                                                    <div
                                                        className="max-w-xs truncate font-medium"
                                                        title={event.location}
                                                    >
                                                        {event.location}
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${getStatusColor(event.status)}`}
                                                    >
                                                        {event.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <div className="flex gap-2">
                                                        <Link
                                                            href={route('events.show', event.id)}
                                                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded font-semibold transition"
                                                            title="View Details"
                                                        >
                                                            View
                                                        </Link>
                                                        <Link
                                                            href={route('events.edit', event.id)}
                                                            className="text-orange-600 hover:text-orange-800 hover:bg-orange-50 px-2 py-1 rounded font-semibold transition"
                                                            title="Edit Event"
                                                        >
                                                            Edit
                                                        </Link>

                                                        <button
                                                            onClick={() => {
                                                                if (
                                                                    confirm(
                                                                        "Apakah Anda yakin ingin menghapus event ini?",
                                                                    )
                                                                ) {
                                                                    // Handle delete
                                                                    router.delete(route('events.destroy', event.id))
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
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
