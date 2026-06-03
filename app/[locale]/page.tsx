'use client'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyChoose from '@/components/WhyChoose'
import Statistics from '@/components/Statistics'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Blog />
      <Newsletter />
      <Contact />
    </>
  )
}
