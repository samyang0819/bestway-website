'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  number: number
  title: string
  description: string
  icon?: string
  details?: string[]
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
  className?: string
}

export default function ProcessTimeline({
  steps,
  className = '',
}: ProcessTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Connecting line - desktop only */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-cyan-400 to-amber-400 transform -translate-x-1/2">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-amber-400 to-cyan-400 rounded-full"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="space-y-12 md:space-y-20">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Content */}
            <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative p-8 rounded-2xl border-2 border-amber-200/40 bg-gradient-to-br from-amber-50/50 to-yellow-50/30 dark:from-amber-900/20 dark:to-yellow-900/10 hover:border-amber-400/60 transition-all shadow-lg hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {step.details && (
                  <ul className="space-y-2">
                    {step.details.map((detail, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.05 }}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>

            {/* Connector Circle - Desktop only */}
            <div className="hidden md:flex flex-col items-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                whileHover={{ scale: 1.2 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {step.icon || step.number}
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  className="w-1 h-12 bg-gradient-to-b from-amber-400 to-cyan-400 mt-4"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: 0.3 }}
                />
              )}
            </div>

            {/* Icon Circle - Mobile only */}
            <div className="md:hidden">
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-lg font-bold text-white shadow-lg flex-shrink-0"
                whileHover={{ scale: 1.2 }}
              >
                {step.icon || step.number}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
