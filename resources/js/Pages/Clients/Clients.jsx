 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ClientsUser({clients}) {
    // const testimonials = [
    //     { 
    //         id: 1, 
    //         name: 'Dr. Budi Santoso',
    //         business: 'Pet Paradise Veterinary',
    //         category: 'Veterinary Clinic',
    //         since: '2020',
    //         rating: 5,
    //         testimonial: 'Bekerja sama dengan PawsCommerce sangat membantu bisnis kami! Produk berkualitas tinggi dan support team yang luar biasa responsif. Pelanggan kami sangat puas dengan produk-produk yang kami rekomendasikan dari PawsCommerce.',
    //         avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=f97316&color=fff'
    //     },
    //     { 
    //         id: 2, 
    //         name: 'Siti Nurhaliza',
    //         business: 'Golden Paws Grooming',
    //         category: 'Pet Grooming',
    //         since: '2019',
    //         rating: 5,
    //         testimonial: 'Partnership dengan PawsCommerce membuka peluang baru untuk bisnis kami. Sistem yang profesional dan mudah digunakan. Produk grooming yang tersedia sangat lengkap dan berkualitas. Highly recommended!',
    //         avatar: 'https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=ec4899&color=fff'
    //     },
    //     { 
    //         id: 3, 
    //         name: 'Ahmad Rizki',
    //         business: 'Pawfect Training Academy',
    //         category: 'Pet Training',
    //         since: '2021',
    //         rating: 5,
    //         testimonial: 'Sebagai akademi pelatihan anjing, kami membutuhkan produk-produk berkualitas untuk menunjang program training kami. PawsCommerce selalu menyediakan produk terbaik dengan harga kompetitif. Tim mereka juga sangat membantu dalam memberikan rekomendasi produk.',
    //         avatar: 'https://ui-avatars.com/api/?name=Ahmad+Rizki&background=3b82f6&color=fff'
    //     },
    //     { 
    //         id: 4, 
    //         name: 'Linda Wijaya',
    //         business: 'Happy Tails Pet Hotel',
    //         category: 'Pet Boarding',
    //         since: '2022',
    //         rating: 5,
    //         testimonial: 'Kerjasama dengan PawsCommerce membuat operasional hotel hewan kami menjadi lebih efisien. Pengiriman selalu tepat waktu dan produk selalu fresh. Customer service mereka sangat membantu dalam menangani setiap pertanyaan kami.',
    //         avatar: 'https://ui-avatars.com/api/?name=Linda+Wijaya&background=10b981&color=fff'
    //     },
    //     { 
    //         id: 5, 
    //         name: 'Dedi Kurniawan',
    //         business: 'Meow Meow Cat Cafe',
    //         category: 'Cat Cafe',
    //         since: '2020',
    //         rating: 5,
    //         testimonial: 'Sebagai cat cafe dengan berbagai ras kucing premium, kami sangat selective dalam memilih produk. PawsCommerce menyediakan makanan dan perlengkapan kucing berkualitas tinggi yang aman untuk kucing-kucing kami. Partnership ini sangat berharga!',
    //         avatar: 'https://ui-avatars.com/api/?name=Dedi+Kurniawan&background=8b5cf6&color=fff'
    //     },
    //     { 
    //         id: 6, 
    //         name: 'Rini Susanti',
    //         business: 'Aqua World Fish Store',
    //         category: 'Aquatic Store',
    //         since: '2018',
    //         rating: 5,
    //         testimonial: 'Sudah 6 tahun bermitra dengan PawsCommerce dan sangat puas! Mereka menyediakan produk aquatic terlengkap dengan kualitas terjamin. Sistem ordering yang mudah dan delivery yang cepat sangat membantu bisnis kami.',
    //         avatar: 'https://ui-avatars.com/api/?name=Rini+Susanti&background=06b6d4&color=fff'
    //     },
    //     { 
    //         id: 7, 
    //         name: 'Eko Prasetyo',
    //         business: 'Feathered Friends Aviary',
    //         category: 'Bird Breeder',
    //         since: '2021',
    //         rating: 5,
    //         testimonial: 'Penangkaran burung kami memerlukan produk-produk spesifik untuk burung eksotis. PawsCommerce tidak hanya menyediakan produk yang kami butuhkan, tapi juga memberikan konsultasi tentang produk terbaik untuk setiap jenis burung.',
    //         avatar: 'https://ui-avatars.com/api/?name=Eko+Prasetyo&background=f59e0b&color=fff'
    //     },
    //     { 
    //         id: 8, 
    //         name: 'Maria Angelina',
    //         business: 'Pet Insurance Plus',
    //         category: 'Pet Insurance',
    //         since: '2023',
    //         rating: 5,
    //         testimonial: 'Baru bergabung tahun ini tapi sudah sangat terkesan dengan profesionalisme PawsCommerce. Mereka membantu kami memahami kebutuhan pet owners dan menyediakan produk-produk yang sesuai dengan standar kesehatan hewan.',
    //         avatar: 'https://ui-avatars.com/api/?name=Maria+Angelina&background=ef4444&color=fff'
    //     },
    // ];

    const getPartnershipColor = (partnership) => {
        switch(partnership) {
            case 'Premium Partner':
                return 'from-purple-500 to-pink-500';
            case 'Gold Partner':
                return 'from-yellow-400 to-orange-400';
            case 'Silver Partner':
                return 'from-gray-400 to-gray-500';
            default:
                return 'from-blue-500 to-blue-600';
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
                            Dengarkan pengalaman partner bisnis yang telah bergabung dan berkembang bersama PawsCommerce
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        <div className="bg-white rounded-xl shadow-md p-6 text-center border-2 border-orange-100 hover:shadow-lg transition">
                            <div className="text-4xl font-bold text-orange-600 mb-2">150+</div>
                            <p className="text-gray-600 font-medium">Total Partners</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center border-2 border-purple-100 hover:shadow-lg transition">
                            <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                            <p className="text-gray-600 font-medium">Satisfaction Rate</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center border-2 border-green-100 hover:shadow-lg transition">
                            <div className="text-4xl font-bold text-green-600 mb-2">5+ Years</div>
                            <p className="text-gray-600 font-medium">Average Partnership</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center border-2 border-blue-100 hover:shadow-lg transition">
                            <div className="text-4xl font-bold text-blue-600 mb-2">9 Cities</div>
                            <p className="text-gray-600 font-medium">Nationwide Coverage</p>
                        </div>
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
                                        {[...Array(client.rating)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className="w-5 h-5 text-yellow-400 fill-current"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
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
                                                <p className="font-bold text-gray-900">{client.name}</p>
                                                <p className="text-sm text-gray-600 font-medium">{client.company}</p>
                                                <p className="text-xs text-gray-500">{client.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                  
                </div>
            </div>
        </AuthenticatedLayout>
    );
}