'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface EnhancedButtonProps {
  onClick?: () => void;
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export default function EnhancedButton({
  onClick,
  href,
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  type = 'button',
  ariaLabel,
}: EnhancedButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-amber-500/50',
    secondary: 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-blue-500/50',
    outline: 'border-2 border-white text-white hover:bg-white/10',
  };

  const buttonContent = (
    <motion.button
      onClick={onClick}
      whileHover={!disabled && !isLoading ? { scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.95 } : {}}
      disabled={disabled || isLoading}
      type={type}
      aria-label={ariaLabel}
      className={`group relative overflow-hidden rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isLoading ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              ⏳
            </motion.span>
            Processing...
          </>
        ) : (
          <>
            {children}
            <motion.span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
              →
            </motion.span>
          </>
        )}
      </span>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={!disabled && !isLoading ? { x: '100%' } : {}}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      />
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
