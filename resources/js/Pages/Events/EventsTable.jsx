import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function EventAdmin({ events }) {
    // Sample data jika tidak ada props
    const sampleEvents = events || [
        {
            id: 1,
            title: "Flash Sale Electronics",
            category: "Sale",
            date: "2024-02-15",
            endDate: "2024-02-17",
            location: "Online",
            status: "Upcoming",
            participants: 0,
            maxParticipants: 100,
            createdBy: "Admin",
            createdAt: "2024-01-28"
        },
        {
            id: 2,
            title: "Grand Opening Store Jakarta",
            category: "Store Opening",
            date: "2024-02-10",
            endDate: null,
            location: "Mall Grand Indonesia, Jakarta",
            status: "Active",
            participants: 45,
            maxParticipants: 200,
            createdBy: "Admin",
            createdAt: "2024-01-25"
        },
        {
            id: 3,
            title: "Workshop: Product Photography",
            category: "Workshop",
            date: "2024-02-20",
            endDate: null,
            location: "Hancommerce HQ, Jakarta",
            status: "Upcoming",
            participants: 23,
            maxParticipants: 50,
            createdBy: "Admin",
            createdAt: "2024-01-26"
        },
        {
            id: 4,
            title: "Midnight Sale Fashion Week",
            category: "Sale",
            date: "2024-02-12",
            endDate: "2024-02-13",
            location: "Online",
            status: "Active",
            participants: 87,
            maxParticipants: null,
            createdBy: "Admin",
            createdAt: "2024-01-27"
        },
        {
            id: 5,
            title: "Customer Appreciation Day",
            category: "Special Event",
            date: "2024-02-25",
            endDate: null,
            location: "All Stores",
            status: "Upcoming",
            participants: 12,
            maxParticipants: 500,
            createdBy: "Admin",
            createdAt: "2024-01-29"
        },
        {
            id: 6,
            title: "New Product Launch: Smart Home",
            category: "Product Launch",
            date: "2024-02-28",
            endDate: null,
            location: "Online Event",
            status: "Upcoming",
            participants: 5,
            maxParticipants: 300,
            createdBy: "Admin",
            createdAt: "2024-01-30"
        },
        {
            id: 7,
            title: "Black Friday Mega Sale",
            category: "Sale",
            date: "2024-01-20",
            endDate: "2024-01-21",
            location: "Online",
            status: "Ended",
            participants: 250,
            maxParticipants: 500,
            createdBy: "Admin",
            createdAt: "2024-01-15"
        }
    ];

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
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">
                                    Events Management
                                </h2>
                                <Link
                                    // href={route("events.create")}
                                    className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-150"
                                >
                                    + New Event
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <p className="text-sm text-gray-600 mb-1">Total Events</p>
                                    <h3 className="text-2xl font-bold text-gray-900">{totalEvents}</h3>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                    <p className="text-sm text-green-700 mb-1">Active Events</p>
                                    <h3 className="text-2xl font-bold text-green-900">{activeEvents}</h3>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <p className="text-sm text-blue-700 mb-1">Upcoming Events</p>
                                    <h3 className="text-2xl font-bold text-blue-900">{upcomingEvents}</h3>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                    <p className="text-sm text-purple-700 mb-1">Total Participants</p>
                                    <h3 className="text-2xl font-bold text-purple-900">{totalParticipants}</h3>
                                </div>
                            </div>

                            {/* Filter & Search */}
                            <div className="mb-6 flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Search events..."
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none"
                                />
                                <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none">
                                    <option>All Status</option>
                                    <option>Active</option>
                                    <option>Upcoming</option>
                                    <option>Ended</option>
                                </select>
                                <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none">
                                    <option>All Categories</option>
                                    <option>Sale</option>
                                    <option>Workshop</option>
                                    <option>Store Opening</option>
                                    <option>Special Event</option>
                                    <option>Product Launch</option>
                                </select>
                            </div>

                            {/* Events Table */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Event
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Category
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Location
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Participants
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {sampleEvents.map((event) => (
                                            <tr key={event.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {event.title}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            Created: {formatDate(event.createdAt)}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                                        {event.category}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    <div>
                                                        {formatDate(event.date)}
                                                        {event.endDate && (
                                                            <div className="text-xs text-gray-500">
                                                                to {formatDate(event.endDate)}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-600">
                                                    <div className="max-w-xs truncate" title={event.location}>
                                                        {event.location}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm">
                                                        <div className="font-medium text-gray-900">
                                                            {event.participants}
                                                            {event.maxParticipants && ` / ${event.maxParticipants}`}
                                                        </div>
                                                        {event.maxParticipants && (
                                                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                                                <div
                                                                    className="bg-blue-600 h-2 rounded-full"
                                                                    style={{
                                                                        width: `${getParticipantPercentage(event.participants, event.maxParticipants)}%`
                                                                    }}
                                                                ></div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(event.status)}`}>
                                                        {event.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <div className="flex gap-2">
                                                        <Link
                                                            href={`/events/${event.id}`}
                                                            className="text-indigo-600 hover:text-indigo-900"
                                                        >
                                                            View
                                                        </Link>
                                                        <Link
                                                            href={`/events/${event.id}/edit`}
                                                            className="text-blue-600 hover:text-blue-900"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            className="text-green-600 hover:text-green-900"
                                                        >
                                                            Clone
                                                        </button>
                                                        <button
                                                            className="text-red-600 hover:text-red-900"
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
                                    Showing <span className="font-medium">1</span> to{" "}
                                    <span className="font-medium">7</span> of{" "}
                                    <span className="font-medium">7</span> results
                                </div>
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">
                                        Previous
                                    </button>
                                    <button className="px-3 py-1 bg-gray-800 text-white rounded-md text-sm">
                                        1
                                    </button>
                                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}