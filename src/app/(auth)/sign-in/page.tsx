'use client'; 
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Back button */}
      <button
        onClick={() => (window.location.href = '/')}
        className="absolute top-4 left-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        Back to Home
      </button>

      {/* Login card */}
      <div className="relative z-10 w-full max-w-lg bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-700/40 p-12 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          Medpreneurs
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          Welcome to the squad! 🌟
        </p>
        <p className="text-md text-gray-400 mb-8">
          Login and explore our team of Anuj, Krishna, Kaish, and Amit.
        </p>

        <button
          onClick={() => signIn('google')}
          className="w-full flex items-center justify-center gap-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold px-6 py-3 rounded-xl border-none hover:scale-105 transition-transform duration-200 shadow-lg"
        >
          <FcGoogle className="text-3xl bg-white rounded-full" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
