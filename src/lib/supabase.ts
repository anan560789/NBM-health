import { createClient } from '@supabase/supabase-js';

// 使用預設值確保 Build 階段不會報錯
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

// 只有在變數正確時才啟動真正的客戶端
export const supabase = createClient(supabaseUrl, supabaseAnonKey);