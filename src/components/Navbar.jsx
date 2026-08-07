import { CircleUserRound, Handbag } from 'lucide-react';
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
        'flex items-center justify-between px-5 md:px-10 lg:px-30',
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
        <img src="./logo.png" alt="Anom Flora Logo" loading="lazy" className='size-18 ' />
        <h4 className="font-cookie text-4xl font-medium text-primary leading-none tracking-[0.02em] ml-2">
          Anom <span className='text-prime-yellow'>Flora</span>
        </h4>
      </a>

      <div className="flex items-center gap-10  ">

        {/* Nav Links */}
        <nav aria-label="Main navigation" className="max-lg:hidden">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link, i) => (
              <li key={link}>
                <a
                  href="#"
                  id={`nav-${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className={[
                    'font-sans text-[14px] text-charcoal tracking-[0.01em]',
                    'transition-opacity duration-200 no-underline text-primary hover:text-prime-yellow transition-smooth',
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
            className="bg-transparent border-none cursor-pointer flex items-center text-primary hover:text-prime-yellow transition-smooth"
          >
            <Handbag strokeWidth={1.5} />
          </button>
          <button
            id="navbar-user"
            aria-label="User account"
            className="bg-transparent border-none cursor-pointer flex items-center text-primary hover:text-prime-yellow transition-smooth"
          >
            <CircleUserRound strokeWidth={1.5} />
          </button>
        </div>
      </div>

    </header>
  );
}
