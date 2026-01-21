import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

// Basic auth check - in production, use proper authentication
function isAuthorized(request: NextRequest): boolean {
  // For now, check for a simple password in query params or header
  // In production, implement proper JWT/auth
  const authHeader = request.headers.get('authorization')
  const apiKey = request.nextUrl.searchParams.get('key')
  
  // Simple check - in production, use proper auth
  const expectedKey = process.env.ADMIN_API_KEY || 'dev-key-change-in-production'
  
  return authHeader === `Bearer ${expectedKey}` || apiKey === expectedKey
}

export async function GET(request: NextRequest) {
  // Basic authorization check
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  // Validate environment variables at runtime
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json(
      { error: 'Server configuration error: Missing Supabase environment variables' },
      { status: 500 }
    )
  }

  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    )
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('assessment_leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch leads' },
        { status: 500 }
      )
    }

    return NextResponse.json({ leads: data || [] })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
