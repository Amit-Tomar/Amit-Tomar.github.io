export const baseUrl = 'https://amit-tomar.github.io'

export const siteName = 'Amit Tomar'

export const defaultDescription =
  'Info about Amit Tomar and his blog. At the cusp of Arts and Computer Science.'

export const navItems: Record<string, { name: string }> = {
  '/': { name: 'Home' },
  '/blog': { name: 'Blog' },
  // '/projects': { name: 'Projects' }, // hidden from nav temporarily
  '/resume': { name: 'Resume' },
  '/contact': { name: 'Contact' },
}

export const staticRoutes = ['', '/blog', '/projects', '/contact', '/resume']
