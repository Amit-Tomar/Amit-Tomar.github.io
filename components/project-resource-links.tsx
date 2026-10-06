import { SmartLink } from '@/components/smart-link'

export function ProjectResourceLinks({
  codeUrl,
  videoUrl,
}: {
  codeUrl?: string
  videoUrl?: string
}) {
  if (!codeUrl && !videoUrl) {
    return null
  }

  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 text-neutral-600 dark:text-neutral-400">
      {codeUrl && (
        <SmartLink
          href={codeUrl}
          aria-label="GitHub repository"
          className="hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <i className="fa-brands fa-github text-sm" aria-hidden="true" />
        </SmartLink>
      )}
      {videoUrl && (
        <SmartLink
          href={videoUrl}
          aria-label="Running demo on YouTube"
          className="hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <i className="fa-brands fa-youtube text-sm" aria-hidden="true" />
        </SmartLink>
      )}
    </span>
  )
}
