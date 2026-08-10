import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reviews, stats } from '../utils';

gsap.registerPlugin(ScrollTrigger);

/* ── Data ─────────────────────────────────────── */


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
  const sectionRef  = useRef(null);
  const eyebrowRef  = useRef(null);
  const headingRef  = useRef(null);
  const dividerRef  = useRef(null);
  const subRef      = useRef(null);
  const cardsRef    = useRef([]);
  const statsBarRef = useRef(null);
  const ratingRef   = useRef(null);
  const statItemsRef= useRef([]);
  const taglineRef  = useRef(null);
  const leafLRef    = useRef(null);
  const leafRRef    = useRef(null);

  useGSAP(() => {
    const st = { trigger: sectionRef.current, start: 'top 78%' };

    // ── Decorative leaves drift in ──
    gsap.fromTo(leafLRef.current,
      { x: -40, opacity: 0, rotate: -15 },
      { x: 0, opacity: 0.8, rotate: 0, duration: 1.2, ease: 'power2.out', scrollTrigger: st }
    );
    gsap.fromTo(leafRRef.current,
      { x: 40, opacity: 0, rotate: 15 },
      { x: 0, opacity: 1, rotate: 0, duration: 1.2, ease: 'power2.out', scrollTrigger: st }
    );

    // ── Eyebrow label ──
    gsap.fromTo(eyebrowRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', scrollTrigger: { ...st, start: 'top 75%' } }
    );

    // ── Heading clip-path reveal ──
    gsap.fromTo(headingRef.current,
      { y: 50, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
      { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.95, ease: 'power3.out',
        scrollTrigger: { ...st, start: 'top 72%' } }
    );

    // ── Divider & sub line ──
    gsap.fromTo([dividerRef.current, subRef.current],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { ...st, start: 'top 68%' } }
    );

    // ── Review cards — fan in from below ──
    cardsRef.current.filter(Boolean).forEach((card, i) => {
      const dir = i === 0 ? -1 : i === 2 ? 1 : 0;
      gsap.fromTo(card,
        { y: 70, opacity: 0, rotateX: 10, rotateZ: dir * 4 },
        {
          y: 0, opacity: 1, rotateX: 0, rotateZ: 0,
          duration: 0.95, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 90%' },
          delay: i * 0.12,
        }
      );
    });

    // ── Stats bar slides up as a unit ──
    gsap.fromTo(statsBarRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: statsBarRef.current, start: 'top 90%' } }
    );

    // ── Rating number count-up ──
    gsap.fromTo(ratingRef.current,
      { innerText: 0 },
      {
        innerText: 4.9,
        duration: 1.6,
        ease: 'power1.out',
        snap: { innerText: 0.1 },
        scrollTrigger: { trigger: statsBarRef.current, start: 'top 90%' },
        onUpdate() {
          if (ratingRef.current)
            ratingRef.current.textContent = parseFloat(ratingRef.current.innerText || 0).toFixed(1);
        },
      }
    );

    // ── Stat icon items pop in ──
    gsap.fromTo(statItemsRef.current.filter(Boolean),
      { y: 30, opacity: 0, scale: 0.85 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.1, ease: 'back.out(1.6)',
        scrollTrigger: { trigger: statsBarRef.current, start: 'top 88%' }
      }
    );

    // ── Tagline wipes in ──
    gsap.fromTo(taglineRef.current,
      { opacity: 0, scaleX: 0.6, transformOrigin: 'center center' },
      { opacity: 1, scaleX: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: taglineRef.current, start: 'top 92%' } }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="customer-reviews"
      className="relative overflow-hidden bg-cream py-20 px-4 md:px-10 lg:px-16"
    >
      {/* ── Decorative leaf top-left ── */}
      <div ref={leafLRef} aria-hidden="true" className="pointer-events-none absolute top-0 -left-8 select-none opacity-100 z-10">
        <img src="../../images/test-bg.webp" className='size-100 object-contain drop-shadow-lg' alt="" />
      </div>

      {/* ── Decorative branch bottom-right ── */}
      <div ref={leafRRef} aria-hidden="true" className="pointer-events-none absolute bottom-8 right-0 select-none">
        <svg viewBox="0 0 160 280" className="w-36 h-64" fill="none">
          <path d="M80 270 Q70 180 40 100" stroke="#4A6741" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="40" cy="100" rx="30" ry="14" transform="rotate(-40 40 100)" fill="#6B8F62" opacity="0.6" />
          <ellipse cx="90" cy="150" rx="26" ry="12" transform="rotate(20 90 150)" fill="#6B8F62" opacity="0.5" />
          <ellipse cx="55" cy="55" rx="20" ry="10" transform="rotate(-60 55 55)" fill="#6B8F62" opacity="0.4" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ════ HEADER ════ */}
        <div className="text-center mb-14">
          <div ref={eyebrowRef} className="flex items-center justify-center gap-3 mb-3">
            <img src="../../icon/leaf-icon.webp" className='w-8 -scale-x-90' alt="" />
            <p className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: '#C08D34' }}>
              Customer Reviews
            </p>
            <img src="../../icon/leaf-icon.webp" className='w-8' alt="" />
          </div>

          <h2 ref={headingRef} className="font-elegant text-4xl lg:text-5xl font-medium text-primary leading-tight mb-4">
            Loved by Our Customers
          </h2>

          <div ref={dividerRef} className="flex items-center justify-center gap-3 pb-3">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-primary"></div>
            <img src="../../icon/patel-leafs.webp" className='w-6' alt="" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-primary"></div>
          </div>

          <p ref={subRef} className="font-sans text-[#6B6B5E] text-base lg:text-lg max-w-xl mx-auto">
            Real stories from people who brought Anom Flora into their spaces.
          </p>
        </div>

        {/* ════ REVIEW CARDS ════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" style={{ perspective: '800px' }}>
          {reviews.map((r, index) => (
            <div
              key={r.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-marble hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="shrink-0 absolute top-0 right-0 w-full h-full z-0 rounded-xl overflow-hidden">
                <img
                  src={r.productImg}
                  alt="Anom Flora arrangement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-1 object-top-right"
                />
              </div>
              <div className='size-full absolute bg-black/70 top-0 left-0 z-2'></div>

              <div className="relative z-10">
                <span aria-hidden="true" className="absolute top-2 right-4 font-serif text-8xl leading-none text-marble/80 select-none pointer-events-none">"</span>
                <div className="mb-4"><StarRow count={r.stars} /></div>
                <div className="flex gap-4 mb-6">
                  <p className="font-sans text-white text-sm leading-relaxed flex-1 pr-30 md:pr-0 lg:pr-30">{r.text}</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-marble">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover border-2 border-gold/40 shrink-0" />
                  <div>
                    <p className="font-sans font-semibold text-sm text-warm-white">{r.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <svg viewBox="0 0 20 20" fill="#C4A265" className="w-3.5 h-3.5 shrink-0">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5Z" clipRule="evenodd" />
                      </svg>
                      <span className="font-sans text-[10px] text-warm-gray tracking-wide">Verified Buyer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ════ STATS BAR ════ */}
        <div
          ref={statsBarRef}
          className="bg-white/60 backdrop-blur-sm rounded-2xl border border-marble px-8 py-4 md:py-8 flex flex-col md:flex-row items-center gap-2 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-marble"
        >
          {/* Rating block */}
          <div className="flex flex-col items-center md:items-start lg:pr-12 gap-1.5 w-full md:w-auto py-4 md:py-0">
            <div className="flex items-end gap-1">
              <span ref={ratingRef} className="font-serif text-5xl font-bold text-charcoal leading-none">4.9</span>
              <span className="font-serif text-2xl text-warm-gray mb-0.5">/5</span>
            </div>
            <StarRow count={5} />
            <p className="font-sans text-xs text-warm-gray mt-1 tracking-wide">From 2,500+ Happy Customers</p>
          </div>

          {/* Stat icons */}
          <div className='flex lg:flex-1 md:pr-12 w-full md:w-auto flex-row items-center gap-8 md:gap-0 md:divide-y-0 md:divide-x divide-marble'>
            {stats.map((s, i) => (
              <div
                key={i}
                ref={el => statItemsRef.current[i] = el}
                className="flex flex-col items-center text-center md:flex-1 md:px-8 gap-3 py-4 md:py-0"
              >
                <div className="w-13 h-13 rounded-full border border-gold/35 flex items-center justify-center text-gold bg-cream p-3">
                  <s.icon />
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
        <div ref={taglineRef} className="text-center mt-12">
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
