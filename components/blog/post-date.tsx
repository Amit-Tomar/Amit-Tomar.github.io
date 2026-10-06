import type { ReactNode } from 'react'

export function PostDate({
  children,
  inProse = false,
}: {
  children: ReactNode
  inProse?: boolean
}) {
  return (
    <div className={inProse ? 'post-date post-date-in-prose' : 'post-date'}>
      {children}
    </div>
  )
}

export function BlogDate({ children }: { children: ReactNode }) {
  return <PostDate inProse>{children}</PostDate>
}
