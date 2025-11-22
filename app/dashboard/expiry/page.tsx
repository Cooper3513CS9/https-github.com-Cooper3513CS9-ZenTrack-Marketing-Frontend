"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ExpiryView } from '@/components/dashboard/ExpiryView';

export default function ExpiryPage() {
  const router = useRouter();

  return <ExpiryView onBack={() => router.push('/dashboard')} />;
}