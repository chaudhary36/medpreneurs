'use client';

import Link from 'next/link';

const Hero = () => {
  const team = [
    {
      id: 'anuj',
      name: 'Anuj',
      role: 'Boards Aspirant',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      desc: 'The Developer',
    },
    {
      id: 'amit',
      name: 'Amit',
      role: 'Medical Core',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      desc: 'NEET Aspirant 2027',
    },
    {
      id: 'kaish',
      name: 'Kaish',
      role: 'Medical Core',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      desc: 'NEET Aspirant 2027',
    },
    {
      id: 'krishna',
      name: 'Krishna',
      role: 'Engineering Core',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      desc: 'JEE Aspirant 2027',
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      
      {/* --- ANIMATED BACKGROUND --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Yellow Moving Glow (Top Center) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-yellow-500/20 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full text-center">
        
        {/* --- MAIN HEADLINES --- */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-yellow-400 mb-4 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            System Operational
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Medpreneurs</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collective of four minds converging technology and medicine. 
            No distractions. Just progress.
          </p>
        </div>

        {/* --- THE USEFUL PART: SYSTEM GRID --- */}
        {/* This replaces the slider. Immediate access to all 4 profiles. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {team.map((member) => (
            <Link 
              key={member.id} 
              href={`/${member.id}`}
              className="group relative overflow-hidden bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 text-left"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 group-hover:via-yellow-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-white/5 rounded-lg text-yellow-400 group-hover:text-yellow-300 group-hover:scale-110 transition-transform duration-300">
                    {member.icon}
                  </div>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-yellow-500/80 transition-colors">
                    ID: {member.id.toUpperCase()}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-600 mt-2 border-t border-white/5 pt-2">
                    {member.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/about" className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto">
             About The Team
          </Link>
          <button className="px-8 py-3 text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors w-full sm:w-auto">
             View Roadmap
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;