# Adding or updating a project

Everything on the site is generated from two files. You never touch HTML, CSS or JavaScript.

| I want to change… | Edit this |
|---|---|
| A project — text, numbers, figures, report | `data/projects.js` |
| Your name, photo, contact, CV, timeline, skills | `data/cv.js` |

---

## 1. Put the files in place

**Report** → drop the PDF in `reports/` and name it after the project id, e.g. `reports/msc-dissertation.pdf`

**Figures** → make a folder `assets/figures/<project-id>/` and put your images in it.
Screenshot the graphs straight out of your report or export them from MATLAB. Any of
`.webp`, `.png` or `.jpg` works. Aim for about 1300 px wide — bigger just makes the page slow.

---

## 2. Add the entry

Open `data/projects.js`, copy the block below, and paste it inside the `PROJECTS = [ ... ]`
list. Position in the list = position on the page, so put newer work near the top.

```js
{
  id: "msc-dissertation",              // lowercase, no spaces. Becomes the URL: #p/msc-dissertation
  title: "Full project title",
  short: "One sentence for the card. What it was and why it mattered.",
  org: "Brunel University London",
  module: "MSc dissertation",
  role: "Individual dissertation",
  year: "2026",
  grade: "78%",                        // delete this line if there's no grade
  showGrade: true,                      // set false to keep the grade private
  status: "complete",                   // "complete" | "active" | "planned"
  featured: false,
  tags: ["CFD", "Hydrogen", "Optimisation"],   // first 3 show on the card; 2+ uses become a filter button
  tools: ["Ricardo WAVE", "Ansys CFD", "MATLAB"],
  report: "reports/msc-dissertation.pdf",      // null if there's nothing to download yet
  hero: "assets/figures/msc-dissertation/main-result.webp",  // the card image; null shows a placeholder

  summary: [
    "First paragraph — the problem and why it's hard.",
    "Second paragraph — what you actually built.",
    "Third paragraph — the headline outcome."
  ],

  results: [                            // renders as the sidebar 'Key figures' table
    ["Metric name", "The value"],
    ["Peak volumetric efficiency", "94.2% at 6,500 rpm"]
  ],

  findings: [                           // optional. Delete the whole block if you don't need it.
    { h: "The one-line claim", p: "The paragraph that backs it up." }
  ],

  differently: [                        // the honest section. HTML is allowed here, e.g. K<sub>V</sub>
    "First thing you'd change, and why.",
    "Second thing."
  ],

  figures: [
    { src: "assets/figures/msc-dissertation/main-result.webp", cap: "Caption. Say what the reader is looking at." }
  ]
},
```

---

## 3. Finishing a project that's already listed

The MSc dissertation and the engine simulation are already in the file as `status: "active"`.
To publish them:

1. Change `status: "active"` → `status: "complete"`
2. Add `grade`, fill in `results`, `findings`, `differently`
3. Set `report:` to the PDF path and `hero:` to your best figure
4. Add the `figures` entries

Nothing else changes. The card stops saying "Live", the download button appears, and the
sidebar table fills in on its own.

---

## 4. Check it before you push

Open a terminal in this folder and run:

```
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Opening `index.html` by double-clicking also mostly works,
but a local server behaves exactly like the live site.

**If the page goes blank**, you almost certainly dropped a comma or a quote in `data/projects.js`.
Press F12, open the Console tab, and it will tell you which line.

---

## 5. Publishing

The whole folder is static — no build step, no dependencies.

- **GitHub Pages** — push the folder to a repo, then Settings → Pages → deploy from `main`, root.
- **Netlify or Cloudflare Pages** — drag the folder onto the dashboard.

Both are free and both give you a custom domain if you want one later.
