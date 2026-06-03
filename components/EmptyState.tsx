'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface EmptyStateProps {
  icon?: string
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
  buttonAction?: () => void
  className?: string
}

export default function EmptyState({
  icon = '📭',
  title,
  description,
  buttonText,
  buttonHref,
  buttonAction,
  className = '',
}: EmptyStateProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center py-20 px-4 ${className}`}
    >
      {/* Icon */}
      <motion.div
        variants={itemVariants}
        className="text-7xl mb-6 filter drop-shadow-lg"
      >
        {icon}
      </motion.div>

      {/* Title */}
      <motion.h3
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-bold text-white mb-3 text-center"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-lg text-slate-300 max-w-md text-center mb-8"
      >
        {description}
      </motion.p>

      {/* CTA Button */}
      {(buttonText && (buttonHref || buttonAction)) && (
        <motion.div
          variants={itemVariants}
          className="flex gap-4"
        >
          {buttonHref ? (
            <Link
              href={buttonHref}
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 inline-block"
            >
              {buttonText} →
            </Link>
          ) : (
            <button
              onClick={buttonAction}
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
            >
              {buttonText} →
            </button>
          )}
        </motion.div>
      )}

      {/* Decorative elements */}
      <motion.div
        variants={itemVariants}
        className="mt-12 grid grid-cols-3 gap-8 w-full max-w-lg"
      >
        {[
          { icon: '🔍', label: 'Try searching' },
          { icon: '🎯', label: 'Clear filters' },
          { icon: '💬', label: 'Get help' },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl mb-2">{item.icon}</div>
            <p className="text-xs text-slate-400">{item.label}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
