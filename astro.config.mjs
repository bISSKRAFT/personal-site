import { defineConfig } from 'astro/config';

// GitHub Pages serves project sites from /<repo-name>/ and user sites from /.
// In CI, GITHUB_REPOSITORY is provided automatically, so the base path is
// detected for you. Override locally with BASE_PATH=my-repo if needed.
function normalizeBase(value) {
  if (!value) return '/';
  const trimmed = value.replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}/` : '/';
}

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = (repository ?? 'username/username.github.io').split('/');
const base = normalizeBase(process.env.BASE_PATH ?? (repo && !repo.endsWith('.github.io') ? repo : '/'));
const site = process.env.SITE_URL ?? (repository ? `https://${owner}.github.io` : undefined);

export default defineConfig({
  site,
  base,
  output: 'static',
  build: { format: 'directory' },
});
