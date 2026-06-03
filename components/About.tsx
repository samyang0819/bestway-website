'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Award, Globe, Target, Heart } from 'lucide-react'

export default function About() {
  const t = useTranslations()

  const values = [
    {
      icon: Target,
      title: 'Honesty',
      description: 'We place our clients\' interests first and provide realistic, transparent advice based on current immigration laws and policies. We do not encourage unnecessary applications.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We carefully manage each case from assessment to final outcome, paying close attention to documentation, deadlines, and procedural requirements.',
    },
    {
      icon: Globe,
      title: 'Professionalism',
      description: 'Immigration laws change frequently. Our consultants continuously monitor government policy updates, processing trends, and legislative changes.',
    },
    {
      icon: Award,
      title: 'Client Success',
      description: 'Our dual accreditation in Canada and Australia allows us to recommend the most suitable pathway for your unique circumstances and goals.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-32 md:py-48 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 relative overflow-hidden">
      {/* Premium animated decorative elements */}
      <motion.div
        className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, delay: 1 }}
      />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} className="inline-block mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/40 rounded-full text-blue-600 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              🎯 {t('about.title')}
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              PROFESSIONAL IMMIGRATION SERVICES SINCE 2007
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full origin-center mb-8"
          />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Bestway Consulting has been providing professional immigration services for Canada and Australia since 2007. For over 18 years, we have helped individuals, couples, families, international students, skilled workers, and business owners successfully immigrate and settle abroad through strategic immigration planning and professional visa services.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 p-8 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50"
        >
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold text-blue-900 mb-3">Our Mission & Approach</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              At Bestway Consulting, we understand that immigration is one of the most important decisions in a person's life. Our goal is to provide accurate advice, honest assessment, and personalised strategies tailored to each client's unique background and future goals. Our services extend beyond immigration applications—we also provide guidance in international education, settlement planning, financial services, taxation, accounting, real estate, and business establishment support.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-slate-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white hover:border-blue-300 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* By The Numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black mb-2">18+</p>
              <p className="text-lg opacity-90">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">2</p>
              <p className="text-lg opacity-90">Countries Specialized</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">2</p>
              <p className="text-lg opacity-90">Licensed Jurisdictions</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">∞</p>
              <p className="text-lg opacity-90">Client Dedication</p>
            </div>
          </div>
        </motion.div>

        {/* Credentials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-slate-200"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Leadership</h3>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white"
            >
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Michelle Jeong-Ja Han</h4>
              <p className="text-blue-600 font-semibold text-lg mb-4">Director & Senior Immigration Consultant</p>
              
              <div className="mb-6">
                <h5 className="font-bold text-slate-900 mb-3">Professional Credentials</h5>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Registered Migration Agent (Australia) — Full Member of MARA (MARN: 0963835)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Regulated Canadian Immigration Consultant (RCIC) — Canada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Graduate Certificate in Australian Immigration Law and Practice — Victoria University</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Certificate in Canadian Immigration Consulting with Honours — Humber College</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Bachelor of Arts (English Literature & Language) — Korea University</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                Michelle holds dual professional immigration qualifications in both Australia and Canada. This rare dual accreditation allows her to assess and compare immigration opportunities for both countries simultaneously and recommend the most suitable pathway based on each client's education, work experience, occupation, family situation, and long-term goals.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Having personally experienced immigration and settlement in Canada, Australia, and the United States, Michelle understands the practical and emotional aspects of the immigration journey. She is known for her professional, detail-oriented, and highly organised approach to immigration case management.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
