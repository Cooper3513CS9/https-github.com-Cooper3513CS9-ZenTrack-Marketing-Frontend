# QR Code Setup - DirectOnboarding Component

**Status:** ✅ Complete - QR code generated and integrated

---

## What Was Done

### 1. QR Code Generated
```
Location: public/qr-codes/onboarding-qr.png
URL Encoded: https://zentrack.nl/sign-up?utm_source=qr&utm_campaign=10sec-onboarding
Size: 320x320 pixels (400x400 on generation)
Error Correction: High (H level)
```

### 2. DirectOnboarding Component Updated
**File:** `components/DirectOnboarding.tsx`

**Changes:**
- ✅ Removed QrCode icon import
- ✅ Added Image import from 'next/image'
- ✅ Replaced icon mockup with real QR code image
- ✅ Added responsive image sizing (320x320)
- ✅ Maintained scan effect line animation
- ✅ Added 'use client' directive (already present)

### 3. npm Script Added
**File:** `package.json`

```json
{
  "scripts": {
    "generate:qr": "node scripts/generate-qr-code.js"
  }
}
```

---

## How It Works

### DirectOnboarding Component Flow

```
User visits https://zentrack.nl
  ↓
DirectOnboarding section shows
  ↓
Real QR code displays (/qr-codes/onboarding-qr.png)
  ↓
User scans with phone camera
  ↓
Redirects to: https://zentrack.nl/sign-up?utm_source=qr&utm_campaign=10sec-onboarding
  ↓
Sign-up form with utm_source=qr parameter
  ↓
Can track "QR code" signups separately in analytics
```

---

## QR Code Details

### Image File
```
Location: public/qr-codes/onboarding-qr.png
Format: PNG
Size: 4.3 KB
Dimensions: 320x320 (recommended) to 400x400 (original)
Quality: 95%
Compression: Good
```

### Encoded URL
```
https://zentrack.nl/sign-up?utm_source=qr&utm_campaign=10sec-onboarding
```

**UTM Parameters:**
- `utm_source=qr` - Traffic came from QR code
- `utm_campaign=10sec-onboarding` - Campaign identifier

### Error Correction
- **Level:** H (High)
- **Capability:** Can restore up to 30% of data if damaged
- **Benefit:** Works even if QR code is partially obscured/printed with logo

---

## To Regenerate QR Code

If you need to change the URL or regenerate:

```bash
# Edit the URL in the script
nano scripts/generate-qr-code.js

# Change line 12:
const URL = 'https://new-url-here';

# Then generate new QR code
npm run generate:qr
```

---

## Updating the Component

The component is already integrated. To use a different QR code:

1. Generate new QR code:
   ```bash
   npm run generate:qr
   ```

2. File will be saved to: `public/qr-codes/onboarding-qr.png`

3. Component automatically uses it (no code changes needed)

---

## Testing

### Test Locally
```bash
npm run dev
# Visit http://localhost:3000
# Desktop view should show QR code on right
# Mobile view shows "Open WhatsApp Direct" button instead
```

### Scan QR Code
```
Use phone camera or QR code reader app
Should redirect to: https://zentrack.nl/sign-up?utm_source=qr&utm_campaign=10sec-onboarding
```

### Verify Production
```
After deploying:
1. Visit https://zentrack.nl (production)
2. QR code should be visible on desktop
3. Scan with phone
4. Should go to sign-up page
5. URL bar should show utm_source=qr parameter
```

---

## Analytics Integration

### Track QR Code Signups

Once you integrate analytics (Google Analytics, Mixpanel, etc.):

```javascript
// The utm_source parameter is automatically tracked
utm_source=qr → Traffic Source: "qr"
utm_campaign=10sec-onboarding → Campaign: "10sec-onboarding"
```

### Example: Google Analytics Filter
```
Filter: utm_source = "qr"
Shows: All signups coming from QR code scans
```

---

## Modify QR Code

### Change the URL
```bash
# Edit scripts/generate-qr-code.js
const URL = 'https://new-url-here';

# Regenerate
npm run generate:qr
```

### Change the Design
The current design uses:
- Size: 400x400 pixels
- Colors: Black (#000000) on White (#FFFFFF)
- Margin: 2px around
- Error Correction: High (H)

To modify (edit `scripts/generate-qr-code.js`):

```javascript
const qrOptions = {
  errorCorrectionLevel: 'H',  // L, M, Q, H
  type: 'image/png',
  quality: 0.95,              // 0-1
  margin: 2,                   // pixels
  width: 400,                  // size in pixels
  color: {
    dark: '#000000',          // QR code color
    light: '#FFFFFF'          // background color
  }
};
```

---

## Files Involved

```
public/qr-codes/
  └── onboarding-qr.png       ← Generated QR code image

components/
  └── DirectOnboarding.tsx     ← Component that displays QR

scripts/
  └── generate-qr-code.js     ← Script to generate/regenerate

docs/
  └── QR_CODE_SETUP.md        ← This file
```

---

## Mobile Experience

On mobile devices, the QR card is hidden and users see:
- Large green WhatsApp button
- SMS login fallback

This ensures good mobile UX while still showing QR on desktop.

---

## Important Notes

1. **QR Code is Static** - Generated once, used as image file
2. **No Dynamic Generation** - Not generated on each page load (for performance)
3. **Always Accessible** - Works offline after first load
4. **Easy to Update** - Run `npm run generate:qr` to regenerate with new URL

---

## Troubleshooting

### QR code not showing
```bash
# Check file exists
ls public/qr-codes/onboarding-qr.png

# Regenerate if needed
npm run generate:qr

# Restart dev server
npm run dev
```

### QR code doesn't scan
```bash
# Check URL is correct in script
cat scripts/generate-qr-code.js | grep const URL

# Test URL works
curl https://zentrack.nl/sign-up

# Regenerate QR code
npm run generate:qr
```

### Build issues
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

---

## Success Checklist

- [x] QR code generated
- [x] Component updated
- [x] npm script added
- [ ] Tested locally (npm run dev)
- [ ] Tested on production (https://zentrack.nl)
- [ ] Scanned with phone camera
- [ ] Verified redirect to sign-up page
- [ ] Analytics configured (if applicable)

---

## Related Files

- `IMPLEMENTATION_SUMMARY.md` - Overall implementation summary
- `QUICK_SYNC.md` - Quick reference guide
- `CONVERSION_CHECKLIST.md` - Component conversion checklist
