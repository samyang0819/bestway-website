'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { caseStudies } from '@/lib/caseStudies';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesPage() {
  const locale = useLocale();
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
          Success Stories
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Real clients achieving their immigration dreams. See how we've helped professionals, families,
          and entrepreneurs navigate complex visa processes across the globe.
        </p>
      </motion.div>

      {/* Case Studies Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="group relative"
            >
              <Link href={`/${locale}/case-studies/${study.slug}`}>
                <div className="relative p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 h-full overflow-hidden cursor-pointer">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-cyan-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:via-cyan-500/10 group-hover:to-amber-500/10 transition-all duration-300" />

                  <div className="relative z-10">
                    {/* Category badge */}
                    <div className="inline-block mb-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                        {study.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {study.title}
                    </h3>

                    {/* Client info */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-amber-400">
                          {study.clientName}
                        </p>
                        <p className="text-sm text-slate-400">
                          {study.clientRole} • {study.clientCountry}
                        </p>
                      </div>
                    </div>

                    {/* Challenge summary */}
                    <p className="text-slate-300 mb-6 line-clamp-3">
                      {study.challenge}
                    </p>

                    {/* Key metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-slate-700">
                      {study.successMetrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx}>
                          <p className="text-xs text-slate-400">{metric.label}</p>
                          <p className="text-lg font-bold text-cyan-400">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all duration-300">
                      <span className="font-semibold">Read Full Story</span>
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

      {/* Stats section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">{caseStudies.length}+</p>
            <p className="text-slate-400 text-sm mt-2">Successful Cases</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-cyan-400">95%</p>
            <p className="text-slate-400 text-sm mt-2">Approval Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">20+</p>
            <p className="text-slate-400 text-sm mt-2">Countries</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-cyan-400">4.9/5</p>
            <p className="text-slate-400 text-sm mt-2">Client Rating</p>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your immigration goals and create a personalized roadmap to your new home.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
          >
            Schedule Your Consultation →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
