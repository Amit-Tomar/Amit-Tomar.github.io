import Image from 'next/image'
import { SmartLink } from '@/components/smart-link'
import { highlight } from 'sugar-high'
import React from 'react'
import type { MDXComponents } from 'mdx/types'
import { Prose } from '@/components/mdx/prose'
import { BlogDate } from '@/components/blog/post-date'
import {
  Project,
  ProjectSection,
  ProjectMeta,
  ProjectDescription,
  ProjectDate,
} from '@/components/projects/project'
import { ContactLink, ContactLinks } from '@/components/contact/contact-link'
import {
  ResumeTimeline,
  ResumeSingleRoleCompany,
  ResumeMultiRoleCompany,
  ResumeEducationCompany,
  ResumeEducation,
  ResumeEducationRole,
  ResumePublication,
  ResumeProjectList,
  ResumeProject,
  ResumeLine,
  ResumePatent,
  ResumeMultiRoles,
  ResumeMultiRole,
} from '@/components/resume/resume'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function RoundedImage(props) {
  return (
    <Image
      alt={props.alt}
      className="rounded-lg border border-neutral-200 dark:border-neutral-700"
      {...props}
    />
  )
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

const headingClass: Record<number, string> = {
  1: 'mb-8 text-2xl font-semibold tracking-tighter',
  2: 'mb-4 text-lg font-semibold tracking-tight',
  3: 'mb-2 text-base font-semibold tracking-tight',
}

function createHeading(level: number) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    const className = headingClass[level] ?? ''
    return React.createElement(
      `h${level}`,
      { id: slug, className },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: SmartLink,
  code: Code,
  Table,
  BlogDate,
  Prose,
  Project,
  ProjectSection,
  ProjectMeta,
  ProjectDescription,
  ProjectDate,
  ContactLink,
  ContactLinks,
  ResumeTimeline,
  ResumeSingleRoleCompany,
  ResumeMultiRoleCompany,
  ResumeEducationCompany,
  ResumeEducation,
  ResumeEducationRole,
  ResumePublication,
  ResumeProjectList,
  ResumeProject,
  ResumeLine,
  ResumePatent,
  ResumeMultiRoles,
  ResumeMultiRole,
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
