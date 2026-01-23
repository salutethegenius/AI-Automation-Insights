'use client'

import { Button } from './ui/Button'

export const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('booking-form')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-dark-bg py-20 md:py-32 px-4 md:px-8 lg:px-16 fade-in">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-turquoise mb-6 text-balance">
          Scale Your Enterprise: AI & Automation for Established Operations
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto text-balance">
          We help established Bahamian SMEs earning $250k+ annually optimize complex workflows, eliminate operational bottlenecks, and drive high-level efficiency using custom AI systems.
        </p>
        <Button onClick={scrollToForm} variant="primary">
          Book Your Assessment
        </Button>
      </div>
    </section>
  )
}
