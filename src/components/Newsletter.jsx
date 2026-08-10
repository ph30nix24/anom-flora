import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const [email, setEmail]         = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const sectionRef   = useRef(null);
  const eyebrowRef   = useRef(null);
  const heading1Ref  = useRef(null);
  const heading2Ref  = useRef(null);
  const dividerRef   = useRef(null);
  const paraRef      = useRef(null);
  const formRef      = useRef(null);
  const noteRef      = useRef(null);
  const imageWrapRef = useRef(null);
  const featureRefs  = useRef([]);
  const bottomBarRef = useRef(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  useGSAP(() => {
    const st = { trigger: sectionRef.current, start: 'top 78%' };

    // ── Image panel slides from right ──
    gsap.fromTo(imageWrapRef.current,
      { x: 80, opacity: 0, scale: 1.04 },
      { x: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: st }
    )

    // ── Eyebrow ──
    gsap.fromTo(eyebrowRef.current,
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { ...st, start: 'top 75%' } }
    )

    // ── Heading clip-path reveal ──
    gsap.fromTo(
      [heading1Ref.current, heading2Ref.current],
      { y: 48, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
      {
        y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)',
        duration: 0.9, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { ...st, start: 'top 72%' }
      }
    )

    // ── Divider + paragraph ──
    gsap.fromTo(
      [dividerRef.current, paraRef.current],
      { y: 20, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { ...st, start: 'top 68%' }
      }
    )

    // ── Form slides up ──
    gsap.fromTo(formRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { ...st, start: 'top 65%' } }
    )

    // ── Spam note ──
    gsap.fromTo(noteRef.current,
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { ...st, start: 'top 62%' } }
    )

    // ── Bottom feature cards stagger ──
    gsap.fromTo(
      featureRefs.current.filter(Boolean),
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.75, stagger: 0.13, ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: bottomBarRef.current,
          start: 'top 88%',
        }
      }
    )
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-cream overflow-hidden font-[Montserrat,sans-serif] md:p-10">

      <div className='w-full md:border md:border-gold/50 md:rounded-3xl h-fit overflow-hidden'>
        <div className="w-full flex md:h-[40vh] lg:h-[80vh] bg-cream-dark max-md:flex-col">

          {/* Text side */}
          <div className='w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center items-center max-md:order-2'>
            <div className="text-center lg:mb-10 max-md:py-10 max-md:px-5">

              <div ref={eyebrowRef} className="flex items-center justify-center gap-3 lg:mb-3">
                <img src="../../icon/leaf-icon.webp" className='w-8 md:w-6 lg:w-8 -scale-x-90' alt="" />
                <p className="text-xs tracking-[0.25em] text-prime-yellow uppercase font-semibold">
                  Stay in Bloom
                </p>
                <img src="../../icon/leaf-icon.webp" className='w-8 md:w-6 lg:w-8' alt="" />
              </div>

              <h2 ref={heading1Ref} className="font-elegant text-center lg:pl-10 text-4xl md:text-4xl lg:text-7xl font-medium text-primary leading-tight">
                Let's Keep in Touch
              </h2>
              <h2 ref={heading2Ref} className="font-script text-4xl md:text-4xl lg:text-7xl leading-tight mt-1 text-prime-yellow">
                with Beauty
              </h2>

              <p ref={paraRef} className="text-warm-gray text-sm md:text-xs lg:mt-4 max-w-sm md:px-5 lg:max-w-md mx-auto leading-relaxed">
                Be the first to know about new arrivals, exclusive offers,
                floral inspiration and everything happening at Anom Flora.
              </p>

              <div ref={dividerRef} className="flex items-center justify-center gap-3 mt-2 lg:mt-5">
                <div className="h-px w-16 bg-linear-to-r from-transparent to-primary"></div>
                <img src="../../icon/patel-leafs.webp" className='w-6 md:w-4 lg:w-6' alt="" />
                <div className="h-px w-16 bg-linear-to-l from-transparent to-primary"></div>
              </div>

              <form ref={formRef} onSubmit={handleSubscribe} className="flex items-center gap-0 md:max-w-sm lg:max-w-lg mx-auto mb-4 mt-4 lg:mt-15">
                <div className="flex items-center flex-1 bg-white border border-[#E2D8CE] rounded-l-lg px-4 py-3 gap-3 shadow-sm">
                  <svg className='size-3.5 lg:size-4.5' viewBox="0 0 24 24" fill="none" stroke="#B5AA9E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 outline-none border-none bg-transparent text-xs lg:text-base text-[#4A4535] placeholder-[#B5AA9E] font-[Montserrat,sans-serif]"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-prime-yellow hover:bg-[#A97828] active:scale-[0.97] text-white text-[10px] lg:text-sm font-bold tracking-[0.15em] uppercase px-3 lg:px-6 py-3.25 lg:py-[14.5px] rounded-r-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  {subscribed ? (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              <div ref={noteRef} className="flex items-center gap-2 lg:pl-10 w-full">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-prime-yellow">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-xs text-[#8A8270]">No spam. Unsubscribe anytime.</span>
              </div>

            </div>
          </div>

          {/* Image side */}
          <div ref={imageWrapRef} className='w-full max-md:order-1 md:w-2/5 lg:w-1/2 relative h-full'>
            <img src="../../images/newsletter.webp" className='size-full object-cover z-1' alt="" />
            <div className='absolute top-0 left-0 w-full h-full bg-radial-[circle_at_top] md:bg-radial-[circle_at_right] from-transparent via-transparent to-cream-dark to-95% md:to-80% lg:to-90% z-5'></div>
          </div>
        </div>

        {/* Bottom feature cards */}
        <div ref={bottomBarRef} className="w-full mx-auto px-6 lg:px-36 py-10 bg-white/70">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-0 sm:divide-x sm:divide-[#E8DDD0]">

            {[
              {
                icon: '../../icon/news-leaf.webp',
                title: 'Exclusive Offers',
                desc: 'Special discounts and early access to collections.',
                padding: 'sm:pr-8 lg:pr-16',
              },
              {
                icon: '../../icon/news-flower.webp',
                title: 'Floral Inspiration',
                desc: 'Tips, trends and ideas to brighten your space.',
                padding: 'sm:px-8 lg:px-16',
              },
              {
                icon: '../../icon/news-new.webp',
                title: 'New Arrivals',
                desc: 'Be the first to explore our latest blooms.',
                padding: 'sm:pl-8 lg:pl-16',
              },
            ].map((card, i) => (
              <div
                key={i}
                ref={el => featureRefs.current[i] = el}
                className={`flex items-center lg:items-start md:flex-col lg:flex-row gap-4 md:gap-2 lg:gap-4 ${card.padding} group`}
              >
                <div className="shrink-0 w-12 h-12 rounded-full border border-[#E2D8CE] bg-[#FAF4EC] flex items-center justify-center group-hover:border-prime-yellow transition duration-300 group-hover:scale-110 transition">
                  <img src={card.icon} alt="" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-[0.15em] text-[#2C2A1E] uppercase mb-1.5 md:text-center lg:text-start">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#7A7464] leading-relaxed md:text-center lg:text-start">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
