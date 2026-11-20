# dannyluu.com

Source for [Danny Luu's personal website](https://www.dannyluu.com/), hosted on GitHub Pages.

A lightweight, accessible personal portfolio and product hub built with static HTML, shared CSS, and a small progressive JavaScript file. No build pipeline, runtime dependencies, analytics, trackers, or remote fonts.

## Pages

- `index.html` — personal profile, capabilities, featured work, public GitHub presence, video channel placeholder, and professional experience
- `issf-trainer/index.html` — independent product landing page. **ISSF Trainer's repository is private and must not be linked or exposed.**
- `assets/css/site.css` — shared design system and all page styles
- `assets/js/site.js` — accessible mobile navigation, scroll highlights, and reduced-motion-aware reveals
- `assets/images/headshot.png` — portrait, displayed without distortion

## Local preview

```sh
python -m http.server 8000
```

Open `http://localhost:8000/` and `http://localhost:8000/issf-trainer/`.

## Adding a project or page

1. Create a new directory, such as `my-project/index.html`, following the semantic structure of `issf-trainer/index.html`.
2. Load `../assets/css/site.css` and `../assets/js/site.js` from the new page. Reuse existing page, feature, card, and typography classes.
3. Add a featured or selected-work card in `index.html`, linking to the new page.
4. Add factual product copy, confirmed screenshots and links only. Add canonical URL, description, and Open Graph metadata.
5. Update `sitemap.xml` to include the public page and check desktop/mobile navigation.

No new framework or build tooling is required. If the number of projects becomes large, consider a small static site generator only after the maintenance cost of manual pages becomes significant.

## Updating visual style

Change the CSS custom properties in `:root` and the refined identity rules at the bottom of `assets/css/site.css`. Keep the palette restrained and avoid reintroducing many independent accent colours. Use naturally sized, undistorted images, subtle animations, and meaningful visual hierarchy.

## YouTube content

The homepage includes a dedicated channel card but does not invent a channel URL or feature videos that have not been verified. When the correct channel URL and videos are available, replace the placeholder with a real external link and selectively add thumbnail cards. Use lightweight image links rather than autoplaying external embeds.

## Content and privacy principles

- Position ISSF Trainer as an athlete-facing sporting product, not as an open-source repository or code demo.
- Do not publish private source links, unpublished screenshots, product release dates, or false download buttons.
- Share professional scope without exposing clients, internal systems, home address, or personal family information.
- Respect accessibility, keyboard navigation, contrast, responsive layout, reduced motion, and image aspect ratios.
- Avoid presenting placeholder content as finished work.
