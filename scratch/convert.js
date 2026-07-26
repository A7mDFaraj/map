const fs = require('fs');
const path = require('path');

const svgContent = fs.readFileSync(path.join(__dirname, '../public/brand/logo/pattern.svg'), 'utf8');

// Simple regex to grab d="...", fill="..."
const paths = [];
const pathRegex = /<path\s+[^>]*d="([^"]+)"[^>]*style="[^"]*fill:([^;"]+)[^>]*>/g;

let match;
while ((match = pathRegex.exec(svgContent)) !== null) {
  paths.push({
    d: match[1],
    fill: match[2]
  });
}

// Write to a JSON file so I can easily inject it
fs.writeFileSync(path.join(__dirname, 'paths.json'), JSON.stringify(paths, null, 2));
console.log(`Found ${paths.length} paths.`);
