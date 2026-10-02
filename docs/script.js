const productionList = document.querySelector('#production-list');
const ui = window.PORTFOLIO.ui || {
  artwork: 'Artwork for',
  collaborators: 'Key collaborators',
  bandcamp: 'Find on Bandcamp'
};
// Approved survey excerpts; use the original Japanese when supplied.
const productionFeedback = {
  'cat-who-walked-2024': [
    {
      quote: 'After the performance, even after returning home, I remember that the children kept humming the song [“The First Magic,” from] <em>The Cat Who Walked by Herself</em>.',
      attribution: 'Parent of a performer',
      attributionJa: '出演者の保護者'
    },
    {
      quote: 'The children sang with such energy. The songs were catchy and easy for the children to learn.',
      quoteJa: '子供たちが生き生きと歌っていた。子供たちがすぐ覚えれるcatchyな曲でした。',
      attribution: 'Tomoko, backstage team',
      attributionJa: 'Tomoko（舞台裏スタッフ）'
    }
  ],
  'romeo-and-juliet-2024': [
    {
      quote: 'The music was cohesive with the emotions portrayed by the actors on stage.',
      attribution: 'Richard Harris, performer',
      attributionJa: 'Richard Harris（出演者）'
    },
    {
      quote: 'During <em>Romeo and Juliet</em>, when Kory sang, it brought tears to my eyes.',
      quoteJa: 'R & J では、Koryが歌った時、涙が出てきました。',
      attribution: 'Tomoko, performer',
      attributionJa: 'Tomoko（出演者）'
    }
  ]
};
const feedbackMarkup = (feedback) => {
  if (!feedback) return '';
  const japanese = document.documentElement.lang === 'ja';
  return `<aside class="production-feedback" aria-label="${japanese ? '公演からの声' : 'From the productions'}">
    <p class="feedback-label">${japanese ? '公演からの声' : 'From the productions'}</p>
    ${(Array.isArray(feedback) ? feedback : [feedback]).map(comment => `<blockquote><p lang="${japanese && comment.quoteJa ? 'ja' : 'en'}">${japanese && comment.quoteJa ? `「${comment.quoteJa}」` : `“${comment.quote}”`}</p><footer>${japanese ? comment.attributionJa : comment.attribution}${!japanese && comment.quoteJa ? ' · Translated from Japanese' : ''}</footer></blockquote>`).join('')}
  </aside>`;
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
      ${feedbackMarkup(productionFeedback[item.id])}
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
  <article class="note"${note.id ? ` id="${note.id}"` : ''}${note.lang ? ` lang="${note.lang}"` : ''}><p class="note-date">${note.date}</p><div><h3>${note.title}</h3><p>${note.body}</p>${note.links ? `<nav class="note-links" aria-label="Related music and production">${note.links.map(link => `<a href="${link.href}">${link.label}</a>`).join('') }</nav>` : ''}</div>
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
  if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname || destination.search !== window.location.search) return;
  if (!['#finding-a-home-for-home-sweet-home', '#word-hit-me-again-word', '#where-a-song-begins', '#this-town', '#romeo-and-juliet-2024', '#romeos-lament', '#juliets-nightingale', '#cat-who-walked-2024', '#the-first-magic', '#sassy-cat-and-friends', '#showcase-2022', '#rainbow-connections-land-of-kindness', '#rainbow-connections', '#shiny-gold-button', '#forever-friends', '#a-christmas-carol-with-heart-2010', '#emma-amazing-bucket-fillers', '#big-blue-bucket'].includes(destination.hash)) return;
  const target = document.getElementById(destination.hash.slice(1));
  if (!target) return;
  event.preventDefault();
  history.pushState(null, '', destination.hash);
  target.scrollIntoView({ behavior: 'instant', block: 'start' });
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
});

// Keep the current Note or track in view when changing language.
const languageLink = document.querySelector('.language-link');
const updateLanguageLink = () => {
  const destination = new URL(languageLink.href, window.location.href);
  destination.hash = window.location.hash;
  languageLink.href = destination.href;
};
updateLanguageLink();
languageLink.addEventListener('click', updateLanguageLink);
window.addEventListener('hashchange', updateLanguageLink);
