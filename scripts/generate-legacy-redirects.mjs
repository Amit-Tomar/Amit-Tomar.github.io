import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getLegacyRedirects } from '../lib/redirects.mjs'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const publicRoot = path.join(projectRoot, '..', 'public')

function withTrailingSlash(destination) {
  if (destination === '/') {
    return '/'
  }
  return destination.endsWith('/') ? destination : `${destination}/`
}

function redirectHtml(destination) {
  const target = withTrailingSlash(destination)
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting…</title>
    <link rel="canonical" href="${target}" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <script>location.replace(${JSON.stringify(target)})</script>
  </head>
  <body>
    <p><a href="${target}">Continue</a></p>
  </body>
</html>
`
}

function writeRedirectAtPublicPath(publicPath, destination) {
  const normalized = publicPath.replace(/^\/+/, '')
  const targetPath = normalized.endsWith('.html')
    ? path.join(publicRoot, normalized)
    : path.join(publicRoot, normalized, 'index.html')

  fs.mkdirSync(path.dirname(targetPath), { recursive: true })
  fs.writeFileSync(targetPath, redirectHtml(destination), 'utf8')
}

function normalizeRoute(route) {
  const withoutIndex = route.replace(/\/index\.html$/, '')
  if (withoutIndex === '' || withoutIndex === '/') {
    return '/'
  }
  return withoutIndex.replace(/\/$/, '')
}

/** Only old Jekyll paths need static HTML redirects on GitHub Pages. */
function shouldEmitStaticRedirect(source, destination) {
  if (normalizeRoute(source) === normalizeRoute(destination)) {
    return false
  }

  if (source === '/posts.html' || source.startsWith('/posts')) {
    return true
  }

  return (
    source.startsWith('/personal/') || source.startsWith('/masters-at-iiitb/')
  )
}

const staleRedirectDirs = ['resume', 'contact', 'projects']

for (const dir of staleRedirectDirs) {
  fs.rmSync(path.join(publicRoot, dir), { recursive: true, force: true })
}

const redirects = await getLegacyRedirects()

for (const { source, destination } of redirects) {
  if (!shouldEmitStaticRedirect(source, destination)) {
    continue
  }
  if (source.endsWith('/index.html')) {
    writeRedirectAtPublicPath(source.slice(1), destination)
    continue
  }

  if (source.endsWith('/')) {
    writeRedirectAtPublicPath(source.slice(1, -1), destination)
    continue
  }

  if (source.endsWith('.html')) {
    writeRedirectAtPublicPath(source.slice(1), destination)
    continue
  }

  writeRedirectAtPublicPath(source.slice(1), destination)
}
