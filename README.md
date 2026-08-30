# Sharan Kalamohan — portfolio

Static site. No build step, no dependencies, no framework.

```
index.html                  page shell (rarely edited)
assets/style.css            all styling
assets/app.js               router + rendering (never needs editing to add content)
assets/profile.jpg          >>> REPLACE THIS with your headshot, square, 600px+
assets/Sharan-Kalamohan-CV.docx   the downloadable CV
assets/figures/<id>/        graphs and images, one folder per project
data/cv.js                  YOU EDIT — name, contact, timeline, skills, interests
data/projects.js            YOU EDIT — every project
reports/                    the downloadable PDFs
```

See ADDING-A-PROJECT.md for how to add work.

## Before you publish

1. Replace `assets/profile.jpg` with a real photo.
2. Replace the PDFs in `reports/` with your original submissions — the ones here were
   rebuilt from page images, so the text isn't selectable and the files are larger
   than they need to be.
3. Export your CV to PDF and swap `assets/Sharan-Kalamohan-CV.docx` for it
   (recruiters open PDFs, not Word files). Update `cvFile` in `data/cv.js`.
4. Check `data/cv.js` — grades, dates and the availability line.

## Run it locally

```
python3 -m http.server 8000
```
