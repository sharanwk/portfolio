/* ==========================================================================
   Router + renderers. Everything on screen comes from data/cv.js and
   data/projects.js — you should never need to edit this file to add content.
   ========================================================================== */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s == null ? "" : s)
  .replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const view = $("#view");

/* ------------------------------------------------------------- helpers --- */
const byId   = id => PROJECTS.find(p => p.id === id);
const listed = () => PROJECTS;
const statusChip = p =>
  p.status === "active"  ? '<span class="chip"><i class="dot" style="background:var(--cool)"></i>In progress</span>' :
  p.status === "planned" ? '<span class="chip"><i class="dot" style="background:var(--muted)"></i>Planned</span>' : "";

const showGrade = p => p.grade && p.showGrade !== false;

/* ---------------------------------------------------------------- home --- */
function homeHTML() {
  const P = PROFILE;

  const GROUPS = [
    ["education", "Education"],
    ["relevant",  "Relevant experience"],
    ["other",     "Other experience"]
  ];
  const entry = t => `
    <li class="tl-item">
      <div class="tl-when">${esc(t.period)}<span class="kind">${esc(t.kind || "")}</span></div>
      <div class="tl-body">
        <h3>${esc(t.title)}</h3>
        <p class="tl-org">${esc(t.org)}</p>
        ${t.note ? `<p class="tl-note">${esc(t.note)}</p>` : ""}
        <p>${esc(t.body)}</p>
        ${t.points && t.points.length ? `<ul class="tl-points">${t.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
      </div>
    </li>`;
  const tl = GROUPS.map(([g, label]) => {
    const items = P.timeline.filter(t => t.group === g);
    if (!items.length) return "";
    return `<section class="tl-group">
      <h3 class="tl-groupname">${esc(label)}</h3>
      <ol class="tl">${items.map(entry).join("")}</ol>
    </section>`;
  }).join("");

  const skills = P.skills.map(s => `
    <div class="skillgrp"><b>${esc(s.group)}</b><span>${s.items.map(esc).join(" · ")}</span></div>`).join("");

  const interests = P.interests.map(i => `
    <div class="int"><b>${esc(i.h)}</b><span>${esc(i.p)}</span></div>`).join("");

  const heroImg = (byId("fs-concept") || {}).hero || "";

  return `
  <section class="wrap hero" id="top">
    <div class="hero-grid">
      <div>
        <div class="hero-id">
          <img class="hero-photo" src="${esc(P.photo)}" alt="${esc(P.name)}"
               onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'hero-photo',style:'display:grid;place-items:center;font:500 9px/1.3 var(--mono);letter-spacing:.1em;text-align:center;color:var(--muted);padding:6px',textContent:'ADD PHOTO'}))">
          <div>
            <span class="eyebrow">${esc(P.role)}</span>
            <span class="loc">${esc(P.availability)}</span>
          </div>
        </div>

        <h1>
          <span class="ln"><span>Sharan</span></span>
          <span class="ln"><span>Kalamohan</span></span>
        </h1>
        <p class="thesis">${esc(P.thesis)}</p>

        <div class="hero-cta">
          <a class="btn" href="#projects">See the work</a>
          <a class="btn btn-ghost" href="${esc(P.cvFile)}" download>Download CV</a>
          <a class="btn btn-ghost" href="${esc(P.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
        </div>

        <div class="hero-meta">
          <span>${esc(P.eligibility)}</span>
        </div>
      </div>

      <div class="drawing">
        ${heroImg ? `<img src="${esc(heroImg)}" alt="Orthographic side view of Formula Student car #90">` : ""}
        <span class="tag">Car #90 · FS Concept Class · Side elevation</span>
      </div>
    </div>
  </section>

  <section class="wrap sec" id="cv">
    <div class="sechead">
      <span class="idx">01</span>
      <h2>Background</h2>
      <i class="rampline"></i>
    </div>
    <div class="cv-grid">
      <ol class="tl">${tl}</ol>
      <div>
        <div class="aside-box">
          <h4>Tools</h4>
          ${skills}
        </div>
        <div class="aside-box">
          <h4>Outside work</h4>
          ${interests}
          <div class="int" style="margin-top:13px"><b>Languages</b><span>${esc(P.languages)}</span></div>
          ${P.memberships ? `<div class="int" style="margin-top:13px"><b>Memberships</b><span>${esc(P.memberships)}</span></div>` : ""}
        </div>
        <a class="btn btn-ghost" style="width:100%;justify-content:center" href="${esc(P.cvFile)}" download>Download the CV</a>
      </div>
    </div>
  </section>

  <section class="wrap sec" id="projects">
    <div class="sechead">
      <span class="idx">02</span>
      <h2>Projects</h2>
      <i class="rampline"></i>
    </div>
    <p class="lede" style="margin-bottom:26px">Every project below links to a summary, the numbers that came out of it, an honest note on what I'd change, and the full report as submitted.</p>
    <div class="filters" id="filters"></div>
    <div class="cards" id="cards"></div>
  </section>

  <section class="wrap sec" id="contact">
    <div class="contact-grid">
      <div>
        <span class="eyebrow">03 — Contact</span>
        <h2 style="margin-top:14px">Get in touch</h2>
        <p class="lede">I'm looking for a graduate role in powertrains in the automotive or motorsport sector, starting October 2026. If any of the work above is close to what your team does, I would love to hear about it.</p>
        <div class="hero-cta" style="margin-top:24px">
          <a class="btn" href="mailto:${esc(PROFILE.email)}">Email me</a>
          <a class="btn btn-ghost" href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener">Connect on LinkedIn</a>
        </div>
      </div>
      <ul class="clist">
        <li><a href="mailto:${esc(P.email)}"><span class="k">Email</span><span>${esc(P.email)}</span></a></li>
        <li><a href="${esc(P.linkedin)}" target="_blank" rel="noopener"><span class="k">LinkedIn</span><span>${esc(P.linkedinLabel)}</span></a></li>
        <li><span><span class="k">Based in</span><span>${esc(P.location)}</span></span></li>
        <li><span><span class="k">Available</span><span>${esc(P.availability)}</span></span></li>
      </ul>
    </div>
  </section>`;
}

/* ------------------------------------------------------------- filters --- */
let activeFilter = "All";

function cardHTML(p) {
  return `
  <a class="card status-${esc(p.status)}" href="#p/${esc(p.id)}">
    <div class="card-fig${p.hero ? "" : " empty"}">
      ${p.hero ? `<img src="${esc(p.hero)}" alt="">` : `<span class="ph">In progress</span>`}
      <i class="ramp"></i>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="org">${esc(p.org)} · ${esc(p.year)}</span>
        ${showGrade(p) ? `<span class="gr">${esc(p.grade)}</span>` : (p.status === "active" ? `<span class="gr">Live</span>` : "")}
      </div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.short)}</p>
      <div class="tagrow">${p.tags.slice(0, 3).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      <span class="more">${p.status === "active" ? "Follow along" : "Read the write-up"}</span>
    </div>
  </a>`;
}

function paintCards() {
  const wrapEl = $("#cards");
  if (!wrapEl) return;
  const items = activeFilter === "All"
    ? listed()
    : activeFilter === "In progress"
      ? listed().filter(p => p.status !== "complete")
      : listed().filter(p => p.tags.includes(activeFilter));
  wrapEl.innerHTML = items.map(cardHTML).join("");
  $$("#filters button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.f === activeFilter)));
}

function paintFilters() {
  const box = $("#filters");
  if (!box) return;
  const counts = {};
  listed().forEach(p => p.tags.forEach(t => counts[t] = (counts[t] || 0) + 1));
  const top = Object.keys(counts).filter(t => counts[t] > 1).sort((a, b) => counts[b] - counts[a]);
  const opts = ["All", ...top, "In progress"];
  box.innerHTML = opts.map(o => `<button data-f="${esc(o)}" aria-pressed="${o === activeFilter}">${esc(o)}</button>`).join("");
  box.onclick = e => {
    const b = e.target.closest("button");
    if (!b) return;
    activeFilter = b.dataset.f;
    paintCards();
  };
}

/* ------------------------------------------------------------- project --- */
function projectHTML(p) {
  const i = PROJECTS.indexOf(p);
  const prev = PROJECTS[i - 1], next = PROJECTS[i + 1];

  const spec = [
    ["Institution", p.org],
    ["Module", p.module],
    ["Year", p.year],
    showGrade(p) ? ["Grade", p.grade] : null,
    ["Role", p.role]
  ].filter(Boolean);

  return `
  <div class="wrap pdetail">
    <a class="backlink" href="#projects">All projects</a>

    <header class="p-head">
      <span class="eyebrow">${esc(p.module)}</span>
      <h1>${esc(p.title)}</h1>
      <p class="p-short">${esc(p.short)}</p>
      <div class="chips">
        ${statusChip(p)}
        ${p.tags.map(t => `<span class="chip">${esc(t)}</span>`).join("")}
      </div>
    </header>

    <div class="specstrip">
      ${spec.map(([k, v]) => `<div class="cell"><span class="k">${esc(k)}</span><span class="v">${esc(v)}</span></div>`).join("")}
    </div>

    <div class="p-actions">
      ${p.report ? `<a class="btn" href="${esc(p.report)}" download>Download the full report (PDF)</a>` : ""}
      <a class="btn btn-ghost" href="mailto:${esc(PROFILE.email)}?subject=${encodeURIComponent(p.title)}">Ask me about this</a>
    </div>

    <div class="p-grid">
      <div>
        <section class="block">
          <h2>The work</h2>
          ${p.summary.map(s => `<p>${esc(s)}</p>`).join("")}
        </section>

        ${p.findings && p.findings.length ? `
        <section class="block">
          <h2>What came out of it</h2>
          ${p.findings.map(f => `<article class="finding"><h3>${esc(f.h)}</h3><p>${esc(f.p)}</p></article>`).join("")}
        </section>` : ""}

        ${p.differently && p.differently.length ? `
        <section class="block diff">
          <h2>What I'd do differently</h2>
          <ol>${p.differently.map(d => `<li><span>${d}</span></li>`).join("")}</ol>
        </section>` : ""}

        ${p.figures && p.figures.length ? `
        <section class="block">
          <h2>Figures</h2>
          <div class="figs">
            ${p.figures.map((f, n) => `
            <figure class="fig">
              <button type="button" data-lb="${esc(f.src)}" data-cap="${esc(f.cap)}">
                <img src="${esc(f.src)}" alt="${esc(f.cap)}" loading="lazy">
              </button>
              <figcaption><b>Fig ${String(n + 1).padStart(2, "0")}</b>${esc(f.cap)}</figcaption>
            </figure>`).join("")}
          </div>
        </section>` : ""}

        ${p.status === "active" ? `
        <div class="notice"><div><b>Still running</b>This project is in progress. Results and the full report will be posted here on completion.</div></div>` : ""}
      </div>

      <aside>
        ${p.results && p.results.length ? `
        <div class="sidecard">
          <h4>Key figures</h4>
          <table class="dtable"><tbody>
            ${p.results.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${v}</td></tr>`).join("")}
          </tbody></table>
        </div>` : ""}
        <div class="sidecard">
          <h4>Tools used</h4>
          <div class="chips">${p.tools.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
          ${p.report ? `<a class="btn" href="${esc(p.report)}" download>Download report</a>` : ""}
        </div>
      </aside>
    </div>

    <nav class="pager">
      ${prev ? `<a href="#p/${esc(prev.id)}"><span class="lbl">Previous</span><span class="ttl">${esc(prev.title)}</span></a>` : "<span></span>"}
      ${next ? `<a class="nx" href="#p/${esc(next.id)}"><span class="lbl">Next</span><span class="ttl">${esc(next.title)}</span></a>` : ""}
    </nav>
  </div>`;
}

/* -------------------------------------------------------------- router --- */
function route() {
  const h = location.hash || "#/";
  closeNav();

  if (h.startsWith("#p/")) {
    const p = byId(h.slice(3));
    view.innerHTML = p ? projectHTML(p) : `<div class="wrap pdetail"><a class="backlink" href="#projects">All projects</a><h1>Project not found</h1></div>`;
    window.scrollTo(0, 0);
    document.title = (p ? p.title + " — " : "") + PROFILE.name;
    setNav(null);
    return;
  }

  view.innerHTML = homeHTML();
  paintFilters();
  paintCards();
  document.title = `${PROFILE.name} — ${PROFILE.role}`;
  observeSections();

  const id = h.replace(/^#\/?/, "");
  if (id && $("#" + CSS.escape(id))) {
    requestAnimationFrame(() => $("#" + CSS.escape(id)).scrollIntoView({ behavior: "instant", block: "start" }));
  } else {
    window.scrollTo(0, 0);
  }
}

/* ----------------------------------------------------------- nav state --- */
let io;
function setNav(id) {
  $$(".navlinks a[data-nav]").forEach(a => a.classList.toggle("on", a.dataset.nav === id));
}
function observeSections() {
  if (io) io.disconnect();
  io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) setNav(e.target.id); });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["cv", "projects", "contact"].forEach(id => { const el = $("#" + id); if (el) io.observe(el); });
}

const toggle = $("#navtoggle"), links = $("#navlinks");
function closeNav() { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

/* --------------------------------------------------------- scroll bar --- */
addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  $("#scrollbar").style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
}, { passive: true });

/* ------------------------------------------------------------ lightbox --- */
const lb = $("#lightbox"), lbImg = $("#lbimg"), lbCap = $("#lbcap");
document.addEventListener("click", e => {
  const b = e.target.closest("[data-lb]");
  if (b) {
    lbImg.src = b.dataset.lb; lbImg.alt = b.dataset.cap; lbCap.textContent = b.dataset.cap;
    lb.hidden = false; document.body.style.overflow = "hidden"; $("#lbclose").focus();
    return;
  }
  if (e.target.closest("#lbclose") || e.target === lb) closeLB();
});
function closeLB() { lb.hidden = true; document.body.style.overflow = ""; }
addEventListener("keydown", e => { if (e.key === "Escape" && !lb.hidden) closeLB(); });

/* ---------------------------------------------------------------- boot --- */
$("#navcv").href = PROFILE.cvFile;
$("#footline").textContent = `${PROFILE.name} · ${PROFILE.location} · ${PROFILE.email}`;
addEventListener("hashchange", route);
route();
