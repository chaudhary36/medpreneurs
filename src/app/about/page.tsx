// src/app/about/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Anuj",
    role: "The Coder 🧠",
    quote: "Debugs life and code with equal confusion.",
    img: "/images/anujimg.png",
  },
  {
    name: "Kaish",
    role: "Gen-z 😂",
    quote: "Don't care how big the problem is ...",
    img: "/images/kaish.png",
  },
  {
    name: "Krishna",
    role: "The Calm One 😌",
    quote: "Always chill, no matter the chaos around.",
    img: "/images/krishna.png",
  },
  {
    name: "Amit",
    role: "The Planner 📋",
    quote: "Plans everything... but never follows it.",
    img: "/images/amit.png",
  },
];

export default function AboutPage() {
  return (
    <div>
      <Navbar/>
   
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white flex flex-col items-center py-20 px-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        About <span className="text-indigo-400">Medpreneurs</span> 🚀
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl text-center text-gray-300 mb-16 leading-relaxed"
      >
        We are just four friends who somehow named ourselves <strong>Medpreneurs</strong> — 
        not because we build startups, but because it sounds cooler than “group chat with chaos.”  
        We code, laugh, chill, and occasionally do something productive (rarely 😅).
      </motion.p>

      {/* Member Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg backdrop-blur-md hover:scale-105 transition-all"
          >
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover rounded-full border-4 border-indigo-400 shadow-md"
              />
            </div>
            <h2 className="text-2xl font-semibold">{member.name}</h2>
            <p className="text-indigo-300">{member.role}</p>
            <p className="mt-3 text-gray-300 text-sm italic">“{member.quote}”</p>
          </motion.div>
        ))}
      </div>

      {/* Funny Outro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center text-gray-400 max-w-md"
      >
        <p>
          <strong>Medpreneurs</strong> isn’t a company — it’s a vibe.  
          Born from boredom, powered by memes, and held together by friendship ❤️
        </p>

        <Link
          href="/"
          className="inline-block mt-6 text-indigo-400 hover:text-indigo-300 underline transition-all"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </div>
     </div>
  );
}
