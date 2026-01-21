import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessName, businessSize, email, contactNumber, bestTimeToCall, challenges } = body

    // Validate required fields
    if (!businessName || !businessSize || !email || !contactNumber || !bestTimeToCall || !challenges) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Use admin client for server-side operations (bypasses RLS)
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }
    
    const { data, error } = await supabaseAdmin
      .from('assessment_leads')
      .insert([
        {
          business_name: businessName,
          business_size: businessSize,
          email: email,
          contact_number: contactNumber,
          best_time_to_call: bestTimeToCall,
          challenges: challenges,
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
