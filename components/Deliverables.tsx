import { SectionWrapper } from './ui/SectionWrapper'

const deliverables = [
  {
    title: 'Workflow Review',
    description: 'Map your current processes and digital tools.',
  },
  {
    title: 'AI & Automation Opportunities',
    description: 'Identify exactly where your business can save time, reduce mistakes, and grow.',
  },
  {
    title: 'Actionable Roadmap',
    description: 'Clear step-by-step recommendations tailored to your business.',
  },
  {
    title: 'Optional Consultation',
    description: 'One 1-hour session to walk you through findings.',
  },
]

export const Deliverables = () => {
  return (
    <SectionWrapper className="bg-dark-bg fade-in">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-turquoise mb-6">
          Here's what's included in the AI Readiness & Automation Assessment:
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {deliverables.map((item, index) => (
          <div
            key={index}
            className="bg-dark-card p-6 rounded-lg border border-turquoise/20 hover:border-turquoise/40 transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="font-heading text-xl font-semibold text-turquoise mb-3">
              {item.title}
            </h3>
            <p className="text-white/80">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
