"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChatArea } from '@/components/dashboard/ChatArea';
import { ChatMessage } from '@/types';

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: `Hoi Dr. Janssen! 👋\nAlles is rustig vandaag. Ik heb 2 pakbonnen geverifieerd en er zijn geen urgente tekorten.`,
      sender: 'bot',
      timestamp: '09:00',
      type: 'text'
    }
  ]);

  return (
    <ChatArea 
        messages={messages} 
        setMessages={setMessages} 
        onBack={() => router.push('/dashboard')} 
    />
  );
}