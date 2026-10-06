# Migration from Jekyll to Next.js

This document summarizes the migration from the legacy [Amit-Tomar.github.io](https://github.com/Amit-Tomar/Amit-Tomar.github.io) Jekyll site (Poole/Lanyon theme) into this Next.js portfolio codebase.

## Source and target

| | Legacy site | This codebase |
|---|---|---|
| Framework | Jekyll + Poole/Lanyon | Next.js 16 App Router + MDX |
| Content format | Markdown (`_posts/`, `_drafts/`) | MDX (`content/blog/posts/`, `content/blog/drafts/`) |
| URL style | Category/date/title paths | Flat `/blog/{slug}` paths |
| Comments | Disqus (`amittomar`) | Disqus (same shortname, legacy URLs preserved) |

## Blog posts migrated (4 published)

| New slug | Date | Category | Old Jekyll URL |
|---|---|---|---|
| `hello-world` | 2015-05-01 | Personal | `/personal/2015/05/01/Hello-World/` |
| `thesis-how-and-why` | 2015-06-18 | Masters-at-IIITB | `/masters-at-iiitb/2015/06/18/Thesis-How-and-Why/` |
| `chosing-computer-graphics-as-a-stream-at-iiitb` | 2015-08-27 | Masters-at-IIITB | `/masters-at-iiitb/2015/08/27/Chosing-Computer-Graphics-As-A-Stream-At-IIITB/` |
| `placements-to-and-not-tos` | 2017-10-06 | Masters-at-IIITB | `/masters-at-iiitb/2017/10/06/Placements-To-And-Not-Tos/` |

Template starter posts (`vim`, `static-typing`, `spaces-vs-tabs`) were removed.

## Drafts (not published)

Stored in `content/blog/drafts/` and excluded from the blog index and sitemap:

- `teachers-you-are-doing-it-wrong.mdx`
- `placements-to-and-not-tos-draft.mdx` (earlier draft of the placements post)

Draft filtering is handled in `getBlogPosts()` via `draft: true` frontmatter.

## Assets

| Source (Jekyll) | Destination (Next.js) |
|---|---|
| `images/*.png` | `public/images/` |
| `assets/*.pdf` | `public/assets/` |

## Pages migrated

| Legacy page | New route |
|---|---|
| `index.html` | `/` (home) |
| `posts.html` | `/blog` |
| `projects.md` | `/projects` |
| `contact.md` | `/contact` |
| `resume.md` | `/resume` |

## URL redirects

Redirect rules live in `lib/redirects.mjs`. For local development they are applied via `next.config.mjs`. For the static GitHub Pages export, `scripts/generate-legacy-redirects.mjs` (run automatically before `pnpm build`) writes matching HTML redirect pages under `public/` so old URLs still work on static hosting. They map:

- All four legacy blog post paths (with and without trailing slash / `index.html`) → `/blog/{slug}`
- `/posts/` and `/posts.html` → `/blog/` (static HTML redirects on GitHub Pages; `/resume` and `/contact` use normal App Router pages)
- `/posts.html` → `/blog`

These help SEO and Disqus comment continuity when visitors or crawlers hit old URLs.

## Disqus comments

The old site used Disqus with shortname **`amittomar`**.

- Component: `components/blog/disqus.tsx`
- Each published post includes a `disqusUrl` frontmatter field pointing to the **original Jekyll URL**
- The embed uses that URL as `page.url` and `page.identifier` so existing comments load without re-importing data

**Optional manual step:** In [Disqus admin](https://disqus.com/admin/) → Settings → Advanced → URL Mapper, add mappings from old paths to new `/blog/...` slugs if comments do not appear after deploy.

Comment data lives on Disqus servers — it is not stored in the GitHub repository.

## Frontmatter format

Jekyll frontmatter was converted to the Next.js blog schema:

```yaml
---
title: 'Post title'
publishedAt: '2015-05-01'
summary: 'Auto-generated excerpt from content'
category: 'Masters-at-IIITB'   # optional, preserved from Jekyll
disqusUrl: 'https://amit-tomar.github.io/...'  # optional, for comment continuity
draft: true                    # drafts only
---
```

## Conversion script

To re-import posts from the source repo:

```bash
git clone --depth 1 https://github.com/Amit-Tomar/Amit-Tomar.github.io.git /tmp/amit-tomar-github-io
node scripts/migrate-posts.mjs
```

The script strips legacy HTML tags (`<small>`, `<big>`, etc.), replaces Jekyll `{{ site.baseurl }}` image paths, and fixes MDX-incompatible syntax (e.g. `<=` → `≤`).

## Site metadata updated

- `baseUrl`: `https://amit-tomar.github.io`
- Site title, description, nav, and footer reflect Amit Tomar branding
- Navigation: home, blog, projects, resume, contact
- Hand-written pages live as `app/**/page.mdx` (home, projects, resume, contact)

## What was not migrated

- Jekyll theme assets (`public/css/`, Lanyon/Poole layouts)
- `_site/` build output and `.jekyll-cache/`
- `simyog/` interactive demo (standalone Three.js app)
- `offer.html` (one-off page)
- Google Analytics 4 (`G-RZT92LF7P1`) via gtag.js in `components/layout/google-analytics.tsx` (replaces Jekyll Universal Analytics `UA-10025518-3`)
- Font Awesome icons (replaced with plain links/text)
