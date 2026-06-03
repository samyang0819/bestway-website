'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { getCaseStudyBySlug } from '@/lib/caseStudies';
import { ArrowLeft, CheckCircle, Clock, Target, Users } from 'lucide-react';

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = useLocale();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <Link href={`/${locale}/case-studies`} className="text-amber-400 hover:text-amber-300">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

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
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
      >
        <Link
          href={`/${locale}/case-studies`}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Case Studies
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div className="inline-block mb-4">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-white">
            {study.category}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          {study.title}
        </h1>

        {/* Client info card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Client</p>
            <p className="text-white font-semibold">{study.clientName}</p>
            <p className="text-slate-400 text-sm mt-2">{study.clientRole}</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Location</p>
            <p className="text-white font-semibold">{study.clientCountry}</p>
            <p className="text-slate-400 text-sm mt-2">Country of Origin</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Timeline</p>
            <p className="text-white font-semibold">{study.timelineMonths} Months</p>
            <p className="text-slate-400 text-sm mt-2">Total Duration</p>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* The Challenge */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-amber-400" size={24} />
              <h2 className="text-2xl font-bold text-white">The Challenge</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
          </motion.div>

          {/* The Solution */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Our Solution</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">{study.solution}</p>
          </motion.div>

          {/* Process Steps */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Clock className="text-amber-400" size={24} />
              The Process
            </h2>
            <div className="space-y-4">
              {study.processSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 hover:border-amber-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center font-bold text-white">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Success Metrics */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-white mb-6">Success Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.successMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 text-center"
                >
                  <p className="text-slate-400 text-sm mb-2">{metric.label}</p>
                  <p className="text-2xl font-bold text-amber-400">{metric.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The Outcome */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-gradient-to-r from-amber-500/50 to-cyan-500/50 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-white">The Outcome</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">{study.outcome}</p>
          </motion.div>

          {/* Client Quote */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-amber-900/20 to-slate-900 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-amber-400/20 text-6xl font-serif">"</div>
            <p className="text-lg text-slate-100 italic leading-relaxed relative z-10 mb-4">
              {study.quote}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
              <div>
                <p className="font-semibold text-white">{study.clientName}</p>
                <p className="text-sm text-slate-400">{study.clientRole}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Every journey is unique. Let's create a personalized immigration plan tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
            >
              Schedule Free Consultation →
            </Link>
            <Link
              href={`/${locale}/case-studies`}
              className="px-8 py-3 rounded-lg font-semibold border border-slate-600 text-white hover:border-amber-400 transition-all duration-300"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
