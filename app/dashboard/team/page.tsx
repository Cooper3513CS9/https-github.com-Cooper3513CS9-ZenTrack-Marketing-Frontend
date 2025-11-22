"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { TeamView } from '@/components/dashboard/TeamView';

export default function TeamPage() {
  const router = useRouter();

  return <TeamView onBack={() => router.push('/dashboard')} />;
}