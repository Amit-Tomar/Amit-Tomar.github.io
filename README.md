# Amit Tomar — Portfolio Site

Next.js 16 (App Router) portfolio and blog, migrated from the legacy Jekyll site. See [MIGRATION.md](MIGRATION.md) for URL redirects, Disqus, and import notes.

## Development

```bash
pnpm install
pnpm dev
```

Production build (static export for GitHub Pages):

```bash
pnpm build
```

The build writes static files to `out/`. Preview locally with any static file server, for example:

```bash
npx serve out
```

## Deploy to GitHub Pages

1. Push this repository to GitHub (for `amit-tomar.github.io`, use a repo named `Amit-Tomar.github.io` or configure a custom domain).
2. In the repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually). The workflow in `.github/workflows/deploy-github-pages.yml` builds the site and publishes the `out/` directory.

Legacy Jekyll URLs are preserved via static redirect HTML generated at build time (`scripts/generate-legacy-redirects.mjs`). Next.js `redirects` in config still apply when running `pnpm dev`, but not on GitHub Pages static hosting.

Site URL and Open Graph base URL are configured in `lib/site.ts` (`baseUrl`).

## Project layout

| Path | Purpose |
|------|---------|
| `app/` | Routes: MDX pages (`page.mdx`), blog listing, dynamic blog posts, layout, OG image |
| `app/page.mdx` | Home |
| `app/projects/page.mdx` | Projects |
| `app/resume/page.mdx` | Resume timeline (MDX + resume components) |
| `app/contact/page.mdx` | Contact links |
| `content/blog/posts/` | Published blog MDX (frontmatter + body) |
| `content/blog/drafts/` | Draft posts (`draft: true`) |
| `components/` | Shared React UI (layout, blog, resume, projects, contact) |
| `lib/site.ts` | Site URL, title, description, navigation |
| `lib/blog.ts` | Post listing, frontmatter parsing, date formatting |
| `lib/redirects.mjs` | Legacy Jekyll URL redirects |
| `mdx-components.tsx` | Global MDX component map (headings, `Prose`, resume/project widgets) |
| `public/` | Images, PDF resume, static assets |
| `scripts/migrate-posts.mjs` | Re-import posts from the old GitHub Pages repo |

## Editing content

- **Home / projects / resume / contact:** edit the matching `app/**/page.mdx` file. Resume and projects use registered components (see `mdx-components.tsx` and `components/resume/`, `components/projects/`).
- **New blog post:** add `content/blog/posts/your-slug.mdx` with frontmatter (`title`, `publishedAt`, `summary`, optional `category`, `disqusUrl`). Rebuild to pick up static routes.
- **Site URL or nav:** `lib/site.ts`.

## Re-import Jekyll posts

```bash
git clone --depth 1 https://github.com/Amit-Tomar/Amit-Tomar.github.io.git /tmp/amit-tomar-github-io
node scripts/migrate-posts.mjs
```
