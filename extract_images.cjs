const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync('Curso_de_Mixologia_Molecular_JJ_Bar_Barista_Academy.html', 'utf8');
const imgDir = path.join(__dirname, 'public', 'extracted_images');

const allBase64Regex = /data:image\/([a-zA-Z0-9+.-]+);base64,([A-Za-z0-9+/=]+)/g;
let match;
let count = 0;
const imageMap = [];

while ((match = allBase64Regex.exec(raw)) !== null) {
  count++;
  let ext = match[1];
  if (ext === 'jpeg') ext = 'jpg';
  if (ext.includes('svg')) ext = 'svg';
  const base64Data = match[2];
  const filename = `asset_${count.toString().padStart(2, '0')}.${ext}`;
  const filepath = path.join(imgDir, filename);
  fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));
  imageMap.push({ count, filename, size: base64Data.length, ext });
}

console.log(`Extracted ${count} total image assets to public/extracted_images/`);
fs.writeFileSync('extracted_images_map.json', JSON.stringify(imageMap, null, 2));
