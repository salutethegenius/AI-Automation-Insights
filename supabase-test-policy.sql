-- TEST POLICY: This is a more permissive policy to test if RLS is the issue
-- Run this AFTER running the main setup SQL

-- Drop and recreate with a more permissive policy for testing
DROP POLICY IF EXISTS "Allow anonymous inserts" ON assessment_leads;

-- Very permissive policy - allows any insert from anon role
-- Note: For INSERT operations, only WITH CHECK is allowed (not USING)
CREATE POLICY "Allow anonymous inserts" ON assessment_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Also try creating a policy for 'public' role (some Supabase setups use this)
DROP POLICY IF EXISTS "Allow public inserts" ON assessment_leads;
CREATE POLICY "Allow public inserts" ON assessment_leads
  FOR INSERT
  TO public
  WITH CHECK (true);
