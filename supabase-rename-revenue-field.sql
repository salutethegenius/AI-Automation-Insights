-- Rename business_size to business_revenue in assessment_leads table
ALTER TABLE assessment_leads RENAME COLUMN business_size TO business_revenue;

-- Update the type to text if it isn't already (it should be, but let's be sure)
-- ALTER TABLE assessment_leads ALTER COLUMN business_revenue TYPE TEXT;
