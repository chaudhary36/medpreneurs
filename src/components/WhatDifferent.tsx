'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bg from '../../public/images/bg-pexels.jpg';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl px-6"
      >
        {/* Quote */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          “Alone we can do so little; together we can do so much.”
        </h2>

        {/* Tagline */}
        <p className="text-2xl sm:text-4xl font-semibold text-cyan-400 italic mb-10">
          — Medpreneurs
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link
            href="/signup"
            className="px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-md hover:bg-gray-200 transition-all duration-300"
          >
            Get Started
          </Link>

          <Link
            href="/learn-more"
            className="px-8 py-4 border border-cyan-400 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Subtle Floating Blobs for Style */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 left-10 w-56 h-56 bg-cyan-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl"
      />
    </section>
  );
};

export default CTASection;
