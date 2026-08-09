import React, { useRef } from 'react'
import { features } from '../utils';

const CustomDiv = () => {
    const headerRef = useRef(null);
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f1e7]">

            {/* FLOWER IMAGE */}
            <div className="absolute inset-y-0 left-0 w-1/2 lg:w-[35%] max-md:hidden">
                <img
                    src="../../images/why-bg.png"
                    alt="Anom Flora"
                    className="h-full w-full object-cover"
                />
            </div>


            {/* WHITE / CREAM CURVED PANEL */}
            <svg
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

                <div ref={headerRef} className="mb-10 w-full">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 lg:pl-38">
                        <img src="../../icon/leaf-icon.png" className='w-8 -scale-x-90' alt="" />
                        <p className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: '#C08D34' }}>
                            Why Anom Flora?
                        </p>
                        <img src="../../icon/leaf-icon.png" className='w-8' alt="" />
                    </div>

                    <h2 className="font-elegant text-center lg:text-start text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight">
                        More Than Just Flowers,
                    </h2>
                    <h2 className="font-script text-4xl max-lg:text-center md:text-5xl lg:text-6xl leading-tight mt-1 lg:pl-5 text-prime-yellow">
                        Its Our Promise 
                    </h2>
                    <div className="flex items-center justify-center lg:justify-start gap-3 mt-5 lg:pl-50">
                        <div className="h-px w-16 bg-linear-to-r from-transparent to-primary"></div>
                        <img src="../../icon/patel-leafs.png" className='w-6' alt="" />
                        <div className="h-px w-16 bg-linear-to-l from-transparent to-primary" ></div>
                    </div>

                    <p className="text-warm-gray text-sm md:text-base mt-4 max-w-md max-lg:mx-auto lg:max-w-xl leading-relaxed text-center lg:pl-8 max-md:px-10">
                        At Anom Flora, we believe in creating everlasting beauty with uncompromising quality and a passion for perfection.
                    </p>

                    {/* Ornamental divider */}
                    <div className="w-full flex justify-center mt-8 flex-wrap gap-3 md:gap-6 ">
                        { features.map((feature, index) => (
                            <div className='w-[45%] md:w-[31%] h-fit bg-white/40 py-10 flex flex-col items-center rounded-2xl group  hover:bg-white lg:backdrop-blur-lg transition-smooth backdrop-blur-sm max-md:px-3 break-inside-avoid'>
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