const fs = require('fs');

const raw = fs.readFileSync('clean_structure.html', 'utf8');

const imgTagRegex = /<img\b([^>]*)>/gi;
let match;
let idx = 0;
const imgs = [];

while ((match = imgTagRegex.exec(raw)) !== null) {
  idx++;
  const tag = match[0];
  const src = match[1].match(/src="([^"]+)"/)?.[1];
  const alt = match[1].match(/alt="([^"]*)"/)?.[1] || '';
  const cls = match[1].match(/class="([^"]*)"/)?.[1] || '';
  
  imgs.push({
    index: idx,
    alt,
    srcLen: src ? src.length : 0,
    className: cls
  });
}

console.log('Images in original HTML:');
console.log(JSON.stringify(imgs, null, 2));
