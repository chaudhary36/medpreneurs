'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState } from 'react';


const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500);
  };

  return (
    <main className=" overflow-hidden bg-black min-h-screen text-white selection:bg-yellow-400 selection:text-black">
      <Navbar />

      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        
        {/* --- Background Effects --- */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* --- LEFT: INFO TERMINAL --- */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-mono text-yellow-500 mb-6">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                CHANNELS OPEN
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
                Initialize <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                  Communication.
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-md">
                Whether it&apos;s a project collaboration, a fun inquiry, or just to say hello to the squad.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4 font-mono text-sm">
              
              {/* Email */}
              <div className="p-4 border border-white/10 rounded-xl bg-[#0a0a0a] flex items-center gap-4 hover:border-yellow-500/50 transition-colors group">
                <div className="p-3 bg-white/5 rounded-lg text-yellow-400 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">Electronic Mail</div>
                  <div className="text-white">contact@medpreneurs.com</div>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 border border-white/10 rounded-xl bg-[#0a0a0a] flex items-center gap-4 hover:border-yellow-500/50 transition-colors group">
                <div className="p-3 bg-white/5 rounded-lg text-yellow-400 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">Operational Zones</div>
                  <div className="text-white">Lucknow & Kushinagar, UP</div>
                </div>
              </div>

            </div>

            {/* Social Links Row */}
            <div className="flex gap-4 pt-4">
              {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                <button key={social} className="px-6 py-2 border border-white/10 rounded-full text-sm text-gray-400 hover:text-black hover:bg-white hover:border-white transition-all font-bold">
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT: TRANSMISSION FORM --- */}
          <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            
            {/* Top Bar Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-transparent"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              <div className="grid grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-gray-500 uppercase">Identity</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors placeholder:text-gray-700"
                    required
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-gray-500 uppercase">Return Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors placeholder:text-gray-700"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono text-gray-500 uppercase">Subject Protocol</label>
                <select 
                  id="subject"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>Collaboration</option>
                  <option>Report Bug</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-gray-500 uppercase">Data Payload</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Type your transmission here..."
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors placeholder:text-gray-700 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={formStatus !== 'idle'}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 ${
                  formStatus === 'sent' 
                    ? 'bg-green-500 text-black cursor-default'
                    : 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-[0_0_20px_-5px_rgba(250,204,21,0.4)]'
                }`}
              >
                {formStatus === 'idle' && 'Transmit Message'}
                {formStatus === 'submitting' && 'Encrypting & Sending...'}
                {formStatus === 'sent' && 'Transmission Successful ✓'}
              </button>

            </form>
            
            {/* Decorative Code bg */}
            <div className="absolute -bottom-10 -right-10 text-[10rem] text-white/5 opacity-5 font-black pointer-events-none select-none">
              SEND
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );  
};

export default ContactPage;