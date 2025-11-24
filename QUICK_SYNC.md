# Quick Sync Guide - Gemini React → Next.js

**TL;DR:** Check for updates, port components, test locally, deploy.

---

## 📋 One-Minute Checklist

```bash
# 1. Check for Gemini updates
cd ~/zentrack-nextjs-marketing
./scripts/compare-gemini-components.sh

# 2. See what changed
git pull origin main

# 3. Port a component
./scripts/port-from-gemini.sh Hero.tsx

# 4. Manual review (2 min)
code components/Hero.tsx

# 5. Test locally
npm run dev
# Check http://localhost:3000

# 6. Deploy
git add components/Hero.tsx
git commit -m "feat: Port Hero from Gemini"
git push origin main
```

---

## ⚡ Quickest Way: Batch Port

For porting many components at once:

```bash
cd ~/zentrack-nextjs-marketing
./scripts/batch-port.sh
```

---

## 🔄 Daily Workflow (5-10 min per component)

```bash
# Morning: Check for updates
cd ~/zentrack-gemini-react && git pull

# See what changed in Gemini
git log --oneline -5

# See what needs porting in Next.js
cd ~/zentrack-nextjs-marketing
./scripts/compare-gemini-components.sh

# Port the most important component
./scripts/port-from-gemini.sh ComponentName.tsx

# Quick review (check for 'use client' if using hooks)
code components/ComponentName.tsx

# Test locally
npm run dev

# If good, deploy
git add . && git commit -m "feat: Port ComponentName" && git push
```

---

## 🚀 Deployment Checklist

After pushing:

- [ ] Wait 2-3 minutes
- [ ] Check https://zentrack.nl
- [ ] Click on the component you just ported
- [ ] Does it work correctly?
- [ ] Update GEMINI_SYNC_LOG.md

---

## ⚠️ Common Issues (& Fixes)

### Issue: Component not found
```
Error: Component not found in Gemini repo
```
**Fix:** Check spelling and run `./scripts/compare-gemini-components.sh` to see available components

### Issue: Need to add 'use client'
Component uses `useState`, `useEffect`, or event handlers:
```typescript
// Add this at the very top of the file:
'use client'

import { useState } from 'react'
// ...
```

### Issue: Images not showing
Component has `<img>` tags:
```typescript
// Replace
<img src="/image.jpg" alt="text" />

// With
<Image
  src="/image.jpg"
  alt="text"
  width={800}
  height={600}
/>
```

### Issue: Build fails
```bash
npm run build
# Check errors, fix TypeScript issues
```

---

## 📞 Help Commands

```bash
# See all components that need porting
./scripts/compare-gemini-components.sh

# Port single component
./scripts/port-from-gemini.sh ComponentName.tsx

# Port multiple components
./scripts/batch-port.sh

# Test locally
npm run dev

# Build check
npm run build

# Rollback a component
cp components/ComponentName.tsx.backup components/ComponentName.tsx

# Check what changed
git diff

# See Vercel deployment status
git log --oneline -5
```

---

## 📊 Progress Tracking

Update after each port:
```bash
# Edit this file
code docs/GEMINI_SYNC_LOG.md

# Add your component to "Recently Ported Components" section
```

---

## 🔗 Related Files

- `docs/CONVERSION_CHECKLIST.md` - Detailed conversion checklist
- `docs/GEMINI_SYNC_LOG.md` - Full sync history & tracking
- `scripts/compare-gemini-components.sh` - Component comparison tool
- `scripts/port-from-gemini.sh` - Main porting script
- `scripts/batch-port.sh` - Batch porting tool

---

## 💡 Tips

1. **Test locally first** - Always run `npm run dev` before deploying
2. **Start with high-priority** - Hero, Features, Pricing first
3. **Review each component** - Takes 2-5 minutes per component
4. **Commit often** - Small commits are easier to rollback
5. **Check production** - Always verify at https://zentrack.nl after deploy

---

## 🎯 Success =

✅ Component renders correctly locally
✅ npm run build passes
✅ Deploys without errors
✅ Works correctly in production
✅ No console errors or warnings
