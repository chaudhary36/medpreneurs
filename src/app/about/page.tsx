'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



const AboutPage = () => {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-yellow-400 selection:text-black">
      <Navbar />
      
      {/* --- HEADER SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-6">
            <span>EST. SEPTEMBER 2025</span>
            <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
            <span>ORIGIN STORY</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Decoding The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600">
              Collective.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We are not just students. We are a closed-loop ecosystem. 
            Merging the precision of medical science with the scalability of software engineering.
          </p>
        </div>
      </section>

      {/* --- THE DUAL CORE CONCEPT (Split Screen) --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LEFT: THE MED (Biology) */}
          <div className="relative group p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-all duration-500 overflow-hidden">
            {/* Hover Glow Green */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/20 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-900/30 rounded-xl flex items-center justify-center text-green-400 mb-6 border border-green-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">The <span className="text-green-400">Med</span> Core</h2>
              <p className="text-gray-400 mb-6">
                Represented by <strong>Amit & Kaish</strong>.
              </p>
              <ul className="space-y-3 text-gray-500 text-sm font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> NEET 2027 Aspirants
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Biological Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Organic Chemistry
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: THE PRENEURS (Tech) */}
          <div className="relative group p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-all duration-500 overflow-hidden">
            {/* Hover Glow Yellow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-500/20 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-yellow-900/30 rounded-xl flex items-center justify-center text-yellow-400 mb-6 border border-yellow-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">The <span className="text-yellow-400">Preneur</span> Core</h2>
              <p className="text-gray-400 mb-6">
                Represented by <strong>Anuj & Krishna</strong>.
              </p>
              <ul className="space-y-3 text-gray-500 text-sm font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">✓</span> JEE 2027 Aspirants
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">✓</span> Full Stack Architecture (MERN)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">✓</span> Advanced Mathematics
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* --- THE ARSENAL (Infinite Scroll) --- */}
      <section className="py-10 bg-yellow-400 text-black overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="text-4xl font-black mx-8">NEXT.JS 14</span>
          <span className="text-4xl font-black mx-8">•</span>
          <span className="text-4xl font-black mx-8">HUMAN ANATOMY</span>
          <span className="text-4xl font-black mx-8">•</span>
          <span className="text-4xl font-black mx-8">REACT NATIVE</span>
          <span className="text-4xl font-black mx-8">•</span>
          <span className="text-4xl font-black mx-8">PHYSICS</span>
          <span className="text-4xl font-black mx-8">•</span>
          <span className="text-4xl font-black mx-8">MONGODB</span>
          <span className="text-4xl font-black mx-8">•</span>
          <span className="text-4xl font-black mx-8">GENETICS</span>
          <span className="text-4xl font-black mx-8">•</span>
        </div>
        <div className="inline-block animate-marquee" aria-hidden="true">
          <span className="text-4xl font-black mx-8">NEXT.JS 14</span>
          <span className="text-4xl font-black mx-8">•</span>
          <span className="text-4xl font-black mx-8">HUMAN ANATOMY</span>
          <span className="text-4xl font-black mx-8">•</span>
          <span className="text-4xl font-black mx-8">REACT NATIVE</span>
          <span className="text-4xl font-black mx-8">•</span>
          <span className="text-4xl font-black mx-8">PHYSICS</span>
          <span className="text-4xl font-black mx-8">•</span>
          <span className="text-4xl font-black mx-8">MONGODB</span>
          <span className="text-4xl font-black mx-8">•</span>
          <span className="text-4xl font-black mx-8">GENETICS</span>
          <span className="text-4xl font-black mx-8">•</span>
        </div>
      </section>

      {/* --- THE MANIFESTO --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0f0f0f] border border-white/5 p-8 md:p-12 rounded-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-yellow-500"></div>
          
          <h3 className="text-2xl font-bold text-white mb-6 font-mono">
          CLASSIFIED: The Origin
          </h3>
          
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              In <span className="text-white font-bold">September 2025</span>, four friends realized that the traditional path was too slow. 
              The world divides people into "Doctors" or "Engineers." We refused to choose.
            </p>
            <p>
              Anuj and Krishna persue their passion towards Solutions. Amit and Kaish provide the biological precision. 
              Together, we are not just preparing for an exam; we are preparing to dominate the intersection of these two fields.
            </p>
            <p>
              Our website, <span className="text-yellow-400">Medprenuers</span>, 
              are the first steps in a roadmap that extends far beyond 2027.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
             <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-white">A</div>
             <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-white">A</div>
             <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-white">K</div>
             <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-white">K</div>
             <span className="ml-auto text-sm text-gray-500 font-mono">SIGNED DIGITALLY</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;