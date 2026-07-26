const fs = require('fs');

const oldMap = fs.readFileSync('public/SaudiMap2.tsx', 'utf8');
const patternJsx = fs.readFileSync('scratch/pattern.jsx', 'utf8');

// Extract defs from pattern.jsx
const defsMatch = patternJsx.match(/<defs[^>]*>([\s\S]*?)<\/defs>/);
const patternDefs = defsMatch ? defsMatch[1] : '';

// Extract layer-MC0 from pattern.jsx
const layerMatch = patternJsx.match(/<g[^>]*id="layer-MC0"[^>]*>([\s\S]*?)<\/g>/);
const patternLayer = layerMatch ? layerMatch[1] : '';

const styleBlock = `
        <style>{\`
          .drawn-path {
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
            animation: drawPath 8s ease-in-out infinite;
            stroke: #1C81AC;
            stroke-width: 2;
          }
          @keyframes drawPath {
            0% { stroke-dashoffset: 1; fill-opacity: 0; }
            40% { stroke-dashoffset: 0; fill-opacity: 0; }
            60% { stroke-dashoffset: 0; fill-opacity: 1; }
            80% { stroke-dashoffset: 0; fill-opacity: 1; }
            100% { stroke-dashoffset: 1; fill-opacity: 0; }
          }
        \`}</style>
`;

const newDefs = `
        <defs>
          ${patternDefs}
          <pattern
            id="drawnBrandPattern"
            width="666.66669"
            height="666.66669"
            patternUnits="userSpaceOnUse"
          >
            <g transform="scale(0.9) translate(30, 30)">
              ${patternLayer}
            </g>
          </pattern>
        </defs>
`;

let newMap = oldMap.replace(/<defs>[\s\S]*?<\/defs>/, newDefs);
// Also replace url(#framePattern) with url(#drawnBrandPattern)
newMap = newMap.replace(/url\(#framePattern\)/g, 'url(#drawnBrandPattern)');
// Insert styleBlock right after <svg ...>
newMap = newMap.replace(/(<svg[^>]*>)/, '$1' + styleBlock);

fs.writeFileSync('public/SaudiMap2.tsx', newMap);
console.log('Map updated!');
