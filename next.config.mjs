import createMDX from '@next/mdx'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getLegacyRedirects } from './lib/redirects.mjs'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return getLegacyRedirects()
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      'remark-frontmatter',
      'remark-mdx-frontmatter',
      path.join(projectRoot, 'lib/remark-external-links.mjs'),
    ],
    rehypePlugins: [
      path.join(projectRoot, 'lib/rehype-external-links.mjs'),
    ],
  },
})

export default withMDX(nextConfig)
