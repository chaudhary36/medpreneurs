'use client';

import Image from 'next/image';

const friends = [
  {
    name: 'Anuj',
    role: 'The Architect',
    image: '/images/anujimg.png',
    quote: 'Building systems that scale.',
  },
  {
    name: 'Amit',
    role: 'The Serious',
    image: '/images/amit.PNG',
    quote: 'Precision in every diagnosis.',
  },
  {
    name: 'Kaish',
    role: 'The Strategist',
    image: '/images/kaish.PNG',
    quote: 'Discipline beats motivation.',
  },
  {
    name: 'Krishna',
    role: 'The Solver',
    image: '/images/krishna.PNG',
    quote: 'Solving the unsolvable.',
  },
];

const FriendshipCore = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-24 overflow-hidden">
      
      {/* --- CONNECTING LINE (Background) --- */}
      {/* Visualizes the bond connecting the four of you */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent z-0 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            The <span className="text-yellow-400">Brotherhood</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            "Four distinct paths converging on a single destination. 
            Since <span className="text-yellow-400 font-mono font-bold">2025</span>."
          </p>
        </div>

        {/* --- THE SQUAD GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend, index) => (
            <div 
              key={index} 
              className="group relative h-[400px] w-full rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-yellow-500/50 transition-all duration-500"
            >
              
              {/* 1. Image (Black & White -> Color on Hover) */}
              <div className="absolute inset-0 transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110">
                <Image
                  src={friend.image}
                  alt={friend.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* 2. Overlay Gradient (Dark at bottom for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* 3. Text Content (Slides Up on Hover) */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                
                {/* Decorative Line */}
                <div className="w-12 h-1 bg-yellow-400 mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                
                <h3 className="text-2xl font-bold text-white mb-1">
                  {friend.name}
                </h3>
                <p className="text-yellow-400 text-sm font-mono uppercase tracking-wider mb-2">
                  {friend.role}
                </p>
                
                {/* Quote (Only visible on hover) */}
                <p className="text-gray-300 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                  "{friend.quote}"
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FriendshipCore;