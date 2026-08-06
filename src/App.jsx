import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroNew from './components/HeroNew'
import Collections from './components/Collections'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        {/* <Hero />
        <Collections />
        <WhyChooseUs />
        <Testimonials />
        <CTA /> */}
        <HeroNew />
      </main>
      <Footer />
    </div>
  )
}

export default App
