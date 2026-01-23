'use client';

import { useEffect, useState } from 'react';

const Preloader = () => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [currentLog, setCurrentLog] = useState('Initializing Core...');

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        // Stop at 100
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFinished(true), 500); // Wait a bit at 100% before lifting curtain
          return 100;
        }

        // Randomize speed for "real" feel
        const jump = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + jump, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Sync Logs with Percentage
  useEffect(() => {
    if (count < 20) setCurrentLog('Initializing Kernel...');
    else if (count < 40) setCurrentLog('Loading Modules: React, Next.js, Tailwind...');
    else if (count < 60) setCurrentLog('Detected Members: Anuj, Amit, Kaish, Krishna...');
    else if (count < 80) setCurrentLog('Optimizing for 2027 Targets...');
    else if (count < 95) setCurrentLog('Compiling Assets...');
    else setCurrentLog('System Ready. Access Granted.');
  }, [count]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] transition-transform duration-1000 ease-in-out ${
        isFinished ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Background Grid (Same as Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 w-full max-w-md px-6">
        
        {/* The Percentage Counter */}
        <div className="text-right mb-2">
          <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">
            {count}
          </span>
          <span className="text-xl md:text-2xl text-yellow-400 font-bold ml-1">%</span>
        </div>

        {/* Progress Bar */}
        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-yellow-400 transition-all duration-100 ease-out shadow-[0_0_15px_rgba(250,204,21,0.8)]"
            style={{ width: `${count}%` }}
          ></div>
        </div>

        {/* Terminal Logs */}
        <div className="font-mono text-xs md:text-sm text-gray-500 h-6 flex items-center gap-2">
          <span className="text-green-500">root@medpreneurs:~</span>
          <span className="text-gray-300 animate-pulse">{currentLog}</span>
        </div>

      </div>

      {/* Brand Watermark (Bottom) */}
      <div className="absolute bottom-8 text-center opacity-50">
        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">
          Secure Connection Established
        </p>
      </div>
    </div>
  );
};

export default Preloader;