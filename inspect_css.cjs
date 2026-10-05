const fs = require('fs');

const css = fs.readFileSync('extracted_styles.css', 'utf8');

// Find :root variables
const rootMatch = css.match(/:root\s*\{[\s\S]*?\}/gi);
if (rootMatch) {
  console.log('--- ROOT VARIABLES ---');
  console.log(rootMatch[0]);
}

// Find key utility classes like gold-text, gold-badge, etc.
const customClasses = css.match(/\.(gold-[a-zA-Z0-9_-]+|font-[a-zA-Z0-9_-]+)[\s\S]*?\{[\s\S]*?\}/gi);
if (customClasses) {
  console.log('--- CUSTOM UTILITIES ---');
  console.log(customClasses.join('\n\n'));
}
