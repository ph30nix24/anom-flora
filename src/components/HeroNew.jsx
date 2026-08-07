import React from 'react'
import { hero } from '../utils'

const HeroNew = () => {
  return (
    <section className="w-full h-screen py-20 relative">
        <img src="./images/bg.webp" alt="Hero" className="w-full h-full object-cover absolute top-0 left-0 -z-1" />
        <div className='w-full h-full px-30 relative'>
          <div className='w-full h-fit px-20 pt-20'>
            <h1 className='text-[112px] font-medium text-primary font-elegant uppercase'>Anom</h1>
            <h1 className='text-[112px] text-prime-yellow font-script  leading-[50%] '>Flora</h1>

            <div className='flex items-center mt-10 gap-4'>
              <div className='w-25 h-px rounded-full bg-primary/60'></div>
              <img src="./icon/leaf-icon.png" className='w-10 pb-1.5' alt="" />
            </div>
            <p className='text-[18px] text-primary font-sans leading-relaxed mt-5'>
              Timeless Artificial Flowers <br/> for Every Space.
            </p>
            <button className='w-fit bg-primary-light px-8 py-3 rounded-full text-white font-sans text-[14px] mt-10 hover:bg-prime-yellow transition-smooth'>
              Explore Collection
            </button>
            <p className='uppercase font-elegant text-[252px] tracking-tighter font-semibold text-warm-white absolute top-1/2 left-1/2  -translate-x-3/10 -translate-y-9 opacity-65'>Bloom</p>
          </div>

          <div className="w-full flex ">
            <div className='w-3/5 h-fit pt-20 flex'>
              { hero.map((item, index) => (
                <div key={index} className='w-1/2 h-fit flex flex-col items-center'>
                  <div className='p-3 flex justify-center items-center backdrop-blur-xl rounded-full shadow'><img src={item.icon} alt={item.title} className='size-9 ' /></div>
                  <h3 className='text-base font-semibold text-primary text-center mt-1 '>{item.title}</h3>
                  <p className='text-xs font-medium text-primary font-sans text-center leading-relaxed'>{item.description}</p>
                </div>
              )) }
            </div>

            <div className='w-2/5 h-fit pt-20 flex justify-end items-center gap-5'>
              <div className='w-1/4 rounded-xl shadow-lg overflow-hidden'>
                <img src="./images/bouquets_category.jpg" alt="Hero Image" className='w-full object-cover hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='w-1/4 rounded-xl shadow-lg overflow-hidden'>
                <img src="./images/mixed_bouquet.jpg" alt="Hero Image" className='w-full object-cover hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='w-1/4 rounded-xl shadow-lg overflow-hidden'>
                <img src="./images/potted_plants_category.jpg" alt="Hero Image" className='w-full object-cover hover:scale-110 transition-transform duration-300' />
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default HeroNew