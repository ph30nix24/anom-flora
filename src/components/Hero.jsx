import React from 'react';

/* ──────────────────────────────────────────────────────────────
   ANOM FLORA — Hero Section
   Pixel-perfect match to reference design:

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
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '640px',
        overflow: 'hidden',
        /* Warm beige — matches the reference exactly */
        background: 'linear-gradient(160deg, #f2e8d9 0%, #e9d9c4 35%, #e4d3bc 65%, #dcceba 100%)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      {/* ── Diagonal light ray (z:1) ── */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(118deg, transparent 0%, rgba(255,248,232,0.55) 28%, rgba(255,248,232,0.22) 50%, transparent 70%)',
      }}/>

      {/* ── Left-edge leaf shadow (z:1) ── */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(155,138,112,0.16) 0%, transparent 24%)',
      }}/>

      {/* ══════════ MAIN CONTENT AREA ══════════ */}
      <div style={{ position: 'relative', flex: 1 }}>

        {/* ── LEFT TEXT PANEL (z:20) ── */}
        <div style={{
          position: 'absolute',
          top: '68px',     // navbar height
          left: 0,
          width: '360px',
          padding: '52px 0 0 52px',
          zIndex: 20,
        }}>
          <h1 style={{ margin: 0 }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '90px',
              fontWeight: 700,
              color: '#1e2d18',
              letterSpacing: '0.04em',
              lineHeight: 0.88,
              display: 'block',
            }}>ANOM</span>
            <span style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: '88px',
              color: '#b8922e',
              lineHeight: 1,
              display: 'block',
              marginTop: '-4px',
              marginLeft: '10px',
            }}>Flora</span>
          </h1>

          {/* Gold ornament divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '20px 0 22px' }}>
            <div style={{ height: '1px', width: '56px', background: 'linear-gradient(to right, #c4a050, transparent)' }}/>
            <span style={{ fontSize: '13px', color: '#c4a050', lineHeight: 1 }}>✦</span>
          </div>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15.5px',
            fontWeight: 400,
            color: '#4a4a4a',
            lineHeight: 1.6,
            maxWidth: '230px',
            margin: 0,
          }}>
            Timeless Artificial Flowers<br/>for Every Space.
          </p>

          <button
            id="hero-explore-btn"
            style={{
              display: 'inline-block',
              marginTop: '28px',
              padding: '13px 30px',
              background: ctaHover ? '#3d5737' : '#2d4128',
              boxShadow: ctaHover ? '0 8px 28px rgba(45,65,40,0.28)' : 'none',
              color: '#fff',
              fontFamily: "'Inter', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.17em',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '9999px',
              cursor: 'pointer',
              transition: 'background 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
          >
            EXPLORE COLLECTION
          </button>
        </div>

        {/* ── BLOOM TEXT (z:5) — BEHIND flower image ── */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          bottom: '8px',
          left: '26%',
          right: 0,
          zIndex: 5,
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 0.82,
        }}>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(90px, 13.5vw, 172px)',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.94)',
            letterSpacing: '-0.01em',
            display: 'block',
            whiteSpace: 'nowrap',
          }}>
            BLOOM
          </span>
        </div>

        {/* ── FLOWER IMAGE (z:10, mix-blend-mode:multiply) ── */}
        {/* Sits ABOVE the BLOOM text; white bg merges with hero bg via multiply */}
        <div style={{
          position: 'absolute',
          top: '-10px',
          right: '-20px',
          left: '16%',
          bottom: 0,
          zIndex: 10,
          pointerEvents: 'none',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
          <img
            src="/images/flowers_white_bg.png"
            alt="Luxurious artificial flower arrangement with cream dahlias, pink peonies and sage eucalyptus"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center bottom',
              mixBlendMode: 'multiply',
              display: 'block',
            }}
          />
        </div>

      </div>{/* main content */}


      {/* ══════════ BOTTOM STRIP (z:40) ══════════ */}
      <div style={{
        position: 'relative',
        zIndex: 40,
        height: '150px',
        flexShrink: 0,
        background: 'rgba(241,231,214,0.80)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(180,155,120,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 52px',
        gap: '20px',
      }}>

        {/* Feature icons */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="hero-feature-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                width: '130px',
                gap: '5px',
              }}
            >
              <div style={{
                width: '46px', height: '46px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.52)',
                border: '1px solid rgba(180,155,120,0.22)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2px',
              }}>
                <Icon/>
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#2c2c2c',
                textTransform: 'uppercase',
                lineHeight: 1.3,
                margin: 0,
              }}>{title}</p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '9.5px',
                fontWeight: 400,
                color: 'rgba(60,55,50,0.65)',
                lineHeight: 1.45,
                maxWidth: '110px',
                margin: 0,
              }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Category thumbnails */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flexShrink: 0 }}>
          {categories.map(({ src, label, id }) => (
            <a
              key={id}
              href="#"
              id={id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '7px',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector('img');
                if (img) { img.style.transform = 'scale(1.06)'; img.style.boxShadow = '0 8px 28px rgba(0,0,0,0.18)'; }
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector('img');
                if (img) { img.style.transform = 'scale(1)'; img.style.boxShadow = '0 4px 18px rgba(0,0,0,0.13)'; }
              }}
            >
              <img
                src={src}
                alt={label}
                style={{
                  width: '130px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.13)',
                  transition: 'transform 0.32s ease, box-shadow 0.32s ease',
                  display: 'block',
                }}
              />
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: '#2c2c2c',
                textTransform: 'uppercase',
                margin: 0,
              }}>{label}</p>
            </a>
          ))}
        </div>

      </div>{/* bottom strip */}

    </section>
  );
}
