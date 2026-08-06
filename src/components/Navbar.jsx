import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Collections', 'Best Sellers', 'Contact'];

  return (
    <header
      id="main-navbar"
      className={[
        'fixed top-0 left-0 right-0 z-100 h-17',
        'flex items-center justify-between px-30',
        'transition-all duration-400 ease-in-out',
        scrolled
          ? 'bg-[rgba(237,224,204,0.92)] backdrop-blur-[14px] shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent backdrop-blur-none shadow-none',
      ].join(' ')}
    >
      {/* AF Monogram */}
      <a
        href="#"
        id="navbar-logo"
        aria-label="Anom Flora Home"
        className="flex justify-center items-center"
      >
        <img src="./logo.png" alt="Anom Flora Logo" loading="lazy" className='size-18 '/>
        <h4 className="font-cookie text-3xl font-medium text-[#1e2b18] leading-none tracking-[0.02em] ml-2">
          Anom Flora
        </h4>
      </a>

      {/* Nav Links */}
      <nav aria-label="Main navigation">
        <ul className="flex items-center gap-[42px] list-none m-0 p-0">
          {navLinks.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                id={`nav-${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={[
                  'font-sans text-[14px] text-charcoal tracking-[0.01em]',
                  'transition-opacity duration-200 no-underline',
                  i === 0
                    ? 'font-medium underline underline-offset-4 opacity-100'
                    : 'font-normal opacity-80 hover:opacity-100',
                ].join(' ')}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-5">
        <button
          id="navbar-bag"
          aria-label="Shopping bag"
          className="bg-transparent border-none cursor-pointer flex items-center text-charcoal opacity-75 hover:opacity-100 transition-opacity duration-200"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </button>
        <button
          id="navbar-user"
          aria-label="User account"
          className="bg-transparent border-none cursor-pointer flex items-center text-charcoal opacity-75 hover:opacity-100 transition-opacity duration-200"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
