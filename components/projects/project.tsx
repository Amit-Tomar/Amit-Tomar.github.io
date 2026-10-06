import type { ReactNode } from 'react'

export function ProjectSection({
  title,
  children,
  className = 'mb-10',
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <>
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{title}</h2>
      <ul className={`${className} list-disc space-y-8 pl-5`}>{children}</ul>
    </>
  )
}

export function ProjectDate({ children }: { children: ReactNode }) {
  return (
    <span className="text-sm text-neutral-600 dark:text-neutral-400">
      {' '}
      — {children}
    </span>
  )
}

export function ProjectMeta({ children }: { children: ReactNode }) {
  return (
    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
      {children}
    </p>
  )
}

export function ProjectDescription({ children }: { children: ReactNode }) {
  return (
    <p className="mt-2 text-neutral-600 dark:text-neutral-400">{children}</p>
  )
}

export function Project({
  id,
  title,
  dates,
  children,
}: {
  id?: string
  title?: string
  dates?: string
  children: ReactNode
}) {
  return (
    <li id={id} className={id ? undefined : 'space-y-0'}>
      {title ? <strong>{title}</strong> : null}
      {dates ? <ProjectDate>{dates}</ProjectDate> : null}
      {children}
    </li>
  )
}
