'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const stats = [
  { label: 'Years of Experience', value: 15, suffix: '+', icon: '📅' },
  { label: 'Successful Cases', value: 1200, suffix: '+', icon: '✓' },
  { label: 'Success Rate', value: 95, suffix: '%', icon: '🎯' },
  { label: 'Client Satisfaction', value: 99, suffix: '%', icon: '⭐' },
]

export default function Statistics() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hasStarted, setHasStarted] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!hasStarted || !isMounted) return

    const intervals = stats.map((stat, index) => {
      let current = 0
      const increment = stat.value / 60
      return setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(intervals[index])
        }
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(current)
          return newCounts
        })
      }, 25)
    })

    return () => intervals.forEach(clearInterval)
  }, [hasStarted, isMounted])

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 text-sm font-semibold mb-4">
              Our Track Record
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-slate-700">
              Trusted by hundreds of clients across Canada
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onViewportEnter={() => !hasStarted && setHasStarted(true)}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card */}
              <div className="relative p-8 rounded-xl border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300 bg-slate-800/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <motion.div className="mb-2">
                    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {counts[index]}{stat.suffix}
                    </span>
                  </motion.div>
                  <p className="text-slate-700 font-medium text-sm md:text-base group-hover:text-slate-900 transition-colors">
                    {stat.label}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 w-0 group-hover:w-1/2 transition-all duration-300 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
