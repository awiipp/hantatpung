import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLocationArrow,
    FaTelegram,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
    return (
        <AuthenticatedLayout>
            <Head title="Contact Us" />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-3"> Hubungi Kami</h1>
                <p className="text-xl">
                    Kami siap membantu Anda dan hewan kesayangan!
                </p>
            </div>

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Quick Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                            <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                                <FaInstagram className="text-3xl text-orange-500" />
                            </div>
                            <h4 className="font-bold text-gray-800 mb-1">
                                Instagram
                            </h4>
                            <p className="text-sm text-orange-600 font-semibold">
                                @pawscommerce
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                            <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                                <FaEnvelope className="text-3xl text-pink-500" />
                            </div>
                            <h4 className="font-bold text-gray-800 mb-1">
                                Email
                            </h4>
                            <p className="text-sm text-pink-600 font-semibold">
                                info@pawscommerce.id
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                            <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                                <FaWhatsapp className="text-3xl text-green-500" />
                            </div>
                            <h4 className="font-bold text-gray-800 mb-1">
                                WhatsApp
                            </h4>
                            <p className="text-sm text-green-600 font-semibold">
                                Chat Langsung
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                            <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                                <FaLocationArrow className="text-3xl text-blue-500" />
                            </div>
                            <h4 className="font-bold text-gray-800 mb-1">
                                Lokasi
                            </h4>
                            <p className="text-sm text-blue-600 font-semibold">
                                Jakarta, Indonesia
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-xl sm:rounded-2xl">
                        <div className="p-8 text-gray-900">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Contact Information */}
                                <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-xl">
                                    <h3 className="text-2xl font-bold mb-6 text-orange-600 flex items-center gap-2">
                                        <span></span> Informasi Kontak
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-orange-100 p-2 rounded-lg"></div>
                                                <div>
                                                    <p className="font-bold text-gray-800 mb-1">
                                                        Alamat
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Jl. Pet Care Avenue No.
                                                        123
                                                        <br />
                                                        Jakarta Selatan,
                                                        Indonesia 12345
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-pink-100 p-2 rounded-lg"></div>
                                                <div>
                                                    <p className="font-bold text-gray-800 mb-1">
                                                        Telepon
                                                    </p>
                                                    <p className="text-gray-600">
                                                        +62 812-PAWS-CARE
                                                        (7297-2273)
                                                        <br />
                                                        +62 21 1234 5678
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-blue-100 p-2 rounded-lg"></div>
                                                <div>
                                                    <p className="font-bold text-gray-800 mb-1">
                                                        Email
                                                    </p>
                                                    <p className="text-gray-600">
                                                        info@pawscommerce.id
                                                        <br />
                                                        support@pawscommerce.id
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-green-100 p-2 rounded-lg"></div>
                                                <div>
                                                    <p className="font-bold text-gray-800 mb-1">
                                                        Jam Operasional
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Senin - Jumat: 09:00 -
                                                        18:00 WIB
                                                        <br />
                                                        Sabtu: 09:00 - 15:00 WIB
                                                        <br />
                                                        Minggu: 10:00 - 14:00
                                                        WIB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-purple-100 p-2 rounded-lg"></div>
                                                <div>
                                                    <p className="font-bold text-gray-800 mb-1">
                                                        Konsultasi Dokter Hewan
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Tersedia 24/7 via Chat
                                                        <br />
                                                        <span className="text-orange-600 font-semibold">
                                                            GRATIS untuk member!
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Media */}
                                    <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                                        <p className="font-bold text-gray-800 mb-3">
                                            Follow Us{" "}
                                        </p>
                                        <div className="flex gap-3">
                                            <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
                                                <FaFacebook className="text-2xl" />
                                            </button>
                                            <button className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition">
                                                <FaInstagram className="text-2xl" />
                                            </button>
                                            <button className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition">
                                                <FaTwitter className="text-2xl" />
                                            </button>
                                            <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
                                                <FaWhatsapp className="text-2xl" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-6 text-pink-600 flex items-center gap-2">
                                        <span></span> Kirim Pesan
                                    </h3>

                                    <form className="space-y-4">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-bold text-gray-700 mb-2"
                                            >
                                                Nama Lengkap *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Masukkan nama Anda"
                                                className="w-full rounded-lg border-2 border-orange-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 px-4 py-2"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-bold text-gray-700 mb-2"
                                            >
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="email@example.com"
                                                className="w-full rounded-lg border-2 border-orange-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 px-4 py-2"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-bold text-gray-700 mb-2"
                                            >
                                                Nomor Telepon
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="+62 812-xxxx-xxxx"
                                                className="w-full rounded-lg border-2 border-orange-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 px-4 py-2"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className="block text-sm font-bold text-gray-700 mb-2"
                                            >
                                                Subjek *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                className="w-full rounded-lg border-2 border-orange-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 px-4 py-2"
                                                required
                                            >
                                                <option value="">
                                                    Pilih subjek...
                                                </option>
                                                <option value="product">
                                                    Pertanyaan Produk
                                                </option>
                                                <option value="order">
                                                    Status Pesanan
                                                </option>
                                                <option value="consultation">
                                                    Konsultasi Hewan
                                                </option>
                                                <option value="complaint">
                                                    Keluhan
                                                </option>
                                                <option value="partnership">
                                                    Kerjasama
                                                </option>
                                                <option value="other">
                                                    Lainnya
                                                </option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-bold text-gray-700 mb-2"
                                            >
                                                Pesan *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5"
                                                placeholder="Tulis pesan Anda di sini..."
                                                className="w-full rounded-lg border-2 border-orange-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 px-4 py-2"
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 font-bold shadow-lg flex items-center justify-center gap-2"
                                        >
                                            <span>Kirim Pesan</span>
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                />
                                            </svg>
                                        </button>
                                    </form>

                                    {/* Additional Info */}
                                    <div className="mt-6 bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border-2 border-blue-200">
                                        <p className="text-sm text-gray-700 flex items-start gap-2">
                                            <span>
                                                <strong>Catatan:</strong> Tim
                                                kami akan merespons pesan Anda
                                                dalam waktu maksimal 1x24 jam
                                                pada hari kerja. Untuk
                                                pertanyaan mendesak, hubungi
                                                kami via WhatsApp.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                            Pertanyaan yang Sering Diajukan
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h4 className="font-bold text-orange-600 mb-2">
                                    Bagaimana cara memesan produk?
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Pilih produk, tambahkan ke keranjang, lalu
                                    checkout. Kami menerima berbagai metode
                                    pembayaran.
                                </p>
                            </div>
                            <div className="bg-pink-50 p-4 rounded-lg">
                                <h4 className="font-bold text-pink-600 mb-2">
                                    Berapa lama pengiriman?
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Pengiriman 1-3 hari untuk area Jakarta, 3-5
                                    hari untuk luar Jakarta.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-600 mb-2">
                                    Apakah bisa konsultasi dokter hewan gratis?
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Ya! Member PawsCommerce dapat konsultasi
                                    gratis 24/7 via chat dengan dokter hewan
                                    kami.
                                </p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-bold text-green-600 mb-2">
                                    Bagaimana kebijakan retur?
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Produk dapat diretur dalam 7 hari dengan
                                    kondisi tertentu. Hubungi customer service
                                    untuk detail.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
