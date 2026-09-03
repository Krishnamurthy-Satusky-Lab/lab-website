// Prefix an internal path with the configured base (import.meta.env.BASE_URL)
// so links resolve correctly whether the site is served from a project subpath
// (e.g. GitHub Pages: /lab-website-mockup/) or from a root domain (/).
//
// Use for ALL internal links and local asset references. External URLs
// (http..., mailto:, #anchors) should be used as-is, not passed through here.

const BASE = import.meta.env.BASE_URL; // "/lab-website-mockup/" or "/"

export function url(path: string): string {
  return BASE.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}
