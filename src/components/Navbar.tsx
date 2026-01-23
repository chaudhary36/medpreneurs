'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);

  const { data: session } = useSession();

  const teamMembers = [
    { name: 'Anuj', href: '/anuj' },
    { name: 'Krishna', href: '/krishna' },
    { name: 'Kaish', href: '/kaish' },
    { name: 'Amit', href: '/amit' },
  ];

  // Detect scroll to change navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setTeamDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* --- BRANDING --- */}
          <Link href="/" onClick={handleLinkClick} className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 group-hover:border-yellow-500/50 transition-colors">
              <Image
                src="/images/medpreneurs.png"
                alt="Medpreneurs Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-xl font-bold tracking-tight">
              <span className="text-white">Med</span>
              <span className="text-yellow-400">preneurs</span>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            
            {/* Team Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setTeamDropdownOpen(true)}
              onMouseLeave={() => setTeamDropdownOpen(false)}
            >
              <button className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Team
                <svg className={`w-3 h-3 transition-transform ${teamDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48 transition-all duration-200 ${
                  teamDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                }`}
              >
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1">
                  {teamMembers.map((member) => (
                    <Link
                      key={member.name}
                      href={member.href}
                      className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      {member.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* --- AUTH BUTTONS --- */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <button
                onClick={() => signOut()}
                className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
              >
                Sign out
              </button>
            ) : (
              <Link
                href="/sign-in"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_-3px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_-3px_rgba(250,204,21,0.5)]"
              >
                Login
              </Link>
            )}
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-4">
          <MobileLink href="/" onClick={handleLinkClick}>Home</MobileLink>
          <MobileLink href="/about" onClick={handleLinkClick}>About</MobileLink>
          
          <div className="border-l-2 border-white/10 pl-4 my-2 space-y-2">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">The Team</p>
            {teamMembers.map((member) => (
              <Link key={member.name} href={member.href} onClick={handleLinkClick} className="block text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                {member.name}
              </Link>
            ))}
          </div>

          <MobileLink href="/contact" onClick={handleLinkClick}>Contact</MobileLink>

          <div className="pt-4 border-t border-white/10">
            {session ? (
              <button onClick={() => { signOut(); handleLinkClick(); }} className="w-full py-3 text-center text-red-400 font-medium hover:bg-white/5 rounded-lg transition-colors">
                Log out
              </button>
            ) : (
              <Link href="/sign-in" onClick={handleLinkClick} className="block w-full py-3 text-center bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- HELPER COMPONENTS ---

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
  >
    {children}
  </Link>
);

const MobileLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block text-lg font-medium text-gray-200 hover:text-yellow-400 transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;