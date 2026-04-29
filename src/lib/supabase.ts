import { createClient } from '@supabase/supabase-js';

// 診斷：直接抓取變數
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 如果沒有變數，就用剛才「寫死」會通的那組，確保你的網頁能動
const finalUrl = url || 'https://xzlxgavbuucmbqryvirr.supabase.co';
const finalKey = key || 'sb_publishable_zeiBo0Elc0-dFaQ_d1RoKw_VGXjU0W2';

export const supabase = createClient(finalUrl, finalKey);