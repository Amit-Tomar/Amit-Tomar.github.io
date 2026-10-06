import { existsSync } from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { SmartLink } from '@/components/smart-link'
import { ProjectResourceLinks } from '@/components/project-resource-links'

function ExternalLink({
  href,
  children,
  className = 'hover:underline',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <SmartLink href={href} className={className}>
      {children}
    </SmartLink>
  )
}

function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  const publicPath = src.startsWith('/') ? src.slice(1) : src
  if (!existsSync(path.join(process.cwd(), 'public', publicPath))) {
    return (
      <div
        aria-hidden="true"
        className="h-12 w-12 shrink-0 rounded bg-neutral-200 dark:bg-neutral-800"
      />
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className="h-12 w-12 shrink-0 object-contain"
    />
  )
}

function RoleBody({
  title,
  employment,
  dates,
  location,
  companyName,
  companyHref,
  children,
}: {
  title: string
  employment?: string
  dates?: string
  location?: string
  companyName?: string
  companyHref?: string
  children?: ReactNode
}) {
  const employmentSuffix =
    companyName &&
    companyHref &&
    employment &&
    employment.startsWith(`${companyName} ·`)
      ? employment.slice(companyName.length)
      : null

  return (
    <div>
      <div className="font-semibold">{title}</div>
      {employment && (
        <div className="text-sm">
          {employmentSuffix !== null && companyName && companyHref ? (
            <>
              <ExternalLink href={companyHref}>{companyName}</ExternalLink>
              {employmentSuffix}
            </>
          ) : (
            employment
          )}
        </div>
      )}
      {dates && (
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {dates}
        </div>
      )}
      {location && (
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {location}
        </div>
      )}
      {children && <div className="mt-3 text-sm">{children}</div>}
    </div>
  )
}

function NestedTimelineMarker({ showLine }: { showLine: boolean }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute top-2 left-0 z-10 h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-600"
      />
      {showLine && (
        <span
          aria-hidden="true"
          className="absolute top-6 -bottom-4 left-[3px] w-0 border-l border-neutral-200 dark:border-neutral-800"
        />
      )}
    </>
  )
}

export function ResumeTimeline({ children }: { children: ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-2 text-xl font-semibold">Experience</h2>
      <ul className="resume-timeline overflow-visible">{children}</ul>
    </section>
  )
}

function TimelineRow({
  name,
  logo,
  href,
  children,
}: {
  name: string
  logo: string
  href?: string
  children: ReactNode
}) {
  return (
    <li className="resume-timeline-item flex items-stretch gap-3 overflow-visible">
      <div className="flex shrink-0 gap-2 self-stretch overflow-visible">
        <div className="resume-timeline-marker relative w-3 shrink-0 self-stretch overflow-visible">
          <span
            aria-hidden="true"
            className="absolute top-11 left-1/2 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-400 dark:bg-neutral-600"
          />
          <span
            aria-hidden="true"
            className="resume-timeline-line absolute top-12 left-1/2 z-0 h-[calc(100%-3rem+2.75rem)] w-0 -translate-x-1/2 border-l border-neutral-200 dark:border-neutral-800"
          />
        </div>
        <div className="py-5">
          {href ? (
            <ExternalLink href={href} className="block rounded hover:opacity-80">
              <CompanyLogo src={logo} alt={`${name} logo`} />
            </ExternalLink>
          ) : (
            <CompanyLogo src={logo} alt={`${name} logo`} />
          )}
        </div>
      </div>
      <div className="resume-timeline-content min-w-0 flex-1 border-b border-neutral-200 py-5 dark:border-neutral-800">
        {children}
      </div>
    </li>
  )
}

export function ResumePatent({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <div className="mt-3 text-sm">
      <strong>Patent:</strong>{' '}
      <ExternalLink href={href}>{children}</ExternalLink>
    </div>
  )
}

export function ResumeEducation({
  degree,
  years,
  children,
}: {
  degree?: string
  years?: string
  children: ReactNode
}) {
  return (
    <>
      {degree && <div className="text-sm">{degree}</div>}
      {years && (
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {years}
        </div>
      )}
      <ol className="mt-4 space-y-6">{children}</ol>
    </>
  )
}

export function ResumeEducationRole({
  title,
  grade,
  thesis,
  thesisUrl,
  children,
  showNestedLine = true,
}: {
  title: string
  grade?: string
  thesis?: string
  thesisUrl?: string
  children?: ReactNode
  showNestedLine?: boolean
}) {
  return (
    <li className="relative pl-6">
      <NestedTimelineMarker showLine={showNestedLine} />
      <div>
        <div className="font-semibold">{title}</div>
        {grade && <div className="mt-3 text-sm">Grade: {grade}</div>}
        {thesis && (
          <div className="mt-3 text-sm">
            <strong>Thesis:</strong>{' '}
            {thesisUrl ? (
              <ExternalLink href={thesisUrl}>{thesis}</ExternalLink>
            ) : (
              thesis
            )}
          </div>
        )}
        {children}
      </div>
    </li>
  )
}

export function ResumePublication({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <div className="mt-3 text-sm">
      <strong>Publication:</strong>{' '}
      <ExternalLink href={href}>{children}</ExternalLink>
    </div>
  )
}

export function ResumeProjectList({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3 text-sm">
      <strong>Projects:</strong>
      <ul className="mt-1 list-disc space-y-2 pl-5">{children}</ul>
    </div>
  )
}

export function ResumeProject({
  title,
  codeUrl,
  videoUrl,
}: {
  title: string
  codeUrl?: string
  videoUrl?: string
}) {
  return (
    <li>
      <span className="flex items-start justify-between gap-3">
        <span className="min-w-0">{title}</span>
        <ProjectResourceLinks codeUrl={codeUrl} videoUrl={videoUrl} />
      </span>
    </li>
  )
}

export function ResumeLine({ children }: { children: ReactNode }) {
  return <div className="mt-3 text-sm">{children}</div>
}

export function ResumeMultiRoles({ children }: { children: ReactNode }) {
  return <ol className="mt-4 space-y-6">{children}</ol>
}

export function ResumeMultiRole({
  title,
  employment,
  dates,
  location,
  companyName,
  companyHref,
  children,
  showNestedLine = true,
}: {
  title: string
  employment?: string
  dates?: string
  location?: string
  companyName?: string
  companyHref?: string
  children?: ReactNode
  showNestedLine?: boolean
}) {
  return (
    <li className="relative pl-6">
      <NestedTimelineMarker showLine={showNestedLine} />
      <RoleBody
        title={title}
        employment={employment}
        dates={dates}
        location={location}
        companyName={companyName}
        companyHref={companyHref}
      >
        {children}
      </RoleBody>
    </li>
  )
}

export function ResumeSingleRoleCompany({
  name,
  logo,
  href,
  title,
  employment,
  dates,
  location,
  children,
}: {
  name: string
  logo: string
  href?: string
  title: string
  employment?: string
  dates?: string
  location?: string
  children?: ReactNode
}) {
  return (
    <TimelineRow name={name} logo={logo} href={href}>
      <RoleBody
        title={title}
        employment={employment}
        dates={dates}
        location={location}
        companyName={name}
        companyHref={href}
      >
        {children}
      </RoleBody>
    </TimelineRow>
  )
}

export function ResumeMultiRoleCompany({
  name,
  logo,
  href,
  tenure,
  children,
}: {
  name: string
  logo: string
  href?: string
  tenure?: string
  children: ReactNode
}) {
  return (
    <TimelineRow name={name} logo={logo} href={href}>
      <div>
        <div className="font-semibold">
          {href ? <ExternalLink href={href}>{name}</ExternalLink> : name}
        </div>
        {tenure && <div className="text-sm">{tenure}</div>}
        {children}
      </div>
    </TimelineRow>
  )
}

export function ResumeEducationCompany({
  name,
  logo,
  href,
  degree,
  years,
  grade,
  thesis,
  thesisUrl,
  children,
}: {
  name: string
  logo: string
  href?: string
  degree?: string
  years?: string
  grade?: string
  thesis?: string
  thesisUrl?: string
  children?: ReactNode
}) {
  return (
    <TimelineRow name={name} logo={logo} href={href}>
      <div>
        <div className="font-semibold">
          {href ? <ExternalLink href={href}>{name}</ExternalLink> : name}
        </div>
        {degree && <div className="text-sm">{degree}</div>}
        {years && (
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {years}
          </div>
        )}
        {grade && <div className="mt-3 text-sm">Grade: {grade}</div>}
        {thesis && (
          <div className="mt-3 text-sm">
            <strong>Thesis:</strong>{' '}
            {thesisUrl ? (
              <ExternalLink href={thesisUrl}>{thesis}</ExternalLink>
            ) : (
              thesis
            )}
          </div>
        )}
        {children}
      </div>
    </TimelineRow>
  )
}
