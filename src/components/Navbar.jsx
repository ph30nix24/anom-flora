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
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 52px',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
        background: scrolled ? 'rgba(237,224,204,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      {/* AF Monogram */}
      <a
        href="#"
        id="navbar-logo"
        aria-label="Anom Flora Home"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1px',
          border: '1px solid rgba(30,30,20,0.48)',
          padding: '5px 11px 5px 9px',
          textDecoration: 'none',
        }}
      >
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '22px',
          fontWeight: 500,
          color: '#1e2b18',
          lineHeight: 1,
          letterSpacing: '0.02em',
        }}>A</span>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '21px',
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#1e2b18',
          lineHeight: 1,
          letterSpacing: '0.02em',
        }}>F</span>
      </a>

      {/* Nav Links */}
      <nav aria-label="Main navigation">
        <ul style={{ display: 'flex', alignItems: 'center', gap: '42px', listStyle: 'none', margin: 0, padding: 0 }}>
          {navLinks.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                id={`nav-${link.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: i === 0 ? 500 : 400,
                  color: '#2c2c2c',
                  textDecoration: i === 0 ? 'underline' : 'none',
                  textUnderlineOffset: '4px',
                  letterSpacing: '0.01em',
                  opacity: i === 0 ? 1 : 0.8,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => { e.target.style.opacity = 1; }}
                onMouseLeave={e => { e.target.style.opacity = i === 0 ? 1 : 0.8; }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button
          id="navbar-bag"
          aria-label="Shopping bag"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#2c2c2c', opacity: 0.75, transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0.75}
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
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#2c2c2c', opacity: 0.75, transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0.75}
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
