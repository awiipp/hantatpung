import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Contact() {
    return (
        <AuthenticatedLayout>
            <Head title="Contact Us" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="text-2xl font-bold mb-6">
                                Contact Us
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Contact Information */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">
                                        Get In Touch
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <p className="font-medium text-gray-700">
                                                Address
                                            </p>
                                            <p className="text-gray-600">
                                                Jl. Contoh No. 123
                                                <br />
                                                Jakarta, Indonesia 12345
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-700">
                                                Phone
                                            </p>
                                            <p className="text-gray-600">
                                                +62 21 1234 5678
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-700">
                                                Email
                                            </p>
                                            <p className="text-gray-600">
                                                info@hancommerce.com
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-700">
                                                Business Hours
                                            </p>
                                            <p className="text-gray-600">
                                                Monday - Friday: 9:00 AM - 5:00 PM
                                                <br />
                                                Saturday: 9:00 AM - 1:00 PM
                                                <br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">
                                        Send Message
                                    </h3>

                                    <form className="space-y-4">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="4"
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-150"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}