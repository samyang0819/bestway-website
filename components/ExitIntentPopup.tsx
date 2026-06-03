'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const hasShownRef = useRef(false);

  useEffect(() => {
    // Only show popup once per session
    if (hasShownRef.current) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from top of page
      if (e.clientY <= 0) {
        setIsOpen(true);
        hasShownRef.current = true;
      }
    };

    // Add listener for desktop exit
    document.addEventListener('mouseleave', handleMouseLeave);

    // Also trigger on scroll if user scrolls to bottom
    const handleScroll = () => {
      if (hasShownRef.current) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Show popup when user scrolls to 90% of page
      if (scrollTop + windowHeight >= docHeight * 0.9) {
        // Small delay to avoid immediate trigger
        setTimeout(() => {
          if (!hasShownRef.current) {
            setIsOpen(true);
            hasShownRef.current = true;
          }
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll, { once: true });

    // Also show popup after 30 seconds on page
    const timer = setTimeout(() => {
      if (!hasShownRef.current && !isOpen) {
        setIsOpen(true);
        hasShownRef.current = true;
      }
    }, 30000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setSubmitMessage('Thanks! Check your email for the free guide.');
        setEmail('');
        setTimeout(() => {
          setIsOpen(false);
          setShowSuccess(false);
        }, 2000);
      } else {
        setSubmitMessage('Please enter a valid email address');
      }
    } catch (error) {
      setSubmitMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-amber-400 to-cyan-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Content */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 border border-amber-400/30 shadow-2xl">
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl transition-colors"
                  aria-label="Close popup"
                >
                  ✕
                </motion.button>

                {/* Content */}
                <AnimatePresence mode="wait">
                  {!showSuccess ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      {/* Icon */}
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-5xl text-center"
                      >
                        📚
                      </motion.div>

                      {/* Headline */}
                      <div className="text-center space-y-3">
                        <h3 className="text-2xl md:text-3xl font-black text-white">
                          Wait! Don't Leave Empty-Handed
                        </h3>
                        <p className="text-slate-300 text-lg leading-relaxed">
                          Get our <span className="font-bold text-amber-400">FREE Immigration Guide</span> with insider tips and strategies used by successful applicants.
                        </p>
                      </div>

                      {/* Benefits */}
                      <div className="bg-gradient-to-r from-amber-500/10 to-cyan-500/10 rounded-lg p-4 border border-amber-400/30 space-y-2">
                        <div className="flex gap-2 text-sm text-slate-200">
                          <span className="text-amber-400 flex-shrink-0">✓</span>
                          <span>Complete application checklist for 2024</span>
                        </div>
                        <div className="flex gap-2 text-sm text-slate-200">
                          <span className="text-amber-400 flex-shrink-0">✓</span>
                          <span>Common mistakes that cause rejections</span>
                        </div>
                        <div className="flex gap-2 text-sm text-slate-200">
                          <span className="text-amber-400 flex-shrink-0">✓</span>
                          <span>Step-by-step visa pathway guide</span>
                        </div>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border-2 border-slate-700 focus:border-amber-400 outline-none text-white placeholder-slate-500 transition-colors"
                            aria-label="Email address"
                          />
                        </div>

                        {submitMessage && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-sm text-center ${
                              submitMessage.includes('Thanks')
                                ? 'text-green-400'
                                : 'text-amber-400'
                            }`}
                          >
                            {submitMessage}
                          </motion.p>
                        )}

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={isSubmitting || !email}
                          type="submit"
                          className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50 uppercase tracking-widest text-sm"
                        >
                          {isSubmitting ? 'Sending...' : 'Download Free Guide →'}
                        </motion.button>
                      </form>

                      {/* Trust Badge */}
                      <p className="text-xs text-slate-400 text-center">
                        🔒 We respect your privacy. Unsubscribe anytime.
                      </p>

                      {/* Close Link */}
                      <motion.button
                        whileHover={{ textDecoration: 'underline' }}
                        onClick={() => setIsOpen(false)}
                        className="w-full text-slate-400 hover:text-slate-300 text-sm py-2 transition-colors"
                      >
                        No thanks, I'm all set →
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center space-y-6 py-8"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl"
                      >
                        ✅
                      </motion.div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white">
                          Email Confirmed!
                        </h3>
                        <p className="text-slate-300">
                          Your free immigration guide is on its way. Check your inbox!
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
