// @ts-check
import { defineConfig } from 'astro/config';

// Host-agnostic static output. When hosting is chosen, set `site` (and `base`
// for a GitHub Pages project path) here.
export default defineConfig({
  // site: 'https://example.org',
  build: {
    format: 'directory',
  },
});
