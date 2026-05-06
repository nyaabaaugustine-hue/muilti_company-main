"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

const COMPANIES = [
  {
    index: "01",
    sector: "Technology & AI",
    name: "Osu Digital Hub",
    tagline: "Innovation from Accra",
    description:
      "Pioneering high-scale software, cloud, and AI solutions tailored for West Africa's growing enterprise sector. From Accra to the world.",
    href: "https://tgne-groupsite.vercel.app/osu-tech",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.06)",
    emoji: "💻",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777865847/WhatsApp_Image_2026-05-03_at_7.41.12_PM_buzbtt.jpg",
  },
  {
    index: "02",
    sector: "Renewable Energy",
    name: "Volta Energy",
    tagline: "Powering the Coast",
    description:
      "Building sustainable, resilient energy storage and solar networks across West Africa for a cleaner, brighter industrial future.",
    href: "https://tgne-groupsite.vercel.app/volta-energy",
    color: "#10B981",
    bg: "rgba(16,185,129,0.06)",
    emoji: "⚡",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    index: "03",
    sector: "Real Estate",
    name: "Kumasi Smart",
    tagline: "Modernity Meets Heritage",
    description:
      "Redefining luxury residential and commercial real estate through smart-home technology, bold architecture, and cultural pride.",
    href: "https://tgne-groupsite.vercel.app/kumasi-smart",
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.06)",
    emoji: "🏛",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    index: "04",
    sector: "Strategic Marketing",
    name: "Adabraka Media",
    tagline: "Resonating Stories",
    description:
      "Amplifying local brand narratives across global markets through data-driven creative strategy, digital campaigns, and storytelling.",
    href: "https://tgne-groupsite.vercel.app/adabraka-media",
    color: "#E879F9",
    bg: "rgba(232,121,249,0.06)",
    emoji: "📡",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
  },
];

export function CompanySelector() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    setMounted(true);
    // slight delay so page renders first, then modal slides in
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setLeaving(true);
    setTimeout(() => setVisible(false), 500);
  };

  if (!mounted || !visible) return null;

  return (
    <>
      <style>{`
        @keyframes selectorFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes selectorSlideUp {
          from { opacity: 0; transform: translateY(60px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes selectorSlideOut {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(-40px) scale(0.97); }
        }
        @keyframes cardStagger {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerGold {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .selector-backdrop {
          animation: selectorFadeIn 0.4s ease both;
        }
        .selector-panel {
          animation: ${leaving ? "selectorSlideOut" : "selectorSlideUp"} 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }
        .company-card {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.35s ease,
                      background 0.35s ease;
        }
        .company-card:hover {
          transform: translateY(-10px) scale(1.02);
        }
        .card-img {
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease;
        }
        .company-card:hover .card-img {
          transform: scale(1.08);
          opacity: 0.35;
        }
        .arrow-icon {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease;
        }
        .company-card:hover .arrow-icon {
          transform: translateX(6px);
          opacity: 1 !important;
        }
        .gold-shimmer {
          background: linear-gradient(90deg, #9A7A2E 0%, #C9A84C 30%, #E4C876 50%, #C9A84C 70%, #9A7A2E 100%);
          background-size: 200% auto;
          animation: shimmerGold 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="selector-backdrop"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "rgba(5,12,24,0.92)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        {/* Panel */}
        <div
          className="selector-panel"
          style={{
            width: "100%",
            maxWidth: 1160,
            position: "relative",
          }}
        >
          {/* Dismiss button */}
          <button
            onClick={dismiss}
            style={{
              position: "absolute",
              top: -48,
              right: 0,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
              borderRadius: 2,
              padding: "6px 14px",
              fontSize: 11,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            <X size={12} /> Skip
          </button>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 28 }}>
              <div style={{
                width: 32, height: 32,
                background: "linear-gradient(135deg,#C9A84C,#E4C876)",
                clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
              }} />
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 600,
                color: "#fff",
                letterSpacing: "0.05em",
              }}>
                Unified<span style={{ color: "#C9A84C" }}>Nexus</span>
              </span>
            </div>

            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              fontSize: 10, fontWeight: 600, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "#C9A84C", marginBottom: 16,
            }}>
              <span style={{ width: 28, height: 1, background: "#C9A84C", display: "block" }} />
              Our Portfolio
              <span style={{ width: 28, height: 1, background: "#C9A84C", display: "block" }} />
            </div>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(30px, 4vw, 50px)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 12,
            }}>
              Four Companies,{" "}
              <em className="gold-shimmer" style={{ fontWeight: 400, fontStyle: "italic" }}>
                One Vision
              </em>
            </h1>
            <p style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              maxWidth: 500,
              margin: "0 auto",
              fontWeight: 300,
            }}>
              Each company leads its sector. Together, they form an unrivalled
              force for growth across West Africa.
            </p>
          </div>

          {/* Gold divider */}
          <div style={{
            height: 1,
            background: "linear-gradient(90deg,transparent,#C9A84C,transparent)",
            opacity: 0.3,
            marginBottom: 40,
          }} />

          {/* Cards grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}>
            {COMPANIES.map((c, i) => (
              <a
                key={c.index}
                href={c.href}
                className="company-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  background: hovered === i ? c.bg : "rgba(15,30,56,0.8)",
                  border: `1px solid ${hovered === i ? c.color + "55" : "rgba(201,168,76,0.12)"}`,
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: hovered === i
                    ? `0 28px 60px -12px rgba(0,0,0,0.6), 0 0 0 1px ${c.color}33`
                    : "0 4px 24px rgba(0,0,0,0.3)",
                  animationName: "cardStagger",
                  animationDuration: "0.6s",
                  animationDelay: `${0.1 + i * 0.1}s`,
                  animationFillMode: "both",
                  animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {/* Image strip */}
                <div style={{ position: "relative", height: 140, overflow: "hidden", flexShrink: 0 }}>
                  <img
                    src={c.image}
                    alt={c.name}
                    className="card-img"
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover",
                      opacity: 0.22,
                    }}
                  />
                  {/* colour wash */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(160deg, ${c.color}22, rgba(10,22,40,0.7))`,
                  }} />

                  {/* Index badge */}
                  <div style={{
                    position: "absolute", top: 12, left: 12,
                    background: "rgba(10,22,40,0.88)",
                    color: "#C9A84C",
                    fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
                    padding: "4px 10px",
                    border: "1px solid rgba(201,168,76,0.3)",
                    borderRadius: 2,
                  }}>
                    {c.index}
                  </div>

                  {/* Sector pill */}
                  <div style={{
                    position: "absolute", top: 12, right: 12,
                    background: "rgba(10,22,40,0.88)",
                    color: c.color,
                    fontSize: 8, fontWeight: 700, letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    border: `1px solid ${c.color}44`,
                    borderRadius: 2,
                  }}>
                    {c.sector}
                  </div>

                  {/* Big emoji centre */}
                  <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 36,
                    opacity: hovered === i ? 0.9 : 0.5,
                    transition: "opacity 0.35s ease",
                  }}>
                    {c.emoji}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Name & tagline */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 20, fontWeight: 600, color: "#fff",
                      lineHeight: 1.2, marginBottom: 4,
                    }}>
                      {c.name}
                    </div>
                    <div style={{ fontSize: 11, color: "#C9A84C", fontWeight: 500, letterSpacing: "0.04em" }}>
                      {c.tagline}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: 12, color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.75, flex: 1, marginBottom: 20,
                    fontWeight: 300,
                  }}>
                    {c.description}
                  </p>

                  {/* CTA row */}
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    paddingTop: 14,
                    borderTop: `1px solid ${hovered === i ? c.color + "33" : "rgba(255,255,255,0.07)"}`,
                    transition: "border-color 0.35s ease",
                  }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: c.color,
                    }}>
                      Visit {c.name.split(" ")[0]}
                    </span>
                    <div style={{
                      width: 28, height: 28,
                      borderRadius: 2,
                      background: `${c.color}18`,
                      border: `1px solid ${c.color}44`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <ArrowRight
                        size={13}
                        className="arrow-icon"
                        style={{ color: c.color, opacity: 0.7 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div style={{
                  height: 2,
                  background: `linear-gradient(90deg, ${c.color}, #C9A84C)`,
                  opacity: hovered === i ? 1 : 0,
                  transition: "opacity 0.35s ease",
                }} />
              </a>
            ))}
          </div>

          {/* Footer note */}
          <p style={{
            textAlign: "center", marginTop: 32,
            fontSize: 10, color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.18em", textTransform: "uppercase",
          }}>
            Each company delivers a dedicated world-class experience
          </p>
        </div>
      </div>
    </>
  );
}
