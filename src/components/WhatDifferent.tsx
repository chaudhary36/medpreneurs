'use client';
import React from 'react';
import Link from 'next/link';
import bg from '../../public/images/bg-pexels.jpg';
import Image from 'next/image';

const CTASection = () => {
  return (
    <section className="relative py-24 w-full h-full">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-80">
        <Image
          src={bg}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full  "
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* CTA Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-red-800 mb-6">
          “Alone we can do so little; together we can do so much.”
        </h2>

        {/* Subheading */}
        <p className="text-4xl text-blue-400 sm:text-5xl font-semibold italic mb-6 transition-all animate-fadeInUp">
             — Medpreneurs
          </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="/signup"
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
          <Link
            href="/learn-more"
            className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Optional Decorative Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
    </section>
  );
};

export default CTASection;
