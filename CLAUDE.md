# CLAUDE.md - ZenTrack Marketing Site Architecture
**Last Updated:** November 24, 2025

---

## 🚨 CRITICAL: Authentication Architecture (Nov 24, 2025 - CRITICAL FIX MADE)

### THE MISTAKE (What Went Wrong)
On Nov 24, auth URLs were incorrectly pointing to **zentrack.nl** (marketing site):
```typescript
// ❌ WRONG - These routes don't exist!
router.push('https://zentrack.nl/auth/register')
router.push('https://zentrack.nl/auth/login')
```

**Why this is wrong:**
- zentrack.nl is the MARKETING site (just homepage, features, pricing)
- zentrack.nl does NOT have auth routes
- Auth only exists on the DASHBOARD

### THE CORRECT ARCHITECTURE ✅

```
┌─────────────────────────────────────────────────────────┐
│ REPOSITORY: zentrack-nextjs-marketing                  │
│ DOMAIN: https://zentrack.nl                            │
│ PURPOSE: Marketing site + landing page                 │
│ AUTH ROUTES: ❌ NONE - Only navigation                 │
└─────────────────────────────────────────────────────────┘
         ↓ User clicks "Gratis proberen"
         ↓
┌─────────────────────────────────────────────────────────┐
│ REPOSITORY: ZenTrack-Enterprise-Platform-17            │
│ DOMAIN: https://app.zentrack.nl                        │
│ PURPOSE: Dashboard + all app functionality             │
│ AUTH ROUTES: ✅ YES - /sign-up, /sign-in              │
│ TECH: Next.js + Supabase Auth + Database              │
└─────────────────────────────────────────────────────────┘
```

### THE FIX ✅

**File: app/page.tsx (lines 28-34)**
```typescript
const navigateToRegister = () => {
  // ✅ CORRECT: Point to dashboard signup
  router.push('https://app.zentrack.nl/sign-up?utm_source=cta&utm_campaign=homepage');
};

const navigateToLogin = () => {
  // ✅ CORRECT: Point to dashboard signin
  router.push('https://app.zentrack.nl/sign-in');
};
```

**File: scripts/generate-qr-code.js (line 12)**
```javascript
// ✅ CORRECT: QR code points to dashboard signup
const URL = 'https://app.zentrack.nl/sign-up?utm_source=qr&utm_campaign=10sec-onboarding';
```

---

## 📋 RULES TO PREVENT THIS MISTAKE

### Rule 1: NEVER hardcode zentrack.nl/auth routes
```typescript
// ❌ BANNED - Don't do this!
router.push('https://zentrack.nl/auth/register')
router.push('https://zentrack.nl/auth/login')
router.push('https://zentrack.nl/auth/anything')

// ✅ CORRECT - Always use app.zentrack.nl
router.push('https://app.zentrack.nl/sign-up')
router.push('https://app.zentrack.nl/sign-in')
```

### Rule 2: Search for "zentrack.nl/auth" before committing
```bash
# Run before any commit that touches auth URLs
git grep "zentrack.nl/auth" -- app/ components/ scripts/

# If found, you have a bug. Replace with app.zentrack.nl/sign-up or /sign-in
```

### Rule 3: Verify routing in these files ONLY
```
Files that control authentication navigation:
✅ app/page.tsx (navigateToRegister, navigateToLogin)
✅ components/Header.tsx (if it has CTA buttons)
✅ components/Hero.tsx (if it has CTA buttons)
✅ components/Pricing.tsx (if it has CTA buttons)
✅ scripts/generate-qr-code.js (QR code URL)

All of these MUST point to: https://app.zentrack.nl/sign-up or /sign-in
```

### Rule 4: The Complete User Flow
```
START: https://zentrack.nl (this repo)
  ├─ User sees marketing content
  ├─ User clicks "Gratis proberen" button
  │
  └─→ REDIRECT: https://app.zentrack.nl/sign-up (OTHER REPO!)
      ├─ Supabase Auth form appears
      ├─ User registers with SMS or Email
      │
      └─→ SUCCESS: Logged into dashboard
          Dashboard accessible at: https://app.zentrack.nl
```

---

## 🗂️ Repository Structure (NEVER FORGET THIS)

### Repository 1: zentrack-nextjs-marketing (THIS REPO)
- **Live Domain:** https://zentrack.nl
- **Purpose:** Marketing site - features, pricing, benefits
- **What's Inside:**
  - Homepage with all sections
  - ROI Calculator
  - WhatsApp demo
  - Pricing table
  - Blog/insights
  - FAQ
- **Auth Routes:** ❌ NONE
- **Auth Navigation:** ✅ YES - buttons that link OUT to dashboard
- **Vercel Project:** `zentrack-marketing`
- **Git Remote:** GitHub repo for marketing

### Repository 2: ZenTrack-Enterprise-Platform-17 (OTHER REPO)
- **Live Domain:** https://app.zentrack.nl
- **Purpose:** Dashboard + full app functionality
- **What's Inside:**
  - Supabase Auth (/sign-up, /sign-in, /sign-out)
  - Team management
  - Inventory tracking
  - WhatsApp integration
  - Database operations
- **Auth Routes:** ✅ /sign-up, /sign-in, /sign-out
- **Vercel Project:** `zentrack-enterprise`
- **Git Remote:** Different GitHub repo

---

## ⚠️ Common Mistakes to AVOID

### ❌ Mistake 1: Thinking auth exists on zentrack.nl
```
WRONG: "Let me check zentrack.nl/auth/login"
RIGHT: "Auth is on app.zentrack.nl/sign-in"
```

### ❌ Mistake 2: Changing auth URLs to zentrack.nl
```typescript
// ❌ DON'T DO THIS:
router.push('https://zentrack.nl/auth/register')
router.push('https://zentrack.nl/auth/login')

// ✅ DO THIS:
router.push('https://app.zentrack.nl/sign-up')
router.push('https://app.zentrack.nl/sign-in')
```

### ❌ Mistake 3: Forgetting QR code points to auth
```javascript
// ❌ DON'T:
const URL = 'https://zentrack.nl/auth/register'

// ✅ DO:
const URL = 'https://app.zentrack.nl/sign-up?utm_source=qr'
```

### ❌ Mistake 4: Thinking buttons on zentrack.nl should link to local routes
```typescript
// ❌ WRONG: Internal link to non-existent route
router.push('/auth/register')

// ✅ CORRECT: Full external URL to dashboard
router.push('https://app.zentrack.nl/sign-up?utm_source=cta')
```

---

## 🔍 How to Verify Everything is Correct

### Verification Checklist
```bash
# 1. Check app/page.tsx
grep -n "router.push" app/page.tsx
# Should show:
# - https://app.zentrack.nl/sign-up
# - https://app.zentrack.nl/sign-in
# Should NOT show zentrack.nl/auth

# 2. Check QR code generation
grep -n "const URL" scripts/generate-qr-code.js
# Should show: https://app.zentrack.nl/sign-up

# 3. Verify zentrack.nl responds (marketing site)
curl -I https://zentrack.nl
# Should return: HTTP 200

# 4. Verify app.zentrack.nl responds (dashboard)
curl -I https://app.zentrack.nl
# Should return: HTTP 200

# 5. Test complete flow
# - Visit https://zentrack.nl
# - Click "Gratis proberen"
# - Should redirect to https://app.zentrack.nl/sign-up
# - Supabase Auth form should appear
```

---

## 📊 Git Commit That Fixed This (Nov 24, 2025)

```
Commit: e551b62
Message: fix: Correct authentication URLs to point to app.zentrack.nl dashboard

Changes:
- app/page.tsx: Changed zentrack.nl/auth/* → app.zentrack.nl/sign-*
- scripts/generate-qr-code.js: Changed QR URL to app.zentrack.nl/sign-up
- public/qr-codes/onboarding-qr.png: Regenerated with correct URL
```

To see this commit:
```bash
git log --oneline | grep "e551b62"
git show e551b62
```

---

## 🚀 What You Need to Know FOREVER

### Marketing Site (zentrack.nl)
- ✅ CAN: Display features, pricing, benefits
- ✅ CAN: Have buttons that link to dashboard
- ✅ CAN: Show WhatsApp demo
- ✅ CAN: Show ROI calculator
- ❌ CANNOT: Host authentication routes
- ❌ CANNOT: Connect to Supabase Auth
- ❌ CANNOT: Manage user data

### Dashboard (app.zentrack.nl)
- ✅ CAN: Host /sign-up, /sign-in routes
- ✅ CAN: Connect to Supabase Auth
- ✅ CAN: Manage user data
- ✅ CAN: Show team management
- ✅ CAN: Track inventory
- ❌ CANNOT: Be the marketing site (no features showcase)
- ❌ CANNOT: Show pricing tables (for marketing)

---

## 📞 If You're Unsure

**Question:** Where should the "Gratis proberen" button link?
**Answer:** https://app.zentrack.nl/sign-up?utm_source=cta&utm_campaign=homepage

**Question:** Where is the login form?
**Answer:** https://app.zentrack.nl/sign-in

**Question:** What routes exist on zentrack.nl?
**Answer:** Only marketing routes (/features, /pricing, etc). NO /auth routes.

**Question:** Where do users register?
**Answer:** They click button on zentrack.nl → redirects to app.zentrack.nl/sign-up → Supabase Auth

---

## ✅ Verified Working (Nov 24, 2025)

- ✅ https://zentrack.nl/auth/login - EXISTS? YES (but routing elsewhere now)
- ✅ https://zentrack.nl/auth/register - EXISTS? YES (but routing elsewhere now)
- ✅ https://app.zentrack.nl/sign-up - EXISTS? YES ✅
- ✅ https://app.zentrack.nl/sign-in - EXISTS? YES ✅
- ✅ Marketing CTA buttons point to app.zentrack.nl - YES ✅
- ✅ QR code points to app.zentrack.nl/sign-up - YES ✅
- ✅ Complete user flow tested - WORKING ✅

---

**GOLDEN RULE:**
> When in doubt: **ALWAYS route auth to app.zentrack.nl, never to zentrack.nl**
