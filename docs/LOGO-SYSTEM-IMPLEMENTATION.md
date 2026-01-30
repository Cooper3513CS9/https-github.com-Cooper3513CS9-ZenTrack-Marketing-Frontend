# ZenTrack Logo System - Implementation Guide

**Status:** ✅ Production Ready | **Last Updated:** January 30, 2025

---

## 📋 Quick Reference

| Context | Size | Tailwind Class | File | Usage |
|---------|------|-----------------|------|-------|
| Header Logo | 40px | `w-10 h-10` | `zentrack-logo-light.png` | Marketing + Dashboard |
| Sidebar Logo | 40px | `w-10 h-10` | `zentrack-logo-light.png` | Dashboard navigation |
| Favicon | 32px | N/A | `favicon.svg` | Browser tab (Zen Circle) |
| Hero Section | 40-48px | `w-10-12 h-10-12` | `zentrack-logo-light.png` | Landing page display |

---

## 🎨 The ZenTrack Logo - What It Represents

### Official Design
- **Shape:** Emerald green square with rounded corners
- **Interior:** White 3D box/package with checkmark on top
- **Colors:** Emerald-600 (#059669) - professional healthcare branding
- **Proportions:** Square 1:1 aspect ratio (ALWAYS maintain this)

### Brand Philosophy
> "ZenTrack is een operationele controlelaag voor zorginkoop. Het merk staat voor controle, bewijs, afsluiting en rust."

**Translation:** ZenTrack is an operational control layer for healthcare procurement. The brand stands for control, proof, closure, and peace.

The logo communicates:
- **Authority** - not just a helpful tool
- **Discipline & Governance** - infrastructure thinking, not feature-based
- **Professional** - formal positioning in healthcare context
- **Control** - the package with checkmark symbolizes verification and completion

---

## 🛠️ Implementation Details

### Logo Component Architecture

Both the marketing site and dashboard use the same component pattern:

```typescript
import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white' | 'avatar';
}

export const Logo: React.FC<LogoProps> = ({
  className = "w-10 h-10",
  variant = 'default'
}) => {
  const logoSrc = '/zentrack-logo-light.png';

  return (
    <Image
      src={logoSrc}
      alt="ZenTrack Logo - Healthcare Procurement Control Layer"
      width={40}
      height={40}
      className={className}
      priority
    />
  );
};
```

### Key Technical Points

#### 1. **Sizing: width/height vs className**
- **`width={40} height={40}`** - Fixed pixel dimensions enforced by Next.js Image
- **`className="w-10 h-10"`** - Tailwind class for CSS (40px = w-10)
- Both MUST match to avoid distortion
- Current: **40px for all contexts** (matches old SVG viewBox proportions)

#### 2. **Why 40px Not 32px?**
- Original SVG used `viewBox="0 0 40 40"`
- This gave the logo visual weight next to text like "ZenTrack"
- 32px (w-8) was too small - didn't match visual hierarchy
- **40px provides correct visual balance** in headers and navigation

#### 3. **Image Optimization**
- `priority={true}` - Loads logo before other images (above-the-fold)
- Next.js auto-optimizes PNG for different screen sizes
- Responsive `srcset` generated automatically
- No manual optimization needed

#### 4. **Proportional Scaling (Per Brandbook)**
- Always use integer multiples: 40px, 48px, 56px, 64px
- NEVER stretch or distort (width ≠ height)
- The Image component enforces aspect ratio via width/height props
- `className` only adds padding, never changes aspect ratio

---

## 📁 File Locations

### Marketing Site (`zentrack-nextjs-marketing`)
```
components/Logo.tsx                    ← React component (use this!)
public/zentrack-logo-light.png         ← Official brandbook logo
public/zentrack-logo-dark.png          ← Dark variant (backup)
public/favicon.svg                     ← Browser tab icon (Zen Circle)
```

### Dashboard (`ZenTrack-Enterprise-Platform-17`)
```
components/logo.tsx                    ← React component (use this!)
public/zentrack-logo-light.png         ← Official brandbook logo
public/zentrack-logo-dark.png          ← Dark variant (backup)
public/favicon.svg                     ← Browser tab icon (Zen Circle)
```

---

## 🎯 Usage Examples

### In Header (Marketing Site & Dashboard)
```typescript
<div className="flex items-center gap-2">
  <Logo className="w-10 h-10" />
  <span className="text-xl font-bold text-slate-900">ZenTrack</span>
</div>
```
**Result:** Logo (40px) + "ZenTrack" text, properly balanced

### In Sidebar (Dashboard Navigation)
```typescript
<div className="flex items-center gap-3 p-4">
  <Logo className="w-10 h-10" />
  <span className="font-semibold">Praktijk</span>
</div>
```
**Result:** Navigation header with logo and praktijk name

### Responsive Sizing
```typescript
// Mobile: smaller
<Logo className="w-9 h-9 md:w-10 h-10" />

// Never do this (distorts logo!)
<Logo className="w-10 h-16" />  ❌ WRONG - stretches vertically
```

---

## ✅ Brandbook Compliance Rules

### 1. Proportions
✅ **CORRECT:** Always square (40x40, 48x48, 64x64, etc.)
❌ **WRONG:** Rectangle (40x50, 32x48, etc.)

**How it's enforced:**
```typescript
width={40}  // Must equal
height={40} // this always
```

### 2. Colors
✅ **CORRECT:** Emerald-600 (#059669)
❌ **WRONG:** Teal-700 (#0f766e) - old dashboard mistake, now fixed

### 3. File Format
✅ **CORRECT:** Use PNG files as delivered: `zentrack-logo-light.png`
❌ **WRONG:** Recreate as SVG, modify colors, add effects

### 4. Scaling Rule
✅ **CORRECT:**
```
Breedte = 40px → Hoogte = 40px ✓
Breedte = 48px → Hoogte = 48px ✓
```

❌ **WRONG:**
```
Breedte = 40px → Hoogte = 35px ✗ (distorted)
```

### 5. No Distortion
The Next.js Image component **automatically enforces** the aspect ratio via `width` and `height` props. You can't accidentally stretch it.

---

## 🚨 Common Mistakes & Fixes

### Mistake 1: Logo Too Small in Header
```typescript
// ❌ WRONG - 32px is too small
<Logo className="w-8 h-8" />

// ✅ CORRECT - 40px matches visual weight
<Logo className="w-10 h-10" />
```

### Mistake 2: Wrong Color in Dashboard
```typescript
// ❌ WRONG - teal-700 (old version)
className="bg-teal-700"

// ✅ CORRECT - emerald-600 (brandbook)
className="bg-emerald-600"
```
**Note:** This was already fixed in the Logo component itself.

### Mistake 3: Trying to Import PNG Directly
```typescript
// ❌ WRONG - don't do this
import logo from '/zentrack-logo-light.png'

// ✅ CORRECT - use the Logo component
import { Logo } from '@/components/Logo'
<Logo className="w-10 h-10" />
```

### Mistake 4: Stretching the Logo
```typescript
// ❌ WRONG - distorts logo
<Logo className="w-20 h-10" />

// ✅ CORRECT - maintains proportions
<Logo className="w-10 h-10" />
// or
<Logo className="w-20 h-20" />
```

### Mistake 5: Adding Extra Styling
```typescript
// ❌ WRONG - conflicts with Image sizing
<Logo className="w-10 h-10" style={{ width: '50px' }} />

// ✅ CORRECT - let className handle sizing
<Logo className="w-12 h-12" />
```

---

## 📊 Where Logos Appear

### Marketing Site (www.zentrack.nl)
1. **Header** - Logo + "ZenTrack" text (40px)
2. **Footer** - Logo + company info (40px)
3. **Hero Section** - Large logo display (48px)
4. **Feature Cards** - Small logos (32px) - *check usage*
5. **Navigation** - Mobile menu icon (40px)
6. **Favicon** - Browser tab (32px SVG Zen Circle)

### Dashboard (app.zentrack.nl)
1. **Sidebar** - Navigation header (40px)
2. **App Header** - Top navigation bar (40px)
3. **Favicon** - Browser tab (32px SVG Zen Circle)

---

## 🔄 Responsive Sizing Strategy

### Mobile First Approach
```typescript
// Small screens: normal size
// Medium+ screens: slightly larger
<Logo className="w-9 h-9 sm:w-10 h-10 lg:w-11 h-11" />
```

### Never Use Different Width/Height
```typescript
// ❌ WRONG - responsive distortion
<Logo className="w-8 h-8 md:w-12 h-10" />

// ✅ CORRECT - proportions scale together
<Logo className="w-8 h-8 md:w-12 h-12" />
```

---

## 🧪 Testing Checklist

### Visual Testing
- [ ] Logo appears in header (40px, balanced with text)
- [ ] Logo in sidebar looks professional
- [ ] Logo visible on mobile (doesn't overflow)
- [ ] Colors are correct emerald green (not teal)
- [ ] Logo is square (not stretched)

### Responsive Testing
- [ ] Logo scales at md, lg breakpoints
- [ ] Text next to logo stays aligned
- [ ] No layout shift when logo loads
- [ ] Mobile header doesn't look cramped

### Brandbook Compliance
- [ ] Logo file is `zentrack-logo-light.png` (official)
- [ ] Sizing uses width={40} height={40}
- [ ] Tailwind className matches (w-10 h-10)
- [ ] No custom styling overrides sizing
- [ ] No color changes (stays emerald-600)

---

## 🔧 Implementation for Developers

### When Adding Logo to a New Location

1. **Import the component:**
   ```typescript
   import { Logo } from '@/components/Logo'
   ```

2. **Use with proper sizing:**
   ```typescript
   <Logo className="w-10 h-10" />
   ```

3. **Context matters:**
   - **Header:** w-10 h-10 (40px standard)
   - **Sidebar:** w-10 h-10 (40px standard)
   - **Hero:** w-12 h-12 or w-16 h-16 (featured)
   - **Small accent:** w-6 h-6 or w-8 h-8

4. **Test for:**
   - Square shape (no distortion)
   - Emerald green color
   - Proper alignment with adjacent text
   - No layout shift on load

---

## 📚 Related Documentation

- **Brandbook:** `~/Downloads/ZenTrack_Final_Brand_Package_CORRECTED/`
- **Design System:** See `components/Logo.tsx` code comments
- **Colors:** Emerald-600 (#059669) in Tailwind config

---

## ❓ FAQ

**Q: Can I use the dark variant logo?**
A: Yes, `zentrack-logo-dark.png` exists but both variants have the same emerald green background. Use based on design needs, but current implementation uses light variant everywhere.

**Q: What if I need a different size?**
A: Use multiples of 8px for Tailwind consistency: 32px (w-8), 40px (w-10), 48px (w-12), 56px (w-14), 64px (w-16)

**Q: Can I change the colors?**
A: No. The brandbook requires emerald-600 (#059669). The Logo component uses the official PNG file.

**Q: The logo looks small, what do I do?**
A: Check your Tailwind class. If you're using `w-8 h-8`, change to `w-10 h-10` (40px instead of 32px).

**Q: Can I use the logo with white background?**
A: Yes, the emerald green logo works on white backgrounds. The PNG has built-in transparency handling.

---

## 🎯 Summary

The ZenTrack logo system is designed for **consistency, professionalism, and ease of use.**

**Key Points:**
- Use the `Logo` component everywhere (never import PNG directly)
- Always use `w-10 h-10` (40px) as default size
- Maintain square proportions (never stretch)
- Keep the emerald-600 color (official brandbook)
- Trust Next.js Image for optimization

**Status:** ✅ Implemented and deployed to both marketing site and dashboard

