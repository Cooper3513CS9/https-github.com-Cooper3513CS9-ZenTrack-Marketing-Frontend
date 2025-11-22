"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { InventoryView } from '@/components/dashboard/InventoryView';

export default function InventoryPage() {
  const router = useRouter();

  return <InventoryView onBack={() => router.push('/dashboard')} />;
}