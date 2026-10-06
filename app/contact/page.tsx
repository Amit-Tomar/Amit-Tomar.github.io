import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Amit Tomar.',
}

const links = [
  {
    name: 'GitHub',
    href: 'https://github.com/Amit-Tomar',
    description: 'Might share a code or two.',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/agent.napster',
    description: 'More for friends.',
  },
  {
    name: 'LinkedIn',
    href: 'https://in.linkedin.com/in/amittomar1',
    description: 'If I know you professionally.',
  },
  {
    name: 'Behance',
    href: 'https://www.behance.net/amitTomar',
    description: 'Happy to showcase some icons, covers, and posters.',
  },
  {
    name: 'Stack Overflow',
    href: 'http://stackoverflow.com/users/1093223/amit-tomar',
    description: 'In case you would like to follow QML questions and answers.',
  },
  {
    name: 'Email',
    href: 'mailto:amit.tomar@iiitb.org',
    description: 'amit.tomar@iiitb.org',
  },
]

export default function ContactPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Contact</h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        You can catch me up on one of these platforms:
      </p>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              {link.name}
            </a>
            <span className="text-neutral-600 dark:text-neutral-400">
              {' '}
              — {link.description}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <a href="/resume" className="font-medium hover:underline">
          View resume
        </a>
        {' · '}
        <a
          href="/assets/AmitTomar_Resume.pdf"
          className="font-medium hover:underline"
        >
          Download resume (PDF)
        </a>
      </p>
    </section>
  )
}
