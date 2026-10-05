const fs = require('fs');

const raw = fs.readFileSync('Curso_de_Mixologia_Molecular_JJ_Bar_Barista_Academy.html', 'utf8');

// Replace long data URIs with placeholder
const cleaned = raw.replace(/data:image\/[a-zA-Z0-9+.-]+;base64,[A-Za-z0-9+/=]+/g, (match) => {
  return `[BASE64_IMAGE_LEN_${match.length}]`;
});

fs.writeFileSync('clean_structure.html', cleaned, 'utf8');
console.log('Cleaned file written. Total length:', cleaned.length);

// Let's also extract all headings, sections, text blocks and components
const cheerio = null; // or basic regex parsing
