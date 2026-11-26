/* ==========================================================================
   DATA PORTFOLIO — edit file ini untuk mengubah isi website.
   Teks dua bahasa ditulis sebagai { id: "...", en: "..." }.
   Kolom yang dikosongkan ("") otomatis disembunyikan dari halaman.
   ========================================================================== */

window.PORTFOLIO = {
  // --- Identitas -----------------------------------------------------------
  name: "M. Nur Ramadhan",
  nickname: "Rama",
  role: { id: "Web Developer", en: "Web Developer" },
  location: { id: "Indonesia", en: "Indonesia" }, // contoh: "Makassar, Indonesia"
  company: "Dominatus", // tempat kerja saat ini — tampil sebagai "Saat ini bekerja di ..."
  available: false, // true = tampilkan "Terbuka untuk peluang kerja" (menggantikan label tempat kerja)

  // --- Kontak & tautan (kosongkan jika tidak ingin ditampilkan) -------------
  githubUsername: "ramadhan42",
  email: "", // contoh: "nama@email.com" — akan tampil publik
  linkedin: "", // contoh: "https://www.linkedin.com/in/username"
  instagram: "", // contoh: "https://www.instagram.com/username"
  cvUrl: "", // contoh: "assets/cv-m-nur-ramadhan.pdf"

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
  // Salin blok di bawah untuk menambah proyek. `demo` dan `repo` boleh kosong.
  projects: [
    {
      title: "Portfolio Website",
      description: {
        id: "Website portfolio pribadi dua bahasa dengan mode terang/gelap. Dibangun tanpa framework agar ringan, lalu di-deploy lewat GitHub Pages.",
        en: "A bilingual personal portfolio with light/dark mode. Built without a framework to stay lightweight, then deployed on GitHub Pages.",
      },
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      demo: "",
      repo: "",
    },
    /*
    {
      title: "Nama Proyek",
      description: {
        id: "Apa masalahnya, apa yang Anda bangun, dan apa hasilnya.",
        en: "What the problem was, what you built, and what came out of it.",
      },
      tags: ["React", "Tailwind"],
      demo: "https://contoh.com",
      repo: "https://github.com/username/nama-repo",
    },
    */
  ],

  // Tampilkan repo publik terbaru dari GitHub secara otomatis (true/false)
  showGithubRepos: true,
};
