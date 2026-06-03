'use client'

import { motion } from 'framer-motion'
import PremiumButton from './PremiumButton'

interface CTASection Props {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  ctaSecondaryText?: string
  ctaSecondaryHref?: string
  background?: 'dark' | 'gradient' | 'light'
  className?: string
}

export default function CTASection({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaHref = '#contact',
  ctaSecondaryText,
  ctaSecondaryHref,
  background = 'gradient',
  className = '',
}: CTASectionProps) {
  const bgClasses = {
    dark: 'bg-slate-900',
    gradient: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
    light: 'bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800',
  }

  return (
    <section className={`py-20 md:py-32 relative overflow-hidden ${bgClasses[background]} ${className}`}>
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-400/40 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full animate-pulse" />
                {subtitle}
              </span>
            </motion.div>
          )}

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight ${
            background === 'light'
              ? 'text-slate-900 dark:text-white'
              : 'text-white'
          }`}>
            {title}
          </h2>

          {description && (
            <p className={`text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto ${
              background === 'light'
                ? 'text-slate-600 dark:text-slate-300'
                : 'text-slate-200'
            }`}>
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <PremiumButton
              href={ctaHref}
              variant="primary"
              size="lg"
              icon="🚀"
            >
              {ctaText}
            </PremiumButton>
            {ctaSecondaryText && (
              <PremiumButton
                href={ctaSecondaryHref || '#services'}
                variant="outlined"
                size="lg"
                icon="📖"
              >
                {ctaSecondaryText}
              </PremiumButton>
            )}
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`mt-12 flex items-center justify-center gap-2 text-sm ${
              background === 'light'
                ? 'text-slate-600 dark:text-slate-400'
                : 'text-slate-300'
            }`}
          >
            <span>✓</span>
            <span>No credit card required • Free consultation • 24/7 Support</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
