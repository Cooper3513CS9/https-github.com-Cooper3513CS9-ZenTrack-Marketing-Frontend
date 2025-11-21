
import React, { useState, useEffect } from 'react';
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
import { User } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('landing');
  const [user, setUser] = useState<User | null>(null);

  // --- ROUTER LOGIC ---
  // Handles browser back button and deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash.startsWith('dashboard')) {
        if (user) {
           setCurrentView('dashboard');
        } else {
           window.location.hash = 'auth';
        }
      } else if (hash === 'auth') {
        setCurrentView('auth');
      } else if (hash === 'register') {
        setCurrentView('register');
      } else if (hash === 'legal-privacy') {
        setCurrentView('legal-privacy');
      } else if (hash === 'legal-terms') {
        setCurrentView('legal-terms');
      } else {
        setCurrentView('landing');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [user]);

  const handleLogin = () => {
    // Simulate successful login
    setUser({
      id: '1',
      name: 'Dr. Janssen',
      email: 'info@huisartsenpraktijk.nl',
      phoneNumber: '+31612345678',
      role: 'admin'
    });
    window.location.hash = 'dashboard'; 
  };

  const handleLogout = () => {
    setUser(null);
    window.location.hash = '';
  };

  const navigateToRegister = () => {
    window.location.hash = 'register';
  };

  const navigateToLogin = () => {
    window.location.hash = 'auth';
  };

  const navigateToLegal = (view: string) => {
      window.location.hash = view;
  };

  // View Rendering Logic
  if (currentView === 'dashboard' && user) {
    return <DashboardLayout user={user} onLogout={handleLogout} />;
  }

  if (currentView === 'auth') {
    return (
      <LoginPage 
        onLoginSuccess={handleLogin} 
        onBack={() => window.location.hash = ''} 
      />
    );
  }

  if (currentView === 'register') {
      return (
          <RegisterPage 
            onRegisterSuccess={handleLogin}
            onLoginClick={() => window.location.hash = 'auth'}
            onBack={() => window.location.hash = ''}
          />
      );
  }

  if (currentView === 'legal-privacy') {
      return <PrivacyPolicy onBack={() => window.location.hash = ''} />;
  }

  if (currentView === 'legal-terms') {
      return <Terms onBack={() => window.location.hash = ''} />;
  }

  // Landing Page
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative">
      <Header onLoginClick={navigateToLogin} />
      <main>
        <Hero onCtaClick={navigateToRegister} />
        <PainPoints />
        <Process />
        <WhatsAppDemo />
        <Features />
        <ManagerDashboardSection />
        <ROICalculator />
        <Pricing onRegisterClick={navigateToRegister} />
        <DirectOnboarding onSmsClick={navigateToLogin} />
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
