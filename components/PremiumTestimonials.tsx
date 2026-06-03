'use client'

import { motion } from 'framer-motion'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar?: string
  rating?: number
  company?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatar = '👤',
  rating = 5,
  company,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm hover:border-amber-400/40 transition-all shadow-lg hover:shadow-xl"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-cyan-50/0 group-hover:from-amber-50/30 group-hover:to-cyan-50/30 dark:group-hover:from-amber-500/5 dark:group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-amber-400 text-lg"
            >
              ⭐
            </motion.span>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-slate-700 dark:text-slate-200 text-base leading-relaxed mb-6 italic">
          "{quote}"
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
          <motion.div
            className="text-4xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            {avatar}
          </motion.div>
          <div>
            <p className="font-bold text-slate-900 dark:text-white">{author}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">{role}</p>
            {company && (
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">@ {company}</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-cyan-400 w-0 group-hover:w-full transition-all duration-500"
        style={{
          boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)',
        }}
      />
    </motion.article>
  )
}

interface StatCardProps {
  number: string | number
  label: string
  suffix?: string
  icon?: string
}

export function StatCard({ number, label, suffix = '', icon }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="group relative p-8 rounded-2xl border border-amber-200/40 dark:border-amber-500/30 bg-gradient-to-br from-amber-50/50 to-yellow-50/30 dark:from-amber-900/20 dark:to-yellow-900/10 backdrop-blur-sm hover:border-amber-400/60 dark:hover:border-amber-400/60 transition-all shadow-lg hover:shadow-xl"
    >
      <div className="relative z-10 text-center">
        {icon && (
          <motion.div
            className="text-5xl mb-4 inline-block"
            whileHover={{ scale: 1.3, rotate: 15 }}
          >
            {icon}
          </motion.div>
        )}
        <motion.p
          className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          {number}
          {suffix}
        </motion.p>
        <p className="text-slate-700 dark:text-slate-300 font-semibold">{label}</p>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-400/30 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  )
}
