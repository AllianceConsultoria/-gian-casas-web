// ===== CONEXÃO COM SUPABASE =====
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://sulnodgrwzqffpryllld.supabase.co';
const SUPABASE_KEY = 'sb_publishable_lpKspNbDobxkjq4Ywp0tbQ_86VF2Bqa';

// Criar cliente Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Exportar para uso em outros arquivos
window.supabase = supabase;
