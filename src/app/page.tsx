import React, { useState } from 'react';
import './App.css'; // Assuming you have a basic CSS file for Tailwind imports

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased scroll-smooth">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <div className="text-2xl font-bold text-blue-600">[AgencyLogo]</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-blue-600 transition font-medium">Services</a>
          <a href="#portfolio" className="hover:text-blue-600 transition font-medium">Portfolio</a>
          <a href="#why-us" className="hover:text-blue-600 transition font-medium">Why South Africa?</a>
        </div>
        
        <div className="hidden md:block">
           <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-lg p-4 flex flex-col space-y-4 z-20 border-t border-slate-100">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Services</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Portfolio</a>
          <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Why South Africa?</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center mt-4">
            Let's Talk
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center md:py-32 relative">
        {/* Abstract background shape */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
          Build the Future. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Without the Friction.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          We build scalable SaaS platforms and custom software for visionary companies in the GCC and globally. Time-zone aligned engineering excellence from South Africa.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl inline-flex justify-center items-center">
            Start Your Project
          </a>
          <a href="#portfolio" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg border border-slate-200 hover:bg-slate-50 transition shadow-sm hover:shadow-md inline-flex justify-center items-center">
            View Portfolio
          </a>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-inner">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Custom SaaS & Software</h3>
              <p className="text-slate-600 leading-relaxed">From MVP to enterprise scale. We build robust, scalable web and mobile applications tailored to your exact business needs.</p>
            </div>
            {/* Service 2 */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-inner">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Team Augmentation</h3>
              <p className="text-slate-600 leading-relaxed">Scale fast. Seamlessly augment your in-house team with elite, time-zone aligned South African engineers.</p>
            </div>
            {/* Service 3 */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-inner">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">UI/UX & Strategy</h3>
              <p className="text-slate-600 leading-relaxed">We don't just code. We design intuitive, high-conversion digital experiences that your users will love and engage with.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why South Africa */}
      <section id="why-us" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">The South Africa Advantage</h2>
            <p className="text-xl text-slate-600">
              Why leading GCC and Global startups are choosing South African engineering teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
               <div className="flex items-center space-x-4 mb-4">
                 <div className="text-3xl">⏱️</div>
                 <h3 className="text-xl font-bold text-slate-800">Zero Time-Zone Friction</h3>
               </div>
               <p className="text-slate-600">SAST (GMT+2) is perfectly aligned with the GCC (GMT+4) and Europe. We work when you work. No midnight standups or massive communication delays.</p>
             </div>
             <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
               <div className="flex items-center space-x-4 mb-4">
                 <div className="text-3xl">💰</div>
                 <h3 className="text-xl font-bold text-slate-800">Cost-Effective Excellence</h3>
               </div>
               <p className="text-slate-600">Access Silicon Valley-level talent at a fraction of the cost of hiring local GCC or European engineers, freeing up your runway.</p>
             </div>
             <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
               <div className="flex items-center space-x-4 mb-4">
                 <div className="text-3xl">🗣️</div>
                 <h3 className="text-xl font-bold text-slate-800">Cultural Alignment</h3>
               </div>
               <p className="text-slate-600">Native English proficiency and deep alignment with Western and GCC business standards. We integrate into your culture seamlessly.</p>
             </div>
             <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
               <div className="flex items-center space-x-4 mb-4">
                 <div className="text-3xl">🚀</div>
                 <h3 className="text-xl font-bold text-slate-800">Product-Led Mindset</h3>
               </div>
               <p className="text-slate-600">We don't just code blindly. As a venture studio building our own products, we bring entrepreneurial rigor to every feature we build for you.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Products/Portfolio */}
      <section id="portfolio" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Venture Portfolio</h2>
            <p className="text-xl text-slate-400">
              We aren't just an agency; we build our own platforms. We bring that same product-led rigor to your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Portfolio 1 */}
            <div className="p-10 bg-slate-800 rounded-3xl border border-slate-700 hover:border-blue-500 transition duration-300 group">
              <div className="bg-blue-500/10 w-fit p-3 rounded-xl mb-6 group-hover:bg-blue-500/20 transition">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition">FractionalHub</h3>
              <p className="text-slate-400 leading-relaxed">Connecting global companies with elite fractional talent across tech and operations. Scale smarter.</p>
            </div>
            
            {/* Portfolio 2 */}
            <div className="p-10 bg-slate-800 rounded-3xl border border-slate-700 hover:border-cyan-500 transition duration-300 group">
              <div className="bg-cyan-500/10 w-fit p-3 rounded-xl mb-6 group-hover:bg-cyan-500/20 transition">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition">Freighter Africa</h3>
              <p className="text-slate-400 leading-relaxed">Revolutionizing regional logistics with a smart freight load board and marketplace linking shippers and carriers.</p>
            </div>

            {/* Portfolio 3 */}
            <div className="p-10 bg-slate-800 rounded-3xl border border-slate-700 hover:border-purple-500 transition duration-300 group">
              <div className="bg-purple-500/10 w-fit p-3 rounded-xl mb-6 group-hover:bg-purple-500/20 transition">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition">RentIt</h3>
              <p className="text-slate-400 leading-relaxed">The premier hyper-local neighborhood rental marketplace for everything you need, fostering a circular economy.</p>
            </div>

            {/* Portfolio 4 */}
            <div className="p-10 bg-slate-800 rounded-3xl border border-slate-700 hover:border-emerald-500 transition duration-300 group">
              <div className="bg-emerald-500/10 w-fit p-3 rounded-xl mb-6 group-hover:bg-emerald-500/20 transition">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition">Intent/Demandz</h3>
              <p className="text-slate-400 leading-relaxed">A next-generation demand-driven marketplace flipping the traditional bulk-buying and B2B procurement model.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <footer id="contact" className="bg-blue-600 text-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build something great?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Book a free technical consultation with our engineering team today and let's map out your next product roadmap.
          </p>
          
          {/* HubSpot Form Container */}
          <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-2xl text-left text-slate-900 mb-8 transform transition hover:-translate-y-1">
            <h3 className="font-bold text-2xl mb-2 text-center text-slate-800">Get in Touch</h3>
            <p className="text-sm text-slate-500 mb-6 text-center">
              Fill out the form below or email us directly.
            </p>
            
            {/* 
              DEVELOPER NOTE: 
              When you get your HubSpot embed code, replace this div entirely with the HubSpot script.
            */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
                <textarea className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition h-24" placeholder="Tell us about what you want to build..."></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-md">
                Send Message
              </button>
            </form>
          </div>

          <p className="text-blue-200">
            or email us at <a href="mailto:hello@youragency.com" className="font-bold text-white hover:underline transition">hello@youragency.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;