import { notFound } from 'next/navigation'
import { formatDate, getBlogPosts } from '@/lib/blog'
import { baseUrl } from '@/lib/site'
import { DisqusComments } from '@/components/blog/disqus'
import { PostBackLink } from '@/components/blog/post-back-link'
import { PostDate } from '@/components/blog/post-date'

export const dynamicParams = false

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image.startsWith('http')
      ? image
      : `${baseUrl}${image}`
    : `${baseUrl}/blog/${post.slug}/opengraph-image`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const { default: Content } = await import(
    `@/content/blog/posts/${slug}.mdx`
  )

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/blog/${post.slug}/opengraph-image`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Amit Tomar',
            },
          }),
        }}
      />
      <PostBackLink />
      <h1 className="title font-semibold text-4xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8">
        <PostDate>{formatDate(post.metadata.publishedAt)}</PostDate>
      </div>
      <article className="prose">
        <Content />
      </article>
      {post.metadata.disqusUrl && (
        <DisqusComments
          url={post.metadata.disqusUrl}
          title={post.metadata.title}
          identifier={post.metadata.disqusUrl}
        />
      )}
    </section>
  )
}
