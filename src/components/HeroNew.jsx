import React from 'react'
import { hero } from '../utils'
import { ArrowRight } from 'lucide-react'

const HeroNew = () => {
  return (
    <section className="w-full h-screen py-20 relative bg-[#F1E7DD]">
        <img src="./images/bg.webp" alt="Hero" className="w-full h-full object-cover absolute top-0 left-0 z-1  max-lg:object-top-left max-lg:h-[60vh]" />
        <div className='w-full h-[60vh] absolute z-2 top-0 left-0 bg-linear-to-b from-transparent from-70% to-[#F1E7DD] lg:hidden'></div>
        <div className='w-full h-full px-5 md:px-10 lg:px-30 relative flex flex-col justify-between z-5 max-md:gap-10'>
          <div className='w-full h-fit px-5 md:px-10 lg:pt-20'>
            <h1 className='text-7xl lg:text-[112px] md:text-[88px] font-medium text-primary font-elegant uppercase'>Anom</h1>
            <h1 className='text-7xl lg:text-[112px] md:text-[88px] text-prime-yellow font-script leading-[80%] md:leading-[90%] '>Flora</h1>

            <div className='flex items-center mt-5 lg:mt-10 gap-4'>
              <div className='w-25 h-px rounded-full bg-primary/60'></div>
              <img src="./icon/leaf-icon.png" className='w-10 pb-1.5' alt="" />
            </div>
            <p className='text-sm md:text-base lg:text-[18px] text-primary font-sans leading-relaxed mt-5'>
              Timeless Artificial Flowers <br/> for Every Space.
            </p>
            <button className='w-fit bg-primary-light px-8 py-3 rounded-full text-white font-sans text-xs lg:text-[14px] mt-5 lg:mt-10 hover:bg-prime-yellow transition-smooth cursor-pointer flex items-center gap-2 group'>
              <span>Explore Collection</span>
              <ArrowRight strokeWidth={1} size={18} className='group-hover:translate-x-1 transition-smooth' />
            </button>
            <p className='uppercase font-elegant text-[252px] tracking-tighter font-semibold text-warm-white absolute top-1/2 left-1/2  -translate-x-3/10 -translate-y-9 opacity-65 max-lg:hidden'>Bloom</p>
          </div>

          <div className="w-full flex max-lg:flex-col lg:mt-5">
            <div className='w-full lg:w-3/5 h-fit lg:pt-20 flex max-md:flex-wrap max-lg:justify-center max-lg:gap-3'>
              { hero.map((item, index) => (
                <div key={index} className='max-md:w-[45%] w-1/4 h-fit flex flex-col items-center'>
                  <div className='p-3 flex justify-center items-center backdrop-blur-xl rounded-full shadow'><img src={item.icon} alt={item.title} className='size-6 md:size-9 ' /></div>
                  <h3 className='text-sm md:text-base font-semibold text-primary text-center mt-1 '>{item.title}</h3>
                  <p className='text-xs font-medium text-primary font-sans text-center leading-relaxed'>{item.description}</p>
                </div>
              )) }
            </div>

            <div className='w-full lg:w-2/5 h-fit pt-10 md:pt-20 flex justify-center lg:justify-end items-center gap-5 '>
              <div className='w-1/3 lg:w-1/4 rounded-xl shadow-lg overflow-hidden'>
                <img src="./images/bouquets_category.jpg" alt="Hero Image" className='w-full object-cover hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='w-1/3 lg:w-1/4 rounded-xl shadow-lg overflow-hidden'>
                <img src="./images/mixed_bouquet.jpg" alt="Hero Image" className='w-full object-cover hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='w-1/3 lg:w-1/4 rounded-xl shadow-lg overflow-hidden'>
                <img src="./images/potted_plants_category.jpg" alt="Hero Image" className='w-full object-cover hover:scale-110 transition-transform duration-300' />
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default HeroNew