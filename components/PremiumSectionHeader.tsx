'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface PremiumSectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  description?: string
  className?: string
  centered?: boolean
}

export default function PremiumSectionHeader({
  badge,
  title,
  subtitle,
  description,
  className = '',
  centered = true,
}: PremiumSectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-400/40 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm hover:border-amber-400/60 transition-all">
            <span className="inline-block w-2 h-2 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full animate-pulse" />
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight"
      >
        <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 text-base leading-relaxed max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-1 w-24 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full origin-center ${centered ? 'mx-auto' : ''} my-8`}
      />
    </div>
  )
}
