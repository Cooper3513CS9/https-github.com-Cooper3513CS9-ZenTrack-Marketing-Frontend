"use client";

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { RightPanel } from '@/components/dashboard/RightPanel';
import { User } from '@/types';

// Mock user for now
const mockUser: User = {
  id: '1',
  name: 'Dr. Janssen',
  email: 'info@huisartsenpraktijk.nl',
  phoneNumber: '+31612345678',
  role: 'admin'
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [hasPendingApproval, setHasPendingApproval] = useState(true);

  // Extract current view from pathname (e.g. /dashboard/orders -> orders)
  // Default to 'dashboard' if just /dashboard
  const currentView = pathname.split('/').pop() || 'dashboard';
  const isDashboardRoot = pathname === '/dashboard';

  const handleLogout = () => {
    router.push('/');
  };

  const navigate = (viewId: string) => {
    if (viewId === 'dashboard') {
      router.push('/dashboard');
    } else {
      router.push(`/dashboard/${viewId}`);
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar 
        currentUser={mockUser} 
        onLogout={handleLogout} 
        currentView={isDashboardRoot ? 'dashboard' : currentView}
        onNavigate={navigate}
        pendingAlerts={hasPendingApproval ? 1 : 0}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative w-full overflow-hidden">
         {children}
      </div>
      
      {/* RightPanel is visible on Dashboard and Chat for context */}
      {(currentView === 'chat' || isDashboardRoot) && (
         <RightPanel pendingApproval={hasPendingApproval} />
      )}
    </div>
  );
}