'use client';

const milestones = [
  {
    year: '2025',
    title: 'System Initialization',
    subtitle: 'Foundation & Team Formation',
    description: 'The Medpreneurs collective was established. Initial web architecture (V1) deployed. Core academic targets set for JEE & NEET.',
    status: 'completed',
  },
  {
    year: '2026',
    title: 'Skill Expansion',
    subtitle: 'Freelancing & Development',
    description: 'Current Phase. Launching "Medpreneurs" Website. Scaling Understanding capabilities and mastering physics/biology concepts.',
    status: 'active',
  },
  {
    year: '2027',
    title: 'The Summit',
    subtitle: 'Final Examinations',
    description: 'Target Locked. Execution of final academic sprints. University transitions and scaling the mindest from student to professional.',
    status: 'future',
  },
];

const Roadmap = () => {
  return (
    <section className="relative w-full bg-[#050505] py-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Operational <span className="text-yellow-400">Roadmap</span>
          </h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="relative">
          
          {/* The Vertical Line (Laser Beam) */}
          {/* Mobile: Left aligned. Desktop: Center aligned */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center md:justify-between group ${
                // Alternating layout for desktop (Even vs Odd)
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                
                {/* 1. The Dot (Node) */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-yellow-500 bg-[#050505] z-20 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(250,204,21,0.5)]">
                   {/* Inner Pulse for Active Item */}
                   {item.status === 'active' && (
                     <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-75"></div>
                   )}
                </div>

                {/* 2. The Content Card */}
                {/* Mobile: Push to right of line. Desktop: Width 45% */}
                <div className="ml-16 md:ml-0 w-[calc(100%-4rem)] md:w-[45%]">
                  <div className={`p-6 rounded-xl border transition-all duration-300 ${
                    item.status === 'active' 
                      ? 'bg-yellow-500/10 border-yellow-500/50 shadow-[0_0_30px_-10px_rgba(250,204,21,0.2)]' 
                      : 'bg-white/5 border-white/5 hover:border-yellow-500/30 hover:bg-white/10'
                  }`}>
                    
                    {/* Header: Year & Status */}
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-2xl font-bold font-mono ${
                        item.status === 'active' ? 'text-yellow-400' : 'text-gray-500'
                      }`}>
                        {item.year}
                      </span>
                      {item.status === 'active' && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-400 text-black uppercase tracking-wider">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-yellow-500/80 font-medium mb-3 uppercase tracking-wide">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                </div>

                {/* 3. Empty Spacer for Desktop Layout Balance */}
                <div className="hidden md:block w-[45%]"></div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Roadmap;