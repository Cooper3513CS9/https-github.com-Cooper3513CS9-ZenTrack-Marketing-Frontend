"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { GroupDashboardView } from '@/components/dashboard/GroupDashboardView';

export default function ZorggroepPage() {
  const router = useRouter();

  return (
    <GroupDashboardView onBack={() => router.push('/dashboard')} />
  );
}
