import type { ReactNode } from 'react'

export function Prose({
  children,
  home = false,
}: {
  children: ReactNode
  home?: boolean
}) {
  return (
    <article className={home ? 'prose home' : 'prose'}>{children}</article>
  )
}
