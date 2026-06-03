'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const sections = [
    {
      title: 'Privacy Commitment',
      content: 'Bestway Consulting is committed to protecting your personal information. We comply with Privacy Act 1988 (Australia) and PIPEDA (Canada). Information collected through consultations and website enquiries is used solely for immigration assessment and client communication purposes. We do not sell or disclose personal information without consent.'
    },
    {
      title: 'Information We Collect',
      content: 'We collect personal information including your name, email address, phone number, and immigration-related details provided during consultations. This information is necessary to assess your eligibility, provide personalized guidance, and maintain professional client relationships.'
    },
    {
      title: 'How We Use Your Information',
      content: 'Your information is used exclusively for: Immigration assessment and consultation, Case management and application preparation, Government correspondence and submissions, Communication regarding your immigration process, and Compliance with legal and regulatory requirements.'
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse. All client files are securely stored and access is restricted to authorized personnel only.'
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, correct, or request deletion of your personal information held by us. To exercise these rights, please contact us directly. We will respond to requests within the timeframes specified by applicable privacy laws.'
    },
    {
      title: 'Cookies and Web Technologies',
      content: 'Our website uses cookies and similar technologies to enhance user experience and gather analytics. These cookies do not personally identify you and are used solely for improving our website functionality and services.'
    },
    {
      title: 'Third-Party Sharing',
      content: 'We do not share your personal information with third parties without your explicit consent, except as required by law or when necessary for immigration submissions to government authorities (IRCC Canada, DOHA Australia).'
    },
    {
      title: 'Changes to This Policy',
      content: 'Bestway Consulting may update this privacy policy periodically to reflect changes in our practices or applicable laws. We encourage you to review this policy regularly. Significant changes will be communicated to existing clients.'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="py-20 px-6 md:py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-lg text-slate-600">
              Effective Date: May 2026
            </p>
            <p className="text-slate-600 mt-4">
              At Bestway Consulting, your privacy and data protection are paramount. This policy explains how we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.05 * index }}
              className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {index + 1}. {section.title}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Privacy Questions?</h2>
            <p className="text-lg text-blue-50 mb-8">
              If you have questions about our privacy practices or how we handle your personal information, please contact us directly.
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Vancouver Office:</strong><br />
                Email: <a href="mailto:info@bestwayconsulting.com" className="underline hover:opacity-90">info@bestwayconsulting.com</a>
              </p>
              <p className="text-lg">
                <strong>Sydney Office:</strong><br />
                Email: <a href="mailto:info@bestwayconsulting.com" className="underline hover:opacity-90">info@bestwayconsulting.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
