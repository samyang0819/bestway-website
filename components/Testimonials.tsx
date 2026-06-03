'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Hardcoded testimonials as fallback
const DEFAULT_TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Tech Professional',
    country: 'Canada',
    text: 'BestWay Consulting made my immigration journey smooth and stress-free. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    country: 'Australia',
    text: 'Professional, knowledgeable, and always available. They helped me achieve my dream.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Healthcare Professional',
    country: 'UK',
    text: 'Exceptional service! They guided me through every step of the process.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Business Owner',
    country: 'New Zealand',
    text: 'Outstanding support from start to finish. I would definitely recommend them!',
    rating: 5,
  },
]

export default function Testimonials() {
  const testimonials = DEFAULT_TESTIMONIALS
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!autoplay || testimonials.length === 0 || !isMounted) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay, testimonials.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section className="py-32 md:py-48 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Premium animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-cyan-400/20 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} className="inline-block mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-400/40 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              ⭐ Client Success Stories
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Trusted by Thousands
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-1.5 w-24 bg-gradient-to-r from-amber-400 to-cyan-400 mx-auto rounded-full origin-center"
          />
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100, rotateY: 20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <div
                className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl p-12 md:p-16 rounded-2xl border-2 border-white/10 hover:border-amber-400/40 transition-all duration-300"
                style={{
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Premium corner accent */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-400/30 to-transparent rounded-br-3xl" />

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black text-white">{testimonials[current].name}</h4>
                    <p className="text-amber-300 font-bold text-lg mt-2">{testimonials[current].role}</p>
                  </div>
                  <motion.div
                    className="flex gap-1.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-amber-400 text-3xl"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-slate-200 text-lg md:text-xl leading-relaxed italic font-light relative z-10"
                >
                  "{testimonials[current].text}"
                </motion.p>

                {/* Bottom accent line with glow */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-400 w-0 group-hover:w-full transition-all duration-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  style={{
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.8)',
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation Buttons */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.2, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-24 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold text-2xl hover:shadow-2xl transition-all hover:shadow-amber-500/50"
            aria-label="Previous testimonial"
          >
            ‹
          </motion.button>
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-24 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold text-2xl hover:shadow-2xl transition-all hover:shadow-amber-500/50"
            aria-label="Next testimonial"
          >
            ›
          </motion.button>

          {/* Enhanced Carousel Indicators with Visual Feedback */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center items-center gap-3 mt-12"
          >
            {testimonials.map((_: any, i: number) => (
              <motion.div key={i} className="relative" whileHover={{ scale: 1.15 }}>
                <motion.button
                  className={`h-3 rounded-full transition-all font-bold text-xs flex items-center justify-center ${
                    i === current
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 w-12 shadow-lg shadow-amber-500/60 text-white'
                      : 'bg-slate-600/60 w-3 hover:bg-slate-500 hover:shadow-md hover:shadow-slate-500/40'
                  }`}
                  onClick={() => {
                    setCurrent(i)
                    setAutoplay(false)
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current}
                >
                  {i === current && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-xs"
                    >
                      ●
                    </motion.span>
                  )}
                </motion.button>
                
                {/* Animated ring effect when current */}
                {i === current && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-amber-400"
                    initial={{ scale: 0.8, opacity: 1 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Slide Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-6 text-slate-400 text-sm font-semibold"
            aria-live="polite"
          >
            <span className="text-amber-400">{current + 1}</span> of {testimonials.length}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Immigration Journey?
          </h3>
          <p className="text-lg text-slate-300 mb-10">
            Join thousands of satisfied clients who've achieved their dreams
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
          >
            Get Started Today →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
