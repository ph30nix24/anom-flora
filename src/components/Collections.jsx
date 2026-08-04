import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    id: 1,
    name: 'Rose Collection',
    subtitle: 'Timeless & Elegant',
    image: '/images/rose_collection.jpg',
  },
  {
    id: 2,
    name: 'Lily Collection',
    subtitle: 'Pure & Peaceful',
    image: '/images/lily_collection.jpg',
  },
  {
    id: 3,
    name: 'Mixed Bouquets',
    subtitle: 'Beautifully Curated',
    image: '/images/mixed_bouquet.jpg',
  },
  {
    id: 4,
    name: 'Orchids',
    subtitle: 'Graceful & Premium',
    image: '/images/orchid_collection.jpg',
  },
  {
    id: 5,
    name: 'Greenery',
    subtitle: 'Fresh & Natural Look',
    image: '/images/greenery_collection.jpg',
  },
];

const Collections = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        }
      );

      // Parallax effect on images
      cardsRef.current.forEach((card) => {
        const image = card.querySelector('.parallax-image');
        if (image) {
          gsap.to(image, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-warm-white overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={headerRef} className="mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-sage font-semibold text-center">
            Handpicked For You
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal text-center mt-3">
            Shop Our Popular Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col hover-lift group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="parallax-image absolute top-[-15%] left-0 w-full h-[130%] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="mt-auto flex justify-between items-end">
                <div>
                  <h3 className="font-semibold text-lg text-charcoal">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-warm-gray mt-1">
                    {collection.subtitle}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-colors duration-300">
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
