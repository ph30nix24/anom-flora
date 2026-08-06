import React from 'react';

/* ──────────────────────────────────────────────────────────────
   ANOM FLORA — Hero Section
   Layout (z-index layers, bottom → top):
     0  background gradient (warm beige)
     1  diagonal light-ray overlay + left shadow
     5  "BLOOM" giant white serif text
    10  flower arrangement image (mix-blend-mode: multiply)
    20  left text panel (ANOM / Flora / tagline / CTA)
    40  bottom strip (features + category thumbnails)
────────────────────────────────────────────────────────────── */

const FlowerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b6260" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2a2.5 2.5 0 012.5 2.5c0 1.38-1.12 2.5-2.5 2.5S9.5 5.88 9.5 4.5A2.5 2.5 0 0112 2z"/>
    <path d="M12 17a2.5 2.5 0 012.5 2.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5A2.5 2.5 0 0112 17z"/>
    <path d="M2 12a2.5 2.5 0 012.5-2.5c1.38 0 2.5 1.12 2.5 2.5S5.88 14.5 4.5 14.5A2.5 2.5 0 012 12z"/>
    <path d="M17 12a2.5 2.5 0 012.5-2.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5A2.5 2.5 0 0117 12z"/>
  </svg>
);
const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b6260" strokeWidth="1.2" strokeLinecap="round">
    <path d="M12 22V12"/>
    <path d="M12 12C12 7 8 4 4 3c0 5 2 9 8 9z"/>
    <path d="M12 12c0-5 4-8 8-9 0 5-2 9-8 9z"/>
  </svg>
);
const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b6260" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const GiftIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b6260" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12"/>
    <rect x="2" y="7" width="20" height="5"/>
    <line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
  </svg>
);

const features = [
  { Icon: FlowerIcon, title: 'Premium Quality',       desc: 'Finest artificial flowers crafted with care.' },
  { Icon: LeafIcon,   title: 'Long Lasting',           desc: 'Beautiful blooms that last forever.' },
  { Icon: HomeIcon,   title: 'Perfect for Any Space',  desc: 'Ideal for home, office & special occasions.' },
  { Icon: GiftIcon,   title: 'Thoughtful Gift',        desc: 'Spread beauty and joy with every bouquet.' },
];

const categories = [
  { src: '/images/bouquets_category.jpg',      label: 'BOUQUETS',      id: 'cat-bouquets' },
  { src: '/images/potted_plants_category.jpg', label: 'POTTED PLANTS', id: 'cat-potted-plants' },
  { src: '/images/arrangements_category.jpg',  label: 'ARRANGEMENTS',  id: 'cat-arrangements' },
];

export default function Hero() {
  const [ctaHover, setCtaHover] = React.useState(false);

  return (
    <section
      id="hero-section"
      aria-label="Hero"
      className="relative w-full h-screen min-h-[640px] overflow-hidden flex flex-col"
      style={{ background: 'linear-gradient(160deg, #f2e8d9 0%, #e9d9c4 35%, #e4d3bc 65%, #dcceba 100%)' }}
    >

      {/* ── Diagonal light ray (z:1) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(118deg, transparent 0%, rgba(255,248,232,0.55) 28%, rgba(255,248,232,0.22) 50%, transparent 70%)' }}
      />

      {/* ── Left-edge leaf shadow (z:1) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(155,138,112,0.16) 0%, transparent 24%)' }}
      />

      {/* ══════════ MAIN CONTENT AREA ══════════ */}
      <div className="relative flex-1">

        {/* ── LEFT TEXT PANEL (z:20) ── */}
        <div className="absolute top-[68px] left-0 w-[360px] pt-[52px] pl-[52px] z-[20]">
          <h1 className="m-0">
            <span
              className="font-elegant text-[90px] font-bold text-[#1e2d18] tracking-[0.04em] leading-[0.88] block"
            >
              ANOM
            </span>
            <span
              className="font-script text-[88px] text-[#b8922e] leading-none block mt-[-4px] ml-[10px]"
            >
              Flora
            </span>
          </h1>

          {/* Gold ornament divider */}
          <div className="flex items-center gap-[10px] my-5">
            <div
              className="h-px w-[56px]"
              style={{ background: 'linear-gradient(to right, #c4a050, transparent)' }}
            />
            <span className="text-[13px] text-[#c4a050] leading-none">✦</span>
          </div>

          <p className="font-sans text-[15.5px] font-normal text-[#4a4a4a] leading-relaxed max-w-[230px] m-0">
            Timeless Artificial Flowers<br/>for Every Space.
          </p>

          <button
            id="hero-explore-btn"
            className={[
              'inline-block mt-7 px-[30px] py-[13px]',
              'text-white font-sans text-[11px] font-semibold tracking-[0.17em] uppercase',
              'border-none rounded-full cursor-pointer',
              'transition-all duration-300 ease-in-out',
              ctaHover
                ? 'bg-[#3d5737] shadow-[0_8px_28px_rgba(45,65,40,0.28)]'
                : 'bg-[#2d4128] shadow-none',
            ].join(' ')}
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
          >
            EXPLORE COLLECTION
          </button>
        </div>

        {/* ── BLOOM TEXT (z:5) — BEHIND flower image ── */}
        <div
          aria-hidden="true"
          className="absolute bottom-[8px] left-[26%] right-0 z-[5] pointer-events-none select-none leading-[0.82]"
        >
          <span
            className="font-serif font-black text-[rgba(255,255,255,0.94)] tracking-[-0.01em] block whitespace-nowrap"
            style={{ fontSize: 'clamp(90px, 13.5vw, 172px)' }}
          >
            BLOOM
          </span>
        </div>

        {/* ── FLOWER IMAGE (z:10, mix-blend-mode:multiply) ── */}
        <div
          className="absolute top-[-10px] right-[-20px] left-[16%] bottom-0 z-[10] pointer-events-none overflow-hidden flex items-end justify-center"
        >
          <img
            src="/images/flowers_white_bg.png"
            alt="Luxurious artificial flower arrangement with cream dahlias, pink peonies and sage eucalyptus"
            className="w-full h-full object-cover object-bottom block"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>

      </div>{/* main content */}


      {/* ══════════ BOTTOM STRIP (z:40) ══════════ */}
      <div
        className="relative z-[40] h-[150px] shrink-0 flex items-center justify-between px-[52px] gap-5"
        style={{
          background: 'rgba(241,231,214,0.80)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(180,155,120,0.2)',
        }}
      >

        {/* Feature icons */}
        <div className="flex items-start">
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center w-[130px] gap-[5px]"
            >
              <div
                className="w-[46px] h-[46px] rounded-full flex items-center justify-center mb-[2px]"
                style={{
                  background: 'rgba(255,255,255,0.52)',
                  border: '1px solid rgba(180,155,120,0.22)',
                }}
              >
                <Icon/>
              </div>
              <p className="font-sans text-[9.5px] font-bold tracking-[0.1em] text-charcoal uppercase leading-[1.3] m-0">
                {title}
              </p>
              <p className="font-sans text-[9.5px] font-normal text-[rgba(60,55,50,0.65)] leading-[1.45] max-w-[110px] m-0">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Category thumbnails */}
        <div className="flex items-start gap-3 shrink-0">
          {categories.map(({ src, label, id }) => (
            <a
              key={id}
              href="#"
              id={id}
              className="flex flex-col items-center gap-[7px] no-underline cursor-pointer group"
            >
              <img
                src={src}
                alt={label}
                className="w-[130px] h-[100px] object-cover rounded-[10px] block transition-[transform,box-shadow] duration-[320ms] ease-out group-hover:scale-[1.06]"
                style={{ boxShadow: '0 4px 18px rgba(0,0,0,0.13)' }}
              />
              <p className="font-sans text-[9px] font-bold tracking-[0.18em] text-charcoal uppercase m-0">
                {label}
              </p>
            </a>
          ))}
        </div>

      </div>{/* bottom strip */}

    </section>
  );
}
