import type { ReactNode, SVGAttributes } from 'react'

const diagramFontSize = '2.6rem'
const diagramStrokeWidth = 6

const figureWrapperClass = 'my-4 flex w-full flex-col items-center'

const diagramClass =
  'thesis-timeline-figure w-full font-sans text-[2.6rem] leading-normal text-neutral-800 dark:text-neutral-200'

const lineClass = 'stroke-current'
const textClass = 'fill-current'

function SvgText({
  x,
  y,
  children,
  fontSize = diagramFontSize,
  ...rest
}: {
  x: number
  y: number
  children: ReactNode
  fontSize?: string
} & SVGAttributes<SVGTextElement>) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      className={textClass}
      style={{ fontSize }}
      {...rest}
    >
      {children}
    </text>
  )
}

function StackedLabel({
  x,
  y,
  lines,
  fontSize = diagramFontSize,
}: {
  x: number
  y: number
  lines: string[]
  fontSize?: string
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      className={textClass}
      style={{ fontSize }}
    >
      {lines.map((line, i) => (
        <tspan key={line} x={x} dy={i === 0 ? 0 : '1.25em'}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

export function ThesisUnplannedFigure() {
  return (
    <figure className={figureWrapperClass}>
      <div className={diagramClass} aria-label="How most thesis work out">
      <svg
        viewBox="0 0 1476 616"
        className="h-auto w-full"
        role="img"
        aria-hidden
      >
        <g
          className={lineClass}
          fill="none"
          strokeWidth={diagramStrokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        >
          <path d="M78 293 H1404" />
          <path
            d="M78 293 V313 M299 293 V313 M528 293 V313 M752 293 V313 M994 293 V313 M1226 293 V313 M1404 293 V313"
          />
          <path d="M76 179 H528 M76 164 V194 M528 164 V194" />
          <path d="M527 440 H749 M527 426 V455 M749 426 V455" />
          <path d="M752 179 H1103 M752 164 V194 M1103 164 V194" />
          <path d="M1105 440 H1328 M1105 426 V455 M1328 426 V455" />
        </g>
        <g className={textClass}>
          <SvgText x={(76 + 528) / 2} y={147}>Reading papers</SvgText>
          <SvgText x={(752 + 1103) / 2} y={131}>Implementation</SvgText>
          <SvgText x={78} y={366}>Jan</SvgText>
          <SvgText x={299} y={366}>Feb</SvgText>
          <SvgText x={528} y={366}>March</SvgText>
          <SvgText x={752} y={366}>April</SvgText>
          <SvgText x={994} y={366}>May</SvgText>
          <SvgText x={1226} y={366}>June</SvgText>
          <SvgText x={(527 + 749) / 2} y={533}>Deciding topic</SvgText>
          <SvgText x={(1105 + 1328) / 2} y={533}>Documentation</SvgText>
        </g>
      </svg>
      </div>
      <figcaption>How most thesis work out</figcaption>
    </figure>
  )
}

export function ThesisPlannedFigure() {
  return (
    <figure className={figureWrapperClass}>
      <div
        className={diagramClass}
        aria-label="What ideal thesis would look like"
      >
      <svg
        viewBox="0 0 2048 979"
        className="h-auto w-full"
        role="img"
        aria-hidden
      >
        <g
          className={lineClass}
          fill="none"
          strokeWidth={diagramStrokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        >
          <path d="M221 390 H1753" />
          <path
            d="M221 370 V410 M620 375 V405 M809 375 V405 M1003 375 V405 M1196 375 V405 M1403 375 V405 M1601 375 V405 M1753 375 V405"
          />
          <path d="M225 320 H616 M225 307 V334 M616 307 V334" />
          <path d="M618 519 H910 M618 505 V533 M910 505 V533" />
          <path d="M910 349 H1113 M910 335 V363 M1113 335 V363" />
          <path d="M1112 516 H1599 M1112 502 V530 M1599 502 V530" />
          <path d="M617 770 H1718 M617 756 V784 M1718 756 V784" />
          <path d="M410 416 C412 505, 352 567, 249 579" />
          <path d="M1118 318 C1170 205, 1245 181, 1336 223" />
          <path d="M1322 198 L1338 223 L1309 230" />
        </g>
        <g className={textClass}>
          <SvgText x={(225 + 616) / 2} y={296}>Literature Survey</SvgText>
          <StackedLabel
            x={170}
            y={527}
            lines={['Third Sem', 'Reading', 'Elective']}
          />
          <SvgText x={620} y={458}>Jan</SvgText>
          <SvgText x={809} y={458}>Feb</SvgText>
          <SvgText x={1003} y={458}>March</SvgText>
          <SvgText x={1196} y={458}>April</SvgText>
          <SvgText x={1403} y={458}>May</SvgText>
          <SvgText x={1601} y={458}>June</SvgText>
          <SvgText x={(618 + 910) / 2} y={588}>Deciding Topic</SvgText>
          <StackedLabel
            x={(910 + 1113) / 2}
            y={70}
            lines={[
              'Learn',
              'Technology',
              'and',
              'Implement',
              'Basic Idea',
            ]}
          />
          <SvgText x={1410} y={287}>Mid-Term Validation</SvgText>
          <SvgText x={(1112 + 1599) / 2} y={561}>
            Core Implementation
          </SvgText>
          <SvgText x={(617 + 1718) / 2} y={832}>Documentation</SvgText>
        </g>
      </svg>
      </div>
      <figcaption>What ideal thesis would look like!</figcaption>
    </figure>
  )
}
