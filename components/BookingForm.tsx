'use client'

import { useState, FormEvent } from 'react'
import { SectionWrapper } from './ui/SectionWrapper'
import { Button } from './ui/Button'

const commonChallenges = [
  'Manual data entry and repetitive tasks',
  'Departmental silos and communication gaps',
  'Scaling operations without increasing headcount',
  'Legacy system integration and data flow',
  'Customer relationship management (CRM) optimization',
  'Automated reporting and high-level data analysis',
  'Workflow bottlenecks and operational friction',
  'Document management and digital archiving',
  'Lead management and automated follow-ups',
  'Employee onboarding and standard operating procedures (SOPs)',
  'Quality control and standardized error reduction',
  'Inventory and supply chain automation',
]

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessRevenue: '',
    email: '',
    contactNumber: '',
    bestTimeToCall: '',
    challenges: [] as string[],
    customChallenges: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate challenges before submission
    const challengesText = getChallengesText()
    
    if (!challengesText.trim()) {
      setSubmitStatus('error')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const requestBody = {
        ...formData,
        challenges: challengesText,
      }
      
      const response = await fetch('/api/submit-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error('Failed to submit form')
      }

      const result = await response.json()
      
      setSubmitStatus('success')
      setFormData({ 
        businessName: '', 
        businessRevenue: '', 
        email: '',
        contactNumber: '',
        bestTimeToCall: '',
        challenges: [], 
        customChallenges: '' 
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheckboxChange = (challenge: string) => {
    setFormData((prev) => {
      const challenges = prev.challenges.includes(challenge)
        ? prev.challenges.filter((c) => c !== challenge)
        : [...prev.challenges, challenge]
      return { ...prev, challenges }
    })
  }

  const getChallengesText = () => {
    const selected = formData.challenges.join(', ')
    const custom = formData.customChallenges.trim()
    if (selected && custom) {
      return `${selected}. Additional: ${custom}`
    }
    return selected || custom
  }

  return (
    <SectionWrapper id="booking-form" className="bg-dark-bg fade-in">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-turquoise mb-6">
          Ready to scale your enterprise?
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-semibold text-white mb-2"
            >
              Company Name *
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              required
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-white/20 bg-dark-card text-white rounded-lg focus:border-turquoise focus:outline-none transition-colors placeholder:text-white/40"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label
              htmlFor="businessRevenue"
              className="block text-sm font-semibold text-white mb-2"
            >
              Annual Revenue *
            </label>
            <select
              id="businessRevenue"
              name="businessRevenue"
              required
              value={formData.businessRevenue}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-white/20 bg-dark-card text-white rounded-lg focus:border-turquoise focus:outline-none transition-colors"
            >
              <option value="">Select annual revenue...</option>
              <option value="$250k - $500k">$250k - $500k</option>
              <option value="$500k - $1M">$500k - $1M</option>
              <option value="$1M - $5M">$1M - $5M</option>
              <option value="$5M - $10M">$5M - $10M</option>
              <option value="$10M+">$10M+</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-white/20 bg-dark-card text-white rounded-lg focus:border-turquoise focus:outline-none transition-colors placeholder:text-white/40"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="contactNumber"
              className="block text-sm font-semibold text-white mb-2"
            >
              Contact Number *
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              required
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-white/20 bg-dark-card text-white rounded-lg focus:border-turquoise focus:outline-none transition-colors placeholder:text-white/40"
              placeholder="(242) 555-1234"
            />
          </div>

          <div>
            <label
              htmlFor="bestTimeToCall"
              className="block text-sm font-semibold text-white mb-2"
            >
              Best Time to Call *
            </label>
            <select
              id="bestTimeToCall"
              name="bestTimeToCall"
              required
              value={formData.bestTimeToCall}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-white/20 bg-dark-card text-white rounded-lg focus:border-turquoise focus:outline-none transition-colors"
            >
              <option value="">Select best time...</option>
              <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
              <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
              <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
              <option value="Flexible - Any time">Flexible - Any time</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Key Challenges / Goals * <span className="text-white/60 font-normal">(Select all that apply)</span>
            </label>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              {commonChallenges.map((challenge) => (
                <label
                  key={challenge}
                  className="flex items-start p-3 border-2 border-white/20 bg-dark-card rounded-lg hover:border-turquoise hover:bg-dark-surface transition-all cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={formData.challenges.includes(challenge)}
                    onChange={() => handleCheckboxChange(challenge)}
                    className="mt-1 mr-3 w-5 h-5 text-turquoise border-white/30 rounded focus:ring-turquoise focus:ring-2 bg-dark-card"
                  />
                  <span className="text-white/90 group-hover:text-turquoise transition-colors">
                    {challenge}
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-4">
              <label
                htmlFor="customChallenges"
                className="block text-sm font-semibold text-white mb-2"
              >
                Additional Challenges or Goals
              </label>
              <textarea
                id="customChallenges"
                name="customChallenges"
                rows={3}
                value={formData.customChallenges}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-white/20 bg-dark-card text-white rounded-lg focus:border-turquoise focus:outline-none transition-colors resize-none placeholder:text-white/40"
                placeholder="Tell us about any other challenges or goals not listed above..."
              />
            </div>
            {formData.challenges.length === 0 && !formData.customChallenges.trim() && submitStatus === 'error' && (
              <p className="text-red-400 text-sm mt-2">Please select at least one challenge or goal</p>
            )}
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-900/30 border-2 border-green-500/50 text-green-300 p-4 rounded-lg">
              <p className="font-semibold">Thank you! Your assessment request has been submitted.</p>
              <p className="text-sm mt-1">We'll be in touch soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-900/30 border-2 border-red-500/50 text-red-300 p-4 rounded-lg">
              <p className="font-semibold">Something went wrong. Please try again.</p>
            </div>
          )}

          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? 'Submitting...' : 'Book Your Assessment Today'}
            </Button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  )
}
