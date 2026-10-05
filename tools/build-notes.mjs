#!/usr/bin/env node
// Generates the individual Note pages, the homepage Note previews and the sitemap
// from tools/notes-source.json. The site itself still needs no build step:
// the generated files are committed. Run from the repository root:
//   node tools/build-notes.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docs = path.join(root, 'docs');
const source = JSON.parse(fs.readFileSync(path.join(root, 'tools', 'notes-source.json'), 'utf8'));
const SITE = 'https://bendorman.com';
const VERSION = '20261004-s3';
const slugs = new Set(source.notes.map(note => note.slug));

const escapeAttr = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const plain = (html) => html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const noteUrl = (slug, lang) => `/notes/${slug}/${lang === 'ja' ? 'ja/' : ''}`;
const homeUrl = (lang, hash = '') => (lang === 'ja' ? '/?lang=ja' : '/') + hash;

// Same-page anchors in the approved text point at the homepage or at another Note page.
const localiseHref = (href, lang) => {
  if (!href.startsWith('#')) return href;
  const id = href.slice(1);
  return slugs.has(id) ? noteUrl(id, lang) : homeUrl(lang, href);
};
const localiseBody = (html, lang) => html.replace(/href="([^"]+)"/g, (_, href) => `href="${localiseHref(href, lang)}"`);

const copy = {
  en: {
    htmlLang: 'en', locale: 'en_GB', alt: 'ja_JP',
    skip: 'Skip to content', menu: 'Menu', navLabel: 'Primary navigation',
    brand: 'Ben Dorman', brandSmall: 'Musical Theatre', brandLabel: 'Ben Dorman — Musical Theatre, home',
    nav: ['Productions', 'Music', 'Voices', 'Notes', 'About', 'Contact'],
    switchLabel: '日本語', switchLang: 'ja',
    back: '← All Notes', backBottom: '← Back to Notes', related: 'Related music and production',
    footer: ['Ben Dorman — Musical Theatre', 'Based in Japan · Available anywhere'],
    site: 'Ben Dorman — Musical Theatre', descLimit: 155
  },
  ja: {
    htmlLang: 'ja', locale: 'ja_JP', alt: 'en_GB',
    skip: '本文へ移動', menu: 'メニュー', navLabel: 'メインナビゲーション',
    brand: 'Ben Dorman', brandSmall: 'ミュージカル音楽', brandLabel: 'ベン・ドーマン — ミュージカル音楽、ホーム',
    nav: ['作品', '音楽', 'みんなの声', 'ノート', 'プロフィール', 'お問い合わせ'],
    switchLabel: 'English', switchLang: 'en',
    back: '← ノート一覧', backBottom: '← ノート一覧へ戻る', related: '関連する音楽と作品',
    footer: ['ベン・ドーマン — ミュージカル音楽', '日本を拠点に · 国内外で活動'],
    site: 'ベン・ドーマン — ミュージカル音楽', descLimit: 90
  }
};
const navHashes = ['#productions', '#music', '#feedback', '#notes', '#about', '#contact'];

const description = (paragraphs, limit, lang) => {
  let text = '';
  for (const paragraph of paragraphs) {
    text += (text ? ' ' : '') + plain(paragraph);
    if (text.length >= limit * 0.6) break;
  }
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const clean = lang === 'ja' ? cut : cut.replace(/\s+\S*$/, '');
  return clean.replace(/[\s,;:—-]+$/, '') + '…';
};

const page = (note, lang) => {
  const c = copy[lang];
  const data = note[lang];
  const other = lang === 'ja' ? 'en' : 'ja';
  const canonical = SITE + noteUrl(note.slug, lang);
  const desc = description(data.paragraphs, c.descLimit, lang);
  const title = `${plain(data.title)} — Ben Dorman`;
  const navLinks = c.nav.map((label, index) => `<a href="${homeUrl(lang, navHashes[index])}">${label}</a>`).join('');
  const links = data.links.length
    ? `\n        <nav class="note-links" aria-label="${c.related}">${data.links.map(link => `<a href="${localiseHref(link.href, lang)}">${link.label}</a>`).join('')}</nav>`
    : '';
  return `<!doctype html>
<html lang="${c.htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeAttr(title)}</title>
  <meta name="description" content="${escapeAttr(desc)}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="en" href="${SITE}${noteUrl(note.slug, 'en')}">
  <link rel="alternate" hreflang="ja" href="${SITE}${noteUrl(note.slug, 'ja')}">
  <link rel="alternate" hreflang="x-default" href="${SITE}${noteUrl(note.slug, 'en')}">
  <meta property="og:title" content="${escapeAttr(plain(data.title))}">
  <meta property="og:description" content="${escapeAttr(desc)}">
  <meta property="og:image" content="${SITE}/assets/ben-dorman-social.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${canonical}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Ben Dorman">
  <meta property="og:locale" content="${c.locale}">
  <meta property="og:locale:alternate" content="${c.alt}">
  <meta property="article:published_time" content="${note.iso}">
  <meta property="article:author" content="Ben Dorman">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeAttr(plain(data.title))}">
  <meta name="twitter:description" content="${escapeAttr(desc)}">
  <meta name="twitter:image" content="${SITE}/assets/ben-dorman-social.png">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23100f0e'/%3E%3Cpath d='M20 14v30.5a8 8 0 1 0 4 6.9V27l24-6v17.5a8 8 0 1 0 4 6.9V10z' fill='%23d9a928'/%3E%3C/svg%3E">
  <link rel="stylesheet" href="/styles.css?v=${VERSION}">
</head>
<body class="note-page-body">
  <a class="skip-link" href="#main">${c.skip}</a>
  <header class="site-header">
    <a class="brand" href="${homeUrl(lang)}" aria-label="${c.brandLabel}">
      <span>${c.brand}</span><small>${c.brandSmall}</small>
    </a>
    <button class="menu" type="button" aria-expanded="false" aria-controls="nav">${c.menu}</button>
    <nav id="nav" aria-label="${c.navLabel}">
      ${navLinks}
      <a class="language-link" href="${noteUrl(note.slug, other)}" lang="${c.switchLang}" hreflang="${c.switchLang}">${c.switchLabel}</a>
    </nav>
  </header>

  <main id="main">
    <article class="note-page">
      <p class="note-back"><a href="${homeUrl(lang, '#notes')}">${c.back}</a></p>
      <header class="note-page-head">
        <p class="note-date"><time datetime="${note.iso}">${data.date}</time></p>
        <h1>${data.title}</h1>
      </header>
      <div class="note-body">
${data.paragraphs.map(paragraph => `        <p>${localiseBody(paragraph, lang)}</p>`).join('\n')}
      </div>${links}
      <p class="note-back note-back-bottom"><a href="${homeUrl(lang, '#notes')}">${c.backBottom}</a></p>
    </article>
  </main>

  <footer class="note-footer">
    <div class="footer-line"><span>${c.footer[0]}</span><span>${c.footer[1]}</span><span>© <span id="year">${new Date().getFullYear()}</span></span></div>
  </footer>
  <script src="/note.js?v=${VERSION}"></script>
</body>
</html>
`;
};

const write = (file, text) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text); };

for (const note of source.notes) {
  write(path.join(docs, 'notes', note.slug, 'index.html'), page(note, 'en'));
  write(path.join(docs, 'notes', note.slug, 'ja', 'index.html'), page(note, 'ja'));
}

// Homepage previews (no date): a contextual line plus opening paragraph(s), verbatim, and a link to the full Note.
const previews = { en: [], ja: [] };
for (const note of source.notes) {
  for (const lang of ['en', 'ja']) {
    const data = note[lang];
    previews[lang].push({
      id: note.slug, title: data.title, context: note.context[lang], url: noteUrl(note.slug, lang),
      excerpt: data.paragraphs.slice(note.excerptStart || 0, (note.excerptStart || 0) + note.excerptParagraphs)
    });
  }
}
write(path.join(docs, 'notes-index.js'),
  `// Generated by tools/build-notes.mjs — do not edit. Opening paragraphs of each Note for the homepage.\nwindow.NOTE_PREVIEWS = ${JSON.stringify(previews, null, 1)};\n`);

// Sitemap: the homepage and every Note, each with its language alternates.
const alt = (en, ja) => `    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>\n    <xhtml:link rel="alternate" hreflang="ja" href="${ja}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`;
const entry = (loc, en, ja, lastmod) => `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n${alt(en, ja)}\n  </url>`;
const entries = [
  entry(`${SITE}/`, `${SITE}/`, `${SITE}/?lang=ja`),
  entry(`${SITE}/collaborations/`, `${SITE}/collaborations/`, `${SITE}/collaborations/ja/`),
  entry(`${SITE}/collaborations/ja/`, `${SITE}/collaborations/`, `${SITE}/collaborations/ja/`),
  ...source.notes.flatMap(note => {
    const en = SITE + noteUrl(note.slug, 'en');
    const ja = SITE + noteUrl(note.slug, 'ja');
    return [entry(en, en, ja, note.iso), entry(ja, en, ja, note.iso)];
  })
];
write(path.join(docs, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`);

console.log(`Built ${source.notes.length} Notes × 2 languages, notes-index.js and sitemap.xml`);
