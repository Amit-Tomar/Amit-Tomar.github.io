'use client'

import { useRouter } from 'next/navigation'

export function PostBackLink() {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mb-6 inline-flex items-center justify-center rounded-md p-2 -ml-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
      aria-label="Go back to previous page"
    >
      <i className="fa-solid fa-arrow-left text-lg" aria-hidden="true" />
    </button>
  )
}
