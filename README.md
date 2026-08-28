# jimmysieja.github.io

Personal site — hand-built with Jekyll and plain CSS (no theme). Deployed by
GitHub Pages from the `main` branch (Settings → Pages → Deploy from a branch).

## Structure

```
_config.yml            site metadata, social handles, plugins
_data/navigation.yml   header tabs (add an entry to add a tab)
_layouts/
  default.html         <head> + header + footer shell
  home.html            homepage (hero + markdown body)
  page.html            Research / CV / Personal / 404
_includes/
  head.html            meta, fonts, favicon, no-flash theme script
  header.html           site name + nav + light/dark toggle
  footer.html           copyright + social icons
  icons.html            inline SVG icons — {% include icons.html name="github" %}
assets/
  css/style.scss       all styles (compiles to /assets/css/style.css)
  js/theme.js          light/dark toggle persistence
_pages/                 home.md, research.md, cv.md, personal.md, 404.html
files/cv.pdf            the CV (see below)
images/profile.png      headshot (720×720)
```

## Editing

- **Content:** edit the files in `_pages/`. Front-matter fields `kicker`, `lead`,
  and (home only) `headline`, `role`, `bio`, `photo` drive the page headers.
- **CV:** export a fresh PDF from Overleaf, name it exactly `cv.pdf` (lowercase),
  and replace `files/cv.pdf`. Update the "Last updated" line in `_pages/cv.md`.
- **Research figures:** drop PNGs in `images/research/` and uncomment the
  `<figure>` block in `_pages/research.md`.
- **Colors / fonts:** the CSS custom properties at the top of
  `assets/css/style.scss` (`:root` and `:root[data-theme="dark"]`).

## Local preview (optional — needs Ruby)

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>. GitHub Pages builds the same way on push.
