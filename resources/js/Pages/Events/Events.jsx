import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function EventUser() {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const events = [
        {
            id: 1,
            title: "Flash Sale Electronics",
            description: "Dapatkan diskon hingga 70% untuk semua produk elektronik. Promo terbatas hanya untuk 100 pembeli pertama!",
            date: "2024-02-15",
            endDate: "2024-02-17",
            time: "00:00 - 23:59",
            location: "Online",
            category: "Sale",
            image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600",
            status: "Upcoming",
            discount: "Up to 70%"
        },
        {
            id: 2,
            title: "Grand Opening Store Jakarta",
            description: "Bergabunglah dengan kami di pembukaan toko baru Hancommerce di Jakarta. Ada banyak hadiah dan promo menarik!",
            date: "2024-02-10",
            time: "10:00 - 20:00",
            location: "Mall Grand Indonesia, Jakarta",
            category: "Store Opening",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
            status: "Active",
            discount: null
        },
        {
            id: 3,
            title: "Workshop: Product Photography",
            description: "Belajar teknik fotografi produk dari para ahli. Gratis untuk 50 peserta pertama yang mendaftar!",
            date: "2024-02-20",
            time: "14:00 - 17:00",
            location: "Hancommerce HQ, Jakarta",
            category: "Workshop",
            image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600",
            status: "Upcoming",
            discount: "Free Entry"
        },
        {
            id: 4,
            title: "Midnight Sale Fashion Week",
            description: "Sale spesial tengah malam untuk semua koleksi fashion. Diskon tambahan untuk member setia!",
            date: "2024-02-12",
            endDate: "2024-02-13",
            time: "00:00 - 06:00",
            location: "Online",
            category: "Sale",
            image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600",
            status: "Active",
            discount: "50% OFF"
        },
        {
            id: 5,
            title: "Customer Appreciation Day",
            description: "Terima kasih untuk pelanggan setia kami. Dapatkan voucher belanja dan hadiah menarik lainnya!",
            date: "2024-02-25",
            time: "09:00 - 21:00",
            location: "All Stores",
            category: "Special Event",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
            status: "Upcoming",
            discount: "Voucher 500K"
        },
        {
            id: 6,
            title: "New Product Launch: Smart Home",
            description: "Peluncuran rangkaian produk smart home terbaru. Jadilah yang pertama mencoba teknologi masa depan!",
            date: "2024-02-28",
            time: "19:00 - 21:00",
            location: "Online Event",
            category: "Product Launch",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600",
            status: "Upcoming",
            discount: "Early Bird 30%"
        }
    ];

    const filters = ['All', 'Sale', 'Workshop', 'Store Opening', 'Special Event', 'Product Launch'];

    const getStatusColor = (status) => {
        switch(status) {
            case 'Active':
                return 'bg-green-100 text-green-800';
            case 'Upcoming':
                return 'bg-blue-100 text-blue-800';
            case 'Ended':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
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

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Upcoming Events
                        </h2>
                        <p className="text-gray-600">
                            Don't miss out on our exciting events and promotions
                        </p>
                    </div>

                    {/* Filter */}
                    <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-4 py-2 rounded-md text-sm whitespace-nowrap transition ${
                                    selectedFilter === filter
                                        ? 'bg-gray-800 text-white'
                                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
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
                                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition duration-300 group"
                            >
                                {/* Image */}
                                <div className="relative h-48 bg-gray-200 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                    />
                                    
                                    {/* Status Badge */}
                                    <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
                                        {event.status}
                                    </span>

                                    {/* Discount Badge */}
                                    {event.discount && (
                                        <span className="absolute top-3 right-3 px-3 py-1 text-xs font-bold bg-red-500 text-white rounded-full">
                                            {event.discount}
                                        </span>
                                    )}

                                    {/* Days Until */}
                                    {event.status === 'Upcoming' && getDaysUntil(event.date) > 0 && (
                                        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                            <span className="text-xs font-semibold text-gray-800">
                                                {getDaysUntil(event.date)} days to go
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    {/* Category */}
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                                        {event.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                        {event.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                        {event.description}
                                    </p>

                                    {/* Event Details */}
                                    <div className="space-y-2 mb-4">
                                        {/* Date */}
                                        <div className="flex items-start gap-2">
                                            <svg
                                                className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0"
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
                                            <span className="text-xs text-gray-600">
                                                {formatDate(event.date)}
                                                {event.endDate && ` - ${formatDate(event.endDate)}`}
                                            </span>
                                        </div>

                                        {/* Time */}
                                        <div className="flex items-start gap-2">
                                            <svg
                                                className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0"
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
                                            <span className="text-xs text-gray-600">
                                                {event.time}
                                            </span>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-start gap-2">
                                            <svg
                                                className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0"
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
                                            <span className="text-xs text-gray-600">
                                                {event.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <Link
                                        href={`/events/${event.id}`}
                                        className="block w-full bg-gray-800 text-white text-center py-2 rounded-md hover:bg-gray-700 transition duration-150 font-medium"
                                    >
                                        {event.status === 'Active' ? 'Join Now' : 'Learn More'}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Section */}
                    <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 text-white">
                        <div className="max-w-2xl mx-auto text-center">
                            <h3 className="text-2xl font-bold mb-2">
                                Never Miss an Event
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Subscribe to our newsletter and be the first to know about upcoming events and exclusive promotions
                            </p>
                            <div className="flex gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                                />
                                <button className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-100 transition duration-150">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}