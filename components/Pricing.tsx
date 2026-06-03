'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Pricing() {
  const t = useTranslations()
  const pricingTiers = t.raw('pricing.tiers')
  
  const tierIcons: Record<string, string> = {
    'Consultation': '🎯',
    'Express Entry': '🚀',
    'Family Sponsorship': '👨‍👩‍👧‍👦',
    'Premium': '👑',
  }
  
  const tierHighlighted: Record<string, boolean> = {
    'Consultation': false,
    'Express Entry': true,
    'Family Sponsorship': false,
    'Premium': false,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: { y: -5 },
  }

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-900/30 border border-amber-500/50 rounded-full text-amber-300 text-xs font-bold mb-6 uppercase tracking-wider">
            💰 {t('pricing.title')}
          </span>
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pricingTiers.map((tier: any, index: number) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`rounded-lg p-8 transition-all ${
                tierHighlighted[tier.name]
                  ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-2xl ring-2 ring-amber-400 scale-105'
                  : 'bg-slate-800/50 border-2 border-amber-500/30 hover:border-amber-400/60'
              }`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{tierIcons[tier.name]}</div>

              {/* Title & Price */}
              <h3 className={`text-2xl font-bold mb-2 ${tierHighlighted[tier.name] ? 'text-white' : 'text-white'}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-4 ${tierHighlighted[tier.name] ? 'text-amber-100' : 'text-slate-400'}`}>
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className={`text-4xl font-bold ${tierHighlighted[tier.name] ? 'text-white' : 'text-amber-400'}`}>
                  {tier.price}
                </div>
                {tier.price !== 'FREE' && (
                  <p className={`text-sm ${tierHighlighted[tier.name] ? 'text-amber-100' : 'text-slate-400'}`}>
                    one-time fee
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature: any, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`text-lg mt-0.5 ${tier.highlighted ? 'text-amber-200' : 'text-amber-400'}`}>
                      ✓
                    </span>
                    <span className={`text-sm ${tier.highlighted ? 'text-amber-50' : 'text-slate-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                  tier.highlighted
                    ? 'bg-white text-amber-700 hover:bg-amber-50'
                    : 'bg-amber-500 text-slate-900 hover:bg-amber-600'
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg"
        >
          <p className="text-gray-700">
            💡 <strong>Custom packages available</strong> - Contact us for personalized quotes based on your specific needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
