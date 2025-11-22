# Migratieplan: Vite React SPA naar Next.js App Router

Dit document beschrijft de stappen om de huidige ZenTrack applicatie te migreren van een Vite Single Page Application (SPA) naar Next.js met de App Router.

## 1. Voorbereiding & Dependencies
- [ ] Verwijder Vite-gerelateerde dependencies (`vite`, `@vitejs/plugin-react`).
- [ ] Installeer Next.js dependencies: `npm install next react react-dom`.
- [ ] Installeer dev dependencies: `npm install -D @types/node @types/react @types/react-dom typescript postcss tailwindcss eslint eslint-config-next`.
- [ ] Update `package.json` scripts (`dev`, `build`, `start`).

## 2. Configuratie
- [ ] Maak `next.config.js` aan.
- [ ] Update `tsconfig.json` voor Next.js (include `.next`, `app` directory).
- [ ] Initialiseer Tailwind CSS opnieuw indien nodig (`npx tailwindcss init -p`) of hergebruik bestaande config als die er is (lijkt te ontbreken in root, mogelijk in submap of default).

## 3. Mappenstructuur & Routing (App Router)
We gaan van hash-routing (`#dashboard`) naar echte URL paden (`/dashboard`).

### Huidige Structuur -> Nieuwe Structuur
- `index.html` -> `app/layout.tsx` (Root Layout)
- `App.tsx` (Landing logic) -> `app/page.tsx`
- `components/auth/LoginPage.tsx` -> `app/auth/login/page.tsx`
- `components/auth/RegisterPage.tsx` -> `app/auth/register/page.tsx`
- `components/dashboard/DashboardLayout.tsx` -> `app/dashboard/layout.tsx`
- `components/dashboard/DashboardHome.tsx` -> `app/dashboard/page.tsx`
- `components/dashboard/InventoryView.tsx` -> `app/dashboard/inventory/page.tsx`
- `components/dashboard/OrdersView.tsx` -> `app/dashboard/orders/page.tsx`
- ... (en zo verder voor alle dashboard views)

## 4. Component Refactoring
- **'use client':** Omdat we van een SPA komen, zijn bijna alle bestaande componenten Client Components (gebruiken `useState`, `useEffect`). We moeten `'use client';` toevoegen bovenaan deze bestanden.
- **Navigatie:** Vervang `window.location.hash` logica met Next.js `Link` componenten en `useRouter` hook.
- **Afbeeldingen:** Vervang `<img>` tags met `next/image` voor optimalisatie (optioneel in eerste stap, maar aanbevolen).

## 5. Services & Data Fetching
- De huidige services (`geminiService`, `messageBirdService`) draaien nu in de browser.
- **Stap 1:** Laat ze client-side draaien (zoals nu) om de migratie simpel te houden.
- **Stap 2 (Later):** Verplaats gevoelige logica (API keys) naar Server Actions of API Routes.

## 6. Uitvoering
1.  Maak `app/` directory.
2.  Maak `app/layout.tsx` met basis HTML structuur en CSS import.
3.  Migreer `index.css` naar `app/globals.css`.
4.  Migreer pagina voor pagina, beginnend met de landingspagina.