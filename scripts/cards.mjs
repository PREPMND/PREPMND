// Generates one animated SVG card per project for the GitHub README.
import { writeFileSync } from 'node:fs';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const P = [
  { f: 'prep', t: 'PREP', s: 'BUILDING', c: '#ffd23f', l: 'citizen problems → institutions that solve them', l2: 'SIH26043 · org-scoped roles · AI classification · duplicate detection', k: ['NestJS', 'PostgreSQL', 'TypeORM', 'JWT'], n: ['client', 'auth', 'challenge', 'AI', 'media'], e: [[0, 1], [0, 2], [2, 3], [2, 4]] },
  { f: 'preytweet', t: 'PREYTweet', s: 'ONGOING', c: '#7dffb0', l: 'social app, backend-first', l2: 'JWT refresh + cookies · Redis cache & pub/sub · realtime chat', k: ['Node', 'MongoDB', 'Redis', 'Socket.IO'], n: ['client', 'api', 'redis', 'mongo', 'socket'], e: [[0, 1], [1, 2], [1, 3], [0, 4]] },
  { f: 'blogmate', t: 'BlogMate', s: 'SHIPPED', c: '#ff8fb8', l: 'slow work leaves the request', l2: 'AI thumbnails in a background queue · Better Auth · Drizzle', k: ['Next.js', 'BullMQ', 'Redis', 'Postgres'], n: ['web', 'queue', 'worker', 'db', 'cdn'], e: [[0, 1], [1, 2], [0, 3], [2, 4]] },
  { f: 'validator', t: '@preplabs/validator', s: 'ON NPM · 150+', c: '#b69cff', l: 'fluent, zero-dependency TS validation', l2: 'string().min(3).max(20).safeCheck(x) → { ok, error }', k: ['TypeScript', 'zero deps', 'ESM'], n: ['input', 'rules', 'check', 'ok', 'error'], e: [[0, 1], [1, 2], [2, 3], [2, 4]] },
  { f: 'miniredis', t: 'Mini Redis', s: 'STARTING', c: '#4fd6ff', l: 'a key-value store in Go, from first principles', l2: 'TCP · concurrent clients · TTL expiration · persistence', k: ['Go', 'TCP', 'goroutines'], n: ['client', 'tcp', 'store', 'ttl', 'aof'], e: [[0, 1], [1, 2], [2, 3], [2, 4]] },
];
// fixed diagram layout: 0 left, 1/2 middle, 3/4 right
const POS = [[560, 80], [660, 45], [660, 115], [770, 45], [770, 115]];
for (const p of P) {
  const nodes = p.n.map((name, i) => {
    const [x, y] = POS[i];
    const face = i === 0 ? `<g class="eye"><circle cx="${x - 7}" cy="${y - 1}" r="2.6" fill="#111"/><circle cx="${x + 7}" cy="${y - 1}" r="2.6" fill="#111"/></g>` : '';
    return `<rect x="${x - 40}" y="${y - 15}" width="80" height="30" rx="8" fill="${i === 0 ? '#ffd9b0' : '#17161f'}" stroke="${i === 0 ? '#111' : p.c}" stroke-width="2"/>` + (i === 0 ? face : `<text x="${x}" y="${y + 5}" class="m n">${esc(name)}</text>`);
  }).join('');
  const edges = p.e.map(([a, b], i) => {
    const [x1, y1] = POS[a], [x2, y2] = POS[b];
    const d = `M${x1 + 40} ${y1} C${(x1 + x2) / 2} ${y1} ${(x1 + x2) / 2} ${y2} ${x2 - 40} ${y2}`;
    return `<path id="e${i}" d="${d}" fill="none" stroke="#2f2d3a" stroke-width="2"/><circle r="4" fill="${p.c}"><animateMotion dur="${1.6 + i * 0.3}s" begin="${i * 0.4}s" repeatCount="indefinite"><mpath href="#e${i}"/></animateMotion></circle>`;
  }).join('');
  let x = 36;
  const chips = p.k.map((k) => { const w = k.length * 8.4 + 20; const s = `<rect x="${x}" y="112" width="${w}" height="24" rx="12" fill="none" stroke="#3a3846"/><text x="${x + w / 2}" y="128" class="m chip">${esc(k)}</text>`; x += w + 8; return s; }).join('');
  const sw = p.s.length * 8 + 22;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 160" width="860" height="160" role="img" aria-label="${esc(p.t)}: ${esc(p.l)}">
<style>.m{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,'Courier New',monospace}.t{font-size:26px;font-weight:800;fill:#f5f1e8}.l{font-size:15px;fill:#d8d3e6}.l2{font-size:13px;fill:#8b8696}.n{font-size:12px;fill:#d8d3e6;text-anchor:middle}.chip{font-size:12px;fill:#bdb7cc;text-anchor:middle}.st{font-size:11px;font-weight:800;fill:#0e0d14;letter-spacing:.08em}.eye{animation:b 4s steps(1) infinite;transform-box:fill-box;transform-origin:center}@keyframes b{94%{transform:scaleY(.1)}}</style>
<rect x="1.5" y="1.5" width="857" height="157" rx="16" fill="#0e0d14" stroke="#2a2833" stroke-width="3"/>
<rect x="1.5" y="1.5" width="6" height="157" rx="3" fill="${p.c}"/>
<text x="36" y="46" class="m t">${esc(p.t)}</text>
<rect x="${36 + p.t.length * 16.2 + 14}" y="27" width="${sw}" height="22" rx="11" fill="${p.c}"/><text x="${36 + p.t.length * 16.2 + 14 + sw / 2}" y="42" class="m st" text-anchor="middle">${esc(p.s)}</text>
<text x="36" y="74" class="m l">${esc(p.l)}</text>
<text x="36" y="96" class="m l2">${esc(p.l2)}</text>
${chips}
${edges}${nodes}
</svg>`;
  writeFileSync(new URL(`../assets/${p.f}.svg`, import.meta.url), svg);
}
console.log('cards written');
