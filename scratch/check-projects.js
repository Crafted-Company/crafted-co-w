const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testList() {
  const { data, error } = await supabase.storage
    .from("assets")
    .list("projects/DIANE");
    
  if (error) {
    console.error("Storage list error:", error);
  } else {
    console.log("Storage list success:", data);
  }
}

testList();
