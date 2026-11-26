/* ==========================================================================
   DATA PORTFOLIO — edit file ini untuk mengubah isi website.
   Teks dua bahasa ditulis sebagai { id: "...", en: "..." }.
   Kolom yang dikosongkan ("") otomatis disembunyikan dari halaman.

   PERHATIAN: file ini ikut ter-publish dan bisa dibaca siapa pun, termasuk
   komentarnya. Jangan menulis proyek atau data yang bersifat privat di sini.
   ========================================================================== */

window.PORTFOLIO = {
  // --- Identitas -----------------------------------------------------------
  name: "M. Nur Ramadhan",
  nickname: "Rama",
  role: { id: "Web Developer", en: "Web Developer" },
  location: { id: "Indonesia", en: "Indonesia" }, // contoh: "Makassar, Indonesia"
  company: "Dominatus", // tempat kerja saat ini — tampil sebagai "Saat ini bekerja di ..."
  available: false, // true = tampilkan "Terbuka untuk peluang kerja" (menggantikan label tempat kerja)

  // --- GitHub (dipakai untuk bagian "Terbaru di GitHub") ------------------
  githubUsername: "ramadhan42",

  // --- Hero ----------------------------------------------------------------
  tagline: {
    id: "Saya membangun website yang cepat, rapi, dan nyaman dipakai di layar apa pun — dari ide sampai online.",
    en: "I build websites that are fast, clean, and comfortable to use on any screen — from idea to live.",
  },

  // --- Tentang (tiap item = satu paragraf) ----------------------------------
  about: [
    {
      id: "Halo, saya Rama — web developer di Dominatus yang senang mengubah ide menjadi website yang benar-benar dipakai orang.",
      en: "Hi, I'm Rama — a web developer at Dominatus who enjoys turning ideas into websites people actually use.",
    },
    {
      id: "Bagi saya website yang baik itu sederhana: mudah dipahami pengunjung, ringan dibuka, dan mudah dirawat. Saya terus mengasah kemampuan lewat proyek nyata, dan selalu senang berdiskusi maupun berkolaborasi.",
      en: "To me a good website is simple: easy to understand, light to load, and easy to maintain. I keep sharpening my skills through real projects, and I'm always happy to talk shop or collaborate.",
    },
  ],
  focus: {
    id: "Website responsif & performa",
    en: "Responsive, performant websites",
  },

  // --- Keahlian — sesuaikan dengan stack Anda (React, Laravel, dst.) --------
  skills: [
    {
      title: { id: "Frontend", en: "Frontend" },
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"],
    },
    {
      title: { id: "Tools", en: "Tools" },
      items: ["Git", "GitHub", "VS Code", "GitHub Pages"],
    },
    {
      title: { id: "Cara kerja", en: "How I work" },
      items: ["Mobile-first", "Clean code", "Performance", "Accessibility"],
    },
  ],

  // --- Proyek pilihan --------------------------------------------------------
  // Salin blok di bawah untuk menambah proyek. `demo` dan `repo` boleh kosong
  // ("") — tautannya otomatis tidak ditampilkan.
  projects: [
    {
      title: "Portfolio Website",
      description: {
        id: "Website portfolio pribadi ini: dua bahasa (ID/EN), mode terang/gelap, dan responsif. Dibangun dengan HTML, CSS, dan JavaScript tanpa framework, lalu di-deploy lewat GitHub Pages.",
        en: "This personal portfolio: bilingual (ID/EN), light/dark mode, and responsive. Built with HTML, CSS, and JavaScript without a framework, then deployed on GitHub Pages.",
      },
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      demo: "https://ramadhan42.github.io/",
      repo: "https://github.com/ramadhan42/ramadhan42.github.io",
    },
  ],

  // --- Bagian "Terbaru di GitHub" -------------------------------------------
  showGithubRepos: false, // true = tampilkan bagian ini
  // Hanya repo di daftar ini yang tampil, sesuai urutan. `name` harus sama
  // dengan nama repo di GitHub; `label` (opsional) = nama yang ditampilkan.
  // Jangan dikosongkan: daftar kosong ([]) menampilkan SEMUA repo publik terbaru.
  githubRepos: [
    {
      name: "ramadhan42.github.io",
      label: "portfolio",
      language: "JavaScript",
      description: {
        id: "Website portfolio ini.",
        en: "This portfolio website.",
      },
    },
  ],
};
