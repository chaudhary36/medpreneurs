'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);

  const { data: session } = useSession();

  const teamMembers = [
    { name: 'Anuj', href: '/anuj' },
    { name: 'Krishna', href: '/krishna' },
    { name: 'Kaish', href: '/kaish' },
    { name: 'Amit', href: '/amit' },
  ];

  // Close mobile menu and dropdown when link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setTeamDropdownOpen(false);
  };

  return (
    <nav className="bg-white text-black shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              <Image
                src="/images/medpreneurs.png"
                alt="Medpreneurs Logo"
                width={50}
                height={50}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="text-xl font-bold">
              <Link href="/" onClick={handleLinkClick}>
                <span className="text-black text-extrabold">Med</span>
                <span className="text-yellow-600 text-extrabold">preneurs</span>
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center space-x-6 relative">
            <Link href="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-500">
              About
            </Link>

            {/* Team Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTeamDropdownOpen(true)}
              onMouseLeave={() => setTeamDropdownOpen(false)}
            >
              <button className="hover:text-yellow-500 font-medium">Team ▼</button>
              {teamDropdownOpen && (
                <div className="absolute mt-2 w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                  {teamMembers.map((member) => (
                    <Link
                      key={member.name}
                      href={member.href}
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-black transition"
                    >
                      {member.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-yellow-500">
              Contact
            </Link>

            {session ? (
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/sign-in"
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-medium"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black hover:text-yellow-500 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
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
          <Link href="/" onClick={handleLinkClick} className="block hover:text-yellow-500">
            Home
          </Link>
          <Link href="/about" onClick={handleLinkClick} className="block hover:text-yellow-500">
            About
          </Link>

          {/* Mobile Team Dropdown */}
          <div className="block">
            <button
              onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
              className="w-full text-left hover:text-yellow-500 font-medium"
            >
              Team ▼
            </button>
            {teamDropdownOpen &&
              teamMembers.map((member) => (
                <Link
                  key={member.name}
                  href={member.href}
                  onClick={handleLinkClick} // ✅ close dropdown when clicked
                  className="block pl-4 py-2 hover:bg-yellow-400 hover:text-black rounded transition"
                >
                  {member.name}
                </Link>
              ))}
          </div>

          <Link href="/contact" onClick={handleLinkClick} className="block hover:text-yellow-500">
            Contact
          </Link>

          {session ? (
            <button
              onClick={() => {
                signOut();
                handleLinkClick();
              }}
              className="block w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 font-medium mt-2"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/sign-in"
              onClick={handleLinkClick}
              className="block w-full bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-medium mt-2"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
