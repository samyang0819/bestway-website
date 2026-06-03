'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Services() {
  const t = useTranslations()
  
  // Safe translation with fallbacks
  const getTranslation = (key: string, fallback: string = key) => {
    try {
      return t(key)
    } catch {
      return fallback
    }
  }

  const services = [
    {
      icon: '🍁',
      title: getTranslation('services.canadaImmigration', 'Canada Immigration'),
      titleKey: 'services.canadaImmigration',
      color: 'from-red-500/10 to-red-400/10',
      border: 'border-red-200/30',
      country: 'Canada',
      href: '/canada-immigration'
    },
    {
      icon: '🦘',
      title: getTranslation('services.australiaImmigration', 'Australia Immigration'),
      titleKey: 'services.australiaImmigration',
      color: 'from-yellow-500/10 to-orange-500/10',
      border: 'border-yellow-200/30',
      country: 'Australia',
      href: '/australia-immigration'
    },
    {
      icon: '🎓',
      title: getTranslation('services.education', 'Education & Study Visas'),
      titleKey: 'services.education',
      color: 'from-blue-500/10 to-cyan-500/10',
      border: 'border-blue-200/30',
      country: 'Both'
    },
    {
      icon: '💼',
      title: getTranslation('services.workVisa', 'Work Visas & Employment'),
      titleKey: 'services.workVisa',
      color: 'from-green-500/10 to-emerald-500/10',
      border: 'border-green-200/30',
      country: 'Both'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: getTranslation('services.familySponsorship', 'Family Sponsorship'),
      titleKey: 'services.familySponsorship',
      color: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-200/30',
      country: 'Both'
    },
    {
      icon: '⚖️',
      title: getTranslation('services.legal', 'Legal & Immigration Law'),
      titleKey: 'services.legal',
      color: 'from-indigo-500/10 to-purple-500/10',
      border: 'border-indigo-200/30',
      country: 'Both'
    },
    {
      icon: '💰',
      title: getTranslation('services.financial', 'Finance & Tax Consulting'),
      titleKey: 'services.financial',
      color: 'from-green-600/10 to-green-500/10',
      border: 'border-green-300/30',
      country: 'Both'
    },
    {
      icon: '🏢',
      title: getTranslation('services.business', 'Business & Settlement'),
      titleKey: 'services.business',
      color: 'from-orange-500/10 to-red-500/10',
      border: 'border-orange-200/30',
      country: 'Both'
    },
    {
      icon: '📞',
      title: getTranslation('services.appeals', 'Appeals & Case Management'),
      titleKey: 'services.appeals',
      color: 'from-rose-500/10 to-red-500/10',
      border: 'border-rose-200/30',
      country: 'Both'
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  }

  return (
    <section id="services" className="py-32 md:py-48 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" role="region" aria-label="Our Services">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-transparent to-cyan-500/5" />

      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-cyan-400/20 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-400/40 rounded-full text-amber-300 text-sm font-semibold uppercase tracking-widest backdrop-blur-sm">
              ✨ {t('services.subtitle')}
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            {t('services.title')}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-1 w-24 bg-gradient-to-r from-amber-400 to-cyan-400 mx-auto rounded-full origin-center"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const CardContent = (
              <>
                {/* Premium gradient background - More dramatic */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-cyan-500/0 group-hover:from-amber-500/20 group-hover:to-cyan-500/15 transition-all duration-300 pointer-events-none" aria-hidden="true" />
                
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-400/30 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="text-7xl group-hover:scale-150 transition-transform duration-300 group-hover:-rotate-12 origin-center"
                      aria-label={`${service.title} icon`}
                    >
                      {service.icon}
                    </motion.div>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="text-xs px-3 py-1.5 bg-gradient-to-r from-amber-500/30 to-amber-400/20 text-amber-200 font-bold rounded-lg uppercase tracking-wider group-hover:from-amber-400/50 group-hover:to-amber-300/30 transition-all border border-amber-400/30 group-hover:border-amber-300/60"
                      aria-label={`Service available in ${service.country}`}
                    >
                      {service.country}
                    </motion.span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 group-hover:text-amber-300 transition-colors duration-200 leading-snug">
                    {service.title}
                  </h3>

                  {/* Enhanced bottom accent line with glow */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-400 w-0 group-hover:w-full transition-all duration-500"
                    style={{
                      boxShadow: '0 0 20px rgba(251, 191, 36, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.3)',
                    }}
                    animate={{ backgroundPosition: ['0%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </>
            );

            return service.href ? (
              <Link key={i} href={service.href} className="group">
                <motion.article
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ y: -16, transition: { duration: 0.3 } }}
                  className={`relative overflow-hidden p-8 md:p-10 rounded-2xl border-2 ${service.border} bg-gradient-to-br ${service.color} backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.03] h-full`}
                  role="article"
                  aria-label={`${service.title} service for ${service.country}`}
                  style={{
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {CardContent}
                </motion.article>
              </Link>
            ) : (
              <motion.article
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -16, transition: { duration: 0.3 } }}
                className={`group relative overflow-hidden p-8 md:p-10 rounded-2xl border-2 ${service.border} bg-gradient-to-br ${service.color} backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.03]`}
                role="article"
                aria-label={`${service.title} service for ${service.country}`}
                style={{
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                {CardContent}
              </motion.article>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not sure which service you need?
          </h3>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Our immigration experts can guide you through the best options for your situation
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
          >
            Schedule Free Consultation →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
