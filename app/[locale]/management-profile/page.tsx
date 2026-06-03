'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Award, Users, Globe, Briefcase, Star } from 'lucide-react'

export default function ManagementProfilePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const credentials = [
    { icon: Award, title: 'Registered Migration Agent (Australia)', subtitle: 'Full Member of MARA', detail: 'MARN: 0963835', color: 'from-orange-500 to-red-500' },
    { icon: Award, title: 'Regulated Canadian Immigration Consultant', subtitle: 'RCIC Status', detail: 'Regulated in Canada', color: 'from-blue-500 to-cyan-500' },
    { icon: Globe, title: 'Graduate Certificate - Australian Immigration Law', subtitle: 'Victoria University', detail: 'Advanced Immigration Law & Practice', color: 'from-green-500 to-emerald-500' },
    { icon: Globe, title: 'Certificate in Canadian Immigration Consulting', subtitle: 'Humber College', detail: 'Completed with Honours', color: 'from-amber-500 to-orange-500' }
  ]

  const expertise = [
    { category: 'Canada Immigration', icon: '🍁', services: ['Express Entry', 'Provincial Nominee Programs', 'Family Sponsorship', 'Work Permits', 'Citizenship Applications'] },
    { category: 'Australia Immigration', icon: '🦘', services: ['General Skilled Migration', 'Employer-Sponsored Migration', 'Partner Visas', 'Parent Visas', 'Regional Visas'] },
    { category: 'Specialized Services', icon: '💼', services: ['Complex Relationships', 'Appeals & Refusals', 'Document Preparation', 'Settlement Planning', 'Business Migration'] }
  ]

  const personalExperience = [
    { title: 'Immigration & Settlement', description: 'Personal experience immigrating to Canada, Australia, and the United States', icon: Globe },
    { title: 'Cultural Adaptation', description: 'Deep understanding of practical and emotional aspects of immigration', icon: Users },
    { title: 'Professional Approach', description: 'Detail-oriented, organized, and professional case management', icon: Briefcase },
    { title: 'Client-Centric Philosophy', description: 'Commitment to personalized service and individual circumstances', icon: Star }
  ]

  const achievements = [
    { number: '1000+', label: 'Successful Cases' },
    { number: '18+', label: 'Years in Industry' },
    { number: '2', label: 'Professional Accreditations' },
    { number: '50+', label: 'Immigration Programs' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white" suppressHydrationWarning role="main">
      <section className="py-20 px-6 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <span className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-bold mb-6">👤 Meet Your Immigration Expert</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6"><span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Michelle Jeong-Ja Han</span></h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Director & Senior Immigration Consultant | Dual-Accredited RCIC & Registered Migr    ation Agent</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">Professional Credentials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((cred, i) => {
              const Icon = cred.icon
              return (
                <motion.div key={i} className={`p-6 rounded-xl bg-gradient-to-br ${cred.color} from-opacity-10 to-opacity-5 border-2 border-purple-200`}>
                  <Icon className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1">{cred.title}</h3>
                  <p className="text-sm text-slate-600">{cred.subtitle}</p>
                  <p className="text-sm font-semibold text-purple-700 mt-2">{cred.detail}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((area, i) => (
              <motion.div key={i} className="p-8 rounded-xl bg-white border-2 border-slate-200 hover:shadow-lg transition-all">
                <p className="text-4xl mb-3">{area.icon}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.services.map((service) => (
                    <li key={service} className="flex gap-2 text-slate-600">
                      <span className="text-purple-600">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">Skills & Strengths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {personalExperience.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={i} className="p-6 rounded-xl bg-white border-2 border-slate-200">
                  <Icon className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {achievements.map((stat) => (
              <motion.div key={stat.label} {...fadeInUp}>
                <p className="text-4xl font-black mb-2">{stat.number}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Re ady to Work With Michelle?</h2>
          <p className="text-lg text-slate-600 mb-8">Schedule your consultation with Canada and Australia's dual-accredited immigration expert</p>
          <Link href="#contact">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all">
              Book Consultation Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
