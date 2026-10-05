(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('lang') !== 'ja') return;

  document.documentElement.lang = 'ja';
  document.title = 'ベン・ドーマン — ミュージカル音楽';
  document.querySelector('meta[name="description"]').content = '作曲家・作詞家ベン・ドーマンのミュージカル音楽ポートフォリオ。日本を拠点に、国内外のコラボレーションに対応。';

  const element = (target) => typeof target === 'string' ? document.querySelector(target) : target;
  const html = (target, value) => { element(target).innerHTML = value; };
  const text = (target, value) => { element(target).textContent = value; };
  text('.skip-link', '本文へ移動');
  document.querySelector('.brand').setAttribute('aria-label', 'ベン・ドーマン — ミュージカル音楽、ホーム');
  text('.brand small', 'ミュージカル音楽');
  text('.menu', 'メニュー');
  document.querySelector('#nav').setAttribute('aria-label', 'メインナビゲーション');
  const nav = document.querySelectorAll('#nav a');
  ['ホーム', '作品', '音楽', 'ノート', 'プロフィール', 'お問い合わせ'].forEach((label, index) => { nav[index].textContent = label; });
  nav[6].textContent = 'English';
  nav[6].href = window.location.pathname + window.location.hash;
  nav[6].lang = 'en';
  nav[6].hreflang = 'en';

  // Accessible names in Japanese (visible text unchanged).
  document.querySelector('.hero-art').setAttribute('aria-label', '主な作品のアートワーク');
  document.querySelector('.art-main img').alt = 'Nagoya Players Junior Showcase 2026のアートワーク';
  document.querySelector('.art-side img').alt = '『The Cat Who Walked by Herself』のアートワーク';
  const videoTitles = {
    'big-blue-bucket': 'Big Blue Bucket — Nagoya Players Junior（オリジナル・キャストによるパフォーマンス、2026年）',
    'the-first-magic': 'The First Magic — 『The Cat Who Walked by Herself』Nagoya Players Junior（2024年 · 作曲者によるデモ）',
    'sassy-cat-and-friends': 'Sassy Cat — 『The Cat Who Walked by Herself』Nagoya Players Junior（2024年 · 作曲者によるデモ）',
    'juliets-nightingale': 'Juliet’s Nightingale / Home Sweet Home — 『Romeo and Juliet』Nagoya Players（2024年 · 作曲者によるデモ）',
    'romeos-lament': 'Romeo’s Lament — 『Romeo and Juliet』Nagoya Players（2024年 · 作曲者によるデモ）',
    'rainbow-connections': 'Rainbow Connections — 『Rainbow Connections: The Land of Kindness』Nagoya Players Junior（2022年 · キャスト録音）',
    'shiny-gold-button': 'Shiny Gold Button — 『Rainbow Connections: The Land of Kindness』Nagoya Players Junior（2021年 · 作曲者によるデモ）',
    'forever-friends': 'Forever Friends — 『A Day in the Life of Boogy』Nagoya Players Junior（2022年 · キャスト録音）',
    'this-town': 'This Town — 『A Christmas Carol with Heart』Nagoya Players（2010年 · プロダクション録音）',
  };
  Object.entries(videoTitles).forEach(([id, title]) => { document.querySelector(`#${id} iframe`).title = title; });

  text('.hero .kicker', '作曲 · 作詞 · 音楽監督');
  html('#hero-title', '物語がどう<em>感じられるか</em>、<br><span>聞かせてください。<br>一緒に、その響きを見つけましょう。</span>');
  text('.hero .intro', '色、感情、空気感から形づくる、舞台のための歌とサウンドスケープ。');
  html('.hero .text-link', '作品を見る <span aria-hidden="true">↓</span>');
  html('.hero-note', 'ジャンルを越えて<br>国境を越えて');

  text('.productions .section-heading .kicker', '主な作品');
  text('#productions-title', '作品');
  text('.productions .section-note', '作品、楽曲、関わった人々、音源を年代順にまとめていくアーカイブです。');

  text('.music .section-heading .kicker', '聴く');
  text('#music-title', '音楽');
  text('.music .section-note', '舞台と創作の過程から生まれた録音を集めています。キャストによる上演や公演の録音から、作曲者のデモ、制作中の作品まで。');
  text('#big-blue-bucket .kicker', 'オリジナル・キャストによるパフォーマンス · 2026');
  html('#big-blue-bucket .video-copy > p:not(.kicker):not(.video-note):not(.photo-credit)', 'Nagoya Players Junior Showcase 2026のファミリー・ミュージカル<a href="/?lang=ja#emma-amazing-bucket-fillers">『<em>Emma Amazing & The Bucket Fillers</em>』</a>より、オリジナル・キャストによるパフォーマンス。');
  html('#big-blue-bucket .song-credit', '作曲：Ben Dorman。<br>作詞：Ben Dorman、Kory Alexander Majansky。<br>コンセプト：Kory Alexander Majansky。');
  html('#big-blue-bucket .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#big-blue-bucket .photo-credit', '写真提供：Nagoya Players Junior。Nagoya Players Junior Showcase 2026『Emma Amazing & The Bucket Fillers』。脚本・演出：Kory Alexander Majansky。');
  text('#romeos-lament .kicker', '作曲者によるデモ · 2024');
  html('#romeos-lament .video-description', 'Nagoya Playersの<a href="/?lang=ja#romeo-and-juliet-2024">2024年公演『<em>Romeo and Juliet</em>』</a>のために書いたオリジナル曲。作曲者によるデモ音源です。');
  html('#romeos-lament .production-return', '<a href="/?lang=ja#romeo-and-juliet-2024">2024年の公演を見る</a>');
  html('#romeos-lament .song-credit', '作曲・オリジナル歌詞：Ben Dorman。<br>William Shakespeareの『<em>Romeo and Juliet</em>』の台詞を一部使用。<br>歌：Ben Dorman。');
  html('#romeos-lament .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#juliets-nightingale .kicker', '作曲者によるデモ · 2024');
  html('#juliets-nightingale .video-description', 'Nagoya Playersの<a href="/?lang=ja#romeo-and-juliet-2024">2024年公演『<em>Romeo and Juliet</em>』</a>のために書いたオリジナル曲。作曲者によるデモ音源です。');
  html('#juliets-nightingale .production-return', '<a href="/?lang=ja#romeo-and-juliet-2024">2024年の公演を見る</a>');
  html('#juliets-nightingale .song-credit', '作曲・オリジナル歌詞：Ben Dorman。<br>William Shakespeareの『<em>Romeo and Juliet</em>』の台詞を一部使用。<br>歌：Ben Dorman。');
  html('#juliets-nightingale .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#the-first-magic .kicker', '作曲者によるデモ · 2024');
  html('#the-first-magic .video-description', '<a href="/?lang=ja#cat-who-walked-2024">Nagoya Players Junior Showcase 2024の『<em>The Cat Who Walked by Herself</em>』</a>のために書いたオリジナル曲。作曲者によるデモ音源です。');
  html('#the-first-magic .production-return', '<a href="/?lang=ja#cat-who-walked-2024">2024年の公演を見る</a>');
  html('#the-first-magic .song-credit', '作曲・オリジナル歌詞：Ben Dorman。<br>Rudyard Kiplingの『<em>The Cat that Walked by Himself</em>』の原文を一部使用。<br>歌：Ben Dorman。');
  html('#the-first-magic .note-return', '<a href="/notes/where-does-magic-start/ja/">ノートを読む：魔法はどこから始まる？</a>');
  html('#the-first-magic .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#sassy-cat-and-friends .kicker', '作曲者によるデモ · 2024');
  html('#sassy-cat-and-friends .video-description', '<a href="/?lang=ja#cat-who-walked-2024">Nagoya Players Junior Showcase 2024の『<em>The Cat Who Walked by Herself</em>』</a>のために書いたオリジナル曲。作曲者によるデモ音源です。');
  html('#sassy-cat-and-friends .production-return', '<a href="/?lang=ja#cat-who-walked-2024">2024年の公演を見る</a>');
  html('#sassy-cat-and-friends .song-credit', '作曲：Ben Dorman。<br>作詞：Ben Dorman、Jeff Fritch。<br>歌：Ben Dorman。');
  html('#sassy-cat-and-friends .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#rainbow-connections .kicker', 'キャスト録音 · 2022');
  html('#rainbow-connections .video-description', '<a href="/?lang=ja#rainbow-connections-land-of-kindness">Nagoya Players Junior Showcase 2022の『<em>Rainbow Connections: The Land of Kindness</em>』</a>のために書いたオリジナル曲。キャスト録音です。');
  html('#rainbow-connections .production-return', '<a href="/?lang=ja#rainbow-connections-land-of-kindness">2022年の公演を見る</a>');
  html('#rainbow-connections .song-credit', '作曲：Ben Dorman。<br>作詞：Ben Dorman、Jeff Fritch。<br>プロデュース：Ben Dorman。<br>歌：Aya Kawakami。');
  html('#rainbow-connections .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#shiny-gold-button .kicker', '作曲者によるデモ · 2021');
  html('#shiny-gold-button .video-description', 'Nagoya Players Junior Showcase 2022の<a href="/?lang=ja#rainbow-connections-land-of-kindness">『<em>Rainbow Connections: The Land of Kindness</em>』</a>からの一曲。作曲者によるデモ音源です。');
  html('#shiny-gold-button .song-credit', '作曲：Ben Dorman。<br>作詞：Ben Dorman、Jeff Fritch。');
  html('#shiny-gold-button .production-return', '<a href="/?lang=ja#rainbow-connections-land-of-kindness">2022年の公演を見る</a>');
  html('#shiny-gold-button .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#forever-friends .kicker', 'キャスト録音 · 2022');
  html('#forever-friends .video-description', 'Nagoya Players Junior Showcase 2022の<a href="/?lang=ja#showcase-2022">『<em>A Day in the Life of Boogy</em>』</a>からの一曲です。');
  html('#forever-friends .song-credit', '作曲：Ben Dorman。<br>作詞：Ben Dorman、Jeff Fritch。<br>プロデュース：Ben Dorman。<br>歌：Aya Kawakami、Ben Dorman、Calum Vigrow、Kiko Sugii、Marii Takagi、Saki Kawashima、Twila Vigrow、Yurii Takagi。<br>2022年12月17日リリース · Ten Worlds Records。');
  html('#forever-friends .production-return', '<a href="/?lang=ja#showcase-2022">2022年の公演を見る</a>');
  html('#forever-friends .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#this-town .kicker', 'プロダクション録音 · 2010');
  html('#this-town .video-description', '衰退していく町を描いた、陰りのある一曲。Nagoya Playersの<a href="/?lang=ja#a-christmas-carol-with-heart-2010">2010年公演『<em>A Christmas Carol with Heart</em>』</a>のために書きました。John Lenihan演出によるこの作品は、ディケンズの物語をテキサスに舞台を移して描いたものです。');
  text('#this-town .song-credit', '作曲・作詞・歌：Ben Dorman。');
  html('#this-town .production-return', '<a href="/?lang=ja#a-christmas-carol-with-heart-2010">2010年の公演を見る</a>');
  html('#this-town .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#this-town .photo-credit', '写真：John Lenihan。本人の許可を得て使用しています。');
  text('#songs-title', 'ソングス');
  text('.songs-heading p', '舞台作品とは別に書いた歌。');
  text('#breathe .kicker', 'アコースティック');
  text('#breathe .video-description', 'ギターとボーカル・ハーモニーによる、穏やかなアコースティック・ソング。');
  html('#breathe .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  const groups = document.querySelectorAll('.music-label');
  html(groups[0].querySelector('h3'), 'オリジナル・キャスト録音');
  text(groups[0].querySelector('p'), '作品に命を吹き込んだ出演者たちによる録音。');
  html(groups[1].querySelector('h3'), '作曲者によるデモ');
  text(groups[1].querySelector('p'), '舞台作品の作曲中に録音したデモ。');
  html(groups[2].querySelector('h3'), 'Bandcampの外にある音楽');
  text(groups[2].querySelector('p'), '公開中のアルバムは、これまでの作品の一部です。');
  text('.embed-placeholder strong', 'Ben DormanのBandcamp');
  text('.embed-placeholder small', 'オリジナル・キャスト録音、作曲者によるデモ');
  html('.embed-placeholder > a', '音楽を聴く <span aria-hidden="true">↗</span>');

  ['romeos-lament', 'juliets-nightingale'].forEach(id => html(`#${id} .note-return`, '<a href="/notes/finding-a-home-for-home-sweet-home/ja/">ノートを読む：「Home Sweet Home」の居場所を見つける</a>'));
  html('#shiny-gold-button .note-return', '<a href="/notes/word-hit-me-again-word/ja/">ノートを読む：“Word! Hit me again! Word!”（「Word! もう一発！ Word!」）</a>');
  html('#this-town .note-return', '<a href="/notes/where-a-song-begins/ja/">ノートを読む：アーカイブを掘り返して：歌が生まれるところ</a>');

  text('#notes-title', 'ノート');
  text('.notes .section-note', '制作中の作品やリハーサル、創作のプロセスから生まれる、ときどきの記録。');

  text('.about .kicker', 'プロフィール');
  html('#about-title', 'ベンについて');
  const about = document.querySelectorAll('.about-copy > p:not(.kicker)');
  text(about[0], 'ベン・ドーマンは、日本を拠点に国内外で活動するオーストラリア出身の作曲家・作詞家です。舞台のための歌とサウンドスケープを制作しています。コラボレーターに色、感情、空気感を尋ねるところから始め、それらを捉える音楽の言葉を探します。');
  html(about[1], 'ミュージカルとの出会いは学生時代。<em>Guys and Dolls</em>、<em>Annie Get Your Gun</em>、そして歌と音楽を取り入れたオリジナル作品に出演しました。その経験が、演者を第一に考える、きわめて個人的な作曲姿勢の原点となっています。');
  document.querySelector('.portrait img').alt = '屋外で撮影したベン・ドーマンのポートレート';
  text('.philosophy p', '「私の作品が、若い演者たちをどこかへ運んでいってくれたら。そして、その姿を見る喜びを、ご家族の皆さんにも分かち合ってほしい。その経験が、舞台を離れたあともずっと心に残ることを願っています。」');

  text('footer > .kicker', 'お問い合わせ');
  text('footer > h2', '一緒にお仕事をしてみませんか？まずはご連絡ください。');
  html('footer > .contact-email', 'ベンに連絡する <span aria-hidden="true">→</span>');
  const footerParts = document.querySelectorAll('.footer-line > span');
  text(footerParts[0], 'ベン・ドーマン — ミュージカル音楽');
  text(footerParts[1], '日本を拠点に · 国内外で活動');

  window.PORTFOLIO = {
    ui: { artwork: 'アートワーク：', collaborators: '主なコラボレーター', bandcamp: 'Bandcampで聴く' },
    productions: [
      { year:'2027', id:'new-musicals-2027', eyebrow:'制作中', title:'2027年に向けた新作ミュージカル', works:['Mega Team Attack','Sweet Dreams, Eugene'], role:'作曲・共同作詞', status:'制作中', collaborators:[{name:'Jeff Fritch',role:'Mega Team Attack 脚本、共同作詞、ダンス指導・振付'},{name:'Kory Alexander Majansky',role:'Sweet Dreams, Eugene 脚本、共同作詞、演技指導'},{name:'Shawn Mahler',role:'プロデューサー'}], art:null, theme:'development' },
      { year:'2026', id:'showcase-2026', eyebrow:'Nagoya Players Junior Showcase', title:'歌と音で形づくられた、三つの世界', works:['Super Shells','The Jar of Truth',{title:'Emma Amazing & The Bucket Fillers',id:'emma-amazing-bucket-fillers',href:'/?lang=ja#big-blue-bucket'}], role:'作曲・共同作詞・音楽監督', status:'オリジナル・キャスト録音', collaborators:[{name:'Kory Alexander Majansky',role:'脚本、共同作詞、演出・振付'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/showcase-2026.jpg', theme:'blue' },
      { year:'2024', eyebrow:'Nagoya Players Junior Showcase', title:'The Cat Who Walked by Herself', id:'cat-who-walked-2024', recordings:[{href:'/?lang=ja#the-first-magic',label:'The First Magicを聴く · 作曲者によるデモ'},{href:'/?lang=ja#sassy-cat-and-friends',label:'Sassy Catを聴く · 作曲者によるデモ'}], works:['The First Magic — 作曲・オリジナル歌詞：Ben Dorman。Rudyard Kiplingの原文を一部使用','Sassy Cat — 作曲：Ben Dorman。作詞：Ben Dorman、Jeff Fritch'], role:'作曲・作詞', status:'作曲者によるデモ', collaborators:[{name:'Jeff Fritch',role:'脚本、演出・振付'},{name:'Ayako Hara',role:'ボーカルコーチ'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/showcase-2024.jpg', theme:'yellow' },
      { year:'2024', eyebrow:'Nagoya Players', title:'Romeo and Juliet', id:'romeo-and-juliet-2024', recordings:[{href:'/?lang=ja#juliets-nightingale',label:'Juliet’s Nightingale / Home Sweet Homeを聴く · 作曲者によるデモ'},{href:'/?lang=ja#romeos-lament',label:'Romeo’s Lamentを聴く · 作曲者によるデモ'}], works:['シェイクスピアの悲劇のためのオリジナル楽曲'], role:'作曲・作詞', status:'作曲者によるデモ', collaborators:[{name:'Ana Valdes Lim',role:'脚色執筆・演出'},{name:'Jeff Fritch',role:'振付'},{name:'Valeriya Takazato',role:'振付・演出助手'},{name:'Shawn Mahler',role:'サウンドデザイン、クリエイティブディレクション、プロデューサー'}], art:'assets/romeo-juliet.jpg', theme:'pale' },
      { year:'2023', eyebrow:'Nagoya Players Junior', title:'Penny’s World of Dreams', id:'pennys-world-of-dreams-2023', works:['子どものためのオリジナル・ミュージカル'], role:'作曲・共同作詞', status:'オリジナル・キャスト録音', collaborators:[{name:'Jeff Fritch',role:'脚本、共同作詞、演出・振付'},{name:'Ayako Hara',role:'ボーカルコーチ'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/pennys-world.jpg', theme:'purple' },
      { year:'2022', eyebrow:'Nagoya Players Junior Showcase', title:'2022年ショーケース', id:'showcase-2022', recordings:[{href:'/notes/word-hit-me-again-word/ja/',label:'Word! Hit me again! Word! — ノートを読む'}], works:[{title:'Rainbow Connections: The Land of Kindness',id:'rainbow-connections-land-of-kindness',href:'/?lang=ja#rainbow-connections'},{title:'Shiny Gold Button',href:'/?lang=ja#shiny-gold-button',note:'2021年 作曲者によるデモ'},{title:'A Day in the Life of Boogy',href:'/?lang=ja#forever-friends'}], role:'作曲・共同作詞', status:'オリジナル・キャスト録音', collaborators:[{name:'Jeff Fritch',role:'脚本、共同作詞、演出・振付'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/showcase-2022.jpg', theme:'cyan' },
      { year:'2010', eyebrow:'Nagoya Players', title:'A Christmas Carol with Heart', id:'a-christmas-carol-with-heart-2010', recordings:[{href:'/?lang=ja#this-town',label:'This Townを聴く · プロダクション録音'},{href:'/notes/where-a-song-begins/ja/',label:'曲の始まりについてのノートを読む'}], works:['初期の舞台作品 — アーカイブ整理中'], role:'音楽', status:'プロダクション録音', art:null, theme:'archive' }
    ],
    music: {
      cast:[
        {year:'2026',title:'NPJ Showcase 2026',detail:'Emma Amazing & The Bucket Fillers と The Jar of Truth から選曲',art:'assets/showcase-2026.jpg'},
        {year:'2023',title:'Penny’s World of Dreams',detail:'オリジナル子どもミュージカルから9曲',art:'assets/pennys-world.jpg'},
        {year:'2022',title:'NPJ Showcase 2022',detail:'Rainbow Connections と A Day in the Life of Boogy からの楽曲',art:'assets/showcase-2022.jpg'}
      ],
      demos:[
        {year:'2024',title:'Romeo and Juliet', id:'romeo-and-juliet-2024', recordings:[{href:'/?lang=ja#juliets-nightingale',label:'Juliet’s Nightingale / Home Sweet Homeを聴く · 作曲者によるデモ'},{href:'/?lang=ja#romeos-lament',label:'Romeo’s Lamentを聴く · 作曲者によるデモ'}],detail:'上演のために書かれた2曲の制作音源',art:'assets/romeo-juliet.jpg'},
        {year:'2024',title:'The Cat Who Walked by Herself', id:'cat-who-walked-2024', recordings:[{href:'/?lang=ja#the-first-magic',label:'The First Magicを聴く · 作曲者によるデモ'},{href:'/?lang=ja#sassy-cat-and-friends',label:'Sassy Catを聴く · 作曲者によるデモ'}],detail:'NPJ Showcase 2024 · The First MagicとSassy Catの作曲者によるデモ',art:'assets/showcase-2024.jpg'}
      ],
      beyond:[
        {title:'未発表曲',detail:'まだ一般公開していない楽曲やデモ'},
        {title:'その他のプロジェクト',detail:'現在紹介している舞台作品以外の作曲活動'},
        {title:'プライベート・アーカイブ',detail:'限定公開の音源や、現在整理中の資料'}
      ]
    }
  };
})();
