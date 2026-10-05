const fs = require('fs');

const raw = fs.readFileSync('clean_structure.html', 'utf8');

// Let's extract the exact navigation bar, header, and all 8 sections
const navMatch = raw.match(/<header\b[^>]*>([\s\S]*?)<\/header>/i) || raw.match(/<nav\b[^>]*>([\s\S]*?)<\/nav>/i);
if (navMatch) {
  fs.writeFileSync('extracted_nav.html', navMatch[0], 'utf8');
}

// Let's write a comprehensive JSON of every section's complete HTML
const sectionRegex = /<section\b([^>]*)>([\s\S]*?)<\/section>/gi;
let match;
let count = 0;
const allSections = [];

while ((match = sectionRegex.exec(raw)) !== null) {
  count++;
  allSections.push({
    id: `section_${count}`,
    attrs: match[1],
    html: match[0]
  });
  fs.writeFileSync(`section_${count}.html`, match[0], 'utf8');
}

console.log(`Saved ${count} full section HTML files.`);
