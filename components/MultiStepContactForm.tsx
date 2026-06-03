'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle, Phone, Mail, MapPin, MessageSquare } from 'lucide-react'
import EnhancedInput from './EnhancedInput'

interface FormData {
  // Step 1: Contact Info
  name: string
  email: string
  phone: string
  country: string
  
  // Step 2: Service Selection
  serviceType: string
  
  // Step 3: Additional Details
  currentStatus: string
  timeline: string
  budget: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

const SERVICES = [
  { id: 'express-entry', label: 'Express Entry / Canada' },
  { id: 'australia', label: 'Australia Skilled Migration' },
  { id: 'study-visa', label: 'Study Visa Programs' },
  { id: 'work-permit', label: 'Work Permit / Sponsorship' },
  { id: 'family', label: 'Family Sponsorship' },
  { id: 'other', label: 'Other / Not Sure' },
]

const CURRENT_STATUS = [
  { id: 'student', label: 'Current International Student' },
  { id: 'worker', label: 'Currently Working' },
  { id: 'unemployed', label: 'Looking for Work' },
  { id: 'planning', label: 'Planning to Immigrate' },
  { id: 'other-status', label: 'Other' },
]

const TIMELINE = [
  { id: '3-months', label: 'Within 3 Months' },
  { id: '6-months', label: 'Within 6 Months' },
  { id: '1-year', label: 'Within 1 Year' },
  { id: 'flexible', label: 'Flexible' },
]

export default function MultiStepContactForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    serviceType: '',
    currentStatus: '',
    timeline: '',
    budget: '',
    message: '',
  })

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('immigrationFormData')
    if (saved) {
      try {
        setFormData(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load saved form data:', e)
      }
    }
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('immigrationFormData', JSON.stringify(formData))
  }, [formData])

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {}

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = 'Please enter a valid email'
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
      if (!formData.country.trim()) newErrors.country = 'Country is required'
    } else if (currentStep === 2) {
      if (!formData.serviceType) newErrors.serviceType = 'Please select a service'
    } else if (currentStep === 3) {
      if (!formData.currentStatus) newErrors.currentStatus = 'Please select your current status'
      if (!formData.timeline) newErrors.timeline = 'Please select a timeline'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(step)) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to submit form')

      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        serviceType: '',
        currentStatus: '',
        timeline: '',
        budget: '',
        message: '',
      })
      localStorage.removeItem('immigrationFormData')
      setTimeout(() => {
        setStep(1)
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      setErrors({ submit: 'Failed to submit form. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleRadioChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }))
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: '' }))
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <CheckCircle className="w-20 h-20 text-amber-500" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
        <p className="text-slate-300 mb-4">
          Thank you! Our team will review your information and contact you within 24 hours.
        </p>
        <p className="text-sm text-slate-400">Redirecting to homepage...</p>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4].map((s) => (
            <motion.div
              key={s}
              className={`h-1 flex-1 mx-1 rounded-full ${
                s <= step ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 'bg-slate-700'
              }`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: s * 0.1 }}
            />
          ))}
        </div>
        <p className="text-sm text-slate-400 text-center">Step {step} of 4</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence mode="wait">
          {/* Step 1: Contact Information */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-white mb-6">Your Contact Information</h3>

              {/* Name */}
              <EnhancedInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                label="Full Name"
                error={errors.name}
                isValid={formData.name.trim().length > 0 && !errors.name}
              />

              {/* Email */}
              <EnhancedInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                label="Email Address"
                error={errors.email}
                icon="mail"
                isValid={formData.email.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && !errors.email}
              />

              {/* Phone */}
              <EnhancedInput
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
                label="Phone Number"
                error={errors.phone}
                icon="phone"
                isValid={formData.phone.trim().length > 0 && !errors.phone}
              />

              {/* Country */}
              <EnhancedInput
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="e.g., India, Philippines, China"
                label="Your Country"
                error={errors.country}
                icon="map"
                isValid={formData.country.trim().length > 0 && !errors.country}
              />
            </motion.div>
          )}

          {/* Step 2: Service Selection */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-white mb-6">Which service interests you? *</h3>

              <div className="space-y-3">
                {SERVICES.map((service) => (
                  <motion.label
                    key={service.id}
                    whileHover={{ x: 4 }}
                    className="flex items-center p-4 rounded-lg border-2 border-slate-600 cursor-pointer hover:border-amber-500/50 transition-all"
                  >
                    <input
                      type="radio"
                      name="serviceType"
                      value={service.id}
                      checked={formData.serviceType === service.id}
                      onChange={(e) => handleRadioChange('serviceType', e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 text-white">{service.label}</span>
                  </motion.label>
                ))}
              </div>

              {errors.serviceType && <p className="text-red-400 text-sm">{errors.serviceType}</p>}
            </motion.div>
          )}

          {/* Step 3: Current Status & Timeline */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4">What is your current status? *</h3>
                <div className="space-y-3">
                  {CURRENT_STATUS.map((status) => (
                    <motion.label
                      key={status.id}
                      whileHover={{ x: 4 }}
                      className="flex items-center p-3 rounded-lg border-2 border-slate-600 cursor-pointer hover:border-amber-500/50 transition-all"
                    >
                      <input
                        type="radio"
                        name="currentStatus"
                        value={status.id}
                        checked={formData.currentStatus === status.id}
                        onChange={(e) => handleRadioChange('currentStatus', e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 text-white">{status.label}</span>
                    </motion.label>
                  ))}
                </div>
                {errors.currentStatus && <p className="text-red-400 text-sm mt-2">{errors.currentStatus}</p>}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">What is your timeline? *</h3>
                <div className="space-y-3">
                  {TIMELINE.map((time) => (
                    <motion.label
                      key={time.id}
                      whileHover={{ x: 4 }}
                      className="flex items-center p-3 rounded-lg border-2 border-slate-600 cursor-pointer hover:border-amber-500/50 transition-all"
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={time.id}
                        checked={formData.timeline === time.id}
                        onChange={(e) => handleRadioChange('timeline', e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 text-white">{time.label}</span>
                    </motion.label>
                  ))}
                </div>
                {errors.timeline && <p className="text-red-400 text-sm mt-2">{errors.timeline}</p>}
              </div>
            </motion.div>
          )}

          {/* Step 4: Additional Details */}
          {step === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-white mb-6">Final Details</h3>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="">Select a budget range</option>
                  <option value="0-1000">Under $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000-5000">$2,000 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your situation or ask any questions..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-slate-400">
                Your information is secure and will only be used to help you with your immigration journey.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Messages */}
        {errors.submit && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-300 text-sm"
          >
            {errors.submit}
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-6">
          {step > 1 && (
            <motion.button
              type="button"
              onClick={handlePrevious}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-white hover:border-amber-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </motion.button>
          )}

          {step < 4 ? (
            <motion.button
              type="button"
              onClick={handleNext}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold hover:from-amber-500 hover:to-amber-600 transition-all"
            >
              Next Step
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold hover:from-amber-500 hover:to-amber-600 transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </motion.button>
          )}
        </div>
      </form>

      {/* Form Progress Summary */}
      <div className="mt-8 pt-6 border-t border-slate-700">
        <p className="text-xs text-slate-500 text-center">
          Your form data is automatically saved. You can close and return to continue where you left off.
        </p>
      </div>
    </div>
  )
}
