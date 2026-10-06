import { ImageResponse } from 'next/og'
import { siteName } from '@/lib/site'

export const dynamic = 'force-static'

export const alt = siteName
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: 48,
        }}
      >
        <h2 style={{ fontSize: 56, fontWeight: 700 }}>{siteName}</h2>
      </div>
    ),
    { ...size },
  )
}
