"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { RegisterPage } from '@/components/auth/RegisterPage';

export default function RegisterRoute() {
  const router = useRouter();

  const handleRegisterSuccess = () => {
    router.push('/dashboard');
  };

  return (
    <RegisterPage
      onRegisterSuccess={handleRegisterSuccess}
      onLoginClick={() => router.push('https://app.zentrack.nl/sign-in')}
      onBack={() => router.push('/')}
    />
  );
}