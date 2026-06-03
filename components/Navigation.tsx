'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()
  const t = useTranslations()
  const pathname = usePathname()
  const isDetailPage = pathname.includes('/blog') || pathname.includes('/case-studies')

  const menuItems = [
    { label: t('navigation.home'), href: isDetailPage ? `/${locale}/#home` : '#home' },
    { label: t('navigation.services'), href: isDetailPage ? `/${locale}/#services` : '#services' },
    { label: 'Case Studies', href: `/${locale}/case-studies` },
    { label: t('navigation.about'), href: isDetailPage ? `/${locale}/#about` : '#about' },
    { label: t('navigation.contact'), href: isDetailPage ? `/${locale}/#contact` : '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-white/98 to-slate-50/98 text-slate-900 shadow-xl backdrop-blur-xl border-b border-slate-100/50 hover:shadow-2xl transition-shadow" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-3 cursor-pointer group"
            aria-label="BestWay Consulting home"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="BestWay Consulting Logo"
                width={45}
                height={45}
                className="h-12 w-auto hover:opacity-90 transition-opacity shadow-md"
                style={{ mixBlendMode: 'multiply', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' }}
                priority
              />
            </div>
            <div className="flex flex-col">
            <span className="font-black text-lg tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-cyan-700 transition-all">
                BESTWAY
              </span>
              <span className="text-xs font-bold text-cyan-700 group-hover:text-cyan-800 transition-colors tracking-widest">
                CONSULTING
              </span>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-1" role="menubar">
            {menuItems.map((item) => (
              <li key={item.label} role="none">
                <motion.a
                  href={item.href}
                  whileHover={{ y: -4 }}
                  whileTap={{ y: -2 }}
                  className="group relative px-4 py-2.5 font-semibold text-sm text-slate-700 hover:text-blue-600 transition-all duration-200 rounded-lg overflow-hidden"
                  role="menuitem"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {/* Background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  />
                  
                  {/* Border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border border-blue-200"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  />

                  {/* Text */}
                  <span className="relative z-10 flex items-center gap-2">
                    {item.label}
                  </span>

                  {/* Bottom animated line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: '100%', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow: '0 0 15px rgba(59, 130, 246, 0.6), inset 0 0 8px rgba(255, 255, 255, 0.2)',
                    }}
                    aria-hidden="true"
                  />
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-slate-900 text-3xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? '✕' : '☰'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden mt-4"
          id="mobile-menu"
          role="region"
          aria-label="Mobile navigation menu"
        >
          <ul className="flex flex-col gap-3 pb-4" role="menu">
            {menuItems.map((item) => (
              <li key={item.label} role="none">
                <motion.a
                  href={item.href}
                  whileHover={{ x: 8 }}
                  className="px-5 py-2.5 font-semibold text-sm text-slate-700 hover:text-blue-600 transition-all bg-transparent hover:bg-blue-50 rounded-lg border border-transparent hover:border-blue-300"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  )
}
