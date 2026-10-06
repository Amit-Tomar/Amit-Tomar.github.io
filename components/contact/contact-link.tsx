import { SmartLink } from '@/components/smart-link'

export function ContactLink({
  name,
  icon,
  color,
  href,
  children,
}: {
  name: string
  icon: string
  color: string
  href: string
  children: React.ReactNode
}) {
  return (
    <div className="contact-link-row">
      <SmartLink
        href={href}
        className="group inline-flex items-center gap-2 font-medium"
      >
        <i className={`${icon} ${color} w-4 text-center`} aria-hidden="true" />
        <span className="underline transition-all decoration-neutral-400/50 dark:decoration-neutral-600/50 group-hover:decoration-neutral-400 dark:group-hover:decoration-neutral-600 underline-offset-2 decoration-[0.1em]">
          {name}
        </span>
      </SmartLink>
      <span className="text-neutral-600 dark:text-neutral-400">
        {' '}
        — {children}
      </span>
    </div>
  )
}

export function ContactLinks({ children }: { children: React.ReactNode }) {
  return <div className="contact-links space-y-4">{children}</div>
}
