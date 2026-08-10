import React, { useRef } from 'react'
import { features } from '../utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CustomDiv = () => {
  const sectionRef  = useRef(null)
  const eyebrowRef  = useRef(null)
  const heading1Ref = useRef(null)
  const heading2Ref = useRef(null)
  const dividerRef  = useRef(null)
  const paraRef     = useRef(null)
  const cardsRef    = useRef([])
  const imageRef    = useRef(null)
  const svgRef      = useRef(null)

  useGSAP(() => {
    const st = { trigger: sectionRef.current, start: 'top 75%' }

    // ── Image slides in from left ──
    gsap.fromTo(imageRef.current,
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: st }
    )

    // ── SVG curve draws in ──
    gsap.fromTo(svgRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: { ...st, start: 'top 80%' }
      }
    )

    // ── Eyebrow label ──
    gsap.fromTo(eyebrowRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { ...st, start: 'top 72%' }
      }
    )

    // ── Heading lines clip-path reveal ──
    gsap.fromTo(
      [heading1Ref.current, heading2Ref.current],
      { y: 50, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
      {
        y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)',
        duration: 0.9, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { ...st, start: 'top 70%' }
      }
    )

    // ── Divider & paragraph ──
    gsap.fromTo(
      [dividerRef.current, paraRef.current],
      { y: 24, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { ...st, start: 'top 65%' }
      }
    )

    // ── Feature cards stagger with alternating direction ──
    cardsRef.current.filter(Boolean).forEach((card, i) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0, scale: 0.9, rotateY: i % 2 === 0 ? -8 : 8 },
        {
          y: 0, opacity: 1, scale: 1, rotateY: 0,
          duration: 0.85, ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
          delay: i * 0.08
        }
      )
    })

  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#f8f1e7]">

      {/* FLOWER IMAGE */}
      <div ref={imageRef} className="absolute inset-y-0 left-0 w-1/2 lg:w-[35%] max-md:hidden">
        <img
          src="../../images/why-bg.webp"
          alt="Anom Flora"
          className="h-full w-full object-cover"
        />
      </div>

      {/* WHITE / CREAM CURVED PANEL */}
      <svg
        ref={svgRef}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full max-md:hidden"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="
    M16 0

    C19 17 24 24 28 34
    C32 46 34 50 34 60
    C34 72 27 86 24 100

    L100 100
    L100 0
    Z
  "
          fill="#f8f1e7"
        />
        <path
          d="
    M16 0

    C19 17 24 24 28 34
    C32 46 34 50 34 60
    C34 72 27 86 24 100
  "
          fill="none"
          stroke="#c99635"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="
    M15 0

    C19 18 25 25 29 36
    C33 46 34 50 34 60
    C34 72 27 86 24 100
  "
          fill="none"
          stroke="#c99635"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative md:absolute lg:relative z-20 lg:ml-[35%] flex min-h-screen w-full lg:pr-16 lg:py-25 lg:w-[65%] px-5 md:px-10 md:py-15 py-10">
        <div className="mb-10 w-full">

          {/* Eyebrow */}
          <div ref={eyebrowRef} className="flex items-center justify-center lg:justify-start gap-3 mb-3 lg:pl-38">
            <img src="../../icon/leaf-icon.webp" className='w-8 -scale-x-90' alt="" />
            <p className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: '#C08D34' }}>
              Why Anom Flora?
            </p>
            <img src="../../icon/leaf-icon.webp" className='w-8' alt="" />
          </div>

          <h2 ref={heading1Ref} className="font-elegant text-center lg:text-start text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight">
            More Than Just Flowers,
          </h2>
          <h2 ref={heading2Ref} className="font-script text-4xl max-lg:text-center md:text-5xl lg:text-6xl leading-tight mt-1 lg:pl-5 text-prime-yellow">
            Its Our Promise
          </h2>

          <div ref={dividerRef} className="flex items-center justify-center lg:justify-start gap-3 mt-5 lg:pl-50">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-primary"></div>
            <img src="../../icon/patel-leafs.webp" className='w-6' alt="" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-primary"></div>
          </div>

          <p ref={paraRef} className="text-warm-gray text-sm md:text-base mt-4 max-w-md max-lg:mx-auto lg:max-w-xl leading-relaxed text-center lg:pl-8 max-md:px-10">
            At Anom Flora, we believe in creating everlasting beauty with uncompromising quality and a passion for perfection.
          </p>

          {/* Feature cards */}
          <div className="w-full flex justify-center mt-8 flex-wrap gap-3 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className='w-[45%] md:w-[31%] h-fit bg-white/40 py-10 flex flex-col items-center rounded-2xl group hover:bg-white lg:backdrop-blur-lg transition-smooth backdrop-blur-sm max-md:px-3 break-inside-avoid'
                style={{ perspective: '600px' }}
              >
                <div className='p-3 rounded-full bg-[#fce7d2] overflow-hidden group-hover:bg-[#feddae] transition-smooth'>
                  <img src={feature.icon} className='size-8 md:size-12 group-hover:scale-115 transition-smooth' alt="" />
                </div>
                <h3 className='text-base font-semibold font-sans mt-5 text-primary text-center'>{feature.title}</h3>
                <p className='text-xs text-center font-sans font-medium mt-2 text-black/60 lg:text-warm-gray md:px-5 lg:px-10'>{feature.description}</p>
                <div className='w-10 h-0.5 rounded bg-prime-yellow mt-5'></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default CustomDiv