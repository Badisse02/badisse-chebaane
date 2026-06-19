/* =========================================================
   Badisse Chebaane — Portfolio · main.js
   ========================================================= */

/* ---------- Theme toggle ---------- */
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Init theme from storage or default dark
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ---------- Navbar scroll ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---------- Mobile menu ---------- */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

// Close menu when a link is clicked
navLinks?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.querySelector('i').className = 'fa-solid fa-bars';
  });
});

/* ---------- Active nav link on scroll ---------- */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      active?.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ---------- Typed role animation ---------- */
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
  if (deleting && charIdx < 0) { delay = 400; deleting = false; roleIdx = (roleIdx + 1) % roles.length; }

  setTimeout(typeLoop, delay);
}
typeLoop();

/* ---------- Animated counters ---------- */
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

/* ---------- Scroll-reveal ---------- */
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

/* ---------- Project filter ---------- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.style.display = show ? '' : 'none';
      if (show) {
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = '';
      }
    });
  });
});

/* ---------- Modal ---------- */
const modalOverlay = document.getElementById('modalOverlay');
const projectModal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openModal(projectId) {
  const data = window.PROJECTS_DATA?.[projectId];
  if (!data) return;

  // Build hero media (video has priority, then first image as cover)
  let heroHtml = '';
  let remainingImages = [...(data.images || [])];

  if (data.video) {
    if (data.video.includes('youtube.com') || data.video.includes('youtu.be')) {
      const videoId = data.video.includes('youtu.be')
        ? data.video.split('youtu.be/')[1].split('?')[0]
        : new URLSearchParams(new URL(data.video).search).get('v');
      heroHtml = `<div class="modal-hero">
        <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen title="Démo vidéo"></iframe>
      </div>`;
    } else if (data.video.includes('vimeo.com')) {
      const vimeoId = data.video.split('vimeo.com/')[1].split('?')[0];
      heroHtml = `<div class="modal-hero">
        <iframe src="https://player.vimeo.com/video/${vimeoId}" allowfullscreen title="Démo vidéo"></iframe>
      </div>`;
    } else {
      heroHtml = `<div class="modal-hero">
        <video controls src="${data.video}"></video>
      </div>`;
    }
  } else if (remainingImages.length > 0) {
    const coverImg = remainingImages.shift();
    heroHtml = `<div class="modal-hero">
      <img src="${coverImg}" alt="${data.title}" loading="lazy" />
    </div>`;
  }

  // Build remaining gallery
  let galleryHtml = '';
  if (remainingImages.length > 0) {
    galleryHtml = `
      <div class="modal-section">
        <h4>Galerie</h4>
        <div class="modal-gallery">
          ${remainingImages.map(img => `<img src="${img}" alt="${data.title}" loading="lazy" />`).join('')}
        </div>
      </div>
    `;
  }

  // Build tags
  const tags = (data.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

  // Build links
  let linksHtml = '';
  if (data.github) linksHtml += `<a href="${data.github}" target="_blank" rel="noopener" class="btn btn-outline btn-sm"><i class="fa-brands fa-github"></i> Code</a>`;
  if (data.demo) linksHtml += `<a href="${data.demo}"   target="_blank" rel="noopener" class="btn btn-primary btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>`;

  // Build highlights list
  const highlights = (data.highlights || []).map(h => `<li>${h}</li>`).join('');

  modalContent.innerHTML = `
    ${heroHtml}
    <div class="modal-body">
      <h2>${data.title}</h2>
      <p class="modal-meta">${data.meta || ''}</p>
      
      <div class="modal-section">
        <p>${data.description}</p>
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
  // Stop any videos
  modalContent.querySelectorAll('iframe, video').forEach(el => {
    if (el.tagName === 'VIDEO') { el.pause(); }
    else { el.src = el.src; } // reload iframe to stop
  });
}

document.querySelectorAll('.view-details').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.project));
});

modalClose?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---------- Back to top ---------- */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop?.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- Footer year ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
