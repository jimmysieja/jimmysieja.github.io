# jimmysieja.github.io

Personal site — hand-built with Jekyll and plain CSS (no theme). Deployed by
GitHub Pages from the `main` branch (Settings → Pages → Deploy from a branch).

## Structure

```
_config.yml            site metadata, social handles, plugins
_data/navigation.yml   header tabs (add an entry to add a tab)
_layouts/
  default.html         <head> + header + footer shell
  home.html            homepage (photo + title + markdown bio + profile links)
  page.html            Research / CV / Personal / 404
_includes/
  head.html            meta, fonts, favicon, no-flash theme script
  header.html           site name + nav + light/dark toggle
  footer.html           copyright + profile links
  icons.html            inline SVG icons (sun/moon for the toggle)
assets/
  css/style.scss       all styles (compiles to /assets/css/style.css)
  js/theme.js          light/dark toggle persistence
_pages/                 home.md, research.md, cv.md, personal.md, 404.html
files/                  cv.pdf, remote-work-brain-drain.pdf (linked from pages)
images/profile.*        headshot
```

## Editing

- **Content:** edit the files in `_pages/`. Front-matter: `lead` (a subtitle on
  Research/CV/Personal); on the home page, `headline`, `subtitle`, and `photo`.
  The home body is plain prose paragraphs.
- **CV:** export a fresh PDF from Overleaf, name it exactly `cv.pdf` (lowercase),
  and replace `files/cv.pdf`. Update the "Last updated" line in `_pages/cv.md`.
- **Research figures:** drop PNGs in `images/research/` and uncomment the
  `<figure>` block in `_pages/research.md`.
- **Colours:** the CSS custom properties at the top of `assets/css/style.scss`
  (`:root` for light, `:root[data-theme="dark"]` for dark). Font is Nunito,
  loaded in `_includes/head.html`.
- **Profile photo:** `images/profile.jpg` (referenced in `_pages/home.md`). The
  frame in `.intro-photo` crops from the top — tweak its `width` / `aspect-ratio`
  there if the crop is off.

## Local preview (optional — needs Ruby)

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>. GitHub Pages builds the same way on push.
