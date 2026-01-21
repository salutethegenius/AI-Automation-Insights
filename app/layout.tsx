import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Readiness & Automation Assessment | Kemis',
  description: 'Discover practical ways to save time, reduce errors, and increase revenue using AI and digital systems for your Bahamian business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
