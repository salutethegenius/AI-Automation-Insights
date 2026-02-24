import { SectionWrapper } from './ui/SectionWrapper'

const targetAudience = [
  'Established Bahamian businesses with $1M – $10M+ in annual revenue and multi-department operations',
  'Leadership teams looking to modernize operations and reduce overhead without increasing headcount',
  'Operations-heavy businesses looking to automate repetitive tasks and simplify data workflows',
]

export const WhoFor = () => {
  return (
    <SectionWrapper className="bg-dark-surface fade-in">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gold mb-6">
          This assessment is perfect for:
        </h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-6 text-lg text-white/90">
          {targetAudience.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-turquoise text-2xl mr-4">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
