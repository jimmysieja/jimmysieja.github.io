# jimmysieja.github.io

Personal academic site, built on the [academicpages](https://github.com/academicpages/academicpages.github.io)
template (Jekyll + Minimal Mistakes), trimmed down to just what an RA site needs:
Home/Bio, Research, and CV. No blog, talks, teaching, or publications collections
are wired up — you can add any of those back later (see "Growing the site" below).

## Get it live (no local setup required)

1. Create a **new GitHub repository** named exactly `jimmysieja.github.io`
   (this exact name is what makes GitHub serve it at that URL for free).
2. Upload everything in this folder to that repository (drag-and-drop on
   github.com works fine, or push via git — see below).
3. In the repo, go to **Settings → Pages**, and under "Build and deployment"
   set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Wait a minute or two — your site will be live at `https://jimmysieja.github.io`.

### Push via git instead (if you prefer)
```bash
cd jimmysieja-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/jimmysieja/jimmysieja.github.io.git
git push -u origin main
```

## What to edit first

- **`_config.yml`** — site title, your bio, employer, email, and any profile
  links (Google Scholar, ORCID, GitHub, etc.) — most fields are currently blank
  placeholders with a comment explaining what goes there.
- **`_pages/about.md`** — your homepage bio and research interests blurb.
- **`_pages/research.md`** — your current project(s) and (optionally) datasets/methods.
- **`_pages/cv.md`** — plain-Markdown CV. You can also just link a CV PDF instead
  (drop it in `/files/` and link it — see the comment at the top of the file).
- **`images/profile.png`** — replace with an actual headshot (keep the same filename,
  or update `avatar:` in `_config.yml` to match a new filename).

## Making it look less templated (personability)

The theme is controlled by `_sass/minimal-mistakes/_variables.scss` (colors, fonts,
layout widths) — this is the main place to make it feel like *your* site rather
than a stock template:
- Quick win: change `site_theme` in `_config.yml` (options: `default`, `air`,
  `sunrise`, `mint`, `dirt`, `contrast`) to try a different built-in color scheme.
- Deeper customization: edit the SCSS variables directly, or add your own CSS in
  `assets/css/main.scss`.

## Growing the site later

The template originally supported Publications, Talks, Teaching, and Portfolio
pages/collections. Those folders were removed here to keep things simple, but the
config in `_config.yml` still has the `collections:` block for them — if you want
one back later, you can pull the corresponding `_pages/*.html`, `_<collection>/`
folder, and nav entry from the [original template](https://github.com/academicpages/academicpages.github.io).
