'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AnujPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-20 flex flex-col items-center">
      {/* Back button */}
      <div className="w-full max-w-5xl mb-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      {/* Profile Card */}
      <div className="max-w-5xl w-full bg-gray-800/60 rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-lg border-4 border-gray-700">
          <Image
            src="/images/anujimg.png"
            alt="Anuj Chowdhury"
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
            Anuj Chowdhury
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            “Hey there! I’m Anuj from <span className="text-blue-400">Kushinagar, UP</span>.
            I’m currently studying for <span className="text-green-400">JEE 2027</span> as an
            online student of Arjuna JEE. Apart from studies, I love exploring
            <span className="text-yellow-400"> web development, SaaS ideas, and creating videos for my YouTube channel ‘Webance’</span>.”
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
              🧠 JEE 2027 Aspirant
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
              💻 Full Stack Developer
            </span>
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
              ☕ Lifelong Learner
            </span>
          </div>

          {/* Fun Section */}
          <div className="bg-gray-700/40 border border-gray-600 p-5 rounded-2xl mt-6">
            <h2 className="text-xl font-semibold mb-2 text-yellow-400">Fun Fact ⚡</h2>
            <p className="text-gray-300">
              I can spend hours debugging code, editing videos, and still find energy to plan the next big thing 😅.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>Made with ❤️ by the Medpreneurs Crew</p>
      </div>
    </section>
  );
}
