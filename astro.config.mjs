import { defineConfig } from 'astro/config';

// GitHub Pages serves project sites from /<repo-name>/ and user sites from /.
// In CI, GITHUB_REPOSITORY is provided automatically, so the base path is
// detected for you. Override locally with BASE_PATH=my-repo if needed.
function normalizeBase(value) {
  if (!value) return '/';
  const trimmed = value.replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}/` : '/';
}

const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? 'username/username.github.io').split('/');
const base = normalizeBase(process.env.BASE_PATH ?? (repo && !repo.endsWith('.github.io') ? repo : '/'));

export default defineConfig({
  site: process.env.SITE_URL ?? `https://${owner}.github.io`,
  base,
  output: 'static',
  build: { format: 'directory' },
});
