import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function ClientsUser({ clients }) {
    const getPartnershipColor = (partnership) => {
        switch (partnership) {
            case "Premium Partner":
                return "from-purple-500 to-pink-500";
            case "Gold Partner":
                return "from-yellow-400 to-orange-400";
            case "Silver Partner":
                return "from-gray-400 to-gray-500";
            default:
                return "from-blue-500 to-blue-600";
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Partner Testimonials" />

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-3">
                            Testimoni Partner Kami
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Dengarkan pengalaman partner bisnis yang telah
                            bergabung dan berkembang bersama PawsCommerce
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {clients.map((client) => (
                            <div
                                key={client.id}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border-2 border-gray-100"
                            >
                                <div className="p-6">
                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(client.rating)].map(
                                            (_, index) => (
                                                <svg
                                                    key={index}
                                                    className="w-5 h-5 text-yellow-400 fill-current"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ),
                                        )}
                                    </div>

                                    {/* client Text */}
                                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                                        "{client.review}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={`/storage/${client.image}`}
                                                alt={client.name}
                                                className="w-14 h-14 rounded-full border-2 border-orange-200"
                                            />
                                            <div>
                                                <p className="font-bold text-gray-900">
                                                    {client.name}
                                                </p>
                                                <p className="text-sm text-gray-600 font-medium">
                                                    {client.company}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {client.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-8 text-white shadow-xl w-full">
                        <div className="max-w-2xl mx-auto text-center">
                            <h3 className="text-3xl font-bold mb-5">
                                Tuliskan Review Kamu untuk Kami!
                            </h3>
                            <Link
                                href={route("clients.create")}
                                className="px-6 py-10 bg-white text-orange-600 w-3/4 rounded-2xl hover:bg-orange-50 transition duration-150 shadow-lg text-2xl font-bold inline-block"
                            >
                                Tambahkan Review...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}