/* =========================================================
   Badisse Chebaane — Portfolio · main.js
   
   SOURCE UNIQUE : window.PORTFOLIO_DATA (portfolio-data.js)
   → Les projets (cartes + filtres + modales) sont générés
     automatiquement. Tu ne touches QUE portfolio-data.js.
   ========================================================= */

/* ─── THEME TOGGLE ──────────────────────────────────────── */
const html          = document.documentElement;
const themeToggle   = document.getElementById('themeToggle');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
applyTheme(localStorage.getItem('theme') || 'dark');

themeToggle?.addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ─── NAVBAR SCROLL ─────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ─── MOBILE MENU ───────────────────────────────────────── */
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

navLinks?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.querySelector('i').className = 'fa-solid fa-bars';
  });
});

/* ─── ACTIVE NAV LINK (scrollspy) ───────────────────────── */
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
      document.querySelector(`.nav-link[href="#${entry.target.id}"]`)?.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

/* ─── TYPED ROLE ANIMATION ──────────────────────────────── */
const roles = [
  'Data Science Engineer',
  'Machine Learning Engineer',
  'MLOps Enthusiast',
  'Deep Learning Developer',
];
let roleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typedRole');

function typeLoop() {
  if (!typedEl) return;
  const current = roles[roleIdx];
  typedEl.textContent = deleting ? current.slice(0, charIdx--) : current.slice(0, charIdx++);
  let delay = deleting ? 50 : 90;
  if (!deleting && charIdx > current.length) { delay = 1800; deleting = true; }
  if (deleting && charIdx < 0)              { delay = 400;  deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
  setTimeout(typeLoop, delay);
}
typeLoop();

/* ─── ANIMATED COUNTERS ─────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  let current = 0;
  const step = Math.ceil(target / 40);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 40);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num[data-count]').forEach(el => counterObserver.observe(el));

/* ─── SCROLL REVEAL (lancé après renderProjects) ────────── */
function initReveal() {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll(
    '.timeline-item, .project-card, .skill-category, .about-card, .about-text, .contact-item, .contact-form'
  ).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

/* ═══════════════════════════════════════════════════════════
   RENDU DYNAMIQUE DES PROJETS
   Lit window.PORTFOLIO_DATA.projects (portfolio-data.js)
   ═══════════════════════════════════════════════════════════ */

function renderProjects() {
  const grid     = document.getElementById('projectsGrid');
  const projects = window.PORTFOLIO_DATA?.projects;
  if (!grid || !projects?.length) return;

  grid.innerHTML = projects.map(p => {

    // Badge : "Featured" ou rien
    const badge = p.featured
      ? `<span class="project-badge">Featured</span>`
      : '';

    // Tags de la carte (cardTags)
    const tags = (p.cardTags || [])
      .map(t => `<span class="tag">${t}</span>`)
      .join('');

    // Image de couverture avec fallback
    const coverSrc = p.cover || 'assets/images/placeholder-cover.svg';

    return `
      <article class="project-card" data-cat="${p.category}" data-project="${p.id}">
        <div class="project-media">
          <img src="${coverSrc}" alt="${p.title}" loading="lazy" />
          <div class="project-overlay">
            <button class="btn btn-light btn-sm view-details" data-project="${p.id}">
              Voir le projet <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </div>
          ${badge}
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p class="project-meta"><i class="fa-solid fa-calendar"></i> ${p.meta || ''}</p>
          <p class="project-desc">${p.shortDesc || ''}</p>
          <div class="tags">${tags}</div>
        </div>
      </article>
    `;
  }).join('');
}

/* ─── FILTER PAR CATEGORIE (délégation d'événements) ───── */
document.getElementById('filterBar')?.addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;

  document.querySelectorAll('.project-card').forEach(card => {
    const show = filter === 'all' || card.dataset.cat === filter;
    card.style.display = show ? '' : 'none';
    if (show) {
      // Force reflow pour relancer l'animation CSS
      card.style.animation = 'none';
      card.offsetHeight;
      card.style.animation = '';
    }
  });
});

/* ═══════════════════════════════════════════════════════════
   MODALE — lit PORTFOLIO_DATA.projects (par id)
   ═══════════════════════════════════════════════════════════ */

const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose   = document.getElementById('modalClose');

function openModal(projectId) {
  // Cherche le projet par son id dans PORTFOLIO_DATA
  const p = window.PORTFOLIO_DATA?.projects?.find(proj => proj.id === projectId);
  if (!p) { console.warn('Projet introuvable :', projectId); return; }

  /* ── Bloc média principal (vidéo prioritaire, sinon 1ère image) ── */
  let heroHtml = '';
  const remainingImages = [...(p.images || [])];   // copie pour ne pas muter les données

  if (p.video) {
    if (p.video.includes('youtube.com') || p.video.includes('youtu.be')) {
      // Supporte youtube.com/watch?v=XXX  ET  youtu.be/XXX
      let videoId;
      try {
        const url = new URL(p.video);
        videoId = url.hostname.includes('youtu.be')
          ? url.pathname.slice(1)
          : url.searchParams.get('v');
      } catch { videoId = p.video.split('youtu.be/')[1]?.split('?')[0]; }

      heroHtml = `<div class="modal-hero">
        <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen title="Démo vidéo"></iframe>
      </div>`;

    } else if (p.video.includes('vimeo.com')) {
      const vimeoId = p.video.split('vimeo.com/')[1].split('?')[0];
      heroHtml = `<div class="modal-hero">
        <iframe src="https://player.vimeo.com/video/${vimeoId}" allowfullscreen title="Démo vidéo"></iframe>
      </div>`;

    } else {
      // Fichier local (.mp4, .webm…)
      heroHtml = `<div class="modal-hero">
        <video controls src="${p.video}"></video>
      </div>`;
    }

  } else if (remainingImages.length > 0) {
    // Première image en héro, les suivantes en galerie
    const cover = remainingImages.shift();
    heroHtml = `<div class="modal-hero">
      <img src="${cover}" alt="${p.title}" loading="lazy" />
    </div>`;
  }

  /* ── Galerie (images restantes après le héro) ── */
  let galleryHtml = '';
  if (remainingImages.length > 0) {
    galleryHtml = `
      <div class="modal-section">
        <h4>Galerie</h4>
        <div class="modal-gallery">
          ${remainingImages.map(img => `<img src="${img}" alt="${p.title}" loading="lazy" />`).join('')}
        </div>
      </div>`;
  }

  /* ── Tags complets (allTags) ── */
  const tags = (p.allTags || p.cardTags || [])
    .map(t => `<span class="tag">${t}</span>`)
    .join('');

  /* ── Liens GitHub / Demo ── */
  let linksHtml = '';
  if (p.github) linksHtml += `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline btn-sm"><i class="fa-brands fa-github"></i> Code</a>`;
  if (p.demo)   linksHtml += `<a href="${p.demo}"   target="_blank" rel="noopener" class="btn btn-primary btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>`;

  /* ── Points clés (highlights) ── */
  const highlights = (p.highlights || []).map(h => `<li>${h}</li>`).join('');

  /* ── Contexte + équipe (si renseignés) ── */
  let metaExtra = '';
  if (p.contexte) metaExtra += `<span><i class="fa-solid fa-tag"></i> ${p.contexte}</span>`;
  if (p.equipe)   metaExtra += `<span><i class="fa-solid fa-people-group"></i> ${p.equipe}</span>`;

  /* ── Injection dans le DOM ── */
  modalContent.innerHTML = `
    ${heroHtml}
    <div class="modal-body">
      <h2>${p.title}</h2>
      <p class="modal-meta">${p.meta || ''}</p>
      ${metaExtra ? `<p class="modal-meta-extra">${metaExtra}</p>` : ''}

      <div class="modal-section">
        <p>${p.fullDesc || p.shortDesc || ''}</p>
      </div>

      ${highlights ? `
      <div class="modal-section">
        <h4>Points clés</h4>
        <ul>${highlights}</ul>
      </div>` : ''}

      ${galleryHtml}

      <div class="modal-tags">${tags}</div>
      ${linksHtml ? `<div class="modal-links">${linksHtml}</div>` : ''}
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  // Stoppe vidéos/iframes
  modalContent?.querySelectorAll('iframe, video').forEach(el => {
    if (el.tagName === 'VIDEO') el.pause();
    else el.src = el.src;   // reload l'iframe pour couper l'audio
  });
}

/* Délégation : clics sur les boutons "Voir le projet" générés dynamiquement */
document.getElementById('projectsGrid')?.addEventListener('click', e => {
  const btn = e.target.closest('.view-details');
  if (btn) openModal(btn.dataset.project);
});

modalClose?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─── BACK TO TOP ───────────────────────────────────────── */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop?.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ─── FOOTER YEAR ───────────────────────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ═══════════════════════════════════════════════════════════
   STATS ABOUT — calculées depuis PORTFOLIO_DATA
   Lit la section "Qui suis-je ?" et met à jour data-count
   avant que l'animation de compteur ne se déclenche.
   ═══════════════════════════════════════════════════════════ */
function updateAboutStats() {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // Valeurs calculées automatiquement
  const computed = {
    stage:  data.experiences?.length  ?? 0,
    projet: data.projects?.length     ?? 0,
    langue: data.languages?.length    ?? 0,
  };

  document.querySelectorAll('.stat').forEach(stat => {
    const label  = (stat.querySelector('.stat-label')?.textContent || '').toLowerCase();
    const numEl  = stat.querySelector('.stat-num[data-count]');
    if (!numEl) return;

    if (label.includes('stage'))   numEl.dataset.count = computed.stage;
    if (label.includes('projet'))  numEl.dataset.count = computed.projet;
    if (label.includes('langue'))  numEl.dataset.count = computed.langue;
  });
}

/* ─── INITIALISATION ────────────────────────────────────── */
// 1. Génère les cartes depuis portfolio-data.js
renderProjects();
// 2. Recalcule les stats "À propos" depuis portfolio-data.js
updateAboutStats();
// 3. Lance le scroll-reveal APRÈS que les cartes soient dans le DOM
initReveal();
