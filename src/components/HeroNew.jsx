import React, { useRef } from 'react'
import { hero } from '../utils'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HeroNew = () => {
  const sectionRef   = useRef(null)
  const titleARef    = useRef(null)
  const titleBRef    = useRef(null)
  const lineRef      = useRef(null)
  const subRef       = useRef(null)
  const btnRef       = useRef(null)
  const iconsRef     = useRef([])
  const imagesRef    = useRef([])
  const bloomRef     = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // ── Hero entrance (on load, no scroll trigger) ──
    tl.fromTo(titleARef.current,
      { y: 80, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
      { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1 }
    )
    .fromTo(titleBRef.current,
      { y: 80, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
      { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1 },
      '-=0.65'
    )
    .fromTo(lineRef.current,
      { scaleX: 0, opacity: 0, transformOrigin: 'left center' },
      { scaleX: 1, opacity: 1, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(subRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      '-=0.4'
    )
    .fromTo(btnRef.current,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.3'
    )
    .fromTo(bloomRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 0.65, scale: 1, duration: 1.4, ease: 'power2.out' },
      '-=0.8'
    )

    // ── Feature icons stagger ──
    gsap.fromTo(
      iconsRef.current.filter(Boolean),
      { y: 40, opacity: 0, scale: 0.85 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: sectionRef.current, start: 'bottom 90%' },
      }
    )

    // ── Image stack stagger ──
    gsap.fromTo(
      imagesRef.current.filter(Boolean),
      { y: 60, opacity: 0, scale: 0.92 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.14, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'bottom 90%' },
      }
    )

    // ── Subtle parallax on bg image while scrolling ──
    gsap.to('.hero-bg-img', {
      y: 80,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="w-full h-screen py-20 relative bg-[#F1E7DD] overflow-hidden">
      <img src="./images/bg.webp" alt="Hero" className="hero-bg-img w-full h-full object-cover absolute top-0 left-0 z-1 max-lg:object-top-left max-lg:h-[60vh]" />
      <div className='w-full h-[60vh] absolute z-2 top-0 left-0 bg-linear-to-b from-transparent from-70% to-[#F1E7DD] lg:hidden'></div>

      <div className='w-full h-full px-5 md:px-10 lg:px-30 relative flex flex-col justify-between z-5 max-md:gap-10'>
        <div className='w-full h-fit px-5 md:px-10 lg:pt-20'>

          <h1 ref={titleARef} className='text-7xl lg:text-[112px] md:text-[88px] font-medium text-primary font-elegant uppercase'>Anom</h1>
          <h1 ref={titleBRef} className='text-7xl lg:text-[112px] md:text-[88px] text-prime-yellow font-script leading-[80%] md:leading-[90%]'>Flora</h1>

          <div ref={lineRef} className='flex items-center mt-5 lg:mt-10 gap-4'>
            <div className='w-25 h-px rounded-full bg-primary/60'></div>
            <img src="./icon/leaf-icon.png" className='w-10 pb-1.5' alt="" />
          </div>

          <p ref={subRef} className='text-sm md:text-base lg:text-[18px] text-primary font-sans leading-relaxed mt-5'>
            Timeless Artificial Flowers <br/> for Every Space.
          </p>

          <button ref={btnRef} className='w-fit bg-primary-light px-8 py-3 rounded-full text-white font-sans text-xs lg:text-[14px] mt-5 lg:mt-10 hover:bg-prime-yellow transition-smooth cursor-pointer flex items-center gap-2 group'>
            <span>Explore Collection</span>
            <ArrowRight strokeWidth={1} size={18} className='group-hover:translate-x-1 transition-smooth' />
          </button>

          <p ref={bloomRef} className='uppercase font-elegant text-[252px] tracking-tighter font-semibold text-warm-white absolute top-1/2 left-1/2 -translate-x-3/10 -translate-y-9 opacity-65 max-lg:hidden'>Bloom</p>
        </div>

        <div className="w-full flex max-lg:flex-col lg:mt-5">
          {/* Feature icons */}
          <div className='w-full lg:w-3/5 h-fit lg:pt-20 flex max-md:flex-wrap max-lg:justify-center max-lg:gap-3'>
            {hero.map((item, index) => (
              <div key={index} ref={el => iconsRef.current[index] = el} className='max-md:w-[45%] w-1/4 h-fit flex flex-col items-center'>
                <div className='p-3 flex justify-center items-center backdrop-blur-xl rounded-full shadow'>
                  <img src={item.icon} alt={item.title} className='size-6 md:size-9' />
                </div>
                <h3 className='text-sm md:text-base font-semibold text-primary text-center mt-1'>{item.title}</h3>
                <p className='text-xs font-medium text-primary font-sans text-center leading-relaxed'>{item.description}</p>
              </div>
            ))}
          </div>

          {/* Image stack */}
          <div className='w-full lg:w-2/5 h-fit pt-10 md:pt-20 flex justify-center lg:justify-end items-center gap-5'>
            {[
              { src: './images/bouquets_category.jpg',       alt: 'Bouquets' },
              { src: './images/mixed_bouquet.jpg',           alt: 'Mixed Bouquet' },
              { src: './images/potted_plants_category.jpg',  alt: 'Potted Plants' },
            ].map((img, i) => (
              <div key={i} ref={el => imagesRef.current[i] = el} className='w-1/3 lg:w-1/4 rounded-xl shadow-lg overflow-hidden'>
                <img src={img.src} alt={img.alt} className='w-full object-cover hover:scale-110 transition-transform duration-300' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroNew