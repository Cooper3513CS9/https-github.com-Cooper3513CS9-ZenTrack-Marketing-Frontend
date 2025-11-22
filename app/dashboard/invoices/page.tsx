"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { InvoicesView } from '@/components/dashboard/InvoicesView';

export default function InvoicesPage() {
  const router = useRouter();

  return <InvoicesView onBack={() => router.push('/dashboard')} />;
}