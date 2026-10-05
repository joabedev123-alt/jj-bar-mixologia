const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync('Curso_de_Mixologia_Molecular_JJ_Bar_Barista_Academy.html', 'utf8');
const imgDir = path.join(__dirname, 'public', 'images', 'original');

const fileNames = [
  'logo_jj.jpg',
  'hero_molecular.jpg',
  'caviar_de_ouro.jpg',
  'gema_de_maracuja.jpg',
  'macarrao_de_gel.jpg',
  'cloche_defumado.jpg',
  'espuma_de_limao.jpg',
  'gin_tonica_caviar.jpg',
  'negroni_em_chamas.jpg',
  'espresso_martini_caviar.jpg',
  'esfera_de_espumante.jpg',
  'felipe_martins_instrutor.jpg'
];

const imgTagRegex = /<img\b([^>]*)>/gi;
let match;
let count = 0;

while ((match = imgTagRegex.exec(raw)) !== null) {
  const tag = match[0];
  const srcMatch = tag.match(/src="(?:\/)?data:image\/[^;]+;base64,([A-Za-z0-9+/=]+)"/);
  if (srcMatch && count < fileNames.length) {
    const filename = fileNames[count];
    const base64Data = srcMatch[1];
    fs.writeFileSync(path.join(imgDir, filename), Buffer.from(base64Data, 'base64'));
    console.log(`[${count+1}] Saved ${filename} (${base64Data.length} bytes)`);
    count++;
  }
}
console.log(`Total saved: ${count} of ${fileNames.length}`);
