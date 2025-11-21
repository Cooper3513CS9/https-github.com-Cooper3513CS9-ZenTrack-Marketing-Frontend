
// --- App State Types ---

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: 'work' | 'personal' | 'mindfulness';
}

export interface MoodLog {
  id: string;
  date: string;
  score: number;
  note?: string;
}

export interface MoodType {
  score: number;
  label: string;
  emoji: string;
  color: string;
}

// --- Dashboard & Auth Types ---

export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  avatar?: string;
  role: 'admin' | 'staff';
}

export type MessageStatus = 'pending' | 'sent' | 'delivered' | 'read';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'system';
  timestamp: string;
  type?: 'text' | 'image' | 'alert';
  status?: MessageStatus;
  imageType?: 'invoice' | 'packing_slip' | 'medication' | 'qr' | 'bag';
  metadata?: any;
}

export type ViewState = 'landing' | 'auth' | 'register' | 'dashboard' | 'legal-privacy' | 'legal-terms';
export type AuthMethod = 'email' | 'sms';

// --- Supabase Database Types ---

export interface InventoryItem {
  id: string;
  created_at?: string;
  name: string;
  stock: number;
  unit: string;
  location: string;
  status: 'ok' | 'low' | 'critical';
  expiry_date?: string;
  batch_number?: string;
}

export interface Order {
  id: string;
  order_number: string;
  supplier: string;
  date: string;
  status: 'pending' | 'shipped' | 'delivered';
  items: number;
  total: string;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  lead_time_days: number;
  min_order_value: number;
  delivery_costs: number;
  status: 'active' | 'inactive';
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'manager' | 'assistant';
  status: 'active' | 'offline';
  lastActive: string;
  avatar: string;
}
