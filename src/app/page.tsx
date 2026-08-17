"use client";

import React, { useState } from 'react';
import './globals.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Clean, unified form states
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [productInterest, setProductInterest] = useState("Custom Software Development (Agency)");
  const [budgetRange, setBudgetRange] = useState("Undetermined");
  const [contactMessage, setContactMessage] = useState("");
  
  // Submission HUD feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionSuccess(false);
    setSubmissionError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          phone: contactPhone,
          company: contactCompany,
          productInterest: productInterest,
          budget: budgetRange,
          message: contactMessage,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionSuccess(true);
        // Clear form
        setContactName("");
        setContactEmail("");
        setContactPhone("");
        setContactCompany("");
        setContactMessage("");
        setProductInterest("Custom Software Development (Agency)");
        setBudgetRange("Undetermined");
      } else {
        setSubmissionError(data.error || "Failed to submit lead. Please try again.");
      }
    } catch (err) {
      setSubmissionError("Network error. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-950 text-zinc-100 font-sans antialiased scroll-smooth selection:bg-emerald-500 selection:text-white">
      {/* Clean, Subtle Backlight Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-950/10 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-amber-950/10 rounded-full filter blur-[120px] animation-delay-2000"></div>
      </div>

      {/* Navigation – Ultra Clean, Razor Sharp */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20 backdrop-blur-md bg-slate-950/60 sticky top-0 border-b border-zinc-900">
        <div className="text-2xl font-black text-white tracking-tight flex items-center gap-2.5 group cursor-pointer">
          <img src="/NAK_Tech_Group_Logo.png" alt="NAK Tech Group Logo" className="w-8 h-8 object-contain" />
          <span className="bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent">NAK</span>
          <span className="text-emerald-500 font-extrabold text-[11px] tracking-[0.2em] uppercase border border-emerald-500/30 rounded-md px-2.5 py-0.5 bg-emerald-950/20 backdrop-blur shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 group-hover:border-emerald-500/60 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]">
            TECH GROUP
          </span>
        </div>
        
        <div className="hidden md:flex space-x-10">
          <a href="#services" className="hover:text-emerald-400 transition-colors font-medium text-xs uppercase tracking-widest text-zinc-400">Services</a>
          <a href="#portfolio" className="hover:text-emerald-400 transition-colors font-medium text-xs uppercase tracking-widest text-zinc-400">Venture Portfolio</a>
          <a href="#sandbox" className="hover:text-emerald-400 transition-colors font-medium text-xs uppercase tracking-widest text-zinc-400">Evaluator Hub</a>
          <a href="#why-us" className="hover:text-emerald-400 transition-colors font-medium text-xs uppercase tracking-widest text-zinc-400">The Edge</a>
        </div>
        
        <div className="hidden md:block">
           <a href="#contact" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-bold uppercase tracking-widest text-zinc-200 rounded-full group bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-zinc-800">
            <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-zinc-950 rounded-full group-hover:bg-opacity-0">
              Inquire Now
            </span>
          </a>
        </div>

        <button 
          className="md:hidden text-zinc-400 hover:text-zinc-100 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-24 left-0 right-0 bg-zinc-950/98 backdrop-blur-2xl border-b border-zinc-900 p-6 flex flex-col space-y-4 z-50">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Services</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Venture Portfolio</a>
          <a href="#sandbox" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Evaluator Hub</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-zinc-900 text-center border border-zinc-800 text-emerald-400 px-4 py-3 rounded-xl font-bold uppercase tracking-widest text-xs">
            Inquire Now
          </a>
        </div>
      )}

      {/* Hero Section – Minimalist, Clean Obsidian Theme */}
      <header className="container mx-auto px-6 py-28 text-center md:py-40 relative z-10">
        <div className="inline-flex mb-6 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-semibold text-emerald-400 tracking-widest uppercase">
          Sovereign Water Intelligence &bull; Climate Tech &bull; Nearshore R&D
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-none text-white">
          Sovereign <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-200">
            Resource Intelligence.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          NAK Tech Group is a dual-engine venture studio. We power **AquaFlow**, the GCC’s leading IoT water security platform, while providing elite nearshore engineering to high-growth GCC startups.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#portfolio" className="bg-zinc-100 hover:bg-white text-zinc-950 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition duration-300 shadow-xl border border-white">
            Explore AquaFlow
          </a>
          <a href="#contact" className="bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest border border-zinc-800 transition backdrop-blur-sm">
            Partner with us
          </a>
        </div>
      </header>

      {/* Hub71 / Evaluator Hub Sandbox Section */}
      <section id="sandbox" className="py-20 relative z-10 border-y border-zinc-900 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-zinc-800/80 shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="space-y-6 max-w-xl">
              <span className="px-3 py-1 rounded-md border border-emerald-500/20 bg-emerald-500/5 text-xs font-bold text-emerald-400 tracking-wider uppercase inline-block">
                Evaluator Sandbox
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Validating Technical Capacity at State Level.
              </h2>
              <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
                AquaFlow is built on the NAK "Venture Engine Core"—the same battle-tested architecture trusted at a state-level to service massive entities like **Transnet Port Terminals** and the **Department of Education**.
              </p>
              <p className="text-zinc-500 text-xs font-light">
                Our IoT water security telemetry and predictive maintenance systems are engineered to ADGM and GCC data sovereignty standards.
              </p>
            </div>
            <div className="w-full lg:w-auto shrink-0 space-y-4">
              <a 
                href="https://transnet-predictive-maintenance-portal.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full lg:w-76 block text-center bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black py-4.5 px-8 rounded-xl transition duration-300 shadow-lg text-sm uppercase tracking-widest"
              >
                Launch Staging Demo &rarr;
              </a>
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-1">Audit Compliance Passed</span>
                <span className="text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 100% Secure JWT Ledger Verification
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Venture Portfolio</h2>
            <p className="text-lg text-zinc-400 font-light">
              We specialize in high-integrity engineering for critical infrastructure and enterprise talent corridors.
            </p>
          </div>

          <div className="space-y-8 mb-20">
            {/* Flagship Product: AquaFlow (Highlighted) */}
            <div className="max-w-5xl mx-auto">
              <a href="https://ucp-aqua-flow.vercel.app/" target="_blank" rel="noopener noreferrer" className="group block p-1 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-zinc-800 to-zinc-950 hover:from-emerald-500/40 transition duration-500">
                <div className="bg-zinc-950 rounded-[calc(1.5rem-1px)] p-10 md:p-14 border border-emerald-500/10 group-hover:border-emerald-500/30 transition duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-[80px] -mr-32 -mt-32"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <img src="/AquaFlow_Logo.png" alt="AquaFlow Logo" className="w-12 h-12 object-contain" />
                      <div className="flex flex-col items-end gap-2">
                        <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Flagship Venture
                        </span>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                          Sovereign Water Intelligence
                        </span>
                      </div>
                    </div>
                    
                    <div className="max-w-2xl">
                      <h3 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight">AquaFlow IoT</h3>
                      <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-10">
                        Protecting the GCC’s most precious resource. AquaFlow integrates AI-driven IoT smart meter telemetry to isolate infrastructure leaks in under 5 minutes, mitigating Non-Revenue Water (NRW) loss at scale.
                      </p>
                      <div className="inline-flex items-center gap-3 text-emerald-400 font-black text-sm uppercase tracking-[0.2em] group-hover:gap-5 transition-all duration-300">
                        Launch Global Platform <span>&rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Secondary Highlight: AugmentMyTeam */}
            <div className="max-w-5xl mx-auto">
              <a href="https://augmentmyteam.com/" target="_blank" rel="noopener noreferrer" className="group block p-0.5 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 hover:from-zinc-700 hover:to-zinc-900 transition duration-300">
                <div className="bg-zinc-950 rounded-2xl p-8 md:p-12 border border-zinc-900 group-hover:border-transparent transition duration-300">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-3xl">🚀</div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                        Active Ecosystem
                      </span>
                      <span className="text-[9px] font-medium text-zinc-500 uppercase tracking-widest">
                        Nearshore R&D Corridor
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">AugmentMyTeam</h3>
                  <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
                    Providing high-growth GCC startups with elite South African software engineers. 100% timezone sync with 60% operational cost arbitrage.
                  </p>
                  <div className="text-zinc-300 group-hover:text-blue-400 text-sm font-bold uppercase tracking-widest transition duration-300 flex items-center gap-2">
                    Enter Portal <span>&rarr;</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* In Development Cards – Clean Grid */}
          <div className="border-t border-zinc-900 pt-16">
            <h3 className="text-xs font-black mb-10 text-center text-zinc-500 uppercase tracking-widest">In Development & Stealth Channels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stealth 1: VouchVault */}
              <div className="p-8 bg-zinc-950 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition duration-300">
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Stealth / Web3</div>
                <h4 className="font-bold text-white mb-2 text-base">VouchVault</h4>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  Cryptographically signed candidate verification. Building the decentralized identity (DID) trust layer for the global labor market.
                </p>
              </div>
              
              {/* Stealth 2: Freighter Africa */}
              <div className="p-8 bg-zinc-950 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition duration-300">
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Stealth / Logistics</div>
                <h4 className="font-bold text-white mb-2 text-base">Freighter Africa</h4>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  Decarbonizing industrial shipping via automated load-matching, eliminating empty return miles to slash Scope 3 emissions.
                </p>
              </div>

              <div className="p-8 bg-zinc-950 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition duration-300">
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Development / FinTech</div>
                <h4 className="font-bold text-white mb-2 text-base">Demandz</h4>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  Sharia-compliant procurement demand coordination. Pools SME buying force to execute programmatic reverse-auctions.
                </p>
              </div>

              <div className="p-8 bg-zinc-950 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition duration-300">
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Development / Trade</div>
                <h4 className="font-bold text-white mb-2 text-base">Africa Trade (ATEP)</h4>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  Sovereign multi-party trade ledger for GCC-Africa trade corridors, digitizing export compliance and programmable escrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Edge Section (Timezone/Arbitrage advantages) */}
      <section id="why-us" className="py-24 relative z-10 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">The Nearshore Edge</h2>
            <p className="text-lg text-zinc-400 font-light">
              We leverage the strategic, time-zone aligned South Africa-GCC corridor to engineer world-class platforms with unprecedented capital efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-zinc-950 rounded-2xl border border-zinc-900">
              <span className="text-3xl block mb-6">⏰</span>
              <h3 className="text-lg font-bold mb-3 text-white">1-Hour Timezone Sync</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                South Africa (GMT+2) operates exactly 1 hour behind the UAE (GMT+4). We share your working hours entirely—enabling instant communication, real-time standups, and zero midnight operational strain.
              </p>
            </div>
            <div className="p-8 bg-zinc-950 rounded-2xl border border-zinc-900">
              <span className="text-3xl block mb-6">💰</span>
              <h3 className="text-lg font-bold mb-3 text-white">60% Cost Arbitrage</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Unlock deep, structural financial efficiency. Access native English-speaking, enterprise-hardened software engineers at a 60% reduction in burn rate compared to acquiring on-site developers in Dubai or Riyadh.
              </p>
            </div>
            <div className="p-8 bg-zinc-950 rounded-2xl border border-zinc-900">
              <span className="text-3xl block mb-6">⚙️</span>
              <h3 className="text-lg font-bold mb-3 text-white">The Venture Engine Core</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                We develop on our own proprietary framework of JWT authentication middleware, secure audit trails, and data filters, deploying stable, secure, and compliant products 40% faster than traditional developer cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-white">Custom Product Engineering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-zinc-950 rounded-2xl border border-zinc-900 shadow-xl hover:border-zinc-800 transition duration-300">
              <div className="w-12 h-12 bg-zinc-900 text-zinc-100 rounded-xl flex items-center justify-center mb-6 text-xl border border-zinc-800">🏗️</div>
              <h3 className="text-lg font-bold mb-4 text-white">Complex Transaction Ecosystems</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">We engineer highly transactional backends, multi-party automated escrow pipelines, high-frequency IoT tracking nodes, and secure, custom ERP compliance architectures.</p>
            </div>
            <div className="p-8 bg-zinc-950 rounded-2xl border border-zinc-900 shadow-xl hover:border-zinc-800 transition duration-300">
              <div className="w-12 h-12 bg-zinc-900 text-zinc-100 rounded-xl flex items-center justify-center mb-6 text-xl border border-zinc-800">🧠</div>
              <h3 className="text-lg font-bold mb-4 text-white">Fractional Technical Leadership</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">Seamlessly inject senior expertise. We provide elite engineering leads, technical database refactoring sprints, and fractional CTO consulting to navigate complex architectural scale.</p>
            </div>
            <div className="p-8 bg-zinc-950 rounded-2xl border border-zinc-900 shadow-xl hover:border-zinc-800 transition duration-300">
              <div className="w-12 h-12 bg-zinc-900 text-zinc-100 rounded-xl flex items-center justify-center mb-6 text-xl border border-zinc-800">🛡️</div>
              <h3 className="text-lg font-bold mb-4 text-white">Sovereign Data Security</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">Hardened, secure-by-default logic with automated audit tracking. We ensure full structural compliance with strict GCC, ADGM, and South African local data sovereignty regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding & Contact Section (Integrated Resend API + HubSpot mapping) */}
      <footer id="contact" className="relative py-28 overflow-hidden border-t border-zinc-900 bg-zinc-950">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">Ready to Partner?</h2>
            <p className="text-lg text-zinc-400 font-light">
              Secure an elite engineering team trained under NAK Tech Group's production standards to design, build, and deploy your next-generation platform.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 shadow-2xl">
            <h3 className="font-extrabold text-2xl mb-2 text-center text-white">Technical Inquiry & Onboarding</h3>
            <p className="text-xs text-zinc-500 font-light text-center mb-8">This form submits directly to our executive mailing list and securely registers your profile in our CRM.</p>
            
            {submissionSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4 animate-fadeIn">
                <span className="text-4xl block">✨</span>
                <h4 className="font-bold text-lg text-white">Lead Successfully Injected!</h4>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  Thank you! Your requirements have been dispatched to our team. We will review your technical parameters and reach out shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Your Corporate Email *</label>
                    <input 
                      type="email" 
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      value={contactCompany}
                      onChange={(e) => setContactCompany(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300" 
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300" 
                      placeholder="+27 (82) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Target Product/Interest</label>
                  <select 
                    value={productInterest}
                    onChange={(e) => setProductInterest(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300"
                  >
                    <option value="Custom Software Development (Agency)">Custom Dev (Agency)</option>
                    <option value="AugmentMyTeam">AugmentMyTeam (Talent)</option>
                    <option value="Freighter Africa">Freighter Africa (Logistics)</option>
                    <option value="RentIt">RentIt (Circular Economy)</option>
                    <option value="AquaFlow">AquaFlow (Climate IoT)</option>
                    <option value="Demandz">Demandz (Sharia FinTech)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Project Scope & Requirements *</label>
                  <textarea 
                    required
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300 resize-none" 
                    placeholder="Describe your technical specs, expected architecture, or team size requirement..."
                  />
                </div>

                {submissionError && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-center text-xs text-red-400 font-medium">
                    ⚠️ {submissionError}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-950 disabled:text-emerald-800 text-zinc-950 font-black py-4 rounded-xl transition duration-300 shadow-md text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-zinc-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Injecting Lead Parameters...
                    </>
                  ) : (
                    "Submit Secured Inquiry & Onboard"
                  )}
                </button>
              </form>
            )}
          </div>
          <p className="text-zinc-500 mt-12 text-center text-xs tracking-wider">
            OR INQUIRE DIRECTLY VIA <a href="mailto:hello@naktechgroup.com" className="text-emerald-400 hover:underline">HELLO@NAKTECHGROUP.COM</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
