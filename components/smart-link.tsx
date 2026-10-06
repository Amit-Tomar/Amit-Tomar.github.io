import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import {
  isInternalHref,
  shouldOpenInNewTab,
  toInternalPath,
} from '@/lib/link'

type SmartLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  href?: string
  children?: ReactNode
}

export function SmartLink({ href, children, className, ...props }: SmartLinkProps) {
  if (href == null || href === '') {
    return (
      <a className={className} {...props}>
        {children}
      </a>
    )
  }

  if (isInternalHref(href)) {
    if (href.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      )
    }
    return (
      <Link href={toInternalPath(href)} className={className}>
        {children}
      </Link>
    )
  }

  const newTab = shouldOpenInNewTab(href)
  return (
    <a
      href={href}
      className={className}
      {...props}
      {...(newTab
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      {children}
    </a>
  )
}
