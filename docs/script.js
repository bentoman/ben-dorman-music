const productionList = document.querySelector('#production-list');
const ui = window.PORTFOLIO.ui || {
  artwork: 'Artwork for',
  collaborators: 'Key collaborators',
  bandcamp: 'Find on Bandcamp'
};
// Approved survey excerpts; use the original Japanese when supplied.
const japaneseFeedback = document.documentElement.lang === 'ja';
const feedbackHeading = japaneseFeedback ? '舞台からの声' : 'Voices from the stage';
const feedbackNavLabel = japaneseFeedback ? 'みんなの声' : 'Voices';
const feedbackMarkup = (feedback) => {
  if (!feedback) return '';
  const japanese = japaneseFeedback;
  return `<aside class="production-feedback" aria-label="${feedbackHeading}">
    <p class="feedback-label">${feedbackHeading}</p>
    ${(Array.isArray(feedback) ? feedback : [feedback]).map(comment => `<blockquote><p lang="${japanese && comment.quoteJa ? 'ja' : 'en'}">${japanese && comment.quoteJa ? `「${comment.quoteJa}」` : `“${comment.quote}”`}</p><footer>${japanese ? comment.attributionJa : comment.attribution}${!japanese && comment.quoteJa && !comment.originalEnglish ? ' · Translated from Japanese' : japanese && comment.originalEnglish ? ' · 英語からの翻訳' : ''}</footer></blockquote>`).join('')}
  </aside>`;
};
const sugikoFeedback = {
  quote: 'All of Ben’s songs are wonderful, and I’m full of gratitude for the lovely music and songs he brings to the children each time! My favourite so far is the song everyone in the older group—the animals—sang two years ago, which also included a solo by the girl playing the brown cat. I was moved to tears.',
  quoteJa: 'ベンさんの曲はどれも素晴らしく、毎回素敵な音楽・楽曲を子ども達に届けてくださり感謝の気持ちでいっぱいです！今まで一番好きな曲は、2年前に上のクラス（動物たち）でみんなが歌ってくれた、茶色の猫役の女の子のソロなどもあるあの曲です。感動して涙が出ました。',
  attribution: 'Sugiko Kenny, parent of a performer · On seeing ‘The First Magic’ performed onstage by the young cast',
  attributionJa: 'Sugiko Kenny（出演者の保護者）· 若いキャストが舞台で演じた「The First Magic」を観て'
};

// "Voices from the stage": one voice per perspective, quoted from the 2026 survey responses.
// Quotations are excerpts of a single answer each; the only edits are an apostrophe
// (Jeff Fritch) and an ellipsis (parent). All originals are in English.
const voices = [{
  "id": "voice-kory-alexander-majansky",
  "quotes": [
    {
      "en": "I am so impressed by his ability to take simple little seeds of ideas, thoughts, or impressions and turn them into a completed product that feels fresh and alive.",
      "ja": "小さなアイデアや考え、印象の種を受け取り、新鮮で生き生きとした完成作品へと育て上げるベンの力には、本当に感心しています。"
    }
  ],
  "name": "Kory Alexander Majansky",
  "role": "NPJ Director/Writer",
  "roleJa": "NPJ 演出・脚本"
}, {
  id: 'voice-shawn-mahler',
  quotes: [{
    en: 'You can take the ideas in the script and develop them musically rather than simply putting a tune underneath the text.',
    ja: '台本にあるアイデアを、テキストにただメロディーを付けるのではなく、音楽として発展させることができます。'
  }],
  name: 'Shawn Mahler',
  role: 'Creative Director, Nagoya Players',
  roleJa: 'Nagoya Players クリエイティブ・ディレクター'
}, {
  id: 'voice-ana-valdes-lim',
  quotes: [{
    en: 'The music connected the drama of the story to the energy of performance. It elevated the experience of audience and performers.',
    ja: '音楽は、物語のドラマと舞台のエネルギーを結びつけていました。観客と出演者の体験を、より高めてくれました。'
  }],
  name: 'Ana Valdes Lim',
  role: 'Director, <em>Romeo and Juliet</em>, Nagoya Players',
  roleJa: 'Nagoya Players『Romeo and Juliet』演出'
}, {
  id: 'voice-jeff-fritch',
  quotes: [{
    en: 'Ben’s lyrics and music compositions always boosted the show’s appeal and popularity. They enhanced performers’ motivation and inspired them.',
    ja: 'ベンの歌詞と音楽はいつも、公演の魅力と人気を高めてくれました。出演者の意欲を高め、刺激を与えてくれました。'
  }],
  name: 'Jeff Fritch',
  role: 'Director and Choreographer',
  roleJa: '演出・振付'
}, {
  id: 'voice-richard-harris',
  quotes: [{
    en: 'Our chorus voices easily intertwined with the fine music.',
    ja: '私たちのコーラスの声は、その素晴らしい音楽に自然に溶け合いました。'
  }],
  name: 'Richard Harris',
  role: 'Chorus, Romeo’s Lament',
  roleJa: '「Romeo’s Lament」コーラス'
}, {
  id: 'voice-parent',
  quotes: [{
    en: 'After the performance, even after returning home, I remember that the children kept humming the song… It was a wonderful song that left an impression on us.',
    ja: '公演が終わり、家に帰ってからも、子どもたちがその歌を口ずさんでいたのを覚えています。……心に残る素晴らしい歌でした。'
  }],
  name: '',
  role: 'Parent of a performer · <em>The Cat Who Walked by Herself</em>, 2024',
  roleJa: '出演者の保護者 ·『The Cat Who Walked by Herself』2024年'
}];
const voiceMarkup = (voice) => `<figure class="voice" id="${voice.id}">
  ${voice.quotes.map(quote => `<blockquote><p lang="${japaneseFeedback ? 'ja' : 'en'}">${japaneseFeedback ? `「${quote.ja}」` : `“${quote.en}”`}</p></blockquote>`).join('')}
  <figcaption>${voice.name ? `<span class="voice-name">${voice.name}</span>` : ''}<span class="voice-role">${japaneseFeedback ? voice.roleJa : voice.role}</span>${japaneseFeedback ? '<span class="voice-note">英語からの翻訳</span>' : ''}</figcaption>
</figure>`;
const feedbackLink = (id) => `<p class="feedback-more"><a href="#${id}">${japaneseFeedback ? '舞台からの声を読む' : 'Read more voices from the stage'}</a></p>`;
document.querySelector('#nav a[href="#notes"]').insertAdjacentHTML('beforebegin', `<a href="#feedback">${feedbackNavLabel}</a>`);
document.querySelector('#feedback-title').textContent = feedbackHeading;
document.querySelector('#feedback-intro').textContent = japaneseFeedback ? '出演者、ご家族、制作に関わった人たちの声。' : 'Selected comments from performers, families and creative collaborators.';
document.querySelector('#feedback-groups').innerHTML = voices.map(voiceMarkup).join('');
document.querySelector('#the-first-magic .production-return').insertAdjacentHTML('afterend', feedbackMarkup({...sugikoFeedback, quote:'I was moved to tears.', quoteJa:'感動して涙が出ました。'}) + feedbackLink('voice-parent'));

const artMarkup = (item) => item.art
  ? `<img src="${item.art}" alt="${ui.artwork} ${item.eyebrow}: ${item.title}" loading="lazy" decoding="async">`
  : `<div class="type-art" aria-hidden="true"><span>${item.year}</span><b>${item.theme === 'development' ? 'WIP' : 'ARCHIVE'}</b></div>`;
const workMarkup = (work) => typeof work === 'string'
  ? `<li>${work}</li>`
  : `<li${work.id ? ` id="${work.id}"` : ''}><a href="${work.href}">${work.title}</a>${work.note ? ` · ${work.note}` : ''}</li>`;

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

// Each card links to its own Bandcamp album where known, otherwise to the catalogue.
function renderAlbums(target, albums) {
  document.querySelector(target).innerHTML = albums.map(album => `
    <article class="album">
      <img src="${album.art}" alt="${ui.artwork} ${album.title}" loading="lazy" decoding="async">
      <div><span>${album.year}</span><h4>${album.title}</h4><p>${album.detail}</p>${(album.recordings || []).map(recording => `<p><a class="album-link" href="${recording.href}">${recording.label}</a></p>`).join('')}<a class="album-link" href="${album.bandcamp || 'https://bendorman.bandcamp.com/music'}" target="_blank" rel="noopener">${ui.bandcamp} <span aria-hidden="true">↗</span></a></div>
    </article>`).join('');
}

renderAlbums('#cast-recordings', window.PORTFOLIO.music.cast);
renderAlbums('#demo-recordings', window.PORTFOLIO.music.demos);
document.querySelector('#beyond-bandcamp').innerHTML = window.PORTFOLIO.music.beyond.map((item, index) => `
  <article class="archive-item"><span>0${index + 1}</span><h4>${item.title}</h4><p>${item.detail}</p></article>`).join('');
// Notes: the homepage shows the opening of each Note; the full text lives on its own page (generated by tools/build-notes.mjs).
const notesJa = document.documentElement.lang === 'ja';
document.querySelector('#notes-list').innerHTML = window.NOTE_PREVIEWS[notesJa ? 'ja' : 'en'].map(note => `
  <article class="note" id="${note.id}" lang="${notesJa ? 'ja' : 'en'}"><div><h3>${note.title}</h3><p class="note-context">${note.context}</p>${note.excerpt.map(paragraph => `<p>${paragraph}</p>`).join('')}<p class="note-more"><a href="${note.url}" aria-label="${notesJa ? 'ノートを読む：' : 'Read the Note: '}${note.title.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;')}">${notesJa ? 'ノートを読む' : 'Read the Note'} <span aria-hidden="true">→</span></a></p></div>
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

// Main navigation: every same-page section link glides with the same eased,
// fixed-pace animation, so short hops (Productions) feel like long ones.
let sectionScroll = 0;
const scrollToSection = (hash) => {
  const target = hash.length > 1 && document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return false;
  cancelAnimationFrame(sectionScroll);
  const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const from = window.scrollY;
  const to = Math.max(0, Math.min(from + target.getBoundingClientRect().top - offset, document.documentElement.scrollHeight - window.innerHeight));
  const finish = () => {
    history.pushState(null, '', hash);
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  };
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || Math.abs(to - from) < 2) {
    window.scrollTo(0, to);
    finish();
    return true;
  }
  const duration = Math.min(1100, Math.max(600, Math.abs(to - from) * 0.25));
  const start = performance.now();
  document.documentElement.style.scrollBehavior = 'auto';
  const stop = () => { cancelAnimationFrame(sectionScroll); document.documentElement.style.scrollBehavior = ''; window.removeEventListener('wheel', stop); window.removeEventListener('touchstart', stop); };
  window.addEventListener('wheel', stop, { passive: true });
  window.addEventListener('touchstart', stop, { passive: true });
  const step = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    window.scrollTo(0, from + (to - from) * eased);
    if (t < 1) sectionScroll = requestAnimationFrame(step);
    else { stop(); finish(); }
  };
  sectionScroll = requestAnimationFrame(step);
  return true;
};

// Keep archive navigation on the page and scroll to the rendered production.
document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname || destination.search !== window.location.search) return;
  if (link.matches('#nav a[href^="#"], .brand, .text-link[href^="#"]') && scrollToSection(destination.hash)) { event.preventDefault(); return; }
  if (!['#feedback', '#voice-parent', '#cast-recordings', '#finding-a-home-for-home-sweet-home', '#word-hit-me-again-word', '#where-a-song-begins', '#this-town', '#romeo-and-juliet-2024', '#romeos-lament', '#juliets-nightingale', '#cat-who-walked-2024', '#the-first-magic', '#sassy-cat-and-friends', '#showcase-2022', '#rainbow-connections-land-of-kindness', '#rainbow-connections', '#shiny-gold-button', '#forever-friends', '#a-christmas-carol-with-heart-2010', '#emma-amazing-bucket-fillers', '#big-blue-bucket'].includes(destination.hash)) return;
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
