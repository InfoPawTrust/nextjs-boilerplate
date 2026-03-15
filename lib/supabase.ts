import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? "";

/**
 * Supabase Client für serverseitige Nutzung (API Routes, Server Components).
 * Keys aus .env.local: SUPABASE_URL, SUPABASE_ANON_KEY
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
