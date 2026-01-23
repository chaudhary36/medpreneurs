'use client';

import { useEffect, useState, useRef } from 'react';

// Reusable Counter Component
const AnimatedCounter = ({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center p-6 bg-neutral-900/50 border border-white/5 rounded-xl hover:border-yellow-500/30 transition-colors">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
        {count}
        <span className="text-yellow-400">{suffix}</span>
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-widest">{label}</div>
    </div>
  );
};

const MissionStats = () => {
  return (
    <section className="relative w-full bg-[#050505] py-24 border-t border-white/5">
      
      {/* Decorative vertical line connecting sections */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-yellow-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT: The "Mission" Protocol --- */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-yellow-400 font-mono text-sm tracking-widest uppercase">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              Mission Protocol
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Bridging Biological Science with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Digital Infrastructure</span>.
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-yellow-500/20 pl-6">
              We are a closed-loop collective. While the world is distracted, we are compiling knowledge. 
              From the microscopic details of <strong>NEET</strong> biology to the architectural complexity of <strong>JEE</strong> mathematics and Full-Stack development.
            </p>

            <div className="flex flex-col gap-4">
               {/* Progress Bar 1 */}
               <div className="space-y-2">
                 <div className="flex justify-between text-xs font-mono text-gray-400">
                   <span>PROJECT: MEDPRENEURS</span>
                   <span>LOADING...</span>
                 </div>
                 <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                   <div className="h-full bg-yellow-400 w-[65%] shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                 </div>
               </div>

               {/* Progress Bar 2 */}
               <div className="space-y-2">
                 <div className="flex justify-between text-xs font-mono text-gray-400">
                   <span>TARGET: 2027 EXAMS</span>
                   <span>IN PROGRESS</span>
                 </div>
                 <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                   <div className="h-full bg-white w-[40%]"></div>
                 </div>
               </div>
            </div>
          </div>

          {/* --- RIGHT: Live Telemetry (Counters) --- */}
          <div className="grid grid-cols-2 gap-4">
            <AnimatedCounter end={4} label="Core Members" />
            <AnimatedCounter end={2} label="Active Domains" suffix="+" />
            <AnimatedCounter end={2027} label="Target Year" />
            <AnimatedCounter end={100} label="Focus Level" suffix="%" />
            
            {/* Context Card */}
            <div className="col-span-2 mt-4 p-6 bg-yellow-400/5 border border-yellow-400/20 rounded-xl text-center">
              <p className="text-yellow-200 text-sm font-mono">
                &quot;Consistently shipping code and solving problems.&quot;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionStats;