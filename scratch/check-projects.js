const fs = require('fs');
const pagePath = 'c:\\Users\\adity\\Documents\\Code\\Crafted-Co\\src\\app\\page.tsx';
const content = fs.readFileSync(pagePath, 'utf8');
const lines = content.split('\n');

console.log("Searching for beanPath usage in page.tsx:");
lines.forEach((line, index) => {
  if (line.includes('beanPath')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
