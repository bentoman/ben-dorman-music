window.PORTFOLIO = {
  productions: [
    {
      year: "2027", id: "new-musicals-2027",
      eyebrow: "Works in development",
      title: "New musicals for 2027",
      works: ["Mega Team Attack", "Sweet Dreams, Eugene"],
      role: "Composer & co-lyricist",
      status: "In development",
      collaborators: [
        { name: "Jeff Fritch", role: "writer, Mega Team Attack; co-lyricist; dance instructor & choreographer" },
        { name: "Kory Alexander Majansky", role: "writer, Sweet Dreams, Eugene; co-lyricist; acting instructor" },
        { name: "Shawn Mahler", role: "producer" }
      ],
      art: null,
      theme: "development"
    },
    {
      year: "2026", id: "showcase-2026",
      eyebrow: "Nagoya Players Junior Showcase",
      title: "Three worlds, shaped through song and sound",
      works: ["Super Shells", "The Jar of Truth", { title: "Emma Amazing & the Bucket Fillers", id: "emma-amazing-bucket-fillers", href: "#big-blue-bucket" }],
      role: "Composer, co-lyricist & music director",
      status: "Original cast recording",
      collaborators: [
        { name: "Kory Alexander Majansky", role: "writer, co-lyricist, director & choreographer" },
        { name: "Shawn Mahler", role: "producer" }
      ],
      art: "assets/showcase-2026.jpg",
      theme: "blue"
    },
    {
      year: "2024",
      eyebrow: "Nagoya Players Junior Showcase",
      title: "The Cat Who Walked by Herself", id: "cat-who-walked-2024", recordings: [{ href: "#the-first-magic", label: "Watch The First Magic · Composer demo" }, { href: "#sassy-cat-and-friends", label: "Watch Sassy Cat and Friends · Composer demo" }],
      works: ["The First Magic — music and original lyrics by Ben Dorman, incorporating text by Rudyard Kipling", "Sassy Cat — music and lyrics by Ben Dorman"],
      role: "Composer & lyricist",
      status: "Composer demos / archive",
      collaborators: [
        { name: "Jeff Fritch", role: "writer, director & choreographer" },
        { name: "Ayako Hara", role: "vocal coach" },
        { name: "Shawn Mahler", role: "producer" }
      ],
      art: "assets/showcase-2024.jpg",
      theme: "yellow"
    },
    {
      year: "2024",
      eyebrow: "Nagoya Players",
      title: "Romeo and Juliet", id: "romeo-and-juliet-2024", recordings: [{ href: "#juliets-nightingale", label: "Watch Juliet’s Nightingale / Home Sweet Home · Composer demo" }, { href: "#romeos-lament", label: "Watch Romeo’s Lament · Composer demo" }],
      works: ["Original songs for Shakespeare’s tragedy"],
      role: "Composer & lyricist",
      status: "Composer demos / archive",
      collaborators: [
        { name: "Ana Valdes Lim", role: "adaptation writer & director" },
        { name: "Jeff Fritch", role: "choreographer" },
        { name: "Valeriya Takazato", role: "choreographer & assistant director" },
        { name: "Shawn Mahler", role: "sound designer, creative director & producer" }
      ],
      art: "assets/romeo-juliet.jpg",
      theme: "pale"
    },
    {
      year: "2023",
      eyebrow: "Nagoya Players Junior",
      title: "Penny’s World of Dreams", id: "pennys-world-of-dreams-2023",
      works: ["An original children’s musical"],
      role: "Composer & co-lyricist",
      status: "Original cast recording",
      collaborators: [
        { name: "Jeff Fritch", role: "writer, co-lyricist, director & choreographer" },
        { name: "Ayako Hara", role: "vocal coach" },
        { name: "Shawn Mahler", role: "producer" }
      ],
      art: "assets/pennys-world.jpg",
      theme: "purple"
    },
    {
      year: "2022",
      eyebrow: "Nagoya Players Junior Showcase",
      title: "Showcase 2022", id: "showcase-2022", recordings: [{ href: "/notes/word-hit-me-again-word/", label: "Read the Note: Word! Hit me again! Word!" }],
      works: [{ title: "Rainbow Connections: The Land of Kindness", id: "rainbow-connections-land-of-kindness", href: "#rainbow-connections" }, { title: "Shiny Gold Button", href: "#shiny-gold-button" }, { title: "A Day in the Life of Boogy", href: "#forever-friends" }],
      role: "Composer & co-lyricist",
      status: "Original cast recording",
      collaborators: [
        { name: "Jeff Fritch", role: "writer, co-lyricist, director & choreographer" },
        { name: "Shawn Mahler", role: "producer" }
      ],
      art: "assets/showcase-2022.jpg",
      theme: "cyan"
    },
    {
      year: "2010",
      eyebrow: "Nagoya Players",
      title: "A Christmas Carol with Heart", id: "a-christmas-carol-with-heart-2010", recordings: [{ href: "#this-town", label: "Watch This Town · Production recording" }, { href: "/notes/where-a-song-begins/", label: "Read the Note: where a song begins" }],
      works: ["Earlier theatre work — archive in progress"],
      role: "Music",
      status: "Production archive",
      art: null,
      theme: "archive"
    }
  ],
  music: {
    cast: [
      { year: "2026", title: "NPJ Showcase 2026", detail: "Selected songs from Emma Amazing & The Bucket Fillers and The Jar of Truth", art: "assets/showcase-2026.jpg" },
      { year: "2023", title: "Penny’s World of Dreams", detail: "Nine songs from the original children’s musical", art: "assets/pennys-world.jpg" },
      { year: "2022", title: "NPJ Showcase 2022", detail: "Songs from Rainbow Connections and A Day in the Life of Boogy", art: "assets/showcase-2022.jpg" }
    ],
    demos: [
      { year: "2024", title: "Romeo and Juliet", id: "romeo-and-juliet-2024", recordings: [{ href: "#juliets-nightingale", label: "Watch Juliet’s Nightingale / Home Sweet Home · Composer demo" }, { href: "#romeos-lament", label: "Watch Romeo’s Lament · Composer demo" }], detail: "Three working recordings written for the production", art: "assets/romeo-juliet.jpg" },
      { year: "2024", title: "The Cat Who Walked by Herself", id: "cat-who-walked-2024", recordings: [{ href: "#the-first-magic", label: "Watch The First Magic · Composer demo" }, { href: "#sassy-cat-and-friends", label: "Watch Sassy Cat and Friends · Composer demo" }], detail: "NPJ Showcase 2024 · Composer demos: The First Magic and Sassy Cat and Friends", art: "assets/showcase-2024.jpg" }
    ],
    beyond: [
      { title: "Unpublished songs", detail: "Songs and demos that have not been released publicly" },
      { title: "Other projects", detail: "Composition beyond the productions currently shown here" },
      { title: "Private archive", detail: "Recordings and material available selectively or still being catalogued" }
    ]
  }
};
