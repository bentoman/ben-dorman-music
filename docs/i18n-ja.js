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
  ['ホーム', '作品', '音楽', 'プロフィール', 'お問い合わせ'].forEach((label, index) => { nav[index].textContent = label; });
  nav[5].textContent = 'English';
  nav[5].href = window.location.pathname;
  nav[5].lang = 'en';
  nav[5].hreflang = 'en';

  text('.hero .kicker', '作曲 · 作詞 · 音楽監督');
  html('#hero-title', '物語がどう<em>感じられるか</em>、<br><span>聞かせてください。<br>一緒に、その響きを見つけましょう。</span>');
  text('.hero .intro', '色、感情、空気感から形づくる、舞台のための歌とサウンドスケープ。物語が求めるなら、ジャンルの枠を越えて。');
  html('.hero .text-link', '作品を見る <span aria-hidden="true">↓</span>');
  html('.hero-note', 'ジャンルを越えて<br>国境を越えて<br><span>いつも、物語のために</span>');

  text('.productions .section-heading .kicker', '主な作品');
  text('#productions-title', '作品');
  text('.productions .section-note', '作品、楽曲、関わった人々、音源を年代順にまとめていくアーカイブです。');

  text('.music .section-heading .kicker', '聴く');
  text('#music-title', '音楽');
  text('.music .section-note', '完成したキャスト録音と、創作過程を伝えるデモや資料に分けて紹介しています。');
  text('.featured-video .video-status', 'アニメーション制作中');
  text('.featured-video .kicker', '注目の一曲 · 2026');
  text('.featured-video .video-copy > p:not(.kicker):not(.video-note):not(.photo-credit)', '『Emma Amazing & the Bucket Fillers』オリジナル・キャスト録音のための、写真を用いた映像を制作中です。');
  text('.featured-video .video-note', '完成後、再生コントロールと字幕付きの映像をこちらに掲載します。');
  text('.photo-credit', '写真提供：Nagoya Players Junior。Nagoya Players Junior Showcase 2026『Emma Amazing & the Bucket Fillers』。脚本・演出：Kory Alexander Majansky。');
  const groups = document.querySelectorAll('.music-label');
  html(groups[0].querySelector('h3'), 'オリジナル・キャスト録音');
  text(groups[0].querySelector('p'), '作品に命を吹き込んだ出演者たちによる録音。');
  html(groups[1].querySelector('h3'), '作曲デモ／<br>プロダクション・アーカイブ');
  text(groups[1].querySelector('p'), '制作中の音源と、舞台作品から残された音楽。');
  html(groups[2].querySelector('h3'), 'Bandcampの外にある音楽');
  text(groups[2].querySelector('p'), '公開中のアルバムは、これまでの作品の一部です。');
  text('.embed-placeholder strong', 'Ben DormanのBandcamp');
  text('.embed-placeholder small', 'キャスト録音、作曲デモ、プロダクション・アーカイブ');
  html('.embed-placeholder > a', '音楽を聴く <span aria-hidden="true">↗</span>');

  text('.about .kicker', '03 · プロフィール');
  html('#about-title', '物語に寄り添う<br>音楽。');
  const about = document.querySelectorAll('.about-copy > p:not(.kicker)');
  text(about[0], 'ベン・ドーマンは、日本を拠点に国内外で活動するオーストラリア出身の作曲家・作詞家です。舞台のための歌とサウンドスケープを制作しています。コラボレーターに色、感情、空気感を尋ねるところから始め、その物語に必要な音楽の言葉を探します。どの作品にも同じ音を当てはめるのではなく、ジャンルを自由に行き来します。');
  html(about[1], 'ミュージカルとの出会いは学生時代。<em>Guys and Dolls</em>、<em>Annie Get Your Gun</em>、そして歌と音楽を取り入れたオリジナル作品に出演しました。その経験が、演者を第一に考える、きわめて個人的な作曲姿勢の原点となっています。');
  document.querySelector('.portrait img').alt = '屋外で撮影したベン・ドーマンのポートレート';
  text('.philosophy p', '「まず、たった一人の演者の心に届くことを目指しています。音楽と歌によって、若い演者たちが魔法の世界へと運ばれていく。そして、その姿を見る喜びを家族の皆さんにも分かち合ってほしい。その経験が、舞台を離れたあともずっと心に残ることを願っています。」');

  text('footer > .kicker', '04 · お問い合わせ');
  html('footer > h2', '一緒に、心に響くものを<br>つくりましょう。');
  html('.contact-link', 'Bandcampからベンに連絡する <span aria-hidden="true">↗</span>');
  const footerParts = document.querySelectorAll('.footer-line > span');
  text(footerParts[0], 'ベン・ドーマン — ミュージカル音楽');
  text(footerParts[1], '日本を拠点に · 国内外で活動');

  window.PORTFOLIO = {
    ui: { artwork: 'アートワーク：', collaborators: '主なコラボレーター', bandcamp: 'Bandcampで聴く' },
    productions: [
      { year:'2027', eyebrow:'制作中', title:'2027年に向けた新作ミュージカル', works:['Mega Team Attack','Sweet Dreams, Eugene'], role:'作曲・共同作詞', status:'制作中', collaborators:[{name:'Jeff Fritch',role:'Mega Team Attack 脚本、共同作詞、ダンス指導・振付'},{name:'Kory Alexander Majansky',role:'Sweet Dreams, Eugene 脚本、共同作詞、演技指導'},{name:'Shawn Mahler',role:'プロデューサー'}], art:null, theme:'development' },
      { year:'2026', eyebrow:'Nagoya Players Junior Showcase', title:'歌と音で形づくられた、三つの世界', works:['Super Shells','The Jar of Truth','Emma Amazing & the Bucket Fillers'], role:'作曲・共同作詞・音楽監督', status:'オリジナル・キャスト録音', collaborators:[{name:'Kory Alexander Majansky',role:'脚本、共同作詞、演出・振付'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/showcase-2026.jpg', theme:'blue' },
      { year:'2024', eyebrow:'Nagoya Players Junior Showcase', title:'冒険と魔法、そしてとても自立した猫', works:['The Jollyville Treasure','The Cat Who Walked by Herself'], role:'作曲・共同作詞', status:'作曲デモ／アーカイブ', collaborators:[{name:'Jeff Fritch',role:'脚本、共同作詞、演出・振付'},{name:'Ayako Hara',role:'ボーカルコーチ'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/showcase-2024.jpg', theme:'yellow' },
      { year:'2024', eyebrow:'Nagoya Players', title:'Romeo and Juliet', works:['シェイクスピアの悲劇のためのオリジナル楽曲'], role:'作曲・作詞', status:'作曲デモ／アーカイブ', collaborators:[{name:'Ana Valdes Lim',role:'脚色・演出'},{name:'Jeff Fritch',role:'振付'},{name:'Valeriya Takazato',role:'振付・演出助手'},{name:'Shawn Mahler',role:'サウンドデザイン・クリエイティブディレクション'}], art:'assets/romeo-juliet.jpg', theme:'pale' },
      { year:'2023', eyebrow:'Nagoya Players Junior', title:'Penny’s World of Dreams', works:['子どものためのオリジナル・ミュージカル'], role:'作曲・共同作詞', status:'オリジナル・キャスト録音', collaborators:[{name:'Jeff Fritch',role:'脚本、共同作詞、演出・振付'},{name:'Ayako Hara',role:'ボーカルコーチ'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/pennys-world.jpg', theme:'purple' },
      { year:'2022', eyebrow:'Nagoya Players Junior Showcase', title:'音源アーカイブの始まり', works:['Rainbow Connections: The Land of Kindness','A Day in the Life of Boogy'], role:'作曲・共同作詞', status:'オリジナル・キャスト録音', collaborators:[{name:'Jeff Fritch',role:'脚本、共同作詞、演出・振付'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/showcase-2022.jpg', theme:'cyan' },
      { year:'2010', eyebrow:'Nagoya Players', title:'A Christmas Carol', works:['初期の舞台作品 — アーカイブ整理中'], role:'音楽', status:'プロダクション・アーカイブ', art:null, theme:'archive' }
    ],
    music: {
      cast:[
        {year:'2026',title:'NPJ Showcase 2026',detail:'Emma Amazing & The Bucket Fillers と The Jar of Truth から選曲',art:'assets/showcase-2026.jpg'},
        {year:'2023',title:'Penny’s World of Dreams',detail:'オリジナル子どもミュージカルから9曲',art:'assets/pennys-world.jpg'},
        {year:'2022',title:'NPJ Showcase 2022',detail:'Rainbow Connections と A Day in the Life of Boogy からの楽曲',art:'assets/showcase-2022.jpg'}
      ],
      demos:[
        {year:'2024',title:'Romeo and Juliet',detail:'上演のために書かれた3曲の制作音源',art:'assets/romeo-juliet.jpg'},
        {year:'2024',title:'NPJ Showcase 2024',detail:'Sassy Cat、The First Magic などの作曲デモ',art:'assets/showcase-2024.jpg'}
      ],
      beyond:[
        {title:'未発表曲',detail:'まだ一般公開していない楽曲やデモ'},
        {title:'その他のプロジェクト',detail:'現在紹介している舞台作品以外の作曲活動'},
        {title:'プライベート・アーカイブ',detail:'限定公開の音源や、現在整理中の資料'}
      ]
    }
  };
})();
