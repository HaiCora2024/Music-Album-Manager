import React from 'react';

export default function AntonRipattiPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">ANTON RIPATTI</h1>
          <nav className="flex gap-8 text-sm uppercase tracking-wide">
            <a href="#video" className="hover:text-gray-400 transition-colors">Video</a>
            <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
            <a href="#music" className="hover:text-gray-400 transition-colors">Music</a>
            <a href="#tour" className="hover:text-gray-400 transition-colors">Tour</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="video"
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('pics/04_Anton Ripatti & Babakaband.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-6 text-center z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-light leading-relaxed">
              Anton Ripatti — sound artist and performer.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Merging music, theater, and visual storytelling into the immersive world of Babakamusic.
            </p>

            {/* MARIE Link */}
            <div className="pt-8">
              <a
                href="https://www.youtube.com/watch?v=qCifhWTpnmM&t=2s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <div className="text-6xl md:text-7xl font-bold tracking-tight mb-2 group-hover:text-gray-400 transition-colors">
                  MARIE
                </div>
                <div className="text-sm uppercase tracking-widest border-b border-white group-hover:border-gray-400 inline-block pb-1 transition-colors">
                  marie is out now
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center uppercase tracking-wider">
            About Anton Ripatti Babakamusic Performance
          </h3>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
              <p>
                Babakamusic is a surreal live performance where music, theatrical play, visual storytelling, and light merge into one immersive experience.
              </p>
              <p>
                Created by sound artist and performer Anton Ripatti, the project draws from experimental electronic music, psychedelic rock, dark cabaret, and elements of clownery.
              </p>
              <p>
                Each show unfolds as a humorous and emotional sonic journey — driven by dynamic stage presence, multilingual vocals, shadowplay, and dream-like lighting.
              </p>
              <p className="font-medium text-white">
                Part cabaret, part concert, part light-theater — fully immersive.
              </p>
            </div>
          </div>

          {/* Embedded Videos */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h4 className="text-xl mb-4 uppercase tracking-wide">Showreel</h4>
              <div className="aspect-video bg-gray-900 rounded overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YKJ-jJrrTUY"
                  title="Babakamusic Showreel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <h4 className="text-xl mb-4 uppercase tracking-wide">Marie</h4>
              <div className="aspect-video bg-gray-900 rounded overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qCifhWTpnmM"
                  title="Marie"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center uppercase tracking-wider">
            Music
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Son 11 */}
            <a
              href="https://onerpm.link/338294280273"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gray-900 rounded overflow-hidden">
                <img
                  src="pics/a0981978491_10.jpg"
                  alt="Son 11 Album Cover"
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="text-xl font-medium mb-1">Son 11</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Listen now →</p>
                </div>
              </div>
            </a>

            {/* Marie */}
            <a
              href="https://onerpm.link/295118071474"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gray-900 rounded overflow-hidden">
                <img
                  src="pics/MARIE.jpg"
                  alt="Marie Album Cover"
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="text-xl font-medium mb-1">Marie</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Listen now →</p>
                </div>
              </div>
            </a>

            {/* Babakaband */}
            <a
              href="https://sl.onerpm.com/988996068478"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gray-900 rounded overflow-hidden">
                <img
                  src="pics/a0356146893_10.jpg"
                  alt="Babakaband Album Cover"
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="text-xl font-medium mb-1">Babakaband</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Listen now →</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center uppercase tracking-wider">
            Upcoming Shows
          </h3>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* Show 1 */}
            <div className="bg-gray-900/50 border border-gray-800 rounded p-6 flex justify-between items-center">
              <div className="flex gap-8 items-center">
                <div className="text-center min-w-[60px]">
                  <div className="text-3xl font-light">24</div>
                  <div className="text-sm text-gray-400 uppercase">Jan</div>
                </div>
                <div>
                  <div className="text-xl font-medium">Galeriehaus, Hof, DE</div>
                </div>
              </div>
              <a
                href="#"
                className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all uppercase text-sm tracking-wide"
              >
                Get Tickets
              </a>
            </div>

            {/* Show 2 */}
            <div className="bg-gray-900/50 border border-gray-800 rounded p-6 flex justify-between items-center">
              <div className="flex gap-8 items-center">
                <div className="text-center min-w-[60px]">
                  <div className="text-3xl font-light">30</div>
                  <div className="text-sm text-gray-400 uppercase">Oct</div>
                </div>
                <div>
                  <div className="text-xl font-medium">TBA, Barcelona, ES</div>
                </div>
              </div>
              <a
                href="#"
                className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all uppercase text-sm tracking-wide"
              >
                Get Tickets
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-6">
            {/* Email */}
            <a
              href="mailto:babakamusic@gmail.com"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              babakamusic@gmail.com
            </a>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="https://open.spotify.com/artist/1JSEQcBLKhhB9ininHrqWl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Spotify"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/ripattianton/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://music.apple.com/us/artist/anton-ripatti/1586375626"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Apple Music"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408a10.61 10.61 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 0 0 2.12-2.17c.334-.627.512-1.31.588-2.017.05-.473.06-.947.06-1.424.002-4.087 0-8.173 0-12.26zM12.3 3.793c.743 0 1.488-.013 2.23.003.59.013 1.162.094 1.668.44.506.347.827.812.935 1.418.163.913-.137 1.68-.865 2.26-.52.415-1.12.604-1.753.705a5.676 5.676 0 0 1-1.477.053c-.04-.005-.08-.015-.12-.022v-4.86zm5.77 11.093c-.002.184-.005.368-.01.552a4.614 4.614 0 0 1-.092.76c-.203.923-.672 1.66-1.474 2.15-.736.448-1.553.62-2.39.62-.92 0-1.818-.174-2.66-.577a6.635 6.635 0 0 1-1.798-1.32c-.823-.823-1.363-1.812-1.66-2.938a7.47 7.47 0 0 1-.248-1.79c-.015-.724.01-1.448.106-2.166.162-1.215.58-2.347 1.356-3.325.775-.977 1.748-1.635 2.905-1.97a6.005 6.005 0 0 1 2.223-.236c1.14.082 2.158.515 3.014 1.322.856.808 1.387 1.82 1.614 2.982.123.63.166 1.268.166 1.91.003 1.176.003 2.352 0 3.527z"/>
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@Antonripatti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href="https://soundcloud.com/ripatti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="SoundCloud"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.05 0-.09.04-.099.099l-.145 1.326.145 1.279c.009.051.045.099.099.099.048 0 .09-.048.09-.099l.16-1.279-.16-1.326c0-.059-.042-.099-.09-.099m1.753-.828c-.058 0-.1.046-.108.1l-.237 2.154.237 2.105c.008.058.05.098.108.098.05 0 .1-.04.1-.098l.255-2.105-.255-2.154c0-.057-.05-.1-.1-.1m.836.033c-.066 0-.107.04-.115.099l-.21 2.121.21 2.061c.008.051.049.099.115.099.058 0 .102-.048.11-.099l.23-2.061-.23-2.121c-.008-.059-.052-.099-.11-.099m.831.033c-.062 0-.11.041-.114.1l-.196 2.088.196 2.023c.008.051.052.099.114.099.062 0 .106-.048.114-.099l.217-2.023-.217-2.088c-.008-.059-.052-.1-.114-.1m.836.024c-.066 0-.115.049-.123.108l-.18 2.064.18 2c.008.05.057.099.123.099.059 0 .11-.049.11-.099l.196-2 .196-2.064c0-.059-.051-.108-.11-.108m.833.016c-.069 0-.119.049-.123.107l-.165 2.048.165 1.991c.004.05.054.099.123.099.062 0 .11-.049.118-.099l.18-1.991-.18-2.048c-.008-.058-.056-.107-.118-.107m-6.389 2.065c-.053 0-.09.04-.099.099l-.13 1.279.13 1.212c.009.059.046.099.099.099.053 0 .094-.04.094-.099l.145-1.212-.145-1.279c0-.059-.041-.099-.094-.099m6.725-.057c-.069 0-.119.058-.123.115l-.151 2.006.151 1.957c.004.057.054.106.123.106.066 0 .114-.049.114-.106l.165-1.957-.165-2.006c0-.057-.048-.115-.114-.115m.876.033c-.07 0-.123.058-.123.115l-.139 1.973.139 1.933c0 .057.053.106.123.106.07 0 .123-.049.123-.106l.151-1.933-.151-1.973c0-.057-.053-.115-.123-.115m.861.016c-.073 0-.127.058-.131.115l-.122 1.957.122 1.909c.004.057.058.115.131.115.069 0 .122-.058.122-.115l.137-1.909-.137-1.957c0-.057-.053-.115-.122-.115m.86.049c-.073 0-.127.057-.131.106l-.106 1.908.106 1.892c.004.057.058.106.131.106.073 0 .127-.049.127-.106l.122-1.892-.122-1.908c0-.049-.054-.106-.127-.106m.86.033c-.077 0-.131.057-.135.106l-.094 1.875.094 1.867c.004.057.058.106.135.106.074 0 .131-.049.131-.106l.106-1.867-.106-1.875c0-.049-.057-.106-.131-.106m.86.041c-.078 0-.135.057-.139.115l-.078 1.834.078 1.843c.004.057.061.106.139.106.074 0 .131-.049.135-.106l.094-1.843-.094-1.834c-.004-.058-.061-.115-.135-.115m.86.016c-.08 0-.139.066-.139.123l-.066 1.818.066 1.827c0 .057.059.115.139.115s.135-.058.135-.115l.078-1.827-.078-1.818c0-.057-.055-.123-.135-.123m.86.057c-.08 0-.135.066-.135.115l-.057 1.761.057 1.794c0 .057.055.115.135.115.078 0 .135-.058.139-.115l.066-1.794-.066-1.761c-.004-.049-.061-.115-.139-.115m.86-.008c-.082 0-.139.066-.143.115l-.045 1.769.045 1.802c.004.057.061.115.143.115.082 0 .139-.058.143-.115l.053-1.802-.053-1.769c-.004-.049-.061-.115-.143-.115m.86.008c-.085 0-.143.066-.143.123l-.033 1.761.033 1.794c0 .057.058.115.143.115.082 0 .139-.058.143-.115l.045-1.794-.045-1.761c-.004-.057-.061-.123-.143-.123m.868.057c-.086 0-.147.066-.147.115l-.02 1.704.02 1.786c0 .049.061.115.147.115.082 0 .143-.066.143-.115l.029-1.786-.029-1.704c0-.049-.061-.115-.143-.115m.86-.049c-.09 0-.147.074-.151.123l-.008 1.753.008 1.778c.004.057.061.115.151.115.086 0 .143-.058.147-.115l.016-1.778-.016-1.753c-.004-.049-.061-.123-.147-.123"/>
                </svg>
              </a>
            </div>

            <div className="text-gray-600 text-xs pt-4">
              © {new Date().getFullYear()} Anton Ripatti. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
