'use client'

import { useState, useRef } from 'react'
import { Hero } from '@/components/Hero'
import { Deliverables } from '@/components/Deliverables'
import { WhoFor } from '@/components/WhoFor'
import { Pricing } from '@/components/Pricing'
import { BookingForm } from '@/components/BookingForm'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const handleGetInTouch = () => {
    setShowForm(true)
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <main className="min-h-screen">
      <Hero />

      <div className="fade-in">
        <WhoFor />
        <Pricing />
        <Deliverables />

        <section className="bg-dark-bg py-12 px-4 md:px-8 lg:px-16 text-center">
          {!showForm && (
            <Button onClick={handleGetInTouch} variant="secondary">
              Get In Touch
            </Button>
          )}
        </section>
      </div>

      {showForm && (
        <div ref={formRef}>
          <BookingForm />
        </div>
      )}

      <Footer />
    </main>
  )
}
