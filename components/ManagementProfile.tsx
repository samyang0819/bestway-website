'use client'

import { motion } from 'framer-motion'
import { Award, Globe, BookOpen, Briefcase } from 'lucide-react'

export default function ManagementProfile() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const credentials = [
    {
      icon: Award,
      title: 'Registered Migration Agent (Australia)',
      detail: 'Full Member of MARA (MARN: 0963835)',
      color: 'text-yellow-600'
    },
    {
      icon: Briefcase,
      title: 'Regulated Canadian Immigration Consultant (RCIC)',
      detail: 'Canada',
      color: 'text-red-600'
    },
    {
      icon: BookOpen,
      title: 'Graduate Certificate in Australian Immigration Law and Practice',
      detail: 'Victoria University, Australia',
      color: 'text-blue-600'
    },
    {
      icon: Globe,
      title: 'Certificate in Canadian Immigration Consulting with Honours',
      detail: 'Humber College, Canada',
      color: 'text-green-600'
    },
  ]

  const highlights = [
    'Dual professional immigration qualifications in both Australia and Canada',
    'Rare dual accreditation allows comparison of immigration opportunities for both countries',
    'Personally experienced immigration and settlement in Canada, Australia, and the United States',
    'Understands the practical and emotional aspects of the immigration journey',
    'Known for professional, detail-oriented, and highly organized approach to case management',
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-200/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Leadership
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Meet the expert behind Bestway Consulting's success—a dual-licensed immigration professional with deep expertise in both Canada and Australia.
          </p>
        </motion.div>

        {/* Main Profile Card */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="p-12 rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Left: Profile Info */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-6xl">👩‍💼</span>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-2">
                Michelle Jeong-Ja Han
              </h3>
              <p className="text-center text-lg font-semibold text-blue-600 mb-4">
                Director & Senior Immigration Consultant
              </p>
              <div className="flex justify-center gap-2 flex-wrap">
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold">
                  🇦🇺 MARA Registered
                </span>
                <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-xs font-bold">
                  🍁 RCIC Certified
                </span>
              </div>
            </div>

            {/* Right: Professional Summary */}
            <div className="md:col-span-2">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Professional Summary</h4>
              <div className="space-y-4 mb-8">
                <p className="text-slate-700 leading-relaxed">
                  Michelle Jeong-Ja Han holds <strong>dual professional immigration qualifications</strong> in both Australia and Canada. This rare dual accreditation allows her to assess and compare immigration opportunities for both countries simultaneously and recommend the most suitable pathway based on each client's education, work experience, occupation, family situation, and long-term goals.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Having personally experienced immigration and settlement in Canada, Australia, and the United States, Michelle understands the practical and emotional aspects of the immigration journey. She is known for her professional, detail-oriented, and highly organized approach to immigration case management.
                </p>
              </div>
              
              <div className="flex gap-4 flex-wrap">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  className="h-1.5 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full origin-left"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Credentials Grid */}
        <div className="mb-16">
          <motion.h3
            {...fadeInUp}
            className="text-3xl font-bold text-slate-900 text-center mb-12"
          >
            Professional Credentials
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((cred, index) => {
              const Icon = cred.icon
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: 0.05 * index }}
                  className="p-8 rounded-2xl border-2 border-slate-200 bg-white hover:shadow-lg hover:border-blue-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <Icon className={`w-10 h-10 ${cred.color} flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{cred.title}</h4>
                      <p className="text-slate-600">{cred.detail}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Highlights Section */}
        <motion.div
          {...fadeInUp}
          className="p-12 rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">What Makes Michelle Stand Out</h3>
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.05 * index }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                  ✓
                </div>
                <p className="text-slate-700 pt-1">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          className="text-center mt-16 p-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Get Expert Guidance from Michelle
          </h3>
          <p className="text-blue-50 mb-6 text-lg">
            Schedule a consultation with our director to discuss your personalized immigration strategy.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Book a Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
