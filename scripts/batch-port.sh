#!/bin/bash
# Port multiple components from Gemini React in batch mode
# Interactive - pauses between components for review

COMPONENTS=(
  "Hero.tsx"
  "Features.tsx"
  "Pricing.tsx"
  "FAQ.tsx"
  "ROICalculator.tsx"
  "Header.tsx"
  "Footer.tsx"
  "ContactSection.tsx"
)

echo "🚀 Batch Port: Gemini React → Next.js"
echo "====================================="
echo ""
echo "This script will port multiple components interactively."
echo "You can review and test each component before moving to the next."
echo ""
echo "Components to port:"
for i in "${!COMPONENTS[@]}"; do
  echo "  $((i+1)). ${COMPONENTS[$i]}"
done
echo ""
echo "Press Enter to start, or Ctrl+C to cancel..."
read

for comp in "${COMPONENTS[@]}"; do
  echo ""
  echo "========================================"
  echo "Porting $comp..."
  echo "========================================"

  if [ ! -f "$HOME/zentrack-gemini-react/components/$comp" ]; then
    echo "⚠️  Skipping $comp (not found in Gemini)"
    continue
  fi

  ./scripts/port-from-gemini.sh "$comp"

  echo ""
  echo "========================================"
  echo "✅ $comp ported"
  echo "========================================"
  echo ""
  echo "📝 Next steps:"
  echo "  1. Review: code components/$comp"
  echo "  2. Test locally: npm run dev"
  echo "  3. Fix any issues"
  echo "  4. When ready, press Enter to continue to next component"
  echo ""
  echo "Press Enter to continue to next component, or Ctrl+C to stop..."
  read
done

echo ""
echo "✅ Batch port complete!"
echo ""
echo "📝 Next steps:"
echo "  1. Review all changes: git diff"
echo "  2. Test everything locally: npm run dev"
echo "  3. Run: npm run build (to check for build errors)"
echo "  4. Commit all: git add . && git commit -m \"feat: Port multiple components from Gemini\""
echo "  5. Deploy: git push origin main"
echo ""
echo "🌐 Check production: https://zentrack.nl (after 2-3 minutes)"
