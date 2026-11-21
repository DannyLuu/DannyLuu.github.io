# dannyluu.com

Source for [Danny Luu's personal website](https://www.dannyluu.com/), hosted on GitHub Pages.

A lightweight, accessible personal portfolio and product hub built with static HTML, shared CSS, and a small progressive JavaScript file. No build pipeline, runtime dependencies, analytics, trackers, or remote fonts.

## Pages

- `index.html` — personal profile, capabilities, featured work, public GitHub presence, verified YouTube channel, personal interests, and professional experience
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

Change the CSS custom properties in `:root` and the monochrome/deep-red design rules in `assets/css/site.css`. Keep the palette primarily black and white, with limited oxblood-red accents. Avoid introducing multiple competing accent colours. Use naturally sized, undistorted images, subtle animations, and meaningful visual hierarchy.

## YouTube content

The homepage links to the verified channel at `https://www.youtube.com/@DannyLuu`. It accurately describes past gymnastics/tricking, personal-finance and travel content, as well as the user's current hiatus and interest in future maker and financial-literacy videos. Add selected videos with lightweight preview thumbnails once approved; do not auto-play external embeds.

## Content and privacy principles

- Position ISSF Trainer as an athlete-facing sporting product, not as an open-source repository or code demo.
- Do not publish private source links, unpublished screenshots, product release dates, or false download buttons.
- Keep current employer and clients anonymous, while showcasing job title, verified professional achievements, and engineering interests. Avoid internal systems, home address, and private family information.
- Respect accessibility, keyboard navigation, contrast, responsive layout, reduced motion, and image aspect ratios.
- Avoid presenting placeholder content as finished work.
