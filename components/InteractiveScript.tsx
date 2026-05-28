'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Global client-side interactivity script.
 * Attaches event listeners for filters, sort, mobile menu, sidebar toggles,
 * and contact form — matching prototype behaviour exactly.
 * Re-runs on every route change (usePathname dependency).
 */
export function InteractiveScript() {
  const pathname = usePathname();

  useEffect(() => {
    // ── Article / company filter buttons ─────────────────────────────────────
    function filterCards(btn: HTMLElement) {
      const filter = btn.dataset.filter;
      const bar = btn.closest('.filter-bar');
      if (bar) bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      document.querySelectorAll('[data-category]').forEach(card => {
        (card as HTMLElement).style.display = (filter === 'all' || (card as HTMLElement).dataset.category === filter) ? '' : 'none';
      });
    }

    function filterCompanies(btn: HTMLElement, filter: string) {
      const bar = btn.closest('.filter-bar');
      if (bar) bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      document.querySelectorAll('#companies-grid [data-node]').forEach(card => {
        (card as HTMLElement).style.display = (filter === 'all' || (card as HTMLElement).dataset.node === filter) ? '' : 'none';
      });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const el = btn as HTMLElement;
        const filter = el.dataset.filter || 'all';
        // Companies page uses data-node on grid items; articles uses data-category
        if (document.getElementById('companies-grid')) {
          filterCompanies(el, filter);
        } else {
          filterCards(el);
        }
      });
    });

    // ── Sort buttons ──────────────────────────────────────────────────────────
    document.querySelectorAll('.sort-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const bar = btn.closest('.sort-bar');
        if (bar) bar.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
      });
    });

    // ── Mobile company filter dropdown ────────────────────────────────────────
    const coTrigger = document.getElementById('co-filter-trigger');
    const coPanel   = document.getElementById('co-filter-panel');
    if (coTrigger && coPanel) {
      coTrigger.addEventListener('click', () => {
        coTrigger.classList.toggle('is-open');
        coPanel.classList.toggle('is-open');
      });
      coPanel.querySelectorAll('.co-filter-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const el = btn as HTMLElement;
          const filter = el.dataset.filter || 'all';
          coPanel.querySelectorAll('.co-filter-option').forEach(b => b.classList.remove('is-active'));
          el.classList.add('is-active');
          const label = document.getElementById('co-filter-label');
          if (label) label.textContent = filter === 'all' ? 'All categories' : el.textContent?.trim() || '';
          coTrigger.classList.remove('is-open');
          coPanel.classList.remove('is-open');
          document.querySelectorAll('#companies-grid [data-node]').forEach(card => {
            (card as HTMLElement).style.display = (filter === 'all' || (card as HTMLElement).dataset.node === filter) ? '' : 'none';
          });
        });
      });
    }

    // ── Sidebar section toggles (VC node pages — mobile only) ─────────────────
    document.querySelectorAll('.detail-sidebar__trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const panel = btn.nextElementSibling;
        if (panel) {
          btn.classList.toggle('is-open');
          panel.classList.toggle('is-open');
        }
      });
    });

    // ── Contact form submit ────────────────────────────────────────────────────
    document.querySelectorAll('.about-contact__form, .contact-form-v2__form, form[data-contact]').forEach(form => {
      form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const formEl = form as HTMLElement;
        const card = formEl.closest('.about-contact__right, .contact-page__right, .about-contact');
        const success = card?.querySelector('.form-success') || document.querySelector('.form-success');

        formEl.style.transition = 'opacity 0.25s ease';
        formEl.style.opacity = '0';
        setTimeout(() => {
          formEl.style.display = 'none';
          const formHead = document.getElementById('about-form-head');
          if (formHead) { formHead.style.transition = 'none'; formHead.style.display = 'none'; }
          const v2title = card?.querySelector('.contact-form-v2__title') as HTMLElement | null;
          const v2sub   = card?.querySelector('.contact-form-v2__sub') as HTMLElement | null;
          if (v2title) v2title.style.display = 'none';
          if (v2sub)   v2sub.style.display   = 'none';
          if (success) (success as HTMLElement).classList.add('is-visible');
        }, 250);
      });
    });

    // ── Newsletter form submit ─────────────────────────────────────────────────
    document.querySelectorAll('.nl-form, form[data-newsletter]').forEach(form => {
      form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const formEl = form as HTMLElement;
        formEl.style.transition = 'opacity 0.25s ease';
        formEl.style.opacity = '0';
        setTimeout(() => {
          formEl.style.display = 'none';
          const success = document.querySelector('.nl-success, .form-success');
          if (success) (success as HTMLElement).classList.add('is-visible');
        }, 250);
      });
    });

    // ── Scroll-to-section helper (anchor links in VC node sidebar) ────────────
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const href = (link as HTMLAnchorElement).getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 64;
        const y = target.getBoundingClientRect().top + window.scrollY - headerH - 24;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });

  }, [pathname]); // re-run on route change

  return null;
}
