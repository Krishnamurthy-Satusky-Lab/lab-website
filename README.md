# Carolina Health AI Lab — website

A static website for an academic lab in the **UNC School of Data & Information
Sciences**, focused on AI for medical informatics and the public good. Built with
[Astro](https://astro.build). The content is realistic **placeholder** material —
swap it for the real lab identity before going live.

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server → http://localhost:4321
npm run build    # static build → ./dist
npm run preview  # serve the production build locally
```

Output is plain static files in `dist/` — host it anywhere (GitHub Pages, UNC/RENCI
servers, Netlify, S3, …). If you deploy under a sub-path, set `site` and `base` in
`astro.config.mjs`.

## Where to edit content

All content lives in typed data files under `src/data/` — no need to touch markup:

| File | Contains |
|------|----------|
| `src/data/site.ts` | Lab name, tagline, mission, email, location, and navigation |
| `src/data/projects.ts` | Research projects (Research page + landing thrusts) |
| `src/data/people.ts` | Lab members, grouped by role (PI, postdoc, PhD, staff, affiliate, alumni) |
| `src/data/publications.ts` | Citations, with per-entry BibTeX |

Pages are in `src/pages/` (`index`, `research`, `people`, `publications`, `contact`),
reusable components in `src/components/`, and the design system in
`src/styles/global.css`.

## Design & branding notes

- **Colors** follow the [UNC Branding & Identity Guidelines](https://identity.unc.edu/brand/color/):
  Carolina Blue `#4B9CD3`, Navy `#13294B`, plus the official secondary/neutral
  palette, all defined as CSS custom properties in `src/styles/global.css`.
- **Accessibility:** Carolina Blue does not meet WCAG AA on white for small text, so
  body links use UNC's Hyperlink Blue `#007FAE` / Navy; Carolina Blue is reserved for
  large text, backgrounds, and on-navy elements. All motion respects
  `prefers-reduced-motion`.
- **Fonts:** Libre Franklin (display) + Inter (body) + Source Serif 4 (accents) via
  Google Fonts — close, freely-licensed stand-ins for UNC's brand typefaces. Swap in
  `src/layouts/BaseLayout.astro` and `global.css`.
- **Placeholder portraits** are generated as simple monograms. Replace them with
  real photos when available.

## Known placeholders / next steps

- Real lab name, people, projects, and publications.
- Real headshots (replace the `Avatar` component usage).
- A live contact form backend (the form currently composes a `mailto:` — wire it to
  Formspree, Netlify Forms, or similar for on-site submission).
- A deploy workflow once hosting is chosen (e.g. a GitHub Pages Action).
