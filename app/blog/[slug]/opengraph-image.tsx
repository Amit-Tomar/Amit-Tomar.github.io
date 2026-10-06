import { ImageResponse } from 'next/og'
import { getBlogPosts } from '@/lib/blog'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export const alt = 'Blog post'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPosts().find((entry) => entry.slug === slug)
  const title = post?.metadata.title ?? 'Blog'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: 48,
        }}
      >
        <h2 style={{ fontSize: 48, fontWeight: 700, textAlign: 'center' }}>
          {title}
        </h2>
      </div>
    ),
    { ...size },
  )
}
