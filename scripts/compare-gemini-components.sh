#!/bin/bash
# Compare Gemini React components with Next.js components
# Shows which components are in sync and which need porting

GEMINI_DIR="$HOME/zentrack-gemini-react"
NEXTJS_DIR="$HOME/zentrack-nextjs-marketing"

if [ ! -d "$GEMINI_DIR" ]; then
  echo "❌ Error: Gemini React directory not found at $GEMINI_DIR"
  exit 1
fi

if [ ! -d "$NEXTJS_DIR" ]; then
  echo "❌ Error: Next.js marketing directory not found at $NEXTJS_DIR"
  exit 1
fi

echo "📊 Comparing Gemini React vs Next.js Components..."
echo ""

# First, pull latest from Gemini
echo "🔄 Pulling latest updates from Gemini React..."
cd "$GEMINI_DIR"
git pull origin main > /dev/null 2>&1
echo "✅ Gemini React updated"
echo ""

# Show latest Gemini commits
echo "📝 Latest Gemini Updates:"
echo "========================"
cd "$GEMINI_DIR"
git log --oneline -5
echo ""

# Compare components
echo "📦 Component Status:"
echo "==================="

IDENTICAL_COUNT=0
DIFFERENT_COUNT=0
NEW_COUNT=0

cd "$GEMINI_DIR/components"
find . -name "*.tsx" -type f | sort | while read component; do
  comp_name=$(basename "$component")
  comp_path=$(dirname "$component")

  # Check if component exists in Next.js
  if [ -f "$NEXTJS_DIR/components/$comp_name" ]; then
    # Component exists in Next.js, check if different
    if diff -q "$GEMINI_DIR/components/$comp_name" "$NEXTJS_DIR/components/$comp_name" >/dev/null 2>&1; then
      echo "✅ $comp_name - In sync"
      ((IDENTICAL_COUNT++))
    else
      echo "🔄 $comp_name - NEEDS UPDATE"
      ((DIFFERENT_COUNT++))
    fi
  else
    echo "🆕 $comp_name - NEW (not in Next.js yet)"
    ((NEW_COUNT++))
  fi
done

echo ""
echo "📊 Summary:"
echo "==========="
echo "✅ In sync: $IDENTICAL_COUNT"
echo "🔄 Need update: $DIFFERENT_COUNT"
echo "🆕 New components: $NEW_COUNT"
echo ""
echo "To port a component: ./scripts/port-from-gemini.sh ComponentName.tsx"
