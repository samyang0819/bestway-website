'use client'

import { motion } from 'framer-motion'

interface FeatureProps {
  icon: React.ReactNode | string
  title: string
  description: string
}

interface FeaturesGridProps {
  features: FeatureProps[]
  columns?: 2 | 3 | 4
  className?: string
}

export function FeatureItem({ icon, title, description }: FeatureProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-br from-slate-50/80 to-white/80 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm hover:border-amber-400/40 transition-all shadow-md hover:shadow-lg"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-cyan-50/0 group-hover:from-amber-50/40 group-hover:to-cyan-50/30 dark:group-hover:from-amber-500/5 dark:group-hover:to-cyan-500/5 transition-all duration-300 rounded-2xl pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          className="text-5xl mb-4 inline-block"
          whileHover={{ scale: 1.3, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          {typeof icon === 'string' ? <span>{icon}</span> : icon}
        </motion.div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-cyan-400 w-0 group-hover:w-full transition-all duration-500 rounded-tr-full"
        style={{
          boxShadow: '0 0 15px rgba(251, 191, 36, 0.4)',
        }}
      />
    </motion.article>
  )
}

export function FeaturesGrid({
  features,
  columns = 3,
  className = '',
}: FeaturesGridProps) {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid grid-cols-1 ${gridClass[columns]} gap-8 ${className}`}>
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <FeatureItem {...feature} />
        </motion.div>
      ))}
    </div>
  )
}
