'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface CounterValue {
  label: string
  value: number
  suffix: string
  icon: string
}

export function ScrollTriggeredCounters() {
  const counters: CounterValue[] = [
    { label: 'Happy Clients', value: 500, suffix: '+', icon: '😊' },
    { label: 'Success Rate', value: 95, suffix: '%', icon: '✅' },
    { label: 'Years Experience', value: 25, suffix: '+', icon: '⭐' },
    { label: 'Countries Served', value: 20, suffix: '+', icon: '🌍' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {counters.map((counter, i) => (
        <CounterCard key={counter.label} counter={counter} index={i} />
      ))}
    </div>
  )
}

function CounterCard({ counter, index }: { counter: CounterValue; index: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible || !isMounted) return

    const duration = 2000
    const steps = 60
    const increment = counter.value / steps
    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      setDisplayValue(Math.floor(increment * currentStep))

      if (currentStep >= steps) {
        setDisplayValue(counter.value)
        clearInterval(interval)
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [isVisible, counter.value, isMounted])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 hover:border-amber-500/50 transition-all text-center group"
      whileHover={{ y: -8 }}
    >
      <div className="text-3xl md:text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
        {counter.icon}
      </div>
      <motion.div
        className="text-3xl md:text-4xl font-bold text-amber-400"
        key={displayValue}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayValue}{counter.suffix}
      </motion.div>
      <p className="text-xs md:text-sm text-slate-300 mt-2 font-medium">{counter.label}</p>
    </motion.div>
  )
}

export function InteractiveFormField() {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className="relative">
      <motion.label
        className="block text-sm font-medium text-slate-300 mb-2"
        animate={{
          y: isFocused || value ? -24 : 0,
          scale: isFocused || value ? 0.85 : 1,
          color: isFocused ? '#fbbf24' : '#cbd5e1',
        }}
        transition={{ duration: 0.2 }}
      >
        Enter your message
      </motion.label>

      <motion.div
        animate={{
          boxShadow: isFocused
            ? '0 0 20px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(251, 191, 36, 0.1)'
            : '0 0 0px rgba(251, 191, 36, 0)',
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none transition-all"
          placeholder="What can we help you with?"
        />

        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400"
          animate={{
            width: isFocused ? '100%' : '0%',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Character counter with animation */}
      {value && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-amber-400 mt-2"
        >
          {value.length} characters
        </motion.div>
      )}
    </div>
  )
}

export function GlowingCTAButton({ children, onClick }: { children: string; onClick?: () => void }) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <motion.button
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-8 py-3 rounded-lg font-bold text-white overflow-hidden group"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600"
        animate={{
          boxShadow: isPressed
            ? '0 0 20px rgba(251, 146, 60, 0.8), inset 0 0 20px rgba(251, 146, 60, 0.3)'
            : '0 0 0px rgba(251, 146, 60, 0)',
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        animate={{
          x: isPressed ? ['100%', '-100%'] : ['100%', '-100%'],
          opacity: isPressed ? [0, 0.3, 0] : [0, 0, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: isPressed ? Infinity : 0,
        }}
      />

      {/* Text */}
      <span className="relative flex items-center gap-2 z-10">
        {children}
        <motion.span
          animate={{ x: isPressed ? [0, 4, 0] : 0 }}
          transition={{ duration: 0.4, repeat: isPressed ? Infinity : 0 }}
        >
          →
        </motion.span>
      </span>
    </motion.button>
  )
}

export function FeatureCardWithHover() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        boxShadow: isHovered
          ? '0 20px 40px rgba(251, 146, 60, 0.2), 0 0 20px rgba(251, 191, 36, 0.1)'
          : '0 0px 0px rgba(251, 146, 60, 0)',
      }}
      className="p-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 hover:border-amber-500/50 transition-all"
    >
      <motion.div
        animate={{
          y: isHovered ? -4 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-bold text-white mb-2">Feature Title</h3>
        <p className="text-slate-400">Hover over this card to see interactive feedback</p>

        {/* Animated accent line */}
        <motion.div
          className="mt-4 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400"
          animate={{
            width: isHovered ? '100%' : '0%',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

export function PulsingBadge({ text, icon }: { text: string; icon: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 text-green-300 text-sm font-bold"
    >
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {icon}
      </motion.span>
      {text}
    </motion.div>
  )
}

export function MicrointeractionsDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Scroll-Triggered Counters</h3>
        <ScrollTriggeredCounters />
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">Interactive Form Field</h3>
        <InteractiveFormField />
      </div>

      <div className="flex gap-4">
        <GlowingCTAButton>Book Consultation</GlowingCTAButton>
        <GlowingCTAButton>Schedule Call</GlowingCTAButton>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">Feature Card with Hover Effects</h3>
        <FeatureCardWithHover />
      </div>

      <PulsingBadge text="Expert Consultants Online" icon="👥" />
    </div>
  )
}
