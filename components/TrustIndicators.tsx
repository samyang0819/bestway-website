'use client'

import { motion } from 'framer-motion'

export default function TrustIndicators() {
  const indicators = [
    { icon: '✓', label: 'Licensed Consultants', description: '15+ years experience' },
    { icon: '🏆', label: 'Award Winning', description: '100% Success Rate' },
    { icon: '👥', label: '5000+ Clients', description: 'Worldwide' },
    { icon: '⚡', label: 'Fast Processing', description: 'Average 30 days' },
    { icon: '💰', label: 'Transparent Pricing', description: 'No hidden fees' },
    { icon: '🌍', label: 'Global Network', description: '50+ countries' },
  ]

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-100 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" aria-hidden="true"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Why Clients Trust Us
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Proven expertise, transparent processes, and outstanding results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {indicators.map((indicator, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-3">{indicator.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{indicator.label}</h3>
              <p className="text-sm text-slate-600">{indicator.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-12 border-t-2 border-slate-200"
        >
          <p className="text-center text-slate-600 font-semibold mb-8 uppercase tracking-wider text-sm">
            Professional Credentials
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['🎓 Licensed Immigration Consultant', '✓ IRCC Approved', '📋 Accredited Member', '🛡️ Insured & Bonded'].map(
              (cert, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full font-semibold text-blue-700 text-sm shadow-md"
                >
                  {cert}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
