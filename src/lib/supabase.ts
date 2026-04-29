import { createClient } from '@supabase/supabase-js';

// 我們直接把值寫死在這裡測試（這是最保險的診斷方式）
const supabaseUrl = 'https://xzlxgavbuucmbqryvirr.supabase.co';
const supabaseAnonKey = 'sb_publishable_zeiBo0Elc0-dFaQ_d1RoKw_VGXjU0W2';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);