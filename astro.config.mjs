// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at a project path:
// https://krishnamurthy-satusky-lab.github.io/
// If you later move to a custom/root domain, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://krishnamurthy-satusky-lab.github.io',
  base: 'lab-website/',
  build: {
    format: 'directory',
  },
});