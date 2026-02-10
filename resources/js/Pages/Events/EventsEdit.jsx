import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function EventCreate({ event }) {
    const { data, setData, post, processing, errors } = useForm({
        title: event.title,
        description: event.description,
        date: event.date,
        end_date: event.end_date,
        time: event.time,
        location: event.location,
        category: event.category,
        image: null,
        status: event.status,
        _method: "PUT",
    });

    const categories = [
        "Adoption",
        "Workshop",
        "Sale",
        "Health",
        "Competition",
        "Special Event",
    ];

    const statuses = ["Active", "Upcoming", "Ended"];

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("events.update", event.id));
    };

    const handleImageChange = (e) => {
        setData("image", e.target.files[0]);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Event" />

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-xl">
                        <div className="p-8">
                            {/* Header */}
                            <div className="mb-8">
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

                                <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                    Edit Event
                                </h2>
                                <p className="text-sm text-gray-600 mt-2">
                                    Lengkapi form di bawah untuk mengedit event
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Judul Event{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                        placeholder="Contoh: Workshop Grooming Anjing untuk Pemula"
                                        required
                                    />
                                    {errors.title && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.title}
                                        </p>
                                    )}
                                </div>

                                {/* Category & Status */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Category */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Kategori{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            value={data.category}
                                            onChange={(e) =>
                                                setData(
                                                    "category",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            required
                                        >
                                            <option value="">
                                                Pilih Kategori
                                            </option>
                                            {categories.map((category) => (
                                                <option
                                                    key={category}
                                                    value={category}
                                                >
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.category}
                                            </p>
                                        )}
                                    </div>

                                    {/* Status */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Status{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            value={data.status}
                                            onChange={(e) =>
                                                setData(
                                                    "status",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            required
                                        >
                                            {statuses.map((status) => (
                                                <option
                                                    key={status}
                                                    value={status}
                                                >
                                                    {status}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.status && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.status}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Deskripsi Event{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value,
                                            )
                                        }
                                        rows="5"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                        placeholder="Jelaskan detail event, benefit yang didapat peserta, dan informasi penting lainnya..."
                                        required
                                    />
                                    {errors.description && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>

                                {/* Date & End Date */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Start Date */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Tanggal Mulai{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="date"
                                            value={data.date}
                                            onChange={(e) =>
                                                setData("date", e.target.value)
                                            }
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            required
                                        />
                                        {errors.date && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.date}
                                            </p>
                                        )}
                                    </div>

                                    {/* End Date */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Tanggal Selesai{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="date"
                                            value={data.end_date}
                                            onChange={(e) =>
                                                setData(
                                                    "end_date",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            required
                                        />
                                        {errors.end_date && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.end_date}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Time & Location */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Time */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Waktu{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="time"
                                            value={data.time}
                                            onChange={(e) =>
                                                setData("time", e.target.value)
                                            }
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            required
                                        />
                                        {errors.time && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.time}
                                            </p>
                                        )}
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Lokasi{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            value={data.location}
                                            onChange={(e) =>
                                                setData(
                                                    "location",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            placeholder="Contoh: Pet Shop Central Park, Jakarta"
                                            required
                                        />
                                        {errors.location && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.location}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Image Upload */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Banner Event{" "}
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition">
                                        <input
                                            type="file"
                                            onChange={handleImageChange}
                                            accept="image/*"
                                            className="hidden"
                                            id="image-upload"
                                        />
                                        <label
                                            htmlFor="image-upload"
                                            className="cursor-pointer"
                                        >
                                            <div className="space-y-2">
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="text-sm text-gray-600">
                                                    <span className="font-semibold text-orange-600 hover:text-orange-800">
                                                        Upload gambar
                                                    </span>{" "}
                                                    atau drag and drop
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    PNG, JPG, JPEG up to 2MB
                                                </p>
                                                {data.image && (
                                                    <p className="text-sm font-semibold text-green-600 mt-2">
                                                        ✓ {data.image.name}
                                                    </p>
                                                )}
                                            </div>
                                        </label>
                                    </div>
                                    {errors.image && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.image}
                                        </p>
                                    )}
                                </div>

                                {/* Info Box */}
                                <div className="bg-gradient-to-r from-orange-50 to-pink-50 border-l-4 border-orange-500 p-4 rounded-lg">
                                    <div className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div className="text-sm text-gray-700">
                                            <p className="font-bold mb-1">
                                                Tips membuat event yang menarik:
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 text-xs">
                                                <li>
                                                    Gunakan judul yang jelas dan
                                                    menarik perhatian
                                                </li>
                                                <li>
                                                    Upload banner berkualitas
                                                    tinggi dengan resolusi
                                                    minimal 1200x630px
                                                </li>
                                                <li>
                                                    Jelaskan benefit yang akan
                                                    didapat peserta
                                                </li>
                                                <li>
                                                    Cantumkan informasi kontak
                                                    atau cara pendaftaran di
                                                    deskripsi
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-6 border-t-2 border-gray-200">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition duration-150 font-bold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processing ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg
                                                    className="animate-spin h-5 w-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="none"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Processing...
                                            </span>
                                        ) : (
                                            "Edit Event"
                                        )}
                                    </button>
                                    <Link
                                        href={route("events.index")}
                                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-150 font-bold"
                                    >
                                        Batal
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
