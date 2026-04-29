import { createClient } from '@supabase/supabase-js';

// 直接寫死，不留任何懸念
const supabaseUrl = 'https://xzlxgavbuucmbqryvirr.supabase.co';
const supabaseAnonKey = 'sb_publishable_zeiBo0Elc0-dFaQ_d1RoKw_VGXjU0W2';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);