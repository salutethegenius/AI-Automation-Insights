import { SectionWrapper } from './ui/SectionWrapper'

const deliverables = [
  {
    title: 'Workflow Review',
    description: 'Comprehensive mapping of cross-departmental processes and enterprise tools.',
  },
  {
    title: 'AI & Automation Opportunities',
    description: 'Strategic identification of scaling opportunities to reduce overhead and departmental friction.',
  },
  {
    title: 'Actionable Roadmap',
    description: 'Enterprise-grade implementation strategy tailored to your organization’s growth goals.',
  },
  {
    title: 'Optional Consultation',
    description: 'Executive-level session to walk leadership through findings and automation ROI.',
  },
]

export const Deliverables = () => {
  return (
    <SectionWrapper className="bg-dark-bg fade-in">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-turquoise mb-4">
          Here's what you get from the AI Readiness & Automation Assessment
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {deliverables.map((item, index) => (
          <div
            key={index}
            className="relative bg-dark-card p-8 md:p-10 rounded-xl border-2 border-turquoise/20 hover:border-turquoise/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,165,168,0.2)] group"
          >
            {/* Numbered Indicator */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center border-4 border-dark-bg shadow-lg">
              <span className="font-heading text-xl font-bold text-dark-bg">
                {index + 1}
              </span>
            </div>

            {/* Checkmark Icon */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-turquoise group-hover:text-gold transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-turquoise mb-4 group-hover:text-turquoise-light transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed pl-10">
              {item.description}
            </p>

            {/* Accent Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-turquoise/0 via-turquoise/0 to-gold/0 group-hover:from-turquoise/5 group-hover:via-turquoise/0 group-hover:to-gold/5 transition-all duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
