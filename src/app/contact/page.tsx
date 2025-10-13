// src/app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Heart } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white px-4">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4 text-center"
      >
        Contact the Medpreneurs 💬
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-300 mb-10 text-center max-w-xl"
      >
        We’re 4 friends just vibing through life — no startup, no goals, just chaos and memes.
      </motion.p>

      {/* Funny Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-md shadow-lg"
        >
          <Mail className="mx-auto mb-3 text-cyan-400" size={40} />
          <h2 className="text-2xl font-semibold mb-2">Email Us</h2>
          <p className="text-gray-300">
            medpreneurs@notarealemail.com 😂
          </p>
        </motion.div>

        {/* DM */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-md shadow-lg"
        >
          <MessageCircle className="mx-auto mb-3 text-pink-400" size={40} />
          <h2 className="text-2xl font-semibold mb-2">DM Us</h2>
          <p className="text-gray-300">
            Slide into our DMs... we might reply in 2089 👀
          </p>
        </motion.div>
      </div>

      {/* Fun Footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center text-gray-400 text-sm"
      >
        Made with <Heart className="inline text-red-500 mx-1" size={16} /> and zero purpose.
        <br />
        <span className="text-indigo-400 font-medium">#MedpreneursForever</span>
      </motion.div>

      {/* Back button */}
      <Link
        href="/"
        className="mt-8 text-indigo-400 hover:text-indigo-300 underline transition-all"
      >
        ← Back to Home
      </Link>
    </div>
    {/* <Footer/> */}
    </div>
  );
}
