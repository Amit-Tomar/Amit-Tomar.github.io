/** @type {import('next').NextConfig['redirects']} */
export async function getLegacyRedirects() {
  const blogRedirects = [
    {
      oldPath: '/personal/2015/05/01/Hello-World',
      slug: 'hello-world',
    },
    {
      oldPath: '/masters-at-iiitb/2015/06/18/Thesis-How-and-Why',
      slug: 'thesis-how-and-why',
    },
    {
      oldPath:
        '/masters-at-iiitb/2015/08/27/Chosing-Computer-Graphics-As-A-Stream-At-IIITB',
      slug: 'chosing-computer-graphics-as-a-stream-at-iiitb',
    },
    {
      oldPath: '/masters-at-iiitb/2017/10/06/Placements-To-And-Not-Tos',
      slug: 'placements-to-and-not-tos',
    },
  ]

  const redirects = []

  for (const { oldPath, slug } of blogRedirects) {
    const destination = `/blog/${slug}/`
    redirects.push(
      {
        source: oldPath,
        destination,
        permanent: true,
      },
      {
        source: `${oldPath}/`,
        destination,
        permanent: true,
      },
      {
        source: `${oldPath}/index.html`,
        destination,
        permanent: true,
      }
    )
  }

  // Legacy Jekyll list URL only (/posts/, posts.html). Do not add /resume or /contact
  // here — with trailingSlash they fight Next and cause redirect loops in dev.
  const pageRedirects = [
    { source: '/posts', destination: '/blog/' },
    { source: '/posts.html', destination: '/blog/' },
  ]

  for (const { source, destination } of pageRedirects) {
    if (source.endsWith('.html')) {
      redirects.push({
        source,
        destination,
        permanent: true,
      })
      continue
    }

    redirects.push(
      {
        source: `${source}/`,
        destination,
        permanent: true,
      },
      {
        source: `${source}/index.html`,
        destination,
        permanent: true,
      }
    )
  }

  return redirects
}
