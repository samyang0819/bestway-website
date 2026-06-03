'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    number: '01',
    title: 'Professional Expertise',
    description: 'Years of specialized experience in immigration law and consulting services',
  },
  {
    number: '02',
    title: 'Personalized Approach',
    description: 'Customized strategies tailored to your specific immigration needs',
  },
  {
    number: '03',
    title: 'Proven Results',
    description: 'Successful track record assisting hundreds of satisfied clients',
  },
  {
    number: '04',
    title: 'Transparent Process',
    description: 'Clear communication and honest guidance throughout your journey',
  },
  {
    number: '05',
    title: 'Dedicated Support',
    description: 'Responsive and attentive client support at every stage',
  },
  {
    number: '06',
    title: 'Comprehensive Services',
    description: 'Full range of immigration services under one trusted roof',
  },
]

export default function WhyChoose() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 relative overflow-hidden">
      {/* Premium Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2.5 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 text-sm font-bold mb-4 uppercase tracking-wider">
            ✨ Why Choose Us
          </span>
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            WHY CHOOSE BESTWAY CONSULTING
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Discover why hundreds of clients trust us with their immigration journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-10 group rounded-2xl bg-gradient-to-br from-white to-slate-50 backdrop-blur-md border-2 border-slate-200 hover:border-blue-300 transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <motion.div
                className="text-7xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 opacity-70 group-hover:opacity-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              >
                {reason.number}
              </motion.div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{reason.title}</h4>
              <p className="text-slate-700 text-lg leading-relaxed font-light">{reason.description}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 w-0 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
