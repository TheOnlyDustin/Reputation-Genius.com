# Reputation Genius Website

Modern, AI-powered reputation management website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: BirdEye-inspired professional layout
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimized
- **Fast Performance**: Next.js App Router, optimized images, and edge deployment
- **Analytics Ready**: Vercel Analytics integrated

## 📋 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 🏗️ Project Structure

```
reputation-genius-site/
├── app/
│   ├── layout.tsx          # Root layout with Nav & Footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Navigation.tsx      # Header with dropdown menus
│   └── Footer.tsx          # 4-column footer
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind + brand colors
└── package.json            # Dependencies
```

## 🎨 Brand Colors

- **Primary Blue**: `#2563eb` (Trust & Technology)
- **Accent Green**: `#10b981` (Success & Action)
- **Neutral Gray**: `#6b7280` (Text & Borders)

## 📦 Installation

1. **Navigate to your local repo**:
   ```bash
   cd path/to/reputation-genius-site
   ```

2. **Copy all files from this generated site into your repo**

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**:
   Navigate to `http://localhost:3000`

## 🚢 Deployment to Vercel

### First Time Setup (Already Done!)

You've already connected your GitHub repo to Vercel. Now just push the code:

```bash
# Add all files
git add .

# Commit with a message
git commit -m "Initial Reputation Genius website build"

# Push to GitHub
git push origin main
```

**Vercel will automatically**:
- Detect the Next.js project
- Install dependencies
- Build the site
- Deploy to production
- Provide a live URL

⏱️ **Deployment time**: ~30-60 seconds

### Future Updates

To update the site:

1. Make your changes locally
2. Test with `npm run dev`
3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

Vercel auto-deploys on every push to `main` branch!

## 🔗 Important URLs

### Live Site
- Production: `https://reputation-genius-site.vercel.app`
- Custom domain (once configured): `https://reputation-genius.com`

### Contact Info
- Phone: (413) 314-2553
- Email: info@reputation-genius.com

### Calendar Links
- Reputation Consultation: `https://link.reputation-genius.com/widget/bookings/reputation-genius`
- AI Agent Discovery: `https://link.reputation-genius.com/widget/booking/jBgO8Co4QAp0N8m1PW0i`

## 📄 Pages Included

### Current Pages
- ✅ Homepage (complete with all sections)
- ✅ Navigation with Solutions & Resources dropdowns
- ✅ Footer (4-column layout)

### Pages to Create Next
These routes are linked but need individual pages:
- `/free-reputation-report` - Free report landing page
- `/reputation-management` - Service page
- `/ai-employee-systems` - Service page
- `/website-chatbot` - Service page
- `/ai-follow-up` - Service page
- `/social-media-planner` - Service page
- `/listings-management` - Service page
- `/pricing` - Pricing page
- `/about` - About page
- `/contact` - Contact page

**To create these pages**: Ask Claude to generate them using the `rg-site-builder` skill!

## 🎯 Next Steps

1. **Push this code to GitHub** (see Deployment section above)
2. **Verify live site** on Vercel
3. **Create additional pages** as needed
4. **Connect custom domain** in Vercel dashboard
5. **Add real testimonials** once you have them
6. **Integrate GoHighLevel forms** on report pages

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `≥ 1024px`

## 🔧 Configuration Files

- `next.config.js` - Image domains configured for Google Storage
- `tailwind.config.js` - Brand colors and custom theme
- `tsconfig.json` - TypeScript configuration
- `.gitignore` - Files to exclude from Git

## 📈 Performance Targets

- Lighthouse Score: 90+ (all metrics)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

## 💡 Tips

- **Hot Updates**: Changes pushed to GitHub deploy automatically
- **Preview Deploys**: Create branches for testing before merging to main
- **Environment Variables**: Add in Vercel dashboard if needed
- **Domain Setup**: Configure in Vercel → Project Settings → Domains

## 🆘 Troubleshooting

**Build fails on Vercel?**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify no TypeScript errors locally

**Images not loading?**
- Check `next.config.js` has correct image domains
- Verify image URLs are accessible

**Styles not applying?**
- Run `npm run dev` and check for Tailwind errors
- Ensure `globals.css` is imported in `layout.tsx`

## 📞 Support

Need help? Reach out:
- Phone: (413) 314-2553
- Email: info@reputation-genius.com

---

Built with ❤️ by Reputation Genius using Claude AI + Next.js + Vercel
