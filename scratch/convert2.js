const fs = require('fs');

const svgContent = fs.readFileSync('public/brand/logo/pattern.svg', 'utf8');

// We need to replace dash-case with camelCase for React props.
// Like clip-path -> clipPath, fill-opacity -> fillOpacity
let jsx = svgContent
  .replace(/clip-path/g, 'clipPath')
  .replace(/fill-opacity/g, 'fillOpacity')
  .replace(/fill-rule/g, 'fillRule')
  .replace(/stroke-width/g, 'strokeWidth')
  .replace(/xmlns:xlink/g, 'xmlnsXlink')
  .replace(/xmlns:inkscape/g, 'xmlnsInkscape')
  .replace(/xmlns:sodipodi/g, 'xmlnsSodipodi')
  .replace(/xmlns:svg/g, 'xmlnsSvg')
  .replace(/inkscape:label/g, 'inkscapeLabel')
  .replace(/inkscape:docname/g, 'inkscapeDocname')
  .replace(/inkscape:showpageshadow/g, 'inkscapeShowpageshadow')
  .replace(/inkscape:pageopacity/g, 'inkscapePageopacity')
  .replace(/inkscape:pagecheckerboard/g, 'inkscapePagecheckerboard')
  .replace(/inkscape:deskcolor/g, 'inkscapeDeskcolor')
  .replace(/sodipodi:docname/g, 'sodipodiDocname')
  .replace(/sodipodi:namedview/g, 'sodipodiNamedview')
  .replace(/color-profile/g, 'colorProfile')
  .replace(/xlink:href/g, 'xlinkHref')
  .replace(/clipPathUnits/g, 'clipPathUnits')
  .replace(/transform="matrix\(([^)]+)\)"/g, 'transform="matrix($1)"')
  .replace(/<sodipodi:namedview[^>]*>.*?<\/sodipodi:namedview>/gs, '')
  .replace(/<color-profile[^>]*\/>/gs, '');

// Now we want to add pathLength="1" and a class to all paths inside the "layer-MC0" group.
// Let's just find <path and add className="drawn-path" pathLength="1"
jsx = jsx.replace(/<path\s+id="path\d+"/g, '$& className="drawn-path" pathLength="1" stroke="currentColor" strokeWidth="2"');

fs.writeFileSync('scratch/pattern.jsx', jsx);
console.log('Done!');
