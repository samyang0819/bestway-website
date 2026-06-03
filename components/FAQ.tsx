'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function FAQ() {
  const t = useTranslations()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Safely get FAQ items with fallback
  let faqData: any[] = []
  try {
    const raw = t.raw('faq.items')
    faqData = Array.isArray(raw) ? raw : []
  } catch (error) {
    faqData = []
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="faq" className="py-32 md:py-48 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <motion.div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl" animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity }} />
      <motion.div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-amber-400/20 to-transparent rounded-full blur-3xl" animate={{ x: [0, -40, 0], y: [0, -30, 0] }} transition={{ duration: 14, repeat: Infinity, delay: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} className="inline-block mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border border-cyan-400/40 rounded-full text-cyan-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">❓ {t('faq.title')}</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">{t('faq.title')}</h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto rounded-full origin-center" />
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="space-y-5">
          {faqData.map((item: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group border-2 border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/40 transition-all bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-md shadow-xl hover:shadow-2xl"
              style={{
                boxShadow: openIndex === index ? '0 25px 50px rgba(0, 0, 0, 0.5)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-slate-800/60 to-slate-900/60 hover:from-amber-500/10 hover:to-cyan-500/10 transition-all text-left"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-black text-white text-lg pr-4 group-hover:text-amber-300 transition-colors">{item.question}</h3>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-amber-400 text-2xl font-black"
                >
                  ▼
                </motion.span>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 py-6 bg-gradient-to-br from-slate-900/80 to-slate-950 text-slate-200 border-t-2 border-white/5 text-lg leading-relaxed font-light">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-300 text-lg mb-8 font-light">Still have questions?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg uppercase tracking-widest"
          >
            Contact Our Team →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
