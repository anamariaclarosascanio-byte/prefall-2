'use client';

import { useEffect } from 'react';

const TC: Record<string, string> = {
  Transparency: '#8B5CF6', Greenwashing: '#0891B2',
  'Supply chain': '#D97706', 'Product design': '#059669', Waste: '#DC2626',
};
const THEMES = Object.keys(TC);
const YEARS = [2024, 2025, 2026, 2027, 2028, 2029, 2030];
const OMNIBUS_AFFECTED = ['CSRD', 'CSDDD'];

interface Instrument {
  name: string; theme: string;
  active: number[];
  enforceYear: number | null; enforceLabel: string | null;
  eventYear: number | null; eventLabel: string | null;
}

const instruments: Instrument[] = [
  { name: 'CSRD',         theme: 'Transparency',   active: [2024,2025,2026,2027,2028,2029,2030], enforceYear: 2028, enforceLabel: '2028: first mandatory reports due (FY2027)',           eventYear: null, eventLabel: null },
  { name: 'ESRS',         theme: 'Transparency',   active: [2024,2025,2026,2027,2028,2029,2030], enforceYear: null, enforceLabel: null,                                                     eventYear: 2026, eventLabel: 'September 2026: Commission adopts simplified standards' },
  { name: 'DPP',          theme: 'Transparency',   active: [2024,2025,2026,2027,2028,2029,2030], enforceYear: 2028, enforceLabel: 'mid-2028: enforcement begins',                          eventYear: null, eventLabel: null },
  { name: 'Textile label',theme: 'Transparency',   active: [2024,2025,2026,2027,2028,2029],      enforceYear: null, enforceLabel: null,                                                     eventYear: 2024, eventLabel: '2024: proposal stalled, indefinitely delayed' },
  { name: 'France score', theme: 'Transparency',   active: [2024,2025,2026,2027,2028,2029,2030], enforceYear: null, enforceLabel: null,                                                     eventYear: 2026, eventLabel: 'October 2026: third-party publication right begins' },
  { name: 'ECGT',         theme: 'Greenwashing',   active: [2024,2025,2026,2027,2028,2029,2030], enforceYear: 2026, enforceLabel: '27 September 2026: green claims must be substantiated', eventYear: null, eventLabel: null },
  { name: 'Green Claims', theme: 'Greenwashing',   active: [2024,2025],                          enforceYear: null, enforceLabel: null,                                                     eventYear: 2025, eventLabel: 'June 2025: legislative process suspended' },
  { name: 'CSDDD',        theme: 'Supply chain',   active: [2024,2025,2026,2027,2028,2029,2030], enforceYear: 2029, enforceLabel: '26 July 2029: compliance begins',                       eventYear: null, eventLabel: null },
  { name: 'EUDR',         theme: 'Supply chain',   active: [2024,2025,2026,2027,2028,2029,2030], enforceYear: 2026, enforceLabel: '30 December 2026: large operators',                     eventYear: null, eventLabel: null },
  { name: 'ESPR',         theme: 'Product design', active: [2024,2025,2026,2027,2028,2029,2030], enforceYear: 2026, enforceLabel: '19 July 2026: unsold goods ban (large companies)',       eventYear: null, eventLabel: null },
  { name: 'Italy bill',   theme: 'Product design', active: [2025,2026,2027,2028],                enforceYear: null, enforceLabel: null,                                                     eventYear: 2025, eventLabel: 'October 2025: introduced to Senate, under review' },
  { name: 'Textile EPR',  theme: 'Waste',          active: [2024,2025,2026,2027,2028,2029,2030], enforceYear: 2028, enforceLabel: '17 April 2028: national EPR schemes required',           eventYear: null, eventLabel: null },
  { name: 'PPWR',         theme: 'Waste',          active: [2025,2026,2027,2028,2029,2030],      enforceYear: 2026, enforceLabel: '12 August 2026: packaging requirements apply',           eventYear: null, eventLabel: null },
  { name: 'CA SB 707',    theme: 'Waste',          active: [2024,2025,2026,2027,2028,2029,2030], enforceYear: 2026, enforceLabel: 'July 2026: producer registration deadline',              eventYear: null, eventLabel: null },
];

const countdownItems = [
  { name: 'ESPR', theme: 'Product design', desc: 'Unsold goods destruction ban',              date: new Date('2026-07-19'), color: TC['Product design'] },
  { name: 'DPP',  theme: 'Transparency',   desc: 'Delegated act 2027 · Enforcement mid-2028', date: new Date('2028-06-01'), color: TC['Transparency'] },
  { name: 'CSRD', theme: 'Amended',        desc: 'First mandatory reports due',               date: new Date('2028-01-01'), color: '#374151' },
];

function hexToRgba(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}
function getDiff(t: Date): { d: number; h: number; m: number } {
  const ms = t.getTime() - Date.now();
  if (ms <= 0) return { d: 0, h: 0, m: 0 };
  return { d: Math.floor(ms / 864e5), h: Math.floor((ms % 864e5) / 36e5), m: Math.floor((ms % 36e5) / 6e4) };
}

export function RegulationTrackerScript() {
  useEffect(() => {
    let caActiveTheme = 'all';

    function caCell(inst: Instrument, y: number, color: string): HTMLElement {
      const cell = document.createElement('div');
      cell.className = 'ca-cell';
      const isActive = inst.active.includes(y);
      const isEnforce = inst.enforceYear === y;
      const isEvent = inst.eventYear === y;
      const isOmnibus = OMNIBUS_AFFECTED.includes(inst.name) && y === 2026 && !isEnforce && !isEvent;
      if (!isActive) { cell.classList.add('inactive'); return cell; }
      if (isEnforce) {
        cell.style.background = hexToRgba(color, 0.75);
        cell.style.border = `1px solid ${hexToRgba(color, 0.9)}`;
        cell.classList.add('hoverable');
        const tip = document.createElement('div'); tip.className = 'ca-tooltip';
        tip.innerHTML = `<div class="ca-tooltip-name" style="color:${color};">${inst.name}</div><div class="ca-tooltip-date">${inst.enforceLabel}</div>`;
        cell.appendChild(tip);
      } else if (isEvent) {
        cell.style.background = hexToRgba(color, 0.38);
        cell.style.border = `1px solid ${hexToRgba(color, 0.5)}`;
        cell.classList.add('hoverable');
        const tip = document.createElement('div'); tip.className = 'ca-tooltip';
        tip.innerHTML = `<div class="ca-tooltip-name" style="color:${color};">${inst.name}</div><div class="ca-tooltip-date">${inst.eventLabel}</div>`;
        cell.appendChild(tip);
      } else if (isOmnibus) {
        cell.style.background = hexToRgba(color, 0.10);
        cell.style.border = `1px solid ${hexToRgba(color, 0.18)}`;
        const ov = document.createElement('div');
        ov.style.cssText = 'position:absolute;inset:0;border-radius:3px;background:repeating-linear-gradient(45deg,rgba(255,255,255,0.07) 0px,rgba(255,255,255,0.07) 1px,transparent 1px,transparent 5px);pointer-events:none;';
        cell.appendChild(ov);
        cell.classList.add('hoverable');
        const tip = document.createElement('div'); tip.className = 'ca-tooltip';
        tip.style.whiteSpace = 'normal'; tip.style.maxWidth = '240px';
        tip.innerHTML = `<div class="ca-tooltip-name" style="color:#9CA3AF;">EU Omnibus I</div><div class="ca-tooltip-date">18 March 2026: scope of CSRD and CSDDD significantly reduced.</div>`;
        cell.appendChild(tip);
      } else {
        cell.style.background = hexToRgba(color, 0.10);
        cell.style.border = `1px solid ${hexToRgba(color, 0.18)}`;
      }
      return cell;
    }

    function caAnimate(gridEl: HTMLElement, filtered: Instrument[]) {
      void filtered; // used for type-checking only
      const allCells = gridEl.querySelectorAll('.ca-cell:not(.inactive)');
      allCells.forEach(cell => {
        const el = cell as HTMLElement;
        const c = el.dataset.color;
        if (!c) return;
        el.dataset.finalBg = el.style.background;
        el.dataset.finalBorder = el.style.border;
        el.style.background = hexToRgba(c, 0.06);
        el.style.border = '1px solid ' + hexToRgba(c, 0.12);
      });
      YEARS.forEach((y, yi) => {
        setTimeout(() => {
          gridEl.querySelectorAll(`.ca-cell[data-year="${y}"]:not(.inactive)`).forEach(cell => {
            const el = cell as HTMLElement;
            el.style.transition = 'background 0.5s ease, border-color 0.5s ease';
            el.style.background = el.dataset.finalBg || '';
            el.style.border = el.dataset.finalBorder || '';
          });
        }, 600 + yi * 280);
      });
    }

    function caRender(animate = true) {
      const gridEl = document.getElementById('ca-grid') as HTMLElement | null;
      if (!gridEl) return;
      gridEl.innerHTML = '';
      const filtered = caActiveTheme === 'all' ? instruments : instruments.filter(i => i.theme === caActiveTheme);
      const themes = caActiveTheme === 'all' ? THEMES : [caActiveTheme];

      // Empty top-left corner cell
      gridEl.appendChild(document.createElement('div'));
      // Year headers
      YEARS.forEach(y => {
        const d = document.createElement('div');
        d.className = 'ca-yr' + (y === 2026 ? ' now' : '');
        d.textContent = String(y);
        gridEl.appendChild(d);
      });
      // Rows
      themes.forEach((theme, ti) => {
        const color = TC[theme];
        filtered.filter(i => i.theme === theme).forEach(inst => {
          const lbl = document.createElement('div'); lbl.className = 'ca-row-label'; lbl.textContent = inst.name;
          gridEl.appendChild(lbl);
          YEARS.forEach(y => {
            const cell = caCell(inst, y, color);
            cell.dataset.inst = inst.name; cell.dataset.year = String(y); cell.dataset.color = color;
            gridEl.appendChild(cell);
          });
        });
        if (caActiveTheme === 'all' && ti < THEMES.length - 1) {
          const sp = document.createElement('div');
          sp.style.gridColumn = '1/-1'; sp.style.height = '4px';
          gridEl.appendChild(sp);
        }
      });
      if (animate) caAnimate(gridEl, filtered);
    }

    // Filter pills
    const caFilterEl = document.getElementById('ca-filter');
    if (caFilterEl) {
      [{ id: 'all', label: 'All themes', color: '#282828' }, ...THEMES.map(t => ({ id: t, label: t, color: TC[t] }))].forEach(item => {
        const p = document.createElement('div');
        p.className = 'ca-pill' + (item.id === 'all' ? ' on' : '');
        p.textContent = item.label;
        p.style.borderLeftColor = item.id === 'all' ? '#282828' : item.color;
        p.dataset.id = item.id;
        if (item.id === 'all') { p.style.background = '#282828'; p.style.borderColor = '#282828'; p.style.color = '#ffffff'; }
        p.addEventListener('click', () => {
          caActiveTheme = item.id;
          caFilterEl.querySelectorAll('.ca-pill').forEach(x => {
            const xe = x as HTMLElement;
            xe.classList.remove('on'); xe.style.background = ''; xe.style.color = ''; xe.style.borderColor = '';
            xe.style.borderLeftColor = TC[xe.dataset.id || ''] || '#282828';
          });
          p.classList.add('on');
          p.style.background  = item.id === 'all' ? '#282828' : item.color;
          p.style.borderColor = item.id === 'all' ? '#282828' : item.color;
          p.style.color = '#ffffff';
          caRender();
        });
        caFilterEl.appendChild(p);
      });
    }

    // Legend
    const caLegendEl = document.getElementById('ca-legend');
    if (caLegendEl) {
      [
        { label: 'Active period',     style: 'background:rgba(168,121,255,0.10);border:1px solid rgba(168,121,255,0.18);' },
        { label: 'Key event',         style: 'background:rgba(168,121,255,0.38);border:1px solid rgba(168,121,255,0.50);' },
        { label: 'Enforcement year',  style: 'background:rgba(168,121,255,0.75);border:1px solid rgba(168,121,255,0.90);' },
        { label: 'Omnibus amendment', style: 'background:rgba(168,121,255,0.10);border:1px solid rgba(168,121,255,0.18);background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.08) 0px,rgba(255,255,255,0.08) 1px,transparent 1px,transparent 5px);' },
        { label: 'Not tracked',       style: 'background:rgba(255,255,255,0.04);border:0.5px solid rgba(255,255,255,0.08);' },
      ].forEach(l => {
        const d = document.createElement('div'); d.className = 'ca-leg';
        d.innerHTML = `<div class="ca-leg-sq" style="${l.style}"></div>${l.label}`;
        caLegendEl.appendChild(d);
      });
    }

    // Countdown cards
    const caCdEl = document.getElementById('ca-countdowns');
    if (caCdEl) {
      countdownItems.forEach((item, i) => {
        const diff = getDiff(item.date);
        const cd = document.createElement('div');
        cd.className = 'ca-cd stagger-item';
        cd.style.transitionDelay = `${i * 0.15}s`;
        cd.innerHTML = `
          <div class="ca-cd-bar" style="width:100%;background:${item.color};"></div>
          <div class="ca-cd-name">${item.name}</div>
          <div class="ca-cd-theme">${item.theme}</div>
          <div class="ca-cd-desc">${item.desc}</div>
          <div class="ca-cd-timer">
            <div class="ca-cd-unit"><span class="ca-cd-val" style="color:${item.color};">${diff.d}</span><span class="ca-cd-lbl">days</span></div>
            <div class="ca-cd-sep">:</div>
            <div class="ca-cd-unit"><span class="ca-cd-val" style="color:${item.color};">${String(diff.h).padStart(2, '0')}</span><span class="ca-cd-lbl">hrs</span></div>
            <div class="ca-cd-sep">:</div>
            <div class="ca-cd-unit"><span class="ca-cd-val" style="color:${item.color};">${String(diff.m).padStart(2, '0')}</span><span class="ca-cd-lbl">min</span></div>
          </div>`;
        caCdEl.appendChild(cd);
      });

      // Live countdown tick (every minute)
      const tickId = setInterval(() => {
        const cards = caCdEl.querySelectorAll('.ca-cd');
        countdownItems.forEach((item, i) => {
          const diff = getDiff(item.date);
          const vals = cards[i]?.querySelectorAll('.ca-cd-val');
          if (!vals) return;
          vals[0].textContent = String(diff.d);
          vals[1].textContent = String(diff.h).padStart(2, '0');
          vals[2].textContent = String(diff.m).padStart(2, '0');
        });
      }, 60000);

      // Cleanup on unmount
      (window as Window & { __caTickId?: ReturnType<typeof setInterval> }).__caTickId = tickId;
    }

    // Initial render
    caRender();

    // Stagger IntersectionObserver for .stagger-item elements
    const staggerObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); staggerObs.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.stagger-item').forEach(el => staggerObs.observe(el));

    return () => {
      staggerObs.disconnect();
      const w = window as Window & { __caTickId?: ReturnType<typeof setInterval> };
      if (w.__caTickId) clearInterval(w.__caTickId);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
