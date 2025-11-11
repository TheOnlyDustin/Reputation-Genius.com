# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Reputation Genius is an AI-powered reputation management website for local service businesses. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS. The site emphasizes lead capture, reputation management, and AI automation services.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Run linter
npm run lint
```

## Architecture & Structure

### App Router Layout Pattern
- **Root Layout** (`app/layout.tsx`): Wraps all pages with Navigation, Footer, and Vercel Analytics
- All pages automatically inherit the Navigation and Footer components
- Uses Inter font from Google Fonts, loaded via next/font
- SEO metadata configured at layout level with OpenGraph tags

### Component Architecture
- **Navigation** (`components/Navigation.tsx`): Client component with dropdown menus
  - Uses React state for mobile menu and dropdown toggles
  - Desktop: hover-based dropdowns
  - Mobile: click-based accordions
  - Solutions and Resources dropdown arrays defined inline
- **Footer** (`components/Footer.tsx`): Static 4-column layout with social icons
- **Homepage** (`app/page.tsx`): Server component with inline data arrays (services, stats, steps, testimonials)

### Styling System
- **Tailwind Config** (`tailwind.config.js`): Custom brand colors defined as tokens
  - Primary blue: `#2563eb` (with dark/light variants)
  - Accent green: `#10b981` (with dark variant)
  - Text colors: primary (`#111827`), secondary (`#6b7280`)
  - Background: white and alt gray (`#f9fafb`)
- **Global Styles** (`app/globals.css`): Defines utility classes
  - `.btn-cta`: Primary call-to-action button style
  - `.card`: Standard card component style
  - `.section-container`: Standard section padding (py-20, px-4)

### Image Handling
- All images hosted on Google Cloud Storage (`storage.googleapis.com`)
- Domain configured in `next.config.js` for Next.js Image optimization
- Three primary images: logo (white background), logo (dark background), hero image

## Business Context

### Core Services (Linked but Pages Not Created)
- Free Online Reputation Report
- Reputation Management
- AI Employee Systems
- Website Chatbot
- AI Follow-Up Automation
- Social Media Planner
- Listings Management

### Contact Information
- Phone: (413) 314-2553
- Email: info@reputation-genius.com
- Location: Phoenix, Arizona

### Calendar Booking Links
- Reputation Consultation: `https://link.reputation-genius.com/widget/bookings/reputation-genius`
- AI Agent Discovery: `https://link.reputation-genius.com/widget/booking/jBgO8Co4QAp0N8m1PW0i`

## Deployment

### Vercel Configuration
- Auto-deploys on push to `main` branch
- `vercel.json` explicitly configures framework as Next.js
- GitHub repo: `https://github.com/TheOnlyDustin/Reputation-Genius.com`
- Vercel Analytics integrated via `@vercel/analytics` package

### Environment
- Node.js 20+ recommended
- Next.js 14.2.33
- React 18.3.1
- TypeScript 5

## Key Design Patterns

### Component Data Management
- Service pages, testimonials, stats, etc. are defined as inline arrays in components
- No CMS or external data sources currently
- All content is static and defined at build time

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `≥ 1024px`

### Client vs Server Components
- Navigation is a client component (needs state for mobile menu/dropdowns)
- Homepage is a server component (static content)
- Footer is a server component (static links)

## Creating New Pages

When adding new service pages or content pages:
1. Create new route in `app/[page-name]/page.tsx`
2. Use server components by default unless interactivity needed
3. Follow the homepage pattern: hero section → features/content → CTA
4. Reuse utility classes: `.btn-cta`, `.card`, `.section-container`
5. Maintain consistent brand colors from Tailwind config
6. Include phone number and booking links in CTAs
7. SEO: Add metadata export to each page

## External Dependencies

- **lucide-react**: Icon library (Star, Phone, Menu, etc.)
- **@vercel/analytics**: Analytics tracking
- **next/image**: Optimized image loading
- **next/link**: Client-side navigation

## Notes

- No test suite currently configured
- No API routes or backend functionality
- All forms will integrate with GoHighLevel (not yet implemented)
- Social media links in footer are placeholder (`href="#"`)
- Many linked pages (pricing, about, contact, blog, etc.) do not exist yet
