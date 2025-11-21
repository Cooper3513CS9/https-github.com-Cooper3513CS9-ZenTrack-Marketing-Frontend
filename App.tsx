
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { WhatsAppDemo } from './components/WhatsAppDemo';
import { PainPoints } from './components/PainPoints';
import { Features } from './components/Features';
import { ManagerDashboardSection } from './components/ManagerDashboardSection';
import { ROICalculator } from './components/ROICalculator';
import { Pricing } from './components/Pricing';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { DirectOnboarding } from './components/DirectOnboarding';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { Terms } from './components/legal/Terms';
import { CookieConsent } from './components/legal/CookieConsent';
import { ViewState, User } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    // Simulate successful login
    setUser({
      id: '1',
      name: 'Dr. Janssen',
      email: 'info@huisartsenpraktijk.nl',
      phoneNumber: '+31612345678', // MessageBird User Number
      role: 'admin'
    });
    setCurrentView('dashboard');
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('landing');
    window.scrollTo(0, 0);
  };

  const navigateToRegister = () => {
    setCurrentView('register');
    window.scrollTo(0, 0);
  };

  const navigateToLogin = () => {
    setCurrentView('auth');
    window.scrollTo(0, 0);
  };

  const navigateToLegal = (view: string) => {
      if (view === 'legal-privacy') setCurrentView('legal-privacy');
      if (view === 'legal-terms') setCurrentView('legal-terms');
  };

  // View Rendering Logic
  if (currentView === 'dashboard' && user) {
    return <DashboardLayout user={user} onLogout={handleLogout} />;
  }

  if (currentView === 'auth') {
    return (
      <LoginPage 
        onLoginSuccess={handleLogin} 
        onBack={() => setCurrentView('landing')} 
      />
    );
  }

  if (currentView === 'register') {
      return (
          <RegisterPage 
            onRegisterSuccess={handleLogin}
            onLoginClick={() => setCurrentView('auth')}
            onBack={() => setCurrentView('landing')}
          />
      );
  }

  if (currentView === 'legal-privacy') {
      return <PrivacyPolicy onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'legal-terms') {
      return <Terms onBack={() => setCurrentView('landing')} />;
  }

  // Landing Page
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative">
      <Header onLoginClick={navigateToLogin} />
      <main>
        {/* 1. ATTENTION: The Big Promise */}
        <Hero onCtaClick={navigateToRegister} />
        
        {/* 2. AGITATION: The Pain Points (Problem) */}
        <PainPoints />

        {/* 3. SOLUTION: How it works daily */}
        <Process />

        {/* 4. PROOF: Interactive Demo */}
        <WhatsAppDemo />

        {/* 5. DEPTH: Detailed Features */}
        <Features />

        {/* 6. CONTROL: Reassurance for the Manager (Desktop View) */}
        <ManagerDashboardSection />

        {/* 7. LOGIC: Financial Argument */}
        <ROICalculator />

        {/* 8. OFFER: Pricing */}
        <Pricing onRegisterClick={navigateToRegister} />

        {/* 9. ACTION: Final Call to Action (Scan to start) */}
        <DirectOnboarding onSmsClick={navigateToLogin} />

        {/* 10. TRUST & SUPPORT: About & FAQ */}
        <AboutSection />
        <FAQ />
        <ContactSection />
      </main>
      <Footer onLoginClick={navigateToRegister} onNavigate={navigateToLegal} />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
};

export default App;
