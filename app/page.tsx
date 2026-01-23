import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { Deliverables } from '@/components/Deliverables'
import { WhoFor } from '@/components/WhoFor'
import { Pricing } from '@/components/Pricing'
import { SocialProof } from '@/components/SocialProof'
import { Projects } from '@/components/Projects'
import { BookingForm } from '@/components/BookingForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Deliverables />
      <WhoFor />
      <Pricing />
      <SocialProof />
      <Projects />
      <BookingForm />
    </main>
  )
}
