import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroNew from './components/HeroNew'
import BestSellers from './components/BestSellers'
import Collections from './components/Collections'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CustomDiv from './components/CustomDiv'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'


gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroNew />
        <BestSellers />
        <CustomDiv />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
