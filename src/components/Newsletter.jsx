import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const headerRef = React.useRef(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  return (
    <section className="w-full bg-cream overflow-hidden font-[Montserrat,sans-serif] p-10">

      <div className='w-full border border-gold/50 rounded-3xl h-fit overflow-hidden '>
        <div className="w-full flex h-[80vh] bg-cream-dark">
          <div className='w-1/2 flex flex-col justify-center items-center'>
            <div ref={headerRef} className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img src="../../icon/leaf-icon.png" className='w-8 -scale-x-90' alt="" />
                <p className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: '#C08D34' }}>
                  Stay in Bloom
                </p>
                <img src="../../icon/leaf-icon.png" className='w-8' alt="" />
              </div>

              <h2 className="font-elegant text-center lg:pl-10 text-4xl md:text-5xl lg:text-7xl font-medium text-primary leading-tight">
                Let's Keep in Touch
              </h2>
              <h2 className="font-script text-4xl md:text-5xl lg:text-7xl leading-tight mt-1 text-prime-yellow">
                with Beauty
              </h2>

              <p className="text-warm-gray text-sm md:text-sm mt-4 max-w-md mx-auto leading-relaxed">
                Be the first to know about new arrivals, exclusive offers,
                floral inspiration and everything happening at Anom Flora.
              </p>

              {/* Ornamental divider */}
              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="h-px w-16 bg-linear-to-r from-transparent to-primary"></div>
                <img src="../../icon/patel-leafs.png" className='w-6' alt="" />
                <div className="h-px w-16 bg-linear-to-l from-transparent to-primary" ></div>
              </div>

              <form onSubmit={handleSubscribe} className="flex items-center gap-0 max-w-lg mx-auto mb-4 mt-15">
                <div className="flex items-center flex-1 bg-white border border-[#E2D8CE] rounded-l-lg px-4 py-3 gap-3 shadow-sm">
                  {/* mail icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B5AA9E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 outline-none border-none bg-transparent text-base text-[#4A4535] placeholder-[#B5AA9E] font-[Montserrat,sans-serif]"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#C08D34] hover:bg-[#A97828] active:scale-[0.97] text-white text-sm font-bold tracking-[0.15em] uppercase px-6 py-[14.5px] rounded-r-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
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
              <div className="flex items-center gap-2 lg:pl-10 w-full">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C08D34]">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-xs text-[#8A8270]">No spam. Unsubscribe anytime.</span>
              </div>

              {/* View All — top right */}

            </div>
          </div>
          <div className='w-1/2 relative h-full'>
            <img src="../../images/newsletter.png" className='size-full object-cover z-1' alt="" />
            <div className='absolute top-0 left-0 w-full h-full bg-radial-[circle_at_right] from-transparent via-transparent to-cream-dark  to-90% z-5'></div>
          </div>
        </div>

        {/* ── BOTTOM ROW: 3 feature cards ── */}
        <div className="w-full mx-auto px-6 lg:px-36 py-10 bg-white/70">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-0 sm:divide-x sm:divide-[#E8DDD0]">

            {/* Card 1 – Exclusive Offers */}
            <div className="flex items-start gap-4 sm:pr-8 lg:pr-16 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#E2D8CE] bg-[#FAF4EC] flex items-center justify-center group-hover:border-[#C08D34] transition-colors duration-200">
                <img src="../../icon/news-leaf.png" alt="" />
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.15em] text-[#2C2A1E] uppercase mb-1.5">
                  Exclusive Offers
                </h3>
                <p className="text-[13px] text-[#7A7464] leading-relaxed">
                  Special discounts and early access to collections.
                </p>
              </div>
            </div>

            {/* Card 2 – Floral Inspiration */}
            <div className="flex items-start gap-4 sm:px-8 lg:px-16 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#E2D8CE] bg-[#FAF4EC] flex items-center justify-center group-hover:border-[#C08D34] transition-colors duration-200">
                <img src="../../icon/news-flower.png" alt="" />
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.15em] text-[#2C2A1E] uppercase mb-1.5">
                  Floral Inspiration
                </h3>
                <p className="text-[13px] text-[#7A7464] leading-relaxed">
                  Tips, trends and ideas to brighten your space.
                </p>
              </div>
            </div>

            {/* Card 3 – New Arrivals */}
            <div className="flex items-start gap-4 sm:pl-8 lg:pl-16 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#E2D8CE] bg-[#FAF4EC] flex items-center justify-center group-hover:border-[#C08D34] transition-colors duration-200">
                <img src="../../icon/news-new.png" alt="" />
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.15em] text-[#2C2A1E] uppercase mb-1.5">
                  New Arrivals
                </h3>
                <p className="text-[13px] text-[#7A7464] leading-relaxed">
                  Be the first to explore our latest blooms.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
