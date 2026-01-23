import Link from 'next/link'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gold text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-black">
              The Kemis Group
            </h3>
            <p className="text-black/80 text-sm leading-relaxed">
              Sovereign AI & Digital Infrastructure for The Bahamas. Empowering businesses with automation and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-black mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://thekemisgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-black transition-colors text-sm"
                >
                  The Kemis Group
                </Link>
              </li>
              <li>
                <Link
                  href="https://kemisdigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-black transition-colors text-sm"
                >
                  KemisDigital
                </Link>
              </li>
              <li>
                <Link
                  href="https://kemisacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-black transition-colors text-sm"
                >
                  Kemis Academy
                </Link>
              </li>
              <li>
                <Link
                  href="https://baco-portal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-black transition-colors text-sm"
                >
                  BACO Portal
                </Link>
              </li>
              <li>
                <a
                  href="#booking-form"
                  className="text-black/80 hover:text-black transition-colors text-sm"
                >
                  Book Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-black mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-sm text-black/80">
              <li>
                <a
                  href="https://thekemisgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Visit Our Website
                </a>
              </li>
              <li className="pt-2">
                <p className="text-black/70 text-xs">
                  Serving businesses across The Bahamas
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black/70 text-sm text-center md:text-left">
              © {currentYear} The Kemis Group of Companies Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-black/70">
              <span>Made with</span>
              <svg
                className="w-4 h-4 text-black/70"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span>in The Bahamas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
