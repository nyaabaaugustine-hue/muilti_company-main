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

export default function SafeImage({ src, alt, style, className, wrapperStyle }: Props) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading")
  const imgRef = useRef<HTMLImageElement>(null)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    return () => { mounted.current = false }
  }, [])

  // If the image is already in browser cache, onLoad may fire before React
  // attaches the handler — check .complete synchronously after mount.
  useEffect(() => {
    const img = imgRef.current
    if (!img) return
    if (img.complete && img.naturalWidth > 0) {
      setStatus("loaded")
    }
  }, [src])

  const handleLoad = () => {
    if (mounted.current) setStatus("loaded")
  }

  const handleError = () => {
    if (mounted.current) setStatus("error")
  }

  const retry = () => {
    if (!imgRef.current) return
    setStatus("loading")
    const original = imgRef.current.src
    imgRef.current.src = ""
    setTimeout(() => {
      if (imgRef.current && mounted.current) {
        imgRef.current.src = original + (original.includes("?") ? "&" : "?") + "_r=" + Date.now()
      }
    }, 80)
  }

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        ...wrapperStyle,
      }}
    >
      {/* Shimmer placeholder — only shown while loading */}
      {status === "loading" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(135deg, #1a1a2e 25%, #2a2a4e 50%, #1a1a2e 75%)",
            backgroundSize: "400% 400%",
            animation: "apn-shimmer 1.5s ease-in-out infinite",
            zIndex: 1,
          }}
        />
      )}

      {/* Error state */}
      {status === "error" && (
        <div
          onClick={retry}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "linear-gradient(135deg, #1a1a2e, #16213e)",
            color: "#666",
            cursor: "pointer",
            zIndex: 2,
            fontSize: 11,
            gap: 6,
            userSelect: "none",
          }}
          title="Click to retry"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 15l6-6M9 9l6 6" />
          </svg>
          <span style={{ opacity: 0.6 }}>Retry</span>
        </div>
      )}

      {/* The actual image — always in the DOM so browser can load it,
          invisible only until loaded so there's no flash of broken layout */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        // Do NOT use loading="lazy" for logo / nav images — it can prevent
        // onLoad from firing when the element is already visible
        onLoad={handleLoad}
        onError={handleError}
        style={{
          display: "block",
          ...style,
          // Fade in once loaded; stay transparent while loading/error
          opacity: status === "loaded" ? 1 : 0,
          transition: status === "loaded" ? "opacity 0.3s ease" : "none",
        }}
        className={className}
      />

      <style>{`
        @keyframes apn-shimmer {
          0%   { background-position: -400% 0; }
          100% { background-position:  400% 0; }
        }
      `}</style>
    </div>
  )
}
