'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Heart, AlertCircle, ArrowRight } from 'lucide-react'

export default function SpousalSponsorshipPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const canadaSteps = [
    { number: 1, title: 'Determine Eligibility', description: 'Assess sponsor and applicant requirements' },
    { number: 2, title: 'Document Gathering', description: 'Collect relationship and financial documents' },
    { number: 3, title: 'Application Preparation', description: 'Complete forms and organize documents' },
    { number: 4, title: 'Submission', description: 'Submit to IRCC with all required documentation' },
    { number: 5, title: 'Processing', description: 'Track status and respond to requests' },
    { number: 6, title: 'Approval', description: 'Receive permanent residence status' }
  ]

  const relationshipEvidence = [
    { category: 'Financial Evidence', items: ['Joint bank accounts', 'Shared mortgage/lease', 'Shared utility bills', 'Financial support records'] },
    { category: 'Household Evidence', items: ['Cohabitation proof', 'Shared address history', 'Joint household items', 'Shared responsibilities'] },
    { category: 'Social Evidence', items: ['Family recognition', 'Friend testimonies', 'Social event photos', 'Communication records'] },
    { category: 'Commitment Evidence', items: ['Future plans', 'Emails/messages', 'Joint goals', 'Wedding records'] }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white" suppressHydrationWarning role="main">
      <section className="py-20 px-6 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <span className="inline-block px-4 py-2 bg-rose-100 border border-rose-300 rounded-full text-rose-700 text-sm font-bold mb-6">💑 Spousal & Partner Sponsorship</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6"><span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Sponsor Your Partner to Canada or Australia</span></h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">One of the most reliable immigration pathways for couples to reunite and build a life together.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 text-slate-900">Why Choose Spousal Sponsorship?</h2>
              <ul className="space-y-4">
                {['High approval rates for genuine relationships', 'No occupation restrictions', 'Path to permanent residency', 'Often includes open work permits', 'Strong legal protection', 'Proven immigration pathway'].map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl p-8 border-2 border-rose-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Requirements</h3>
              <div className="space-y-4">
                {['Genuine relationship proof', 'Sponsor eligibility', 'Financial support', 'Medical & criminal clearance'].map((req) => (
                  <div key={req} className="p-3 bg-rose-50 rounded-lg"><p className="font-bold text-slate-900">✓ {req}</p></div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">🍁 Canada Application Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {canadaSteps.map((step) => (
              <motion.div key={step.number} className="p-6 rounded-xl bg-blue-50 border-2 border-blue-200">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4">{step.number}</div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">🔍 Genuine Relationship Evidence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relationshipEvidence.map((category) => (
              <motion.div key={category.category} className="p-8 rounded-xl border-2 border-slate-200 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-rose-900 to-pink-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Professional Help Matters</h2>
            <p className="text-xl text-rose-100 max-w-3xl mx-auto mb-12">Spousal sponsorship applications are complex and evidence-intensive. Professional guidance significantly improves approval prospects.</p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">Our Services:</h3>
                <ul className="space-y-3">
                  {['Complete eligibility assessment', 'Documentation planning', 'Evidence organization', 'Form completion', 'Interview preparation', 'Appeal support'].map((service) => (
                    <li key={service} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-300 flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">You Benefit From:</h3>
                <ul className="space-y-3">
                  {['Reduced delays', 'Fewer mistakes', 'Improved approval chances', 'Emotional support', 'Peace of mind', 'Expert guidance'].map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <Heart className="w-5 h-5 text-rose-300 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Bring Your Partner Home?</h2>
            <p className="text-xl text-slate-600 mb-8">Let our immigration experts guide you through every step of the sponsorship process</p>
            <Link href="#contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all">
                Schedule Your Consultation <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
