(() => {
  "use strict";

  const data = window.PORTFOLIO || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------- Teks antarmuka (ID / EN) ---------- */
  const UI = {
    id: {
      "nav.about": "Tentang",
      "nav.skills": "Keahlian",
      "nav.projects": "Proyek",
      "nav.contact": "Kontak",
      "hero.hello": "Halo, saya",
      "hero.available": "Terbuka untuk peluang kerja",
      "hero.cta1": "Lihat proyek",
      "hero.cta2": "Hubungi saya",
      "about.title": "Sedikit tentang saya",
      "about.location": "Lokasi",
      "about.role": "Peran",
      "about.focus": "Fokus",
      "about.status": "Status",
      "about.statusOpen": "Terbuka untuk kerja & kolaborasi",
      "about.statusBusy": "Sedang tidak mencari peluang baru",
      "skills.title": "Yang saya gunakan",
      "projects.title": "Proyek pilihan",
      "projects.demo": "Lihat demo",
      "projects.code": "Lihat kode",
      "repos.title": "Terbaru di GitHub",
      "repos.all": "Lihat semua di GitHub",
      "contact.title": "Punya proyek atau peluang? Mari ngobrol.",
      "contact.text": "Saya terbuka untuk kerja sama, proyek freelance, maupun posisi penuh waktu. Hubungi saya lewat salah satu kanal di bawah.",
      "hero.working": "Saat ini bekerja di {company}",
      "about.statusWorking": "Bekerja di {company}",
      "contact.titleWork": "Ingin berdiskusi atau berkolaborasi? Mari ngobrol.",
      "contact.textWork": "Saat ini saya bekerja di {company}. Saya tetap senang berkenalan, berdiskusi soal web, dan berkolaborasi. Hubungi saya lewat kanal di bawah.",
      "contact.email": "Kirim email",
      "contact.cv": "Unduh CV",
      "footer.built": "Dibuat dengan HTML, CSS & JavaScript · Di-host di GitHub Pages",
      "footer.top": "Kembali ke atas",
      "a11y.theme": "Ganti tema terang/gelap",
      "a11y.menu": "Buka menu",
      "meta.description": "Portfolio {name}, web developer yang membangun website cepat, rapi, dan responsif.",
    },
    en: {
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "hero.hello": "Hi, I'm",
      "hero.available": "Open to opportunities",
      "hero.cta1": "View projects",
      "hero.cta2": "Get in touch",
      "about.title": "A little about me",
      "about.location": "Location",
      "about.role": "Role",
      "about.focus": "Focus",
      "about.status": "Status",
      "about.statusOpen": "Open to work & collaboration",
      "about.statusBusy": "Not looking for new opportunities",
      "skills.title": "What I work with",
      "projects.title": "Selected projects",
      "projects.demo": "View demo",
      "projects.code": "View code",
      "repos.title": "Latest on GitHub",
      "repos.all": "See all on GitHub",
      "contact.title": "Got a project or an opening? Let's talk.",
      "contact.text": "I'm open to collaborations, freelance projects, and full-time roles. Reach me through any of the channels below.",
      "hero.working": "Currently working at {company}",
      "about.statusWorking": "Working at {company}",
      "contact.titleWork": "Want to chat or collaborate? Let's talk.",
      "contact.textWork": "I currently work at {company}. I'm still happy to connect, talk about the web, and collaborate. Reach me through the channels below.",
      "contact.email": "Send an email",
      "contact.cv": "Download CV",
      "footer.built": "Built with HTML, CSS & JavaScript · Hosted on GitHub Pages",
      "footer.top": "Back to top",
      "a11y.theme": "Toggle light/dark theme",
      "a11y.menu": "Open menu",
      "meta.description": "Portfolio of {name}, a web developer building fast, clean, responsive websites.",
    },
  };

  const store = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        /* penyimpanan tidak tersedia — abaikan */
      }
    },
  };

  let lang = store.get("lang") || ((navigator.language || "id").toLowerCase().startsWith("id") ? "id" : "en");
  if (!UI[lang]) lang = "id";

  const ui = (key) => (UI[lang][key] ?? UI.id[key] ?? key).replace("{company}", data.company || "");

  // Status kerja: "open" (mencari peluang), "work" (sudah bekerja), atau "none"
  const workMode = data.available ? "open" : data.company ? "work" : "none";
  const tr = (value) => (value && typeof value === "object" ? value[lang] ?? value.id ?? "" : value ?? "");

  /* ---------- Helper DOM ---------- */
  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (value == null || value === false) continue;
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else node.setAttribute(key, value);
    }
    for (const child of [].concat(children)) {
      if (child != null) node.append(child);
    }
    return node;
  }

  const external = (href) => ({ href, target: "_blank", rel: "noopener" });
  const githubUrl = data.githubUsername ? `https://github.com/${encodeURIComponent(data.githubUsername)}` : "";

  /* ---------- Render ---------- */
  function renderHero() {
    const parts = (data.name || "").trim().split(/\s+/);
    const last = parts.length > 1 ? parts.pop() : "";
    const name = $("#heroName");
    name.textContent = parts.join(" ") + (last ? " " : "");
    if (last) name.append(el("em", { text: last }));

    $("#heroRole").textContent = tr(data.role);
    $("#heroTagline").textContent = tr(data.tagline);
    const status = $("#status");
    status.hidden = workMode === "none";
    status.classList.toggle("status--work", workMode === "work");
    $("#statusText").textContent = ui(workMode === "work" ? "hero.working" : "hero.available");
    $("#footerName").textContent = data.name || "";

    // Kartu kode dekoratif
    const stack = (data.skills?.[0]?.items || []).slice(0, 3);
    const line = (prop, valueNode) => {
      const frag = document.createDocumentFragment();
      frag.append("  ", el("span", { class: "tok-p", text: prop }), ": ", valueNode, ",\n");
      return frag;
    };
    const str = (s) => el("span", { class: "tok-s", text: JSON.stringify(String(s)) });
    const list = document.createDocumentFragment();
    list.append("[");
    stack.forEach((item, i) => list.append(i ? ", " : "", str(item)));
    list.append("]");

    const code = $("#heroCode");
    code.replaceChildren(
      el("span", { class: "tok-c", text: lang === "id" ? "// kenalan dulu" : "// nice to meet you" }),
      "\n",
      el("span", { class: "tok-k", text: "const" }),
      " developer = {\n",
      line("name", str(data.name || "")),
      line("role", str(tr(data.role))),
      line("location", str(tr(data.location))),
      line("stack", list),
      workMode === "work"
        ? line("company", str(data.company))
        : line("openToWork", el("span", { class: "tok-b", text: String(!!data.available) })),
      "};"
    );
  }

  function renderAbout() {
    $("#aboutText").replaceChildren(...(data.about || []).map((p) => el("p", { text: tr(p) })));

    const facts = [
      ["about.location", tr(data.location)],
      ["about.role", tr(data.role)],
      ["about.focus", tr(data.focus)],
      ["about.status", ui({ open: "about.statusOpen", work: "about.statusWorking", none: "about.statusBusy" }[workMode])],
    ].filter(([, value]) => value);

    $("#facts").replaceChildren(
      ...facts.map(([key, value]) => el("div", {}, [el("dt", { text: ui(key) }), el("dd", { text: value })]))
    );
  }

  const chips = (items) => el("ul", { class: "chips" }, (items || []).map((item) => el("li", { text: item })));

  function renderSkills() {
    $("#skillsGrid").replaceChildren(
      ...(data.skills || []).map((group) =>
        el("article", { class: "skill-group" }, [el("h3", { text: tr(group.title) }), chips(group.items)])
      )
    );
  }

  function renderProjects() {
    $("#projectsGrid").replaceChildren(
      ...(data.projects || []).map((project, i) => {
        const links = [
          project.demo && el("a", { ...external(project.demo), text: `${ui("projects.demo")} ↗` }),
          project.repo && el("a", { ...external(project.repo), text: `${ui("projects.code")} ↗` }),
        ].filter(Boolean);

        return el("article", { class: "project" }, [
          el("span", { class: "project__num", text: String(i + 1).padStart(2, "0") }),
          el("h3", { text: tr(project.title) }),
          el("p", { text: tr(project.description) }),
          chips(project.tags),
          links.length ? el("div", { class: "project__links" }, links) : null,
        ]);
      })
    );
  }

  function renderContact() {
    $("#contactTitle").textContent = ui(workMode === "work" ? "contact.titleWork" : "contact.title");
    $("#contactText").textContent = ui(workMode === "work" ? "contact.textWork" : "contact.text");

    const items = [
      data.email && { href: `mailto:${data.email}`, label: ui("contact.email"), external: false },
      githubUrl && { href: githubUrl, label: "GitHub" },
      data.linkedin && { href: data.linkedin, label: "LinkedIn" },
      data.instagram && { href: data.instagram, label: "Instagram" },
      data.cvUrl && { href: data.cvUrl, label: ui("contact.cv") },
    ].filter(Boolean);

    $("#contactLinks").replaceChildren(
      ...items.map((item, i) =>
        el("a", {
          class: `btn ${i === 0 ? "btn--primary" : "btn--ghost"}`,
          ...(item.external === false ? { href: item.href } : external(item.href)),
          text: item.external === false ? item.label : `${item.label} ↗`,
        })
      )
    );
  }

  /* ---------- Repo GitHub (dimuat otomatis) ---------- */
  async function loadRepos() {
    if (!data.showGithubRepos || !data.githubUsername) return;
    try {
      const res = await fetch(
        `https://api.github.com/users/${encodeURIComponent(data.githubUsername)}/repos?sort=updated&per_page=30`,
        { headers: { Accept: "application/vnd.github+json" } }
      );
      if (!res.ok) return;
      const repos = (await res.json()).filter((repo) => !repo.fork && !repo.archived).slice(0, 6);
      if (!repos.length) return;

      $("#reposGrid").replaceChildren(
        ...repos.map((repo) =>
          el("a", { class: "repo", ...external(repo.html_url) }, [
            el("span", { class: "repo__name", text: repo.name }),
            el("span", { class: "repo__desc", text: repo.description || "" }),
            el("span", { class: "repo__meta" }, [
              repo.language && el("span", { class: "repo__lang", text: repo.language }),
              repo.stargazers_count > 0 && el("span", { text: `★ ${repo.stargazers_count}` }),
            ].filter(Boolean)),
          ])
        )
      );
      $("#reposAll").href = `${githubUrl}?tab=repositories`;
      $("#repos").hidden = false;
    } catch {
      /* offline atau kena rate limit — bagian ini tetap tersembunyi */
    }
  }

  /* ---------- Bahasa ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((node) => (node.textContent = ui(node.dataset.i18n)));
    $$("[data-i18n-aria]").forEach((node) => node.setAttribute("aria-label", ui(node.dataset.i18nAria)));
    $$("[data-lang]").forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang)));

    document.title = `${data.name} — ${tr(data.role)}`;
    const description = ui("meta.description").replace("{name}", data.name || "");
    $('meta[name="description"]')?.setAttribute("content", description);

    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderContact();
  }

  $$("[data-lang]").forEach((btn) =>
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      store.set("lang", lang);
      applyLang();
    })
  );

  /* ---------- Tema ---------- */
  $("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store.set("theme", next);
  });

  /* ---------- Menu mobile ---------- */
  const nav = $("#nav");
  const menuToggle = $("#menuToggle");
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  };
  menuToggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (event) => event.target.closest("a") && setMenu(false));
  document.addEventListener("keydown", (event) => event.key === "Escape" && setMenu(false));

  /* ---------- Efek scroll ---------- */
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }),
      { threshold: 0.12 }
    );
    $$(".reveal").forEach((node) => revealObserver.observe(node));

    const navLinks = $$(".nav a");
    const sectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) =>
            link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`)
          );
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    $$("main section[id]").forEach((section) => sectionObserver.observe(section));
  } else {
    $$(".reveal").forEach((node) => node.classList.add("is-visible"));
  }

  /* ---------- Mulai ---------- */
  $("#year").textContent = new Date().getFullYear();
  applyLang();
  loadRepos();
})();
