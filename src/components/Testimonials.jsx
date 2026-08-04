import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    image: '/images/testimonial_1.jpg',
    name: '— Priya S.',
    text: 'The flowers look so real! Absolutely loved the quality and packaging.',
  },
  {
    id: 2,
    image: '/images/testimonial_2.jpg',
    name: '— Neha R.',
    text: 'Perfect for home decor. It added such a beautiful touch to my living room.',
  },
  {
    id: 3,
    image: '/images/testimonial_3.jpg',
    name: '— Anjali M.',
    text: 'My go-to place for gifting. Everyone asks where I get them from!',
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Header animation
    gsap.from('.header-anim', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
    });

    // Cards staggered animation
    gsap.from('.card-anim', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });
    
    // Stars pop-in animation
    gsap.from('.star-anim', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      scale: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'back.out(2)',
      delay: 0.3,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-warm-white px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="header-anim font-serif text-4xl lg:text-5xl font-bold text-charcoal text-center mb-16">
          Loved by Thousands ❤️
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="card-anim bg-white rounded-2xl p-8 shadow-md border border-cream-dark flex flex-col">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="star-anim text-gold text-xl">★</span>
                ))}
              </div>
              <p className="italic text-charcoal-light flex-grow mb-6">
                "{t.text}"
              </p>
              <hr className="border-cream-dark mb-6" />
              <div className="flex items-center">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <span className="font-sans font-medium text-charcoal">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
