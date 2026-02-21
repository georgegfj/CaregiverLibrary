// =============================================================
// CaregiverHub — App Logic
// Navigation, rendering, and search
// =============================================================

// ── PILLAR METADATA ──────────────────────────────────────────
const PILLAR_META = {
  "for-yourself": {
    colorClass: "orange",
    icon: "🧡",
    iconEmoji: "🫀"
  },
  "for-care-recipient": {
    colorClass: "blue",
    icon: "💙",
    iconEmoji: "🩺"
  },
  "community-support": {
    colorClass: "teal",
    icon: "🌿",
    iconEmoji: "🤝"
  },
  "tools-reference": {
    colorClass: "purple",
    icon: "📋",
    iconEmoji: "💊"
  }
};

// ── URL PARAMS ───────────────────────────────────────────────
function getParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

// ── RENDER: HOME PAGE PILLAR GRID ────────────────────────────
function renderPillarGrid() {
  const grid = document.getElementById('pillarGrid');
  if (!grid) return;

  grid.innerHTML = RESOURCES.pillars.map(pillar => {
    const meta = PILLAR_META[pillar.id] || {};
    const totalResources = pillar.subcategories.reduce((n, s) => n + s.resources.length, 0);

    return `
      <article class="pillar-card" data-pillar="${pillar.id}"
               onclick="window.location.href='category.html?id=${pillar.id}'"
               role="button" tabindex="0"
               aria-label="Browse ${pillar.label}">
        <div class="pillar-icon">${meta.iconEmoji}</div>
        <div class="tagline">${pillar.tagline}</div>
        <h2>${pillar.label}</h2>
        <p>${pillar.description}</p>
        <span class="sub-count">${pillar.subcategories.length} topics · ${totalResources} resources →</span>
      </article>
    `;
  }).join('');

  // Keyboard navigation
  grid.querySelectorAll('.pillar-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') card.click();
    });
  });
}

// ── RENDER: CATEGORY PAGE ────────────────────────────────────
function renderCategoryPage() {
  const pillarId = getParam('id');
  if (!pillarId) { window.location.href = 'index.html'; return; }

  const pillar = getPillar(pillarId);
  if (!pillar) { window.location.href = 'index.html'; return; }

  const meta = PILLAR_META[pillarId] || {};

  // Page title
  document.title = `CaregiverHub — ${pillar.label}`;

  // Breadcrumb
  const bcCurrent = document.getElementById('breadcrumbCurrent');
  if (bcCurrent) bcCurrent.textContent = pillar.label;

  // Category hero
  const hero = document.getElementById('categoryHero');
  if (hero) hero.className = `category-hero ${meta.colorClass}`;

  const icon = document.getElementById('categoryIcon');
  if (icon) icon.textContent = meta.iconEmoji;

  const title = document.getElementById('categoryTitle');
  if (title) title.textContent = pillar.label;

  const desc = document.getElementById('categoryDesc');
  if (desc) desc.textContent = pillar.description;

  // Subcat count
  const totalResources = pillar.subcategories.reduce((n, s) => n + s.resources.length, 0);
  const subcatCount = document.getElementById('subcatCount');
  if (subcatCount) subcatCount.textContent = `${pillar.subcategories.length} topics · ${totalResources} resources`;

  // Highlight active nav button
  highlightNav(pillarId);

  // Render subcategory cards
  const grid = document.getElementById('subcatGrid');
  if (!grid) return;

  grid.innerHTML = pillar.subcategories.map(sub => `
    <article class="subcat-card"
             style="border-left-color: var(--${meta.colorClass === 'blue' ? 'blue' : meta.colorClass === 'orange' ? 'orange' : meta.colorClass === 'teal' ? 'teal' : 'purple'})"
             onclick="window.location.href='subcategory.html?pillar=${pillarId}&sub=${sub.id}'"
             role="button" tabindex="0"
             aria-label="Browse ${sub.label}">
      <h3>${sub.label}</h3>
      <p>${sub.description}</p>
      <span class="res-count" style="color:var(--${meta.colorClass === 'blue' ? 'blue' : meta.colorClass === 'orange' ? 'orange' : meta.colorClass === 'teal' ? 'teal' : 'purple'})">${sub.resources.length} resources →</span>
    </article>
  `).join('');

  grid.querySelectorAll('.subcat-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') card.click();
    });
  });
}

// ── RENDER: SUBCATEGORY PAGE ──────────────────────────────────
function renderSubcategoryPage() {
  const pillarId = getParam('pillar');
  const subId    = getParam('sub');

  if (!pillarId || !subId) { window.location.href = 'index.html'; return; }

  const pillar = getPillar(pillarId);
  const sub    = getSubcategory(pillarId, subId);

  if (!pillar || !sub) { window.location.href = 'index.html'; return; }

  const meta = PILLAR_META[pillarId] || {};
  const colorVar = meta.colorClass === 'blue' ? 'blue' : meta.colorClass === 'orange' ? 'orange' : meta.colorClass === 'teal' ? 'teal' : 'purple';

  // Page title
  document.title = `CaregiverHub — ${sub.label}`;

  // Breadcrumb
  const bcCategory = document.getElementById('breadcrumbCategory');
  if (bcCategory) {
    bcCategory.textContent = pillar.label;
    bcCategory.href = `category.html?id=${pillarId}`;
  }
  const bcCurrent = document.getElementById('breadcrumbCurrent');
  if (bcCurrent) bcCurrent.textContent = sub.label;

  // Back button
  const backBtn = document.getElementById('backBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.href = `category.html?id=${pillarId}`;
    });
  }

  // Subcategory hero
  const hero = document.getElementById('subcategoryHero');
  if (hero) hero.className = `category-hero ${meta.colorClass}`;

  const title = document.getElementById('subcategoryTitle');
  if (title) title.textContent = sub.label;

  const desc = document.getElementById('subcategoryDesc');
  if (desc) desc.textContent = sub.description;

  // Resource count
  const resCount = document.getElementById('resourceCount');
  if (resCount) resCount.textContent = `${sub.resources.length} resources`;

  // Highlight nav
  highlightNav(pillarId);

  // Render resource cards
  const grid = document.getElementById('resourceGrid');
  if (grid) {
    if (sub.resources.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📭</div>
          <h3>No resources yet</h3>
          <p>Check back soon — we're adding more content regularly.</p>
        </div>`;
    } else {
      grid.innerHTML = sub.resources.map(res => `
        <article class="resource-card">
          <h3>${res.title}</h3>
          <p>${res.description}</p>
          <div class="resource-tags">
            ${res.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <a class="resource-link ${colorVar}" href="${res.url}" target="_blank" rel="noopener" aria-label="Open ${res.title} on TTSH website">
            View Resource
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </article>
      `).join('');
    }
  }

  // Render related topics (other subcategories in same pillar)
  const relatedGrid = document.getElementById('relatedGrid');
  if (relatedGrid) {
    const related = pillar.subcategories.filter(s => s.id !== subId);
    if (related.length === 0) {
      relatedGrid.style.display = 'none';
    } else {
      relatedGrid.innerHTML = related.map(s => `
        <article class="subcat-card"
                 style="border-left-color: var(--${colorVar})"
                 onclick="window.location.href='subcategory.html?pillar=${pillarId}&sub=${s.id}'"
                 role="button" tabindex="0">
          <h3>${s.label}</h3>
          <p>${s.description}</p>
          <span class="res-count" style="color:var(--${colorVar})">${s.resources.length} resources →</span>
        </article>
      `).join('');

      relatedGrid.querySelectorAll('.subcat-card').forEach(card => {
        card.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') card.click();
        });
      });
    }
  }
}

// ── NAV HIGHLIGHT ─────────────────────────────────────────────
function highlightNav(pillarId) {
  const navMap = {
    'for-yourself':       1,
    'for-care-recipient': 2,
    'tools-reference':    3
  };
  const buttons = document.querySelectorAll('.btn-nav');
  const idx = navMap[pillarId];
  if (idx !== undefined && buttons[idx]) {
    buttons[idx].classList.add('active');
  }
}

// ── SEARCH ────────────────────────────────────────────────────
function initSearch() {
  const input    = document.getElementById('globalSearch');
  const dropdown = document.getElementById('searchDropdown');
  const results  = document.getElementById('searchResults');
  if (!input || !dropdown || !results) return;

  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const q = input.value.trim();
      if (q.length < 2) {
        dropdown.classList.remove('open');
        return;
      }
      const hits = searchResources(q).slice(0, 8);
      if (hits.length === 0) {
        results.innerHTML = `<div class="search-result-item"><div class="sri-title">No results for "${q}"</div><div class="sri-meta">Try a different keyword</div></div>`;
      } else {
        results.innerHTML = hits.map(h => `
          <div class="search-result-item"
               onclick="window.location.href='subcategory.html?pillar=${h.pillar.id}&sub=${h.subcategory.id}'"
               role="button" tabindex="0">
            <div class="sri-title">${highlight(h.title, q)}</div>
            <div class="sri-meta">${h.description.substring(0, 90)}…</div>
            <div class="sri-path">${h.pillar.label} › ${h.subcategory.label}</div>
          </div>
        `).join('');

        results.querySelectorAll('.search-result-item').forEach(item => {
          item.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') item.click();
          });
        });
      }
      dropdown.classList.add('open');
    }, 200);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  // Close on Escape
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      dropdown.classList.remove('open');
      input.blur();
    }
  });
}

// Highlight matching text in search results
function highlight(text, query) {
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark style="background:#FFF3CD;border-radius:2px">$1</mark>');
}
