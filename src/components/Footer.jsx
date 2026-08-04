import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Column 1 - Logo & About */}
          <div className="lg:col-span-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-white">
                Anom Flora
              </span>
              <span className="tracking-[0.3em] text-[10px] uppercase text-warm-gray">
                ARTIFICIAL FLOWERS
              </span>
            </div>
            <p className="text-sm text-white/60 mt-4 max-w-xs">
              Bringing beauty, elegance & joy to your spaces with our premium quality artificial flowers.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Collections', 'Best Sellers', 'About Us', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-blush transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Help & Support */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-4">Help & Support</h4>
            <ul className="space-y-2">
              {['FAQs', 'Shipping & Delivery', 'Returns & Refunds', 'Track Order', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-blush transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <span>📞</span> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> hello@anomflora.com
              </li>
              <li className="flex items-center gap-2 mt-4">
                <span>📦</span> Pan India Delivery
              </li>
            </ul>
          </div>

          {/* Column 5 - Follow Us */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-sage hover:border-sage transition-all duration-300 group text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-sage hover:border-sage transition-all duration-300 group text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-sage hover:border-sage transition-all duration-300 group text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              {/* Pinterest */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-sage hover:border-sage transition-all duration-300 group text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <path d="M5 12h14"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a10 10 0 0 1 10 10v0a10 10 0 0 1-10 10v0A10 10 0 0 1 2 12v0A10 10 0 0 1 12 2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40 text-center md:text-left">
            © 2024 Anom Flora. All rights reserved.
          </p>
          <p className="text-sm text-white/40 text-center md:text-right">
            Made with ❤️ for flower lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
