import type { HTMLAttributes, ReactNode } from "react"

const PHONE_WIDTH = 433
const PHONE_HEIGHT = 882
const SCREEN_X = 21.25
const SCREEN_Y = 19.25
const SCREEN_WIDTH = 389.5
const SCREEN_HEIGHT = 843.5
const SCREEN_RADIUS = 55.75

const LEFT_PCT = (SCREEN_X / PHONE_WIDTH) * 100
const TOP_PCT = (SCREEN_Y / PHONE_HEIGHT) * 100
const WIDTH_PCT = (SCREEN_WIDTH / PHONE_WIDTH) * 100
const HEIGHT_PCT = (SCREEN_HEIGHT / PHONE_HEIGHT) * 100
const RADIUS_H = (SCREEN_RADIUS / SCREEN_WIDTH) * 100
const RADIUS_V = (SCREEN_RADIUS / SCREEN_HEIGHT) * 100

export interface IphoneProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  videoSrc?: string
  children?: ReactNode
}

export function Iphone({ src, videoSrc, children, className, style, ...props }: IphoneProps) {
  const hasVideo = !!videoSrc
  const hasChildren = !!children
  const hasMedia = hasVideo || !!src || hasChildren

  return (
    <div
      className={`relative inline-block w-full align-middle leading-none ${className ?? ""}`}
      style={{ aspectRatio: `${PHONE_WIDTH}/${PHONE_HEIGHT}`, ...style }}
      {...props}
    >
      {/* Children rendered in screen area */}
      {hasChildren && (
        <div
          className="absolute z-10 overflow-hidden"
          style={{
            left: `${LEFT_PCT}%`,
            top: `${TOP_PCT}%`,
            width: `${WIDTH_PCT}%`,
            height: `${HEIGHT_PCT}%`,
            borderRadius: `${RADIUS_H}% / ${RADIUS_V}%`,
          }}
        >
          {children}
        </div>
      )}

      {/* Video */}
      {hasVideo && !hasChildren && (
        <div
          className="pointer-events-none absolute z-10 overflow-hidden"
          style={{
            left: `${LEFT_PCT}%`,
            top: `${TOP_PCT}%`,
            width: `${WIDTH_PCT}%`,
            height: `${HEIGHT_PCT}%`,
            borderRadius: `${RADIUS_H}% / ${RADIUS_V}%`,
          }}
        >
          <video className="block size-full object-cover" src={videoSrc} autoPlay loop muted playsInline preload="metadata" />
        </div>
      )}

      {/* Image */}
      {!hasVideo && !hasChildren && src && (
        <div
          className="pointer-events-none absolute z-10 overflow-hidden"
          style={{
            left: `${LEFT_PCT}%`,
            top: `${TOP_PCT}%`,
            width: `${WIDTH_PCT}%`,
            height: `${HEIGHT_PCT}%`,
            borderRadius: `${RADIUS_H}% / ${RADIUS_V}%`,
          }}
        >
          <img src={src} alt="" className="block size-full object-cover object-top" />
        </div>
      )}

      <svg
        viewBox={`0 0 ${PHONE_WIDTH} ${PHONE_HEIGHT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 size-full"
        style={{ transform: "translateZ(0)", zIndex: 20, pointerEvents: "none" }}
      >
        <defs>
          <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#3a3a3c" />
            <stop offset="18%"  stopColor="#1c1c1e" />
            <stop offset="40%"  stopColor="#0a0a0a" />
            <stop offset="60%"  stopColor="#111111" />
            <stop offset="80%"  stopColor="#2a2a2c" />
            <stop offset="100%" stopColor="#1a1a1c" />
          </linearGradient>
          <linearGradient id="sideHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#4a4a4c" />
            <stop offset="50%"  stopColor="#0d0d0f" />
            <stop offset="100%" stopColor="#3a3a3c" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#0d0d0d" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          <linearGradient id="glassReflect" x1="0%" y1="0%" x2="30%" y2="100%">
            <stop offset="0%"   stopColor="white" stopOpacity="0.06" />
            <stop offset="40%"  stopColor="white" stopOpacity="0.02" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="islandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          <mask id="screenPunch" maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width={PHONE_WIDTH} height={PHONE_HEIGHT} fill="white" />
            <rect x={SCREEN_X} y={SCREEN_Y} width={SCREEN_WIDTH} height={SCREEN_HEIGHT} rx={SCREEN_RADIUS} ry={SCREEN_RADIUS} fill="black" />
          </mask>
        </defs>

        {/* Body */}
        <g mask={hasMedia ? "url(#screenPunch)" : undefined}>
          <path
            d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
            fill="url(#frameGrad)"
          />
          <path d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z" fill="url(#sideHighlight)" />
          <path d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z" fill="url(#sideHighlight)" />
          <path d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z" fill="url(#sideHighlight)" />
          <path d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z" fill="url(#sideHighlight)" />
          <path
            d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
            fill="#080808"
          />
        </g>

        {/* Screen fill (behind children) */}
        {!hasMedia && (
          <rect x={SCREEN_X} y={SCREEN_Y} width={SCREEN_WIDTH} height={SCREEN_HEIGHT} rx={SCREEN_RADIUS} ry={SCREEN_RADIUS} fill="url(#screenGrad)" />
        )}

        {/* Glass reflection overlay on top of everything */}
        <rect
          x={SCREEN_X} y={SCREEN_Y}
          width={SCREEN_WIDTH} height={SCREEN_HEIGHT}
          rx={SCREEN_RADIUS} ry={SCREEN_RADIUS}
          fill="url(#glassReflect)"
          style={{ pointerEvents: "none" }}
        />

        {/* Dynamic Island */}
        <path
          d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
          fill="url(#islandGrad)"
        />
        <path
          d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
          fill="#0a0a0a"
        />
        <path
          d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
          fill="#1a1a1a"
        />
        <circle cx="259.5" cy="48.5" r="1.8" fill="#222" />
        <circle cx="258" cy="47" r="0.8" fill="rgba(255,255,255,0.25)" />

        {/* Top highlight */}
        <path d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z" fill="rgba(255,255,255,0.08)" />
        <path d="M75 1H357C396.765 1 429 33.235 429 73" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M4 809C4 848.212 35.7878 880 75 880H357C396.212 880 428 848.212 428 809" stroke="rgba(0,0,0,0.6)" strokeWidth="1" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  )
}
