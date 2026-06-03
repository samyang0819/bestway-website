'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.pageYOffset / scrollHeight) * 100
      setScrollProgress(scrolled)

      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <motion.button
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="relative w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Back to top"
            title="Scroll back to top"
          >
            {/* Background circle with progress */}
            <svg className="absolute inset-0 w-14 h-14" style={{ transform: 'rotate(-90deg)' }}>
              <circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.1"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray={`${(scrollProgress / 100) * 163.36} 163.36`}
                initial={{ strokeDasharray: '0 163.36' }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(37, 99, 235)" />
                  <stop offset="100%" stopColor="rgb(0, 188, 212)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Icon */}
            <motion.svg
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </motion.svg>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 whitespace-nowrap px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold pointer-events-none"
              style={{ bottom: '50%', transform: 'translateY(50%)' }}
            >
              Back to top
              <div className="absolute left-full w-2 h-2 bg-slate-900 transform -translate-y-1/2 top-1/2" style={{ width: 0 }} />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

