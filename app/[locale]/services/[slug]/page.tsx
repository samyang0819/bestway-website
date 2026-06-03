'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug } from '@/lib/services';
import { ArrowLeft, CheckCircle, Clock, DollarSign, Zap } from 'lucide-react';

// ISR: Revalidate every 7 days (604800 seconds)
export const revalidate = 604800;

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link href="#services" className="text-amber-400 hover:text-amber-300">
            ← Back to Services
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
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
      >
        <Link
          href="#services"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Services
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div className="text-6xl mb-6">{service.icon}</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          {service.title}
        </h1>
        <p className="text-xl text-amber-400 font-semibold mb-6">{service.subtitle}</p>
        <p className="text-lg text-slate-300 leading-relaxed">{service.description}</p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <p className="text-slate-400 text-sm mb-2">Timeline</p>
            <p className="text-white font-semibold text-lg">{service.typicalTimeline}</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <p className="text-slate-400 text-sm mb-2">Success Rate</p>
            <p className="text-cyan-400 font-semibold text-lg">{service.successRate}</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <p className="text-slate-400 text-sm mb-2">Estimated Cost</p>
            <p className="text-amber-400 font-semibold text-lg">
              ${Math.min(...service.costBreakdown.map(c => parseInt(c.range.split('-')[0])))} - ${Math.max(...service.costBreakdown.map(c => parseInt(c.range.split('-')[1].replace(/[^0-9]/g, ''))))}+
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <p className="text-slate-400 text-sm mb-2">Difficulty</p>
            <p className="text-slate-300 font-semibold text-lg">Medium-High</p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Key Benefits */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-amber-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Key Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {service.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Eligibility Requirements */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
            <h2 className="text-2xl font-bold text-white mb-6">Eligibility Requirements</h2>
            <div className="space-y-3">
              {service.eligibilityRequirements.map((req, idx) => (
                <div key={idx} className="flex gap-3 p-3 rounded-lg bg-slate-700/50">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300">{req}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cost Breakdown */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Cost Breakdown</h2>
            </div>
            <div className="space-y-3">
              {service.costBreakdown.map((cost, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-slate-700/50 border border-slate-600">
                  <span className="text-slate-300 font-medium">{cost.item}</span>
                  <span className="text-amber-400 font-bold">{cost.range}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-amber-400" size={24} />
              <h2 className="text-2xl font-bold text-white">The Process</h2>
            </div>
            <div className="space-y-4">
              {service.processSteps.map((step, index) => (
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

          {/* FAQs */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <details key={idx} className="group border border-slate-600 rounded-lg bg-slate-700/30 overflow-hidden hover:border-amber-500/30 transition-all">
                  <summary className="p-4 cursor-pointer font-semibold text-white flex justify-between items-center group-open:text-amber-400">
                    {faq.question}
                    <span className="transition group-open:rotate-180">▶</span>
                  </summary>
                  <p className="p-4 pt-0 text-slate-300 bg-slate-800/50 border-t border-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </motion.div>

          {/* Related Services */}
          {service.relatedServices.length > 0 && (
            <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
              <h2 className="text-2xl font-bold text-white mb-6">Related Services</h2>
              <div className="flex flex-wrap gap-3">
                {service.relatedServices.map((relatedSlug, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${relatedSlug}`}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 text-slate-300 hover:text-amber-400 border border-slate-600 hover:border-amber-400 transition-all"
                  >
                    ← {relatedSlug.replace(/-/g, ' ').charAt(0).toUpperCase() + relatedSlug.replace(/-/g, ' ').slice(1)}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our {service.title} experts are ready to assess your eligibility and create a personalized immigration plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
            >
              Schedule Free Consultation →
            </Link>
            <Link
              href="#services"
              className="px-8 py-3 rounded-lg font-semibold border border-slate-600 text-white hover:border-amber-400 transition-all duration-300"
            >
              View Other Services
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
