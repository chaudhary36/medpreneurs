'use client';

import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand/Logo Section */}
        <div className="flex flex-col items-center sm:items-start">
          <Link href="/" className="text-3xl font-bold text-yellow-400 mb-4">
            Medpreneurs
          </Link>
          <p className="text-gray-400 text-sm mb-4">
            Empowering medical entrepreneurs with tools and a supportive community.
          </p>
          <div className="flex space-x-6">
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <FaTwitter className="text-yellow-400 hover:text-yellow-300" size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="text-yellow-400 hover:text-yellow-300" size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram className="text-yellow-400 hover:text-yellow-300" size={20} />
            </Link>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <FaGithub className="text-yellow-400 hover:text-yellow-300" size={20} />
            </Link>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col space-y-4 text-center sm:text-left">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <Link href="/" className="text-gray-300 hover:text-yellow-400">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-yellow-400">
            About Us
          </Link>
          
          <Link href="/contact" className="text-gray-300 hover:text-yellow-400">
            Contact
          </Link>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col space-y-4 text-center sm:text-left">
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <p className="text-gray-300">Email: <a href="mailto:contact@medpreneurs.com" className="hover:text-yellow-400">contact@medpreneurs.com</a></p>
          <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col space-y-4 text-center sm:text-left">
          <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <p className="text-gray-300">Stay updated with the latest news and offers.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-black"
            />
            <button className="bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-10">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Medpreneurs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
