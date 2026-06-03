'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Counter {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  color: string;
}

const counters: Counter[] = [
  {
    value: 5000,
    suffix: '+',
    label: 'Cases Successfully Handled',
    icon: '✅',
    color: 'from-green-500 to-emerald-500'
  },
  {
    value: 95,
    suffix: '%',
    label: 'Success Rate',
    icon: '📈',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    value: 20,
    suffix: '+',
    label: 'Years of Experience',
    icon: '🏆',
    color: 'from-amber-500 to-orange-500'
  },
  {
    value: 4.9,
    suffix: '/5',
    label: 'Average Client Rating',
    icon: '⭐',
    color: 'from-yellow-500 to-amber-500'
  }
];

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  duration?: number;
  isVisible: boolean;
}

function AnimatedCounter({ value, suffix, duration = 2000, isVisible }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isVisible || !isMounted) {
      setDisplayValue(0);
      return;
    }

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      if (suffix === '/5') {
        setDisplayValue(parseFloat((progress * value).toFixed(1)));
      } else {
        setDisplayValue(Math.floor(progress * value));
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(timer);
  }, [isVisible, value, suffix, duration, isMounted]);

  if (!isMounted) return <div className="text-6xl md:text-7xl font-black">0{suffix}</div>;

  return (
    <div className="text-6xl md:text-7xl font-black">
      {displayValue}{suffix}
    </div>
  );
}

export function SocialProofCounters() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Our Impact by Numbers
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Proven results from a decade of dedicated immigration expertise
          </p>
        </motion.div>

        {/* Counters Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {counters.map((counter, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

              {/* Card */}
              <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 border-2 border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-sm text-center">
                {/* Icon */}
                <div className="text-5xl md:text-6xl mb-4 animate-bounce" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {counter.icon}
                </div>

                {/* Counter */}
                <motion.div
                  className={`bg-gradient-to-r ${counter.color} bg-clip-text text-transparent mb-3 h-20 flex items-center justify-center`}
                >
                  <AnimatedCounter
                    value={counter.value}
                    suffix={counter.suffix}
                    duration={2500}
                    isVisible={isVisible}
                  />
                </motion.div>

                {/* Label */}
                <p className="text-slate-300 font-semibold text-lg leading-tight">
                  {counter.label}
                </p>

                {/* Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 to-cyan-600/30 rounded-3xl blur-2xl opacity-20"></div>

          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-12 md:p-16 border-2 border-amber-400/30 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Stat 1 */}
              <motion.div
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                  100%
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Client Satisfaction</h3>
                <p className="text-slate-400">
                  Dedicated to delivering exceptional results for every client case
                </p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  24/7
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Support Available</h3>
                <p className="text-slate-400">
                  Our team is always ready to answer your questions and concerns
                </p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div className="text-5xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
                  50+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Countries Served</h3>
                <p className="text-slate-400">
                  Expert knowledge across multiple immigration destinations
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Thousands of Success Stories
          </h3>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50 text-lg uppercase tracking-widest"
          >
            Start Your Journey Now →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
