'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20 relative overflow-hidden border-t border-amber-500/30">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="BestWay Consulting Logo"
                width={45}
                height={45}
                className="h-12 w-auto"
                style={{ mixBlendMode: 'multiply', filter: 'drop-shadow(0 4px 12px rgba(251, 146, 60, 0.3))' }}
              />
              <div>
                <h4 className="font-black text-lg bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">BESTWAY</h4>
                <p className="text-xs text-amber-400 font-bold">CONSULTING</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-wider text-white">{t('footer.navigation')}</h4>
            <ul className="space-y-3 text-sm">
              {[
                { key: 'home', href: '#home' },
                { key: 'services', href: '#services' },
                { key: 'case-studies', href: '/case-studies' },
                { key: 'contact', href: '#contact' },
                { key: 'pricing', href: '/pricing' },
              ].map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-200 font-medium"
                  >
                    → {link.key === 'pricing' ? 'Pricing' : link.key === 'case-studies' ? 'Case Studies' : t(`navigation.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-wider text-white">{t('footer.services')}</h4>
            <ul className="space-y-3 text-sm">
              {[
                'services.canadaImmigration',
                'services.australiaImmigration',
                'services.education',
              ].map((serviceKey) => (
                <li key={serviceKey}>
                  <span className="text-slate-300 font-medium">✓ {t(serviceKey)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-wider text-white">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-amber-400 font-bold">� Vancouver Office</p>
                <p className="text-slate-300">#200-20641 Logan Ave</p>
                <p className="text-slate-300">Langley, BC V3A 7R3</p>
              </div>
              <div>
                <p className="text-amber-400 font-bold">📍 Sydney Office</p>
                <p className="text-slate-300">Sydney, NSW Australia</p>
              </div>
              <div>
                <p className="text-amber-400 font-bold">�📞 Phone</p>
                <p className="text-slate-300">{t('contact.phone')}</p>
              </div>
              <div>
                <p className="text-amber-400 font-bold">📧 Email</p>
                <p className="text-slate-300">{t('contact.email_address')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border-t border-amber-500/30 pt-8 text-center"
        >
          <p className="text-slate-400 text-sm" suppressHydrationWarning>&copy; {currentYear} BestWay Consulting. {t('footer.rights')} | Professional Immigration Services</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
