const fs = require('fs');

let content = fs.readFileSync('public/SaudiMap2.tsx', 'utf8');

// Fix style string to object
content = content.replace(/style="([^"]+)"/g, (match, p1) => {
  const parts = p1.split(';').filter(Boolean);
  const objStr = parts.map(p => {
    let [key, val] = p.split(':');
    // camelCase the key
    key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    return `${key}: "${val}"`;
  }).join(', ');
  return `style={{${objStr}}}`;
});

// Remove inkscapeLabel
content = content.replace(/inkscapeLabel="[^"]*"/g, '');

fs.writeFileSync('public/SaudiMap2.tsx', content);
console.log('Fixed React errors!');
