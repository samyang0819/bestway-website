'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface PremiumButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  className?: string
  disabled?: boolean
  isLoading?: boolean
}

export default function PremiumButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  disabled = false,
  isLoading = false,
}: PremiumButtonProps) {
  const baseClasses = 'font-bold rounded-xl overflow-hidden relative group transition-all duration-300 flex items-center justify-center gap-2'
  
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg',
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-500 hover:to-amber-600 shadow-lg hover:shadow-xl hover:shadow-amber-500/40',
    secondary: 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/40',
    outlined: 'border-2 border-white/40 text-white hover:border-white/80 hover:bg-white/10',
    ghost: 'text-white hover:bg-white/10',
  }

  const content = (
    <motion.span
      className="relative block flex items-center justify-center gap-2"
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {isLoading ? (
        <motion.div
          className="w-5 h-5 border-2 border-white/30 border-t-current rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      ) : (
        icon
      )}
      {children}
    </motion.span>
  )

  const buttonContent = (
    <>
      <div className={`absolute inset-0 ${variantClasses[variant]} rounded-xl`} aria-hidden="true" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
        initial={{ x: '-100%' }}
        whileHover={disabled ? {} : { x: '100%' }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      />
      <div className={`relative z-10 ${sizeClasses[size]} ${variantClasses[variant]}`}>
        {content}
      </div>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        whileHover={disabled ? {} : { y: -4 }}
        disabled={disabled}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${className} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={disabled || isLoading ? {} : { y: -4 }}
    >
      {buttonContent}
    </motion.button>
  )
}
