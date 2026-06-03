'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface PremiumInputProps {
  label?: string
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  icon?: React.ReactNode
  multiline?: boolean
  rows?: number
  required?: boolean
  className?: string
}

export default function PremiumInput({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  icon,
  multiline = false,
  rows = 4,
  required = false,
  className = '',
}: PremiumInputProps) {
  const Component = multiline ? 'textarea' : 'input'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative group ${className}`}
    >
      {label && (
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-400 transition-colors text-xl">
            {icon}
          </div>
        )}

        <Component
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={multiline ? rows : undefined}
          required={required}
          className={`w-full px-4 py-3 ${icon ? 'pl-12' : ''} rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 dark:focus:border-amber-400 dark:focus:ring-amber-400/30 hover:border-slate-300 dark:hover:border-slate-500 ${
            multiline ? 'resize-none' : ''
          }`}
        />

        {/* Focus effect border */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-amber-400/0 pointer-events-none"
          animate={{ borderColor: value ? 'rgba(251, 191, 36, 0.5)' : 'rgba(251, 191, 36, 0)' }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-2 flex items-center gap-1"
        >
          <span>⚠️</span>
          {error}
        </motion.p>
      )}
    </motion.div>
  )
}
