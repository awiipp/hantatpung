import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import {
    FaCalendar,
    FaMapPin,
    FaRegClock,
} from "react-icons/fa";

export default function EventShow({ event }) {
    const user = usePage().props.auth?.user ?? null;

    const statusColors = {
        Active: "bg-green-100 text-green-800 border-green-200",
        Upcoming: "bg-blue-100 text-blue-800 border-blue-200",
        Ended: "bg-gray-100 text-gray-800 border-gray-200",
    };

    const categoryColors = {
        Adoption: "bg-pink-100 text-pink-800 border-pink-200",
        Workshop: "bg-purple-100 text-purple-800 border-purple-200",
        Sale: "bg-yellow-100 text-yellow-800 border-yellow-200",
        Health: "bg-green-100 text-green-800 border-green-200",
        Competition: "bg-blue-100 text-blue-800 border-blue-200",
        "Special Event": "bg-orange-100 text-orange-800 border-orange-200",
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const formatTime = (timeString) => {
        return timeString.substring(0, 5);
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
            <Head title={event.title} />

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-xl">
                        <div className="p-8 text-gray-900">
                            <Link
                                href={route("events.index")}
                                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold mb-6 transition duration-150"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                                Kembali ke Daftar Event
                            </Link>

                            <div className="mb-6">
                                <div className="flex flex-wrap gap-3 items-center mb-8">
                                    <span
                                        className={`px-4 py-1.5 inline-flex text-sm leading-5 font-bold rounded-full border ${
                                            categoryColors[
                                                event.category
                                            ] ||
                                            "bg-gray-100 text-gray-800 border-gray-200"
                                        }`}
                                    >
                                        {event.category}
                                    </span>
                                    <span
                                        className={`px-4 py-1.5 inline-flex text-sm leading-5 font-bold rounded-full border ${
                                            statusColors[event.status] ||
                                            "bg-gray-100 text-gray-800 border-gray-200"
                                        }`}
                                    >
                                        {event.status}
                                    </span>
                                    {event.status === "Upcoming" &&
                                        getDaysUntil(event.date) > 0 && (
                                            <span className="px-4 py-1.5 inline-flex text-sm leading-5 font-bold rounded-full bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 border border-orange-200">
                                                {getDaysUntil(event.date)}{" "}
                                                hari lagi
                                            </span>
                                        )}
                                </div>

                                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                                    {event.title}
                                </h1>
                            </div>

                            {/* Featured Image */}
                            <div className="mb-8 rounded-xl overflow-hidden border-4 border-orange-200 shadow-lg">
                                <img
                                    src={`/storage/${event.image}`}
                                    alt={event.title}
                                    className="w-full h-[450px] object-cover"
                                />
                            </div>

                            {/* Event Details Card */}
                            <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl border-2 border-orange-200 shadow-md">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 px-4 flex items-center gap-2">
                                    Detail Event
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-orange-100 p-4 rounded-lg">
                                                <FaCalendar className="text-2xl text-orange-400" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500 font-semibold mb-1">
                                                    Tanggal Event
                                                </p>
                                                <p className="text-base font-bold text-gray-800">
                                                    {formatDate(event.date)}
                                                    {event.end_date &&
                                                        event.end_date !==
                                                            event.date &&
                                                        ` - ${formatDate(event.end_date)}`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-pink-100 p-4 rounded-lg">
                                                <FaRegClock className="text-2xl text-pink-400" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500 font-semibold mb-1">
                                                    Waktu
                                                </p>
                                                <p className="text-base font-bold text-gray-800">
                                                    {formatTime(event.time)}{" "}
                                                    WIB
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-2">
                                        <div className="flex items-start gap-3 w-full">
                                            <div className="bg-blue-100 p-4 rounded-lg">
                                                <FaMapPin className="text-2xl text-green-400" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500 font-semibold mb-1">
                                                    Lokasi
                                                </p>
                                                <p className="text-base font-bold text-gray-800">
                                                    {event.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Event Description */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    Deskripsi Event
                                </h3>
                                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500 shadow-sm">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {event.description}
                                    </p>
                                </div>
                            </div>

                            {/* Call to Action */}
                            {event.status === "Active" && (
                                <div className="mb-8 bg-gradient-to-r from-orange-500 to-pink-500 p-6 rounded-xl shadow-xl text-white">
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                        <div>
                                            <h4 className="text-2xl font-bold mb-2">
                                                 Event Sedang Berlangsung!
                                            </h4>
                                            <p className="text-orange-100">
                                                Jangan lewatkan kesempatan
                                                mengikuti event ini.  
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {event.status === "Upcoming" && (
                                <div className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-xl shadow-xl text-white">
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                        <div>
                                            <h4 className="text-2xl font-bold mb-2">
                                                Event Akan Segera Dimulai!
                                            </h4>
                                            <p className="text-blue-100">
                                                jangan sampai terlewatkan
                                                keseruan event ini
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            {user && (
                            <div className="flex gap-4 pt-6 border-t-2 border-gray-200">
                                <Link
                                    href={route("events.edit", event.id)}
                                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 font-semibold shadow-md inline-flex items-center gap-2"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                    Edit Event
                                </Link>
                                <Link
                                    href={route("events.destroy", event.id)}
                                    method="delete"
                                    as="button"
                                    className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-150 font-semibold shadow-md inline-flex items-center gap-2"
                                    onClick={(e) => {
                                        if (
                                            !confirm(
                                                "Apakah Anda yakin ingin menghapus event ini?",
                                            )
                                        ) {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                    Hapus Event
                                </Link>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
