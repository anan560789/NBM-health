import { createClient } from '@supabase/supabase-js';

// 這會自動讀取你在 .env.local 或 Cloudflare 設定的環境變數
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase 變數缺失，請檢查環境變數設定。");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);