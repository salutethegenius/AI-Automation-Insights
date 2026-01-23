import { SectionWrapper } from './ui/SectionWrapper'
import Link from 'next/link'

interface Project {
  name: string
  url: string
  status: 'live' | 'coming-soon'
  description: string
}

const projects: Project[] = [
  {
    name: 'The Kemis Group',
    url: 'https://thekemisgroup.com',
    status: 'live',
    description: 'Sovereign AI & Digital Infrastructure for The Bahamas. Building the foundation for a digital future across the archipelago.',
  },
  {
    name: 'Local Squares',
    url: 'https://localsquares.vercel.app/',
    status: 'live',
    description: 'Neighborhood business directory connecting Bahamian businesses with local customers. Pin your business, get discovered, and grow your local presence.',
  },
  {
    name: 'LawBey.com',
    url: 'https://lawbey.com',
    status: 'live',
    description: 'Legal services platform connecting clients with qualified attorneys across The Bahamas.',
  },
  {
    name: 'BACO Membership Portal',
    url: 'https://baco-portal.com',
    status: 'live',
    description: 'Membership management portal for BACO members with secure access to exclusive resources and services.',
  },
  {
    name: 'KemisDigital',
    url: 'https://kemisdigital.com',
    status: 'live',
    description: 'All-in-one social media marketing automation platform with AI chatbots, content creation, ad campaigns, CRM, and more.',
  },
  {
    name: 'Urban Nassau Rides',
    url: 'https://urbannassau2-0.vercel.app/',
    status: 'live',
    description: 'Ride service, delivery, and courier platform for Nassau. Fast, reliable transportation and logistics solutions.',
  },
  {
    name: 'Kemis Academy',
    url: 'https://kemisacademy.com',
    status: 'live',
    description: 'AI & Digital Marketing education platform designed for Bahamas students. Learn cutting-edge technology skills with hands-on courses.',
  },
  {
    name: 'Bahamas OpenData',
    url: 'https://bahamasopendata.com',
    status: 'live',
    description: 'Civic finance dashboard providing real-time insights into the Bahamas national budget, government spending, and debt tracking.',
  },
  {
    name: 'SideEye',
    url: 'https://sideeyebs.com',
    status: 'live',
    description: 'Anonymous crime reporting platform trusted by citizens across The Bahamas. Report what you saw, without being seen.',
  },
  {
    name: 'RicoBenzia',
    url: 'https://ricobenzia.com',
    status: 'live',
    description: 'A comprehensive Web3 portal and gateway to decentralized services, blockchain insights, and next-generation digital assets.',
  },
  {
    name: 'Anchor',
    url: '#',
    status: 'coming-soon',
    description: 'Sovereign Digital Account Layer for Bahamians. Empowering citizens with secure, self-sovereign digital identity and account management.',
  },
]

export const Projects = () => {
  return (
    <SectionWrapper className="bg-dark-surface fade-in">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-turquoise mb-4">
          Our Work
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Explore some of our live projects and solutions we've built for clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const CardContent = (
            <>
              {project.status === 'coming-soon' && (
                <span className="absolute top-4 right-4 bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                  Coming Soon
                </span>
              )}
              
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-xl font-semibold text-turquoise group-hover:text-turquoise-light transition-colors">
                  {project.name}
                </h3>
                {project.status === 'live' && (
                  <svg
                    className="w-5 h-5 text-turquoise/60 group-hover:text-turquoise transition-colors flex-shrink-0 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </div>

              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.status === 'live' ? (
                <div className="text-white/60 group-hover:text-turquoise transition-colors text-xs flex items-center gap-2">
                  <span className="truncate">{project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                  <svg
                    className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              ) : (
                <p className="text-white/50 text-xs">Launching soon</p>
              )}
            </>
          );

          if (project.status === 'live') {
            return (
              <Link
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-card p-6 rounded-lg border border-turquoise/20 hover:border-turquoise/40 transition-all duration-300 hover:-translate-y-1 group relative block"
              >
                {CardContent}
              </Link>
            );
          }

          return (
            <div
              key={index}
              className="bg-dark-card p-6 rounded-lg border border-turquoise/20 transition-all duration-300 relative block"
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  )
}
