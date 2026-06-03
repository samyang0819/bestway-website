'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Briefcase, Heart, Globe } from 'lucide-react'

export default function AustraliaImmigrationPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const gsmVisas = [
    {
      visa: 'Subclass 189',
      title: 'Skilled Independent Visa',
      description: 'For skilled workers who can sponsor themselves',
      color: 'from-blue-500/10 to-blue-400/10'
    },
    {
      visa: 'Subclass 190',
      title: 'Skilled Nominated Visa',
      description: 'For skilled workers nominated by a state or territory',
      color: 'from-green-500/10 to-green-400/10'
    },
    {
      visa: 'Subclass 491',
      title: 'Skilled Work Regional Visa',
      description: 'For skilled workers willing to live and work in regional Australia',
      color: 'from-orange-500/10 to-orange-400/10'
    }
  ]

  const partnerVisaSubclasses = [
    {
      code: 'Subclass 820/801',
      name: 'Onshore Partner Visa',
      stage1: 'Subclass 820 - Temporary Partner Visa',
      stage2: 'Subclass 801 - Permanent Partner Visa (~2 years)',
      type: 'Inside Australia'
    },
    {
      code: 'Subclass 309/100',
      name: 'Offshore Partner Visa',
      stage1: 'Subclass 309 - Temporary Partner Visa',
      stage2: 'Subclass 100 - Permanent Partner Visa (~2 years)',
      type: 'Outside Australia'
    },
    {
      code: 'Subclass 300',
      name: 'Prospective Marriage Visa',
      description: 'For engaged couples planning to marry in Australia',
      type: 'Specialized'
    }
  ]

  const genuineRelationshipAreas = [
    {
      title: 'Financial Aspects',
      items: ['Joint bank accounts', 'Shared expenses', 'Shared assets', 'Financial support']
    },
    {
      title: 'Nature of Household',
      items: ['Living arrangements', 'Household responsibilities', 'Shared domestic duties', 'Cohabitation evidence']
    },
    {
      title: 'Social Aspects',
      items: ['Relationship recognition by family and friends', 'Social activities together', 'Travel history', 'Photographs']
    },
    {
      title: 'Nature of Commitment',
      items: ['Long-term future plans', 'Emotional support', 'Commitment statements', 'Communication history']
    }
  ]

  const refusalReasons = [
    'Insufficient relationship evidence',
    'Inconsistent information',
    'Short relationship duration',
    'Lack of cohabitation evidence',
    'Sponsor limitations',
    'Health or character issues',
    'Concerns about relationship genuineness'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white" suppressHydrationWarning role="main">
      {/* Hero Section */}
      <section className="py-20 px-6 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-orange-700 text-sm font-bold mb-6">
              🦘 Australia Immigration Services
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Australia Immigration Pathways
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore Australia's skilled migration programs, employer sponsorship, partner visas, and permanent residency pathways with expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* General Skilled Migration */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">General Skilled Migration (GSM)</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Australia's skilled migration programme targets qualified workers whose occupations are in demand.
            </p>
          </motion.div>

          <div className="mb-12">
            <motion.div
              {...fadeInUp}
              className="p-8 rounded-xl bg-slate-800 border border-slate-700 mb-8"
            >
              <h3 className="text-2xl font-bold mb-6">Points are awarded for:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'Age', items: ['Points vary by age bracket'] },
                  { label: 'English Ability', items: ['IELTS, TOEFL or equivalent'] },
                  { label: 'Work Experience', items: ['Australian & international'] },
                  { label: 'Qualifications', items: ['Educational credentials'] },
                  { label: 'Australian Study', items: ['Study completed in Australia'] },
                  { label: 'State Nomination', items: ['Regional sponsorship bonus'] }
                ].map((category, i) => (
                  <motion.div
                    key={i}
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.05 * i }}
                    className="p-6 bg-slate-700 rounded-lg border border-slate-600"
                  >
                    <h4 className="font-bold mb-3 text-amber-400">{category.label}</h4>
                    <ul className="space-y-1 text-sm">
                      {category.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {gsmVisas.map((visa, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: 0.1 * i }}
                  className={`p-8 rounded-xl bg-gradient-to-br ${visa.color} border border-slate-600`}
                >
                  <div className="text-2xl font-black text-amber-400 mb-3">{visa.visa}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{visa.title}</h3>
                  <p className="text-slate-200">{visa.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employer Sponsored Migration */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-3">
              <Briefcase className="w-12 h-12 text-blue-600" />
              Employer-Sponsored Migration
            </h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="p-8 rounded-2xl border-2 border-blue-200 bg-blue-50 mb-12"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Subclass 482 — Skills in Demand Visa (SID)</h3>
            <p className="text-slate-700 mb-6">
              The Skills in Demand (SID) visa allows Australian employers to sponsor overseas skilled workers. Many applicants later transition to permanent residence through the Subclass 186 Employer Nomination Scheme (ENS).
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {['Specialist Skills Stream', 'Core Skills Stream', 'Labour Agreement Stream'].map((stream, i) => (
                <div key={i} className="p-4 bg-white rounded-lg border border-blue-200">
                  <p className="font-bold text-slate-900">{stream}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="p-8 rounded-2xl border-2 border-green-200 bg-green-50"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Subclass 186 — Employer Nomination Scheme (ENS)</h3>
            <p className="text-slate-700">Permanent residency pathway for skilled workers sponsored by Australian employers</p>
          </motion.div>
        </div>
      </section>

      {/* Partner Visa */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-3">
              <Heart className="w-12 h-12 text-red-600" />
              Australia Partner Visa
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Australia's Partner Visa programme allows the spouse or de facto partner of an Australian citizen, permanent resident, or eligible New Zealand citizen to obtain permanent residence.
            </p>
          </motion.div>

          <div className="space-y-8">
            {partnerVisaSubclasses.map((visa, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.1 * i }}
                className="p-8 rounded-2xl border-2 border-red-200 bg-red-50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-red-200 rounded-full text-red-900 font-bold text-sm mb-3">
                      {visa.code}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{visa.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                      <span className="inline-block px-3 py-1 bg-slate-200 rounded-full">{visa.type}</span>
                    </div>
                  </div>
                </div>

                {visa.stage1 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-lg border border-red-200">
                      <h4 className="font-bold text-slate-900 mb-2">Stage 1</h4>
                      <p className="text-slate-700">{visa.stage1}</p>
                      {visa.code === 'Subclass 820/801' && (
                        <ul className="mt-4 space-y-2 text-sm text-slate-700">
                          <li>✓ Live in Australia</li>
                          <li>✓ Work full-time</li>
                          <li>✓ Study in Australia</li>
                          <li>✓ Access Medicare</li>
                        </ul>
                      )}
                    </div>
                    <div className="p-6 bg-white rounded-lg border border-red-200">
                      <h4 className="font-bold text-slate-900 mb-2">Stage 2</h4>
                      <p className="text-slate-700">{visa.stage2}</p>
                      {visa.code === 'Subclass 820/801' && (
                        <p className="mt-4 text-sm text-slate-700">
                          Approximately 2 years after initial application lodgement, applicants become eligible for permanent residence assessment.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {visa.description && (
                  <div className="p-6 bg-white rounded-lg border border-red-200">
                    <p className="text-slate-700">{visa.description}</p>
                    {visa.code === 'Subclass 300' && (
                      <div className="mt-4 space-y-2 text-sm text-slate-700">
                        <p><strong>Key Requirements:</strong></p>
                        <ul className="space-y-1">
                          <li>✓ Sponsor is Australian citizen, permanent resident, or eligible NZ citizen</li>
                          <li>✓ Couple must have met in person</li>
                          <li>✓ Both parties at least 18 years old</li>
                          <li>✓ Marriage must occur within visa validity period</li>
                          <li>✓ Relationship must be genuine</li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* De Facto & Genuine Relationship */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">De Facto & Genuine Relationship Assessment</h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="p-8 rounded-2xl border-2 border-purple-200 bg-purple-50 mb-12"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Married vs De Facto Relationship</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Married Relationship</h4>
                <p className="text-slate-700">Legally married couples are recognized immediately.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">De Facto Relationship</h4>
                <p className="text-slate-700 mb-4">Applicants generally must demonstrate:</p>
                <ul className="space-y-2 text-slate-700">
                  <li>✓ At least 12 months of living together</li>
                  <li>✓ Genuine shared relationship</li>
                  <li>✓ Mutual commitment</li>
                  <li className="text-sm">Certain exceptions may apply, including registered relationships or compelling circumstances</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {genuineRelationshipAreas.map((area, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.05 * i }}
                className="p-6 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-4">{area.title}</h4>
                <ul className="space-y-2">
                  {area.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="mt-12 p-8 rounded-2xl border-2 border-blue-200 bg-blue-50"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Work Rights & Bridging Visa</h3>
            <p className="text-slate-700 mb-6">
              Many onshore applicants receive a Bridging Visa allowing them to remain lawfully in Australia during processing. Partner visa applicants generally receive:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {['Full work rights', 'Medicare eligibility', 'Ability to study'].map((right, i) => (
                <div key={i} className="p-4 bg-white rounded-lg border border-blue-200">
                  <p className="font-bold text-slate-900">✓ {right}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            className="mt-8 p-8 rounded-2xl border-2 border-amber-200 bg-amber-50"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Waiver of Two-Year Waiting Period</h3>
            <p className="text-slate-700 mb-6">
              In some cases, permanent residence may be granted immediately. This may apply when:
            </p>
            <ul className="space-y-2">
              {['Relationship exceeds 3 years', 'Couple has dependent children together', 'Certain compelling circumstances apply'].map((reason, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-amber-600 font-bold mt-1">✓</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Common Refusal Reasons */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Common Reasons for Partner Visa Refusal</h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="p-8 rounded-2xl border-2 border-red-200 bg-red-50"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {refusalReasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl mt-1">⚠</span>
                  <p className="text-slate-700">{reason}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 p-6 bg-white rounded-lg border border-red-300 text-slate-700">
              <strong>Professional assistance matters:</strong> Careful planning and document preparation are critical. A properly prepared application can significantly improve approval prospects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parent Visa */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Australia Parent Visa</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Australia offers contributory parent visa programmes for eligible parents of Australian citizens or permanent residents.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="p-8 rounded-2xl border-2 border-green-200 bg-green-50"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-4">General Requirements</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>✓ Balance of family test</li>
                  <li>✓ Assurance of Support</li>
                  <li>✓ Health and character checks</li>
                  <li>✓ Financial requirements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Important Note</h4>
                <p className="text-slate-700">
                  Processing times can be lengthy due to annual caps. Early planning and professional assistance are recommended to navigate this complex process.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore Your Australia Immigration Options?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our registered migration agents specializing in Australia immigration are ready to assess your eligibility and create a personalized pathway to permanent residency.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
