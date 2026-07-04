const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function check() {
  const { data, error } = await supabase.storage
    .from("youtube")
    .list("");
    
  if (error) {
    console.error("Youtube bucket error:", error);
  } else {
    console.log("Youtube bucket files:", data);
  }
}

check();
