'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const total = document.documentElement.scrollHeight - window.innerHeight
        const current = window.pageYOffset
        setProgress(total > 0 ? (current / total) * 100 : 0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Main progress bar with enhanced styling */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-cyan-500 to-amber-500 origin-left z-50"
        style={{
          scaleX: progress / 100,
          boxShadow: `0 0 20px rgba(251, 191, 36, ${progress / 100 * 0.8})`,
        }}
        transition={{ type: 'tween', duration: 0 }}
      />

      {/* Animated glow effect at the end of progress bar */}
      {progress > 0 && (
        <motion.div
          className="fixed top-0 left-0 h-1.5 w-2 bg-gradient-to-r from-amber-300 via-amber-200 to-cyan-300 z-50 blur-sm"
          style={{
            left: `${progress}%`,
            boxShadow: '0 0 30px rgba(251, 191, 36, 0.8), 0 0 50px rgba(6, 182, 212, 0.6)',
          }}
          transition={{ type: 'tween', duration: 0 }}
        />
      )}

      {/* Progress percentage indicator */}
      {progress > 2 && (
        <motion.div
          className="fixed top-6 right-6 px-3 py-1.5 bg-slate-900/90 backdrop-blur-md border border-amber-400/40 rounded-full text-xs font-bold text-amber-400 z-40 shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {Math.round(progress)}%
        </motion.div>
      )}
    </>
  )
}
