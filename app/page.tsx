'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import { TrustBadges } from '@/components/TrustBadges'
import { SocialProofCounters } from '@/components/SocialProofCounters'
import TrustIndicators from '@/components/TrustIndicators'
import WhyChoose from '@/components/WhyChoose'
import Statistics from '@/components/Statistics'
import Testimonials from '@/components/Testimonials'
import { CaseStudiesCTA } from '@/components/CaseStudiesCTA'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import Newsletter from '@/components/Newsletter'
import Contact from '@/components/Contact'
import SchemaOrg from '@/components/SchemaOrg'

// Skip static generation for this page due to component rendering complexity
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <Hero />
      <About />
      <Services />
      <TrustBadges />
      <SocialProofCounters />
      <TrustIndicators />
      <WhyChoose />
      <Statistics />
      <Testimonials />
      <CaseStudiesCTA />
      <FAQ />
      <Blog />
      <Newsletter />
      <Contact />
    </>
  )
}
