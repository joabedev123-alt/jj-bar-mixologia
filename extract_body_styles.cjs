const fs = require('fs');

const html = fs.readFileSync('clean_structure.html', 'utf8');

// Let's find all script tags, style tags, and the body innerHTML
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
const headMatch = html.match(/<head[^>]*>([\s\S]*)<\/head>/i);

if (headMatch) {
  // Extract CSS
  const styles = [];
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let sMatch;
  while ((sMatch = styleRegex.exec(headMatch[1])) !== null) {
    styles.push(sMatch[1]);
  }
  fs.writeFileSync('extracted_styles.css', styles.join('\n\n'), 'utf8');
  console.log('Saved extracted_styles.css, total bytes:', styles.join('\n\n').length);
}

if (bodyMatch) {
  fs.writeFileSync('extracted_body.html', bodyMatch[1], 'utf8');
  console.log('Saved extracted_body.html, total bytes:', bodyMatch[1].length);
}
