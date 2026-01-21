-- COMPREHENSIVE FIX: Drop all policies and recreate them correctly
-- This ensures a clean slate

-- Step 1: Disable RLS temporarily to clean up
ALTER TABLE assessment_leads DISABLE ROW LEVEL SECURITY;

-- Step 2: Drop ALL existing policies
DROP POLICY IF EXISTS "Allow anonymous inserts" ON assessment_leads;
DROP POLICY IF EXISTS "Allow public inserts" ON assessment_leads;
DROP POLICY IF EXISTS "Allow authenticated inserts" ON assessment_leads;
DROP POLICY IF EXISTS "Allow service role full access" ON assessment_leads;

-- Step 3: Re-enable RLS
ALTER TABLE assessment_leads ENABLE ROW LEVEL SECURITY;

-- Step 4: Create policy for anon role (for unauthenticated/public requests)
CREATE POLICY "Allow anonymous inserts" ON assessment_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Step 5: Also create policy for authenticated role (in case auth is used later)
CREATE POLICY "Allow authenticated inserts" ON assessment_leads
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Step 6: Create policy for service_role (for admin/backend access)
CREATE POLICY "Allow service role full access" ON assessment_leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Verify policies were created
SELECT policyname, roles, cmd 
FROM pg_policies 
WHERE tablename = 'assessment_leads';
