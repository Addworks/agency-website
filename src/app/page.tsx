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

      {/* Hub71 Evaluator Announcement Bar */}
      <div className="relative z-30 bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-800 py-3 px-4 text-center text-sm font-bold shadow-lg">
        <span className="inline-flex items-center gap-2">
          <span>🚀</span>
          <span>Hub71 Admission Phase:</span> 
          <span className="font-light text-slate-100">Explore our parastatal-validated live</span>
          <a href="#sandbox" className="underline hover:text-white font-black transition">
            Durban Port Sandbox Demo &rarr;
          </a>
        </span>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20 backdrop-blur-md bg-slate-950/50 sticky top-0 border-b border-white/10">
        <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tighter">
          NAK GROUP.
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-cyan-400 transition font-semibold text-sm uppercase tracking-widest text-slate-300">Services</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition font-semibold text-sm uppercase tracking-widest text-slate-300">Venture Portfolio</a>
          <a href="#sandbox" className="hover:text-cyan-400 transition font-semibold text-sm uppercase tracking-widest text-slate-300">Evaluator Hub</a>
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
          <a href="#sandbox" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-200 uppercase tracking-wider">Evaluator Hub</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-cyan-500 text-slate-950 px-4 py-3 rounded-lg font-bold text-center mt-4 uppercase tracking-wider">
            Get In Touch
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-32 text-center md:py-48 relative z-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-sm text-sm font-bold text-cyan-300 tracking-widest uppercase">
          🌿 Climate Tech | 🔗 Web3 Trust | 💳 Sharia FinTech
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Global Digital Corridors.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          NAK Group is a dual-engine **Digital Product Venture Studio**. We deliver elite nearshore software R&D to GCC enterprises with zero timezone friction, while bootstrapping and scaling a proprietary SaaS portfolio dedicated to sustainability, decentralized trust, and Sharia-compliant procurement.
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

      {/* Hub71 / Investor Evaluator Hub Section (HIGH VALUE REDIRECT) */}
      <section id="sandbox" className="py-20 relative z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-950/80 backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="space-y-6 max-w-xl">
              <span className="px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/40 text-xs font-bold text-cyan-400 tracking-wider uppercase inline-block">
                Hub71 Evaluator Sandbox
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
                We Build Capable Products, Not Just Slides.
              </h2>
              <p className="text-slate-300 leading-relaxed font-light">
                Our core systems are trusted and validated at a state level. Through our corporate partners, NAK Group software is used to service two massive anchor organizations: **Transnet Port Terminals** (South Africa's national logistics parastatal) and the **South African Department of Education** (provincial state government). 
              </p>
              <p className="text-slate-400 text-sm font-light">
                Click to explore our high-fidelity logistics simulation engine showcasing real-time IoT cargo telemetry, predictive anomaly routing, and automated ERP maintenance work-orders.
              </p>
            </div>
            <div className="w-full lg:w-auto shrink-0 space-y-4">
              <a 
                href="https://transnet-predictive-maintenance-portal.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full lg:w-80 block text-center bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-black py-5 px-8 rounded-2xl hover:opacity-90 transition shadow-[0_0_20px_rgba(6,182,212,0.3)] text-lg"
              >
                Launch Durban Port Demo &rarr;
              </a>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center">
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-1">State-Level Audit Compliance</span>
                <span className="text-sm text-emerald-400 font-semibold">🔒 100% Certified Audit Logging Passed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Our Core SaaS Portfolio</h2>
            <p className="text-xl text-slate-400 font-light">
              Live, stabilized software platforms built and maintained under our rigid 3-Week Venture Rotation Cycle. We bring true entrepreneurial skin-in-the-game to our custom clients because we operate these active assets ourselves.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {/* Live App 1: Freighter Africa */}
            <a href="https://freighter-africa.vercel.app/" target="_blank" rel="noopener noreferrer" className="group block p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-emerald-500/50 hover:to-teal-500/50 transition duration-500">
              <div className="h-full bg-slate-900 rounded-[22px] p-8 border border-white/5 group-hover:border-transparent transition duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-3xl border border-emerald-500/20">🚚</div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live
                    </span>
                    <span className="bg-cyan-500/20 text-cyan-300 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-widest">
                      Climate Tech / Green Logistics
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">Freighter Africa</h3>
                <p className="text-slate-400 mb-6 font-light leading-relaxed">
                  Decarbonizing industrial logistics trade corridors. Our smart drayage load board coordinates high-volume cargo routing, eliminating "deadhead" (empty return) miles to cut fuel use, reduce diesel emissions, and slash transport costs by 30%.
                </p>
                <div className="text-cyan-400 font-semibold group-hover:translate-x-2 transition duration-300 flex items-center">
                  Visit Platform <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </a>

            {/* Live App 2: AquaFlow */}
            <a href="https://ucp-aqua-flow.vercel.app/" target="_blank" rel="noopener noreferrer" className="group block p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-blue-500/50 hover:to-cyan-500/50 transition duration-500">
              <div className="h-full bg-slate-900 rounded-[22px] p-8 border border-white/5 group-hover:border-transparent transition duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-3xl border border-blue-500/20">💧</div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live
                    </span>
                    <span className="bg-blue-500/20 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-widest">
                      Climate Tech / Infrastructure
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">AquaFlow IoT</h3>
                <p className="text-slate-400 mb-6 font-light leading-relaxed">
                  Mitigating global water scarcity risks. AquaFlow connects directly to real-time IoT smart meter infrastructure across major property portfolios to detect burst pipes within 5 minutes, prevent municipal Non-Revenue Water waste, and run automated utility rationing algorithms.
                </p>
                <div className="text-blue-400 font-semibold group-hover:translate-x-2 transition duration-300 flex items-center">
                  Visit Platform <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </a>

            {/* Live App 3: VouchVault */}
            <a href="https://vouchvault.addworkssibanda.workers.dev" target="_blank" rel="noopener noreferrer" className="group block p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-purple-500/50 hover:to-indigo-500/50 transition duration-500">
              <div className="h-full bg-slate-900 rounded-[22px] p-8 border border-white/5 group-hover:border-transparent transition duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-3xl border border-purple-500/20">🔒</div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live
                    </span>
                    <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-widest">
                      Web3 Trust / DID
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">VouchVault</h3>
                <p className="text-slate-400 mb-6 font-light leading-relaxed">
                  Tamper-proof hiring credential validation. A decentralized, cryptographically secure background screening vault. It maps digital footprints, IP endpoints, and LinkedIn validations to generate immutable candidate reference history, establishing a lightweight Decentralized Identity (DID) trust layer.
                </p>
                <div className="text-purple-400 font-semibold group-hover:translate-x-2 transition duration-300 flex items-center">
                  Visit Platform <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </a>

            {/* Live App 4: RentIt */}
            <a href="https://rent-it-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="group block p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-pink-500/50 hover:to-rose-500/50 transition duration-500">
              <div className="h-full bg-slate-900 rounded-[22px] p-8 border border-white/5 group-hover:border-transparent transition duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center text-3xl border border-pink-500/20">🔄</div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live
                    </span>
                    <span className="bg-pink-500/20 text-pink-300 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-widest">
                      Sustainability / Circular Economy
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">RentIt</h3>
                <p className="text-slate-400 mb-6 font-light leading-relaxed">
                  Promoting access over ownership. RentIt is a hyper-local peer-to-peer (P2P) asset sharing marketplace for tools, heavy machinery, and industrial gear. Promoting a functional circular economy, it reduces manufacturing waste, carbon footprints, and hyper-local asset underutilization.
                </p>
                <div className="text-pink-400 font-semibold group-hover:translate-x-2 transition duration-300 flex items-center">
                  Visit Platform <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </a>
          </div>

          {/* Core Assets In Development & Stealth */}
          <div className="border-t border-white/10 pt-16">
            <h3 className="text-2xl font-bold mb-10 text-center text-slate-300 uppercase tracking-widest">In-Development & Enterprise Ecosystems</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-slate-900/40 rounded-2xl border border-white/5 hover:border-cyan-500/10 transition duration-300">
                <div className="text-cyan-400 text-2xl mb-3">💵</div>
                <h4 className="font-bold text-white mb-2">Demandz (SME FinTech)</h4>
                <p className="text-sm text-slate-400 font-light">
                  Sharia-compliant group-buying coordination marketplace. Pools SME buying power to trigger reverse-auctions, securing 20% cost reductions with automated conditional escrow (*Murabaha* aligned).
                </p>
              </div>
              <div className="p-8 bg-slate-900/40 rounded-2xl border border-white/5 hover:border-blue-500/10 transition duration-300">
                <div className="text-blue-400 text-2xl mb-3">🤝</div>
                <h4 className="font-bold text-white mb-2">AugmentMyTeam</h4>
                <p className="text-sm text-slate-400 font-light">
                  Seamlessly bridging timezone gaps. Connects high-velocity GCC tech startups with pre-vetted, elite, nearshore South African developers operating on 1-hour timezone delta to maximize runway efficiency.
                </p>
              </div>
              <div className="p-8 bg-slate-900/40 rounded-2xl border border-white/5 hover:border-purple-500/10 transition duration-300">
                <div className="text-purple-400 text-2xl mb-3">🗳️</div>
                <h4 className="font-bold text-white mb-2">Africa Trade Ledger (ATEP)</h4>
                <p className="text-sm text-slate-400 font-light">
                  Digitizing trade corridors between the GCC, China, and Africa. Standardizes compliance workflows, customs validation APIs, and automated multi-party cryptographic escrow settlements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The South African Advantage Section (Nearshoring Arbitrage) */}
      <section id="why-us" className="py-24 relative z-10 bg-slate-900/40 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">The Nearshore Advantage</h2>
            <p className="text-xl text-slate-400 font-light">
              We leverage the strategic, time-zone aligned South Africa-GCC corridor to engineer premium platforms with unprecedented cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-slate-950/80 rounded-3xl border border-white/5">
              <span className="text-4xl block mb-6">⏰</span>
              <h3 className="text-xl font-bold mb-3 text-white">1-Hour Timezone Sync</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                South Africa (GMT+2) operates exactly 1 hour behind the UAE (GMT+4). We share your working day entirely—enabling instant communication and real-time sprint alignments with zero midnight stress.
              </p>
            </div>
            <div className="p-8 bg-slate-950/80 rounded-3xl border border-white/5">
              <span className="text-4xl block mb-6">📉</span>
              <h3 className="text-xl font-bold mb-3 text-white">60% Cost Arbitrage</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Leverage immense structural currency arbitrage. Access world-class, English-speaking senior engineering talent at a 60% reduction in burn rates compared to on-site tech acquisitions in Dubai or Riyadh.
              </p>
            </div>
            <div className="p-8 bg-slate-950/80 rounded-3xl border border-white/5">
              <span className="text-4xl block mb-6">🛡️</span>
              <h3 className="text-xl font-bold mb-3 text-white">The Venture Engine Core</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                We utilize our own pre-built library of secure JWT authentication, encrypted audit-logging modules, and AI filters to deploy state-level compliant enterprise products 40% faster than traditional developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Agency Services Section */}
      <section id="services" className="py-24 relative z-10 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tighter">Enterprise Custom Product Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-slate-950 rounded-3xl border border-white/5 shadow-2xl hover:border-cyan-500/30 transition duration-300">
              <div className="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 text-2xl border border-cyan-500/20">⚙️</div>
              <h3 className="text-xl font-bold mb-4 text-white">Complex Transactional Systems</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                We specialize in architecting multi-party transaction structures, automated smart escrow systems, high-frequency logistics API mapping, and custom IoT sensor aggregations.
              </p>
            </div>
            <div className="p-8 bg-slate-950 rounded-3xl border border-white/5 shadow-2xl hover:border-blue-500/30 transition duration-300">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 text-2xl border border-blue-500/20">👥</div>
              <h3 className="text-xl font-bold mb-4 text-white">Fractional Technical Leadership</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                Secure enterprise-grade technical architects or fractional CTO consulting to guide platform scaling, clean database migrations, security hardening, and code audit readiness.
              </p>
            </div>
            <div className="p-8 bg-slate-950 rounded-3xl border border-white/5 shadow-2xl hover:border-purple-500/30 transition duration-300">
              <div className="w-14 h-14 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-6 text-2xl border border-purple-500/20">🔒</div>
              <h3 className="text-xl font-bold mb-4 text-white">Sovereign Integrity & RegTech</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                We build secure-by-default backends with automated Firestore auditing trails, ensuring absolute data compliance with ADGM and KSA regional data protection legislations.
              </p>
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
              Partner with a studio that designs, tests, and deploys high-impact digital solutions on an institutional scale.
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