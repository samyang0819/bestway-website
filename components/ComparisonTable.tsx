'use client'

import { motion } from 'framer-motion'

interface ComparisonItem {
  feature: string
  included: boolean
  note?: string
}

interface ComparisonPlan {
  name: string
  price?: string
  description?: string
  items: ComparisonItem[]
  highlight?: boolean
}

interface ComparisonTableProps {
  plans: ComparisonPlan[]
  className?: string
}

export default function ComparisonTable({
  plans,
  className = '',
}: ComparisonTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <div className="inline-block min-w-full">
        <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${plans.length}, minmax(300px, 1fr))` }}>
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={plan.highlight ? { scale: 1.05, y: -20 } : { y: -8 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? 'ring-2 ring-amber-400 shadow-2xl shadow-amber-400/50'
                  : 'border border-slate-200 dark:border-slate-700 shadow-lg'
              }`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/20'
                  : 'bg-white dark:bg-slate-800'
              }`} />

              {/* Highlight badge */}
              {plan.highlight && (
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                >
                  <div className="px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                </motion.div>
              )}

              <div className="relative z-10 p-8">
                {/* Header */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>

                {plan.description && (
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {plan.description}
                  </p>
                )}

                {plan.price && (
                  <div className="mb-8">
                    <span className="text-4xl font-black text-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">
                      {plan.price}
                    </span>
                  </div>
                )}

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-600 my-6" />

                {/* Features list */}
                <ul className="space-y-4">
                  {plan.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                      className="flex items-start gap-3"
                    >
                      <motion.span
                        className="text-2xl flex-shrink-0 mt-0.5"
                        animate={item.included ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ delay: 0.5, repeat: Infinity }}
                      >
                        {item.included ? '✅' : '❌'}
                      </motion.span>
                      <div>
                        <p className={`text-sm ${
                          item.included
                            ? 'text-slate-700 dark:text-slate-200 font-medium'
                            : 'text-slate-500 dark:text-slate-500 line-through'
                        }`}>
                          {item.feature}
                        </p>
                        {item.note && (
                          <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-cyan-400 w-0"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
