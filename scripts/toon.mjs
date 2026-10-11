// Toon OS-style README images: every card is a cartoon OS window (520 wide, phone-friendly).
import { writeFileSync } from 'node:fs';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const FONT = "'Trebuchet MS','Segoe UI',Verdana,sans-serif";
const MONO = "ui-monospace,SFMono-Regular,Menlo,Consolas,'Courier New',monospace";
const css = `<style>.h{font-family:${FONT};font-weight:800}.b{font-family:${FONT};font-weight:600}.m{font-family:${MONO};font-weight:700}
.eye{animation:bl 4s steps(1) infinite;transform-box:fill-box;transform-origin:center}@keyframes bl{94%{transform:scaleY(.1)}}
.bob{animation:bo 1.1s ease-in-out infinite}@keyframes bo{50%{transform:translateY(-3px)}}</style>`;
const eyes = (x, y, s = 1) => `<g class="eye" transform="translate(${x} ${y}) scale(${s})"><ellipse cx="-7" rx="5" ry="7" fill="#fff" stroke="#111" stroke-width="2.5"/><ellipse cx="7" rx="5" ry="7" fill="#fff" stroke="#111" stroke-width="2.5"/><circle cx="-6" cy="1" r="2.6" fill="#111"/><circle cx="8" cy="1" r="2.6" fill="#111"/></g>`;
/** A Toon OS window frame. */
function win(w, h, bar, title, body, extra = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w + 12} ${h + 12}" width="${w + 12}" height="${h + 12}" role="img" aria-label="${esc(title)}">${css}
<rect x="10" y="10" width="${w}" height="${h}" rx="18" fill="#111"/>
<rect x="2" y="2" width="${w}" height="${h}" rx="18" fill="#fff8e6" stroke="#111" stroke-width="4"/>
<path d="M2 20 Q2 2 20 2 H${w - 16} Q${w + 2} 2 ${w + 2} 20 V48 H2 Z" fill="${bar}" stroke="#111" stroke-width="4"/>
<circle cx="26" cy="25" r="7" fill="#ff6fb5" stroke="#111" stroke-width="2.5"/><circle cx="48" cy="25" r="7" fill="#fff" stroke="#111" stroke-width="2.5"/><circle cx="70" cy="25" r="7" fill="#9be15d" stroke="#111" stroke-width="2.5"/>
<text x="92" y="32" class="h" font-size="18" fill="#111">${esc(title)}</text>
<rect x="${w - 34}" y="12" width="26" height="26" rx="7" fill="#fff" stroke="#111" stroke-width="2.5"/><path d="M${w - 26} 20 l10 10 M${w - 16} 20 l-10 10" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
${body}${extra}</svg>`;
}
const chips = (list, y, colors) => {
  let x = 24;
  return list.map((k, i) => { const w = k.length * 8.6 + 26; const s = `<rect x="${x}" y="${y}" width="${w}" height="28" rx="14" fill="${colors[i % colors.length]}" stroke="#111" stroke-width="2.5"/><text x="${x + w / 2}" y="${y + 19}" class="m" font-size="13" text-anchor="middle" fill="#111">${esc(k)}</text>`; x += w + 8; return s; }).join('');
};
const PAL = ['#ffd23f', '#4fd6ff', '#ff9fc4', '#9be15d', '#ffb562'];

// ---- header: about-me.txt ----
const header = win(508, 290, '#ffd23f', 'about-me.txt', `
<g class="bob"><circle cx="420" cy="120" r="13" fill="#111"/><circle cx="470" cy="120" r="13" fill="#111"/><circle cx="445" cy="150" r="34" fill="#111"/>
<path d="M417 158 C417 138 473 138 473 158 C473 178 417 178 417 158Z" fill="#ffd9b0" stroke="#111" stroke-width="3"/>${eyes(445, 154, 1.05)}
<path d="M436 170 Q445 177 454 170" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/></g>
<text x="24" y="104" class="h" font-size="42" fill="#ff6fb5" stroke="#111" stroke-width="4" paint-order="stroke">Srijan</text>
<text x="24" y="150" class="h" font-size="42" fill="#4fd6ff" stroke="#111" stroke-width="4" paint-order="stroke">Shukla</text>
<text x="24" y="184" class="b" font-size="17" fill="#111">backend · systems · developer tools</text>
<text x="24" y="210" class="b" font-size="15" fill="#555">CS @ MAIT Delhi · intern @ Lili Infotech</text>
${chips(['200+ LeetCode', 'open source', 'npm author'], 232, ['#9be15d', '#ffd23f', '#ff9fc4'])}`);
writeFileSync(new URL('../assets/header.svg', import.meta.url), header);

// ---- project windows ----
const P = [
  { f: 'prep', t: 'PREP', bar: '#ffd23f', st: 'building', stc: '#ffb562', l: ['Connects citizen-reported problems', 'with universities, NGOs and government.'], d: 'NestJS services · org roles · AI classify', k: ['NestJS', 'PostgreSQL', 'TypeORM'] },
  { f: 'preytweet', t: 'PREYTweet', bar: '#4fd6ff', st: 'ongoing', stc: '#9be15d', l: ['Social app, built backend-first.', 'Auth, caching and realtime chat.'], d: 'JWT refresh · Redis pub/sub · Socket.IO', k: ['Node', 'MongoDB', 'Redis'] },
  { f: 'blogmate', t: 'BlogMate', bar: '#ff9fc4', st: 'shipped', stc: '#9be15d', l: ['AI blogging platform where slow', 'work leaves the HTTP request.'], d: 'thumbnails in a BullMQ job queue', k: ['Next.js', 'BullMQ', 'Postgres'] },
  { f: 'validator', t: '@preplabs/validator', bar: '#b69cff', st: '150+ npm', stc: '#ffd23f', l: ['Fluent, zero-dependency', 'TypeScript validation library.'], d: 'string().min(3).safeCheck(x)', k: ['TypeScript', 'zero deps'] },
  { f: 'miniredis', t: 'Mini Redis', bar: '#9be15d', st: 'starting', stc: '#4fd6ff', l: ['A key-value store in Go,', 'built from first principles.'], d: 'TCP · concurrency · TTL · persistence', k: ['Go', 'TCP'] },
];
for (const p of P) {
  const sw = p.st.length * 9.5 + 26;
  const body = `
<rect x="${508 - sw - 20}" y="66" width="${sw}" height="28" rx="14" fill="${p.stc}" stroke="#111" stroke-width="2.5"/><text x="${508 - 20 - sw / 2}" y="85" class="m" font-size="13" text-anchor="middle" fill="#111">${esc(p.st)}</text>
<text x="24" y="88" class="h" font-size="${p.t.length > 12 ? 24 : 30}" fill="#111">${esc(p.t)}</text>
<text x="24" y="124" class="b" font-size="17" fill="#222">${esc(p.l[0])}</text>
<text x="24" y="148" class="b" font-size="17" fill="#222">${esc(p.l[1])}</text>
<rect x="24" y="164" width="460" height="34" rx="9" fill="#1b1b2a" stroke="#111" stroke-width="2.5"/>
<text x="38" y="186" class="m" font-size="13" fill="#7dffb0">❯ <tspan fill="#e9e6ff">${esc(p.d)}</tspan></text>
${chips(p.k, 212, PAL)}
<g transform="translate(460 228)">${eyes(0, 0, 0.9)}</g>`;
  writeFileSync(new URL(`../assets/${p.f}.svg`, import.meta.url), win(508, 256, p.bar, p.t === '@preplabs/validator' ? 'validator.pkg' : `${p.f}.app`, body));
}
console.log('toon cards written');
