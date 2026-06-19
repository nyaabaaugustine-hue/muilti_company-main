"use client";

import { useEffect, useState } from "react";

const POPUP_IMAGE = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781863014/pop_up_qy8h0d.jpg";
const SURVEY_URL = "https://forms.gle/qcuYxjJKfmjSdBwb6";

export function SurveyPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setVisible(false);
    }, 350);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99998,
          background: "rgba(4, 10, 22, 0.82)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          animation: closing
            ? "spBackdropOut 0.35s ease forwards"
            : "spBackdropIn 0.4s ease forwards",
        }}
      />

      {/* Centering shell */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Survey invitation"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(10px, 3vw, 20px)",
          pointerEvents: "none",
        }}
      >
        {/* Card */}
        <div
          style={{
            pointerEvents: "auto",
            width: "100%",
            maxWidth: 460,
            /* Never taller than the viewport minus safe padding */
            maxHeight: "calc(100dvh - 32px)",
            display: "flex",
            flexDirection: "column",
            borderRadius: 12,
            overflow: "hidden",
            background: "#0b1628",
            border: "1px solid rgba(201,168,76,0.30)",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.70), 0 0 0 1px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
            animation: closing
              ? "spSlideOut 0.35s cubic-bezier(0.4,0,1,1) forwards"
              : "spSlideIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          {/* ─── Image — fills remaining space, never overflows ─── */}
          <div
            style={{
              position: "relative",
              flex: "1 1 auto",
              minHeight: 0,       /* critical: lets flex shrink below natural size */
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={POPUP_IMAGE}
              alt="Survey invitation"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain",   /* show full image, no cropping */
                objectPosition: "center",
              }}
            />

            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close popup"
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "rgba(11,22,40,0.85)",
                border: "1px solid rgba(201,168,76,0.45)",
                color: "#C9A84C",
                fontSize: 15,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s, transform 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.25)";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(11,22,40,0.85)";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              }}
            >
              ✕
            </button>
          </div>

          {/* ─── Body — fixed height, never grows ─── */}
          <div
            style={{
              flexShrink: 0,
              padding: "clamp(12px, 2.5vw, 20px) clamp(14px, 3vw, 24px) clamp(14px, 2.5vw, 22px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(4px, 1vh, 8px)",
              textAlign: "center",
              borderTop: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            {/* Gold rule */}
            <div
              style={{
                width: 36,
                height: 2,
                background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                borderRadius: 1,
              }}
            />

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(8px, 1.5vw, 10px)",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.70)",
                fontWeight: 600,
                margin: 0,
              }}
            >
              Your Voice Matters
            </p>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(16px, 4vw, 22px)",
                fontWeight: 700,
                color: "#fff",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Share Your Feedback
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(11px, 1.8vw, 13px)",
                color: "rgba(255,255,255,0.50)",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Help us improve the APNABEC Group experience — takes under 2 minutes.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(6px, 1.2vh, 10px)",
                width: "100%",
                marginTop: "clamp(4px, 1vh, 10px)",
              }}
            >
              <a
                href={SURVEY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "clamp(10px, 1.8vh, 13px) 20px",
                  borderRadius: 6,
                  background: "linear-gradient(135deg, #C9A84C 0%, #e0bf6b 50%, #C9A84C 100%)",
                  color: "#0b1628",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(11px, 1.8vw, 13px)",
                  fontWeight: 700,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  textAlign: "center",
                  boxSizing: "border-box",
                  boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
                  transition: "transform 0.18s, box-shadow 0.18s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(201,168,76,0.50)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(201,168,76,0.35)";
                }}
              >
                Take Survey Now →
              </a>

              <button
                onClick={close}
                style={{
                  width: "100%",
                  padding: "clamp(8px, 1.4vh, 11px) 20px",
                  borderRadius: 6,
                  background: "transparent",
                  border: "1px solid rgba(201,168,76,0.20)",
                  color: "rgba(255,255,255,0.38)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(10px, 1.6vw, 12px)",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  transition: "border-color 0.18s, color 0.18s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.45)";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.60)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.20)";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.38)";
                }}
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spBackdropIn  { from { opacity:0; } to { opacity:1; } }
        @keyframes spBackdropOut { from { opacity:1; } to { opacity:0; } }
        @keyframes spSlideIn {
          from { opacity:0; transform: translateY(28px) scale(0.96); }
          to   { opacity:1; transform: translateY(0)    scale(1);    }
        }
        @keyframes spSlideOut {
          from { opacity:1; transform: translateY(0)    scale(1);    }
          to   { opacity:0; transform: translateY(16px) scale(0.97); }
        }
      `}</style>
    </>
  );
}
