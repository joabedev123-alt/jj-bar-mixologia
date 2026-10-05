const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync('clean_structure.html', 'utf8');
const original = fs.readFileSync('Curso_de_Mixologia_Molecular_JJ_Bar_Barista_Academy.html', 'utf8');

// Find all matches of alt="
const altRegex = /<img\b([^>]*)>/gi;
let m;
while ((m = altRegex.exec(raw)) !== null) {
  console.log(m[0].slice(0, 150));
}
