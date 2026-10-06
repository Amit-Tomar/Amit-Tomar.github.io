'use client'

import { useEffect } from 'react'

type DisqusCommentsProps = {
  url: string
  title: string
  identifier: string
}

declare global {
  interface Window {
    DISQUS?: {
      reset: (config: { reload: boolean; config: () => void }) => void
    }
    disqus_config?: () => void
  }
}

const DISQUS_SHORTNAME = 'amittomar'

export function DisqusComments({ url, title, identifier }: DisqusCommentsProps) {
  useEffect(() => {
    window.disqus_config = function () {
      this.page.url = url
      this.page.title = title
      this.page.identifier = identifier
    }

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: window.disqus_config,
      })
      return
    }

    const script = document.createElement('script')
    script.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`
    script.async = true
    script.setAttribute('data-timestamp', String(+new Date()))
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [url, title, identifier])

  return (
    <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        Comments
      </h2>
      <div id="disqus_thread" />
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus</a>.
      </noscript>
    </div>
  )
}
