import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 md:px-8 lg:px-16 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
