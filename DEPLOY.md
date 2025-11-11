# 🚀 QUICK DEPLOYMENT GUIDE

## Step 1: Copy Files to Your GitHub Repo

**Option A - Manual Copy:**
1. Download all files from `/home/claude/reputation-genius-site/`
2. Copy them into your local `reputation-genius-site` Git repository
3. Replace any existing files

**Option B - Command Line:**
```bash
# Navigate to your local repo
cd ~/path/to/reputation-genius-site

# Copy all files from Claude's generated project
# (You'll need to download/copy the files first)
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Test Locally (Optional but Recommended)

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to preview.

## Step 4: Deploy to Vercel

```bash
# Stage all files
git add .

# Commit with message
git commit -m "Initial Reputation Genius website - complete homepage with nav and footer"

# Push to GitHub
git push origin main
```

## Step 5: Verify Deployment

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Watch the deployment progress (takes ~60 seconds)
3. Click on your project to see the live URL
4. Your site should be live at: `https://reputation-genius-site.vercel.app`

## ✅ What You Get

Your live site now includes:

- ✅ Professional navigation with dropdowns
- ✅ Complete homepage with:
  - Hero section with dual CTAs
  - Stats showcase
  - 6 service cards
  - How it works (3 steps)
  - Testimonials
  - Final CTA section
- ✅ Full footer (4-column layout)
- ✅ Mobile responsive design
- ✅ SEO optimized
- ✅ Vercel Analytics enabled

## 🔄 Making Updates

To update the site in the future:

1. Make changes to files
2. Test locally: `npm run dev`
3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push
   ```
4. Vercel auto-deploys in ~60 seconds!

## 📝 Next Steps

1. **Add more pages**: Ask Claude to create service pages using the `rg-site-builder` skill
2. **Custom domain**: Configure in Vercel → Settings → Domains
3. **Real testimonials**: Replace placeholder testimonials
4. **GoHighLevel forms**: Embed on the free report page

## 🆘 If Something Goes Wrong

**Build fails?**
- Check Vercel dashboard for error logs
- Ensure `node_modules` is NOT in your Git repo (it's in .gitignore)

**Site looks broken?**
- Clear your browser cache
- Check if all files were pushed: `git status`

**Need help?**
- Check the main README.md
- Contact: (413) 314-2553

---

**That's it!** Your professional website will be live in under 5 minutes. 🎉
