const fs = require('fs');
const pagePath = 'c:\\Users\\adity\\Documents\\Code\\Abyss-Archive\\src\\app\\page.tsx';
const content = fs.readFileSync(pagePath, 'utf8');
const lines = content.split('\n');

console.log("Lines 270 to 310:");
console.log(lines.slice(269, 310).join('\n'));
