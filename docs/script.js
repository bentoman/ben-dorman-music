const productionList = document.querySelector('#production-list');
const ui = window.PORTFOLIO.ui || {
  artwork: 'Artwork for',
  collaborators: 'Key collaborators',
  bandcamp: 'Find on Bandcamp'
};
const artMarkup = (item) => item.art
  ? `<img src="${item.art}" alt="${ui.artwork} ${item.eyebrow}: ${item.title}">`
  : `<div class="type-art" aria-hidden="true"><span>${item.year}</span><b>${item.theme === 'development' ? 'WIP' : 'ARCHIVE'}</b></div>`;

window.PORTFOLIO.productions.forEach((item, index) => {
  const article = document.createElement('article');
  article.className = `production-card ${item.theme}`;
  article.innerHTML = `
    <div class="production-year">${item.year}</div>
    <div class="production-art">${artMarkup(item)}</div>
    <div class="production-copy">
      <p class="eyebrow">${item.eyebrow}</p>
      <h3>${item.title}</h3>
      <ul>${item.works.map(work => `<li>${work}</li>`).join('')}</ul>
      <div class="production-meta"><span>${item.role}</span><strong>${item.status}</strong></div>
      ${item.collaborators ? `<div class="collaborators"><span>${ui.collaborators}</span><p>${item.collaborators.map(person => `<b>${person.name}</b> — ${person.role}`).join(' · ')}</p></div>` : ''}
    </div>
    <span class="index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>`;
  productionList.append(article);
});

function renderAlbums(target, albums) {
  document.querySelector(target).innerHTML = albums.map(album => `
    <article class="album">
      <img src="${album.art}" alt="${ui.artwork} ${album.title}">
      <div><span>${album.year}</span><h4>${album.title}</h4><p>${album.detail}</p><a class="album-link" href="https://bendorman.bandcamp.com/music" target="_blank" rel="noopener">${ui.bandcamp} <span aria-hidden="true">↗</span></a></div>
    </article>`).join('');
}

renderAlbums('#cast-recordings', window.PORTFOLIO.music.cast);
renderAlbums('#demo-recordings', window.PORTFOLIO.music.demos);
document.querySelector('#beyond-bandcamp').innerHTML = window.PORTFOLIO.music.beyond.map((item, index) => `
  <article class="archive-item"><span>0${index + 1}</span><h4>${item.title}</h4><p>${item.detail}</p></article>`).join('');
document.querySelector('#year').textContent = new Date().getFullYear();

const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
});
