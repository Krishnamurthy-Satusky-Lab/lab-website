// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at a project path:
// https://Krishnamurthy-Satusky-Lab.github.io/
// If you later move to a custom/root domain, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://Krishnamurthy-Satusky-Lab.github.io',
  build: {
    format: 'directory',
  },
});