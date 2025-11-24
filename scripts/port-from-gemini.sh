#!/bin/bash
# Port and convert component from Gemini React to Next.js
# Usage: ./port-from-gemini.sh ComponentName.tsx

COMPONENT=$1
GEMINI_DIR="$HOME/zentrack-gemini-react"
NEXTJS_DIR="$HOME/zentrack-nextjs-marketing"

if [ -z "$COMPONENT" ]; then
  echo "Usage: ./port-from-gemini.sh ComponentName.tsx"
  echo ""
  echo "Example: ./port-from-gemini.sh Hero.tsx"
  exit 1
fi

if [ ! -f "$GEMINI_DIR/components/$COMPONENT" ]; then
  echo "❌ Component not found in Gemini repo: $GEMINI_DIR/components/$COMPONENT"
  exit 1
fi

cd "$NEXTJS_DIR"

echo ""
echo "📥 Porting $COMPONENT from Gemini React to Next.js..."
echo "=================================================="
echo ""

# Step 1: Copy component from Gemini
echo "📋 Step 1: Copying component from Gemini..."
cp "$GEMINI_DIR/components/$COMPONENT" "$NEXTJS_DIR/components/$COMPONENT"
echo "✅ Component copied"

# Step 2: Convert to Next.js format
echo ""
echo "🔄 Step 2: Converting React code to Next.js format..."
./scripts/convert-react-to-nextjs.sh "components/$COMPONENT"

# Step 3: Make scripts executable
chmod +x ./scripts/*.sh

echo ""
echo "📝 Step 3: Manual review checklist:"
echo "===================================="
echo "Please check the component for:"
echo ""
echo "  [ ] 'use client' directive added if component uses:"
echo "      - useState, useEffect, useCallback, etc."
echo "      - Event handlers (onClick, onChange)"
echo "      - window, document, localStorage"
echo "      - Browser APIs"
echo ""
echo "  [ ] Import paths are correct"
echo "  [ ] No react-router-dom imports remaining"
echo "  [ ] Image tags replaced with <Image> from next/image"
echo "  [ ] API calls work (SSR vs CSR)"
echo ""
echo "📖 Edit: code components/$COMPONENT"
echo ""
echo "✅ Test locally: npm run dev"
echo "   Then check http://localhost:3000"
echo ""
echo "🚀 Deploy: git add . && git commit -m \"feat: Port $COMPONENT from Gemini\" && git push"
echo ""
echo "💾 Rollback: cp components/$COMPONENT.backup components/$COMPONENT"
