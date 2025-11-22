"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { LoginPage } from '@/components/auth/LoginPage';

export default function LoginRoute() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // In a real app, you'd set a cookie/session here
    // For now, we just redirect to dashboard
    router.push('/dashboard');
  };

  return (
    <LoginPage 
      onLoginSuccess={handleLoginSuccess} 
      onBack={() => router.push('/')} 
    />
  );
}