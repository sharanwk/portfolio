# Editing the content

Every word, number and image on the site comes from two files. You will never need to open
`index.html`, `style.css` or `app.js`.

Open the files in any text editor — VS Code, Notepad++, even TextEdit. They're plain text.

---

## Where each thing on screen lives

### Landing page

| What you see | File | Field |
|---|---|---|
| Big name at the top | `data/cv.js` | `name` |
| Grey line next to the photo | `data/cv.js` | `role` |
| "Available full-time from…" | `data/cv.js` | `availability` |
| The intro paragraph | `data/cv.js` | `thesis` |
| "British citizen · Full UK right to work…" | `data/cv.js` | `eligibility` |
| The photo | replace the file `assets/profile.jpg` | — |
| CAD drawing on the right | `data/projects.js` → the `fs-concept` entry → `hero` | — |
| Caption under the drawing | `assets/app.js`, search for `Side elevation` | — |

### Background section

| What you see | File | Field |
|---|---|---|
| Paragraph under the heading | `assets/app.js`, search for `The short version` | — |
| Education / Relevant experience / Other experience | `data/cv.js` | `timeline[].group` |
| Each entry | `data/cv.js` | `timeline[]` |
| Tools box | `data/cv.js` | `skills` |
| Outside work box | `data/cv.js` | `interests` |

A timeline entry looks like this:

```js
{
  group: "relevant",              // "education" | "relevant" | "other"
  kind: "Industrial placement",   // the small grey label under the dates
  period: "Aug 2023 – Aug 2024",
  title: "Mechanical Engineering Placement Student",
  org: "Renishaw PLC, Wotton-under-Edge",
  note: "Future-Products R&D — Equator X gauging system",   // italic line, optional
  body: "The paragraph.",
  points: ["Bullet one", "Bullet two"]                       // use [] for none
},
```

Order in the file = order on the page, within each group. Newest at the top.

### Projects

Everything is in `data/projects.js`. See `ADDING-A-PROJECT.md` for the full field list.

| What you see | Field |
|---|---|
| Card headline | `title` |
| Card paragraph | `short` |
| Big page heading | `title` |
| Line under the heading | `short` |
| Grey strip of Institution / Module / Year / Grade / Role | `org`, `module`, `year`, `grade`, `role` |
| "The work" paragraphs | `summary` (an array — one string per paragraph) |
| Red-edged boxes | `findings` |
| "What I'd do differently" | `differently` |
| Sidebar table | `results` |
| Tools used | `tools` |
| Images and captions | `figures` |

---

## Swapping in your own graphs

**Easiest way — keep my filenames.** Save your cleaner screenshot over the existing file at
the same path and the site picks it up with no code change at all. For example, replace:

```
assets/figures/mgp-motor/efficiency-map.webp
```

`.png` and `.jpg` work fine too, but if you change the extension you must also change the
`src` in `data/projects.js` to match. Keeping `.webp` avoids that entirely.

**If you'd rather use your own names**, drop the file in and update both places it's referenced:
the `figures` array, and `hero` if it's the card image.

### Getting good exports

- **MATLAB** — `exportgraphics(gcf, 'name.png', 'Resolution', 200)` beats a screenshot every time.
  If the figure has a dark background, `set(gcf,'Color','w')` first.
- **Excel charts** — right-click the chart → Copy → paste into Paint → save as PNG. Or right-click
  → Save as Picture.
- **Abaqus / Ansys** — use the built-in image export rather than a screen grab; you'll get the
  legend at full resolution.
- **Width** — aim for roughly 1300–1600 px. Bigger doesn't look better and slows the page.
- **Background** — white or transparent. The site multiplies the image into the card background,
  so a white background disappears cleanly and a grey one will look like a box.
- **Crop tight.** Cut the figure caption and any surrounding body text out of the image — the
  caption is written separately in `data/projects.js` and will appear underneath.

---

## Attaching your CV as a PDF

1. Open your CV in Word → **File → Save As** → choose **PDF**.
2. Name it `Sharan-Kalamohan-CV.pdf` and put it in the `assets/` folder.
3. Open `data/cv.js` and change one line:

```js
cvFile: "assets/Sharan-Kalamohan-CV.pdf",
```

4. Delete the old `.docx` from `assets/`.

Both "Download CV" buttons and the one in the Background sidebar all read that single field,
so they update together.

---

## Your profile photo

Replace `assets/profile.jpg` with your own file. Keep the same name and the same `.jpg`
extension and nothing else needs changing.

- Square crop, 600 × 600 px or larger
- Head and shoulders, plain background
- If you'd rather use a PNG, rename the path in `data/cv.js` → `photo:`

Until you replace it, the site shows a grey "ADD PHOTO" placeholder in the right shape, so
the layout never breaks.

---

## Checking your edits

```
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Refresh after every save.

**If the page goes blank**, you've broken the syntax in one of the data files — almost always a
missing comma between entries, or a stray `"` inside a sentence. Press **F12**, open the
**Console** tab, and it will name the file and line number.

Apostrophes are safe inside double quotes (`"I'd do differently"`). Double quotes are not —
write `\"` or just use a different word.
