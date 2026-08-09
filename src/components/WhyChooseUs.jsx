import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { features } from '../utils';

gsap.registerPlugin(ScrollTrigger);



const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Badge animation
      gsap.from('.why-badge', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Heading animation
      gsap.from('.why-heading > *', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      });

      // Divider + description
      gsap.from('.why-desc-block > *', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Image panel
      gsap.from('.why-image-panel', {
        scrollTrigger: {
          trigger: '.why-content-row',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Feature cards stagger
      gsap.from('.why-feature-card', {
        scrollTrigger: {
          trigger: '.why-content-row',
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Feature icons pop
      gsap.from('.why-icon-circle', {
        scrollTrigger: {
          trigger: '.why-content-row',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(2)',
        delay: 0.4,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="why-section"
      style={{
        background: 'linear-gradient(135deg, #fdf8f2 0%, #f9f0e6 40%, #fdf6ee 100%)',
        padding: '80px 0 96px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle decorative leaf top-right */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 260,
          height: 260,
          backgroundImage: "url('/images/why-bg-second.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.07,
          pointerEvents: 'none',
          borderRadius: '0 0 0 100%',
        }}
      />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          {/* Badge */}
          <div className="why-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--color-gold)' }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '0.22em',
                fontWeight: 600,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
              }}
            >
              ✦ &nbsp;Why Anom Flora?&nbsp; ✦
            </span>
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--color-gold)' }} />
          </div>

          {/* Heading */}
          <div className="why-heading">
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                fontWeight: 700,
                color: 'var(--color-charcoal)',
                lineHeight: 1.15,
                margin: '0 0 4px',
              }}
            >
              More Than Flowers,
            </h2>
            <div
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                background: 'linear-gradient(135deg, var(--color-blush-dark) 0%, var(--color-gold) 50%, var(--color-blush-dark) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              It's Our Promise
            </div>
          </div>

          {/* Divider + description */}
          <div className="why-desc-block" style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ display: 'block', width: 48, height: 1, background: 'var(--color-blush-dark)' }} />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-blush-dark)">
                <path d="M12 2C9 2 6.5 4.5 6.5 7.5c0 1.8.8 3.4 2 4.5C5.9 13.1 4 15.3 4 18h16c0-2.7-1.9-4.9-4.5-6 1.2-1.1 2-2.7 2-4.5C17.5 4.5 15 2 12 2z"/>
              </svg>
              <span style={{ display: 'block', width: 48, height: 1, background: 'var(--color-blush-dark)' }} />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--color-warm-gray)',
                maxWidth: 500,
                margin: '0 auto',
                lineHeight: 1.75,
              }}
            >
              At Anom Flora, we believe in creating everlasting beauty
              with uncompromising quality and a passion for perfection.
            </p>
          </div>
        </div>

        {/* ── Main Content Row ── */}
        <div
          className="why-content-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.65fr',
            gap: 36,
            alignItems: 'stretch',
          }}
        >
          {/* Left – Flower Image Panel */}
          <div
            className="why-image-panel"
            style={{
              position: 'relative',
              borderRadius: '28px 28px 120px 28px',
              overflow: 'hidden',
              minHeight: 500,
              boxShadow: '0 24px 60px rgba(196,162,101,0.18), 0 4px 20px rgba(0,0,0,0.06)',
            }}
          >
            <img
              src="/images/why-bg.png"
              alt="Anom Flora premium floral arrangement"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
            {/* Subtle golden overlay gradient at bottom */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(196,162,101,0.18) 0%, transparent 50%)',
                pointerEvents: 'none',
              }}
            />
            {/* Curved accent line */}
            <svg
              style={{ position: 'absolute', top: 20, right: 20, opacity: 0.35 }}
              width="80" height="120" viewBox="0 0 80 120" fill="none"
            >
              <path d="M70 10 Q80 60 40 110" stroke="#C4A265" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Right – Feature Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 18,
              alignContent: 'start',
            }}
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="why-feature-card hover-lift"
                style={{
                  background: 'rgba(255,255,255,0.82)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  borderRadius: 20,
                  padding: '28px 20px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 0,
                  cursor: 'default',
                  boxShadow: '0 2px 20px rgba(196,162,101,0.07)',
                }}
              >
                {/* Icon Circle */}
                <div
                  className="why-icon-circle"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f5ded5 0%, #ede6db 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    color: '#6B5E3E',
                    flexShrink: 0,
                  }}
                >
                  <div style={{ width: 26, height: 26 }}><img src={feature.icon} alt={feature.title} /></div>
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'var(--color-charcoal)',
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {feature.title}
                </h4>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.77rem',
                    color: 'var(--color-warm-gray)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  style={{
                    marginTop: 16,
                    width: 32,
                    height: 2,
                    borderRadius: 2,
                    background: 'linear-gradient(90deg, var(--color-blush-dark), var(--color-gold))',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .why-content-row {
            grid-template-columns: 1fr !important;
          }
          .why-image-panel {
            min-height: 320px !important;
            border-radius: 24px !important;
          }
        }
        @media (max-width: 600px) {
          .why-content-row > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 400px) {
          .why-content-row > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        .why-feature-card:hover .why-icon-circle {
          background: linear-gradient(135deg, #e8c4b8 0%, #d4b87e 100%) !important;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
