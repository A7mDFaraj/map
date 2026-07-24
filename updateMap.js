const fs = require('fs');
const sa = require('@svg-maps/saudi-arabia').default;
function getBbox(path) {
  const matches = path.match(/-?\d+(\.\d+)?/g);
  if (!matches) return [0,0,0,0];
  const nums = matches.map(Number);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] < minX) minX = nums[i];
    if (nums[i] > maxX) maxX = nums[i];
    if (nums[i+1] < minY) minY = nums[i+1];
    if (nums[i+1] > maxY) maxY = nums[i+1];
  }
  return [minX, minY, maxX, maxY];
}

const idMap = {
  riyadh: 'ryiadh',
  makkah: 'mecca',
  eastern: 'eastern-province',
  madinah: 'medina',
  asir: 'asir',
  qassim: 'al-qassim',
  tabuk: 'tabuk',
  hail: 'hail', 
  jizan: 'jizan',
  najran: 'najran',
  baha: 'al-bahah',
  northern: 'northern-borders',
  jouf: 'al-jawf'
};

let content = fs.readFileSync('data/mapRegionsData.ts', 'utf-8');

for (const [myId, theirId] of Object.entries(idMap)) {
  const loc = sa.locations.find(l => l.id === theirId);
  if (!loc) { console.error('not found', theirId); continue; }
  
  const bbox = getBbox(loc.path);
  // cx, cy as center of bounding box
  const cx = Math.round((bbox[0] + bbox[2]) / 2);
  const cy = Math.round((bbox[1] + bbox[3]) / 2);
  
  let finalCx = cx;
  let finalCy = cy;
  // Tweaks
  if (myId === 'riyadh') { finalCx -= 15; finalCy += 15; }
  if (myId === 'eastern') { finalCx += 20; finalCy -= 10; }
  if (myId === 'makkah') { finalCx -= 5; finalCy -= 5; }
  
  // Regex to replace svgPath, cx, cy (handling optional carriage returns)
  const pathRegex = new RegExp(`(id:\\s*'${myId}'[\\s\\S]*?svgPath:\\s*')[^']*(')`);
  content = content.replace(pathRegex, `$1${loc.path}$2`);
  
  const cxRegex = new RegExp(`(id:\\s*'${myId}'[\\s\\S]*?cx:\\s*)\\d+(,)`);
  content = content.replace(cxRegex, `$1${finalCx}$2`);
  
  const cyRegex = new RegExp(`(id:\\s*'${myId}'[\\s\\S]*?cy:\\s*)\\d+(,)`);
  content = content.replace(cyRegex, `$1${finalCy}$2`);
}

fs.writeFileSync('data/mapRegionsData.ts', content);
console.log('Updated mapRegionsData.ts with real paths!');
