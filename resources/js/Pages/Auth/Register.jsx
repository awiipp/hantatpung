 import InputError from '@/Components/InputError';
 import InputLabel from '@/Components/InputLabel';
 import PrimaryButton from '@/Components/PrimaryButton';
 import TextInput from '@/Components/TextInput';
 import GuestLayout from '@/Layouts/GuestLayout';
 import { Head, Link, useForm } from '@inertiajs/react';
 
 export default function Register() {
     const { data, setData, post, processing, errors, reset } = useForm({
         name: '',
         email: '',
         password: '',
         password_confirmation: '',
     });
 
     const submit = (e) => {
         e.preventDefault();
 
         post(route('register'), {
             onFinish: () => reset('password', 'password_confirmation'),
         });
     };
 
     return (
         <GuestLayout>
             <Head title="Register - Pet Shop" />
 
             <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
                 <div className="max-w-md w-full">
                     {/* Logo & Header */}
                     <div className="text-center mb-8">
                         <div className="flex justify-center mb-4">
                             <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg">
                                 <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                 </svg>
                             </div>
                         </div>
                         <h2 className="text-3xl font-bold text-gray-900 mb-2">
                             Create Account
                         </h2>
                         <p className="text-gray-600">
                             Join our pet shop family today
                         </p>
                     </div>
 
                     {/* Register Form Card */}
                     <div className="bg-white rounded-2xl shadow-xl border-2 border-orange-100 p-8">
                         <form onSubmit={submit} className="space-y-5">
                             {/* Name Field */}
                             <div>
                                 <InputLabel 
                                     htmlFor="name" 
                                     value="Full Name" 
                                     className="text-gray-700 font-semibold"
                                 />
                                 <div className="mt-2 relative">
                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                         <svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                         </svg>
                                     </div>
                                     <TextInput
                                         id="name"
                                         name="name"
                                         value={data.name}
                                         className="mt-1 block w-full pl-10 pr-3 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                                         autoComplete="name"
                                         isFocused={true}
                                         placeholder="Enter your full name"
                                         onChange={(e) => setData('name', e.target.value)}
                                         required
                                     />
                                 </div>
                                 <InputError message={errors.name} className="mt-2" />
                             </div>
 
                             {/* Email Field */}
                             <div>
                                 <InputLabel 
                                     htmlFor="email" 
                                     value="Email Address" 
                                     className="text-gray-700 font-semibold"
                                 />
                                 <div className="mt-2 relative">
                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                         <svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                         </svg>
                                     </div>
                                     <TextInput
                                         id="email"
                                         type="email"
                                         name="email"
                                         value={data.email}
                                         className="mt-1 block w-full pl-10 pr-3 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                                         autoComplete="username"
                                         placeholder="your@email.com"
                                         onChange={(e) => setData('email', e.target.value)}
                                         required
                                     />
                                 </div>
                                 <InputError message={errors.email} className="mt-2" />
                             </div>
 
                             {/* Password Field */}
                             <div>
                                 <InputLabel 
                                     htmlFor="password" 
                                     value="Password" 
                                     className="text-gray-700 font-semibold"
                                 />
                                 <div className="mt-2 relative">
                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                         <svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                         </svg>
                                     </div>
                                     <TextInput
                                         id="password"
                                         type="password"
                                         name="password"
                                         value={data.password}
                                         className="mt-1 block w-full pl-10 pr-3 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                                         autoComplete="new-password"
                                         placeholder="Create a strong password"
                                         onChange={(e) => setData('password', e.target.value)}
                                         required
                                     />
                                 </div>
                                 <InputError message={errors.password} className="mt-2" />
                             </div>
 
                             {/* Confirm Password Field */}
                             <div>
                                 <InputLabel
                                     htmlFor="password_confirmation"
                                     value="Confirm Password"
                                     className="text-gray-700 font-semibold"
                                 />
                                 <div className="mt-2 relative">
                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                         <svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                         </svg>
                                     </div>
                                     <TextInput
                                         id="password_confirmation"
                                         type="password"
                                         name="password_confirmation"
                                         value={data.password_confirmation}
                                         className="mt-1 block w-full pl-10 pr-3 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                                         autoComplete="new-password"
                                         placeholder="Confirm your password"
                                         onChange={(e) =>
                                             setData('password_confirmation', e.target.value)
                                         }
                                         required
                                     />
                                 </div>
                                 <InputError
                                     message={errors.password_confirmation}
                                     className="mt-2"
                                 />
                             </div>
 
                             {/* Register Button */}
                             <div className="pt-2">
                                 <button
                                     type="submit"
                                     disabled={processing}
                                     className="w-full flex justify-center items-center gap-2 py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                 >
                                     {processing ? (
                                         <>
                                             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                             </svg>
                                             Creating account...
                                         </>
                                     ) : (
                                         <>
                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                             </svg>
                                             Create Pet Shop Account
                                         </>
                                     )}
                                 </button>
                             </div>
 
                             {/* Login Link */}
                             <div className="text-center pt-2">
                                 <p className="text-sm text-gray-600">
                                     Already have an account?{' '}
                                     <Link
                                         href={route('login')}
                                         className="font-bold text-orange-600 hover:text-orange-700 transition-colors"
                                     >
                                         Login here
                                     </Link>
                                 </p>
                             </div>
                         </form>
                     </div>
 
                     {/* Footer Text */}
                     <div className="mt-6 text-center">
                         <p className="text-sm text-gray-500">
                             By registering, you agree to our Terms of Service
                         </p>
                     </div>
                 </div>
             </div>
         </GuestLayout>
     );
 }