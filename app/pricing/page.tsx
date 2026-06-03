'use client';

import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: string;
  highlighted?: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter Consultation',
    price: 'Free',
    description: 'Perfect for initial assessment and guidance',
    features: [
      '30-minute initial consultation',
      'Personal assessment of your case',
      'Visa eligibility evaluation',
      'General guidance on next steps',
      'Immigration pathways overview',
      'No commitment required'
    ],
    icon: '🌱',
    cta: 'Book Free Consultation'
  },
  {
    name: 'Professional Package',
    price: '$1,299',
    description: 'Comprehensive support for your immigration journey',
    features: [
      'Complete case evaluation & strategy',
      'Document preparation assistance',
      'Application completion & review',
      'Government communication handling',
      'Monthly progress updates',
      'Email & phone support',
      'Application submission',
      'Up to 3 visa applications included'
    ],
    icon: '🚀',
    highlighted: true,
    cta: 'Get Started Now'
  },
  {
    name: 'Premium Plus',
    price: '$2,499',
    description: 'Premium support with guaranteed results',
    features: [
      'Everything in Professional Package',
      'Priority 24/7 support',
      'Unlimited applications',
      'Appeals & refusal handling',
      'Spouse/dependent applications',
      'Post-landing settlement services',
      'Provincial sponsorship applications',
      'Family sponsorship programs',
      'Success guarantee* (money-back)'
    ],
    icon: '👑',
    cta: 'Premium Support'
  }
];

const comparisonFeatures = [
  'Initial Consultation',
  'Case Evaluation',
  'Document Preparation',
  'Application Submission',
  'Government Communication',
  'Appeals Support',
  'Priority Support',
  'Success Guarantee'
];

export default function PricingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-cyan-400/20 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-20 md:pt-32 pb-16 px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-block mb-8"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-400/40 rounded-full text-amber-300 text-sm font-semibold uppercase tracking-widest backdrop-blur-sm">
              💰 Transparent Pricing
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-300 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Choose the package that fits your immigration needs. All packages include expert guidance from certified immigration professionals.
          </p>

          {/* Toggle or info */}
          <div className="flex justify-center gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-3 bg-slate-800/50 border border-amber-400/30 rounded-lg text-amber-300"
            >
              ✨ <span className="font-semibold">100% Satisfaction Guarantee</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: tier.highlighted ? -20 : -8 }}
                className={`group relative h-full ${tier.highlighted ? 'md:scale-105' : ''}`}
              >
                {/* Glow effect for highlighted tier */}
                {tier.highlighted && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full rounded-2xl overflow-hidden border-2 backdrop-blur-md transition-all duration-300 flex flex-col ${
                    tier.highlighted
                      ? 'bg-gradient-to-br from-slate-800 via-amber-900/20 to-slate-900 border-amber-400/60 shadow-2xl'
                      : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-amber-400/30 shadow-xl'
                  }`}
                  style={{
                    boxShadow: tier.highlighted
                      ? '0 25px 50px rgba(251, 191, 36, 0.15)'
                      : 'none'
                  }}
                >
                  {/* Badge for highlighted tier */}
                  {tier.highlighted && (
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-4 left-1/2 -translate-x-1/2 z-20"
                    >
                      <div className="px-4 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-sm rounded-full uppercase tracking-widest">
                        ⭐ Most Popular
                      </div>
                    </motion.div>
                  )}

                  <div className="p-8 md:p-10 flex flex-col h-full">
                    {/* Header */}
                    <div className={`mb-8 ${tier.highlighted ? 'pt-6' : ''}`}>
                      <div className="text-5xl mb-4">{tier.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        {tier.name}
                      </h3>
                      <p className="text-slate-300 text-sm">{tier.description}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="text-5xl md:text-6xl font-black">
                        <span className={tier.highlighted ? 'text-amber-400' : 'text-white'}>
                          {tier.price}
                        </span>
                      </div>
                      {tier.price !== 'Free' && (
                        <p className="text-slate-400 text-sm mt-2">One-time investment • No hidden fees</p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="flex-grow mb-8">
                      <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">
                        What's Included
                      </p>
                      <ul className="space-y-3">
                        {tier.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-3 text-slate-200"
                          >
                            <span className="flex-shrink-0 text-amber-400 text-lg mt-0.5">✓</span>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 px-6 rounded-lg font-bold text-center transition-all duration-300 uppercase tracking-widest text-lg ${
                        tier.highlighted
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 shadow-lg hover:shadow-amber-500/50'
                          : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-amber-400/50'
                      }`}
                    >
                      {tier.cta} →
                    </motion.a>

                    {/* Footer note */}
                    {tier.price === 'Free' && (
                      <p className="text-xs text-slate-400 text-center mt-4">No credit card required</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">
            Detailed Feature Comparison
          </h2>

          <div className="rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-md bg-slate-800/30">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-b border-slate-700/50">
                    <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                    {pricingTiers.map((tier, idx) => (
                      <th
                        key={idx}
                        className={`px-6 py-4 text-center font-bold text-sm uppercase tracking-wider ${
                          tier.highlighted ? 'text-amber-400' : 'text-slate-300'
                        }`}
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-700/30 hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-slate-300 font-medium">{feature}</td>
                      {pricingTiers.map((tier, tierIdx) => {
                        const included =
                          (feature === 'Initial Consultation' && idx === 0) ||
                          (feature === 'Case Evaluation' && idx === 1) ||
                          (feature === 'Document Preparation' && tier.name !== 'Starter Consultation') ||
                          (feature === 'Appeals Support' && tier.name === 'Premium Plus') ||
                          (feature === 'Priority Support' && tier.name === 'Premium Plus') ||
                          (feature === 'Success Guarantee' && tier.name === 'Premium Plus') ||
                          (idx <= 2 && tier.name !== 'Starter Consultation');

                        return (
                          <td
                            key={tierIdx}
                            className="px-6 py-4 text-center"
                          >
                            {included ? (
                              <span className="text-2xl text-amber-400">✓</span>
                            ) : (
                              <span className="text-slate-600">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 py-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Get matched with your perfect immigration solution. Book a free consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50 text-lg uppercase tracking-wider"
            >
              Schedule Free Consultation
            </motion.a>
            <motion.a
              href="/"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-amber-400/50 hover:border-amber-400 text-white font-bold rounded-lg transition-all duration-300 text-lg uppercase tracking-wider hover:bg-amber-500/10"
            >
              Back to Home
            </motion.a>
          </div>
        </motion.div>

        {/* FAQ or Trust Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 py-20 text-center border-t border-slate-700/30"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Why Choose Our Pricing?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Clear & Transparent',
                desc: 'No hidden fees or surprise costs. What you see is what you pay.'
              },
              {
                icon: '✨',
                title: 'Flexible Options',
                desc: 'Choose the package that fits your needs and budget perfectly.'
              },
              {
                icon: '🏆',
                title: 'Proven Success',
                desc: '95% success rate backed by 20+ years of immigration expertise.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-amber-400/30 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
