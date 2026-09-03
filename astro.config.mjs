// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at a project path:
// https://satusky.github.io/lab-website-mockup/
// If you later move to a custom/root domain, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://satusky.github.io',
  base: '/lab-website-mockup',
  build: {
    format: 'directory',
  },
});
