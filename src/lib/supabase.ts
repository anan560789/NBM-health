import { createClient } from '@supabase/supabase-js';

// 直接獲取變數
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// 即使變數暫時為空也初始化，這會解決 Build Error。
// 真正的連線會在網頁加載後，由瀏覽器讀取環境變數來執行。
export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co', // 提供一個暫時的格式正確網址
    supabaseAnonKey || 'placeholder-key'
);