# dannyluu.com

Source for [Danny Luu's personal website](https://www.dannyluu.com/), hosted on GitHub Pages.

A lightweight, accessible personal portfolio and product hub built with static HTML, shared CSS, and a small progressive JavaScript file. No build pipeline, runtime dependencies, analytics, trackers, or remote fonts.

## Pages

- `index.html` — personal narrative, engineering leadership, selected engineering outcomes, maker projects, optional side-project services, personal interests, credentials and external channels
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

## Project photography

Five optimized WebP photographs are committed under `assets/images/projects/`: Ottawa Foos anniversary badges, the privacy-cropped smart-mirror display, Prusa and Bambu Lab H2C fabrication setups, and foosball keychains. The homepage uses the shared `project-media` and `media-pair` classes with intrinsic dimensions, descriptive alt text and lazy loading. The existing hero portrait is unchanged. Additional supplied photographs remain optional; unfilled media markers are comments only and do not create broken image requests. Do not publish unreviewed home/family images, original EXIF, or unapproved shared photo links.

## Editorial organization

The About section covers career origins; Engineering covers present-day decision-making and mentorship; Impact presents three anonymized outcomes with individual/team distinction; Projects presents actual independent/community work; Beyond work describes selected personal interests. Do not duplicate these stories in the toolkit or external-channel sections. Keep the product landing page independent and accurate about development status.

## Hero and interface direction

The homepage introduces Danny as **Architect. Maker. Explorer.** Keep these three words consistent in the visible heading, document title, and social sharing metadata. Preserve the approved first-person introduction. Lead with the headline and actions on mobile before the headshot; the portrait's intrinsic dimensions must remain intact. Use the deep oxblood accent selectively for the third word and a little contrast in the engineering bento cards rather than adding decorative clutter.

Navigation should fit smaller laptop widths, remain keyboard-accessible (including Escape), and keep the same section order across the homepage and ISSF Trainer page. Avoid hover effects that shift non-clickable content. Keep key actions large enough to tap and respect reduced-motion settings.

## Editorial voice

Write in Danny's voice: conversational, curious, grounded and professional without sounding corporate. Prefer first-person accounts of specific things he has done or enjoyed over broad claims about personality. Use familiar wording (“tinkering with electronics,” “playing foosball,” “3D modelling and printing”) instead of inflated descriptions or keyword-heavy lists. Each homepage section should add information rather than reintroduce the same themes.

Keep the distinction between current activities and past interests: fitness and staying healthy are current priorities; gymnastics/tricking are part of the past; video production is something he may return to, not an active publishing schedule. His engineering role and mentoring belong in Engineering, not repeated throughout the hero. Avoid inferred achievements or product promises. The public hero location is Canada only; do not add a more specific home location.

## Services and availability

The homepage includes **Ways I can help** as an invitation to discuss small side projects, not as a full-time consulting agency or a guarantee of availability. Services include custom 3D modelling, 3D printing, appropriately scoped software work, basic home/electronics troubleshooting when feasible, and general personal-finance learning conversations. Keep the language conditional on project suitability, schedule, and skill.

- Do not claim licensed trade, electrical, structural, or safety-critical repair qualifications. Refer such tasks to qualified professionals.
- Personal finance content is educational only. Danny is **not a financial advisor**; do not offer individualized investment recommendations, portfolio management, or imply professional accreditation.
- Do not invent prices, lead times, client testimonials, a booking system, or a home location. The call to action links to his existing public LinkedIn profile.
- Keep the services section after tangible projects, so examples of existing work precede offers to collaborate.
