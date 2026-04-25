import { createClient } from '@supabase/supabase-js';

// 直接把你在 Supabase 看到的資訊貼在這裡
const supabaseUrl = 'https://xzlkgavbuucmbqryvirr.supabase.co'; // 這是從你截圖網址看到的
const supabaseAnonKey = 'sb_publishable_zeiBo0Elc0-dFaQ_d1RoKw_VGXjU0W2'; // 這是從你 Cloudflare 截圖看到的

export const supabase = createClient(supabaseUrl, supabaseAnonKey);