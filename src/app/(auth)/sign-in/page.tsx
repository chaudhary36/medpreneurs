'use client';

import Navbar from '@/components/Navbar';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  return (
  <>
  <Navbar />

    <div className="flex items-center justify-center min-h-screen bg-[#050505] relative overflow-hidden selection:bg-yellow-400 selection:text-black">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Yellow Glow (Behind Card) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      {/* --- BACK BUTTON (Top Left) --- */}
     

      {/* --- LOGIN TERMINAL CARD --- */}
      <div className="relative z-10 w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 text-center backdrop-blur-xl">
        
        {/* Status Indicator */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-mono text-yellow-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            RESTRICTED ACCESS
          </div>
        </div>

        {/* Brand Header */}
        <div className="mb-2">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Med<span className="text-yellow-400">preneurs</span>
          </h1>
        </div>
        
        <p className="text-gray-400 text-sm mb-10 font-medium">
          Verify your identity to access the core.
        </p>

        {/* Google Button */}
        <button
          onClick={() => signIn('google')}
          className="group relative w-full flex items-center justify-center gap-3 bg-white text-black font-bold text-lg px-6 py-4 rounded-xl hover:bg-gray-200 transition-all duration-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)] hover:-translate-y-1"
        >
          {/* Icon */}
          <FcGoogle className="text-2xl" />
          
          <span>Continue with Google</span>

          {/* Subtle shine effect on hover */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
             <div className="absolute top-0 left-0 w-8 h-full bg-white/30 skew-x-[-20deg] -translate-x-20 group-hover:animate-shine transition-all"></div>
          </div>
        </button>

        {/* Footer Text */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-600 font-mono">
            SECURE CONNECTION // ENCRYPTED
          </p>
        </div>
      </div>
    </div>
  </>
  );
}