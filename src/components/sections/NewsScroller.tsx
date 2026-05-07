"use client";

import { useRef } from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const NEWS = [
  {
    id: 1,
    category: "Policy & Trade",
    categoryColor: "#3B82F6",
    title: "AFCFTA Policy Network Launches New Trade Facilitation Framework Across 12 African Nations",
    excerpt: "A landmark framework designed to streamline cross-border commerce and reduce trade barriers for SMEs.",
    date: "May 5, 2026",
    readTime: "4 min read",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778125781/bacckground_z624kw.jpg",
    href: "#news",
  },
  {
    id: 2,
    category: "Investment",
    categoryColor: "#10B981",
    title: "Africa Globalized Investment Summit Sets Record Commitments Totalling $2.4 Billion",
    excerpt: "Delegates from over 30 countries convened in Accra to pledge capital toward sustainable infrastructure.",
    date: "April 28, 2026",
    readTime: "6 min read",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778125799/gefw_z5bq6y.jpg",
    href: "#news",
  },
  {
    id: 3,
    category: "Women & Empowerment",
    categoryColor: "#C9A84C",
    title: "Women of Africa Network Expands Reach with New Regional Chapters Across West Africa",
    excerpt: "Empowering women entrepreneurs and leaders with resources, mentorship, and cross-border networks.",
    date: "April 20, 2026",
    readTime: "5 min read",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778127825/download_3_ggucep.jpg",
    href: "#news",
  },
  {
    id: 4,
    category: "Business Export",
    categoryColor: "#E879F9",
    title: "African Business Export Club Connects 500 SMEs to Global Markets in Record Time",
    excerpt: "A bold initiative helping African businesses break into international trade routes with confidence.",
    date: "April 15, 2026",
    readTime: "3 min read",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778127825/download_2_sxbd2x.jpg",
    href: "#news",
  },
];

const TRACK = [...NEWS, ...NEWS, ...NEWS];

export function NewsScroller() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Square card size: ~220px base, increased by 10% = 242px
  const CARD_SIZE = 242;

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0d1e35 0%, #0A1628 100%)",
        borderTop: "1px solid rgba(201,168,76,0.18)",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <style>{`
        @keyframes newsScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .news-track {
          animation: newsScroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .news-track:hover {
          animation-play-state: paused;
        }
        .news-card-sq {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s cubic-bezier(0.22,1,0.36,1);
          cursor: pointer;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .news-card-sq:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 50px -10px rgba(0,0,0,0.7),
                      0 0 0 1px rgba(201,168,76,0.45);
        }
        .news-card-sq:hover .news-img-sq {
          transform: scale(1.08);
        }
        .news-card-sq:hover .news-arrow-sq {
          transform: translateX(4px);
          opacity: 1 !important;
        }
        .news-img-sq {
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
      `}</style>

      {/* ── Section heading ── */}
      <div style={{ padding: "14px 24px 8px", display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ width: 28, height: 1, background: "#C9A84C", display: "block", flexShrink: 0 }} />
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(15px, 1.6vw, 20px)",
            fontWeight: 600,
            color: "#fff",
            margin: 0,
            letterSpacing: "0.03em",
            whiteSpace: "nowrap",
          }}
        >
          Our Stories{" "}
          <em style={{ color: "#C9A84C", fontStyle: "italic", fontWeight: 400 }}>Across Platform</em>
        </h2>
        <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #C9A84C33, transparent)", display: "block" }} />
      </div>

      {/* ── Right fade ── */}
      <div
        style={{
          position: "absolute",
          right: 0, top: 0, bottom: 0,
          zIndex: 10,
          width: 60,
          background: "linear-gradient(270deg, #0A1628 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Scrolling SQUARE cards track ── */}
      <div style={{ paddingLeft: 20, paddingRight: 40, paddingTop: 6, paddingBottom: 14, overflow: "hidden" }}>
        <div className="news-track" ref={trackRef} style={{ gap: 14 }}>
          {TRACK.map((item, i) => (
            <a
              key={`${item.id}-${i}`}
              href={item.href}
              className="news-card-sq"
              style={{
                width: CARD_SIZE,
                height: CARD_SIZE,
                flexShrink: 0,
                background: "rgba(18,34,60,0.95)",
                border: "1px solid rgba(201,168,76,0.18)",
                borderRadius: 4,
              }}
            >
              {/* Full background image */}
              <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="news-img-sq"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                />
                {/* Dark overlay gradient */}
                <div
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(0deg, rgba(10,18,40,0.92) 0%, rgba(10,18,40,0.45) 55%, rgba(10,18,40,0.15) 100%)",
                  }}
                />
              </div>

              {/* Top badges */}
              <div style={{ position: "relative", zIndex: 2, padding: "12px 12px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span
                  style={{
                    fontSize: 7, fontWeight: 800, letterSpacing: "0.16em",
                    textTransform: "uppercase", color: item.categoryColor,
                    background: "rgba(10,18,40,0.80)",
                    border: `1px solid ${item.categoryColor}55`,
                    padding: "3px 8px", borderRadius: 2,
                    display: "flex", alignItems: "center", gap: 4,
                  }}
                >
                  <Tag size={6} />
                  {item.category}
                </span>
                <span
                  style={{
                    fontSize: 8, color: "rgba(255,255,255,0.55)",
                    background: "rgba(10,18,40,0.80)",
                    padding: "3px 8px", borderRadius: 2,
                    display: "flex", alignItems: "center", gap: 4,
                  }}
                >
                  <Calendar size={7} style={{ color: "#C9A84C" }} />
                  {item.date}
                </span>
              </div>

              {/* Bottom content */}
              <div
                style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  zIndex: 2,
                  padding: "12px 14px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    lineHeight: 1.3,
                    margin: 0,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.title}
                </h3>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A84C" }}>
                    Read More
                  </span>
                  <ArrowRight size={11} className="news-arrow-sq" style={{ color: "#C9A84C", opacity: 0.5 }} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
