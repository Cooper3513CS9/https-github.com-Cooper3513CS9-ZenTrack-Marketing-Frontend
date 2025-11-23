"use client";

import { useRouter } from 'next/navigation';
import { PrivacyPolicy } from '@/components/legal/PrivacyPolicy';

export default function PrivacyPage() {
  const router = useRouter();

  return <PrivacyPolicy onBack={() => router.back()} />;
}
