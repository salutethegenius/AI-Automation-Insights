import { SectionWrapper } from './ui/SectionWrapper'

export const Problem = () => {
  return (
    <SectionWrapper className="bg-dark-surface fade-in">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-turquoise mb-6">
          Most small businesses waste hours on tasks that could be automated.
        </h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-6 text-lg text-white/90">
          <li className="flex items-start">
            <span className="text-turquoise text-2xl mr-4">•</span>
            <span>Manual processes slow growth and limit your team's productivity.</span>
          </li>
          <li className="flex items-start">
            <span className="text-turquoise text-2xl mr-4">•</span>
            <span>AI and automation opportunities often go unnoticed.</span>
          </li>
          <li className="flex items-start">
            <span className="text-turquoise text-2xl mr-4">•</span>
            <span>Without a clear roadmap, technology investments can fail.</span>
          </li>
        </ul>
        
        <p className="mt-8 text-xl text-white font-semibold text-center">
          Our assessment gives you actionable insights—no long-term contracts, no ongoing babysitting.
        </p>
      </div>
    </SectionWrapper>
  )
}
