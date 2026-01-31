 import Checkbox from '@/Components/Checkbox';
 import InputError from '@/Components/InputError';
 import InputLabel from '@/Components/InputLabel';
 import PrimaryButton from '@/Components/PrimaryButton';
 import TextInput from '@/Components/TextInput';
 import GuestLayout from '@/Layouts/GuestLayout';
 import { Head, Link, useForm } from '@inertiajs/react';
 
 export default function Login({ status, canResetPassword }) {
     const { data, setData, post, processing, errors, reset } = useForm({
         email: '',
         password: '',
         remember: false,
     });
 
     const submit = (e) => {
         e.preventDefault();
         post(route('login'), {
             onFinish: () => reset('password'),
         });
     };
 
     return (
         <GuestLayout>
             <Head title="Log in - Pet Shop" />
 
             <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
                 <div className="max-w-md w-full">
                     {/* Logo & Header */}
                     <div className="text-center mb-8">
                         <div className="flex justify-center mb-4">
                             <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg">
                                 <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                 </svg>
                             </div>
                         </div>
                         <h2 className="text-3xl font-bold text-gray-900 mb-2">
                             Welcome Back
                         </h2>
                         <p className="text-gray-600">
                             Login to manage your pet shop
                         </p>
                     </div>
 
                     {/* Login Form Card */}
                     <div className="bg-white rounded-2xl shadow-xl border-2 border-orange-100 p-8">
                         {status && (
                             <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                                 <p className="text-sm font-medium text-green-600">
                                     {status}
                                 </p>
                             </div>
                         )}
 
                         <form onSubmit={submit} className="space-y-6">
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
                                         isFocused={true}
                                         placeholder="your@email.com"
                                         onChange={(e) => setData('email', e.target.value)}
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
                                         autoComplete="current-password"
                                         placeholder="Enter your password"
                                         onChange={(e) => setData('password', e.target.value)}
                                     />
                                 </div>
                                 <InputError message={errors.password} className="mt-2" />
                             </div>
 
                             {/* Remember Me */}
                             <div className="flex items-center justify-between">
                                 <label className="flex items-center cursor-pointer group">
                                     <Checkbox
                                         name="remember"
                                         checked={data.remember}
                                         onChange={(e) =>
                                             setData('remember', e.target.checked)
                                         }
                                         className="rounded border-orange-300 text-orange-500 focus:ring-orange-400"
                                     />
                                     <span className="ms-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">
                                         Remember me
                                     </span>
                                 </label>
 
                                 {canResetPassword && (
                                     <Link
                                         href={route('password.request')}
                                         className="text-sm text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                                     >
                                         Forgot password?
                                     </Link>
                                 )}
                             </div>
 
                             {/* Login Button */}
                             <div>
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
                                             Logging in...
                                         </>
                                     ) : (
                                         <>
                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                             </svg>
                                             Log in to Pet Shop
                                         </>
                                     )}
                                 </button>
                             </div>
                         </form>
 
                         {/* Register Link */}
                         <div className="mt-6 text-center">
                             <p className="text-sm text-gray-600">
                                 Don't have an account?{' '}
                                 <Link
                                     href={route('register')}
                                     className="font-bold text-orange-600 hover:text-orange-700 transition-colors"
                                 >
                                     Register here
                                 </Link>
                             </p>
                         </div>
                     </div>
 
                     {/* Footer Text */}
                     <div className="mt-6 text-center">
                         <p className="text-sm text-gray-500">
                             Your trusted partner in pet care
                         </p>
                     </div>
                 </div>
             </div>
         </GuestLayout>
     );
 }