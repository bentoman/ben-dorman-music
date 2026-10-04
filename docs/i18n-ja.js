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
    'sassy-cat-and-friends': 'Sassy Cat and Friends — 『The Cat Who Walked by Herself』Nagoya Players Junior（2024年 · 作曲者によるデモ）',
    'juliets-nightingale': 'Juliet’s Nightingale / Home Sweet Home — 『Romeo and Juliet』Nagoya Players（2024年 · 作曲者によるデモ）',
    'romeos-lament': 'Romeo’s Lament — 『Romeo and Juliet』Nagoya Players（2024年 · 作曲者によるデモ）',
    'rainbow-connections': 'Rainbow Connections — 『Rainbow Connections: The Land of Kindness』Nagoya Players Junior（2022年 · 作曲者によるデモ）',
    'shiny-gold-button': 'Shiny Gold Button — 『Rainbow Connections: The Land of Kindness』Nagoya Players Junior（2021年 · 作曲者によるデモ）',
    'forever-friends': 'Forever Friends — 『A Day in the Life of Boogy』Nagoya Players Junior（2022年 · プロダクション録音）',
    'this-town': 'This Town — 『A Christmas Carol with Heart』Nagoya Players（2010年）',
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
  html('#big-blue-bucket .video-copy > p:not(.kicker):not(.video-note):not(.photo-credit)', 'Nagoya Players Junior Showcase 2026のファミリー・ミュージカル<a href="/?lang=ja#emma-amazing-bucket-fillers">『<em>Emma Amazing & the Bucket Fillers</em>』</a>より、オリジナル・キャストによるパフォーマンス。');
  html('#big-blue-bucket .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#big-blue-bucket .photo-credit', '写真提供：Nagoya Players Junior。Nagoya Players Junior Showcase 2026『Emma Amazing & the Bucket Fillers』。脚本・演出：Kory Alexander Majansky。');
  document.querySelector('#romeos-lament .production-feedback').setAttribute('aria-label', '公演からの声');
  text('#romeos-lament .feedback-label', '公演からの声');
  text('#romeos-lament .production-feedback footer', 'Richard Harris（出演者）');
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
  html('#the-first-magic .song-credit', '作曲・オリジナル歌詞：Ben Dorman。<br>Rudyard Kiplingの『<em>The Cat Who Walked by Herself</em>』の原文を一部使用。<br>歌：Ben Dorman。');
  html('#the-first-magic .note-return', '<a href="#where-does-magic-start">ノートを読む：魔法はどこから始まる？</a>');
  html('#the-first-magic .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#sassy-cat-and-friends .kicker', '作曲者によるデモ · 2024');
  html('#sassy-cat-and-friends .video-description', '<a href="/?lang=ja#cat-who-walked-2024">Nagoya Players Junior Showcase 2024の『<em>The Cat Who Walked by Herself</em>』</a>のために書いたオリジナル曲。作曲者によるデモ音源です。');
  html('#sassy-cat-and-friends .production-return', '<a href="/?lang=ja#cat-who-walked-2024">2024年の公演を見る</a>');
  html('#sassy-cat-and-friends .song-credit', '作曲：Ben Dorman。<br>作詞：Ben Dorman、Jeff Fritch。<br>歌：Ben Dorman。');
  html('#sassy-cat-and-friends .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#rainbow-connections .kicker', '作曲者によるデモ · 2022');
  html('#rainbow-connections .video-description', '<a href="/?lang=ja#rainbow-connections-land-of-kindness">Nagoya Players Junior Showcase 2022の『<em>Rainbow Connections: The Land of Kindness</em>』</a>のために書いたオリジナル曲。作曲者によるデモ音源です。');
  html('#rainbow-connections .production-return', '<a href="/?lang=ja#rainbow-connections-land-of-kindness">2022年の公演を見る</a>');
  html('#rainbow-connections .song-credit', '作曲：Ben Dorman。<br>作詞：Ben Dorman、Jeff Fritch。<br>プロデュース：Ben Dorman。<br>演奏：Aya Kawakami。');
  html('#rainbow-connections .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#shiny-gold-button .kicker', '作曲者によるデモ · 2021');
  html('#shiny-gold-button .video-description', 'Nagoya Players Junior Showcase 2022の<a href="/?lang=ja#rainbow-connections-land-of-kindness">『<em>Rainbow Connections: The Land of Kindness</em>』</a>からの一曲です。');
  html('#shiny-gold-button .production-return', '<a href="/?lang=ja#rainbow-connections-land-of-kindness">2022年の公演を見る</a>');
  html('#shiny-gold-button .video-note a', 'YouTubeで見る <span aria-hidden="true">↗</span>');
  text('#forever-friends .kicker', 'プロダクション録音 · 2022');
  html('#forever-friends .video-description', 'Nagoya Players Junior Showcase 2022の<a href="/?lang=ja#showcase-2022">『<em>A Day in the Life of Boogy</em>』</a>からの一曲です。');
  html('#forever-friends .song-credit', '作曲：Ben Dorman。<br>作詞：Ben Dorman、Jeff Fritch。<br>プロデュース：Ben Dorman。<br>ボーカル：Aya Kawakami、Ben Dorman、Calum Vigrow、Kiko Sugii、Marii Takagi、Saki Kawashima、Twila Vigrow、Yurii Takagi。<br>2022年12月17日リリース · Ten Worlds Records。');
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
  html(groups[1].querySelector('h3'), '作曲デモ／<br>プロダクション・アーカイブ');
  text(groups[1].querySelector('p'), '制作中の音源と、舞台作品から残された音楽。');
  html(groups[2].querySelector('h3'), 'Bandcampの外にある音楽');
  text(groups[2].querySelector('p'), '公開中のアルバムは、これまでの作品の一部です。');
  text('.embed-placeholder strong', 'Ben DormanのBandcamp');
  text('.embed-placeholder small', 'キャスト録音、作曲デモ、プロダクション・アーカイブ');
  html('.embed-placeholder > a', '音楽を聴く <span aria-hidden="true">↗</span>');

  ['romeos-lament', 'juliets-nightingale'].forEach(id => html(`#${id} .note-return`, '<a href="#finding-a-home-for-home-sweet-home">ノートを読む：「Home Sweet Home」の居場所を見つける</a>'));
  html('#shiny-gold-button .note-return', '<a href="#word-hit-me-again-word">ノートを読む：“Word! Hit me again! Word!”（「Word! もう一発！ Word!」）</a>');
  html('#this-town .note-return', '<a href="#where-a-song-begins">ノートを読む：アーカイブを掘り返して：歌が生まれるところ</a>');

  text('#notes-title', 'ノート');
  text('.notes .section-note', '制作中の作品やリハーサル、創作のプロセスから生まれる、ときどきの記録。');

  text('.about .kicker', '05 · プロフィール');
  html('#about-title', 'ベンについて');
  const about = document.querySelectorAll('.about-copy > p:not(.kicker)');
  text(about[0], 'ベン・ドーマンは、日本を拠点に国内外で活動するオーストラリア出身の作曲家・作詞家です。舞台のための歌とサウンドスケープを制作しています。コラボレーターに色、感情、空気感を尋ねるところから始め、それらを捉える音楽の言葉を探します。');
  html(about[1], 'ミュージカルとの出会いは学生時代。<em>Guys and Dolls</em>、<em>Annie Get Your Gun</em>、そして歌と音楽を取り入れたオリジナル作品に出演しました。その経験が、演者を第一に考える、きわめて個人的な作曲姿勢の原点となっています。');
  document.querySelector('.portrait img').alt = '屋外で撮影したベン・ドーマンのポートレート';
  text('.philosophy p', '「私の作品が、若い演者たちをどこかへ運んでいってくれたら。そして、その姿を見る喜びを、ご家族の皆さんにも分かち合ってほしい。その経験が、舞台を離れたあともずっと心に残ることを願っています。」');

  text('footer > .kicker', '06 · お問い合わせ');
  text('footer > h2', '一緒にお仕事をしてみませんか？まずはご連絡ください。');
  const footerParts = document.querySelectorAll('.footer-line > span');
  text(footerParts[0], 'ベン・ドーマン — ミュージカル音楽');
  text(footerParts[1], '日本を拠点に · 国内外で活動');

  const noteTranslations = {
  "where-does-magic-start": {"title": "魔法はどこから始まる？", "body": "僕にとっての始まりは、生まれ故郷のパプアニューギニア、ポートモレスビーだった。<br><br>僕は、殺されるネズミだった。<br><br>地元で上演された、定番のパントマイム劇『<em>Dick Whittington</em>』。父はアマチュアの役者で、僕も参加できる年齢になると、仲間に入った。<br><br>死んだら、容赦なく舞台から引きずり出された。<br><br>でも、照明、メイク、歌……。<br><br>大好きだった。<br><br>僕にとっての「The First Magic［最初の魔法］」は、そこから始まった。<br><br>その10年後、僕はメルボルンの学校の舞台に立っていた。音楽の先生と数学の先生が書いた、オリジナルの作品だった。<br><br>あの歌を先生たちが書いたなんて、信じられなかった。少なくとも僕には、すごくいい歌だった。そして僕は舞台の上で、コーラスの一員としてそれを歌っていた。<br><br>自分でも、こんなことができたらすごいだろうな、と思った。<br><br>そして、あっさり忘れた。本の世界に、ますます埋もれていった。<br><br>その後も学校のミュージカルにいくつか出たけれど、あのオリジナルの舞台は、ずっと心に残った。今でも歌える曲がある。<br><br>それから何年もたって、僕はNagoya Players Juniorの公演のプロデューサー、Shawn MahlerとZoomで話している。<br><br>彼が話しているのは、次の公演のこと。Rudyard Kiplingの『<em>Just So Stories</em>』に収められた一編、「<em>The Cat that Walked by Himself</em>」をもとにした作品だ。<br><br>欲しい曲の一つは、猫についての歌。<br><br>そりゃそうだ。<br><br>でも、もう一つは「The First Magic」についての歌だという。<br><br>え？<br><br>The First Magic？<br><br>変わってるな。<br><br>でも、ちょっといい。<br><br>僕にとって、The First Magicって何だろう？<br><br>見当もつかなかった。<br><br>でも、そのアイデアは気に入った。<br><br>そして気づくと、そもそもどうしてこういう舞台の音楽を書き始めたのか、そこに戻っていた。<br><br>子どもたちに、魔法を感じてほしかった。<br><br>僕が舞台で感じた、あの魔法。照明の下でときには苦戦して、きっかけを逃したり、何かを間違えたりする。それでも夢中になって、楽しくてたまらない。<br><br>そして公演が終わってからも、何時間も、何日も、何週間も、頭からどうしても離れないあの歌を、歩きながら口ずさんでいる。<br><br>すっかりはまっている。<br><br>もっとやりたくなる。<br><br>出演する子たちに、そう感じてほしかった。みんなに、あるいは、たった一人でもいい。前に味わったことがあったとしても、あのThe First Magicを感じてほしかった。<br><br>それで、それはどんな音になるんだろう、と考え始めた。<br><br>繊細で、軽やかに揺れる感じ。でも、ドラマもあって、最後には気持ちが上向くようなものにしたかった。小さく始まり、少しずつ広がって、演じる子たちがその先へ進んでいけるような曲。<br><br>じわじわと熱を帯びていくものにしたかった。心の奥で低く響いていて、やがて歌い手が思いきり羽ばたいてもいいんだと感じられるような。<br><br>あの曲には、自分の思いをたくさん込めた。<br><br>でも今、デモを聴き返すと、何かが足りない。<br><br>あの子たちだ。<br><br>キャスト録音を残しておけばよかった。<br><br>舞台で「The First Magic」が演じられ、出演者たちが自分たちの歌にしていくのを見た。それは、こういう舞台の音楽を書き始めたときに、僕がまさに望んでいたことだった。<br><br>照明、歌、逃してしまったきっかけ、わくわくする気持ち。そして終わったあとも、頭から離れないあの歌。<br><br>はまってしまう。<br><br>もっとやりたくなる。<br><br>それが、The First Magic。", "labels": ["The First Magicを聴く · 作曲者によるデモ", "The First MagicをYouTubeで見る", "The Cat Who Walked by Herself · 2024年の公演を見る"]},
  "where-a-song-begins": {
    "title": "アーカイブを掘り返して：歌が生まれるところ",
    "body": "最近、昔の音楽ファイルを掘り返している。舞台のために書いてきた音楽を、アーカイブとしてまとめようと思って。ここ数年手がけているファミリー・ミュージカルより、ずっと前のものもある。今のところ、見つかった最も古い音源は2010年のものだ。<br><br>聴き返していて改めて感じるのは、どれも本当に、いろんな人と一緒につくってきたということ。出来上がった曲には作曲者として僕の名前が載るかもしれない。でも、曲が実際に生まれる場所は、たいていそこじゃない。<br><br>2010年、Nagoya PlayersはJohn Lenihan演出で『<em>A Christmas Carol with Heart</em>』を上演した。Johnの家の居間に座って、ディケンズの物語をどう舞台にするつもりなのか、話を聞いていたのを覚えている。舞台はヴィクトリア朝のロンドンではない。テキサスにしたい、と彼は言った。<br><br>そのひと言で、僕の頭はさっそく別の場所へ飛んでいった。<br><br>まずはWim Wenders、Ry Cooder、そして『<em>Paris, Texas</em>』。あの並外れた、荒涼とした音の世界。それから、かなり唐突に、Woody Harrelsonと『<em>Natural Born Killers</em>』。たしかにずいぶん違う連想だけれど、なぜか全部、頭の中でごろごろ転がっていた。<br><br>どうしてそんなふうに考えが動くのか、いちいち立ち止まって分析はしない。僕が長年敬愛しているソングライターでありパフォーマーのTom Waitsは、曲を書くことをジャガイモ掘りにたとえたことがある。曲によっては「ジャガイモみたいに、そのまま地面から出てくる」のだそうだ。<br><br>そのイメージが好きだ。まさにそんな感じがすることがある。地面をがつがつ掘る。何か硬いものに当たるまで掘り続ける。形はいびつで、泥まみれかもしれない。でも、何かを見つけた。さて、これをどうするか。<br><br>一方で、曲が空から手の中に落ちてくるようなときもある。スーパーで買い物をしていると、がたがた鳴るベビーカーの中で泣き叫ぶ子どもが、突然、妙に大事に思えるリズムを繰り出す。そうなると、その場で携帯を引っぱり出して何かを歌い込まずにはいられない。アイデアを残すなら、<strong>今、この瞬間</strong>だ。<br><br>Johnの居間で、自分が何を掘り当てようとしていたのか、はっきり分かっていたとは思わない。でも、彼の話を聞くうちに、連想が次々と浮かんできた。<br><br>Johnは少し前にテキサスを訪れていて、旅先で撮った写真を取り出し始めた。その写真の一部は、後に僕が「This Town」のためにつくった映像にも入っている。<br><br>でも、いちばん鮮明に覚えているのは、彼が目にしたものについて話していたことだ。抗いようもなく衰えていく地方の風景。ゆっくりと生気を吸い取られてしまったような町。かつてそこに何かがあり、それが消えつつあることを感じさせる建物や通り。<br><br>その会話と写真が、僕に向かう先をくれた。<br><br>そこから生まれたのが「This Town」だった。<br><br>今、この録音を聴き返すと、2010年の自分の技術的な立ち位置も思い出す。コンピューターで曲を録音し始めたばかりで、まだ何をどうすればいいのか、よく分かっていなかった。でも、当時の自分がしっくりくる音にするために、ものすごく頑張ったことは覚えている。<br><br>こうして昔のファイルを聴き返すのが楽しいのは、それも理由のひとつかもしれない。今なら違う録り方をするだろう、と思う箇所はある。当然だ。16年も経っている。でも、当時どんな判断をしていたのかも聴こえてくる。そして何より、<strong>なぜ</strong>そうしたのかを思い出せる。<br><br>この音楽は、僕がひとりでコンピューターの前に座って、衰退する町の歌を書こうと決めたところから始まったわけではない。<br><br>始まりは、ある人の家の居間だった。演出家がディケンズとテキサスについて話している。目の前には写真が広がっている。ひとりのアイデアが、もうひとりの頭の中で、連想の連鎖を引き起こしていた。",
    "labels": [
      "This Townを聴く · 公演音源",
      "YouTubeでThis Townを聴く",
      "A Christmas Carol with Heart · 2010年公演を見る"
    ]
  },
  "word-hit-me-again-word": {
    "title": "“Word! Hit me again! Word!”（「Word! もう一発！ Word!」）",
    "body": "“Word! Hit me again! Word!”（「Word! もう一発！ Word!」）<br><br>この「Word!」は、僕にはまったく縁のない言葉と文化の領域に足を踏み入れた結果だった。野球帽をちょっと斜めにかぶって、だぼだぼの長いパンツと赤いTシャツを着て、それでちゃんと様になる。だいたい、あれと同じ部類だ。理屈では分かる。たぶん。でも、自分でやっていいものじゃない。<br><br>「Hit me again!」のほうは、また別の話だった。無理があるのは承知のうえで、今は亡き偉大な「ゴッドファーザー・オブ・ソウル」、James Brownの魂を呼び込もうとしていた。僕の音楽的ヒーローのひとりだ。Henry RollinsがJames BrownとIggy Popを、アメリカ音楽の両端を支える二つの「ブックエンド」と呼んでいたのを覚えている。だから、音楽の方角を見失っていたわけではない。不慣れなジャンルとリズムの中で手探りしている僕にとって、James Brownは、頼れる馴染みの音楽語彙だった。<br><br>とはいえ、録音の中でそれを口にしているのは、僕である。<br><br>その録音は「Shiny Gold Button」の最初のデモ。Jeff Fritchが書き、最終的に2022年にNagoya Players Juniorが上演したファミリー・ミュージカル『<em>The Land of Kindness</em>』の一曲だ。<br><br>なぜそこで僕が「Word!」と言うことになったのか。その話は、まだパンデミックの真っただ中だった2021年にさかのぼる。<br><br>Jeffとは長い付き合いだ。専門的な訓練を受けたダンサーで振付家でもあり、長年タップを教えてきた。創造力とエネルギーの塊のような人だ。2006年と2008年には、タップとギターで一緒にパフォーマンスをした。記憶が確かなら、彼が舞台で踊ったソロのダンスナンバーにも、一、二曲、音楽をつくったはずだ。<br><br>そして2021年、突然彼から連絡が来た。いま考えている子ども向けの舞台の音楽をつくってみないか、という話だった。<br><br>当時、僕はほとんど家にこもっていた。でもZoomはすっかり生活の一部になっていて、その時点でNagoya Playersのチームとのつながりは、実質的にJeffだけだった。そこでオンラインで会い、彼がつくり上げた世界、「Land of Kindness」の話を聞き始めた。<br><br>その世界のどこかに、ぴかぴかの金のボタンがあった。<br><br>Jeffはそのボタンの歌が欲しいと言った。歌詞の一部を渡してくれて、ヒップホップっぽい感じにしてほしい、と。<br><br>あまり心強い知らせではなかった。<br><br>当時の僕とヒップホップの関係は、たぶんショーペンハウアーとレイヴ・パーティーの関係に近い。別世界だ。<br><br>でも、やってみると言った。<br><br>持ち帰って曲をつくり、数日後、出来たものをMP3にしてJeffにメールした。<br><br>気に入った、でもこの舞台に合うかどうかは分からない、と返事が来た。<br><br>ありがとう。でも、今回は見送り。<br><br>話が面白くなったのは、次のZoomだった。<br><br>Jeffは、最初のデモがなぜうまくいかないのか、具体的な話にさっそく入った。そして困ったことに、彼の言うことは全部正しかった。<br><br>その最初のデモを公開するつもりはない。<br><br>うまくいっていなかった。<br><br>本当に、まったく。<br><br>問題は、Jeffの説明は理解できても、実際に何をしてほしいのかは、まだよく分からなかったことだ。彼の頭の中にあるリズムが、僕には聴こえなかった。<br><br>だから最後には、説明するのをやめてもらった。<br><br>「そのリズムを歌ってくれればいい。やってほしい通りに、そのまま。それだけでいい。録音するから」<br><br>そして録音した。<br><br>この「Shiny Gold Button」のデモで聴こえるリズムは、そのZoomでJeffが僕に歌ってくれたリズムを、そっくりそのまま再現したものだ。<br><br>それが手に入った途端、何かがかちっとはまった。<br><br><a href=\"#where-a-song-begins\">別のノート</a>で、作曲は、何か硬いものに当たるまで地面を掘り続けるように感じることがある、と書いた。一方で、何かが空から手の中に落ちてくるようなときもある。<br><br>今回は後者だった。<br><br>Jeffにリズムをもらうと、あとは驚くほどすんなり進んだ。ちょうど、ちょっと変わった音を出す、最新のすごそうなプラグインを買ったばかりだった。少なくとも僕には変わった音だった。それを土台のトラックに取り入れ始めた。<br><br>Jeffのリズムを正確に再現するために、かなり頑張った。そして難しいからこそ、ものすごく楽しかった。僕がずっと馴染んでいたのは、四つ打ちのストレートなロックだ。ここでは、ろくに話せない音楽の言葉で作業していた。<br><br>この録音で聴こえるのは、そういうものだ。<br><br>これは、後に子どもたちとスタジオで録音したバージョンではない。ある程度の年齢になったミュージシャンが、新しいリズムをつかもうと暗闇で手探りしている録音だ。自分には、ちょっとかっこよく聴こえた。でも同時に、まったく馴染みのないものでもあった。<br><br>それで、MP3をJeffにメールした。<br><br>返事はほとんどすぐに来た。<br><br><strong>「これはヒットだ！ ばっちりだよ！」</strong><br><br>その言葉を、ずっと覚えている。<br><br>自分は本当はここにいる資格がないんじゃないか。そんな気持ちは、きっと誰もが人生のどこかで経験する。僕にも、自分の居場所ではないと感じる音楽の領域が、ずっとあった。知っていることは知っている。弾けるものは分かっている。そして、ほかの誰かに任せたほうがよさそうなものも、だいたい分かっていた。<br><br>Jeffの反応は、その思い込みを疑ってもいいんだと思わせてくれた。<br><br>急に何でも書けると思った、という意味ではない。むしろ逆だ。この経験で、自分がどれほど<em>知らない</em>かが、はっきりしたばかりだった。でも、探ってみてもいい。分からないジャンルに足を踏み入れて、聴いて、間違えて、必要ならZoomで誰かにリズムを歌ってもらって、それから自分に何ができるか試してみてもいい。そう思えるようになった。<br><br>それが、「Shiny Gold Button」から持ち帰ったもののひとつだ。<br><br>この曲の中心にあるリズムは、僕がひとりでコンピューターの前に座って思いついたものではない。Jeffのリズムだ。パンデミックのさなか、彼がZoom越しに歌ってくれた。僕はそれを録音して、再現して、その周りに音楽を組み立てた。<br><br>ひとりが、こう言う。<br><br><strong>「いや、そうじゃなくて。こう」</strong><br><br>そして、もうひとりが耳を傾ける。",
    "labels": [
      "Shiny Gold Buttonを聴く",
      "YouTubeでShiny Gold Buttonを聴く",
      "The Land of Kindness · 2022年公演を見る"
    ]
  },
  "finding-a-home-for-home-sweet-home": {
    "title": "「Home Sweet Home」の居場所を見つける",
    "body": "「Juliet’s Nightingale」は、ジュリエットから始まったわけではない。シェイクスピアからでもない。そもそも『<em>Romeo and Juliet</em>』からですらなかった。<br><br>始まりはJeff Fritchと、別のファミリー向けの舞台だった。<br><br>Jeffのアイデアは、故郷を恋しく思う歌だった。「ある場所を思い浮かべて……愛しいわが家」。カントリー風で、ちょっとJohn Denverのような感じはどうか、と。そこは僕にも馴染みのある領域だったので、ギターを手に取って、あれこれ弾いてみた。<br><br>ところが、どういうわけか、こんなことを思った。これを徹底的に「脱デンバー」したらどうなるだろう？<br><br>ばらばらにして、破片がどこに落ちるか見てみる。<br><br>あの温かく、懐かしく、みんなで口ずさめる歌詞を使い、痛いくらいにテンポを落として、むき出しの暗いピアノと混ぜ合わせる。<br><br>いいじゃないか。<br><br>だから、やった。<br><br>マイクにぐっと近づいて歌った。転げ落ちる自分を救ってくれと、何かの霊にささやきかけるような感じで。Jeffに頼まれた歌とは、ずいぶん違うものになった。<br><br>こんなバージョンがファミリー向けの舞台で通るはずはない。それは重々分かっていた。<br><br>でも、やらずにはいられなかった。<br><br>それでもJeffに送って、こう言った。「これを聴いて、客席の大人たちに泣いてほしいんだ」<br><br>彼はとても気に入ってくれた。<br><br>そして、まったく予想どおりの判定が下った。<br><br>この舞台では、絶対に無理。<br><br>ごもっとも。では、デンバーに帰ろう。<br><br>でも、Jeffはもうひとつ、こうも言った。「これは、いつか絶対に使わないと」<br><br>たぶん一年ほど後、Nagoya Playersの『<em>Romeo and Juliet</em>』の演出家、Ana Valdes Limと、公演でどんな音楽を使いたいか話していた。ジュリエットの寝室の場面について話し始めたとき、Jeffの言葉を思い出した。<br><br>そして「Home Sweet Home」を思い出した。<br><br>それで、もう一度ばらばらにした。ジュリエットのために歌詞を書き直し、歪んだ、機械的な、ねじれた音をメロディーにねじ込みながら、音楽を出発点からさらに遠ざけていった。この頃には、John Denverをイメージした元のカントリーソングから、ずいぶん遠くまで来ていた。<br><br>それからAnaに聴いてもらった。今、このサイトにあるデモだ。<br><br>彼女は、それでいこうと言ってくれた。そのことには、今も感謝してもしきれない。<br><br>「Home Sweet Home」に、ようやく帰る家が見つかった。<br><br>でも、デモはまだ骨組みにすぎない。<br><br>実際に舞台で演奏されたバージョンは、僕にとって、息をのむほど美しかった。デモでひび割れている僕の声の代わりに、ジュリエットの見事な歌声があった。そして、作曲者の録音を劇場の一場面へと変えるための、あらゆる仕事があった。<br><br>舞台を観たあと、Jeffからメッセージが届いた。<br><br>「『Home Sweet Home』を聴いたよ。涙が出た」<br><br>それは、僕にとって、とても大きなことだった。<br><br>最初に彼に言ったのは、客席の大人の心を揺さぶる歌にしたい、ということだった。そこにたどり着くまでに、ボツになったアレンジ、別の舞台、別の演出家、書き直した歌詞、そしてまったく違う劇的状況が必要だった。<br><br>でも、どういうわけか、たどり着いた。<br><br><strong>そして、ロミオの話</strong><br><br>このサイトにある、同じ公演のもうひとつのデモ「Romeo’s Lament」にも、同じくらい奇妙な前史がある。<br><br>当時取り組んでいた「Genevieve」という別の歌から生まれたのだ。<br><br>その歌には “a partner, not a project”（「欲しいのはパートナー。手直しするための課題じゃない」）を求める登場人物がいて、彼女が “drove a nail through the heart of town”（「町の心臓に釘を打ち込んだ」）という一節もあった。<br><br>後者の一節が生き残った。<br><br>ロミオの歌に取りかかったとき、彼を取り巻くいくつもの声が欲しかった。彼をのみ込んでいく悲劇をこだまさせる、ギリシャ劇のコロスのようなもの。「Genevieve」の素材が、このまったく別の世界へ入り込み始めた。<br><br>ここでも、このサイトで聴けるのはデモだ。<br><br>舞台では、Koryとバックで歌う人たちが、その骨組みを受け取って、ずっと大きなものにしてくれた。声、演者、劇場を満たす音。そして、それを本当に舞台に載せるまでの、とてつもない仕事。そのすべてが、曲を変えてくれた。<br><br>こういうものを書く人間でいると、不思議に感じることがある。<br><br>家でマイクとコンピューターに向かい、曲がどんなふうになるかを示すものをつくる。それから、人に渡す。<br><br>すると、ほかの人たちが、それを別のものにしてくれる。<br><br>後悔がこれほど詰まった芝居で、僕の唯一の後悔は、キャスト録音をつくらなかったことだ。<br><br>つくっておけばよかった。<br><br>というのも、このサイトにある二つの録音は、本当の意味で完成した物語ではない。スケッチなのだ。演者、演出家、制作チームが、やがて五感を満たすごちそうへと変えてくれた、あの骨組み。<br><br>そして僕は、あれをもう一度聴けたらと、心から思っている。",
    "labels": [
      "Juliet’s Nightingale / Home Sweet Homeを聴く · 作曲者によるデモ",
      "YouTubeでJuliet’s Nightingale / Home Sweet Homeを聴く",
      "Romeo’s Lamentを聴く · 作曲者によるデモ",
      "YouTubeでRomeo’s Lamentを聴く",
      "Romeo and Julietの公演を見る"
    ]
  }
};

  window.PORTFOLIO = {
    ui: { artwork: 'アートワーク：', collaborators: '主なコラボレーター', bandcamp: 'Bandcampで聴く' },
    productions: [
      { year:'2027', id:'new-musicals-2027', eyebrow:'制作中', title:'2027年に向けた新作ミュージカル', works:['Mega Team Attack','Sweet Dreams, Eugene'], role:'作曲・共同作詞', status:'制作中', collaborators:[{name:'Jeff Fritch',role:'Mega Team Attack 脚本、共同作詞、ダンス指導・振付'},{name:'Kory Alexander Majansky',role:'Sweet Dreams, Eugene 脚本、共同作詞、演技指導'},{name:'Shawn Mahler',role:'プロデューサー'}], art:null, theme:'development' },
      { year:'2026', id:'showcase-2026', eyebrow:'Nagoya Players Junior Showcase', title:'歌と音で形づくられた、三つの世界', works:['Super Shells','The Jar of Truth',{title:'Emma Amazing & the Bucket Fillers',id:'emma-amazing-bucket-fillers',href:'/?lang=ja#big-blue-bucket'}], role:'作曲・共同作詞・音楽監督', status:'オリジナル・キャスト録音', collaborators:[{name:'Kory Alexander Majansky',role:'脚本、共同作詞、演出・振付'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/showcase-2026.jpg', theme:'blue' },
      { year:'2024', eyebrow:'Nagoya Players Junior Showcase', title:'The Cat Who Walked by Herself', id:'cat-who-walked-2024', recordings:[{href:'/?lang=ja#the-first-magic',label:'The First Magicを聴く · 作曲者によるデモ'},{href:'/?lang=ja#sassy-cat-and-friends',label:'Sassy Cat and Friendsを聴く · 作曲者によるデモ'}], works:['The First Magic — 作曲・オリジナル歌詞：Ben Dorman。Rudyard Kiplingの原文を一部使用','Sassy Cat — 作曲：Ben Dorman。作詞：Ben Dorman、Jeff Fritch'], role:'作曲・作詞', status:'作曲デモ／アーカイブ', collaborators:[{name:'Jeff Fritch',role:'脚本、演出・振付'},{name:'Ayako Hara',role:'ボーカルコーチ'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/showcase-2024.jpg', theme:'yellow' },
      { year:'2024', eyebrow:'Nagoya Players', title:'Romeo and Juliet', id:'romeo-and-juliet-2024', recordings:[{href:'/?lang=ja#juliets-nightingale',label:'Juliet’s Nightingale / Home Sweet Homeを聴く · 作曲者によるデモ'},{href:'/?lang=ja#romeos-lament',label:'Romeo’s Lamentを聴く · 作曲者によるデモ'}], works:['シェイクスピアの悲劇のためのオリジナル楽曲'], role:'作曲・作詞', status:'作曲デモ／アーカイブ', collaborators:[{name:'Ana Valdes Lim',role:'脚色執筆・演出'},{name:'Jeff Fritch',role:'振付'},{name:'Valeriya Takazato',role:'振付・演出助手'},{name:'Shawn Mahler',role:'サウンドデザイン、クリエイティブディレクション、プロデューサー'}], art:'assets/romeo-juliet.jpg', theme:'pale' },
      { year:'2023', eyebrow:'Nagoya Players Junior', title:'Penny’s World of Dreams', id:'pennys-world-of-dreams-2023', works:['子どものためのオリジナル・ミュージカル'], role:'作曲・共同作詞', status:'オリジナル・キャスト録音', collaborators:[{name:'Jeff Fritch',role:'脚本、共同作詞、演出・振付'},{name:'Ayako Hara',role:'ボーカルコーチ'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/pennys-world.jpg', theme:'purple' },
      { year:'2022', eyebrow:'Nagoya Players Junior Showcase', title:'2022年ショーケース', id:'showcase-2022', recordings:[{href:'#word-hit-me-again-word',label:'Word! Hit me again! Word! — ノートを読む'}], works:[{title:'Rainbow Connections: The Land of Kindness',id:'rainbow-connections-land-of-kindness',href:'/?lang=ja#rainbow-connections'},{title:'Shiny Gold Button',href:'/?lang=ja#shiny-gold-button'},{title:'A Day in the Life of Boogy',href:'/?lang=ja#forever-friends'}], role:'作曲・共同作詞', status:'オリジナル・キャスト録音', collaborators:[{name:'Jeff Fritch',role:'脚本、共同作詞、演出・振付'},{name:'Shawn Mahler',role:'プロデューサー'}], art:'assets/showcase-2022.jpg', theme:'cyan' },
      { year:'2010', eyebrow:'Nagoya Players', title:'A Christmas Carol with Heart', id:'a-christmas-carol-with-heart-2010', recordings:[{href:'/?lang=ja#this-town',label:'This Townを聴く · プロダクション録音'},{href:'#where-a-song-begins',label:'曲の始まりについてのノートを読む'}], works:['初期の舞台作品 — アーカイブ整理中'], role:'音楽', status:'プロダクション・アーカイブ', art:null, theme:'archive' }
    ],
    notes: [
      ...window.PORTFOLIO.notes.filter(note => noteTranslations[note.id]).map(note => {
        const translation = noteTranslations[note.id];
        return { ...note, lang: 'ja', date: '2026年10月', title: translation.title, body: translation.body,
          links: note.links.map((link, index) => ({ ...link, label: translation.labels[index] })) };
      }),
      { id:'two-new-shows-in-the-works', date:'2026年9月', title:'二つの新作が進行中です', body:'Nagoya Players Juniorの二つの新作が、いま動き始めています。エレメンタリー・トゥループのための<em>Mega Team Attack</em>は、ビデオゲームのようなエネルギーをもつ、にぎやかなファンタジーの世界。プレティーン・トゥループのための<em>Sweet Dreams, Eugene</em>は、想像力、創造性、そして力を合わせることを描くコメディ・アドベンチャーです。<br><br>音楽と歌詞については、エレメンタリーの作家Jeff Fritch、プレティーンの作家Kory Alexander Majansky、そしてプロデューサーのShawn Mahlerと話し合いを重ねています。<br><br>Jeffとは、20年以上にわたりパフォーマンスと音楽の仕事で協働してきました。直近の作品ではKoryと密に作業しましたが、それ以外のNPJ作品の多くにJeffも関わってきています。<br><br>新しい作品はいつも、私の音楽的なパレットを広げる機会になります。私はビデオゲームをしないので、<em>World of Warcraft</em>のようなゲームに使われる、豊かでドラマティックな音楽をそれまでじっくり聴いたことがありませんでした。<em>Mega Team Attack</em>の一曲を作るなかで聴いてみると、とても力強い体験で、多くのことを学びました。<br><br><em>Sweet Dreams, Eugene</em>のある曲では、「マルクス兄弟のような」コミカルなダンスが求められました。そこでチャールストン風の曲に挑戦しました。これもまた、これまで書いたことのない種類の音楽です。<br><br>仲間のコラボレーターたちと音楽を組み立てていく時間が、私は大好きです。彼らからのフィードバックや洞察が、出演者がきっと楽しんで演じられる作品へと私を導いてくれます。出演者が音楽や歌の思い出を持ち帰ってくれたなら、それ以上に望むことはありません。' }
    ],
    music: {
      cast:[
        {year:'2026',title:'NPJ Showcase 2026',detail:'Emma Amazing & The Bucket Fillers と The Jar of Truth から選曲',art:'assets/showcase-2026.jpg'},
        {year:'2023',title:'Penny’s World of Dreams',detail:'オリジナル子どもミュージカルから9曲',art:'assets/pennys-world.jpg'},
        {year:'2022',title:'NPJ Showcase 2022',detail:'Rainbow Connections と A Day in the Life of Boogy からの楽曲',art:'assets/showcase-2022.jpg'}
      ],
      demos:[
        {year:'2024',title:'Romeo and Juliet', id:'romeo-and-juliet-2024', recordings:[{href:'/?lang=ja#juliets-nightingale',label:'Juliet’s Nightingale / Home Sweet Homeを聴く · 作曲者によるデモ'},{href:'/?lang=ja#romeos-lament',label:'Romeo’s Lamentを聴く · 作曲者によるデモ'}],detail:'上演のために書かれた3曲の制作音源',art:'assets/romeo-juliet.jpg'},
        {year:'2024',title:'The Cat Who Walked by Herself', id:'cat-who-walked-2024', recordings:[{href:'/?lang=ja#the-first-magic',label:'The First Magicを聴く · 作曲者によるデモ'},{href:'/?lang=ja#sassy-cat-and-friends',label:'Sassy Cat and Friendsを聴く · 作曲者によるデモ'}],detail:'NPJ Showcase 2024 · The First MagicとSassy Cat and Friendsの作曲デモ',art:'assets/showcase-2024.jpg'}
      ],
      beyond:[
        {title:'未発表曲',detail:'まだ一般公開していない楽曲やデモ'},
        {title:'その他のプロジェクト',detail:'現在紹介している舞台作品以外の作曲活動'},
        {title:'プライベート・アーカイブ',detail:'限定公開の音源や、現在整理中の資料'}
      ]
    }
  };
})();
