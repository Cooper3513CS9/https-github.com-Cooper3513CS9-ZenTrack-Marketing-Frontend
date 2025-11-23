# 🚀 ZenTrack GitHub & Vercel Setup - Team Guide

**Last Updated:** November 23, 2025
**Status:** ✅ Production Ready

---

## 🎯 Quick Start (30 seconds)

### You have 2 repositories:

```
1. MARKETING SITE
   Repository: zentrack-marketing (THIS REPO)
   Live at: https://zentrack.nl
   Deploy: Push to 'future' branch

2. PLATFORM / DASHBOARD
   Repository: ZenTrack-Enterprise-Platform
   Live at: https://app.zentrack.nl
   Deploy: Push to 'future' branch
```

### Make changes:
```bash
# 1. Navigate to correct repo
cd ~/zentrack-marketing          # For marketing site
# OR
cd ~/ZenTrack-Enterprise-Platform-17  # For platform

# 2. Get latest code
git checkout future && git pull origin future

# 3. Make changes & test
npm run dev    # Test locally

# 4. Push to deploy
git add . && git commit -m "feat: your change" && git push origin future

# Done! Auto-deploys in 2-5 minutes ✅
```

---

## 📊 Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│              YOUR LOCAL COMPUTER                         │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ~/zentrack-marketing                  ← Marketing Site  │
│  ├── app/page.tsx     (Homepage)                         │
│  ├── app/pricing/     (Pricing)                          │
│  ├── app/contact/     (Contact)                          │
│  └── vercel.json                                         │
│                                                           │
│  ~/ZenTrack-Enterprise-Platform-17     ← Platform       │
│  ├── app/sign-in/     (Login)                            │
│  ├── app/sign-up/     (Signup)                           │
│  ├── app/dashboard/   (Main area)                        │
│  ├── app/api/         (API endpoints)                    │
│  └── vercel.json                                         │
│                                                           │
└─────────────────────┬──────────────────────────────────┘
                      │ git push origin future
                      ↓
┌─────────────────────────────────────────────────────────┐
│              GITHUB.COM                                  │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  future branch updated                                   │
│  → Webhook triggers Vercel                              │
│                                                           │
└─────────────────────┬──────────────────────────────────┘
                      │ GitHub Webhook
                      ↓
┌─────────────────────────────────────────────────────────┐
│              VERCEL (DEPLOYMENT)                         │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  Project: zentrack-marketing                             │
│  └─ Builds & deploys automatically (2-5 min)           │
│  └─ Updates zentrack.nl                                │
│                                                           │
│  Project: zentrack-enterprise                            │
│  └─ Builds & deploys automatically (2-5 min)           │
│  └─ Updates app.zentrack.nl                            │
│                                                           │
└─────────────────────┬──────────────────────────────────┘
                      │ Updates live
                      ↓
┌─────────────────────────────────────────────────────────┐
│              LIVE WEBSITES                               │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ✅ https://zentrack.nl         (Marketing)             │
│  ✅ https://app.zentrack.nl     (Platform)              │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

## 🔄 The 5-Step Workflow

### Step 1️⃣: Get Latest Code
```bash
git checkout future
git pull origin future
```

### Step 2️⃣: Create Feature Branch (Optional)
```bash
git checkout -b feature/add-new-page
```

### Step 3️⃣: Make Your Changes
```bash
# Edit files
nano app/page.tsx

# Test locally
npm run dev
# Visit http://localhost:3000

# Make sure build works
npm run build
```

### Step 4️⃣: Commit & Push
```bash
git add .
git commit -m "feat: add new feature"
git push origin feature/add-new-page
# OR directly to future for small changes:
# git push origin future
```

### Step 5️⃣: Create Pull Request (Optional)
**On GitHub.com:**
1. Click "Compare & pull request"
2. Add description
3. Merge to `future` branch

**Result:** ✅ Auto-deploys!

---

## 🌍 Which Repository for What?

### zentrack-marketing (This Repo)
**Edit these:**
- Landing page content
- Pricing page
- Contact page
- Marketing copy
- Email contact forms
- SEO improvements
- CSS/design styling

**Live at:** https://zentrack.nl

### ZenTrack-Enterprise-Platform
**Edit these:**
- Login page
- Signup page
- Dashboard
- User management
- API endpoints
- Database queries
- Business logic
- WhatsApp integration

**Live at:** https://app.zentrack.nl

---

## ⚠️ Rules to Never Break

| Rule | Why |
|------|-----|
| Always use `future` branch | It auto-deploys to production |
| Test with `npm run dev` first | Catch errors before pushing |
| Keep repos separate | They have different dependencies |
| Minimal vercel.json | Extra fields cause deploy failures |
| Update email templates together | They must stay in sync |

---

## 📋 Pre-Push Checklist

Before running `git push`, verify:

```
□ I'm on the 'future' branch
□ I tested changes with npm run dev
□ I ran npm run build (no errors)
□ My commit message is descriptive
□ I didn't accidentally change unrelated files
□ I'm not pushing node_modules or .env
```

---

## 🆘 Troubleshooting

### Build Failed
```
What to do:
1. Check Vercel dashboard for error message
2. Fix error locally (npm run build)
3. Push again - Vercel will retry
```

### Changes Not Showing Live
```
Check:
1. Did you push to 'future' branch? (not 'main')
2. Is Vercel build "Ready" (green)?
3. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
4. Wait 5 minutes for domain propagation
```

### Accidentally Pushed to Wrong Branch
```
Contact team lead - they can revert or redeploy
Revert is safe (all deployments are saved)
```

---

## 🚀 Checking Deployment Status

### Option 1: Vercel Dashboard
```
https://vercel.com/ronald-klantfansnls-projects
→ Click project
→ Check "Deployments" tab
→ Look for "Ready" status (green)
```

### Option 2: Terminal
```bash
vercel ls
# Shows list of all deployments with status
```

---

## 📂 File Structure

```
zentrack-marketing/
├── app/
│   ├── page.tsx              ← Homepage
│   ├── pricing/
│   │   └── page.tsx          ← Pricing page
│   ├── contact/
│   │   └── page.tsx          ← Contact page
│   ├── layout.tsx            ← Root layout
│   └── globals.css           ← Global styles
├── public/                   ← Images, fonts
├── components/               ← Reusable components
├── lib/                      ← Utilities
├── package.json
├── vercel.json               ← Vercel config (MINIMAL!)
├── tsconfig.json
└── .gitignore

ZenTrack-Enterprise-Platform-17/
├── app/
│   ├── page.tsx
│   ├── sign-in/page.tsx      ← Login
│   ├── sign-up/page.tsx      ← Signup
│   ├── dashboard/            ← Main area
│   ├── api/                  ← API routes
│   ├── layout.tsx
│   └── globals.css
├── lib/                      ← Utilities & services
├── components/               ← Reusable components
├── supabase/                 ← Database config
├── public/
├── package.json
├── vercel.json               ← Vercel config (MINIMAL!)
├── tsconfig.json
└── .gitignore
```

---

## 💡 Best Practices

### 1. Small, Focused Commits
```bash
# ✅ Good: Multiple focused commits
git commit -m "feat: add pricing dropdown"
git commit -m "style: improve button spacing"

# ❌ Bad: One huge commit
git commit -m "lots of stuff"
```

### 2. Descriptive Branch Names
```bash
# ✅ Good
feature/add-payment-processing
fix/email-validation-bug
docs/update-readme

# ❌ Bad
feature1
fix
work
```

### 3. Always Test Before Push
```bash
npm run dev      # Quick test
npm run build    # Full production test
```

### 4. Keep Git History Clean
```bash
# Don't commit these files:
node_modules/
.env.local
.next/
dist/
```

---

## 🔐 Important: vercel.json

**Keep it minimal:**
```json
{
  "projectSettings": {
    "name": "zentrack-marketing",
    "description": "ZenTrack Marketing Website",
    "framework": "nextjs"
  }
}
```

**NEVER add:**
```json
{
  "domains": [...],           // ← Will fail!
  "buildCommand": "...",      // ← Unnecessary
  "publicSource": true        // ← Will fail!
}
```

---

## 📞 Quick Reference Commands

```bash
# Clone a repository
git clone https://github.com/Cooper3513CS9/Frontend-nieuw ~/zentrack-marketing
git clone https://github.com/Cooper3513CS9/ZenTrack-Enterprise-Platform ~/ZenTrack-Enterprise-Platform-17

# Get latest code
git checkout future && git pull origin future

# Create feature branch
git checkout -b feature/my-feature

# Test locally
npm install    # First time only
npm run dev    # Test in development

# Build test (production)
npm run build

# Commit and push
git add .
git commit -m "feat: description"
git push origin feature/my-feature

# Check deployment status
vercel ls

# View Vercel logs
vercel logs [project-name]
```

---

## ✅ Summary

**You have:**
- ✅ 2 separate repositories (marketing + platform)
- ✅ 1 shared deploy method: push to `future` branch
- ✅ Automatic deployments (no manual steps needed)
- ✅ 2 live domains (zentrack.nl + app.zentrack.nl)
- ✅ Clean separation of concerns
- ✅ Easy to roll back if needed

**To make changes:**
1. Edit code in correct repository
2. Test locally with `npm run dev`
3. Push to `future` branch
4. Vercel auto-deploys in 2-5 minutes
5. Done! ✅

---

## 📚 Full Documentation

For detailed explanations, see:
- **ZenTrack-Enterprise-Platform-17/**
  - `VERCEL_GITHUB_DEPLOYMENT_GUIDE.md` (Complete technical guide)
  - `GITHUB_WORKFLOW_QUICK_REFERENCE.md` (Quick reference card)

---

**Questions?** Ask in #engineering or check the detailed guides above!
