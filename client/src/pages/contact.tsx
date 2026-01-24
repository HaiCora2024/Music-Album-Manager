import React from 'react';
import { Link } from 'wouter';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase cursor-pointer">Anton Ripatti</h1>
          </Link>
          <nav className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-gray-400 transition-colors duration-300">Home</Link>
          </nav>
        </div>
      </header>

      {/* Contact Content */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Abstract background */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-2xl text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-12 uppercase tracking-wide">
            Contact
          </h2>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 space-y-10 backdrop-blur-sm">
            
            {/* Booking & General */}
            <div className="space-y-2">
              <h3 className="text-gray-500 uppercase text-xs tracking-[0.3em] mb-4">Booking & Management</h3>
              <a 
                href="mailto:babakamusic@gmail.com"
                className="text-2xl md:text-3xl font-light hover:text-gray-300 transition-colors block break-words"
              >
                babakamusic@gmail.com
              </a>
            </div>

            <div className="h-[1px] bg-white/10 w-full"></div>

            {/* Social Links */}
            <div className="space-y-2">
              <h3 className="text-gray-500 uppercase text-xs tracking-[0.3em] mb-6">Socials</h3>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.instagram.com/ripattianton/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-light hover:text-gray-300 transition-colors uppercase tracking-widest flex items-center justify-center gap-2 group"
                >
                  Instagram
                  <span className="text-white/30 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a 
                  href="https://open.spotify.com/artist/1JSEQcBLKhhB9ininHrqWl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-light hover:text-gray-300 transition-colors uppercase tracking-widest flex items-center justify-center gap-2 group"
                >
                  Spotify
                  <span className="text-white/30 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a 
                  href="https://music.apple.com/us/artist/anton-ripatti/1586375626" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-light hover:text-gray-300 transition-colors uppercase tracking-widest flex items-center justify-center gap-2 group"
                >
                  Apple Music
                  <span className="text-white/30 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-900 bg-black fixed bottom-0 left-0 right-0">
         <div className="container mx-auto px-6 text-center">
            <div className="text-gray-700 text-xs tracking-wide">
              &copy; {new Date().getFullYear()} Babakamusic. All rights reserved.
            </div>
         </div>
      </footer>
    </div>
  );
}