const header = document.getElementById('header');
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

burger.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => nav.classList.remove('open'))
);

// --- Preloader + entrada del hero ---
const preloader = document.getElementById('preloader');
const hero = document.querySelector('.hero');
const canAnimate = document.documentElement.classList.contains('anim');
let introDone = false;

function startIntro() {
  if (introDone) return;
  introDone = true;
  if (hero) hero.classList.add('reveal-in');
  if (preloader) {
    preloader.classList.add('is-hidden');
    setTimeout(() => { preloader.style.display = 'none'; }, 900);
  }
}

if (canAnimate) {
  // Página visible: mostramos el preloader y arrancamos la intro
  window.addEventListener('load', () => setTimeout(startIntro, 1700));
  setTimeout(startIntro, 3800); // red de seguridad
} else if (preloader) {
  // Pestaña en segundo plano: sin intro, mostramos todo de una
  preloader.style.display = 'none';
}

// --- Rotador de palabras del titular ---
const rotator = document.getElementById('rotator');
if (rotator && canAnimate) {
  const words = Array.from(rotator.querySelectorAll('.rotator-word'));
  let idx = 0;
  if (words.length > 1) {
    setInterval(() => {
      const current = words[idx];
      current.classList.remove('is-active');
      current.classList.add('is-out');
      idx = (idx + 1) % words.length;
      const next = words[idx];
      next.classList.remove('is-out');
      next.classList.add('is-active');
      setTimeout(() => current.classList.remove('is-out'), 600);
    }, 2200);
  }
}

// --- Reveal de secciones al hacer scroll ---
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}
