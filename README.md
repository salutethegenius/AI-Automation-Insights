# AI Readiness & Automation Assessment Landing Page

A modern, single-page landing page for the AI Readiness & Automation Assessment service, built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Supabase** for form submission storage

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase project set up

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your Supabase credentials:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. Set up Supabase table:
   Create a table named `assessment_leads` with the following columns:
   - `id` (uuid, primary key, default: `gen_random_uuid()`)
   - `business_name` (text)
   - `business_revenue` (text)
   - `challenges` (text)
   - `created_at` (timestamp, default: `now()`)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
flagship/
├── app/
│   ├── api/
│   │   └── submit-assessment/
│   │       └── route.ts          # API route for form submissions
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main landing page
├── components/
│   ├── ui/
│   │   ├── Button.tsx            # Reusable button component
│   │   └── SectionWrapper.tsx    # Section wrapper component
│   ├── Hero.tsx                  # Hero section
│   ├── Problem.tsx               # Problem section
│   ├── Deliverables.tsx          # Deliverables section
│   ├── WhoFor.tsx                # Target audience section
│   ├── Pricing.tsx               # Pricing section
│   ├── SocialProof.tsx           # Social proof section
│   └── BookingForm.tsx           # Booking form component
└── lib/
    └── supabase.ts               # Supabase client configuration
```

## Design System

- **Background**: White (#FFFFFF)
- **Primary/Titles**: Turquoise (#00A5A8)
- **Accent 1**: Black (#000000)
- **Accent 2**: Yellow/Gold (#FFC72C) - Bahamian flag gold
- **Typography**: Outfit (headings), DM Sans (body)

## Features

- Single-page scroll design
- Smooth scroll navigation to booking form
- Form validation and submission to Supabase
- Admin dashboard for managing leads (`/admin`)
- Responsive design (mobile-first)
- Subtle fade-in animations
- Placeholder sections for testimonials and logos

## Deployment

This project can be deployed to:
- **Replit** (as specified in requirements)
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any platform that supports Next.js

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous/publishable key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service_role key (for server-side operations)
- `ADMIN_API_KEY` - Admin dashboard API key (optional, defaults to 'dev-key-change-in-production')

## Admin Dashboard

Access the admin dashboard at `/admin` to view and manage assessment leads.

**Setup:**
1. Set `ADMIN_API_KEY` in your `.env.local` file (or use the default for development)
2. Navigate to `/admin` and enter the API key to login
3. View all leads, search/filter, and see statistics

**Security Note:** In production, implement proper authentication (JWT, session-based auth, etc.) instead of the simple API key approach.
