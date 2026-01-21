-- Add contact fields to assessment_leads table
-- Run this in your Supabase SQL Editor

-- Add email column
ALTER TABLE assessment_leads 
ADD COLUMN IF NOT EXISTS email TEXT;

-- Add contact_number column
ALTER TABLE assessment_leads 
ADD COLUMN IF NOT EXISTS contact_number TEXT;

-- Add best_time_to_call column
ALTER TABLE assessment_leads 
ADD COLUMN IF NOT EXISTS best_time_to_call TEXT;

-- Verify the columns were added
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'assessment_leads' 
ORDER BY ordinal_position;
