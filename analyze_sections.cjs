const fs = require('fs');

const raw = fs.readFileSync('clean_structure.html', 'utf8');

// Let's analyze the exact sections in order:
// We can use a simple HTML parser script in node
function analyzeHTML() {
  const sections = [];
  
  // Find all section tags or top-level containers inside body
  const sectionRegex = /<section\b([^>]*)>([\s\S]*?)<\/section>/gi;
  let match;
  let idx = 1;
  while ((match = sectionRegex.exec(raw)) !== null) {
    const attrs = match[1];
    const content = match[2];
    
    // Extract text snippets
    const headings = content.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || [];
    const paragraphs = content.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
    const buttons = content.match(/<(button|a)[^>]*>([\s\S]*?)<\/\1>/gi) || [];
    const imgMatches = content.match(/<img[^>]*>/gi) || [];
    
    sections.push({
      index: idx++,
      attrs: attrs.replace(/\s+/g, ' ').trim(),
      headings: headings.map(h => h.replace(/<[^>]+>/g, '').trim()),
      paragraphs: paragraphs.map(p => p.replace(/<[^>]+>/g, '').trim()).slice(0, 8),
      buttons: buttons.map(b => b.replace(/<[^>]+>/g, '').trim()).filter(Boolean).slice(0, 5),
      imgCount: imgMatches.length
    });
  }
  
  return sections;
}

const sections = analyzeHTML();
console.log('Found', sections.length, 'sections:');
sections.forEach(s => {
  console.log(`\n=== Section ${s.index} ===`);
  console.log('Attrs:', s.attrs);
  console.log('Headings:', s.headings);
  console.log('Paragraphs:', s.paragraphs.slice(0, 3));
  console.log('Buttons/Links:', s.buttons);
});

fs.writeFileSync('sections_analysis.json', JSON.stringify(sections, null, 2));
