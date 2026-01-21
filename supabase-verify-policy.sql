-- Verify RLS policies on assessment_leads table
-- Run this to check what policies exist and their configuration

-- Check if RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'assessment_leads';

-- List all policies on the table
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'assessment_leads';

-- Test query to see what role we're using (run this as anon role)
SELECT current_user, session_user;
