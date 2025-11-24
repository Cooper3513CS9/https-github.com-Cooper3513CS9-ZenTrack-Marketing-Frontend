#!/bin/bash
# Convert React component to Next.js format
# Usage: ./convert-react-to-nextjs.sh path/to/Component.tsx

COMPONENT_FILE=$1

if [ -z "$COMPONENT_FILE" ]; then
  echo "Usage: ./convert-react-to-nextjs.sh path/to/Component.tsx"
  exit 1
fi

if [ ! -f "$COMPONENT_FILE" ]; then
  echo "❌ Error: File not found: $COMPONENT_FILE"
  exit 1
fi

echo "🔄 Converting $COMPONENT_FILE to Next.js format..."

# Backup original
BACKUP_FILE="${COMPONENT_FILE}.backup"
cp "$COMPONENT_FILE" "$BACKUP_FILE"
echo "📦 Backup saved: $BACKUP_FILE"

# Temporary file for sed operations
TEMP_FILE="${COMPONENT_FILE}.tmp"

# 1. Replace React Router with Next.js routing
sed 's/from "react-router-dom"/from "next\/link"/g' "$COMPONENT_FILE" > "$TEMP_FILE" && mv "$TEMP_FILE" "$COMPONENT_FILE"
sed "s/from 'react-router-dom'/from 'next\/link'/g" "$COMPONENT_FILE" > "$TEMP_FILE" && mv "$TEMP_FILE" "$COMPONENT_FILE"

# 2. Fix Link component (to → href)
sed 's/<Link to="/<Link href="/g' "$COMPONENT_FILE" > "$TEMP_FILE" && mv "$TEMP_FILE" "$COMPONENT_FILE"
sed "s/<Link to='/<Link href='/g" "$COMPONENT_FILE" > "$TEMP_FILE" && mv "$TEMP_FILE" "$COMPONENT_FILE"

# 3. Replace Link closing tags (no change needed, already correct)

# 4. Fix useNavigate → useRouter
sed 's/const navigate = useNavigate()/const router = useRouter()/g' "$COMPONENT_FILE" > "$TEMP_FILE" && mv "$TEMP_FILE" "$COMPONENT_FILE"
sed 's/navigate(/router.push(/g' "$COMPONENT_FILE" > "$TEMP_FILE" && mv "$TEMP_FILE" "$COMPONENT_FILE"

# 5. Replace useNavigate import
sed 's/useNavigate/useRouter/g' "$COMPONENT_FILE" > "$TEMP_FILE" && mv "$TEMP_FILE" "$COMPONENT_FILE"

# 6. Add next/navigation import if useRouter is used
if grep -q "useRouter" "$COMPONENT_FILE"; then
  if ! grep -q "from 'next/navigation'" "$COMPONENT_FILE" && ! grep -q 'from "next/navigation"' "$COMPONENT_FILE"; then
    # Add import after other imports
    sed '1i import { useRouter } from "next\/navigation";\n' "$COMPONENT_FILE" > "$TEMP_FILE" && mv "$TEMP_FILE" "$COMPONENT_FILE"
    echo "✅ Added: import { useRouter } from 'next/navigation'"
  fi
fi

echo ""
echo "✅ Conversion complete!"
echo ""
echo "⚠️  Manual review needed for:"
echo "  - 'use client' directive (if component uses hooks/state/browser APIs)"
echo "  - Image tags: Replace <img> with <Image> from next/image"
echo "  - API calls: Verify SSR vs CSR handling"
echo "  - Event handlers: Check onClick, onChange, etc."
echo "  - window/document: Add 'use client' if used"
echo ""
echo "📝 Edit: $COMPONENT_FILE"
echo "🔄 Rollback: cp $BACKUP_FILE $COMPONENT_FILE"
