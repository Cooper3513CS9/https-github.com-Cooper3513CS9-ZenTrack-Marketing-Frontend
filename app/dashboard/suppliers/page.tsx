"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { SuppliersView } from '@/components/dashboard/SuppliersView';

export default function SuppliersPage() {
  const router = useRouter();

  return <SuppliersView onBack={() => router.push('/dashboard')} />;
}