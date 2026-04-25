import { createClient } from '@supabase/supabase-js';

// 使用新版的 Publishable Key 與正確的 URL
const supabaseUrl = 'https://xzlkgavbuucmbqryvirr.supabase.co';
const supabaseAnonKey = 'sb_publishable_zeiBo0Elc0-dFaQ_d1RoKw_VGXjU0W2';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);