
# 🏥 ZenTrack - Intelligent Voorraadbeheer

ZenTrack is een AI-powered supply chain management platform voor Nederlandse huisartsenpraktijken. Het automatiseert voorraad, inkoop en compliance via een dashboard en WhatsApp-integratie.

> **Status:** Production Ready (v1.0)
> **Stack:** React (Vite), TypeScript, TailwindCSS, Supabase, Gemini AI / Mistral

## 🚀 Quick Start

### Installatie

1. **Clone de repository**
   ```bash
   git clone https://github.com/your-repo/zentrack.git
   cd zentrack
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Environment Variabelen**
   Maak een `.env` bestand aan in de root directory met de volgende keys (vraag aan de beheerder):
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_key
   VITE_API_KEY=your_gemini_key
   ```

4. **Start de dev server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structuur

- **`components/`**
  - **`auth/`**: Login en Registratie schermen (SMS/Email flow).
  - **`dashboard/`**: Alle schermen achter de login.
    - `DashboardHome.tsx`: Cockpit met KPI's en AI Approval Center.
    - `InventoryView.tsx`: Digitale voorraadkast (Supabase connected).
    - `InvoicesView.tsx`: Factuur OCR status overzicht.
    - `OrdersView.tsx`: Bestellingen en Pakbon verificatie (Deliveries).
    - `ExpiryView.tsx`: Expiratie Radar (THT monitoring).
    - `TeamView.tsx`: Teamleden en rollen beheer.
    - `ChatArea.tsx`: WhatsApp interface simulatie.
  - **`legal/`**: Privacy Policy, Terms en Cookie banner.
  - **`Hero.tsx`**: De main marketing hero met de "Master Loop" telefoon animatie.
  
- **`services/`**
  - `geminiService.ts`: AI Logica (Google Gemini) voor chat en analyse.
  - `messageBirdService.ts`: Simulatie van WhatsApp communicatie layer.

- **`lib/`**
  - `supabase.ts`: Database connectie configuratie.

## 💡 Key Features

### 1. Marketing Site (Front-end)
- **Mobile-First Flow:** Hero sectie met live animaties van de mobiele workflow.
- **Direct Onboarding:** QR-code scan en "Start via WhatsApp" knoppen.
- **ROI Calculator:** Interactieve besparingscalculator.

### 2. Dashboard (Back-end UI)
- **AI Approval Center:** De manager keurt AI-voorstellen goed (Human-in-the-loop).
- **Factuur OCR:** Visualisatie van het analyseproces (Confidence scores).
- **Pakbon Verificatie:** Matching logic tussen besteld en geleverd.
- **Voorraadkast:** Visuele grid met status badges (Kritiek/Laag/OK).

### 3. Data Integratie
- De app gebruikt `InventoryView.tsx` om live verbinding te maken met **Supabase**.
- Als er geen keys zijn geconfigureerd, valt het systeem terug op **Mock Data** (Demo Mode) zodat investeerders altijd een werkende app zien.

## 🛠️ Onderhoud & Uitbreiding

- **Nieuwe Feature Toevoegen:**
  1. Maak een component in `components/dashboard/`.
  2. Voeg navigatie item toe in `components/dashboard/Sidebar.tsx`.
  3. Voeg routing toe in `components/dashboard/DashboardLayout.tsx`.

- **Supabase Schema:**
  Zie de SQL definitie in de documentatie voor de tabelstructuren (`inventory_items`, `orders`, `teams`).

---
© 2025 ZenTrack B.V.
