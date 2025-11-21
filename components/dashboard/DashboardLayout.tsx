
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { ChatArea } from './ChatArea';
import { RightPanel } from './RightPanel';
import { DashboardHome } from './DashboardHome';
import { InventoryView } from './InventoryView';
import { OrdersView } from './OrdersView';
import { SettingsView } from './SettingsView';
import { User, ChatMessage } from '../../types';

interface DashboardLayoutProps {
  user: User;
  onLogout: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ user, onLogout }) => {
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [hasPendingApproval, setHasPendingApproval] = useState(true); // Global state for the demo flow
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: `Hoi ${user.name}! 👋\nAlles is rustig vandaag. Ik heb 2 pakbonnen geverifieerd en er zijn geen urgente tekorten.`,
      sender: 'bot',
      timestamp: '09:00',
      type: 'text'
    }
  ]);

  const handleApproveOrder = () => {
      setHasPendingApproval(false);
  };

  const renderContent = () => {
      switch(currentView) {
          case 'chat':
              return <ChatArea messages={messages} setMessages={setMessages} />;
          case 'inventory':
              return <InventoryView />;
          case 'orders':
              return <OrdersView />;
          case 'settings':
              return <SettingsView />;
          case 'dashboard':
          default:
              return (
                <DashboardHome 
                    user={user} 
                    onNavigate={setCurrentView} 
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
        onNavigate={setCurrentView}
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
