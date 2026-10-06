'use client'

import { useEffect, useState } from 'react'

const SCROLL_THRESHOLD_PX = 120

export function BlogScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-4 z-40 inline-flex items-center justify-center rounded-md border border-neutral-200/80 bg-white/90 p-3 text-neutral-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-neutral-900 dark:border-neutral-800/80 dark:bg-black/90 dark:text-neutral-400 dark:hover:bg-black dark:hover:text-neutral-100"
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up text-lg" aria-hidden="true" />
    </button>
  )
}
