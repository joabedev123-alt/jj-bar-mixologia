const fs = require('fs');

const body = fs.readFileSync('extracted_body.html', 'utf8');

// Find all sections or major divs
const sections = [];
const headingRegex = /<(h[1-6]|p|div|section|button|a)[^>]*>([\s\S]*?)<\/\1>/gi;

// Let's also look for data-tsd-source
const sourceRegex = /data-tsd-source="([^"]+)"/g;
const sources = new Set();
let m;
while ((m = sourceRegex.exec(body)) !== null) {
  sources.add(m[1]);
}

console.log('Component / Source files found in data-tsd-source:');
sources.forEach(s => console.log(' - ', s));
