'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- TOP SECTION: GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand & Mission */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-xl group-hover:rotate-12 transition-transform">
                M
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Med<span className="text-yellow-400">preneurs</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              A digital collective bridging the gap between biological sciences and modern software architecture. Est. 2025.
            </p>
            {/* System Status Indicator */}
            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-green-500 uppercase tracking-widest">
                System Online
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-yellow-400 hover:pl-2 transition-all duration-300 block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 hover:pl-2 transition-all duration-300 block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-yellow-400 hover:pl-2 transition-all duration-300 block">
                  Roadmap 2027
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 hover:pl-2 transition-all duration-300 block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Socials / Connect */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span>𝕏</span> Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span>in</span> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span>git</span> GitHub
                </a>
              </li>
              <li>
                <a href="mailto:contact@medpreneurs.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span>@</span> Email Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM SECTION: LEGAL & CREDIT --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Medpreneurs. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-gray-600">
            <Link href="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400">Terms of Service</Link>
          </div>

          {/* The Developer Credit - YOUR Signature */}
          <div className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
            Designed & Developed by <span className="text-yellow-400">Anuj</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;