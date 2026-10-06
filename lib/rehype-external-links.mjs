import { isInternalHref, shouldOpenInNewTab } from './link.mjs'

/** @param {import('hast').Root | import('hast').Element} node @param {(node: import('hast').Element) => void} fn */
function visitElements(node, fn) {
  if (node.type !== 'element') {
    return
  }
  fn(node)
  if (node.children) {
    for (const child of node.children) {
      visitElements(child, fn)
    }
  }
}

/** @type {import('unified').Plugin<[], import('hast').Root>} */
export default function rehypeExternalLinks() {
  return (tree) => {
    visitElements(tree, (node) => {
      if (node.tagName !== 'a') {
        return
      }
      const href = node.properties?.href
      if (typeof href !== 'string') {
        return
      }
      if (shouldOpenInNewTab(href)) {
        node.properties.target = '_blank'
        node.properties.rel = 'noopener noreferrer'
        return
      }
      if (isInternalHref(href) && node.properties.target === '_blank') {
        delete node.properties.target
        const rel = node.properties.rel
        if (typeof rel === 'string') {
          const cleaned = rel
            .split(/\s+/)
            .filter((part) => part !== 'noopener' && part !== 'noreferrer')
            .join(' ')
          if (cleaned) {
            node.properties.rel = cleaned
          } else {
            delete node.properties.rel
          }
        }
      }
    })
  }
}
