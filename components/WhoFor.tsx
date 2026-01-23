import { SectionWrapper } from './ui/SectionWrapper'

const targetAudience = [
  'Established Bahamian Enterprises with $250k – $5M+ in annual revenue',
  'Leadership teams looking to leverage AI to scale without increasing headcount',
  'Operations-heavy businesses looking to automate complex repetitive tasks and data workflows',
]

export const WhoFor = () => {
  return (
    <SectionWrapper className="bg-dark-surface fade-in">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-turquoise mb-6">
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
