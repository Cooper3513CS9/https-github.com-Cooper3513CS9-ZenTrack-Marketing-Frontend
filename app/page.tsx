"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Process } from '@/components/Process';
import { WhatsAppDemo } from '@/components/WhatsAppDemo';
import { PainPoints } from '@/components/PainPoints';
import { Features } from '@/components/Features';
import { ManagerDashboardSection } from '@/components/ManagerDashboardSection';
import { ROICalculator } from '@/components/ROICalculator';
import { Pricing } from '@/components/Pricing';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { DirectOnboarding } from '@/components/DirectOnboarding';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { CookieConsent } from '@/components/legal/CookieConsent';
import { GroupSection } from '@/components/GroupSection';
import { OnboardingSteps } from '@/components/OnboardingSteps';
import { BlogSection } from '@/components/BlogSection';

export default function LandingPage() {
  const router = useRouter();

  const navigateToRegister = () => {
    router.push('https://app.zentrack.nl/sign-up');
  };

  const navigateToLogin = () => {
    router.push('https://app.zentrack.nl/sign-in');
  };

  const navigateToLegal = (view: string) => {
    // Map view string to route
    if (view === 'legal-privacy') router.push('/legal/privacy');
    if (view === 'legal-terms') router.push('/legal/terms');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative">
      <Header onLoginClick={navigateToLogin} />
      <main>
         <Hero onCtaClick={navigateToRegister} />
         <OnboardingSteps />
         <PainPoints />
         <Process />
         <WhatsAppDemo />
         <Features />
         <ManagerDashboardSection />
         <GroupSection />
         <ROICalculator />
         <Pricing onRegisterClick={navigateToRegister} />
         <DirectOnboarding />
         <AboutSection />
         <BlogSection />
         <FAQ />
         <ContactSection />
       </main>
      <Footer onLoginClick={navigateToRegister} onNavigate={navigateToLegal} />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
}