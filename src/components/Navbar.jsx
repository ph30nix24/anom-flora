import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: headerRef });

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Announcement Bar */}
      <div className="bg-sage-dark text-white text-sm py-2 text-center px-4 font-sans tracking-wide">
        🌸 FREE SHIPPING on all orders above ₹999 | PAN India
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-cream-dark/30'
            : 'bg-cream/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer group">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <svg className="w-7 h-7 text-sage-dark group-hover:text-sage transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c4-4 8-8 8-13A8 8 0 0 0 4 9c0 5 4 9 8 13z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12c-2-2-4-2-6-1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12c2-2 4-2 6-1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-serif text-2xl font-bold text-sage-dark">Anom Flora</span>
              </div>
              <span className="tracking-[0.3em] text-[10px] uppercase text-warm-gray ml-9 mt-0.5">
                Artificial Flowers
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Home', 'Collections', 'Best Sellers', 'About Us', 'Why Us', 'Contact'].map((link, i) => (
              <a
                key={link}
                href="#"
                className={`font-sans font-medium text-sm transition-colors duration-200 relative group ${
                  i === 0 ? 'text-sage-dark' : 'text-charcoal-light hover:text-sage-dark'
                }`}
              >
                {link}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-sage transition-all duration-300 ${
                  i === 0 ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5 text-charcoal-light">
            <button className="hover:text-sage-dark transition-colors duration-200 p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="hover:text-sage-dark transition-colors duration-200 p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="hover:text-sage-dark transition-colors duration-200 relative p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1.5 bg-sage text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
