"use client";

import React, { useState } from 'react';
import './globals.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased scroll-smooth">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <div className="text-2xl font-bold text-blue-600">[AgencyLogo]</div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-blue-600 transition font-medium">Services</a>
          <a href="#portfolio" className="hover:text-blue-600 transition font-medium">Venture Portfolio</a>
          <a href="#why-us" className="hover:text-blue-600 transition font-medium">Why South Africa?</a>
        </div>
        
        <div className="hidden md:block">
           <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg">
            Let's Talk
          </a>
        </div>

        <button 
          className="md:hidden text-slate-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-lg p-4 flex flex-col space-y-4 z-20 border-t border-slate-100">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Services</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Venture Portfolio</a>
          <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Why South Africa?</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center mt-4">
            Let's Talk
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center md:py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
          Build the Future. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Without the Friction.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          We are a Venture Studio and Enterprise Custom Dev Agency. We build scalable SaaS platforms and RegTech ecosystems for visionary companies globally, powered by elite South African engineering.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl inline-flex justify-center items-center">
            Start Your Project
          </a>
          <a href="#portfolio" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg border border-slate-200 hover:bg-slate-50 transition shadow-sm hover:shadow-md inline-flex justify-center items-center">
            View Our Ventures
          </a>
        </div>
      </header>

      {/* Products/Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Venture Portfolio</h2>
            <p className="text-xl text-slate-400">
              We aren't just an agency; we are a Venture Studio. We bring product-led rigor to our client work because we build, scale, and manage our own massive platforms across multiple sectors.
            </p>
          </div>

          {/* Category: B2B SaaS & AI */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-blue-400 border-b border-slate-800 pb-2">Enterprise SaaS & AI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300">
                <h4 className="text-xl font-bold mb-2 text-white">FractionalHub</h4>
                <p className="text-slate-400 text-sm">Connecting global startups with elite, time-zone aligned fractional tech talent and engineering leads.</p>
              </div>
              <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300">
                <h4 className="text-xl font-bold mb-2 text-white">Data Analyst AI</h4>
                <p className="text-slate-400 text-sm">A secure, fractional AI data scientist that turns complex corporate database queries into instant visual insights.</p>
              </div>
              <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300">
                <h4 className="text-xl font-bold mb-2 text-white">HireVerify Pro</h4>
                <p className="text-slate-400 text-sm">An automated, cryptographically secure hiring reference platform built for high-volume recruitment agencies.</p>
              </div>
            </div>
          </div>

          {/* Category: Marketplaces & Trade */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-emerald-400 border-b border-slate-800 pb-2">Marketplaces & Global Trade</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-emerald-500 transition duration-300">
                <h4 className="text-xl font-bold mb-2 text-white">Africa Trade Enablement</h4>
                <p className="text-slate-400 text-sm">A digital corridor connecting GCC & EU buyers directly to verified African export suppliers with built-in Escrow.</p>
              </div>
              <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-emerald-500 transition duration-300">
                <h4 className="text-xl font-bold mb-2 text-white">Freighter Africa</h4>
                <p className="text-slate-400 text-sm">A smart logistics load board eliminating empty miles for regional carriers and reducing costs for B2B shippers.</p>
              </div>
              <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-emerald-500 transition duration-300">
                <h4 className="text-xl font-bold mb-2 text-white">Intent / Demandz</h4>
                <p className="text-slate-400 text-sm">A reverse-auction, demand-driven procurement engine allowing businesses to pool buying power for massive discounts.</p>
              </div>
            </div>
          </div>

          {/* Category: GovTech, RegTech & IoT */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-purple-400 border-b border-slate-800 pb-2">GovTech, RegTech & Civic IoT</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500 transition duration-300">
                <h4 className="text-xl font-bold mb-2 text-white">AquaFlow IoT</h4>
                <p className="text-slate-400 text-sm">Real-time municipal and property water management. Leak detection, smart metering, and automated rationing logic.</p>
              </div>
              <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500 transition duration-300">
                <h4 className="text-xl font-bold mb-2 text-white">SIU Investigator Suite</h4>
                <p className="text-slate-400 text-sm">A sovereign ecosystem of 20+ secure micro-apps for digital forensics, chain of custody, and financial link analysis.</p>
              </div>
              <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500 transition duration-300">
                <h4 className="text-xl font-bold mb-2 text-white">ComplianceCore (RegTech)</h4>
                <p className="text-slate-400 text-sm">Automated FICA, KYC, and B-BBEE supplier compliance tracking for mid-market financial and legal institutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">Custom Agency Delivery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Enterprise Solutions</h3>
              <p className="text-slate-600 leading-relaxed">We build complex, secure web and mobile applications—from logistics ERPs to FinTech compliance portals.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Team Augmentation</h3>
              <p className="text-slate-600 leading-relaxed">Seamlessly augment your in-house team with elite, time-zone aligned South African engineers.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">🛡️</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Data Sovereignty</h3>
              <p className="text-slate-600 leading-relaxed">Locally hosted, strictly permissioned systems ensuring your PII and corporate data never leave the jurisdiction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <footer id="contact" className="bg-blue-600 text-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build something great?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Whether you need a custom build, or want to integrate with one of our existing platforms, let's talk.
          </p>
          <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-2xl text-left text-slate-900 mb-8">
            <h3 className="font-bold text-2xl mb-2 text-center text-slate-800">Get in Touch</h3>
            <p className="text-sm text-slate-500 mb-6 text-center">Fill out the form below or email us directly.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
            </form>
          </div>
          <p className="text-blue-200">
            or email us at <a href="mailto:hello@youragency.com" className="font-bold text-white hover:underline">hello@youragency.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}