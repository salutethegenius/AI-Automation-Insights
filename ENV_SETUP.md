# Environment Variables Setup

## Step 1: Create `.env.local` file

Create a file named `.env.local` in the root of your project (same directory as `package.json`).

## Step 2: Add your Supabase credentials

Copy and paste this template into your `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
ADMIN_API_KEY=your_secure_admin_key_here
```

## Step 3: Find your Supabase credentials

### In Supabase Dashboard:

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Select your project
3. Click on **Settings** (gear icon) in the left sidebar
4. Click on **API** under Project Settings
5. You'll see:
   - **Project URL** - Copy this for `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** (publishable key) - Copy this for `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** (secret key) - Copy this for `SUPABASE_SERVICE_ROLE_KEY` - **KEEP THIS SECRET!**

### Example format:

Your `.env.local` should look something like this (with your actual values):

```
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_xxxxx...
SUPABASE_SERVICE_ROLE_KEY=sb_secret_xxxxx...
```

**Important:** 
- The `SUPABASE_SERVICE_ROLE_KEY` is used for server-side API routes and bypasses RLS. Never expose this key to the client!
- The `ADMIN_API_KEY` is used to protect the admin dashboard. Use a strong, random key in production. If not set, defaults to 'dev-key-change-in-production' for development.

## Important Notes:

- **Never commit `.env.local` to git** - It's already in `.gitignore`
- **Restart your dev server** after creating/updating `.env.local`
- The `NEXT_PUBLIC_` prefix is required for Next.js to expose these variables to the browser
- Use the **anon/public key**, not the service_role key (which should stay secret)

## Verify it's working:

After setting up, restart your dev server:
```bash
npm run dev
```

If you see any errors about missing Supabase variables, double-check:
1. File is named exactly `.env.local` (not `.env.local.txt` or similar)
2. File is in the project root directory
3. No extra spaces around the `=` sign
4. Values are wrapped in quotes if they contain special characters (usually not needed)
