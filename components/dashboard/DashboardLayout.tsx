
import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { ChatArea } from './ChatArea';
import { RightPanel } from './RightPanel';
import { DashboardHome } from './DashboardHome';
import { InventoryView } from './InventoryView';
import { OrdersView } from './OrdersView';
import { SettingsView } from './SettingsView';
import { InvoicesView } from './InvoicesView';
import { ExpiryView } from './ExpiryView';
import { SuppliersView } from './SuppliersView';
import { TeamView } from './TeamView';
import { User, ChatMessage } from '../../types';

interface DashboardLayoutProps {
  user: User;
  onLogout: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ user, onLogout }) => {
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [hasPendingApproval, setHasPendingApproval] = useState(true);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: `Hoi ${user.name}! 👋\nAlles is rustig vandaag. Ik heb 2 pakbonnen geverifieerd en er zijn geen urgente tekorten.`,
      sender: 'bot',
      timestamp: '09:00',
      type: 'text'
    }
  ]);

  // Sync with Hash URL
  useEffect(() => {
    const handleHash = () => {
        const hash = window.location.hash;
        // Expected format: #dashboard/viewName
        if (hash.startsWith('#dashboard/')) {
            const view = hash.split('/')[1];
            if (view) setCurrentView(view);
        } else if (hash === '#dashboard') {
            setCurrentView('dashboard');
        }
    };

    handleHash(); // Initial check
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (viewId: string) => {
      window.location.hash = viewId === 'dashboard' ? 'dashboard' : `dashboard/${viewId}`;
  };

  const handleApproveOrder = () => {
      setHasPendingApproval(false);
  };

  const renderContent = () => {
      switch(currentView) {
          case 'chat':
              return <ChatArea messages={messages} setMessages={setMessages} onBack={() => navigate('dashboard')} />;
          case 'inventory':
              return <InventoryView onBack={() => navigate('dashboard')} />;
          case 'orders':
              return <OrdersView onBack={() => navigate('dashboard')} />;
          case 'invoices':
              return <InvoicesView onBack={() => navigate('dashboard')} />;
          case 'expiry':
              return <ExpiryView onBack={() => navigate('dashboard')} />;
          case 'suppliers':
              return <SuppliersView onBack={() => navigate('dashboard')} />;
          case 'team':
              return <TeamView onBack={() => navigate('dashboard')} />;
          case 'settings':
              return <SettingsView onBack={() => navigate('dashboard')} onLogout={onLogout} />;
          case 'dashboard':
          default:
              return (
                <DashboardHome 
                    user={user} 
                    onNavigate={navigate} 
                    hasPendingApproval={hasPendingApproval}
                    onApproveOrder={handleApproveOrder}
                />
              );
      }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar 
        currentUser={user} 
        onLogout={onLogout} 
        currentView={currentView}
        onNavigate={navigate}
        pendingAlerts={hasPendingApproval ? 1 : 0}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative w-full overflow-hidden">
         {renderContent()}
      </div>
      
      {/* RightPanel is visible on Dashboard and Chat for context */}
      {(currentView === 'chat' || currentView === 'dashboard') && (
         <RightPanel pendingApproval={hasPendingApproval} />
      )}
    </div>
  );
};
