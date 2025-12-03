# Reputation Genius Website Update Task List

## Project Context

- **Project Root:** `/Users/the_only_dustin/Downloads/Reputation Genius/reputation-genius-site/`
- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Current Readiness:** 82%
- **Target Readiness:** 95%+

---

## Phase 1: Create New Pages (Dependencies for Later Phases)

These pages must be created first as other tasks reference them.

### Task 1.1: Create Cookie Policy Page

**Priority:** High  
**File to Create:** `app/cookie-policy/page.tsx`

**Requirements:**
- Create a new page at `/cookie-policy`
- Include comprehensive cookie policy content covering:
  - Google Tag Manager usage
  - Facebook Pixel tracking
  - Google Analytics data collection
  - Microsoft Clarity session recording
  - Bing Webmaster Tools
- Document standard preconfigured retention policies for each service
- Include sections for:
  - What cookies are used
  - Purpose of each cookie/tracking tool
  - How users can manage cookie preferences
  - Data retention periods per service
  - Third-party cookie disclosures
- Match existing legal page styling (reference `app/privacy/page.tsx` for layout)
- Add proper metadata for SEO

**Reference Files:**
- `app/privacy/page.tsx` (for styling/layout reference)
- `app/terms/page.tsx` (for styling/layout reference)

---

### Task 1.2: Create Help Center / FAQ Page

**Priority:** High  
**File to Create:** `app/help-center/page.tsx`

**Requirements:**
- Create a comprehensive Q&A/FAQ page at `/help-center`
- Organize questions into logical categories (Pricing, Services, Getting Started, Technical, etc.)
- Each answer should:
  - Provide helpful information
  - Include a soft CTA pointing to relevant internal pages
  - Example: "For detailed pricing information, [view our pricing page](/pricing)"
- Include internal links to boost SEO:
  - `/pricing` for pricing questions
  - `/services/review-management` for review-related questions
  - `/services/webchat` for webchat questions
  - `/services/social-media-planner` for social media questions
  - `/services/ai-phone-agent` for AI phone agent questions
  - `/about` for company questions
  - `/contact` for support questions
- Use expandable/collapsible FAQ sections for better UX
- Add proper metadata and structured data (FAQ schema) for SEO

**Suggested FAQ Categories:**
1. **Getting Started** - How to sign up, onboarding process
2. **Pricing & Plans** - Cost questions, what's included, upgrades
3. **Review Management** - How it works, platforms supported
4. **Webchat** - Setup, customization, integration
5. **Social Media Planner** - Features, scheduling, platforms
6. **AI Phone Agent** - Capabilities, setup, pricing
7. **Technical Support** - Troubleshooting, integrations
8. **Account & Billing** - Managing account, cancellation

---

## Phase 2: Content & Legal Updates

### Task 2.1: Update Legal Document Dates

**Priority:** High  
**Files to Edit:**
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

**Requirements:**
- Change "Effective Date: November 11, 2025" to "Effective Date: December 1, 2025"
- Search for any other date references and update accordingly

---

### Task 2.2: Update Team Member Photos

**Priority:** High  
**File to Edit:** `app/about/page.tsx`

**Requirements:**
- Replace placeholder team images with actual headshots:
  - **Shane:** `https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/692fe1410b0f9d2a38502b4a.png`
  - **Dustin:** `https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67a8e4b69769a742b9615580.png`
  - **Jessica:** `https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/692fe3680b0f9dd8ba507204.png`
- Ensure images use Next.js `<Image>` component with proper dimensions
- Add appropriate alt text for each team member

---

### Task 2.3: Update Statistics

**Priority:** High  
**Files to Search/Edit:** All pages containing statistics (likely `app/page.tsx`, `app/about/page.tsx`)

**Requirements:**
- Find and update review statistics:
  - Keep "121 businesses served" (correct)
  - Change "63,500 reviews managed" to "17,400 reviews managed"
- Search entire codebase for "63,500" or "63500" to catch all instances

---

## Phase 3: Navigation & Link Fixes

### Task 3.1: Update Footer Links

**Priority:** High  
**File to Edit:** `components/Footer.tsx` (or wherever footer is defined)

**Requirements:**

1. **Blog Link:** Verify link points to `https://blog.reputation-genius.com` (should already be correct)

2. **Careers Link:** Change from `href="#"` to `href="https://www.facebook.com/reputationgenius"`

3. **Help Center Link:** Change from `href="#"` to `href="/help-center"` (internal link to new page)

4. **Cookie Policy Link:** Change from `/privacy` to `/cookie-policy` (internal link to new page)

---

### Task 3.2: Standardize Social Media Links

**Priority:** High  
**Files to Edit:** `components/Footer.tsx`, any other files with social icons

**Requirements:**
- Find ALL social media icon links (Twitter/X, LinkedIn, Facebook, Instagram, etc.)
- Set ALL social links to: `https://www.facebook.com/reputationgenius`
- Keep all social icons visible (intentional temporary state)
- Ensure links open in new tab with `target="_blank"` and `rel="noopener noreferrer"`
- Add proper `aria-label` attributes (e.g., `aria-label="Follow us on Facebook"`)

---

### Task 3.3: Add UTM Parameters to CTAs

**Priority:** Medium  
**Files to Edit:** All pages with CTA buttons/links

**Requirements:**
- Add UTM parameters to all CTA links pointing to external booking/demo pages
- UTM Structure:
  - `utm_source=website`
  - `utm_medium=cta`
  - `utm_campaign=[page-name]`

**Examples by page:**
- Homepage: `?utm_source=website&utm_medium=cta&utm_campaign=homepage`
- Webchat page: `?utm_source=website&utm_medium=cta&utm_campaign=webchat`
- Review Management: `?utm_source=website&utm_medium=cta&utm_campaign=review-management`
- Social Media Planner: `?utm_source=website&utm_medium=cta&utm_campaign=social-media-planner`
- AI Phone Agent: `?utm_source=website&utm_medium=cta&utm_campaign=ai-phone-agent`
- Pricing: `?utm_source=website&utm_medium=cta&utm_campaign=pricing`
- Contact: `?utm_source=website&utm_medium=cta&utm_campaign=contact`

**Note:** Apply to booking links, demo request links, and any other conversion-focused external links.

---

## Phase 4: CTA & Mobile Behavior Fixes

### Task 4.1: Standardize Mobile CTA Behavior

**Priority:** High  
**Files to Edit:** `components/BookDemoButton.tsx` (or similar CTA components)

**Requirements:**
- **Desktop behavior:** Open modal/form for demo booking
- **Mobile behavior:** Direct phone call to AI agent line: `tel:+14133142553`
- Ensure consistent behavior across all CTA buttons site-wide
- Phone numbers reference:
  - **Human support (footer display):** 413-798-8836
  - **AI Agent (mobile CTA):** 413-314-2553

---

### Task 4.2: Ensure External Link Consistency

**Priority:** Medium  
**Files to Edit:** All pages with external links

**Requirements:**
- All external links should:
  - Open in new tab: `target="_blank"`
  - Include security attributes: `rel="noopener noreferrer"`
- Internal links should NOT open in new tabs
- Audit all `<a>` tags and `<Link>` components for consistency

---

## Phase 5: Performance - Component Architecture

### Task 5.1: Convert Client Components to Server Components

**Priority:** High  
**Files to Audit/Edit:**
- `app/about/page.tsx`
- `app/services/webchat/page.tsx`
- `app/services/review-management/page.tsx`
- `app/services/social-media-planner/page.tsx`
- `app/services/ai-phone-agent/page.tsx`
- All other service pages

**Requirements:**
- Remove `'use client'` directive from pages that only render static content
- For pages with interactive elements:
  - Keep main page as server component
  - Extract interactive sections into separate client components
  - Import client components into server page

**Example Pattern:**
```tsx
// app/services/webchat/page.tsx (Server Component)
import { WebchatDemo } from '@/components/WebchatDemo'; // Client component

export default function WebchatPage() {
  return (
    <div>
      <h1>Webchat Service</h1>
      <p>Static content here...</p>
      <WebchatDemo /> {/* Interactive client component */}
    </div>
  );
}
```

```tsx
// components/WebchatDemo.tsx (Client Component)
'use client';
import { useState } from 'react';

export function WebchatDemo() {
  const [isOpen, setIsOpen] = useState(false);
  // Interactive logic only
}
```

---

## Phase 6: Performance - Image Optimization

### Task 6.1: Replace img Tags with Next.js Image Component

**Priority:** High  
**Files to Edit:** All pages and components using `<img>` tags

**Requirements:**
- Find all `<img>` tags in the codebase
- Replace with Next.js `<Image>` component
- Add proper `width` and `height` attributes
- Add `priority` prop for above-the-fold images
- Use `loading="lazy"` for below-the-fold images (default behavior)

**Example Transformation:**
```tsx
// Before
<img
  src="https://storage.googleapis.com/.../image.jpg"
  alt="Description"
  className="w-full h-auto"
/>

// After
import Image from 'next/image';

<Image
  src="https://storage.googleapis.com/.../image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="w-full h-auto"
  priority={false} // true for hero images
/>
```

---

### Task 6.2: Configure Next.js Image Optimization

**Priority:** High  
**File to Edit:** `next.config.js` or `next.config.mjs`

**Requirements:**
- Add image optimization configuration:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/msgsndr/**',
      },
      // Add other external image domains as needed
    ],
  },
};

module.exports = nextConfig;
```

---

## Phase 7: Performance - Code Splitting & Lazy Loading

### Task 7.1: Implement Dynamic Imports for Heavy Components

**Priority:** Medium  
**Files to Edit:** Pages with heavy/complex components

**Requirements:**
- Identify heavy components (modals, video players, complex forms)
- Implement dynamic imports with loading states:

```tsx
import dynamic from 'next/dynamic';

const HeavyModal = dynamic(() => import('@/components/HeavyModal'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded" />,
  ssr: false,
});
```

---

### Task 7.2: Implement Lazy Loading for Below-the-Fold Content

**Priority:** Medium  
**Files to Edit:** Homepage and service pages

**Requirements:**
- Wrap below-the-fold sections in Suspense with fallbacks
- Use dynamic imports for sections not immediately visible

```tsx
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('./TestimonialsSection'));
const FAQSection = dynamic(() => import('./FAQSection'));

export default function Page() {
  return (
    <div>
      <HeroSection /> {/* Above the fold - load immediately */}
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FAQSection />
      </Suspense>
    </div>
  );
}
```

---

### Task 7.3: Configure Webpack Bundle Splitting

**Priority:** Medium  
**File to Edit:** `next.config.js` or `next.config.mjs`

**Requirements:**
- Add webpack configuration for bundle splitting:

```js
webpack: (config, { isServer }) => {
  if (!isServer) {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        lucide: {
          test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
          name: 'lucide-icons',
          chunks: 'all',
          priority: 10,
        },
      },
    };
  }
  return config;
},
```

---

### Task 7.4: Add React.memo to Frequently Re-rendering Components

**Priority:** Medium  
**Files to Edit:** Components rendered in lists or updated frequently

**Requirements:**
- Identify components that re-render unnecessarily
- Wrap with React.memo:

```tsx
import { memo } from 'react';

const ServiceCard = memo(function ServiceCard({ service }) {
  return (
    <div className="card">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
});

export default ServiceCard;
```

- Add useCallback for event handlers passed as props:

```tsx
const handleClick = useCallback(() => {
  setIsOpen(true);
}, []);
```

---

## Phase 8: Performance - Font & Error Handling

### Task 8.1: Optimize Font Loading

**Priority:** Low  
**File to Edit:** `app/layout.tsx`

**Requirements:**
- Add `display: 'swap'` to font configurations:

```tsx
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});
```

---

### Task 8.2: Implement Error Boundaries

**Priority:** Medium  
**Files to Create/Edit:**
- Create `components/ErrorBoundary.tsx`
- Wrap external content in error boundaries

**Requirements:**
- Create reusable error boundary component:

```tsx
'use client';
import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-gray-600">Something went wrong loading this content.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
```

- Wrap video embeds, iframes, and external content with error boundaries

---

## Phase 9: Design Consistency

### Task 9.1: Standardize Heading Styles

**Priority:** Medium  
**Files to Edit:** All page files

**Requirements:**
- Audit all pages for heading consistency
- Create/use consistent heading classes:
  - `h1`: Page titles - same size, weight, color across all pages
  - `h2`: Section headers - consistent styling
  - `h3`: Subsection headers - consistent styling
- Consider creating heading components or Tailwind @apply classes for consistency

---

### Task 9.2: Standardize Icon Styling

**Priority:** Low  
**Files to Edit:** `app/services/social-media-planner/page.tsx` and other service pages

**Requirements:**
- Audit icon usage across all service pages
- Ensure consistent:
  - Icon sizes
  - Icon colors
  - Icon spacing
  - Icon stroke widths (if using Lucide icons)

---

### Task 9.3: Optimize Video Poster Images

**Priority:** Low  
**Files to Edit:** Pages with video embeds

**Requirements:**
- Ensure all video poster images are:
  - Consistent aspect ratio
  - Similar quality/resolution
  - Properly optimized (use Next.js Image if possible)
  - Consistently styled (rounded corners, shadows, etc.)

---

## Phase 10: Mobile Responsiveness

### Task 10.1: Fix Video Embed Responsiveness

**Priority:** Medium  
**Files to Edit:** All pages with video embeds

**Requirements:**
- Wrap videos in responsive container:

```tsx
<div className="relative w-full aspect-video">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    // ... other props
  />
</div>
```

- Test on multiple screen sizes
- Ensure videos don't overflow containers on mobile

---

### Task 10.2: Optimize Pricing Table for Mobile

**Priority:** Medium  
**File to Edit:** `app/pricing/page.tsx` (or pricing component)

**Requirements:**
- Implement mobile-friendly pricing display:
  - Stack cards vertically on mobile
  - Use horizontal scroll for comparison tables if needed
  - Ensure all text is readable without zooming
  - Make CTAs easily tappable (min 44px touch target)

---

### Task 10.3: Fix Modal Sizing on Small Screens

**Priority:** Medium  
**Files to Edit:** Modal components

**Requirements:**
- Ensure modals:
  - Don't exceed viewport height
  - Have proper padding on small screens
  - Are scrollable if content exceeds viewport
  - Have easily accessible close buttons
  - Don't cause horizontal scroll

```tsx
// Example modal container classes
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
    {/* Modal content */}
  </div>
</div>
```

---

## Phase 11: Code Cleanup

### Task 11.1: Clean Up Inline Styles

**Priority:** Low  
**Files to Edit:** All components with inline styles

**Requirements:**
- Find components using `style={{}}` props
- Convert to Tailwind classes where possible
- For dynamic styles that can't be Tailwind, consider CSS variables or CSS modules

---

### Task 11.2: Simplify Complex Tailwind Class Combinations

**Priority:** Low  
**Files to Edit:** Components with very long class strings

**Requirements:**
- Identify components with excessive class combinations
- Options for simplification:
  - Extract to component variants using CVA (class-variance-authority)
  - Use @apply in CSS modules for repeated patterns
  - Create reusable component abstractions
- Improve code readability and maintainability

---

## Verification Checklist

After completing all phases, verify:

- [ ] All footer links work correctly
- [ ] Cookie Policy page exists and is accessible
- [ ] Help Center page exists with comprehensive FAQs
- [ ] Legal documents show December 1, 2025 date
- [ ] Team photos display correctly
- [ ] Statistics show correct numbers (121 businesses, 17,400 reviews)
- [ ] All social links point to Facebook
- [ ] UTM parameters present on all CTAs
- [ ] Mobile CTAs call correct number (413-314-2553)
- [ ] No unnecessary `'use client'` directives on static pages
- [ ] All images use Next.js Image component
- [ ] next.config.js has image and webpack optimizations
- [ ] Error boundaries wrap external content
- [ ] Videos responsive on all screen sizes
- [ ] Pricing table readable on mobile
- [ ] Modals work correctly on small screens
- [ ] Consistent heading and icon styles across pages

---

## Agent Orchestration Notes

**Parallel Execution Groups:**

1. **Phase 1** - Must complete first (creates pages needed later)
2. **Phases 2, 3, 4** - Can run in parallel (content, links, CTAs)
3. **Phases 5, 6, 7** - Can run in parallel (performance optimizations)
4. **Phase 8** - Depends on Phase 5 completion (error boundaries need component structure)
5. **Phases 9, 10, 11** - Can run in parallel (design, mobile, cleanup)

**Critical Dependencies:**
- Task 3.1 (Footer Links) depends on Task 1.2 (Help Center page creation)
- Task 3.1 (Footer Links) depends on Task 1.1 (Cookie Policy page creation)
- Task 6.1 (Image replacement) should happen before Task 2.2 (Team photos) for consistency

---

## File Reference Quick List

**New Files to Create:**
- `app/cookie-policy/page.tsx`
- `app/help-center/page.tsx`
- `components/ErrorBoundary.tsx`

**Primary Files to Edit:**
- `app/layout.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `app/pricing/page.tsx`
- `app/contact/page.tsx`
- `app/services/webchat/page.tsx`
- `app/services/review-management/page.tsx`
- `app/services/social-media-planner/page.tsx`
- `app/services/ai-phone-agent/page.tsx`
- `components/Footer.tsx`
- `components/BookDemoButton.tsx`
- `next.config.js` or `next.config.mjs`

---

*Generated: December 2, 2025*
*Source: site-review-report.md audit findings*
