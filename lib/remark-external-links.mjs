import { isInternalHref, shouldOpenInNewTab } from './link.mjs'

/** @param {import('mdast').Root} node @param {(node: import('mdast').Root | import('mdast').Content) => void} fn */
function visitAll(node, fn) {
  fn(node)
  if ('children' in node && Array.isArray(node.children)) {
    for (const child of node.children) {
      visitAll(child, fn)
    }
  }
}

/** @param {import('mdast').MdxJsxAttribute[]} attributes */
function getStringHref(attributes) {
  if (!attributes) {
    return undefined
  }
  for (const attr of attributes) {
    if (attr.type === 'mdxJsxAttribute' && attr.name === 'href') {
      if (typeof attr.value === 'string') {
        return attr.value
      }
    }
  }
  return undefined
}

/** @param {import('mdast').MdxJsxAttribute[]} attributes */
function hasMdxAttribute(attributes, name) {
  return (
    attributes?.some(
      (attr) => attr.type === 'mdxJsxAttribute' && attr.name === name
    ) ?? false
  )
}

/** @param {import('mdast').MdxJsxAttribute[]} attributes @param {string} name @param {string} value */
function addMdxAttribute(attributes, name, value) {
  if (hasMdxAttribute(attributes, name)) {
    return attributes
  }
  return [
    ...attributes,
    { type: 'mdxJsxAttribute', name, value },
  ]
}

/** @param {string} html */
function patchRawHtmlAnchors(html) {
  return html.replace(/<a\s+([^>]*?)>/gi, (match, attrs) => {
    const hrefMatch = attrs.match(/\bhref\s*=\s*["']([^"']+)["']/i)
    if (!hrefMatch) {
      return match
    }
    const href = hrefMatch[1]
    if (!shouldOpenInNewTab(href)) {
      return match
    }
    if (/\btarget\s*=/i.test(attrs)) {
      return match
    }
    return `<a ${attrs} target="_blank" rel="noopener noreferrer">`
  })
}

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function remarkExternalLinks() {
  return (tree) => {
    visitAll(tree, (node) => {
      if (node.type === 'link') {
        if (!shouldOpenInNewTab(node.url)) {
          return
        }
        const data = node.data || (node.data = {})
        const hProperties = data.hProperties || (data.hProperties = {})
        hProperties.target = '_blank'
        hProperties.rel = 'noopener noreferrer'
        return
      }

      if (node.type === 'html' && typeof node.value === 'string') {
        node.value = patchRawHtmlAnchors(node.value)
        return
      }

      if (
        node.type === 'mdxJsxTextElement' ||
        node.type === 'mdxJsxFlowElement'
      ) {
        if (node.name !== 'a') {
          return
        }
        const href = getStringHref(node.attributes)
        if (href == null || !shouldOpenInNewTab(href)) {
          if (href != null && isInternalHref(href) && hasMdxAttribute(node.attributes, 'target')) {
            node.attributes = node.attributes.filter(
              (attr) =>
                !(
                  attr.type === 'mdxJsxAttribute' &&
                  (attr.name === 'target' || attr.name === 'rel')
                )
            )
          }
          return
        }
        node.attributes = addMdxAttribute(node.attributes, 'target', '_blank')
        node.attributes = addMdxAttribute(
          node.attributes,
          'rel',
          'noopener noreferrer'
        )
      }
    })
  }
}
