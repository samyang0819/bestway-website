'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface PremiumCardProps {
  icon?: React.ReactNode | string
  title: string
  description: string
  features?: string[]
  footer?: React.ReactNode
  onClick?: () => void
  hover?: 'scale' | 'lift' | 'glow'
  gradient?: string
  borderColor?: string
  className?: string
  children?: React.ReactNode
}

export default function PremiumCard({
  icon,
  title,
  description,
  features = [],
  footer,
  onClick,
  hover = 'lift',
  gradient = 'from-blue-500/10 to-cyan-500/10',
  borderColor = 'border-blue-200/30',
  className = '',
  children,
}: PremiumCardProps) {
  const hoverVariants = {
    scale: { scale: 1.05, y: -8 },
    lift: { y: -16 },
    glow: { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
  }

  return (
    <motion.div
      whileHover={hoverVariants[hover]}
      onClick={onClick}
      className={`group relative overflow-hidden p-8 rounded-2xl border-2 ${borderColor} bg-gradient-to-br ${gradient} backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl ${className}`}
      style={{
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Animated corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/40 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <motion.div
            className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 group-hover:-rotate-12 origin-left inline-block"
            whileHover={{ rotate: 15 }}
          >
            {icon}
          </motion.div>
        )}

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <span className="inline-block w-2 h-2 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full" />
                {feature}
              </motion.li>
            ))}
          </ul>
        )}

        {children}

        {footer && (
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            {footer}
          </div>
        )}
      </div>

      {/* Bottom accent line with glow */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-400 w-0 group-hover:w-full transition-all duration-500 rounded-t-full"
        style={{
          boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)',
        }}
      />
    </motion.div>
  )
}
