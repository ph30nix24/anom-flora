import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // Left side slide in
    gsap.from(leftRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Right side slide in
    gsap.from(rightRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Pulse animation for the CTA button
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-0 relative w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Left Half: Image-based CTA */}
        <div 
          ref={leftRef}
          className="w-full lg:w-1/2 relative flex items-center justify-center p-12 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cta_flowers.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-sage-dark/80"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center max-w-lg">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white">
              Let Your Space Bloom All Year Round
            </h2>
            <p className="text-white/80 mt-4 text-lg">
              Bring home everlasting beauty with our premium artificial flowers.
            </p>
            <button 
              ref={buttonRef}
              className="bg-blush-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-blush transition mt-6 inline-block"
            >
              Shop Now &rarr;
            </button>
          </div>
        </div>

        {/* Right Half: Newsletter signup */}
        <div 
          ref={rightRef}
          className="w-full lg:w-1/2 bg-cream p-12 flex flex-col justify-center items-center lg:items-start"
        >
          <div className="max-w-md w-full">
            <h2 className="font-serif text-2xl font-bold text-charcoal">
              Stay in Bloom 🌼
            </h2>
            <p className="text-charcoal-light/80 mt-2">
              Subscribe to get special offers, new arrivals &amp; decorating ideas.
            </p>
            <form className="flex flex-row mt-6 w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="border border-blush rounded-l-full px-6 py-3 flex-1 focus:outline-none focus:border-sage w-full bg-white text-charcoal"
                required
              />
              <button 
                type="submit"
                className="bg-sage text-white px-6 py-3 rounded-r-full font-semibold hover:bg-sage-dark transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-warm-gray mt-3">
              &#128274; No spam, only good vibes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
