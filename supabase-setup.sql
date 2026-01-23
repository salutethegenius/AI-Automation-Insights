-- Create the assessment_leads table for storing form submissions
CREATE TABLE IF NOT EXISTS assessment_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL,
  business_revenue TEXT NOT NULL,
  challenges TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_assessment_leads_created_at ON assessment_leads(created_at DESC);

-- Enable Row Level Security (RLS) - adjust policies as needed
ALTER TABLE assessment_leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON assessment_leads;
DROP POLICY IF EXISTS "Allow public inserts" ON assessment_leads;
DROP POLICY IF EXISTS "Allow authenticated inserts" ON assessment_leads;
DROP POLICY IF EXISTS "Allow service role full access" ON assessment_leads;

-- Policy to allow inserts from anonymous users (for public form submissions)
-- Supabase uses 'anon' role for unauthenticated requests
-- Note: For INSERT operations, only WITH CHECK is allowed (not USING)
CREATE POLICY "Allow anonymous inserts" ON assessment_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Option 2: Allow authenticated inserts (if you want to require auth)
-- CREATE POLICY "Allow authenticated inserts" ON assessment_leads
--   FOR INSERT
--   TO authenticated
--   WITH CHECK (true);

-- Policy to allow service role to read all records (for admin access)
CREATE POLICY "Allow service role full access" ON assessment_leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
