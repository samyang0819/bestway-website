'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Briefcase, Heart, GraduationCap } from 'lucide-react'

export default function CanadaImmigrationPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const expressEntryStreams = [
    {
      title: 'Federal Skilled Worker Program (FSWP)',
      description: 'Designed for skilled workers with foreign work experience who wish to immigrate permanently to Canada.',
      requirements: [
        'At least one year of continuous skilled work experience',
        'Meet minimum language requirements',
        'Obtain Educational Credential Assessment (ECA)',
        'Meet settlement fund requirements',
        'Score at least 67 points under FSWP selection factors'
      ],
      occupations: ['NOC TEER 0', 'NOC TEER 1', 'NOC TEER 2', 'NOC TEER 3'],
      color: 'from-blue-500/10 to-blue-400/10'
    },
    {
      title: 'Canadian Experience Class (CEC)',
      description: 'One of the most popular immigration pathways for temporary foreign workers and international graduates.',
      requirements: [
        'At least one year of skilled work experience in Canada within the last three years',
        'Work experience obtained with valid work authorisation',
        'Minimum language requirements',
        'Intention to live outside Quebec'
      ],
      highlights: ['Canadian work experience strengthens competitiveness', 'Canadian education improves prospects'],
      color: 'from-green-500/10 to-green-400/10'
    },
    {
      title: 'Federal Skilled Trades Program (FSTP)',
      description: 'For skilled tradespeople with experience in in-demand trades.',
      requirements: [
        'Valid job offer or Certificate of Qualification in a skilled trade',
        'Minimum language requirements (CLB 5)',
        'At least 2 years of work experience in past 5 years'
      ],
      color: 'from-orange-500/10 to-orange-400/10'
    }
  ]

  const pnpPrograms = [
    { name: 'British Columbia PNP (BC PNP)', province: 'British Columbia' },
    { name: 'Ontario Immigrant Nominee Program (OINP)', province: 'Ontario' },
    { name: 'Alberta Advantage Immigration Program (AAIP)', province: 'Alberta' },
    { name: 'Saskatchewan Immigrant Nominee Program (SINP)', province: 'Saskatchewan' },
    { name: 'Manitoba Provincial Nominee Program (MPNP)', province: 'Manitoba' },
    { name: 'Atlantic Immigration Program (AIP)', province: 'Atlantic Region' }
  ]

  const citizenshipRequirements = [
    'Be physically present in Canada for at least 1,095 days within the last 5 years',
    'File Canadian taxes if required',
    'Demonstrate English or French ability',
    'Pass the citizenship knowledge test if applicable'
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="py-20 px-6 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-bold mb-6">
              🍁 Canada Immigration Services
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Canada Immigration Pathways
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Navigate Canada's complex immigration system with expert guidance on Express Entry, Provincial Nominee Programs, family sponsorship, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Express Entry System */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Express Entry System</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Canada's primary electronic system for managing federal economic immigration applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="p-8 rounded-xl bg-slate-800 border border-slate-700"
            >
              <h3 className="text-2xl font-bold mb-4">Comprehensive Ranking System (CRS)</h3>
              <p className="text-slate-300 mb-6">CRS points are awarded based on:</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Age</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Education</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Language proficiency</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Skilled work experience</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Canadian work experience</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Spouse/partner factors</li>
              </ul>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="p-8 rounded-xl bg-blue-900/20 border border-blue-600/30"
            >
              <h3 className="text-2xl font-bold mb-4">Additional CRS Points</h3>
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Provincial nomination (+600 points)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Valid job offer</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Canadian education</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> French language proficiency</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Sibling in Canada</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            className="p-8 rounded-xl bg-slate-800 border border-amber-500/30"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-amber-400">📋</span> Priority Selection Categories
            </h3>
            <p className="text-slate-300 mb-6">Canada conducts category-based selection draws targeting occupations facing labour shortages:</p>
            <div className="grid md:grid-cols-3 gap-4">
              {['Healthcare occupations', 'STEM occupations', 'Skilled trades', 'Transport occupations', 'Agriculture & agri-food', 'French-language proficiency'].map((category, i) => (
                <div key={i} className="p-4 bg-slate-700 rounded-lg">
                  <p className="text-slate-200">{category}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Express Entry Streams */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            Express Entry Streams
          </motion.h2>

          <div className="space-y-8">
            {expressEntryStreams.map((stream, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.1 * index }}
                className={`p-8 rounded-2xl border border-slate-200 bg-gradient-to-br ${stream.color}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <Briefcase className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{stream.title}</h3>
                    <p className="text-slate-700">{stream.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4">Key Requirements</h4>
                    <ul className="space-y-2">
                      {stream.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {stream.occupations && (
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4">Eligible Occupations</h4>
                      <div className="space-y-2">
                        {stream.occupations.map((occ, i) => (
                          <div key={i} className="p-3 bg-white rounded-lg border border-slate-200">
                            {occ}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {stream.highlights && (
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4">Key Highlights</h4>
                      <ul className="space-y-2">
                        {stream.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700">
                            <span className="text-blue-600 font-bold mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Provincial Nominee Programs */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Provincial Nominee Programs (PNP)</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Most Canadian provinces operate Provincial Nominee Programs targeting occupations and skills needed in regional labour markets. Provincial nomination provides an additional 600 CRS points.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pnpPrograms.map((program, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.05 * i }}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-all"
              >
                <p className="text-sm text-slate-500 mb-2">Province</p>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{program.name}</h3>
                <p className="text-slate-600">{program.province}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spousal Sponsorship */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-3">
              <Heart className="w-12 h-12 text-red-600" />
              Canada Spousal & Partner Sponsorship
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div {...fadeInUp} className="p-8 rounded-2xl border-2 border-red-200 bg-red-50">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Who Can Be Sponsored?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Spouse</h4>
                  <p className="text-slate-700">Legally married husband or wife.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Common-Law Partner</h4>
                  <p className="text-slate-700">A partner with whom you have lived together continuously for at least 12 months in a marriage-like relationship.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Conjugal Partner</h4>
                  <p className="text-slate-700">A partner with whom you have a genuine long-term relationship but are unable to marry or live together due to exceptional circumstances.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="p-8 rounded-2xl border-2 border-blue-200 bg-blue-50"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Inland vs Outland Sponsorship</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Inland Sponsorship</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>✓ Applicant living in Canada with valid temporary status</li>
                    <li>✓ May qualify for Open Work Permit</li>
                    <li>✓ Couple lives together during processing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Outland Sponsorship</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>✓ Applicant resides outside Canada</li>
                    <li>✓ Applicant may visit Canada if eligible</li>
                    <li>✓ Appeals available in refusal situations</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="p-8 rounded-2xl border-2 border-amber-200 bg-amber-50"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Common Reasons for Refusal</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Insufficient relationship evidence',
                'Inconsistent information',
                'Short relationship history',
                'Prior immigration refusals',
                'Sponsor ineligibility',
                'Misrepresentation concerns'
              ].map((reason, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">⚠</span>
                  <span className="text-slate-700">{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Work Permits */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-3">
              <Briefcase className="w-12 h-12 text-green-600" />
              Work Permits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeInUp}
              className="p-8 rounded-2xl border border-green-200 bg-green-50"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">LMIA-Based Work Permits</h3>
              <p className="text-slate-700 mb-6">Many employers require a Labour Market Impact Assessment (LMIA) before hiring foreign workers.</p>
              <div className="space-y-2">
                {['High-Wage Stream', 'Low-Wage Stream', 'Global Talent Stream', 'Agricultural Stream', 'Caregiver Programs'].map((stream, i) => (
                  <div key={i} className="p-3 bg-white rounded-lg border border-green-200">
                    {stream}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="p-8 rounded-2xl border border-blue-200 bg-blue-50"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">LMIA-Exempt Work Permits</h3>
              <p className="text-slate-700 mb-6">Certain work permits are exempt from LMIA requirements.</p>
              <div className="space-y-2">
                {['Intra-Company Transfer', 'CUSMA Professionals', 'Spousal Open Work Permit', 'Post-Graduation Work Permit (PGWP)'].map((permit, i) => (
                  <div key={i} className="p-3 bg-white rounded-lg border border-blue-200">
                    {permit}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Citizenship */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Canadian Citizenship</h2>
            <p className="text-lg text-slate-300">Permanent residents may apply for Canadian citizenship after meeting eligibility requirements.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              {...fadeInUp}
              className="p-8 rounded-2xl border border-slate-700 bg-slate-800"
            >
              <h3 className="text-2xl font-bold mb-6">General Requirements</h3>
              <ul className="space-y-3">
                {citizenshipRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="p-8 rounded-2xl border border-amber-600/50 bg-amber-900/20"
            >
              <h3 className="text-2xl font-bold mb-6">Citizenship Benefits</h3>
              <ul className="space-y-3">
                {['Voting rights', 'Canadian passport', 'Global mobility advantages', 'Access to social and economic benefits'].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold text-lg">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to Start Your Canada Immigration Journey?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Our certified RCIC consultants are here to assess your eligibility and create a personalized immigration strategy.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
