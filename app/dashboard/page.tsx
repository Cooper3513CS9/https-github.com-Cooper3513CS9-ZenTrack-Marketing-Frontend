"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardHome } from '@/components/dashboard/DashboardHome';
import { User } from '@/types';

// Mock user
const mockUser: User = {
  id: '1',
  name: 'Dr. Janssen',
  email: 'info@huisartsenpraktijk.nl',
  phoneNumber: '+31612345678',
  role: 'admin'
};

export default function DashboardPage() {
  const router = useRouter();
  const [hasPendingApproval, setHasPendingApproval] = useState(true);

  const handleApproveOrder = () => {
    setHasPendingApproval(false);
  };

  const navigate = (viewId: string) => {
    if (viewId === 'dashboard') {
      router.push('/dashboard');
    } else {
      router.push(`/dashboard/${viewId}`);
    }
  };

  return (
    <DashboardHome 
        user={mockUser} 
        onNavigate={navigate} 
        hasPendingApproval={hasPendingApproval}
        onApproveOrder={handleApproveOrder}
    />
  );
}