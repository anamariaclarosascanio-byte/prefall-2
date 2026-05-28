'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// ── Constants ─────────────────────────────────────────────────────────────────
const SVG_NS = 'http://www.w3.org/2000/svg';
const SVG_W = 1440, SVG_H = 620, SEG_W = SVG_W / 7, CHAIN_Y = 290;
const SEG_TINT = [
  'rgba(0,0,0,0)', 'rgba(0,0,0,0.009)', 'rgba(0,0,0,0)',
  'rgba(0,0,0,0.009)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.009)',
];
const SEG_CX = (i: number) => SEG_W * i + SEG_W / 2;
const THEME: Record<string, string> = {
  transparency: '#8B5CF6', greenwashing: '#0891B2',
  supply: '#D97706', product: '#059669', waste: '#DC2626',
};
const PHYSICAL_FILL_BY_ZONE: Record<string, string> = {
  rawmat: '#D97706', spinmill: '#FBBF24', manufacturing: '#A855F7',
  brands: '#8B5CF6', retail: '#22D3EE', consumer: '#34D399',
};
const PHYSICAL_FILL_POST_BY_ZONE: Record<string, string> = {
  resale: '#D8B4FE', repair: '#34D399', recycling: '#FBBF24', disposal: '#F87171',
};
const PHYSICAL_FILL = '#A855F7';
const VALUE_FILL: Record<string, string> = {
  rawmat: '#DDD6FE', spinmill: '#C4B5FD', manufacturing: '#A855F7',
  brands: '#5B21B6', retail: '#8B5CF6', consumer: '#BBBBBB',
};
const VALUE_FILL_POST: Record<string, string> = {
  resale: '#5B21B6', repair: '#8B5CF6', recycling: '#A855F7', disposal: '#DDD6FE',
};
const REG_FILL: Record<string, string> = {
  rawmat: '#BBBBBB', spinmill: THEME.transparency, manufacturing: THEME.transparency,
  brands: THEME.transparency, retail: THEME.greenwashing, consumer: '#BBBBBB',
};
const REG_FILL_POST: Record<string, string> = {
  resale: THEME.transparency, repair: THEME.product,
  recycling: THEME.waste, disposal: THEME.waste,
};
const SCOPE_FILL: Record<string, string> = {
  rawmat: '#DC2626', spinmill: '#DC2626', manufacturing: '#DC2626',
  brands: '#8B5CF6', retail: '#D97706', consumer: '#D97706',
};
const SCOPE_FILL_POST: Record<string, string> = {
  resale: '#059669', repair: '#059669', recycling: '#D97706', disposal: '#DC2626',
};

interface Circle {
  r: number; label?: string; labelDir?: string;
  labelOutside?: boolean; labelGap?: number; labelVOffset?: number;
  cx?: number; cy?: number;
}
interface ZoneReg { name: string; theme: string | null; }
interface Zone {
  id: string; seg: number; zone: string;
  circles: Circle[]; regs: ZoneReg[];
}
interface PostZone {
  id: string; label: string; y: number; size: number;
  regs: { name: string; theme: string }[];
}

const ZONES: Zone[] = [
  {
    id: 'rawmat', seg: 0, zone: 'RAW MATERIALS',
    circles: [
      { r: 42, label: 'Petrochem\nsynthetics' }, { r: 28, label: 'Cotton\nfarmers' },
      { r: 16, label: 'Linen\n& bast' }, { r: 11, label: 'Wool', labelDir: 'left' },
      { r: 8, label: 'Specialty\nfibres', labelDir: 'above' },
    ],
    regs: [
      { name: 'No direct EU obligation', theme: null },
      { name: 'Affected by EUDR — brand traceability req.', theme: 'supply' },
      { name: 'Affected by CSDDD — brand due diligence', theme: 'supply' },
    ],
  },
  {
    id: 'spinmill', seg: 1, zone: 'YARN & FABRIC',
    circles: [
      { r: 38, label: 'Fabric\nmills' }, { r: 26, label: 'Yarn\nspinners', labelDir: 'left' },
      { r: 16, label: 'Finishing\nhouses', labelDir: 'left' }, { r: 10, label: 'Trim\nsuppliers', labelDir: 'above' },
    ],
    regs: [
      { name: 'Affected by DPP — traceability data req.', theme: 'transparency' },
      { name: 'Affected by CSDDD — brand due diligence', theme: 'supply' },
    ],
  },
  {
    id: 'manufacturing', seg: 2, zone: 'MANUFACTURING',
    circles: [
      { r: 36, label: 'Subcontractors\nTier 2–4' }, { r: 42, label: 'Tier 1\nmanufacturers' },
    ],
    regs: [
      { name: 'Affected by DPP — primary data source', theme: 'transparency' },
      { name: 'Affected by CSDDD — brand due diligence', theme: 'supply' },
      { name: 'Affected by ESPR — repairability design', theme: 'product' },
    ],
  },
  {
    id: 'brands', seg: 3, zone: 'BRANDS',
    circles: [
      { r: 44, label: 'Mass\nmarket' }, { r: 28, label: 'Premium\nbrands', labelDir: 'left' },
      { r: 18, label: 'Luxury\nhouses', labelOutside: true, labelDir: 'above' },
      { r: 14, label: 'DTC\nstartups', labelDir: 'left', labelVOffset: 20 },
      { r: 9, label: 'Independent\ndesigners', labelDir: 'below', labelGap: 14 },
    ],
    regs: [
      { name: 'CSRD — >1,000 emp. AND >€450M', theme: 'transparency' },
      { name: 'EUDR — operator (leather & rubber)', theme: 'supply' },
      { name: 'CSDDD — supply chain due diligence', theme: 'supply' },
      { name: 'ECGT — no vague claims', theme: 'greenwashing' },
      { name: 'DPP — first-in-market obligation', theme: 'transparency' },
      { name: 'ESPR — unsold goods destruction ban', theme: 'product' },
      { name: 'PPWR — e-commerce packaging', theme: 'waste' },
    ],
  },
  {
    id: 'retail', seg: 4, zone: 'LOGISTICS AND RETAIL',
    circles: [
      { r: 36, label: 'Marketplaces' }, { r: 28, label: 'Department\nstores', labelOutside: true, labelDir: 'right' },
      { r: 22, label: 'Specialty\nretail', labelOutside: true, labelDir: 'left' },
      { r: 17, label: 'Wholesale\nagents', labelDir: 'right' }, { r: 11, label: 'DTC\nchannels', labelDir: 'above' },
    ],
    regs: [
      { name: 'ECGT — co-liability for claims', theme: 'greenwashing' },
      { name: 'DPP — display at point of sale', theme: 'transparency' },
      { name: 'PPWR — packaging & parcels', theme: 'waste' },
      { name: 'EU Textile EPR — collection points', theme: 'waste' },
      { name: 'ESPR — display repair info', theme: 'product' },
    ],
  },
  {
    id: 'consumer', seg: 5, zone: 'CONSUMER',
    circles: [
      { r: 36, label: 'Value\nshopper' },
      { r: 28, label: 'Aspirational\nshopper', labelOutside: true, labelDir: 'below', labelGap: 14 },
      { r: 18, label: 'Affluent\nconsumer', labelOutside: true, labelDir: 'above-right' },
      { r: 12, label: 'Conscious\nbuyer', labelDir: 'left', labelVOffset: -10 },
      { r: 7, label: '' }, { r: 5, label: '' },
    ],
    regs: [{ name: 'No direct regulatory obligation', theme: null }],
  },
];

const POST_ZONES: PostZone[] = [
  { id: 'resale', label: 'Resale', y: 163, size: 36, regs: [{ name: 'DPP follows garment', theme: 'transparency' }] },
  { id: 'repair', label: 'Repair &\nRental', y: 278, size: 26, regs: [{ name: 'ESPR right to repair', theme: 'product' }] },
  { id: 'recycling', label: 'Recycling', y: 383, size: 20, regs: [{ name: 'EU Textile EPR', theme: 'waste' }, { name: 'CSRD Scope 3 Cat.12', theme: 'transparency' }] },
  { id: 'disposal', label: 'Disposal', y: 478, size: 15, regs: [{ name: 'EPR avoidance incentive', theme: 'waste' }] },
];

// ── Circle packing ────────────────────────────────────────────────────────────
function pack(circles: Circle[]): Circle[] {
  const PAD = 11, H_LIM = SEG_W / 2 - 8, placed: Circle[] = [];
  circles.forEach((c, i) => {
    if (i === 0) { placed.push({ ...c, cx: 0, cy: 0 }); return; }
    let best: { cx: number; cy: number } | null = null, bestScore = Infinity;
    for (let ai = 0; ai < 240; ai++) {
      const angle = (ai / 240) * 2 * Math.PI;
      for (let di = 0; di < 7; di++) {
        const baseD = placed[0].r + c.r + PAD, d = baseD * (0.55 + di * 0.22);
        const cx = d * Math.cos(angle), cy = d * Math.sin(angle);
        if (Math.abs(cx) + c.r > H_LIM) continue;
        const ok = placed.every(p => Math.sqrt((cx - p.cx!) ** 2 + (cy - p.cy!) ** 2) >= p.r + c.r + PAD);
        if (!ok) continue;
        let ap = 0;
        placed.forEach(p => { if (Math.abs(cx - p.cx!) < 4) ap += 60; if (Math.abs(cy - p.cy!) < 4) ap += 30; });
        const centX = placed.reduce((s, p) => s + p.cx!, 0) / placed.length;
        const centY = placed.reduce((s, p) => s + p.cy!, 0) / placed.length;
        const score = Math.sqrt((cx - centX) ** 2 + (cy - centY) ** 2) * 0.5 + ap + Math.abs(cy) * 0.15;
        if (score < bestScore) { bestScore = score; best = { cx, cy }; }
      }
    }
    if (!best) {
      const topY = Math.min(...placed.map(p => p.cy! - p.r));
      best = { cx: (i % 3 - 1) * (c.r + 4), cy: topY - c.r - PAD };
    }
    placed.push({ ...c, cx: best.cx, cy: best.cy });
  });
  return placed;
}

function centerPack(circles: Circle[]): Circle[] {
  const placed = pack(circles);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  placed.forEach(c => {
    minX = Math.min(minX, c.cx! - c.r); maxX = Math.max(maxX, c.cx! + c.r);
    minY = Math.min(minY, c.cy! - c.r); maxY = Math.max(maxY, c.cy! + c.r);
  });
  const offX = (minX + maxX) / 2, offY = (minY + maxY) / 2;
  return placed.map(c => ({ ...c, cx: c.cx! - offX, cy: c.cy! - offY }));
}

const LAYOUTS: Record<string, Circle[]> = Object.fromEntries(
  ZONES.map(z => [z.id, centerPack(z.circles)])
);

// ── SVG helpers ───────────────────────────────────────────────────────────────
function lcEl(tag: string, attrs: Record<string, string>, parent?: Element): Element {
  const e = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (parent) parent.appendChild(e);
  return e;
}
function lcTxt(content: string, attrs: Record<string, string>, parent?: Element): Element {
  const t = lcEl('text', attrs, parent);
  t.textContent = content;
  return t;
}
function lcSpan(content: string, attrs: Record<string, string>, parent: Element): Element {
  const s = document.createElementNS(SVG_NS, 'tspan');
  for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v);
  s.textContent = content;
  parent.appendChild(s);
  return s;
}
function lcAddLeg(container: Element, color: string, label: string) {
  const item = document.createElement('div'); item.className = 'lc-legend-item';
  const dot = document.createElement('div'); dot.className = 'lc-legend-dot'; dot.style.background = color;
  const span = document.createElement('span'); span.textContent = label.toUpperCase();
  item.appendChild(dot); item.appendChild(span); container.appendChild(item);
}
function getFill(id: string, layer: string, isPost: boolean): string {
  if (layer === 'physical') return isPost ? (PHYSICAL_FILL_POST_BY_ZONE[id] || PHYSICAL_FILL) : (PHYSICAL_FILL_BY_ZONE[id] || PHYSICAL_FILL);
  if (layer === 'value') return isPost ? (VALUE_FILL_POST[id] || '#E6E6E6') : (VALUE_FILL[id] || '#E6E6E6');
  if (layer === 'regulatory') return isPost ? (REG_FILL_POST[id] || '#E6E6E6') : (REG_FILL[id] || '#E6E6E6');
  if (layer === 'scope') return isPost ? (SCOPE_FILL_POST[id] || '#E6E6E6') : (SCOPE_FILL[id] || '#E6E6E6');
  return '#E6E6E6';
}

// ── Tooltip helpers ───────────────────────────────────────────────────────────
function lcPosTip(x: number, y: number) {
  const tt = document.getElementById('pill-tt');
  if (!tt) return;
  const tw = tt.offsetWidth, th = tt.offsetHeight;
  let lx = x + 16, ly = y - th / 2;
  if (lx + tw > window.innerWidth - 8) lx = x - tw - 16;
  if (lx < 8) lx = 8;
  if (ly < 8) ly = 8;
  if (ly + th > window.innerHeight - 8) ly = window.innerHeight - th - 8;
  tt.style.left = lx + 'px'; tt.style.top = ly + 'px';
}
function lcShowTip(e: MouseEvent, name: string, col: string) {
  const tt = document.getElementById('pill-tt');
  if (!tt) return;
  tt.textContent = name;
  tt.style.borderLeft = `3px solid ${col}`;
  tt.style.paddingLeft = '10px';
  tt.classList.add('visible');
  lcPosTip(e.clientX, e.clientY);
}
function lcMoveTip(e: MouseEvent) { lcPosTip(e.clientX, e.clientY); }
function lcHideTip() { const tt = document.getElementById('pill-tt'); if (tt) tt.classList.remove('visible'); }

// ── Component ─────────────────────────────────────────────────────────────────
export function LifecycleMapScript() {
  const router = useRouter();

  useEffect(() => {
    const HEADER_H = window.innerWidth <= 1100 ? 82 : 0;
    let lcCurrentLayer = 'physical';
    let lcHasAnimated = false;
    let lcZoneGroups: { el: Element; i: number }[] = [];

    function showNode(id: string) {
      router.push(`/value-chain/${id}`);
    }

    function lcAnimateNodes() {
      if (lcHasAnimated) return;
      lcHasAnimated = true;
      lcZoneGroups.forEach(entry => {
        (entry.el as HTMLElement).style.animation = `lcNodeIn 2.6s ease ${entry.i * 520}ms forwards`;
      });
    }

    function lcRender(layer: string) {
      const isFirst = !lcHasAnimated;
      lcZoneGroups = [];
      const svg = document.getElementById('lc-svg');
      if (!svg) return;
      svg.innerHTML = '';

      // Defs: arrowheads
      const defs = lcEl('defs', {}, svg);
      const mkC = lcEl('marker', { id: 'lc-arr-chain', viewBox: '0 0 12 12', refX: '10', refY: '6', markerWidth: '8', markerHeight: '8', orient: 'auto' }, defs);
      lcEl('path', { d: 'M2 2L10 6L2 10', fill: 'none', stroke: 'rgba(0,0,0,0.28)', 'stroke-width': '1.4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, mkC);
      const mkL = lcEl('marker', { id: 'lc-arr-loop', viewBox: '0 0 10 10', refX: '8', refY: '5', markerWidth: '6', markerHeight: '6', orient: 'auto-start-reverse' }, defs);
      lcEl('path', { d: 'M2 1L8 5L2 9', fill: 'none', stroke: 'rgba(0,0,0,0.32)', 'stroke-width': '1.4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, mkL);

      // Column tint backgrounds + dividers
      ZONES.forEach((z, i) => { lcEl('rect', { x: String(z.seg * SEG_W), y: String(HEADER_H), width: String(SEG_W), height: String(SVG_H - HEADER_H), fill: SEG_TINT[i] }, svg); });
      lcEl('rect', { x: String(6 * SEG_W), y: String(HEADER_H), width: String(SEG_W), height: String(SVG_H - HEADER_H), fill: 'rgba(0,0,0,0)' }, svg);
      for (let i = 1; i <= 6; i++) lcEl('line', { x1: String(i * SEG_W), y1: '0', x2: String(i * SEG_W), y2: String(SVG_H), stroke: 'rgba(0,0,0,0.08)', 'stroke-width': '0.5' }, svg);

      // Mobile column headers (HEADER_H > 0 when width <= 1100)
      if (HEADER_H > 0) {
        const HDR_NUM_COL = 'rgba(0,0,0,0.38)', HDR_NAME_COL = 'rgba(0,0,0,0.65)', HDR_ARR_COL = 'rgba(0,0,0,0.28)', HDR_LINE_COL = 'rgba(0,0,0,0.20)', HDR_HOVER = 'rgba(0,0,0,0.04)';
        lcEl('line', { x1: '0', y1: '0', x2: String(SVG_W), y2: '0', stroke: HDR_LINE_COL, 'stroke-width': '1' }, svg);
        lcEl('line', { x1: '0', y1: String(HEADER_H), x2: String(SVG_W), y2: String(HEADER_H), stroke: HDR_LINE_COL, 'stroke-width': '1' }, svg);
        [
          { num: '01', name: 'Raw Materials', id: 'raw-materials' }, { num: '02', name: 'Yarn & Fabric', id: 'yarn-fabric' },
          { num: '03', name: 'Manufacturing', id: 'manufacturing' }, { num: '04', name: 'Brands', id: 'brands' },
          { num: '05', name: 'Logistics & Retail', id: 'logistics-retail' }, { num: '06', name: 'Consumer', id: 'consumer' },
          { num: '07', name: 'Secondary Market', id: 'secondary-market' },
        ].forEach((n, i) => {
          const x0 = i * SEG_W;
          const gh = lcEl('g', { style: 'cursor:pointer' }, svg);
          const bg = lcEl('rect', { x: String(x0), y: '0', width: String(SEG_W), height: String(HEADER_H), fill: 'transparent' }, gh);
          lcTxt(n.num, { x: String(x0 + 12), y: '21', 'font-family': "'Figtree',sans-serif", 'font-size': '13', 'font-weight': '500', fill: HDR_NUM_COL, 'letter-spacing': '0.06em' }, gh);
          const nameT = lcTxt(n.name, { x: String(x0 + SEG_W / 2), y: '60', 'font-family': "'Figtree',sans-serif", 'font-size': '21', 'font-weight': '600', fill: HDR_NAME_COL, 'letter-spacing': '-0.02em', 'text-anchor': 'middle' }, gh);
          const arrT = lcTxt('↗', { x: String(x0 + SEG_W - 12), y: '21', 'font-family': "'Figtree',sans-serif", 'font-size': '16', fill: HDR_ARR_COL, 'text-anchor': 'end' }, gh);
          gh.addEventListener('mouseenter', () => { bg.setAttribute('fill', HDR_HOVER); nameT.setAttribute('fill', '#8B5CF6'); arrT.setAttribute('fill', '#8B5CF6'); });
          gh.addEventListener('mouseleave', () => { bg.setAttribute('fill', 'transparent'); nameT.setAttribute('fill', HDR_NAME_COL); arrT.setAttribute('fill', HDR_ARR_COL); });
          gh.addEventListener('click', () => showNode(n.id));
        });
      }

      // Main chain arrow
      lcEl('line', { x1: '20', y1: String(CHAIN_Y), x2: String(SEG_W * 6 - 10), y2: String(CHAIN_Y), stroke: 'rgba(0,0,0,0.25)', 'stroke-width': '1.5', 'stroke-dasharray': '5 10', markerEnd: 'url(#lc-arr-chain)' }, svg);

      // Post-zone branch lines + vertical connector
      const POST_CX = SEG_CX(6);
      POST_ZONES.forEach(n => lcEl('line', { x1: String(SEG_CX(5)), y1: String(CHAIN_Y), x2: String(POST_CX - n.size - 8), y2: String(n.y), stroke: 'rgba(0,0,0,0.18)', 'stroke-width': '1.1', 'stroke-dasharray': '3 4' }, svg));
      const p0 = POST_ZONES[0], pL = POST_ZONES[POST_ZONES.length - 1];
      lcEl('line', { x1: String(POST_CX), y1: String(p0.y - p0.size - 14), x2: String(POST_CX), y2: String(pL.y + pL.size + 14), stroke: 'rgba(0,0,0,0.10)', 'stroke-width': '0.7', 'stroke-dasharray': '2 5' }, svg);

      // Recycling loop path
      if (layer !== 'regulatory') {
        const rc = POST_ZONES.find(n => n.id === 'recycling')!;
        lcEl('path', {
          d: `M ${POST_CX} ${rc.y + rc.size + 4} C ${POST_CX - 80} ${SVG_H - 30}, ${SEG_CX(1) + 80} ${SVG_H - 30}, ${SEG_CX(1)} ${CHAIN_Y + 16}`,
          fill: 'none', stroke: 'rgba(0,0,0,0.22)', 'stroke-width': '1.2', 'stroke-dasharray': '6 5', markerEnd: 'url(#lc-arr-loop)',
        }, svg);
        const lx = (POST_CX + SEG_CX(1)) / 2, ly = pL.y + pL.size + 50;
        lcEl('rect', { x: String(lx - 92), y: String(ly - 10), width: '184', height: '16', fill: 'rgba(240,240,238,0.88)', rx: '2' }, svg);
        lcTxt('CLOSED-LOOP TARGET · <1% CURRENTLY', { x: String(lx), y: String(ly), 'text-anchor': 'middle', 'font-family': "'Figtree', sans-serif", 'font-size': '8', fill: 'rgba(0,0,0,0.60)', 'letter-spacing': '0.06em' }, svg);
      }

      // Main zones
      ZONES.forEach((z, i) => {
        const fill = getFill(z.id, layer, false);
        const circles = LAYOUTS[z.id];
        const cx = SEG_CX(z.seg);
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        circles.forEach(c => { minX = Math.min(minX, c.cx! - c.r); maxX = Math.max(maxX, c.cx! + c.r); minY = Math.min(minY, c.cy! - c.r); maxY = Math.max(maxY, c.cy! + c.r); });
        const nodeId = z.id === 'spinmill' ? 'yarn-fabric' : z.id === 'rawmat' ? 'raw-materials' : z.id === 'retail' ? 'logistics-retail' : z.id === 'secondary' ? 'secondary-market' : z.id;
        const gStyle = (isFirst ? 'opacity:0;' : '') + 'cursor:pointer;';
        const g = lcEl('g', { transform: `translate(${cx},${CHAIN_Y})`, style: gStyle }, svg);
        g.addEventListener('click', () => showNode(nodeId));
        if (isFirst) lcZoneGroups.push({ el: g, i });

        circles.forEach(c => {
          lcEl('circle', { cx: String(c.cx!), cy: String(c.cy!), r: String(c.r + 10), fill, 'fill-opacity': '0.12' }, g);
          lcEl('circle', { cx: String(c.cx!), cy: String(c.cy!), r: String(c.r), fill: '#ffffff', 'fill-opacity': '1' }, g);
          lcEl('circle', { cx: String(c.cx!), cy: String(c.cy!), r: String(c.r), fill, 'fill-opacity': '0.70', stroke: fill, 'stroke-opacity': '0.92', 'stroke-width': '1.8' }, g);
          const lls = c.label ? c.label.split('\n') : [];
          if (!lls.length || !lls[0]) return;
          const LLH_IN = 12, LLH_OUT = 10;
          if (c.r >= 18 && !c.labelOutside) {
            const blockH = lls.length * LLH_IN;
            const t = lcEl('text', { x: String(c.cx!), y: String(c.cy!), 'text-anchor': 'middle', 'font-family': "'Figtree', sans-serif", 'font-size': '11', 'font-weight': '600', fill: '#ffffff', style: 'pointer-events:none' }, g);
            lls.forEach((ln, li) => lcSpan(ln, { x: String(c.cx!), dy: li === 0 ? `${-(blockH / 2 - LLH_IN * 0.72)}px` : `${LLH_IN}px` }, t));
          } else {
            const blockH = lls.length * LLH_OUT;
            const GAP = c.labelGap !== undefined ? c.labelGap : 7;
            const segHalf = SEG_W / 2, dir = c.labelDir || 'auto';
            const lColor = '#646464';
            let lx: number, ly: number, anchor: string;
            if (dir === 'above') { lx = c.cx!; ly = c.cy! - c.r - GAP - blockH + LLH_OUT * 0.8; anchor = 'middle'; }
            else if (dir === 'above-right') { const dX = c.cx! + c.r * 0.7 + GAP, dY = c.cy! - c.r * 0.7 - GAP; lx = dX; ly = dY - blockH + LLH_OUT * 0.8; anchor = 'start'; }
            else if (dir === 'below') { lx = c.cx!; ly = c.cy! + c.r + GAP + LLH_OUT * 0.5; anchor = 'middle'; }
            else if (dir === 'left') { lx = c.cx! - c.r - GAP; ly = c.cy!; anchor = 'end'; }
            else if (dir === 'right') { lx = c.cx! + c.r + GAP; ly = c.cy!; anchor = 'start'; }
            else {
              const lW = Math.max(...lls.map(l => l.length)) * 5.2;
              const goLeft = c.cx! + c.r + GAP + lW > segHalf + 4;
              lx = goLeft ? c.cx! - c.r - GAP : c.cx! + c.r + GAP; ly = c.cy!; anchor = goLeft ? 'end' : 'start';
            }
            if (!ly) ly = c.cy!; if (c.labelVOffset) ly += c.labelVOffset;
            const t = lcEl('text', { x: String(lx), y: String(ly), 'text-anchor': anchor, 'font-family': "'Figtree', sans-serif", 'font-size': '10', 'font-weight': '400', fill: lColor, 'letter-spacing': '0.01em', style: 'pointer-events:none' }, g);
            lls.forEach((ln, li) => lcSpan(ln, { x: String(lx), dy: li === 0 ? `${-(blockH / 2 - LLH_OUT * 0.72)}px` : `${LLH_OUT}px` }, t));
          }
        });

        // Regulatory pills
        if (layer === 'regulatory') {
          const PILL_W = 158, PILL_H = 20, PILL_GAP = 24;
          const pillCX = (minX + maxX) / 2;
          function drawPill(reg: ZoneReg, pi: number, py: number) {
            const col = reg.theme ? THEME[reg.theme] : 'rgba(0,0,0,0.30)';
            const rawFs = Math.min(8.5, (PILL_W - 24) / (reg.name.length * 1.95));
            const fontSz = Math.max(6.5, rawFs).toFixed(1);
            const clipId = `pc-${z.id}-${pi}`;
            const defs2 = svg!.querySelector('defs') || lcEl('defs', {}, svg!);
            const cp = lcEl('clipPath', { id: clipId }, defs2);
            lcEl('rect', { x: String(-(PILL_W / 2) + 6), y: String(-(PILL_H / 2)), width: String(PILL_W - 12), height: String(PILL_H) }, cp);
            const g2 = lcEl('g', { transform: `translate(${pillCX},${py})`, style: 'cursor:pointer' }, g);
            lcEl('rect', { x: String(-(PILL_W / 2)), y: String(-(PILL_H / 2)), width: String(PILL_W), height: String(PILL_H), rx: '3', fill: col, 'fill-opacity': '0.18', stroke: col, 'stroke-opacity': '0.60', 'stroke-width': '0.7' }, g2);
            const pt = lcEl('text', { x: '0', y: '4.5', 'text-anchor': 'middle', 'font-family': "'Figtree', sans-serif", 'font-size': fontSz, 'font-weight': '400', fill: col, 'letter-spacing': '0.01em', 'clip-path': `url(#${clipId})` }, g2);
            pt.textContent = reg.name.toUpperCase();
            g2.addEventListener('mouseenter', e => lcShowTip(e as MouseEvent, reg.name, col));
            g2.addEventListener('mousemove', e => lcMoveTip(e as MouseEvent));
            g2.addEventListener('mouseleave', lcHideTip);
          }
          if (z.id === 'brands') {
            const aboveCount = 3;
            z.regs.forEach((reg, ri) => {
              const py = ri < aboveCount ? minY - 28 - PILL_GAP - (aboveCount - 1 - ri) * PILL_GAP : maxY + 28 + (ri - aboveCount) * PILL_GAP;
              drawPill(reg, ri, py);
            });
          } else {
            const extraGap = z.id === 'consumer' ? 55 : 0;
            z.regs.forEach((reg, ri) => drawPill(reg, ri, maxY + 28 + extraGap + ri * PILL_GAP));
          }
        }
      });

      // Post zones (secondary market column)
      POST_ZONES.forEach((n) => {
        const nr = n.size, fill = getFill(n.id, layer, true);
        const gStyle = (isFirst ? 'opacity:0;' : '') + 'cursor:pointer;';
        const g = lcEl('g', { style: gStyle }, svg);
        g.addEventListener('click', () => showNode('secondary-market'));
        if (isFirst) lcZoneGroups.push({ el: g, i: ZONES.length });
        lcEl('circle', { cx: String(POST_CX), cy: String(n.y), r: String(nr + 10), fill, 'fill-opacity': '0.12' }, g);
        lcEl('circle', { cx: String(POST_CX), cy: String(n.y), r: String(nr), fill: '#ffffff', 'fill-opacity': '1' }, g);
        lcEl('circle', { cx: String(POST_CX), cy: String(n.y), r: String(nr), fill, 'fill-opacity': layer === 'physical' ? '0.55' : '0.70', stroke: fill, 'stroke-opacity': '0.92', 'stroke-width': '1.8' }, g);
        const lt = lcEl('text', { x: String(POST_CX + nr + 11), y: String(n.y + 4), 'font-family': "'Figtree', sans-serif", 'font-size': '10', 'font-weight': '400', fill: '#646464', 'letter-spacing': '0.01em' }, g);
        n.label.split('\n').forEach((ln, li) => lcSpan(ln, { x: String(POST_CX + nr + 11), dy: li === 0 ? '0' : '12px' }, lt));
        if (layer === 'regulatory') {
          n.regs.forEach((reg, ri) => {
            const col = THEME[reg.theme] || '#A0A0A0';
            const py = n.y + nr + 22 + ri * 22;
            const rawFs = Math.min(8.5, (158 - 24) / (reg.name.length * 1.95));
            const fontSz = Math.max(6.5, rawFs).toFixed(1);
            const clipId = `pp-${n.id}-${ri}`;
            const defs2 = svg!.querySelector('defs') || lcEl('defs', {}, svg!);
            const cp = lcEl('clipPath', { id: clipId }, defs2);
            lcEl('rect', { x: String(POST_CX - 73), y: String(py - 10), width: '146', height: '20' }, cp);
            const g2 = lcEl('g', { style: 'cursor:pointer' }, g);
            lcEl('rect', { x: String(POST_CX - 79), y: String(py - 10), width: '158', height: '20', rx: '3', fill: col, 'fill-opacity': '0.18', stroke: col, 'stroke-opacity': '0.60', 'stroke-width': '0.7' }, g2);
            const pt = lcEl('text', { x: String(POST_CX), y: String(py + 4.5), 'text-anchor': 'middle', 'font-family': "'Figtree', sans-serif", 'font-size': fontSz, 'font-weight': '400', fill: col, 'letter-spacing': '0.01em', 'clip-path': `url(#${clipId})` }, g2);
            pt.textContent = reg.name.toUpperCase();
            g2.addEventListener('mouseenter', e => lcShowTip(e as MouseEvent, reg.name, col));
            g2.addEventListener('mousemove', e => lcMoveTip(e as MouseEvent));
            g2.addEventListener('mouseleave', lcHideTip);
          });
        }
      });

      // Legend
      const legend = document.getElementById('lc-legend');
      if (legend) {
        legend.innerHTML = '';
        if (layer === 'physical') lcAddLeg(legend, '#000000', 'Larger circle = greater volume of actors at that stage');
        if (layer === 'value') { lcAddLeg(legend, '#EDE9FE', 'Low margin capture'); lcAddLeg(legend, '#8B5CF6', 'Moderate'); lcAddLeg(legend, '#5B21B6', 'Highest value capture'); }
        if (layer === 'regulatory') {
          lcAddLeg(legend, THEME.transparency, 'Transparency (CSRD · DPP · ESRS)');
          lcAddLeg(legend, THEME.greenwashing, 'Greenwashing (ECGT)');
          lcAddLeg(legend, THEME.supply, 'Supply chain (CSDDD · EUDR)');
          lcAddLeg(legend, THEME.product, 'Product design (ESPR)');
          lcAddLeg(legend, THEME.waste, 'Waste (EU Textile EPR · PPWR)');
        }
        if (layer === 'scope') {
          lcAddLeg(legend, '#DC2626', 'Scope 3 Cat.1 upstream · Cat.12 disposal, the highest-impact stages');
          lcAddLeg(legend, '#8B5CF6', 'Scope 1+2 + full Scope 3 reporting obligation (brands)');
          lcAddLeg(legend, '#D97706', 'Scope 1+2 direct · Cat.11 use-phase · Cat.12 recycling');
          lcAddLeg(legend, '#059669', 'Lower-impact end-of-life: reduces Cat.12 by extending garment life');
        }
      }

      // Sync active state on layer toggle buttons
      document.querySelectorAll('.ltog').forEach(b => {
        b.classList.toggle('active', (b as HTMLElement).dataset.layer === layer);
      });
    }

    // Layer toggle click handlers
    document.querySelectorAll('.ltog').forEach(btn => {
      btn.addEventListener('click', () => {
        const layer = (btn as HTMLElement).dataset.layer;
        if (!layer || layer === lcCurrentLayer) return;
        const fade = document.getElementById('lc-fade');
        if (fade) {
          fade.classList.add('out');
          setTimeout(() => { lcCurrentLayer = layer; lcRender(layer); fade.classList.remove('out'); }, 220);
        } else {
          lcCurrentLayer = layer; lcRender(layer);
        }
      });
    });

    // Initial render + first-render animation
    lcRender('physical');
    setTimeout(() => { if (!lcHasAnimated) lcAnimateNodes(); }, 800);

    // Scroll hint: animate right then back when map first enters viewport
    (function () {
      const wrap = document.querySelector('.lc-svg-wrap') as HTMLElement | null;
      if (!wrap) return;
      function easeInOut(t: number) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
      function animScroll(el: HTMLElement, to: number, dur: number, cb?: () => void) {
        const from = el.scrollLeft; let start: number | null = null;
        function step(ts: number) {
          if (!start) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          el.scrollLeft = from + (to - from) * easeInOut(p);
          if (p < 1) requestAnimationFrame(step); else if (cb) cb();
        }
        requestAnimationFrame(step);
      }
      let hinted = false;
      const obs = new IntersectionObserver(entries => {
        if (hinted) return;
        if (!entries[0].isIntersecting) return;
        if (wrap.scrollWidth <= wrap.clientWidth + 4) return;
        hinted = true; obs.disconnect();
        setTimeout(() => {
          animScroll(wrap, 200, 1200, () => { setTimeout(() => animScroll(wrap, 0, 1200), 1400); });
        }, 600);
      }, { threshold: 0.5 });
      obs.observe(wrap);
    })();

    // Resize: adjust SVG min-width
    const handleResize = () => {
      const svg = document.getElementById('lc-svg');
      if (svg) svg.style.minWidth = window.innerWidth < 900 ? '1260px' : '900px';
    };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
