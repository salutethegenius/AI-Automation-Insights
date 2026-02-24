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
  const [showMore, setShowMore] = useState(false)
  const exploreContentRef = useRef<HTMLDivElement>(null)

  const handleExplore = () => {
    // #region agent log
    fetch('http://127.0.0.1:7250/ingest/93b3c464-e613-4ca5-89da-882dec6414e4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'page.tsx:18',message:'handleExplore called',data:{showMoreBefore:showMore},timestamp:Date.now(),hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    setShowMore(true)
    setTimeout(() => {
      // #region agent log
      fetch('http://127.0.0.1:7250/ingest/93b3c464-e613-4ca5-89da-882dec6414e4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'page.tsx:23',message:'scrollIntoView attempt',data:{refExists:!!exploreContentRef.current},timestamp:Date.now(),hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      exploreContentRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <BookingForm />

      <section className="bg-dark-bg py-12 px-4 md:px-8 lg:px-16 text-center">
        {!showMore && (
          <Button onClick={handleExplore} variant="secondary">
            Learn More
          </Button>
        )}
      </section>

      {showMore && (
        <div ref={exploreContentRef} className="fade-in">
          <WhoFor />
          <Pricing />
          <Deliverables />
        </div>
      )}

      <Footer />
    </main>
  )
}
