'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import MultiStepContactForm from './MultiStepContactForm'
import { SlotsAvailableCard, RecentActivityFeed, UrgencyCountdown, SocialProofBadges } from './ScarcityElements'

export default function Contact() {
  const t = useTranslations()

  const contactInfo = [
    { 
      icon: '🍁', 
      label: 'Vancouver Office', 
      value: '+1-604-512-6837'
    },
    { 
      icon: '🦘', 
      label: 'Sydney Office', 
      value: 'Sydney, NSW Australia'
    },
    { 
      icon: '📧', 
      label: 'Email', 
      value: 'info@bestwayconsulting.com'
    },
    { icon: '💬', label: 'WhatsApp', value: t('contact.whatsapp') },
    { icon: '🎮', label: 'KakaoTalk', value: t('contact.kakaotalk') },
  ]

  return (
    <section id="contact" className="py-32 md:py-40 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden" role="region" aria-label="Contact Us">
      {/* Premium Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" aria-hidden="true" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse" aria-hidden="true" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-amber-900/30 border border-amber-500/50 rounded-full text-amber-300 text-xs font-bold mb-6 uppercase tracking-wider">
            📞 {t('contact.title')}
          </span>
          <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-amber-400 to-cyan-300 bg-clip-text text-transparent">
            {t('contact.subtitle')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
            role="complementary"
            aria-label="Contact information"
          >
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-start gap-4 p-6 rounded-xl border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 bg-gradient-to-br from-slate-800/50 to-slate-700/50 hover:from-slate-800 hover:to-slate-700 backdrop-blur-sm shadow-md hover:shadow-lg hover:shadow-amber-500/10"
                  role="article"
                  aria-label={`${info.label}: ${info.value}`}
                >
                  <span className="text-3xl mt-1" aria-hidden="true">{info.icon}</span>
                  <div>
                    <h4 className="font-bold text-white mb-1 text-lg">{info.label}</h4>
                    <p className="text-slate-300">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-slate-700">
              <p className="text-slate-300 mb-5 font-bold text-lg uppercase tracking-wider">Follow Us</p>
              <div className="flex gap-4" role="navigation" aria-label="Social media links">
                {['📘', '🐦', '💼', '📺'].map((icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.25, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-900/40 to-amber-800/40 hover:from-amber-700/60 hover:to-amber-600/60 flex items-center justify-center text-2xl transition-all duration-300 border border-amber-500/30 hover:border-amber-400/60 shadow-md hover:shadow-lg hover:shadow-amber-500/20"
                    aria-label={`Social media link ${i + 1}`}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Middle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm"
          >
            <MultiStepContactForm />
          </motion.div>

          {/* Scarcity & Urgency Elements - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Urgency Countdown */}
            <UrgencyCountdown />

            {/* Available Slots */}
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm">
              <SlotsAvailableCard />
            </div>

            {/* Recent Activity Feed */}
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm">
              <RecentActivityFeed />
            </div>
          </motion.div>
        </div>

        {/* Social Proof Summary - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-slate-700"
        >
          <h3 className="text-center text-2xl font-bold text-white mb-12">Why Choose BestWay Consulting?</h3>
          <SocialProofBadges />
        </motion.div>
      </div>
    </section>
  )
}
