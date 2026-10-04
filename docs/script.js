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
    ${(Array.isArray(feedback) ? feedback : [feedback]).map(comment => `<blockquote><p lang="${japanese && comment.quoteJa ? 'ja' : 'en'}">${japanese && comment.quoteJa ? `「${comment.quoteJa}」` : `“${comment.quote}”`}</p><footer>${japanese ? comment.attributionJa : comment.attribution}${!japanese && comment.quoteJa && !comment.originalEnglish ? ' · Translated from Japanese' : japanese && comment.originalEnglish ? ' · 英語からの翻訳' : ''}</footer></blockquote>`).join('')}
  </aside>`;
};
const sugikoFeedback = {
  quote: 'All of Ben’s songs are wonderful, and I’m full of gratitude for the lovely music and songs he brings to the children each time! My favourite so far is the song everyone in the older group—the animals—sang two years ago, which also included a solo by the girl playing the brown cat. I was moved to tears.',
  quoteJa: 'ベンさんの曲はどれも素晴らしく、毎回素敵な音楽・楽曲を子ども達に届けてくださり感謝の気持ちでいっぱいです！今まで一番好きな曲は、2年前に上のクラス（動物たち）でみんなが歌ってくれた、茶色の猫役の女の子のソロなどもあるあの曲です。感動して涙が出ました。',
  attribution: 'Sugiko Kenny, parent of a performer · On the 2024 stage performance of The First Magic',
  attributionJa: 'Sugiko Kenny（出演者の保護者）· 2024年公演の「The First Magic」について'
};
const jeffFeedback = [{
  quote: 'Actually all the songs contributed to the success of all the productions of NPJ that I was involved with.',
  quoteJa: '私が関わったNPJの公演では、どの曲も、それぞれの公演の成功に貢献していました。',
  originalEnglish: true,
  attribution: 'Jeff Fritch, Director and Choreographer',
  attributionJa: 'Jeff Fritch（演出・振付）'
}, {
  quote: 'Ben’s lyrics and music compositions always boosted the show’s appeal and popularity. They enhanced performers motivation and inspired them.',
  quoteJa: 'ベンの歌詞と音楽はいつも、公演の魅力と人気を高めてくれました。出演者の意欲を高め、刺激を与えてくれました。',
  originalEnglish: true,
  attribution: 'Jeff Fritch, Director and Choreographer',
  attributionJa: 'Jeff Fritch（演出・振付）'
}];
const performerFeedback = [{
  quote: 'The low harmonies in the music really stayed with me.',
  quoteJa: '曲の低音のハモリが、良く心に残っている',
  attribution: 'NPJ performer',
  attributionJa: 'NPJ出演者'
}, {
  quote: 'Please keep writing cool songs.',
  quoteJa: 'これからもかっこいい曲お願いします。',
  attribution: 'NPJ performer',
  attributionJa: 'NPJ出演者'
}];
const japaneseFeedback = document.documentElement.lang === 'ja';
productionFeedback['cat-who-walked-2024'][0].quoteJa = '公演が終わり、家に帰ってからも、子どもたちが『The Cat Who Walked by Herself』の歌［「The First Magic」］を口ずさんでいたのを覚えています。';
productionFeedback['cat-who-walked-2024'][0].originalEnglish = true;
productionFeedback['romeo-and-juliet-2024'][0].quoteJa = '音楽は、舞台上で役者たちが表現する感情と調和していました。';
productionFeedback['romeo-and-juliet-2024'][0].originalEnglish = true;
const chorusFeedback = {
  quote: 'Our chorus voices easily intertwined with the fine music.',
  quoteJa: '私たちのコーラスの声は、その素晴らしい音楽に自然に溶け合いました。',
  originalEnglish: true,
  attribution: 'Richard Harris, performer', attributionJa: 'Richard Harris（出演者）'
};
const feedbackLink = (id) => `<p class="feedback-more"><a href="#${id}">${japaneseFeedback ? '公演からの声を読む' : 'Read more from the productions'}</a></p>`;
document.querySelector('#nav a[href="#notes"]').insertAdjacentHTML('beforebegin', `<a href="#feedback">${japaneseFeedback ? '公演からの声' : 'Feedback'}</a>`);
const groups = [
  {id:'feedback-cat-2024', title:'Nagoya Players Junior · The Cat Who Walked by Herself · 2024', comments:[...productionFeedback['cat-who-walked-2024'], sugikoFeedback], href:'#cat-who-walked-2024'},
  {id:'feedback-romeo-2024', title:'Romeo and Juliet · 2024', comments:[...productionFeedback['romeo-and-juliet-2024'], chorusFeedback], href:'#romeo-and-juliet-2024'},
  {id:'npj-performer-feedback', title:japaneseFeedback ? 'Nagoya Players Junior · 複数の公演から' : 'Nagoya Players Junior · Across the productions', comments:[...jeffFeedback,...performerFeedback], href:'#cast-recordings'}
];
document.querySelector('#feedback-title').textContent = japaneseFeedback ? '公演からの声' : 'From the productions';
document.querySelector('#feedback-intro').textContent = japaneseFeedback ? '出演者、ご家族、制作に関わった人たちの声。' : 'Selected comments from performers, families and creative collaborators.';
document.querySelector('#feedback-groups').innerHTML = groups.map(group => `<article class="feedback-group" id="${group.id}"><h3>${group.title}</h3>${feedbackMarkup(group.comments)}<p class="feedback-more"><a href="${group.href}">${japaneseFeedback ? '関連する作品・音楽を見る' : 'Explore the related production or music'}</a></p></article>`).join('');
document.querySelector('#the-first-magic .production-return').insertAdjacentHTML('afterend', feedbackMarkup({...sugikoFeedback, quote:'I was moved to tears.', quoteJa:'感動して涙が出ました。'}) + feedbackLink('feedback-cat-2024'));
document.querySelector('#romeos-lament .production-feedback').outerHTML = feedbackMarkup(chorusFeedback) + feedbackLink('feedback-romeo-2024');

const artMarkup = (item) => item.art
  ? `<img src="${item.art}" alt="${ui.artwork} ${item.eyebrow}: ${item.title}" loading="lazy" decoding="async">`
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
      <img src="${album.art}" alt="${ui.artwork} ${album.title}" loading="lazy" decoding="async">
      <div><span>${album.year}</span><h4>${album.title}</h4><p>${album.detail}</p>${(album.recordings || []).map(recording => `<p><a class="album-link" href="${recording.href}">${recording.label}</a></p>`).join('')}<a class="album-link" href="https://bendorman.bandcamp.com/music" target="_blank" rel="noopener">${ui.bandcamp} <span aria-hidden="true">↗</span></a></div>
    </article>`).join('');
}

renderAlbums('#cast-recordings', window.PORTFOLIO.music.cast);
renderAlbums('#demo-recordings', window.PORTFOLIO.music.demos);
document.querySelector('#beyond-bandcamp').innerHTML = window.PORTFOLIO.music.beyond.map((item, index) => `
  <article class="archive-item"><span>0${index + 1}</span><h4>${item.title}</h4><p>${item.detail}</p></article>`).join('');
document.querySelector('#notes-list').innerHTML = window.PORTFOLIO.notes.map(note => `
  <article class="note"${note.id ? ` id="${note.id}"` : ''}${note.lang ? ` lang="${note.lang}"` : ''}><p class="note-date">${note.date}</p><div><h3>${note.title}</h3>${note.body.split('<br><br>').map(paragraph => `<p>${paragraph}</p>`).join('')}${note.links ? `<nav class="note-links" aria-label="${document.documentElement.lang === 'ja' ? '関連する音楽と作品' : 'Related music and production'}">${note.links.map(link => `<a href="${link.href}">${link.label}</a>`).join('') }</nav>` : ''}</div>
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
  if (!['#feedback', '#feedback-cat-2024', '#feedback-romeo-2024', '#npj-performer-feedback', '#cast-recordings', '#finding-a-home-for-home-sweet-home', '#word-hit-me-again-word', '#where-a-song-begins', '#this-town', '#romeo-and-juliet-2024', '#romeos-lament', '#juliets-nightingale', '#cat-who-walked-2024', '#the-first-magic', '#sassy-cat-and-friends', '#showcase-2022', '#rainbow-connections-land-of-kindness', '#rainbow-connections', '#shiny-gold-button', '#forever-friends', '#a-christmas-carol-with-heart-2010', '#emma-amazing-bucket-fillers', '#big-blue-bucket'].includes(destination.hash)) return;
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
