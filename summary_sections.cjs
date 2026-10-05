const fs = require('fs');

for (let i = 1; i <= 8; i++) {
  const content = fs.readFileSync(`section_${i}.html`, 'utf8');
  console.log(`\n================== SECTION ${i} ==================`);
  console.log(content.slice(0, 500) + '\n... [length: ' + content.length + ']');
}
