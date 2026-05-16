"use client";
import { useState, useEffect } from "react";

interface Props {
  logo: string;
  accentColor: string;
  companyName?: string;
}

export function LoadingScreen({ logo, accentColor, companyName }: Props) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "#0a1422",
        animation: "loadFadeOut 0.5s 1.6s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes loadLogoIn {
          0% { opacity: 0; transform: scale(0.6) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes loadGlow {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.3); opacity: 0.35; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes loadDot {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.3; }
          40% { transform: translateY(-10px); opacity: 1; }
        }
        @keyframes loadFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
        @keyframes loadBar {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: "50vmax", height: "50vmax",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}33 0%, transparent 70%)`,
          animation: "loadGlow 1.2s 0.2s ease-out forwards",
        }}
      />

      {/* Logo */}
      <img
        src={logo}
        alt={companyName || ""}
        style={{
          height: "clamp(56px, 8vw, 100px)",
          width: "auto",
          objectFit: "contain",
          position: "relative",
          zIndex: 1,
          animation: "loadLogoIn 0.5s 0.15s ease-out both",
        }}
      />

      {/* Accent bar */}
      <div
        style={{
          width: 60, height: 2,
          background: accentColor,
          borderRadius: 1,
          marginTop: 20,
          position: "relative", zIndex: 1,
          animation: "loadBar 0.6s 0.5s ease-out both",
        }}
      />

      {/* Company name */}
      {companyName && (
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(10px, 1.4vw, 13px)",
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: accentColor,
            marginTop: 14,
            opacity: 0,
            animation: "loadLogoIn 0.4s 0.55s ease-out forwards",
            position: "relative", zIndex: 1,
          }}
        >
          {companyName}
        </p>
      )}

      {/* Dots */}
      <div
        style={{
          display: "flex", gap: 7,
          marginTop: 24,
          position: "relative", zIndex: 1,
          opacity: 0,
          animation: "loadLogoIn 0.3s 0.65s ease-out forwards",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 7, height: 7,
              borderRadius: "50%",
              background: accentColor,
              animation: `loadDot 1s ${i * 0.15 + 0.7}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
