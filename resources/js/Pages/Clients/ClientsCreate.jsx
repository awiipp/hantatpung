import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function ClientCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        company: '',
        role: '',
        rating: '5',
        review: '',
        image: null,
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('image', file);
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('clients.store'), {
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Tambah Client" />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-3">Tambah Client Baru</h1>
                <p className="text-xl">Tambahkan testimoni client untuk website</p>
            </div>

            <div className="py-12 bg-gradient-to-b from-orange-50 to-white min-h-screen">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-8">
                            {/* Form Header */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    Informasi Client
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Isi detail client dan testimoni mereka
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Image Upload with Preview */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Foto Client
                                    </label>
                                    <div className="flex items-center gap-6">
                                        {/* Preview */}
                                        <div className="flex-shrink-0">
                                            {imagePreview ? (
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="w-32 h-32 rounded-full object-cover border-4 border-orange-200 shadow-md"
                                                />
                                            ) : (
                                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 border-4 border-orange-200 flex items-center justify-center">
                                                    <svg className="w-16 h-16 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>

                                        {/* Upload Button */}
                                        <div className="flex-1">
                                            <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center hover:border-orange-400 transition">
                                                <input
                                                    type="file"
                                                    id="image"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="hidden"
                                                />
                                                <label htmlFor="image" className="cursor-pointer">
                                                    <div className="flex flex-col items-center">
                                                        <svg className="w-12 h-12 text-orange-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                        </svg>
                                                        <p className="text-sm text-gray-600 mb-1">
                                                            <span className="text-orange-600 font-semibold">Klik untuk upload</span> atau drag and drop
                                                        </p>
                                                        <p className="text-xs text-gray-500">PNG, JPG, WEBP maksimal 5MB</p>
                                                    </div>
                                                </label>
                                                {data.image && (
                                                    <p className="mt-3 text-sm text-green-600 font-medium">
                                                        Terpilih: {data.image.name}
                                                    </p>
                                                )}
                                            </div>
                                            {errors.image && (
                                                <p className="mt-1 text-sm text-red-600">{errors.image}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Name and Company */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                                            Nama Client *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                            placeholder="e.g., Budi Santoso"
                                            required
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                                            Perusahaan *
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            value={data.company}
                                            onChange={(e) => setData('company', e.target.value)}
                                            className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                            placeholder="e.g., Pet Lovers Indonesia"
                                            required
                                        />
                                        {errors.company && (
                                            <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Role and Rating */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="role" className="block text-sm font-bold text-gray-700 mb-2">
                                            Jabatan *
                                        </label>
                                        <input
                                            type="text"
                                            id="role"
                                            value={data.role}
                                            onChange={(e) => setData('role', e.target.value)}
                                            className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                            placeholder="e.g., Pet Owner, CEO"
                                            required
                                        />
                                        {errors.role && (
                                            <p className="mt-1 text-sm text-red-600">{errors.role}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="rating" className="block text-sm font-bold text-gray-700 mb-2">
                                            Rating *
                                        </label>
                                        <select
                                            id="rating"
                                            value={data.rating}
                                            onChange={(e) => setData('rating', e.target.value)}
                                            className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                            required
                                        >
                                            <option value="5">⭐⭐⭐⭐⭐ (5 Bintang)</option>
                                            <option value="4">⭐⭐⭐⭐ (4 Bintang)</option>
                                            <option value="3">⭐⭐⭐ (3 Bintang)</option>
                                            <option value="2">⭐⭐ (2 Bintang)</option>
                                            <option value="1">⭐ (1 Bintang)</option>
                                        </select>
                                        {errors.rating && (
                                            <p className="mt-1 text-sm text-red-600">{errors.rating}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Review */}
                                <div>
                                    <label htmlFor="review" className="block text-sm font-bold text-gray-700 mb-2">
                                        Testimoni/Review *
                                    </label>
                                    <textarea
                                        id="review"
                                        rows="6"
                                        value={data.review}
                                        onChange={(e) => setData('review', e.target.value)}
                                        className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                        placeholder="Tulis testimoni client di sini... Ceritakan pengalaman mereka menggunakan produk/layanan PawsCommerce"
                                        required
                                    ></textarea>
                                    {errors.review && (
                                        <p className="mt-1 text-sm text-red-600">{errors.review}</p>
                                    )}
                                    <p className="mt-1 text-xs text-gray-500">
                                        Panjang karakter: {data.review.length}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200">
                                    <Link
                                        href={route('clients.index')}
                                        className="px-6 py-2.5 border-2 border-orange-300 text-orange-700 rounded-lg font-semibold hover:bg-orange-50 transition"
                                    >
                                        Batal
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg font-semibold transition shadow-md hover:shadow-lg disabled:opacity-50"
                                    >
                                        {processing ? 'Menyimpan...' : 'Simpan Client'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Help Section */}
                    <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Panduan Menambah Client</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Upload foto client dengan kualitas baik dan latar belakang profesional
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Gunakan nama lengkap dan jabatan yang sesuai
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Tulis testimoni yang autentik dan detail tentang pengalaman client
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Pilih rating yang sesuai dengan kepuasan client
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}