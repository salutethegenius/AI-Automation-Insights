'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Lead {
  id: string
  business_name: string
  business_size: string
  email: string
  contact_number: string
  best_time_to_call: string
  challenges: string
  created_at: string
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Get API key from localStorage or prompt
    try {
      const storedKey = localStorage.getItem('admin_api_key')
      if (storedKey) {
        setApiKey(storedKey)
        setIsAuthenticated(true)
        fetchLeads(storedKey)
      } else {
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
    }
  }, [])

  const fetchLeads = async (key: string) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`/api/admin/leads?key=${encodeURIComponent(key)}`)
      
      if (!response.ok) {
        if (response.status === 401) {
          setError('Unauthorized - Invalid API key')
          localStorage.removeItem('admin_api_key')
          setApiKey('')
          setIsAuthenticated(false)
          return
        }
        throw new Error('Failed to fetch leads')
      }

      const data = await response.json()
      setLeads(data.leads || [])
      setIsAuthenticated(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load leads')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = () => {
    if (!apiKey.trim()) {
      setError('Please enter an API key')
      return
    }
    localStorage.setItem('admin_api_key', apiKey)
    fetchLeads(apiKey)
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_api_key')
    setApiKey('')
    setLeads([])
    setIsAuthenticated(false)
  }

  const filteredLeads = leads.filter((lead) => {
    try {
      const nameMatch = lead.business_name?.toLowerCase().includes(searchTerm.toLowerCase()) || false
      const sizeMatch = lead.business_size?.toLowerCase().includes(searchTerm.toLowerCase()) || false
      const emailMatch = lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) || false
      const challengesMatch = lead.challenges?.toLowerCase().includes(searchTerm.toLowerCase()) || false
      return nameMatch || sizeMatch || emailMatch || challengesMatch
    } catch (err) {
      return false
    }
  })

  const formatDate = (dateString: string) => {
    try {
      if (!dateString) {
        return 'N/A'
      }
      const date = new Date(dateString)
      if (isNaN(date.getTime())) {
        return 'Invalid Date'
      }
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    } catch (err) {
      return 'Error'
    }
  }

  if (!isAuthenticated && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-dark-card p-8 rounded-lg border border-turquoise/20">
          <h1 className="text-3xl font-heading font-bold text-turquoise mb-6 text-center">
            Admin Login
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                API Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-3 border-2 border-white/20 bg-dark-surface text-white rounded-lg focus:border-turquoise focus:outline-none transition-colors"
                placeholder="Enter admin API key"
              />
            </div>
            {error && (
              <div className="bg-red-900/30 border-2 border-red-500/50 text-red-300 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            <button
              onClick={handleLogin}
              className="w-full bg-turquoise hover:bg-turquoise-dark text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Login
            </button>
            <div className="text-center">
              <Link
                href="/"
                className="text-turquoise hover:text-turquoise-light text-sm"
              >
                ← Back to Landing Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-heading font-bold text-turquoise mb-2">
              Admin Dashboard
            </h1>
            <p className="text-white/70">Manage assessment leads</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => fetchLeads(apiKey)}
              disabled={loading}
              className="px-4 py-2 border border-turquoise/50 text-turquoise rounded-lg hover:bg-turquoise/10 transition-colors disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Refresh'}
            </button>
            <Link
              href="/"
              className="px-4 py-2 border border-turquoise/50 text-turquoise rounded-lg hover:bg-turquoise/10 transition-colors"
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-900/30 border border-red-500/50 text-red-300 rounded-lg hover:bg-red-900/50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-dark-card p-6 rounded-lg border border-turquoise/20">
            <div className="text-white/70 text-sm mb-1">Total Leads</div>
            <div className="text-3xl font-bold text-turquoise">{leads.length}</div>
          </div>
          <div className="bg-dark-card p-6 rounded-lg border border-turquoise/20">
            <div className="text-white/70 text-sm mb-1">This Week</div>
            <div className="text-3xl font-bold text-turquoise">
              {leads.filter(
                (lead) =>
                  new Date(lead.created_at) >
                  new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
              ).length}
            </div>
          </div>
          <div className="bg-dark-card p-6 rounded-lg border border-turquoise/20">
            <div className="text-white/70 text-sm mb-1">Today</div>
            <div className="text-3xl font-bold text-turquoise">
              {leads.filter(
                (lead) =>
                  new Date(lead.created_at).toDateString() ===
                  new Date().toDateString()
              ).length}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by business name, email, size, or challenges..."
            className="w-full px-4 py-3 border-2 border-white/20 bg-dark-card text-white rounded-lg focus:border-turquoise focus:outline-none transition-colors placeholder:text-white/40"
          />
        </div>

        {/* Leads Table */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-white/70">Loading leads...</div>
          </div>
        ) : error ? (
          <div className="bg-red-900/30 border-2 border-red-500/50 text-red-300 p-4 rounded-lg">
            {error}
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-white/70">
              {searchTerm ? 'No leads match your search' : 'No leads yet'}
            </div>
          </div>
        ) : (
          <div className="bg-dark-card rounded-lg border border-turquoise/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-dark-surface border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-turquoise">
                      Business Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-turquoise">
                      Size
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-turquoise">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-turquoise">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-turquoise">
                      Best Time to Call
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-turquoise">
                      Challenges
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-turquoise">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-white/5 hover:bg-dark-surface/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-white font-medium">
                        {lead.business_name}
                      </td>
                      <td className="px-6 py-4 text-white/80">
                        {lead.business_size}
                      </td>
                      <td className="px-6 py-4 text-white/80">
                        <a 
                          href={`mailto:${lead.email}`}
                          className="text-turquoise hover:text-turquoise-light hover:underline"
                        >
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-white/80">
                        <a 
                          href={`tel:${lead.contact_number}`}
                          className="text-turquoise hover:text-turquoise-light hover:underline"
                        >
                          {lead.contact_number}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-white/80">
                        {lead.best_time_to_call || 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-white/80 max-w-md">
                        <div className="truncate" title={lead.challenges}>
                          {lead.challenges}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-white/60 text-sm">
                        {formatDate(lead.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
