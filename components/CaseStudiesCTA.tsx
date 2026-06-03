'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function CaseStudiesCTA() {
  const caseStudies = [
    {
      icon: '🇨🇦',
      title: 'Tech Professional',
      description: 'Express Entry to Canada in 4.5 months',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Sponsorship',
      description: 'Parents reunited in Australia - 18 months',
    },
    {
      icon: '🎓',
      title: 'Student to PR',
      description: 'UK Skilled Worker visa after graduation',
    },
  ];

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-500/20 to-cyan-500/20 text-amber-300 border border-amber-500/30">
              Real Success Stories
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            See How We've Changed Lives
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From tech professionals to families to entrepreneurs—discover how BestWay helped real clients
            achieve their immigration dreams across 5+ countries.
          </p>
        </div>

        {/* Case Study Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 hover:border-amber-500/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-4xl mb-4">{study.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {study.title}
              </h3>
              <p className="text-slate-400 text-sm">{study.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-8 rounded-xl border border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">5+</p>
            <p className="text-slate-400 text-sm mt-1">Success Stories</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-cyan-400">95%</p>
            <p className="text-slate-400 text-sm mt-1">Approval Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">20+</p>
            <p className="text-slate-400 text-sm mt-1">Countries</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-cyan-400">avg 6mo</p>
            <p className="text-slate-400 text-sm mt-1">Processing</p>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          <div className="flex gap-3">
            <CheckCircle size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Transparent Timelines</h3>
              <p className="text-slate-400 text-sm">Know exactly how long your journey will take</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle size={24} className="text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Step-by-Step Guidance</h3>
              <p className="text-slate-400 text-sm">Learn from real client experiences</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Proven Strategies</h3>
              <p className="text-slate-400 text-sm">See what worked for clients like you</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle size={24} className="text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Full Success Details</h3>
              <p className="text-slate-400 text-sm">Metrics, timelines, and actual outcomes</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 group"
          >
            Explore All Case Studies
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
