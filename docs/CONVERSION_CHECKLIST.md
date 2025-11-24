# React → Next.js Conversion Checklist

## Overview

This document tracks the conversion of components from Gemini React (Vite) to Next.js format for production deployment at https://zentrack.nl.

---

## Components to Port

Run this command to see current status:
```bash
cd ~/zentrack-nextjs-marketing
./scripts/compare-gemini-components.sh
```

### High Priority (Homepage & Critical)
- [ ] Hero.tsx
- [ ] Features.tsx
- [ ] Pricing.tsx
- [ ] FAQ.tsx
- [ ] ROICalculator.tsx

### Medium Priority (Secondary Pages)
- [ ] ContactSection.tsx
- [ ] Header.tsx
- [ ] Footer.tsx
- [ ] WhatsAppDemo.tsx
- [ ] BlogSection.tsx

### Low Priority (Utility Components)
- [ ] ChartWidget.tsx
- [ ] AiCoachWidget.tsx
- [ ] MoodWidget.tsx
- [ ] TaskWidget.tsx

---

## Conversion Steps (Per Component)

### Quick Port
```bash
./scripts/port-from-gemini.sh ComponentName.tsx
```

### Detailed Conversion Checklist

For each component, verify:

#### 1. Imports & Routing
- [ ] No `react-router-dom` imports remaining
- [ ] No `useNavigate` hook (changed to `useRouter`)
- [ ] No `<Link to="">` (changed to `<Link href="">`)
- [ ] Added `import { useRouter } from "next/navigation"` if needed

#### 2. Client/Server Components
- [ ] Added `'use client'` directive if component uses:
  - [ ] `useState`, `useEffect`, `useCallback`, `useMemo`, `useReducer`
  - [ ] `useContext` (unless context is server)
  - [ ] Event handlers: `onClick`, `onChange`, `onSubmit`, etc.
  - [ ] Browser APIs: `window`, `document`, `localStorage`, `sessionStorage`
  - [ ] Browser events: scroll, resize, etc.

#### 3. Images
- [ ] Replaced `<img src="">` with `<Image src="">` from `next/image`
- [ ] Added `width` and `height` attributes to all `<Image>` tags
- [ ] Fixed relative image paths if needed

#### 4. API Calls
- [ ] All fetch calls work correctly
- [ ] No server-side API calls in client components (move to API routes)
- [ ] Environment variables use `NEXT_PUBLIC_` prefix if accessed from client

#### 5. Styling
- [ ] All CSS imports work
- [ ] Tailwind classes work (if using)
- [ ] CSS modules work (if using)
- [ ] No inline style issues

#### 6. Third-Party Libraries
- [ ] All imports resolve correctly
- [ ] No library conflicts between React and Next.js versions
- [ ] No SSR-incompatible libraries (handle with dynamic import if needed)

---

## Testing Checklist

After porting each component:

### Local Testing
```bash
# Start dev server
npm run dev

# Open http://localhost:3000 in browser
# Test the component:
- [ ] Renders correctly
- [ ] All interactive elements work
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] No console warnings
```

### Build Testing
```bash
# Check for build errors
npm run build

# Check production build
npm start
```

### Deployment Testing
```bash
# Commit and push
git add components/ComponentName.tsx
git commit -m "feat: Port ComponentName from Gemini"
git push origin main

# Check Vercel deployment
# - Wait 2-3 minutes
# - Visit https://zentrack.nl
# - Test the component in production
# - Check https://zentrack.nl/_next/... for any 404s
```

---

## Common Issues & Fixes

### Issue: "You're importing a component that needs useState"
```
Error: Cannot use hook in server component
```
**Fix:** Add `'use client'` at the top of the file
```typescript
'use client'

import { useState } from 'react'
// ... rest of component
```

### Issue: "Module not found: next/router"
```
Error: Failed to import next/router
```
**Fix:** Use `next/navigation` instead (App Router in Next.js 13+)
```typescript
// ❌ Wrong
import { useRouter } from 'next/router'

// ✅ Correct
import { useRouter } from 'next/navigation'
```

### Issue: "Images not loading / Image Error"
```
Error: Image Optimization API returned 404
```
**Fix:** Use proper `<Image>` component from `next/image`
```typescript
// ❌ Wrong
<img src="/images/hero.jpg" alt="Hero" />

// ✅ Correct
<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
/>
```

### Issue: "document is not defined"
```
Error: document is not defined (server-side rendering)
```
**Fix:** Add `'use client'` directive to enable client rendering
```typescript
'use client'

export function MyComponent() {
  // Now can use document, window, etc.
  useEffect(() => {
    const height = document.body.scrollHeight
  }, [])

  return <div>...</div>
}
```

### Issue: "window is not defined"
Same fix as "document is not defined" - add `'use client'`

### Issue: "Hydration mismatch"
```
Error: Text content did not match. Server: "..." Client: "..."
```
**Fix:** Check for client-only code in SSR-rendered components
- Move to `useEffect`
- Add `suppressHydrationWarning` as temporary fix
- Properly use `'use client'` directive

---

## Conversion Progress

| Component | Status | Date | Notes |
|-----------|--------|------|-------|
| Hero.tsx | [ ] Pending | - | - |
| Features.tsx | [ ] Pending | - | - |
| Pricing.tsx | [ ] Pending | - | - |
| FAQ.tsx | [ ] Pending | - | - |
| ROICalculator.tsx | [ ] Pending | - | - |

---

## Bulk Conversion

For converting many components at once:

```bash
# Interactive batch port
./scripts/batch-port.sh

# Or port individual components one by one
./scripts/port-from-gemini.sh ComponentName.tsx
```

---

## Verification Checklist

After all components are converted:

- [ ] All components render correctly locally
- [ ] npm run build completes without errors
- [ ] npm run dev works without errors
- [ ] All pages work in browser (localhost:3000)
- [ ] Mobile responsive design works
- [ ] All forms/interactions work
- [ ] Images load correctly
- [ ] No console errors or warnings
- [ ] Git status is clean (all changes committed)
- [ ] Pushed to GitHub main branch
- [ ] Vercel deployment shows green check
- [ ] https://zentrack.nl loads and works
- [ ] All components visible on production

---

## Quick Reference Commands

```bash
# Check what needs porting
./scripts/compare-gemini-components.sh

# Port single component
./scripts/port-from-gemini.sh Hero.tsx

# Port multiple components interactively
./scripts/batch-port.sh

# Test locally
npm run dev

# Build check
npm run build

# Deploy
git add .
git commit -m "feat: Port components from Gemini"
git push origin main
```

---

## Notes

- Backups are created automatically when porting (ComponentName.tsx.backup)
- Can always rollback: `cp components/ComponentName.tsx.backup components/ComponentName.tsx`
- Test each component locally before final deploy
- Check Vercel logs if deployment fails
- Update this checklist as components are ported
