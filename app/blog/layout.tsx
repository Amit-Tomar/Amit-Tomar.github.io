import { BlogScrollToTop } from '@/components/blog/scroll-to-top'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <BlogScrollToTop />
    </>
  )
}
