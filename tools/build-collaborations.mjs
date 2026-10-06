// Generates the "Working together" page in English and Japanese from the content below.
// Run: node tools/build-collaborations.mjs   (writes docs/collaborations/ and docs/collaborations/ja/)
// Quotations come from the 2026 survey responses; all were written in English.
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://bendorman.com';
const VERSION = '20261005-together2';
const docs = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'docs');
const icon = `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23100f0e'/%3E%3Cpath d='M20 14v30.5a8 8 0 1 0 4 6.9V27l24-6v17.5a8 8 0 1 0 4 6.9V10z' fill='%23d9a928'/%3E%3C/svg%3E">`;

const L = {
  en: {
    lang: 'en', locale: 'en_GB', path: '/collaborations/', other: '/collaborations/ja/', otherLabel: '日本語', otherLang: 'ja',
    home: '/', title: 'Working together',
    description: 'A song might eventually have my name attached to it as composer, but that’s rarely where it actually begins. The directors, writers, producers and performers I make music with.',
    skip: 'Skip to content', menu: 'Menu', navLabel: 'Primary navigation', brandSmall: 'Musical Theatre', brandLabel: 'Ben Dorman — Musical Theatre, home',
    nav: ['Productions', 'Music', 'Voices', 'Notes', 'Together', 'About', 'Contact'],
    back: '← About Ben', linksLabel: 'Related music and Notes', translated: '',
    footer: ['Ben Dorman — Musical Theatre', 'Based in Japan · Available anywhere'],
    contact: 'Contact Ben',
    intro: [
      'A song might eventually have my name attached to it as composer, but that’s rarely where it actually begins.',
      'It begins in a director’s living room, or on a Zoom call, or with someone saying, “You’ve really got to use this sometime.” I write and record something that suggests what a song might be. Then I hand it over.',
      'And other people make it something else.'
    ],
    tagline: 'Tell me how the story feels. Together, we’ll find how it sounds.',
    processTitle: 'How a project usually runs'
  },
  ja: {
    lang: 'ja', locale: 'ja_JP', path: '/collaborations/ja/', other: '/collaborations/', otherLabel: 'English', otherLang: 'en',
    home: '/?lang=ja', title: '一緒につくる',
    description: '出来上がった曲には作曲者として僕の名前が載るかもしれない。でも、曲が実際に生まれる場所は、たいていそこじゃない。一緒に音楽をつくってきた演出家、脚本家、プロデューサー、出演者たち。',
    skip: '本文へ移動', menu: 'メニュー', navLabel: 'メインナビゲーション', brandSmall: 'ミュージカル音楽', brandLabel: 'ベン・ドーマン — ミュージカル音楽、ホーム',
    nav: ['作品', '音楽', 'みんなの声', 'ノート', '共同制作', 'プロフィール', 'お問い合わせ'],
    back: '← ベンについて', linksLabel: '関連する音楽とノート', translated: '英語からの翻訳',
    footer: ['ベン・ドーマン — ミュージカル音楽', '日本を拠点に · 国内外で活動'],
    contact: 'ベンに連絡する',
    intro: [
      '出来上がった曲には作曲者として僕の名前が載るかもしれない。でも、曲が実際に生まれる場所は、たいていそこじゃない。',
      '始まりは、演出家の家の居間だったり、Zoomの通話だったり、誰かの「これは、いつか絶対に使わないと」というひと言だったりする。僕は、曲がどんなふうになるかを示すものを書いて、録音する。それから、人に渡す。',
      'すると、ほかの人たちが、それを別のものにしてくれる。'
    ],
    tagline: '物語がどう感じられるか、聞かせてください。一緒に、その響きを見つけましょう。',
    processTitle: 'プロジェクトの進め方'
  }
};
const navHashes = ['#productions', '#music', '#feedback', '#notes', 'together', '#about', '#contact'];
const note = {
  'we-got-the-power': { en: 'Together: We Got the Power', ja: '共同制作：We Got the Power' },
  'where-a-song-begins': { en: 'Note: Digging through the archive: where a song begins', ja: 'ノート：アーカイブを掘り返して：歌が生まれるところ' },
  'word-hit-me-again-word': { en: 'Note: Word! Hit me again! Word!', ja: 'ノート：“Word! Hit me again! Word!”' },
  'finding-a-home-for-home-sweet-home': { en: 'Note: Finding a home for “Home Sweet Home”', ja: 'ノート：「Home Sweet Home」の居場所を見つける' },
  'where-does-magic-start': { en: 'Note: Where does magic start?', ja: 'ノート：魔法はどこから始まる？' }
};
const track = (id, en, ja) => ({ id, en, ja });
const noteLink = (slug, collection = 'notes') => ({ note: slug, collection });

const people = [{
  id: 'john-lenihan', name: 'John Lenihan',
  role: { en: 'Director · <em>A Christmas Carol with Heart</em>, Nagoya Players, 2010', ja: '演出 · 『A Christmas Carol with Heart』Nagoya Players、2010年' },
  text: {
    en: ['In 2010, John told me his idea for Dickens’s story: not Victorian London, but Texas. He pulled out photographs he’d taken on a trip there and talked about towns that seemed to have had the life slowly drawn out of them.',
         'That conversation—and those photographs—gave me somewhere to go. The result was “This Town.”'],
    ja: ['2010年、Johnはディケンズの物語をどう舞台にするか、その構想を話してくれた。ヴィクトリア朝のロンドンではなく、テキサス。旅先で撮った写真を取り出して、ゆっくりと生気を吸い取られてしまったような町のことを語った。',
         'その会話と写真が、僕に向かう先をくれた。そこから生まれたのが「This Town」だった。']
  },
  links: [track('this-town', 'This Town', '「This Town」'), noteLink('where-a-song-begins')]
}, {
  id: 'jeff-fritch', name: 'Jeff Fritch',
  role: { en: 'Writer, director and choreographer · Nagoya Players Junior, 2022–2024', ja: '脚本・演出・振付 · Nagoya Players Junior、2022〜2024年' },
  text: {
    en: ['Jeff and I go back to tap-and-guitar performances in 2006. In 2021 he asked me to write music for a children’s show he was developing, <em>The Land of Kindness</em>. When my first demo of “Shiny Gold Button” didn’t work, I asked him to just sing me the rhythm. That rhythm is the song.',
         '“Home Sweet Home” also began as his idea, for a different show.'],
    ja: ['Jeffとは、2006年のタップとギターのパフォーマンス以来の付き合いだ。2021年、彼が準備していた子ども向けの舞台『The Land of Kindness』の音楽を書かないかと声をかけてくれた。「Shiny Gold Button」の最初のデモがうまくいかなかったとき、僕は彼に、とにかくリズムを歌ってほしいと頼んだ。そのリズムが、この曲になった。',
         '「Home Sweet Home」も、もとは彼のアイデアで、別の舞台のためのものだった。']
  },
  quote: { en: 'Ben, your music compositions and lyrics still come to mind till this day. Thank you for the opportunity to work together and create music.',
           ja: 'ベン、あなたの作曲と歌詞は、今でも心に浮かびます。一緒に仕事をし、音楽をつくる機会をありがとう。' },
  links: [track('shiny-gold-button', 'Shiny Gold Button', '「Shiny Gold Button」'), noteLink('word-hit-me-again-word'), noteLink('finding-a-home-for-home-sweet-home')]
}, {
  id: 'shawn-mahler', name: 'Shawn Mahler',
  role: { en: 'Producer · Nagoya Players Junior, 2022–', ja: 'プロデューサー · Nagoya Players Junior、2022年〜' },
  text: {
    en: ['Shawn has produced every Nagoya Players Junior show I’ve written for. It was on a Zoom call with him that I first heard the brief for <em>The Cat Who Walked by Herself</em>: one song about the cat, and another about the First Magic. I had no idea what the First Magic meant. But I liked the idea.'],
    ja: ['Shawnは、僕が音楽を書いてきたNagoya Players Juniorの公演を、すべてプロデュースしている。『The Cat Who Walked by Herself』の依頼を初めて聞いたのも、彼とのZoom通話だった。猫についての歌がひとつ。そしてもうひとつは、The First Magicについての歌。The First Magicが何を意味するのか、僕にはまったく分からなかった。でも、そのアイデアは気に入った。']
  },
  quote: { en: 'For NPJ, the music has to do several things at once. It needs to serve the story, give the performers something exciting to work with, be accessible to children with different levels of English and musical experience, and give us opportunities for movement and choreography. You’ve always done an incredible job checking all the boxes.',
           ja: 'NPJでは、音楽がいくつもの役割を同時に果たさなければなりません。物語に寄り添い、出演者にとってわくわくする素材になり、英語や音楽の経験がさまざまな子どもたちにも取り組みやすく、動きや振付の機会も生み出すこと。あなたはいつも、そのすべてを見事に満たしてくれました。' },
  links: [track('the-first-magic', 'The First Magic', '「The First Magic」'), noteLink('where-does-magic-start')]
}, {
  id: 'ana-valdes-lim', name: 'Ana Valdes Lim',
  role: { en: 'Director · <em>Romeo and Juliet</em>, Nagoya Players, 2024', ja: '演出 · 『Romeo and Juliet』Nagoya Players、2024年' },
  text: {
    en: ['When Ana and I talked about the scene in Juliet’s chamber, I remembered a song Jeff had turned down years earlier. I reworked it for Juliet and played her the demo. She agreed to go with it, for which I remain eternally grateful.'],
    ja: ['ジュリエットの寝室の場面についてAnaと話していたとき、何年か前にJeffが見送った曲のことを思い出した。それをジュリエットのために作り直し、デモを彼女に聴かせた。彼女は、それでいこうと言ってくれた。そのことには、今も感謝してもしきれない。']
  },
  quote: { en: 'His music has dramatic range: The dynamic drums in the fight scenes were fierce — in contrast the love song of Juliet was sweet, poignant, and moving.',
           ja: '彼の音楽には、劇的な幅があります。戦いの場面の力強いドラムは激しく、それとは対照的に、ジュリエットのラブソングは甘く、切なく、心を揺さぶるものでした。' },
  links: [track('juliets-nightingale', 'Juliet’s Nightingale / Home Sweet Home', '「Juliet’s Nightingale / Home Sweet Home」'), track('romeos-lament', 'Romeo’s Lament', '「Romeo’s Lament」'), noteLink('finding-a-home-for-home-sweet-home')]
}, {
  id: 'kory-alexander-majansky', name: 'Kory Alexander Majansky',
  role: { en: 'Writer, director and co-lyricist · Nagoya Players Junior, 2026–', ja: '脚本・演出・共同作詞 · Nagoya Players Junior、2026年〜' },
  text: {
    en: ['Kory wrote and directed <em>Emma Amazing &amp; The Bucket Fillers</em> for the 2026 Showcase. The concept for “Big Blue Bucket” was theirs, and we wrote its lyrics together. We’re writing together again for <em>Sweet Dreams, Eugene</em>.',
         'Before that, they were onstage in <em>Romeo and Juliet</em>. Kory and the backing singers took the bare bones of “Romeo’s Lament” and turned them into something much larger.'],
    ja: ['Koryは、2026年のショーケースのために『Emma Amazing &amp; The Bucket Fillers』の脚本と演出を手がけた。「Big Blue Bucket」のコンセプトはKoryのもので、歌詞は二人で書いた。『Sweet Dreams, Eugene』でも、また一緒に書いている。',
         'それより前、Koryは『Romeo and Juliet』の舞台に立っていた。Koryとバックで歌う人たちが、「Romeo’s Lament」の骨組みを受け取って、ずっと大きなものにしてくれた。']
  },
  quote: {"en":"I'm always impressed at how Ben's music can create special acting moments for the performers.","ja":"ベンの音楽が、出演者にとって特別な演技の瞬間を生み出せることに、いつも感心しています。"},
  links: [track('big-blue-bucket', 'Big Blue Bucket', '「Big Blue Bucket」'), noteLink('we-got-the-power', 'collaborations'), track('romeos-lament', 'Romeo’s Lament', '「Romeo’s Lament」')]
}];

const process = {
  en: 'We start with how the story feels: the colours, feelings and vibes you have in mind. I write and record demos, you tell me what works and what doesn’t, and we keep going until it sounds right. When the songs are settled, I can provide vocal guides for rehearsal, and for some shows I’ve also worked as music director.',
  ja: 'まず、物語がどう感じられるかから始めます。思い描いている色、感情、空気感について。僕がデモを書いて録音し、うまくいっているところ、いないところを伝えてもらいながら、しっくりくるまで重ねていきます。曲が固まったら、稽古用のボーカルガイドを用意できます。音楽監督を務めた公演もあります。'
};
const processQuote = {
  en: 'Ben Dorman is wonderful to work with in a creative project. He is talented, intuitive, open, and versatile. He is also organized and professional: delivering all you need on time from drafts to vocal guides.',
  ja: 'ベン・ドーマンは、創作のプロジェクトを一緒に進めるうえで、本当に素晴らしい人です。才能があり、直感に優れ、オープンで、多才です。さらに、几帳面でプロフェッショナルです。草稿からボーカルガイドまで、必要なものをすべて期限どおりに届けてくれます。'
};

const q = (lang, text) => lang === 'ja' ? `「${text}」` : `“${text}”`;
const quoteBlock = (lang, text, by) => {
  const parts = [by, lang === 'ja' ? L.ja.translated : ''].filter(Boolean).join(' · ');
  return `\n          <blockquote class="collab-quote"><p>${q(lang, text)}</p>${parts ? `<footer>${parts}</footer>` : ''}</blockquote>`;
};
const linkHref = (lang, l) => l.note ? `/${l.collection || 'notes'}/${l.note}/${lang === 'ja' ? 'ja/' : ''}` : `${L[lang].home}#${l.id}`;
const linkText = (lang, l) => l.note ? note[l.note][lang] : l[lang];

const page = (lang) => {
  const c = L[lang];
  const entries = people.map(p => `
        <section class="collab-entry" id="${p.id}" aria-labelledby="${p.id}-name">
          <h2 id="${p.id}-name">${p.name}</h2>
          <p class="collab-role">${p.role[lang]}</p>${p.text[lang].map(t => `\n          <p class="collab-text">${t}</p>`).join('')}${p.quote ? quoteBlock(lang, p.quote[lang], '') : ''}
          <nav class="collab-links" aria-label="${c.linksLabel}">${p.links.map(l => `<a href="${linkHref(lang, l)}">${linkText(lang, l)}</a>`).join('')}</nav>
        </section>`).join('\n');
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${c.title} — Ben Dorman</title>
  <meta name="description" content="${c.description}">
  <link rel="canonical" href="${SITE}${c.path}">
  <link rel="alternate" hreflang="en" href="${SITE}${L.en.path}">
  <link rel="alternate" hreflang="ja" href="${SITE}${L.ja.path}">
  <link rel="alternate" hreflang="x-default" href="${SITE}${L.en.path}">
  <meta property="og:title" content="${c.title} — Ben Dorman">
  <meta property="og:description" content="${c.description}">
  <meta property="og:image" content="${SITE}/assets/ben-dorman-social.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${SITE}${c.path}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Ben Dorman">
  <meta property="og:locale" content="${c.locale}">
  <meta property="og:locale:alternate" content="${L[c.otherLang].locale}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${c.title} — Ben Dorman">
  <meta name="twitter:description" content="${c.description}">
  <meta name="twitter:image" content="${SITE}/assets/ben-dorman-social.png">
  ${icon}
  <link rel="stylesheet" href="/styles.css?v=${VERSION}">
</head>
<body class="note-page-body">
  <a class="skip-link" href="#main">${c.skip}</a>
  <header class="site-header">
    <a class="brand" href="${c.home}" aria-label="${c.brandLabel}">
      <span>Ben Dorman</span><small>${c.brandSmall}</small>
    </a>
    <button class="menu" type="button" aria-expanded="false" aria-controls="nav">${c.menu}</button>
    <nav id="nav" aria-label="${c.navLabel}">
      ${c.nav.map((label, i) => navHashes[i] === 'together' ? `<a href="${c.path}" aria-current="page">${label}</a>` : `<a href="${c.home}${navHashes[i]}">${label}</a>`).join('')}
      <a class="language-link" href="${c.other}" lang="${c.otherLang}" hreflang="${c.otherLang}">${c.otherLabel}</a>
    </nav>
  </header>

  <main id="main">
    <article class="note-page collab-page">
      <p class="note-back"><a href="${c.home}#about">${c.back}</a></p>
      <header class="note-page-head">
        <h1>${c.title}</h1>
      </header>
      <div class="note-body collab-intro">
${c.intro.map(t => `        <p>${t}</p>`).join('\n')}
        <p class="collab-tagline"><em>${c.tagline}</em></p>
      </div>
${entries}

        <section class="collab-entry collab-process" id="how-a-project-runs" aria-labelledby="how-a-project-runs-title">
          <h2 id="how-a-project-runs-title">${c.processTitle}</h2>
          <p class="collab-text">${process[lang]}</p>${quoteBlock(lang, processQuote[lang], 'Ana Valdes Lim')}
          <p class="collab-contact"><a href="mailto:bendormanmusic@gmail.com">${c.contact} <span aria-hidden="true">→</span></a></p>
        </section>
    </article>
  </main>

  <footer class="note-footer">
    <div class="footer-line"><span>${c.footer[0]}</span><span>${c.footer[1]}</span><span>© <span id="year">2026</span></span></div>
  </footer>
  <script src="/note.js?v=${VERSION}"></script>
</body>
</html>
`;
};

for (const lang of ['en', 'ja']) {
  const dir = path.join(docs, L[lang].path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(lang));
}
console.log('Built Working together page × 2 languages');
