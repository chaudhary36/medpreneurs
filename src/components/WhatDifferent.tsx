'use client';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Mindset = () => {
  const [text] = useTypewriter({
    words: [
      'console.log("Pain is temporary.");',
      'while(alive) { grind(); }',
      'if (tired) { rest(); } else { quit(false); }',
      'import { Discipline } from "life";',
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  const values = [
    { title: '01 // DISCIPLINE', desc: 'Motivation is fleeting. Systems are permanent.' },
    { title: '02 // OBSESSION', desc: 'It is not a hobby. It is a biological necessity.' },
    { title: '03 // EXECUTION', desc: 'Ideas are cheap. Code and Results are the currency.' },
  ];

  return (
    <section className="relative w-full bg-yellow-400 py-20 overflow-hidden text-black selection:bg-black selection:text-white">
      
      {/* --- BACKGROUND MARQUEE (Infinite Scroll) --- */}
      {/* This creates the "Ticker Tape" effect running behind everything */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-10 pointer-events-none select-none">
        <div className="whitespace-nowrap animate-marquee text-[10rem] font-black leading-none uppercase">
          FOCUS  GRIND  BUILD  LEARN  FOCUS  GRIND  BUILD  LEARN
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT: The Values Grid --- */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              The Source <br /> Code.
            </h2>
            
            <div className="space-y-6">
              {values.map((val, idx) => (
                <div key={idx} className="group border-l-4 border-black pl-6 hover:pl-8 transition-all duration-300">
                  <h3 className="text-xl font-bold font-mono group-hover:underline decoration-2 underline-offset-4">
                    {val.title}
                  </h3>
                  <p className="text-lg font-medium opacity-80 mt-1">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: The Terminal (Animated Typewriter) --- */}
          <div className="w-full">
            <div className="bg-black text-gray-300 rounded-xl shadow-2xl overflow-hidden font-mono text-sm md:text-base border border-gray-800 transform hover:scale-[1.02] transition-transform duration-500">
              
              {/* Terminal Header */}
              <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-gray-500">root@medpreneurs:~</div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 h-[200px] flex flex-col justify-center">
                <div>
                  <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">run_daily_motivation.exe</span>
                </div>
                <div className="mt-4 text-xl md:text-2xl text-white font-bold">
                  {text}
                  <Cursor cursorColor="#FACC15" />
                </div>
                <div className="mt-8 text-xs text-gray-600 animate-pulse">
                  _ System waiting for user input...
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Tailwind Custom Animation Style (Add this to globals.css if marquee doesn't move) */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Mindset;