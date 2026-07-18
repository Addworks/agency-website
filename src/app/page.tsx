import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">[AgencyLogo]</div>
        <div className="hidden md:flex space-x-8">
          <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="#portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
          <Link href="#why-us" className="hover:text-blue-600 transition">Why South Africa?</Link>
        </div>
        <Link href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
          Let&apos;s Talk
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center md:py-32">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900">
          Build the Future. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Without the Friction.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto">
          We build scalable SaaS platforms and custom software for visionary companies in the GCC and globally. Time-zone aligned engineering excellence from South Africa.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg inline-block">
            Start Your Project
          </Link>
          <Link href="#portfolio" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg border border-slate-200 hover:bg-slate-50 transition shadow-sm inline-block">
            View Portfolio
          </Link>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="bg-white py-20 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">💻</div>
              <h3 className="text-xl font-bold mb-4">Custom SaaS & Software</h3>
              <p className="text-slate-600">From MVP to enterprise scale. We build robust web and mobile applications tailored to your exact business needs.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-6 text-2xl">🤝</div>
              <h3 className="text-xl font-bold mb-4">Team Augmentation</h3>
              <p className="text-slate-600">Scale fast. Seamlessly augment your in-house team with elite, time-zone aligned South African engineers.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 text-2xl">🎨</div>
              <h3 className="text-xl font-bold mb-4">UI/UX & Strategy</h3>
              <p className="text-slate-600">We design intuitive, high-conversion digital experiences that your users will love and engage with.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why South Africa */}
      <section id="why-us" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The South Africa Advantage</h2>
            <p className="text-lg text-slate-600 mb-12">
              Why leading GCC and Global startups are choosing South African engineering teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="p-6 bg-white rounded-xl border border-slate-200">
               <h3 className="text-xl font-bold mb-2">⏱️ Zero Time-Zone Friction</h3>
               <p className="text-slate-600">SAST (GMT+2) is perfectly aligned with the GCC (GMT+4) and Europe. We work when you work. No midnight standups.</p>
             </div>
             <div className="p-6 bg-white rounded-xl border border-slate-200">
               <h3 className="text-xl font-bold mb-2">💰 Cost-Effective Excellence</h3>
               <p className="text-slate-600">Access Silicon Valley-level talent at a fraction of the cost of local GCC or European engineers.</p>
             </div>
             <div className="p-6 bg-white rounded-xl border border-slate-200">
               <h3 className="text-xl font-bold mb-2">🗣️ Cultural & Language Alignment</h3>
               <p className="text-slate-600">Native English proficiency and deep alignment with Western and GCC business standards and communication styles.</p>
             </div>
             <div className="p-6 bg-white rounded-xl border border-slate-200">
               <h3 className="text-xl font-bold mb-2">🚀 Product-Led Mindset</h3>
               <p className="text-slate-600">We don&apos;t just code blindly. As a venture studio, we bring entrepreneurial rigor to every feature we build.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Products/Portfolio */}
      <section id="portfolio" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Our Venture Portfolio</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">We aren&apos;t just an agency; we build our own platforms. We bring that product-led rigor to your business.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-500 transition">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">FractionalHub</h3>
              <p className="text-slate-400">Connecting global companies with elite fractional talent across tech and operations.</p>
            </div>
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-500 transition">
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">Freighter Africa</h3>
              <p className="text-slate-400">Revolutionizing regional logistics with a smart freight load board and marketplace.</p>
            </div>
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-500 transition">
              <h3 className="text-2xl font-bold mb-2 text-purple-400">RentIt</h3>
              <p className="text-slate-400">The premier hyper-local neighborhood rental marketplace for everything you need.</p>
            </div>
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-500 transition">
              <h3 className="text-2xl font-bold mb-2 text-emerald-400">Intent/Demandz</h3>
              <p className="text-slate-400">A next-generation demand-driven marketplace flipping the traditional bulk-buying model on its head.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <footer id="contact" className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to build something great?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book a free technical consultation with our engineering team today and let&apos;s map out your next product.
          </p>
          
          {/* HubSpot Form Placeholder */}
          <div className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-xl text-left text-slate-900 mb-8">
            <h3 className="font-bold text-xl mb-4 text-center">Get in Touch</h3>
            <p className="text-sm text-slate-500 mb-6 text-center">
              (Embed your HubSpot form here. For now, reach us via email below.)
            </p>
            <div className="w-full h-32 bg-slate-100 border-2 border-dashed border-slate-300 rounded flex items-center justify-center text-slate-400 text-sm font-mono">
              &lt;!-- HubSpot Embed Code --&gt;
            </div>
          </div>

          <a href="mailto:hello@youragency.com" className="font-bold text-lg text-blue-200 hover:text-white transition">
            or email us at hello@youragency.com
          </a>
        </div>
      </footer>
    </main>
  );
}