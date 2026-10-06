'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { navItems } from '@/lib/site'

// Target width (in px) of a single bump of the squiggle. Bumps are sized in real
// pixels so every label gets the same curvature regardless of its length.
const BUMP_WIDTH = 6

// Build a hand-drawn style squiggle spanning `width` px. The bump width is
// nudged slightly so a whole number of bumps fits the label exactly.
function buildSquiggle(width: number): string {
  const count = Math.max(1, Math.round(width / BUMP_WIDTH))
  const w = width / count
  return `M0,5 q${w / 2},-4 ${w},0` + ` t${w},0`.repeat(count - 1)
}

// `pathLength` is pinned to 100 so the dash draw/erase math is independent of
// the actual rendered width of each nav item.
function NavUnderline({
  state,
  dir,
}: {
  state: SquiggleState
  dir: 'ltr' | 'rtl'
}) {
  const ref = useRef<SVGSVGElement>(null)
  const [width, setWidth] = useState(BUMP_WIDTH * 10)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setWidth(el.getBoundingClientRect().width || BUMP_WIDTH)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <svg
      ref={ref}
      className="nav-underline"
      data-state={state}
      data-dir={dir}
      viewBox={`0 0 ${width} 10`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={buildSquiggle(width)} pathLength={100} />
    </svg>
  )
}

// Map the current pathname to one of the top-level nav entries so that nested
// routes (e.g. /blog/some-post) still highlight their section.
function getActivePath(pathname: string): string {
  if (pathname === '/') return '/'
  const match = Object.keys(navItems)
    .filter((path) => path !== '/')
    .find((path) => pathname === path || pathname.startsWith(path + '/'))
  return match ?? '/'
}

type SquiggleState = 'draw' | 'erase' | 'visible' | 'hidden'

export function Navbar() {
  const pathname = usePathname()
  const active = getActivePath(pathname ?? '/')

  // The underline marks only the active route (not hover). We remember the
  // previously active item so that, on client-side navigation, the old
  // underline is erased while the new one is drawn.
  const shown = active
  // Initialize to null so that on the very first render (page load) the active
  // item is in the "draw" state and animates in, instead of appearing instantly.
  const prevShownRef = useRef<string | null>(null)
  const prevShown = prevShownRef.current
  useEffect(() => {
    prevShownRef.current = shown
  })

  // Draw direction: if the newly selected tab is to the left of the previously
  // selected one, draw right-to-left; otherwise left-to-right.
  const order = Object.keys(navItems)
  const dir: 'ltr' | 'rtl' =
    prevShown && order.indexOf(shown) < order.indexOf(prevShown) ? 'rtl' : 'ltr'

  function stateFor(path: string): SquiggleState {
    const isShown = path === shown
    const wasShown = path === prevShown
    if (isShown && wasShown) return 'visible'
    if (isShown) return 'draw'
    if (wasShown) return 'erase'
    return 'hidden'
  }

  return (
    <header
      className="sticky top-0 z-40 mb-8 border-b border-neutral-200/80 bg-white/75 backdrop-blur-md backdrop-saturate-150 dark:border-neutral-800/80 dark:bg-black/75"
    >
      <div className="mx-4 max-w-xl px-2 md:px-0 lg:mx-auto">
        <nav
          className="-ml-[8px] flex flex-row items-start tracking-tight fade md:relative md:overflow-auto scroll-pr-6"
          id="nav"
        >
          <div className="flex flex-row space-x-0 py-2 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle py-1 px-2 m-1"
                >
                  <span className="relative">
                    {name}
                    <NavUnderline state={stateFor(path)} dir={dir} />
                  </span>
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
