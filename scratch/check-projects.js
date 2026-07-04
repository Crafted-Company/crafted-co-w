const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function testUploadDownload() {
  const content = "hello world";
  const path = "projects/test.txt";
  
  // Try uploading
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("assets")
    .upload(path, Buffer.from(content), { contentType: 'text/plain', upsert: true });
    
  if (uploadError) {
    console.error("Upload error:", uploadError);
    return;
  }
  console.log("Upload success!");
  
  // Try downloading
  const { data: downloadData, error: downloadError } = await supabase.storage
    .from("assets")
    .download(path);
    
  if (downloadError) {
    console.error("Download error:", downloadError);
  } else {
    const text = await downloadData.text();
    console.log("Download success! Content:", text);
  }
}

testUploadDownload();
