const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'original');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove HTML comments <!-- -->
    content = content.replace(/<!--[\s\S]*?-->/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned comments in ${file}`);
  }
});
