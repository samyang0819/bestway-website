'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

// Animated background particles - optimized for performance
function AnimatedParticles() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 })
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  // Use a seeded random for consistent server/client rendering
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }

  return (
    <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
      {[...Array(12)].map((_, i) => {
        // Use seed-based randomness for consistency between server and client
        const randomSeed = i * 2.71828
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            initial={{
              x: seededRandom(randomSeed) * dimensions.width,
              y: seededRandom(randomSeed + 1) * dimensions.height,
              opacity: seededRandom(randomSeed + 2) * 0.5 + 0.3,
            }}
            animate={{
              y: seededRandom(randomSeed + 3) * dimensions.height - 200,
              opacity: 0,
            }}
            transition={{
              duration: seededRandom(randomSeed + 4) * 3 + 3,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        )
      })}
    </div>
  )
}

export default function Hero() {
  const t = useTranslations()

  return (
    <section id="home" className="min-h-screen text-slate-900 flex items-center justify-start relative overflow-hidden" role="banner">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-cyan-500/10" />
      </div>

      {/* Optimized Background Image with overlay */}
      <div className="absolute inset-0 w-full h-full opacity-40">
        <Image
          src="/hero-background.gif"
          alt="Professional immigration consulting background"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover"
          style={{
            objectPosition: 'center right',
          }}
          unoptimized
        />
      </div>

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-blue-900/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60" />

      {/* Animated Accent Elements */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-cyan-400/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-purple-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* Animated Particles */}
      <AnimatedParticles />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10 w-full h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-400/40 rounded-full backdrop-blur-sm">
              <span className="text-2xl">✨</span>
              <span className="text-sm md:text-base font-semibold text-amber-300 uppercase tracking-widest">
                {t('hero.subtitle')}
              </span>
            </div>
          </motion.div>

          {/* Main Heading - DRAMATICALLY Larger */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #fbbf24 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 10px 30px rgba(120, 119, 198, 0.4))',
              textShadow: 'none',
            }}
          >
            {t('hero.title')}
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 w-24 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full mb-8 origin-left"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-slate-200 mb-12 leading-relaxed max-w-2xl font-light"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons - Premium Style with Staggered Animation */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.08, y: -4, boxShadow: '0 25px 50px rgba(251, 146, 60, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 font-bold rounded-xl text-center overflow-hidden text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300" />
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative block text-slate-950 font-bold group-hover:text-slate-900 flex items-center justify-center gap-2">
                🚀 {t('hero.cta')}
              </span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#services"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.08, y: -4, boxShadow: '0 25px 50px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 font-bold rounded-xl text-center overflow-hidden border-2 border-white/40 text-lg"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-white/15 rounded-xl transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300" />
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative block text-white group-hover:text-amber-200 transition-colors flex items-center justify-center gap-2">
                📖 {t('services.title')}
              </span>
            </motion.a>
          </div>

          {/* Trust Badge - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-2 text-sm text-slate-300"
          >
            <span className="text-xl">🏆</span>
            <span>20+ Years of Immigration Excellence • 5,000+ Success Stories</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent pointer-events-none" />
    </section>
  )
}
