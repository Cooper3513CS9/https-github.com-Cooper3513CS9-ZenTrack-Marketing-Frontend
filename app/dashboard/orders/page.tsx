"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { OrdersView } from '@/components/dashboard/OrdersView';

export default function OrdersPage() {
  const router = useRouter();

  return <OrdersView onBack={() => router.push('/dashboard')} />;
}