import fs from 'fs'
import path from 'path'

const SOURCE_POSTS = '/tmp/amit-tomar-github-io/_posts'
const SOURCE_DRAFTS = '/tmp/amit-tomar-github-io/_drafts'
const TARGET_POSTS = '/app/portfolio-site/content/blog/posts'
const TARGET_DRAFTS = '/app/portfolio-site/content/blog/drafts'

const DISQUS_URLS = {
  'hello-world': 'https://amit-tomar.github.io/personal/2015/05/01/Hello-World/',
  'thesis-how-and-why':
    'https://amit-tomar.github.io/masters-at-iiitb/2015/06/18/Thesis-How-and-Why/',
  'chosing-computer-graphics-as-a-stream-at-iiitb':
    'https://amit-tomar.github.io/masters-at-iiitb/2015/08/27/Chosing-Computer-Graphics-As-A-Stream-At-IIITB/',
  'placements-to-and-not-tos':
    'https://amit-tomar.github.io/masters-at-iiitb/2017/10/06/Placements-To-And-Not-Tos/',
}

function parseJekyllFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) throw new Error(`Invalid frontmatter in ${filePath}`)

  const frontmatter = {}
  for (const line of match[1].split('\n')) {
    if (!line.trim() || line.startsWith('-') || line.startsWith('tags:')) continue
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue
    const key = line.slice(0, colonIndex).trim()
    const value = line.slice(colonIndex + 1).trim()
    frontmatter[key] = value
  }

  return { frontmatter, content: match[2].trim() }
}

function filenameToSlug(filename) {
  const base = path.basename(filename, path.extname(filename))
  const parts = base.split('-')
  if (parts.length >= 4 && /^\d{4}$/.test(parts[0])) {
    return parts.slice(3).join('-').toLowerCase()
  }
  return base.toLowerCase()
}

function filenameToDate(filename) {
  const base = path.basename(filename, path.extname(filename))
  const parts = base.split('-')
  if (parts.length >= 3 && /^\d{4}$/.test(parts[0])) {
    return `${parts[0]}-${parts[1]}-${parts[2]}`
  }
  return '2015-01-01'
}

function transformContent(content) {
  return content
    .replace(/\{\{\s*site\.baseurl\s*\}\}/g, '')
    .replace(/!\[([^\]]*)\]\(\s*\/images\//g, '![$1](/images/')
    .replace(/<center>/g, '')
    .replace(/<\/center>/g, '')
    .replace(/<\/?small>/gi, '')
    .replace(/<\/?big>/gi, '')
    .replace(/<\/?i>/gi, '')
    .replace(/<\/?sub>/gi, '')
    .replace(/<\/?sup>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<=/g, '≤')
    .replace(/<a\s+href=/g, '<a href=')
    .replace(/target="_blank"/g, '')
    .replace(/title="_blank"/g, '')
    .replace(/<hr[^>]*>/gi, '\n---\n')
    .replace(/__________/g, '\n---\n')
}

function summarize(content, title) {
  const text = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (text.length > 0) {
    return text.slice(0, 160).trim() + (text.length > 160 ? '...' : '')
  }
  return title
}

function toMdx({ frontmatter, content, slug, publishedAt, draft = false }) {
  const title = frontmatter.title || slug
  const summary = summarize(content, title)
  const disqusUrl = DISQUS_URLS[slug]
  const lines = [
    '---',
    `title: '${title.replace(/'/g, "''")}'`,
    `publishedAt: '${publishedAt}'`,
    `summary: '${summary.replace(/'/g, "''")}'`,
  ]
  if (frontmatter.category) {
    lines.push(`category: '${frontmatter.category.replace(/'/g, "''")}'`)
  }
  if (disqusUrl) {
    lines.push(`disqusUrl: '${disqusUrl}'`)
  }
  if (draft) {
    lines.push('draft: true')
  }
  lines.push('---', '', transformContent(content), '')
  return lines.join('\n')
}

function migrateDir(sourceDir, targetDir, draft = false) {
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true })

  const files = fs
    .readdirSync(sourceDir)
    .filter((f) => f.endsWith('.md') && !f.startsWith('.'))

  for (const file of files) {
    const slug = filenameToSlug(file)
    const publishedAt = filenameToDate(file)
    const parsed = parseJekyllFile(path.join(sourceDir, file))
    const mdx = toMdx({ ...parsed, slug, publishedAt, draft })
    fs.writeFileSync(path.join(targetDir, `${slug}.mdx`), mdx)
    console.log(`Wrote ${draft ? 'draft' : 'post'}: ${slug}.mdx`)
  }
}

// Remove template posts
for (const template of ['vim.mdx', 'static-typing.mdx', 'spaces-vs-tabs.mdx']) {
  const p = path.join(TARGET_POSTS, template)
  if (fs.existsSync(p)) {
    fs.unlinkSync(p)
    console.log(`Removed template: ${template}`)
  }
}

migrateDir(SOURCE_POSTS, TARGET_POSTS)
migrateDir(SOURCE_DRAFTS, TARGET_DRAFTS, true)
