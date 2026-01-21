import { SectionWrapper } from './ui/SectionWrapper'

export const Pricing = () => {
  return (
    <SectionWrapper className="bg-dark-bg fade-in">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-turquoise mb-6">
          Invest in your business growth
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-dark-card p-8 md:p-12 rounded-lg border border-turquoise/20 hover:border-turquoise/40 transition-all duration-300 mb-8">
          <div className="space-y-6 text-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-white/10">
              <div>
                <h3 className="font-heading text-2xl font-bold text-turquoise mb-2">
                  Single Assessment
                </h3>
                <p className="text-white/70">Fixed scope, one-time</p>
              </div>
              <div className="text-3xl font-bold text-white mt-4 md:mt-0">
                $1,000 – $1,500
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-turquoise mb-2">
                  Optional Follow-Up Roadmap
                </h3>
                <p className="text-white/70">If guidance on implementation is desired</p>
              </div>
              <div className="text-3xl font-bold text-white mt-4 md:mt-0">
                $2,000 – $3,000
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center text-lg text-white/80">
          Pricing reflects the actionable insights and practical roadmap you'll receive—no surprises, no hidden fees.
        </p>
      </div>
    </SectionWrapper>
  )
}
