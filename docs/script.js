const productionList = document.querySelector('#production-list');
const ui = window.PORTFOLIO.ui || {
  artwork: 'Artwork for',
  collaborators: 'Key collaborators',
  bandcamp: 'Find on Bandcamp'
};
const artMarkup = (item) => item.art
  ? `<img src="${item.art}" alt="${ui.artwork} ${item.eyebrow}: ${item.title}">`
  : `<div class="type-art" aria-hidden="true"><span>${item.year}</span><b>${item.theme === 'development' ? 'WIP' : 'ARCHIVE'}</b></div>`;
const workMarkup = (work) => typeof work === 'string'
  ? `<li>${work}</li>`
  : `<li${work.id ? ` id="${work.id}"` : ''}><a href="${work.href}">${work.title}</a></li>`;

window.PORTFOLIO.productions.forEach((item, index) => {
  const article = document.createElement('article');
  article.className = `production-card ${item.theme}`;
  if (item.id) article.id = item.id;
  article.innerHTML = `
    <div class="production-year">${item.year}</div>
    <div class="production-art">${artMarkup(item)}</div>
    <div class="production-copy">
      <p class="eyebrow">${item.eyebrow}</p>
      <h3>${item.title}</h3>
      ${(item.recordings || []).map(recording => `<p><a class="production-recording" href="${recording.href}">${recording.label}</a></p>`).join('')}
      <ul>${item.works.map(workMarkup).join('')}</ul>
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
      <div><span>${album.year}</span><h4>${album.title}</h4><p>${album.detail}</p>${(album.recordings || []).map(recording => `<p><a class="album-link" href="${recording.href}">${recording.label}</a></p>`).join('')}<a class="album-link" href="https://bendorman.bandcamp.com/music" target="_blank" rel="noopener">${ui.bandcamp} <span aria-hidden="true">↗</span></a></div>
    </article>`).join('');
}

renderAlbums('#cast-recordings', window.PORTFOLIO.music.cast);
renderAlbums('#demo-recordings', window.PORTFOLIO.music.demos);
document.querySelector('#beyond-bandcamp').innerHTML = window.PORTFOLIO.music.beyond.map((item, index) => `
  <article class="archive-item"><span>0${index + 1}</span><h4>${item.title}</h4><p>${item.detail}</p></article>`).join('');
document.querySelector('#notes-list').innerHTML = window.PORTFOLIO.notes.map(note => `
  <article class="note"><p class="note-date">${note.date}</p><div><h3>${note.title}</h3><p>${note.body}</p></div>
  </article>`).join('');
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

// Keep archive navigation on the page and scroll to the rendered production.
document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname) return;
  if (!['#romeo-and-juliet-2024', '#romeos-lament', '#juliets-nightingale', '#cat-who-walked-2024', '#the-first-magic', '#sassy-cat-and-friends', '#rainbow-connections-land-of-kindness', '#rainbow-connections', '#emma-amazing-bucket-fillers', '#big-blue-bucket'].includes(destination.hash)) return;
  const target = document.getElementById(destination.hash.slice(1));
  if (!target) return;
  event.preventDefault();
  history.pushState(null, '', destination.hash);
  target.scrollIntoView({ behavior: 'instant', block: 'start' });
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
});
