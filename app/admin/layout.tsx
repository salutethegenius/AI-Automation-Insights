import { redirect } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // In production, implement proper authentication here
  // For now, this is a basic protected route structure
  
  return (
    <div className="min-h-screen bg-dark-bg">
      {children}
    </div>
  )
}
