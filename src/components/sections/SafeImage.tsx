"use client"

import { useState, useRef, useEffect } from "react"

type Props = {
  src: string
  alt: string
  style?: React.CSSProperties
  className?: string
  wrapperStyle?: React.CSSProperties
  fallback?: string
}

const FALLBACK = "data:image/svg+xml," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="#1a1a2e"/>
    <circle cx="200" cy="130" r="40" fill="#2d2d4e"/>
    <rect x="160" y="190" width="80" height="10" rx="5" fill="#2d2d4e"/>
    <rect x="140" y="210" width="120" height="8" rx="4" fill="#2d2d4e"/>
  </svg>`
)

export default function SafeImage({ src, alt, style, className, wrapperStyle, fallback }: Props) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading")
  const imgRef = useRef<HTMLImageElement>(null)
  const mounted = useRef(true)

  useEffect(() => { mounted.current = true; return () => { mounted.current = false } }, [])

  const retry = () => {
    setStatus("loading")
    if (imgRef.current) {
      const s = imgRef.current.src
      imgRef.current.src = ""
      setTimeout(() => { if (imgRef.current) imgRef.current.src = s }, 50)
    }
  }

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: status === "loading" ? "linear-gradient(135deg, #1a1a2e 25%, #2a2a4e 50%, #1a1a2e 75%)" : "transparent",
        backgroundSize: "400% 400%",
        animation: status === "loading" ? "shimmer 1.5s ease-in-out infinite" : "none",
        ...wrapperStyle,
      }}
    >
      {status === "error" && (
        <div
          onClick={retry}
          style={{
            position: "absolute", inset: 0, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: "linear-gradient(135deg, #1a1a2e, #16213e)",
            color: "#555", cursor: "pointer", zIndex: 2,
            fontSize: 12, gap: 6, userSelect: "none",
          }}
          title="Click to retry"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="2" />
            <circle cx="12" cy="12" r="4" />
            <path d="M8 12h8" />
          </svg>
          <span style={{ opacity: 0.6 }}>Image unavailable</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => { if (mounted.current) setStatus("loaded") }}
        onError={() => { if (mounted.current) setStatus("error") }}
        style={{
          ...style,
          opacity: status === "loaded" ? 1 : 0,
          transition: "opacity 0.35s ease-in",
          display: "block",
        }}
        className={className}
      />
      <style>{`@keyframes shimmer{0%{background-position:-400% 0}100%{background-position:400% 0}}`}</style>
    </div>
  )
}
