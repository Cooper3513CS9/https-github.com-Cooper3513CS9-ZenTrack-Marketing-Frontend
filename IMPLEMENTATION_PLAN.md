# 🚀 ZenTrack Frontend v1.0 - Implementatie Plan

## 📋 OVERZICHT

Dit plan beschrijft hoe je de Frontend repository consolideert naar **ZenTrack Frontend v1.0 (Next.js 16.0.3)** en production-ready maakt.

---

## FASE 1: CLEANUP & CONSOLIDATIE (1-2 dagen)

### 1.1 Verwijder Legacy Vite Files

**Bestanden om te verwijderen:**
```
- App.tsx (oude Vite entry point)
- index.tsx (oude React entry point)
- index.html (oude Vite HTML)
- vite.config.ts (oude Vite configuratie)
```

**Waarom:**
- Veroorzaken verwarring
- Niet meer nodig met Next.js
- Kunnen conflicten veroorzaken

### 1.2 Update package.json

**Verwijder Vite dependencies:**
```bash
npm uninstall vite @vitejs/plugin-react
```

**Zorg dat deze aanwezig zijn:**
```json
{
  "name": "zentrack-frontend",
  "version": "1.0.0",
  "description": "ZenTrack - AI-powered supply chain management for healthcare",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^16.0.3",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "@supabase/supabase-js": "^2.84.0",
    "@google/genai": "^1.30.0",
    "lucide-react": "^0.554.0",
    "recharts": "^3.4.1"
  }
}
```

### 1.3 Verwijder Vite Config Files

```bash
rm vite.config.ts
```

**Zorg dat deze aanwezig zijn:**
- `next.config.ts` ✅
- `tsconfig.json` ✅
- `tailwind.config.ts` ✅
- `postcss.config.mjs` ✅

### 1.4 Test Next.js Dev Server

```bash
npm run dev
```

**Verwachte output:**
```
> next dev
  ▲ Next.js 16.0.3
  - Local:        http://localhost:3000
  - Environments: .env.local
```

**Controleer:**
- [ ] Dev server start zonder errors
- [ ] Landing page laadt op http://localhost:3000
- [ ] Navigatie werkt (Login, Register, Dashboard)
- [ ] Geen console errors

---

## FASE 2: REPOSITORY CONSOLIDATIE (1 dag)

### 2.1 Rename Repository (GitHub)

**Huidige naam:** `https-github.com-Cooper3513CS9-Frontend-nieuw`
**Nieuwe naam:** `Frontend`

**Stappen:**
1. Ga naar GitHub repository settings
2. Klik "Rename"
3. Voer "Frontend" in
4. Klik "Rename"

### 2.2 Update Local Repository

```bash
# Update remote URL
git remote set-url origin https://github.com/Cooper3513CS9/Frontend.git

# Verify
git remote -v
```

### 2.3 Update README.md

**Vervang de huidige README met:**

```markdown
# 🏥 ZenTrack Frontend v1.0

**AI-powered supply chain management platform voor Nederlandse huisartsenpraktijken**

## 📊 Status
- **Version:** 1.0.0
- **Framework:** Next.js 16.0.3
- **Status:** Production Ready
- **Last Updated:** 22 November 2024

## 🚀 Quick Start

### Installatie
```bash
git clone https://github.com/Cooper3513CS9/Frontend.git
cd Frontend
npm install
```

### Environment Setup
```bash
# Create .env.local
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_GEMINI_API_KEY=your_key
```

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
Frontend/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── auth/              # Authentication pages
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   └── dashboard/         # Dashboard pages
│       ├── page.tsx
│       ├── inventory/page.tsx
│       ├── orders/page.tsx
│       └── ...
├── components/            # React components
│   ├── auth/             # Auth components
│   ├── dashboard/        # Dashboard components
│   ├── legal/            # Legal pages
│   └── ...               # Marketing components
├── services/            # API services
│   ├── geminiService.ts
│   └── messageBirdService.ts
├── lib/                 # Utilities
│   └── supabase.ts
├── types.ts             # TypeScript types
├── next.config.ts       # Next.js config
├── tsconfig.json        # TypeScript config
└── tailwind.config.ts   # Tailwind config
```

## 🎯 Features

### Marketing Site
- 15+ landing page components
- ROI Calculator
- Pricing section
- WhatsApp integration
- Mobile-responsive design

### Dashboard
- 8 dashboard views
- Inventory management
- Order tracking
- Team management
- Real-time updates (Supabase)

### AI Integration
- Google Gemini API
- Chat interface
- Smart suggestions

## 🔐 Authentication
- Supabase Auth (Email/Password)
- Protected routes
- Session management
- Password reset flow

## 📊 Data Integration
- Supabase PostgreSQL
- Real-time subscriptions
- Row-level security (RLS)

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.0.3 |
| UI | React 19.2.0 |
| Styling | Tailwind CSS v4 |
| Database | Supabase |
| AI | Google Gemini |
| Icons | Lucide React |
| Charts | Recharts |
| Language | TypeScript |

## 📝 Development Guidelines

### Adding a New Page
1. Create file in `app/[route]/page.tsx`
2. Add "use client" if using hooks
3. Import components from `/components`
4. Update navigation if needed

### Adding a New Component
1. Create file in `components/[category]/ComponentName.tsx`
2. Use TypeScript interfaces for props
3. Use Tailwind CSS for styling
4. Export as named export

### Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_GEMINI_API_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t zentrack-frontend .
docker run -p 3000:3000 zentrack-frontend
```

## 📚 Documentation

- [ANALYSIS_AND_ROADMAP.md](ANALYSIS_AND_ROADMAP.md) - Full development roadmap
- [MIGRATION_PLAN.md](MIGRATION_PLAN.md) - Vite to Next.js migration details
- [FRONTEND_ANALYSIS.md](FRONTEND_ANALYSIS.md) - Version analysis

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/name`
2. Make changes
3. Test: `npm run dev`
4. Commit: `git commit -m "feat: description"`
5. Push: `git push origin feature/name`
6. Create Pull Request

## 📞 Support

For issues or questions, contact the development team.

---

**© 2025 ZenTrack B.V.**
```

### 2.4 Update .gitignore

**Zorg dat deze aanwezig zijn:**
```
# Next.js
.next/
out/
build/

# Dependencies
node_modules/
.pnp
.pnp.js

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
```

### 2.5 Commit & Push

```bash
git add .
git commit -m "chore: consolidate to ZenTrack Frontend v1.0 (Next.js)

- Remove legacy Vite files (App.tsx, index.tsx, index.html, vite.config.ts)
- Remove Vite dependencies
- Update package.json with correct metadata
- Update README.md with v1.0 documentation
- Rename repository to 'Frontend'
- All features preserved in Next.js App Router"

git push origin main
```

---

## FASE 3: PRODUCTION SETUP (3-5 dagen)

### 3.1 Supabase Authentication

**Bestand:** `app/auth/login/page.tsx`

```typescript
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        
        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 border rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
```

### 3.2 Protected Routes Middleware

**Bestand:** `middleware.ts`

```typescript
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
```

### 3.3 Data Fetching Hooks

**Bestand:** `hooks/useInventory.ts`

```typescript
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface InventoryItem {
  id: string;
  name: string;
  stock: number;
  status: 'ok' | 'low' | 'critical';
  expiry_date: string;
}

export function useInventory() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const { data, error } = await supabase
          .from('inventory')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setItems(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch inventory');
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();

    // Real-time subscription
    const subscription = supabase
      .channel('inventory-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'inventory' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setItems([payload.new as InventoryItem, ...items]);
          } else if (payload.eventType === 'UPDATE') {
            setItems(items.map(item =>
              item.id === payload.new.id ? payload.new : item
            ));
          } else if (payload.eventType === 'DELETE') {
            setItems(items.filter(item => item.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { items, loading, error };
}
```

### 3.4 Error Handling & Loading States

**Bestand:** `components/dashboard/InventoryView.tsx`

```typescript
"use client";

import { useInventory } from '@/hooks/useInventory';
import { Skeleton } from '@/components/ui/Skeleton';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export function InventoryView() {
  const { items, loading, error } = useInventory();

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded">
        <h3 className="font-bold">Error loading inventory</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-32" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(item => (
        <div key={item.id} className="p-4 border rounded-lg">
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-sm text-gray-600">Stock: {item.stock}</p>
          <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-bold ${
            item.status === 'ok' ? 'bg-green-100 text-green-800' :
            item.status === 'low' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {item.status.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
}
```

---

## ✅ CHECKLIST

### Cleanup Phase
- [ ] Verwijder App.tsx
- [ ] Verwijder index.tsx
- [ ] Verwijder index.html
- [ ] Verwijder vite.config.ts
- [ ] Update package.json
- [ ] Verwijder Vite dependencies
- [ ] Test: `npm run dev` werkt

### Consolidation Phase
- [ ] Rename repository naar "Frontend"
- [ ] Update README.md
- [ ] Update .gitignore
- [ ] Commit & push

### Production Phase
- [ ] Implementeer Supabase auth
- [ ] Implementeer protected routes
- [ ] Implementeer data fetching hooks
- [ ] Implementeer error handling
- [ ] Test alle flows
- [ ] Deploy naar Vercel

---

## 🎯 VOLGENDE STAPPEN

1. **Vandaag:** Cleanup & consolidatie
2. **Morgen:** Repository rename
3. **Deze week:** Production setup
4. **Volgende week:** Testing & deployment

---

**Laatst bijgewerkt:** 22 November 2024
**Status:** Ready for Implementation
