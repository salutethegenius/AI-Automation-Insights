'use client'

export const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('booking-form')
    // #region agent log
    fetch('http://127.0.0.1:7250/ingest/93b3c464-e613-4ca5-89da-882dec6414e4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:5',message:'scrollToForm called',data:{formSectionFound:!!formSection},timestamp:Date.now(),hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-dark-bg px-4 md:px-8 lg:px-16 fade-in">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm md:text-base font-semibold tracking-widest uppercase mb-8">
          <span className="text-[#00A4D3]">The Commonwealth of</span>{' '}
          <span className="text-gold">The Bahamas</span>
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6 text-balance">
          Improve Efficiency and Reclaim Time Within Your Company
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto text-balance">
          Growth systems and custom web applications designed by Bahamians who know the market best. We help leadership teams at companies earning $1M – $10M+ annually eliminate operational bottlenecks and automate critical workflows to drive scalable growth in the <span className="text-orange-500">Orange Economy</span>.
        </p>
        <button
          type="button"
          onClick={scrollToForm}
          aria-label="Scroll to form"
          className="inline-flex items-center justify-center text-turquoise/70 hover:text-turquoise transition-colors cursor-pointer"
        >
          <svg
            className="w-8 h-8 animate-bounce-down"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
