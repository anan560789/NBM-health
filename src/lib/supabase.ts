import { createClient } from '@supabase/supabase-js';

// 直接填入你的真實連線資訊
const supabaseUrl = 'https://xzlkgavbuucmbqryvirr.supabase.co';
const supabaseAnonKey = 'sb_publishable_zeiBo0Elc0-dFaQ_d1RoKw_VGXjU0W2';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);