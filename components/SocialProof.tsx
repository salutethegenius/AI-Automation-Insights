import { SectionWrapper } from './ui/SectionWrapper'

export const SocialProof = () => {
  return (
    <SectionWrapper className="bg-dark-surface fade-in">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-turquoise mb-6">
          Trusted by Bahamian businesses to identify growth opportunities with digital systems.
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Placeholder testimonial cards */}
          <div className="bg-dark-card p-6 rounded-lg border border-turquoise/20">
            <p className="text-white/70 italic mb-4">
              "Testimonial placeholder - Add your client feedback here"
            </p>
            <p className="text-sm text-white/50">— Business Name</p>
          </div>
          
          <div className="bg-dark-card p-6 rounded-lg border border-turquoise/20">
            <p className="text-white/70 italic mb-4">
              "Testimonial placeholder - Add your client feedback here"
            </p>
            <p className="text-sm text-white/50">— Business Name</p>
          </div>
        </div>
        
        {/* Logo placeholder */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-dark-card p-8 rounded-lg border border-turquoise/20">
            <p className="text-white/50 text-sm">Logo Placeholder</p>
            <p className="text-white/30 text-xs mt-2">Add client logos here</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
