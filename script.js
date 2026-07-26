// Sticky nav background on scroll
const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Scroll-reveal animation
const revealTargets = document.querySelectorAll(
  '.about-grid, .details-dark, .details-light, .extras-col, .site-footer'
);
revealTargets.forEach(el => el.classList.add('reveal'));

// Stagger containers: each direct child gets a --i index so it fades in
// slightly after the one before it, instead of all at once
const staggerContainers = document.querySelectorAll(
  '.timeline, .chip-row, .hobby-grid, .tag-row, .skills-tags'
);
staggerContainers.forEach(container => {
  container.classList.add('stagger');
  [...container.children].forEach((child, i) => {
    child.style.setProperty('--i', i);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));
staggerContainers.forEach(el => observer.observe(el));
