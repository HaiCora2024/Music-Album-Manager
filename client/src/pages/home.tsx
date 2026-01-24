import React from 'react';
import { Link } from 'wouter';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Global Background */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/pics/04_Anton Ripatti & Babakaband.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-[0.1em] uppercase">Anton Ripatti</h1>
          <nav className="hidden md:flex gap-10 text-xs font-medium uppercase tracking-[0.2em]">
            <a href="#video" className="hover:text-white/70 transition-colors duration-300">Video</a>
            <a href="#about" className="hover:text-white/70 transition-colors duration-300">About</a>
            <a href="#music" className="hover:text-white/70 transition-colors duration-300">Music</a>
            <a href="#tour" className="hover:text-white/70 transition-colors duration-300">Tour</a>
            <Link href="/contact" className="hover:text-white/70 transition-colors duration-300">Contact</Link>
          </nav>
          {/* Mobile Menu Button Placeholder */}
          <button className="md:hidden text-white uppercase text-xs tracking-widest">
            Menu
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="video"
        className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden"
      >
         <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/pics/04_Anton Ripatti & Babakaband.jpg')`,
          }}
        >
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
          
          {/* Red Grid/Pattern Overlay Effect (similar to reference) */}
           <div 
            className="absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-overlay"
            style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,0,0,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}
           ></div>
        </div>

        <div className="container mx-auto px-6 z-20 w-full">
          <div className="flex flex-col items-start space-y-2">
            
            {/* MARIE Release Title */}
            <div className="animate-in fade-in slide-in-from-left-10 duration-1000 fill-mode-forwards opacity-0 flex flex-col items-start">
               <a
                href="https://www.youtube.com/watch?v=qCifhWTpnmM&t=2s"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block"
              >
                <h2 className="text-[120px] leading-[0.8] font-bold tracking-tighter uppercase text-white group-hover:text-gray-200 transition-colors mix-blend-difference">
                  MARIE
                </h2>
                <div className="h-2 w-full bg-white mt-2 group-hover:w-[110%] transition-all duration-500"></div>
              </a>
               <p className="text-xl md:text-2xl uppercase tracking-[0.5em] text-white/90 mt-4 font-light pl-2">
                  Release is out now
               </p>
            </div>

            {/* Description Text - Lower Left Third */}
            <div className="mt-12 max-w-xl uppercase tracking-widest">
               <h3 className="text-xl md:text-2xl font-light leading-snug text-white/90">
                 Anton Ripatti — sound artist and performer.
               </h3>
               <p className="text-sm md:text-base text-gray-300 font-light mt-4 leading-relaxed">
                 Merging music, theater, and visual storytelling into the immersive world of Babakamusic.
               </p>
            </div>

          </div>
        </div>
        
        {/* Scroll Indicator */}
        <a 
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 z-20 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Scroll to About section"
        >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative z-10 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-24 text-center">
             <h3 className="text-sm md:text-base font-medium mb-6 text-gray-400 uppercase tracking-[0.3em]">
              The Project
            </h3>
            <h4 className="text-3xl md:text-5xl font-light mb-12 uppercase tracking-wide leading-tight">
              About Anton Ripatti <br/><span className="text-gray-500">Babakamusic Performance</span>
            </h4>
            
            <div className="text-gray-300 leading-loose space-y-8 text-lg md:text-xl font-light text-justify md:text-center">
              <p>
                <strong className="text-white font-normal">Babakamusic</strong> is a surreal live performance where music, theatrical play, visual storytelling, and light merge into one immersive experience.
              </p>
              <p>
                Created by sound artist and performer Anton Ripatti, the project draws from experimental electronic music, psychedelic rock, dark cabaret, and elements of clownery.
              </p>
              <p>
                Each show unfolds as a humorous and emotional sonic journey — driven by dynamic stage presence, multilingual vocals, shadowplay, and dream-like lighting.
              </p>
              <p className="font-normal text-white italic border-l-2 border-white pl-6 md:pl-0 md:border-0">
                "Part cabaret, part concert, part light-theater — fully immersive."
              </p>
            </div>
          </div>

          {/* Embedded Videos */}
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div className="group">
              <div className="flex justify-between items-end mb-4">
                 <h4 className="text-lg font-light uppercase tracking-widest">Showreel</h4>
                 <div className="h-[1px] bg-gray-700 flex-grow ml-4 mb-2"></div>
              </div>
              <div className="aspect-video bg-gray-900 rounded-sm overflow-hidden border border-gray-800 group-hover:border-gray-500 transition-colors shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YKJ-jJrrTUY"
                  title="Babakamusic Showreel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
            <div className="group">
              <div className="flex justify-between items-end mb-4">
                 <h4 className="text-lg font-light uppercase tracking-widest">Marie</h4>
                 <div className="h-[1px] bg-gray-700 flex-grow ml-4 mb-2"></div>
              </div>
              <div className="aspect-video bg-gray-900 rounded-sm overflow-hidden border border-gray-800 group-hover:border-gray-500 transition-colors shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qCifhWTpnmM"
                  title="Marie"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                   className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-32 relative z-10 bg-zinc-950/90 backdrop-blur-sm border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
            <h3 className="text-4xl md:text-6xl font-thin tracking-tighter uppercase">
              Discography
            </h3>
            <p className="text-gray-400 uppercase tracking-widest text-sm mt-4 md:mt-0">Listen on all platforms</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Son 11 */}
            <a
              href="https://onerpm.link/338294280273"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-gray-900 aspect-square overflow-hidden relative mb-6 shadow-lg">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img
                  src="/pics/SON11.jpg"
                  alt="Son 11 Album Cover"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-light mb-2 group-hover:text-white transition-colors">Son 11</h4>
                <div className="inline-block border-b border-transparent group-hover:border-gray-500 transition-all">
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] group-hover:text-gray-300">Listen Stream</p>
                </div>
              </div>
            </a>

            {/* Marie */}
            <a
              href="https://onerpm.link/295118071474"
              target="_blank"
              rel="noopener noreferrer"
              className="group block transform md:-translate-y-12"
            >
              <div className="bg-gray-900 aspect-square overflow-hidden relative mb-6 shadow-2xl shadow-black/50">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img
                  src="/pics/MARIE.jpg"
                  alt="Marie Album Cover"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-light mb-2 group-hover:text-white transition-colors">Marie</h4>
                <div className="inline-block border-b border-transparent group-hover:border-gray-500 transition-all">
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] group-hover:text-gray-300">Listen Stream</p>
                </div>
              </div>
            </a>

            {/* Babakaband */}
            <a
              href="https://sl.onerpm.com/988996068478"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-gray-900 aspect-square overflow-hidden relative mb-6 shadow-lg">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img
                  src="/pics/BABAKABAND.jpg"
                  alt="Babakaband Album Cover"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-light mb-2 group-hover:text-white transition-colors">Babakaband</h4>
                <div className="inline-block border-b border-transparent group-hover:border-gray-500 transition-all">
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] group-hover:text-gray-300">Listen Stream</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className="py-32 relative z-10 bg-black/90 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h3 className="text-8xl md:text-9xl font-bold text-white/5 absolute -top-10 left-0 pointer-events-none select-none">
            TOUR
          </h3>
          <h3 className="text-3xl md:text-4xl font-light mb-16 text-center uppercase tracking-wider relative z-10">
            Upcoming Shows
          </h3>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Show 1 */}
            <div className="group border-b border-white/10 hover:border-white/50 hover:bg-white/5 transition-all duration-300 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-12 items-center w-full md:w-auto">
                <div className="text-center min-w-[80px]">
                  <div className="text-4xl font-light group-hover:scale-110 transition-transform">24</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Jan</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-light tracking-wide">Galeriehaus</span>
                  <span className="text-gray-500 uppercase text-xs tracking-widest mt-1">Hof, Germany</span>
                </div>
              </div>
              <a
                href="mailto:babakamusic@gmail.com"
                className="w-full md:w-auto px-8 py-3 border border-white/30 hover:bg-white hover:text-black hover:border-white transition-all uppercase text-xs tracking-[0.2em] text-center"
              >
                Tickets
              </a>
            </div>

            {/* Show 2 */}
            <div className="group border-b border-white/10 hover:border-white/50 hover:bg-white/5 transition-all duration-300 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-12 items-center w-full md:w-auto">
                <div className="text-center min-w-[80px]">
                  <div className="text-4xl font-light group-hover:scale-110 transition-transform">30</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Oct</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-light tracking-wide">TBA</span>
                  <span className="text-gray-500 uppercase text-xs tracking-widest mt-1">Barcelona, Spain</span>
                </div>
              </div>
              <a
                href="mailto:babakamusic@gmail.com"
                className="w-full md:w-auto px-8 py-3 border border-white/30 hover:bg-white hover:text-black hover:border-white transition-all uppercase text-xs tracking-[0.2em] text-center"
              >
                Tickets
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-gray-900 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-10">
            {/* Social Icons */}
            <div className="flex gap-12">
              <a
                href="https://open.spotify.com/artist/1JSEQcBLKhhB9ininHrqWl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"
                aria-label="Spotify"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-.9.84-.72 1.441.179.6.84.9 1.44.72 4.26-1.26 10.741-.9 14.161 1.14.479.3.1.24 1.139.6.3-.479.24-1.14-.24-1.439-.42-.241-1.2-.661-1.8-1.02l-.54-.36z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/ripattianton/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"
                aria-label="Instagram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://music.apple.com/us/artist/anton-ripatti/1586375626"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"
                aria-label="Apple Music"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.592 11.238c.026-3.149 2.57-4.697 2.695-4.762-1.47-2.146-3.754-2.438-4.549-2.47-1.921-.194-3.744 1.127-4.717 1.127-.96 0-2.486-1.102-4.093-1.077-2.106.032-4.053 1.226-5.122 3.08-2.185 3.791-.561 9.408 1.559 12.478 1.042 1.506 2.274 3.189 3.896 3.13 1.56-.059 2.148-1.009 4.028-1.009 1.889 0 2.427 1.009 4.088.979 1.688-.03 2.76-1.536 3.804-3.051 1.189-1.739 1.68-3.42 1.705-3.51-.038-.016-3.283-1.258-3.294-4.917zm-2.731-9.682c.866-1.049 1.453-2.508 1.294-3.965-1.25.051-2.766.833-3.665 1.884-.805.933-1.509 2.422-1.319 3.854 1.396.108 2.825-.724 3.69-1.773z"/>
                </svg>
              </a>
            </div>

            {/* Email */}
            <a
              href="mailto:babakamusic@gmail.com"
              className="text-gray-500 hover:text-white transition-colors text-xs tracking-widest uppercase border-b border-transparent hover:border-gray-500 pb-1"
            >
              babakamusic@gmail.com
            </a>

            <div className="text-gray-700 text-xs tracking-wide">
              &copy; {new Date().getFullYear()} Babakamusic. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}