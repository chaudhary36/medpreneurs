'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function KaishPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-20 flex flex-col items-center">
      <div className="w-full max-w-5xl mb-10">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      <div className="max-w-5xl w-full bg-gray-800/60 rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-lg border-4 border-gray-700">
          <Image src="/images/kaish.png" alt="Kaish Raza" fill className="object-cover" />
        </div>

        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-400">Kaish Raza</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            “Hey! I’m <span className="text-pink-400">Kaish</span> from Lucknow. Currently preparing
            for <span className="text-green-400">NEET 2027</span>. I love memes, late-night talks,
            and learning biology in the most fun way possible.”
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">⚕ NEET Aspirant</span>
            <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">😎 Chill Guy</span>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">💬 Meme Expert</span>
          </div>

          <div className="bg-gray-700/40 border border-gray-600 p-5 rounded-2xl mt-6">
            <h2 className="text-xl font-semibold mb-2 text-yellow-400">Fun Fact 😂</h2>
            <p className="text-gray-300">
              I can turn any serious topic into a joke — even exams. (No regrets.)
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>Made with ❤️ by the Medpreneurs Crew</p>
      </div>
    </section>
  );
}
