// Generates one animated SVG card per project for the GitHub README.
import { writeFileSync } from 'node:fs';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const P = [
  { f: 'prep', t: 'PREP', s: 'BUILDING', c: '#ffd23f', l: 'citizen problems → institutions', l2: 'org roles · AI classify · dedupe', k: ['NestJS', 'PostgreSQL', 'TypeORM', 'JWT'], n: ['client', 'auth', 'challenge', 'AI', 'media'], e: [[0, 1], [0, 2], [2, 3], [2, 4]] },
  { f: 'preytweet', t: 'PREYTweet', s: 'ONGOING', c: '#7dffb0', l: 'social app, backend-first', l2: 'JWT refresh · Redis · realtime chat', k: ['Node', 'MongoDB', 'Redis', 'Socket.IO'], n: ['client', 'api', 'redis', 'mongo', 'socket'], e: [[0, 1], [1, 2], [1, 3], [0, 4]] },
  { f: 'blogmate', t: 'BlogMate', s: 'SHIPPED', c: '#ff8fb8', l: 'slow work leaves the request', l2: 'AI thumbnails in a job queue', k: ['Next.js', 'BullMQ', 'Redis', 'Postgres'], n: ['web', 'queue', 'worker', 'db', 'cdn'], e: [[0, 1], [1, 2], [0, 3], [2, 4]] },
  { f: 'validator', t: '@preplabs/validator', s: 'ON NPM · 150+', c: '#b69cff', l: 'fluent, zero-dep TS validation', l2: 'string().min(3).safeCheck(x)', k: ['TypeScript', 'zero deps', 'ESM'], n: ['input', 'rules', 'check', 'ok', 'error'], e: [[0, 1], [1, 2], [2, 3], [2, 4]] },
  { f: 'miniredis', t: 'Mini Redis', s: 'STARTING', c: '#4fd6ff', l: 'key-value store in Go', l2: 'TCP · concurrency · TTL · persistence', k: ['Go', 'TCP', 'goroutines'], n: ['client', 'tcp', 'store', 'ttl', 'aof'], e: [[0, 1], [1, 2], [2, 3], [2, 4]] },
];
// fixed diagram layout: 0 left, 1/2 middle, 3/4 right
const POS = [[90, 236], [230, 214], [230, 266], [400, 214], [400, 266]];
for (const p of P) {
  const nodes = p.n.map((name, i) => {
    const [x, y] = POS[i];
    const face = i === 0 ? `<g class="eye"><circle cx="${x - 7}" cy="${y - 1}" r="2.6" fill="#111"/><circle cx="${x + 7}" cy="${y - 1}" r="2.6" fill="#111"/></g>` : '';
    return `<rect x="${x - 54}" y="${y - 18}" width="108" height="36" rx="10" fill="#17161f" stroke="${p.c}" stroke-width="2"/>` + (false ? face : `<text x="${x}" y="${y + 5}" class="m n">${esc(name)}</text>`);
  }).join('');
  const edges = p.e.map(([a, b], i) => {
    const [x1, y1] = POS[a], [x2, y2] = POS[b];
    const d = `M${x1 + 54} ${y1} C${(x1 + x2) / 2} ${y1} ${(x1 + x2) / 2} ${y2} ${x2 - 54} ${y2}`;
    return `<path id="e${i}" d="${d}" fill="none" stroke="#2f2d3a" stroke-width="2"/><circle r="4" fill="${p.c}"><animateMotion dur="${1.6 + i * 0.3}s" begin="${i * 0.4}s" repeatCount="indefinite"><mpath href="#e${i}"/></animateMotion></circle>`;
  }).join('');
  let x = 32;
  const chips = p.k.map((k) => { const w = k.length * 9 + 22; const s = `<rect x="${x}" y="152" width="${w}" height="28" rx="14" fill="none" stroke="#3a3846"/><text x="${x + w / 2}" y="171" class="m chip">${esc(k)}</text>`; x += w + 8; return s; }).join('');
  const sw = p.s.length * 9.4 + 24;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 300" width="520" height="300" role="img" aria-label="${esc(p.t)}: ${esc(p.l)}">
<style>.m{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,'Courier New',monospace}.t{font-size:30px;font-weight:800;fill:#f5f1e8}.l{font-size:19px;fill:#d8d3e6}.l2{font-size:16px;fill:#9a94a8}.n{font-size:14px;fill:#d8d3e6;text-anchor:middle}.chip{font-size:14px;fill:#bdb7cc;text-anchor:middle}.st{font-size:13px;font-weight:800;fill:#0e0d14;letter-spacing:.08em}.eye{animation:b 4s steps(1) infinite;transform-box:fill-box;transform-origin:center}@keyframes b{94%{transform:scaleY(.1)}}</style>
<rect x="1.5" y="1.5" width="517" height="297" rx="18" fill="#0e0d14" stroke="#2a2833" stroke-width="3"/>
<rect x="1.5" y="1.5" width="8" height="297" rx="4" fill="${p.c}"/>
<text x="32" y="82" class="m t">${esc(p.t)}</text>
<rect x="${496 - sw}" y="20" width="${sw}" height="28" rx="14" fill="${p.c}"/><text x="${496 - sw / 2}" y="39" class="m st" text-anchor="middle">${esc(p.s)}</text>
<text x="32" y="114" class="m l">${esc(p.l)}</text>
<text x="32" y="138" class="m l2">${esc(p.l2)}</text>
${chips}
${edges}${nodes}
</svg>`;
  writeFileSync(new URL(`../assets/${p.f}.svg`, import.meta.url), svg);
}
console.log('cards written');
