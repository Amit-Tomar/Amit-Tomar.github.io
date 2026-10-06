const INTERNAL_HOSTS = new Set([
  'amit-tomar.github.io',
  'localhost',
  '127.0.0.1',
])

/** @param {string | null | undefined} href */
export function isInternalHref(href) {
  if (href == null || href === '') {
    return false
  }
  const trimmed = String(href).trim()
  if (trimmed.startsWith('#')) {
    return true
  }
  if (trimmed.startsWith('/')) {
    return true
  }
  const lower = trimmed.toLowerCase()
  if (lower.startsWith('mailto:') || lower.startsWith('tel:')) {
    return false
  }
  try {
    if (lower.startsWith('http://') || lower.startsWith('https://')) {
      return INTERNAL_HOSTS.has(new URL(trimmed).host)
    }
    if (trimmed.startsWith('//')) {
      return INTERNAL_HOSTS.has(new URL(`https:${trimmed}`).host)
    }
  } catch {
    return false
  }
  return false
}

/** @param {string} href */
export function shouldOpenInNewTab(href) {
  if (isInternalHref(href)) {
    return false
  }
  const lower = String(href).trim().toLowerCase()
  if (lower.startsWith('mailto:') || lower.startsWith('tel:')) {
    return false
  }
  return true
}

/** @param {string} href */
export function toInternalPath(href) {
  if (href.startsWith('#') || href.startsWith('/')) {
    return href
  }
  const url = new URL(href)
  return `${url.pathname}${url.search}${url.hash}`
}
