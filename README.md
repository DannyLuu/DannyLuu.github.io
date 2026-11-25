# dannyluu.com

Danny Luu’s personal portfolio, served by GitHub Pages at [dannyluu.com](https://www.dannyluu.com/). The site uses static HTML, shared CSS, and a small script. It has no application build step, runtime packages, analytics, or third-party font requests.

## Pages

- `index.html` introduces Danny’s architecture expertise, documents selected engineering outcomes, features ISSF Trainer, and covers his career story, maker projects, approach, and contact information.
- `issf-trainer/index.html` is the public-facing software design case study for an independent Flutter project in development. The application repository and builds are private.
- `assets/css/site.css` provides the shared type, layout, colour, and responsive rules.
- `assets/js/site.js` enhances the navigation and updates the copyright year. Both routes and navigation remain usable with JavaScript disabled.

## Preview and check

From the repository root, serve the files directly.

```sh
python -m http.server 8000
```

Open [the homepage](http://localhost:8000/) and [the case study](http://localhost:8000/issf-trainer/). Check deep links, reduced motion, keyboard use and layout on narrow screens before publishing. JavaScript syntax can be checked with `node --check assets/js/site.js`.

## Content and assets

Keep professional examples anonymized and retain team attribution for shared outcomes. Use approved, public material only. The current employer, client names, unpublished projects, private source links, and unreleased builds stay out of page copy, metadata, and assets.

Use factual status language and approved, non-operational interface imagery when covering ISSF Trainer. The current cover is an illustration of the project’s information areas. Genuine maker photographs are under `assets/images/projects/`. Obtain permission and review visible personal details before adding new photos. Include alt text and true dimensions, and lazy-load below-the-fold photographs.

The portrait WebP variants reuse the original portrait at two sizes. The original PNG also serves as the homepage sharing image. Instrument Serif and Inter are hosted locally, with their licenses in `assets/fonts/`.

When adding a public page, update the sitemap and use matching canonical and Open Graph URLs on `www.dannyluu.com`. Maintain existing paths and fragment IDs when reorganizing a page.
