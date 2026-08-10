import React from 'react'
import Navbar from './components/Navbar'
import HeroNew from './components/HeroNew'
import BestSellers from './components/BestSellers'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CustomDiv from './components/CustomDiv'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import Testimonials from './components/Testimonials'


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
