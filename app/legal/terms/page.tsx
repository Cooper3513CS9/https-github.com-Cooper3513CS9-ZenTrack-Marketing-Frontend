"use client";

import { useRouter } from 'next/navigation';
import { Terms } from '@/components/legal/Terms';

export default function TermsPage() {
  const router = useRouter();

  return <Terms onBack={() => router.back()} />;
}
