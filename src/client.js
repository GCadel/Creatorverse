import { createClient } from "@supabase/supabase-js"

const URL = import.meta.env.VITE_SUPABASE_URL
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
export const CREATORS = import.meta.env.VITE_SUPABASE_TABLE_CREATORS

export const supabase = createClient(URL, API_KEY)
