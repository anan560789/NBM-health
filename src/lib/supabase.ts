import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// 就算變數暫時是空的，也要初始化一個 client，
// 這樣編譯器才不會報錯，真正執行時它會去抓 Cloudflare 的變數
export const supabase = createClient(supabaseUrl, supabaseAnonKey);