// Individual Note pages: the text is plain HTML; this only powers the mobile menu and the year.
const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
document.querySelector('#year').textContent = new Date().getFullYear();
