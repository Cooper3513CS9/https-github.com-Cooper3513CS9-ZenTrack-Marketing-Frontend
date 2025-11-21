
import { createClient } from '@supabase/supabase-js';

// NOTE: In a real environment, these should be in process.env.
// For now, we use placeholders. You must replace these with your actual Supabase Project URL and Anon Key.
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
