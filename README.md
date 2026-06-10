# 🏥 ZenTrack Marketing Site

Modern marketing website voor ZenTrack - Intelligent Voorraadbeheer platform voor Nederlandse huisartsenpraktijken.

**🌐 Live:** https://zentrack.nl | https://www.zentrack.nl (redirects to apex)

**Laatst bijgewerkt:** 11 juni 2026

---

## 🆕 Laatste update (11 juni 2026) — Pricing-herpositionering + stealth-copy

6 commits, alles live op zentrack.nl:

- **Prijskaarten gedifferentieerd op waarde i.p.v. seats**: €79 = "Jij bestelt zelf, ZenTrack bewaakt en denkt mee" (1 leverancier, NPA-dossier) · €149 = "ZenTrack werkt vóór je" (auto-opvolgen, onbeperkt leveranciers, Emma leert je praktijk kennen, per-kamer voorraad, team/goedkeuren). Gebruikersaantallen (3/8) weg; pijn-taal subtitels + prijs-anker (3+ uur/week ≈ €400/mnd); kaart-uitlijning gefixt.
- **Gratis-model overal gelijk**: 25 producten · max 6 maanden · eerste 100 praktijken (Pricing, FAQ, JSON-LD, expiratie-radar)
- **Stealth**: "collega-praktijken"-prijsverhaal → "je eigen data" / "marktconforme prijs" (belofte behouden, mechanisme verborgen); "Mistral Vision Embeddings" verwijderd (stack-discretie)
- **"Enterprise" → "Zorggroep"** in alle user-facing copy
- **Hero**: telefoon start direct met gevulde WhatsApp-bubbel
- **Banner**: "Pilot Partner" → "Early Adopter Worden? 50% korting in je eerste jaar"
- **Infra**: duplicate Vercel-project `zentrack-marketing` Git-disconnected (dubbele builds verstopten de queue); `app.zentrack.nl/pricing` in de app-repo gelijkgetrokken met deze site

Open: blogartikelen (Lees artikel-knoppen), trust-signalen (KvK, testimonial), Emma-kennisbank FAQ.

---

## 🎯 What Is This?

This is the **marketing site** for ZenTrack. It showcases:
- ✅ Product features & benefits
- ✅ Pricing tiers
- ✅ ROI calculator
- ✅ Customer testimonials
- ✅ Call-to-action buttons (redirects to dashboard signup)

**Note:** This is NOT the dashboard. The full app lives at https://app.zentrack.nl (separate repository).

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Cooper3513CS9/zentrack-nextjs-marketing.git
cd zentrack-nextjs-marketing

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
zentrack-nextjs-marketing/
├── app/
│   ├── page.tsx                    # Homepage (hero, features, pricing)
│   ├── roi-calculator/
│   │   └── page.tsx               # Interactive ROI calculator
│   ├── layout.tsx                 # Root layout
│   └── globals.css                # Global Tailwind styles
│
├── components/
│   ├── Header.tsx                 # Navigation with CTA buttons
│   ├── Hero.tsx                   # Hero section with features
│   ├── Pricing.tsx                # Pricing cards
│   ├── ROICalculator.tsx          # Cost savings calculator
│   ├── FAQ.tsx                    # FAQ section
│   ├── Footer.tsx                 # Footer with links
│   └── ui/                        # shadcn/ui components
│
├── public/
│   ├── qr-codes/
│   │   └── onboarding-qr.png     # QR code pointing to signup
│   └── images/                    # Marketing images
│
├── middleware.ts                  # www → apex domain redirect
├── next.config.ts                 # Next.js config (security headers)
├── vercel.json                    # Vercel deployment config (security headers)
├── CLAUDE.md                      # Architecture & critical rules
└── README.md                      # This file
```

---

## 🔐 Security

### Security Headers (All Active ✅)

| Header | Purpose | Status |
|--------|---------|--------|
| `X-Frame-Options: DENY` | Prevent clickjacking | ✅ Active |
| `X-Content-Type-Options: nosniff` | Prevent MIME sniffing | ✅ Active |
| `X-XSS-Protection` | Legacy XSS protection | ✅ Active |
| `Content-Security-Policy` | Modern XSS defense | ✅ Active |
| `Referrer-Policy: strict-no-referrer` | Privacy protection | ✅ Active |
| `Permissions-Policy` | Disable risky APIs | ✅ Active |

### SSL/TLS

- **HTTPS:** ✅ Enforced (TLS 1.3)
- **Certificate:** Let's Encrypt (auto-renewed)
- **HSTS:** Active (2-year enforcement)
- **Grade:** A+ (SSL Labs)

### Vulnerabilities

- **Current:** Zero vulnerabilities detected
- **Type:** Static marketing site (low attack surface)
- **Dependencies:** Monitored via Dependabot

---

## 🌐 Domain Configuration

### Current Setup

```
zentrack.nl          ← Primary domain (apex)
  ↑
www.zentrack.nl      ← Redirects here with 301 permanent

app.zentrack.nl      ← Dashboard (different repo & project)
```

### How Redirects Work

All traffic to `www.zentrack.nl` is permanently redirected (301) to `zentrack.nl`:

```bash
# Implemented via Next.js Edge Middleware
# File: middleware.ts

# Test it:
curl -I https://www.zentrack.nl
# Returns: HTTP/2 301
# Location: https://zentrack.nl/
```

**Why:** SEO best practice - single canonical URL consolidates authority.

---

## 🎨 Design & UI

### Framework Stack
- **Next.js 16.x** - React meta-framework
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **Vercel** - Hosting & deployment

### Color System
- Primary: Purple → Fuchsia gradient
- Secondary: Clinical blue (for trust)
- Neutrals: Gray scale

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- All pages tested on mobile, tablet, desktop

---

## 📈 SEO Optimization

### Current Status

- **Primary URL:** zentrack.nl
- **WWW Handling:** Permanent redirect (301) to apex
- **Canonical Tags:** Auto-generated by Next.js
- **Meta Tags:** All pages have title, description
- **Open Graph:** Social media sharing optimized
- **Structured Data:** Schema.org JSON-LD ready

### Performance Metrics

- **Lighthouse Score:** 90+ (desktop)
- **Core Web Vitals:** All green
- **Page Load Time:** <2 seconds (global CDN)
- **Cache:** Vercel edge caching enabled

---

## 🚀 Deployment

### Automated Deployment

This site auto-deploys to Vercel on every push to `main` branch:

```bash
# Make changes
git commit -m "feat: Add new feature"
git push origin main

# ✅ Auto-deployed to https://zentrack.nl within 1-2 minutes
```

### Manual Deploy

```bash
npm run build
vercel --prod
```

### Environment Variables

None required for this marketing site (it's static content).

---

## 📝 Important Rules

### ⚠️ Authentication Routing

This site does **NOT** have authentication routes.

**WRONG:**
```typescript
router.push('https://zentrack.nl/sign-up')    // ❌ Doesn't exist!
router.push('https://zentrack.nl/auth/login')  // ❌ Doesn't exist!
```

**CORRECT:**
```typescript
router.push('https://app.zentrack.nl/sign-up')   // ✅ Correct domain
router.push('https://app.zentrack.nl/sign-in')   // ✅ Correct domain
```

**Why:** Authentication is on the **dashboard** (app.zentrack.nl), not the marketing site.

See [CLAUDE.md](./CLAUDE.md) for full architecture explanation.

---

## 📊 Performance Monitoring

### Real-time Metrics

- **Vercel Analytics:** [Dashboard](https://vercel.com/dashboard)
- **Core Web Vitals:** Monitored by Google
- **Error Tracking:** Via Vercel built-in monitoring

### Health Check

```bash
# Check site is up
curl -I https://zentrack.nl
# Should return: HTTP/2 200

# Check redirect
curl -I https://www.zentrack.nl
# Should return: HTTP/2 301 with Location header
```

---

## 🔄 Git Workflow

### Branch Strategy

- **main** - Production branch (auto-deploys)
- **feature/*** - Feature branches
- **bugfix/*** - Bug fix branches

### Commit Message Format

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
security: Add security headers
perf: Improve performance
```

### Recent Commits (January 29, 2026)

```
9ffea0d - security: Add security headers via vercel.json
0420742 - security: Add comprehensive security headers
4ade3a7 - feat: Add Edge Middleware for www→apex redirect
```

---

## 🆘 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### SSL Certificate Issues

All SSL is handled by Vercel (Let's Encrypt). No action needed on your side. If issues:
1. Check Vercel dashboard
2. Verify domain DNS is pointing to Vercel
3. Contact Vercel support

---

## 📞 Support

- **GitHub Issues:** Report bugs or request features
- **Documentation:** See [CLAUDE.md](./CLAUDE.md) for architecture
- **Dashboard Issues:** Check [ZenTrack-Enterprise-Platform-17](https://github.com/Cooper3513CS9/ZenTrack-Enterprise-Platform-17)

---

## 📄 License

Copyright © 2025 ZenTrack B.V. All rights reserved.

---

## 🗺️ Related Repositories

- **Dashboard:** [ZenTrack-Enterprise-Platform-17](https://github.com/Cooper3513CS9/ZenTrack-Enterprise-Platform-17)
  - Lives at: https://app.zentrack.nl
  - Contains: Auth, dashboard, full app functionality

---

**Last Updated:** January 29, 2026
**Status:** 🟢 Production Ready (A+ Security Grade)
