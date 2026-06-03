'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Globe, CheckCircle, Shield } from 'lucide-react'

const certifications = [
  { icon: Award, title: 'ICCRC Certified', subtitle: 'Immigration Consultants of Canada' },
  { icon: Shield, title: 'ISO 9001:2015', subtitle: 'Quality Management System' },
  { icon: Globe, title: 'OISC Registered', subtitle: 'Office of Immigration Services Commissioner' },
  { icon: CheckCircle, title: '25+ Years', subtitle: 'Industry Experience' },
]

const mediaLogos = [
  { name: 'BBC', color: 'from-red-600 to-red-800' },
  { name: 'CNN', color: 'from-red-700 to-red-900' },
  { name: 'Forbes', color: 'from-blue-600 to-blue-800' },
  { name: 'TechCrunch', color: 'from-green-600 to-green-800' },
  { name: 'The Guardian', color: 'from-slate-700 to-slate-900' },
  { name: 'Bloomberg', color: 'from-yellow-700 to-yellow-900' },
]

export function CertificationsCarousel() {
  const [currentCert, setCurrentCert] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const interval = setInterval(() => {
      setCurrentCert((prev) => (prev + 1) % certifications.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isMounted])

  const current = certifications[currentCert]
  const CurrentIcon = current.icon

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-2">Trusted Credentials</h3>
        <p className="text-slate-400">Certified professionals with industry recognition</p>
      </div>

      {/* Main Carousel */}
      <div className="relative h-48 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCert}
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: -90 }}
            transition={{ duration: 0.6 }}
            className="text-center px-8"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center mx-auto">
                <CurrentIcon className="w-12 h-12 text-amber-400" />
              </div>
            </motion.div>
            <h4 className="text-2xl font-bold text-white mb-2">{current.title}</h4>
            <p className="text-slate-400">{current.subtitle}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2">
        {certifications.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrentCert(i)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentCert ? 'bg-amber-400 w-8' : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>

      {/* All Certifications Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {certifications.map((cert, i) => {
          const Icon = cert.icon
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-lg border border-amber-500/20 bg-gradient-to-br from-amber-900/20 to-orange-900/20 hover:border-amber-400/50 transition-all text-center"
            >
              <Icon className="w-6 h-6 mx-auto mb-2 text-amber-400" />
              <h5 className="text-sm font-bold text-white">{cert.title}</h5>
              <p className="text-xs text-slate-400 mt-1">{cert.subtitle}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export function AsSeenInLogos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Featured In</h3>
        <p className="text-slate-400">Trusted by leading media outlets</p>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {mediaLogos.map((logo, i) => (
          <motion.div
            key={logo.name}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className={`relative p-4 rounded-lg border transition-all cursor-pointer ${
              hoveredIndex === i
                ? 'border-amber-400/50 bg-amber-900/20 shadow-lg shadow-amber-500/20'
                : 'border-slate-700 bg-slate-800/30'
            }`}
          >
            <motion.div
              className={`w-full h-16 rounded flex items-center justify-center font-bold text-sm bg-gradient-to-br ${logo.color} bg-opacity-10`}
              animate={{
                scale: hoveredIndex === i ? 1.1 : 1,
              }}
            >
              {logo.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
