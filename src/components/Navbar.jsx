import { CircleUserRound, Handbag, ArrowUpRight } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

/* ── Animated hamburger lines ── */
function MenuIcon({ open }) {
  return (
    <span className="flex flex-col justify-center items-end gap-[5px] w-6 h-6">
      <span
        style={{
          transition: 'transform 0.4s cubic-bezier(0.76,0,0.24,1), width 0.3s ease, opacity 0.3s ease',
          transformOrigin: 'center',
          transform: open ? 'translateY(10px) rotate(45deg)' : 'none',
          width: open ? '24px' : '24px',
          height: '1.5px',
          background: 'currentColor',
          borderRadius: '2px',
          display: 'block',
        }}
      />
      <span
        style={{
          transition: 'opacity 0.2s ease, width 0.3s ease',
          opacity: open ? 0 : 1,
          width: open ? '0px' : '16px',
          height: '1.5px',
          background: 'currentColor',
          borderRadius: '2px',
          display: 'block',
        }}
      />
      <span
        style={{
          transition: 'transform 0.4s cubic-bezier(0.76,0,0.24,1), width 0.3s ease',
          transformOrigin: 'center',
          transform: open ? 'translateY(-10px) rotate(-45deg)' : 'none',
          width: open ? '24px' : '20px',
          height: '1.5px',
          background: 'currentColor',
          borderRadius: '2px',
          display: 'block',
        }}
      />
    </span>
  );
}

const NAV_LINKS = [
  { label: 'Home',         sub: 'Welcome' },
  { label: 'About',        sub: 'Our Story' },
  { label: 'Collections',  sub: 'Browse All' },
  { label: 'Best Sellers', sub: 'Top Picks' },
  { label: 'Contact',      sub: 'Get In Touch' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [hovered, setHovered]     = useState(null);
  const [visible, setVisible]     = useState(false); // controls stagger after overlay mounts
  const timerRef                  = useRef(null);

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* body lock + stagger trigger */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (menuOpen) {
      timerRef.current = setTimeout(() => setVisible(true), 60);
    } else {
      clearTimeout(timerRef.current);
      setVisible(false);
    }
    return () => { document.body.style.overflow = ''; clearTimeout(timerRef.current); };
  }, [menuOpen]);

  return (
    <>
      {/* ════════════════════════════════
          HEADER BAR
      ════════════════════════════════ */}
      <header
        id="main-navbar"
        className={[
          'fixed top-0 left-0 right-0 z-200 h-17',
          'flex items-center justify-between px-5 md:px-10 lg:px-30',
          'transition-all duration-500 ease-in-out',
          menuOpen
            ? 'bg-transparent shadow-none'
            : scrolled
              ? 'bg-[rgba(237,224,204,0.92)] backdrop-blur-[14px] shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
              : 'bg-transparent',
        ].join(' ')}
      >
        {/* Logo */}
        <a
          href="#"
          id="navbar-logo"
          aria-label="Anom Flora Home"
          className="flex items-center relative z-[210]"
          style={{ color: menuOpen ? '#FDF6EE' : undefined }}
        >
          <img
            src="./logo.png"
            alt="Anom Flora Logo"
            loading="lazy"
            className="size-14"
            style={{ filter: menuOpen ? 'brightness(0) invert(1)' : 'none', transition: 'filter 0.4s ease' }}
          />
          <h4
            className="font-cookie text-4xl font-medium leading-none tracking-[0.02em] ml-1.5 transition-colors duration-400"
            style={{ color: menuOpen ? '#F5EDE0' : 'var(--color-primary)' }}
          >
            Anom{' '}
            <span style={{ color: menuOpen ? '#F0C97B' : 'var(--color-prime-yellow)' }}>Flora</span>
          </h4>
        </a>

        {/* Desktop links */}
        <div className="flex items-center gap-10">
          <nav aria-label="Main navigation" className="max-lg:hidden">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {NAV_LINKS.map((link, i) => (
                <li key={link.label}>
                  <a
                    href="#"
                    id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className={[
                      'font-sans text-[14px] tracking-[0.01em] no-underline transition-all duration-200',
                      'text-primary hover:text-prime-yellow',
                      i === 0
                        ? 'font-medium underline underline-offset-4 opacity-100'
                        : 'font-normal opacity-80 hover:opacity-100',
                    ].join(' ')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <button
              id="navbar-bag"
              aria-label="Shopping bag"
              className="bg-transparent border-none cursor-pointer flex items-center transition-smooth"
              style={{ color: menuOpen ? '#F5EDE0' : 'var(--color-primary)' }}
            >
              <Handbag strokeWidth={1.5} size={22} />
            </button>
            <button
              id="navbar-user"
              aria-label="User account"
              className="bg-transparent border-none cursor-pointer flex items-center transition-smooth max-lg:hidden text-primary hover:text-prime-yellow"
            >
              <CircleUserRound strokeWidth={1.5} size={22} />
            </button>

            {/* Hamburger toggle */}
            <button
              id="navbar-menu-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden bg-transparent border-none cursor-pointer relative z-[210] transition-colors duration-400"
              style={{ color: menuOpen ? '#F5EDE0' : 'var(--color-primary)' }}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════
          FULL-SCREEN OVERLAY MENU
      ════════════════════════════════ */}
      <div
        id="fullscreen-nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="lg:hidden fixed inset-0 z-195 flex flex-col overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #2B2B1A 0%, #1E1E0E 55%, #3A2D10 100%)',
          clipPath: menuOpen ? 'circle(200% at 95% 3%)' : 'circle(0% at 95% 3%)',
          transition: 'clip-path 0.75s cubic-bezier(0.76,0,0.24,1)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {/* Background decorative huge text */}
        <span
          aria-hidden="true"
          className="absolute right-[-60px] bottom-[-30px] font-elegant font-semibold text-[220px] md:text-[300px] select-none pointer-events-none uppercase leading-none"
          style={{
            color: 'rgba(192,141,52,0.06)',
            letterSpacing: '-0.04em',
            transition: 'opacity 0.5s ease',
            opacity: visible ? 1 : 0,
          }}
        >
          Flora
        </span>

        {/* Thin gold horizontal rule at 68px (below header) */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: '68px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(192,141,52,0.4) 40%, rgba(192,141,52,0.4) 60%, transparent 100%)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.3s',
          }}
        />

        {/* ── Nav link list ── */}
        <nav
          aria-label="Full-screen navigation"
          className="flex-1 flex flex-col justify-center px-8 md:px-14 pt-20 pb-6"
        >
          <ul className="list-none m-0 p-0 flex flex-col gap-0">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderBottom: '1px solid rgba(245,237,224,0.08)',
                  transform: visible ? 'translateY(0)' : 'translateY(40px)',
                  opacity: visible ? 1 : 0,
                  transition: `transform 0.6s cubic-bezier(0.33,1,0.68,1) ${0.15 + i * 0.07}s, opacity 0.5s ease ${0.15 + i * 0.07}s`,
                }}
              >
                <a
                  href="#"
                  id={`fs-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between w-full py-5 md:py-6 no-underline"
                  style={{ textDecoration: 'none' }}
                >
                  {/* Left: index + label */}
                  <div className="flex items-baseline gap-5">
                    {/* Index number */}
                    <span
                      className="font-elegant text-[13px] font-light transition-colors duration-300"
                      style={{
                        color: hovered === i ? 'var(--color-prime-yellow)' : 'rgba(245,237,224,0.3)',
                        minWidth: '28px',
                      }}
                    >
                      0{i + 1}
                    </span>

                    {/* Link text */}
                    <span
                      className="font-elegant font-light tracking-tight leading-none transition-all duration-350"
                      style={{
                        fontSize: 'clamp(2.6rem, 9vw, 4.8rem)',
                        color: i === 0
                          ? 'var(--color-prime-yellow)'
                          : hovered === i
                            ? '#F5EDE0'
                            : 'rgba(245,237,224,0.55)',
                        letterSpacing: '-0.02em',
                        transform: hovered === i ? 'translateX(12px)' : 'translateX(0)',
                        display: 'inline-block',
                        transition: 'color 0.3s ease, transform 0.35s cubic-bezier(0.33,1,0.68,1)',
                      }}
                    >
                      {link.label}
                    </span>
                  </div>

                  {/* Right: sub-label + arrow */}
                  <div
                    className="flex items-center gap-2 transition-all duration-350"
                    style={{
                      opacity: hovered === i ? 1 : 0,
                      transform: hovered === i ? 'translateX(0)' : 'translateX(-10px)',
                    }}
                  >
                    <span
                      className="font-sans text-[11px] tracking-widest uppercase"
                      style={{ color: 'var(--color-prime-yellow)' }}
                    >
                      {link.sub}
                    </span>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      style={{ color: 'var(--color-prime-yellow)' }}
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Bottom bar ── */}
        <div
          className="flex items-center justify-between px-8 md:px-14 py-6"
          style={{
            borderTop: '1px solid rgba(245,237,224,0.08)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease 0.55s, transform 0.5s ease 0.55s',
          }}
        >
          {/* Account & Bag */}
          <div className="flex items-center gap-5">
            <button
              id="fs-navbar-user"
              aria-label="My account"
              className="flex items-center gap-2 bg-transparent border-none cursor-pointer"
              style={{ color: 'rgba(245,237,224,0.6)' }}
            >
              <CircleUserRound strokeWidth={1.5} size={18} />
              <span className="font-sans text-[12px] tracking-wider uppercase" style={{ color: 'rgba(245,237,224,0.6)' }}>
                Account
              </span>
            </button>
            <button
              id="fs-navbar-bag"
              aria-label="Shopping bag"
              className="flex items-center gap-2 bg-transparent border-none cursor-pointer"
              style={{ color: 'rgba(245,237,224,0.6)' }}
            >
              <Handbag strokeWidth={1.5} size={18} />
              <span className="font-sans text-[12px] tracking-wider uppercase" style={{ color: 'rgba(245,237,224,0.6)' }}>
                Bag
              </span>
            </button>
          </div>

          {/* Shop Now pill */}
          <button
            onClick={() => setMenuOpen(false)}
            className="border-none cursor-pointer font-sans text-[12px] font-medium tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-300"
            style={{
              background: 'var(--color-prime-yellow)',
              color: '#1E1E0E',
              letterSpacing: '0.1em',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F5EDE0'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-prime-yellow)'; }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}
