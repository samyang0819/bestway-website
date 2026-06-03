'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [formState, setFormState] = useState<FormState>({ status: 'idle' })
  const [error, setError] = useState('')

  const validateEmail = (email: string): boolean => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setFormState({ status: 'loading' })

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setFormState({
          status: 'success',
          message: 'Check your email to confirm your subscription!'
        })
        setEmail('')

        setTimeout(() => {
          setFormState({ status: 'idle' })
        }, 5000)
      } else {
        setFormState({
          status: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setFormState({
        status: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    }
  }

  return (
    <section className="py-32 md:py-48 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <motion.div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl" animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity }} />
      <motion.div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-cyan-400/20 to-transparent rounded-full blur-3xl" animate={{ x: [0, -40, 0], y: [0, -30, 0] }} transition={{ duration: 14, repeat: Infinity, delay: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
          <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} className="inline-block mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-400/40 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">📬 Newsletter</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">Stay Updated</h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} className="h-1.5 w-24 bg-gradient-to-r from-amber-400 to-cyan-400 mx-auto rounded-full origin-center mb-8" />
          <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-light">
            Get the latest immigration news, policy updates, and expert tips delivered to your inbox weekly.
          </p>

          <AnimatePresence>
            {formState.status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="mb-8 p-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-400/50 text-emerald-200 rounded-xl flex items-center gap-3 backdrop-blur-sm"
                role="alert"
                aria-live="polite"
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">✓</span>
                <div className="text-left">
                  <p className="font-bold">Success!</p>
                  <p className="text-sm">{formState.message}</p>
                </div>
              </motion.div>
            )}

            {formState.status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="mb-8 p-6 bg-gradient-to-r from-red-500/20 to-rose-500/20 border-2 border-red-400/50 text-red-200 rounded-xl flex items-center gap-3 backdrop-blur-sm"
                role="alert"
                aria-live="polite"
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">⚠️</span>
                <div className="text-left">
                  <p className="font-bold">Error</p>
                  <p className="text-sm">{formState.message}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder="Enter your email"
                disabled={formState.status === 'loading'}
                className={`flex-1 px-6 py-4 rounded-xl border-2 backdrop-blur-sm placeholder-slate-500 focus:outline-none transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium bg-slate-800 ${
                  error
                    ? 'border-red-400/50 focus:border-red-400 text-red-200'
                    : 'bg-slate-800 border-white/10 focus:border-amber-400/50 text-white'
                }`}
                aria-label="Email address for newsletter"
                required
              />
              <motion.button
                type="submit"
                disabled={formState.status === 'loading'}
                whileHover={formState.status !== 'loading' ? { scale: 1.08, y: -4 } : {}}
                whileTap={formState.status !== 'loading' ? { scale: 0.95 } : {}}
                className="px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all text-lg uppercase tracking-widest whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                aria-label={formState.status === 'loading' ? 'Subscribing...' : 'Subscribe to newsletter'}
              >
                {formState.status === 'loading' ? (
                  <>
                    <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>⌛</motion.span>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe →
                  </>
                )}
              </motion.button>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm font-semibold"
              >
                {error}
              </motion.p>
            )}
          </form>

          <p className="text-sm text-slate-400 font-light mt-8">
            ✓ We respect your privacy. Unsubscribe at any time with one click.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
