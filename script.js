const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const form = document.querySelector('.contact-form');
const dialog = document.querySelector('.lightbox');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), { passive: true });
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
  dialog.querySelector('h2').textContent = item.dataset.label;
  dialog.showModal();
}));
dialog.querySelector('.close-lightbox').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

form.addEventListener('submit', event => {
  event.preventDefault();
  form.querySelector('.form-status').textContent = 'Thank you — this form is ready to connect to Sam\'s email service.';
});
document.querySelector('#year').textContent = new Date().getFullYear();
