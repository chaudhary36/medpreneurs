'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'; // Import Image component from Next.js

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-2"> {/* Flex to align image and text */}
            {/* Image Logo */}
            <div className="flex-shrink-0">
              <Image 
                src="/images/medpreneurs.png" // Update the path to your logo image
                alt="Medpreneurs Logo"
                width={50} // Set the width of the logo
                height={50} // Set the height of the logo
                className="object-cover rounded-lg"
              />
            </div>
            {/* Brand Text */}
            <div className="text-xl font-bold">
              <Link href="/"><span className='text-black text-extrabold'>Med</span><span className='text-yellow-600 text-extrabold'>preneurs</span></Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center space-x-6">
            <Link href="/" className="hover:text-yellow-500">Home</Link>
            <Link href="/about" className="hover:text-yellow-500">About</Link>
            <Link href="/services" className="hover:text-yellow-500">Services</Link>
            <Link href="/contact" className="hover:text-yellow-500">Contact</Link>
            <Link
              href="/login"
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-medium"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black hover:text-yellow-500 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block hover:text-yellow-500">Home</Link>
          <Link href="/about" className="block hover:text-yellow-500">About</Link>
          <Link href="/services" className="block hover:text-yellow-500">Services</Link>
          <Link href="/contact" className="block hover:text-yellow-500">Contact</Link>
          <Link
            href="/login"
            className="block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-medium mt-2"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
