import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Data ─────────────────────────────────────── */
const reviews = [
  {
    id: 1,
    stars: 5,
    text: 'The arrangement looks so real and adds the perfect touch of elegance to my living room. Great quality and beautifully packaged!',
    name: 'Priya Sharma',
    // testimonial_*.jpg files contain the real customer/people photos — use them as avatars
    avatar: '/images/priya_avatar.jpg',
    // use actual flower arrangement images for the product photo slot
    productImg: '/images/rose_collection.jpg',
  },
  {
    id: 2,
    stars: 5,
    text: 'Anom Flora never disappoints! The flowers are stunning, long-lasting, and make my dining space feel so warm and inviting.',
    name: 'Rohit Mehta',
    avatar: '/images/rohit_avatar.jpg',
    productImg: '/images/mixed_bouquet.jpg',
  },
  {
    id: 3,
    stars: 5,
    text: 'Beautiful craftsmanship and premium quality. It completely transformed the look of my office reception area.',
    name: 'Neha Verma',
    avatar: '/images/neha_avatar.jpg',
    productImg: '/images/lily_collection.jpg',
  },
];

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    label: 'Beautiful Designs',
    sub: 'That suit every space',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    label: 'Premium Quality',
    sub: 'Made to last, made to love',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
      </svg>
    ),
    label: 'Loved & Trusted',
    sub: 'By thousands of customers',
  },
];

/* ── Star Row ─────────────────────────────────── */
const StarRow = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" fill="#C4A265" className="w-5 h-5">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292Z" />
      </svg>
    ))}
  </div>
);

/* ── Component ───────────────────────────────── */
const Testimonials = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);


  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    );

    gsap.fromTo(
      cardsRef.current.filter(Boolean),
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      }
    );
  });

  return (
    <section
      ref={sectionRef}
      id="customer-reviews"
      className="relative overflow-hidden bg-cream py-20 px-4 md:px-10 lg:px-16"
    >
      {/* ── Decorative leaf top-left ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -left-8 opacity-30 select-none"
      >
        <svg viewBox="0 0 220 220" className="w-52 h-52" fill="none">
          <path d="M30 190 Q60 120 110 80 Q140 60 180 40" stroke="#4A6741" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <ellipse cx="110" cy="80" rx="38" ry="18" transform="rotate(-35 110 80)" fill="#6B8F62" opacity="0.55" />
          <ellipse cx="70" cy="130" rx="30" ry="14" transform="rotate(-20 70 130)" fill="#6B8F62" opacity="0.45" />
          <ellipse cx="150" cy="55" rx="24" ry="11" transform="rotate(-45 150 55)" fill="#6B8F62" opacity="0.4" />
        </svg>
      </div>

      {/* ── Decorative branch bottom-right ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-0 opacity-25 select-none"
      >
        <svg viewBox="0 0 160 280" className="w-36 h-64" fill="none">
          <path d="M80 270 Q70 180 40 100" stroke="#4A6741" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="40" cy="100" rx="30" ry="14" transform="rotate(-40 40 100)" fill="#6B8F62" opacity="0.6" />
          <ellipse cx="90" cy="150" rx="26" ry="12" transform="rotate(20 90 150)" fill="#6B8F62" opacity="0.5" />
          <ellipse cx="55" cy="55" rx="20" ry="10" transform="rotate(-60 55 55)" fill="#6B8F62" opacity="0.4" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ════ HEADER ════ */}
        <div className="t-header text-center mb-14" ref={headerRef}>


          {/* Eyebrow label */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src="../../icon/leaf-icon.png" className='w-8 -scale-x-90' alt="" />
            <p className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: '#C08D34' }}>
              Customer Reviews
            </p>
            <img src="../../icon/leaf-icon.png" className='w-8' alt="" />
          </div>

          {/* Heading */}
          <h2 className="font-elegant text-4xl lg:text-5xl font-medium text-primary leading-tight mb-4">
            Loved by Our Customers
          </h2>

          {/* Floral divider */}
          <div className="flex items-center justify-center gap-3 pb-3">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-primary"></div>
            <img src="../../icon/patel-leafs.png" className='w-6' alt="" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-primary" ></div>
          </div>

          <p className="font-sans text-[#6B6B5E] text-base lg:text-lg max-w-xl mx-auto">
            Real stories from people who brought Anom Flora into their spaces.
          </p>
        </div>

        {/* ════ REVIEW CARDS ════ */}
        <div className="t-cards-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((r, index) => (
            <div
              key={r.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="t-card group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-marble hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="shrink-0 absolute top-0 right-0 w-full h-full z-0 rounded-xl overflow-hidden ">
                <img
                  src={r.productImg}
                  alt="Anom Flora arrangement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-1 object-top-right"
                />
              </div>
              <div className='size-full absolute bg-black/70 top-0 left-0 z-2'></div>

              <div className="relative z-10 ">
                <span
                  aria-hidden="true"
                  className="absolute top-2 right-4 font-serif text-8xl leading-none text-marble/80 select-none pointer-events-none"
                >
                  "
                </span>

                {/* Stars */}
                <div className="mb-4">
                  <StarRow count={r.stars} />
                </div>

                {/* Text + Product image */}
                <div className="flex gap-4 mb-6">
                  <p className="font-sans text-white text-sm leading-relaxed flex-1 pr-30 md:pr-0 lg:pr-30">
                    {r.text}
                  </p>

                </div>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-4 border-t border-marble">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gold/40 shrink-0"
                  />
                  <div>
                    <p className="font-sans font-semibold text-sm text-warm-white">{r.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <svg viewBox="0 0 20 20" fill="#C4A265" className="w-3.5 h-3.5 shrink-0">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5Z" clipRule="evenodd" />
                      </svg>
                      <span className="font-sans text-[10px] text-warm-gray tracking-wide">
                        Verified Buyer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative giant quote mark */}

            </div>
          ))}
        </div>

        {/* ════ STATS BAR ════ */}
        <div className="t-stats-row bg-white/60 backdrop-blur-sm rounded-2xl border border-marble px-8 py-4 md:py-8 flex flex-col md:flex-row items-center gap-2 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-marble">

          {/* Rating block */}
          <div className="t-stat flex flex-col items-center md:items-start lg:pr-12 gap-1.5 w-full md:w-auto py-4 md:py-0">
            <div className="flex items-end gap-1">
              <span className="font-serif text-5xl font-bold text-charcoal leading-none">4.9</span>
              <span className="font-serif text-2xl text-warm-gray mb-0.5">/5</span>
            </div>
            <StarRow count={5} />
            <p className="font-sans text-xs text-warm-gray mt-1 tracking-wide">
              From 2,500+ Happy Customers
            </p>
          </div>

          {/* Feature icons */}
          <div className='flex lg:flex-1 md:pr-12 w-full md:w-auto flex-row items-center gap-8 md:gap-0 md:divide-y-0 md:divide-x divide-marble'>
            {stats.map((s, i) => (
              <div
                key={i}
                className="t-stat flex flex-col items-center text-center md:flex-1 md:px-8 gap-3 py-4 md:py-0"
              >
                <div className="w-13 h-13 rounded-full border border-gold/35 flex items-center justify-center text-gold bg-cream p-3">
                  {s.icon}
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-charcoal">{s.label}</p>
                  <p className="font-sans text-xs text-warm-gray mt-0.5 max-md:hidden">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ════ FOOTER TAGLINE ════ */}
        <div className="t-tagline text-center mt-12">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-24 bg-gold/40" />
            <p className="font-elegant italic text-warm-gray text-base lg:text-lg whitespace-nowrap">
              Thousands of homes and hearts, beautifully served.
            </p>
            <span className="h-px w-24 bg-gold/40" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
