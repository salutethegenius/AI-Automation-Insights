interface Lead {
  id: string
  business_name: string
  business_size: string
  challenges: string
  created_at: string
}

interface LeadsTableProps {
  leads: Lead[]
  searchTerm: string
}

export const LeadsTable = ({ leads, searchTerm }: LeadsTableProps) => {
  const filteredLeads = leads.filter(
    (lead) =>
      lead.business_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.business_size.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.challenges.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (filteredLeads.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-white/70">
          {searchTerm ? 'No leads match your search' : 'No leads yet'}
        </div>
      </div>
    )
  }

  return (
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
                <td className="px-6 py-4 text-white/80">{lead.business_size}</td>
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
  )
}
