// ===========================
//  AOS — Animate On Scroll
// ===========================
AOS.init({
  duration: 650,
  once: true,
  offset: 70,
  easing: 'ease-out-cubic',
});

// ===========================
//  Typed.js — Hero typing
// ===========================
new Typed('#typed', {
  strings: [
    'Front-End Developer',
    'React Developer',
    'React Native Dev',
    'UI/UX Enthusiast',
    'Problem Solver',
  ],
  typeSpeed: 55,
  backSpeed: 35,
  loop: true,
  backDelay: 1800,
  smartBackspace: true,
});

// ===========================
//  Navbar — scroll effect
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  highlightNav();
});

// ===========================
//  Hamburger menu
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on any nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===========================
//  Active nav highlight
// ===========================
function highlightNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');
  let current    = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 220) {
      current = sec.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Run once on load
highlightNav();

// ===========================
//  Smooth scroll for anchors
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
