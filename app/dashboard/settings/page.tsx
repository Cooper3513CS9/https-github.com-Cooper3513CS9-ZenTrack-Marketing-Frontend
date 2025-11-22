"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { SettingsView } from '@/components/dashboard/SettingsView';

export default function SettingsPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return <SettingsView onBack={() => router.push('/dashboard')} onLogout={handleLogout} />;
}