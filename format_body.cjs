const fs = require('fs');

const body = fs.readFileSync('extracted_body.html', 'utf8');

// Print all sections, their classes, inner headings, texts and links
const cheerioRegex = /<section[\s\S]*?<\/section>/gi;
let match;
let count = 0;

// Also let's extract all text content hierarchically
console.log('--- ALL SECTIONS & STRUCTURE IN THE ORIGINAL HTML ---');

// Let's create an overview parser
const lines = body.split('\n');
fs.writeFileSync('clean_body_formatted.html', body.replace(/>\s*</g, '>\n<'), 'utf8');
console.log('clean_body_formatted.html written.');
