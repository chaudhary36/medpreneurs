'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const members = [
  {
    name: 'Anuj',
    role: 'The Coder 🧠',
    quote: 'Debugs life and code with equal confusion.',
    img: '/images/anujimg.png',
  },
  {
    name: 'Kaish',
    role: 'Gen-z 😂',
    quote: 'Turns every serious moment into a meme.',
    img: '/images/kaish.PNG',
  },
  {
    name: 'Krishna',
    role: 'The Calm One 😌',
    quote: 'Peaceful mind, chaotic friends.',
    img: '/images/krishna.PNG',
  },
  {
    name: 'Amit',
    role: 'The Planner 📋',
    quote: 'Plans everything, follows nothing.',
    img: '/images/amit.PNG',
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-4"
        >
          Meet the <span className="text-cyan-400">Medpreneurs</span> 👇
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-16"
        >
          Four friends. One chaotic energy. Countless memories.  
          Together, we make procrastination look productive 😎
        </motion.p>

        {/* Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-lg hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-5">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="rounded-full object-cover border-4 border-cyan-400 shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold">{m.name}</h3>
              <p className="text-cyan-300">{m.role}</p>
              <p className="mt-3 text-gray-300 text-sm italic">“{m.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating decorative blobs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
      />
    </section>
  );
}
