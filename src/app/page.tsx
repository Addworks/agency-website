"use client";

import React, { useState } from 'react';
import './globals.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@nakgroup.com?subject=New Inquiry from ${encodeURIComponent(contactName)}&body=${encodeURIComponent(contactMessage)}%0A%0AFrom: ${encodeURIComponent(contactEmail)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-slate-950 text-slate-50 font-sans antialiased scroll-smooth selection:bg-cyan-500 selection:text-white">
      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px]"></div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20 backdrop-blur-md bg-slate-950/50 sticky top-0 border-b border-white/10">
        <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tighter">
          NAK GROUP.
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-cyan-400 transition font-semibold text-sm uppercase tracking-widest text-slate-300">Services</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition font-semibold text-sm uppercase tracking-widest text-slate-300">Venture Portfolio</a>
          <a href="#why-us" className="hover:text-cyan-400 transition font-semibold text-sm uppercase tracking-widest text-slate-300">Why Us</a>
        </div>
        
        <div className="hidden md:block">
           <a href="#contact" className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl uppercase tracking-wider">
              Get In Touch
            </span>
          </a>
        </div>

        <button 
          className="md:hidden text-slate-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 z-50">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-200 uppercase tracking-wider">Services</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-200 uppercase tracking-wider">Venture Portfolio</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-cyan-500 text-slate-950 px-4 py-3 rounded-lg font-bold text-center mt-4 uppercase tracking-wider">
            Get In Touch
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-32 text-center md:py-48 relative z-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-semibold text-cyan-300 tracking-widest uppercase">
          Venture Studio & Enterprise Engineering
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Global Digital Corridors.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          NAK Group builds highly scalable, sovereign SaaS platforms and complex enterprise ecosystems powered by elite African engineering. 
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#contact" className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
            Partner With Us
          </a>
          <a href="#portfolio" className="bg-white/5 text-white px-8 py-4 rounded-full font-bold text-lg border border-white/10 hover:bg-white/10 transition backdrop-blur-sm">
            Explore Our Ventures
          </a>
        </div>
      </header>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">The Venture Portfolio</h2>
            <p className="text-xl text-slate-400 font-light">
              Live platforms built, scaled, and managed entirely in-house. We bring product-led rigor to our enterprise clients because we are founders ourselves.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {/* Live App 1 */}
            <a href="https://freighter-africa.vercel.app/" target="_blank" rel="noopener noreferrer" className="group block p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-cyan-500/50 hover:to-blue-500/50 transition duration-500">
              <div className="h-full bg-slate-900 rounded-[22px] p-8 border border-white/5 group-hover:border-transparent transition duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-3xl">🚛</div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">Freighter Africa</h3>
                <p className="text-slate-400 mb-6 font-light">Smart logistics load board eliminating empty miles for regional carriers and reducing costs for B2B shippers across the continent.</p>
                <div className="text-cyan-400 font-semibold group-hover:translate-x-2 transition duration-300 flex items-center">
                  Visit Platform <span className="ml-2">→</span>
                </div>
              </div>
            </a>

            {/* Live App 2 */}
            <a href="https://rent-it-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="group block p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-purple-500/50 hover:to-pink-500/50 transition duration-500">
              <div className="h-full bg-slate-900 rounded-[22px] p-8 border border-white/5 group-hover:border-transparent transition duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center text-3xl">🛠️</div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">RentIt</h3>
                <p className="text-slate-400 mb-6 font-light">A hyper-local, peer-to-peer rental marketplace for heavy equipment and tools. Bridging the grassroots economy.</p>
                <div className="text-purple-400 font-semibold group-hover:translate-x-2 transition duration-300 flex items-center">
                  Visit Platform <span className="ml-2">→</span>
                </div>
              </div>
            </a>

            {/* Live App 3 */}
            <a href="https://vouchvault.addworkssibanda.workers.dev" target="_blank" rel="noopener noreferrer" className="group block p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-emerald-500/50 hover:to-teal-500/50 transition duration-500">
              <div className="h-full bg-slate-900 rounded-[22px] p-8 border border-white/5 group-hover:border-transparent transition duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl">✅</div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">VouchVault</h3>
                <p className="text-slate-400 mb-6 font-light">Automated, AI-driven hiring reference platform. Parses resumes via GenAI to automate background checks securely.</p>
                <div className="text-emerald-400 font-semibold group-hover:translate-x-2 transition duration-300 flex items-center">
                  Visit Platform <span className="ml-2">→</span>
                </div>
              </div>
            </a>

            {/* Live App 4 */}
            <a href="https://ucp-aqua-flow.vercel.app/" target="_blank" rel="noopener noreferrer" className="group block p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-blue-500/50 hover:to-cyan-500/50 transition duration-500">
              <div className="h-full bg-slate-900 rounded-[22px] p-8 border border-white/5 group-hover:border-transparent transition duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-3xl">💧</div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">AquaFlow IoT</h3>
                <p className="text-slate-400 mb-6 font-light">Real-time water management platform connecting IoT smart meters for property portfolios to prevent leaks and manage rationing.</p>
                <div className="text-blue-400 font-semibold group-hover:translate-x-2 transition duration-300 flex items-center">
                  Visit Platform <span className="ml-2">→</span>
                </div>
              </div>
            </a>
          </div>

          {/* Other Concepts */}
          <div className="border-t border-white/10 pt-16">
            <h3 className="text-2xl font-bold mb-10 text-center text-slate-300 uppercase tracking-widest">In Development & Stealth</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-2">FractionalHub</h4>
                <p className="text-sm text-slate-500">Elite African engineering talent placed fractionally into GCC/US startups.</p>
              </div>
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-2">Trade Enablement</h4>
                <p className="text-sm text-slate-500">Digitizing Escrow & compliance for GCC/China to Africa commodities corridors.</p>
              </div>
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-2">Investigator Suite</h4>
                <p className="text-sm text-slate-500">Sovereign GovTech micro-apps for digital forensics and link analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Agency Services Section */}
      <section id="services" className="py-24 relative z-10 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tighter">Enterprise Custom Engineering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-slate-950 rounded-3xl border border-white/5 shadow-2xl hover:border-cyan-500/30 transition duration-300">
              <div className="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 text-2xl border border-cyan-500/20">💻</div>
              <h3 className="text-xl font-bold mb-4 text-white">Complex System Architecture</h3>
              <p className="text-slate-400 leading-relaxed font-light">We don't build brochure sites. We build massive logistical ERPs, Escrow payment gateways, and FinTech compliance portals.</p>
            </div>
            <div className="p-8 bg-slate-950 rounded-3xl border border-white/5 shadow-2xl hover:border-blue-500/30 transition duration-300">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 text-2xl border border-blue-500/20">🤝</div>
              <h3 className="text-xl font-bold mb-4 text-white">Strategic Team Augmentation</h3>
              <p className="text-slate-400 leading-relaxed font-light">Scale your in-house capacity seamlessly. We embed elite, time-zone-aligned South African engineers directly into your sprints.</p>
            </div>
            <div className="p-8 bg-slate-950 rounded-3xl border border-white/5 shadow-2xl hover:border-purple-500/30 transition duration-300">
              <div className="w-14 h-14 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-6 text-2xl border border-purple-500/20">🛡️</div>
              <h3 className="text-xl font-bold mb-4 text-white">Data Sovereignty & RegTech</h3>
              <p className="text-slate-400 leading-relaxed font-light">Locally hosted, strictly permissioned systems ensuring your sensitive corporate data never leaves the jurisdiction unlawfully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <footer id="contact" className="relative py-32 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-blue-950/20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Ready to Build?</h2>
            <p className="text-xl text-slate-400 font-light">
              Whether you need to scale your team or build a sovereign platform from scratch, NAK Group delivers.
            </p>
          </div>
          
          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 className="font-bold text-2xl mb-6 text-center text-white">Get in Touch</h3>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Your Email</label>
                <input 
                  type="email" 
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" 
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">How can we help?</label>
                <textarea 
                  required
                  rows={4}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none" 
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                Send Message via Email Client
              </button>
            </form>
          </div>
          <p className="text-slate-500 mt-12 text-center">
            Or email us directly at <a href="mailto:hello@nakgroup.com" className="text-cyan-400 hover:underline">hello@nakgroup.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}