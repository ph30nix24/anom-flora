import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-heading-line', {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
    })
    .from('.hero-subtitle', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .from('.hero-btn', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    }, '-=0.4')
    .from('.trust-badge', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.1,
    }, '-=0.4')
    .from('.hero-image-container', {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    }, 0) // Start image animation at the same time as heading
    .from('.floating-badge', {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
    }, '-=0.4');

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen bg-cream overflow-hidden flex items-center pt-36 pb-16">
      {/* Decorative floating background elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blush-light/40 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 rounded-full bg-gold-light/30 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-sage-light/40 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-[55%]">
            <h1 className="flex flex-col gap-2">
              <span className="hero-heading-line font-serif text-6xl lg:text-7xl font-bold text-charcoal">
                Everlasting Beauty,
              </span>
              <span className="hero-heading-line font-serif text-6xl lg:text-7xl font-bold italic text-gradient-blush">
                Zero Maintenance.
              </span>
            </h1>
            
            <p className="hero-subtitle text-lg text-charcoal-light/80 max-w-lg mt-6">
              Premium quality artificial flowers that bring life, color & elegance to your space — every single day.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="hero-btn bg-sage-dark text-white px-8 py-4 rounded-full hover:bg-sage transition font-semibold">
                Shop Collections &rarr;
              </button>
              <button className="hero-btn border-2 border-charcoal text-charcoal px-8 py-4 rounded-full hover:bg-charcoal hover:text-white transition font-semibold">
                Explore Best Sellers
              </button>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-6 lg:gap-8">
              <div className="trust-badge flex items-center gap-2">
                <span className="text-sage-dark font-bold text-lg">&#10003;</span>
                <span className="text-sm text-charcoal-light">Premium Quality - Realistic & Long Lasting</span>
              </div>
              <div className="trust-badge flex items-center gap-2">
                <span className="text-sage-dark font-bold text-lg">&#10003;</span>
                <span className="text-sm text-charcoal-light">Safe Packaging - Secure & Damage Free</span>
              </div>
              <div className="trust-badge flex items-center gap-2">
                <span className="text-sage-dark font-bold text-lg">&#10003;</span>
                <span className="text-sm text-charcoal-light">Pan India Delivery - Fast & Reliable</span>
              </div>
            </div>
          </div>
          
          {/* Right Side: Image and Floating Badge */}
          <div className="w-full lg:w-[45%] relative mt-12 lg:mt-0">
            <div className="hero-image-container relative">
              <img 
                src="/images/hero_flowers.jpg" 
                alt="Anom Flora premium artificial flowers" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              
              <div className="floating-badge absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-sage-dark text-white px-5 py-3 rounded-xl shadow-lg z-20">
                <p className="font-medium text-sm flex items-center gap-2">
                  <span className="text-gold text-lg">⭐</span> 5000+ Happy Customers Trust Our Flowers
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
