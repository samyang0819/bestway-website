'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/lib/services';
import { ArrowRight } from 'lucide-react';

// ISR: Revalidate every 7 days (604800 seconds)
export const revalidate = 604800;

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-32 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Our Immigration Services
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Comprehensive immigration solutions tailored to your unique situation. From study visas to permanent residency,
          we guide you at every step of your immigration journey.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
            >
              <Link href={`/services/${service.slug}`}>
                <div className="relative p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 h-full overflow-hidden cursor-pointer">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-cyan-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:via-cyan-500/10 group-hover:to-amber-500/10 transition-all duration-300" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-6xl mb-4">{service.icon}</div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-amber-400 font-semibold text-sm mb-3">
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-slate-300 mb-6 line-clamp-3 text-sm">
                      {service.description}
                    </p>

                    {/* Key highlights */}
                    <div className="space-y-2 mb-6 pb-6 border-b border-slate-700">
                      <p className="text-xs text-slate-400 font-semibold">KEY FEATURES</p>
                      <ul className="text-xs text-slate-400 space-y-1">
                        {service.keyBenefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-cyan-400">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div>
                        <p className="text-xs text-slate-400">Timeline</p>
                        <p className="text-sm font-bold text-cyan-400">
                          {service.typicalTimeline.split('(')[0].trim()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Success Rate</p>
                        <p className="text-sm font-bold text-amber-400">{service.successRate}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all duration-300">
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-500/30 transition-all duration-300 pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Our Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose BestWay's Services?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold text-white mb-2">Expert Team</h3>
              <p className="text-slate-400 text-sm">RCIC certified consultants with 20+ years combined experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-white mb-2">Personalized</h3>
              <p className="text-slate-400 text-sm">Customized strategy for your unique immigration goals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-2">Fast Processing</h3>
              <p className="text-slate-400 text-sm">Optimized timelines to get you to your destination quickly</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-white mb-2">Global Reach</h3>
              <p className="text-slate-400 text-sm">Expertise in 20+ countries and all major immigration streams</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center"
      >
        <div className="p-8 rounded-2xl border border-gradient-to-r from-amber-500 to-cyan-500 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <h2 className="text-3xl font-bold text-white mb-3">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Schedule a free consultation with one of our immigration experts. We'll assess your situation and recommend the best pathway for you.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
          >
            Book Free Consultation →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
