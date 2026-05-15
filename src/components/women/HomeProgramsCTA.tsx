"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const A = "#EC4899";
const BG = "#1a0520";

const PROGRAMS = [
  {
    icon: "🎓",
    title: "Education",
    tagline: "Knowledge as Empowerment",
    desc: "Scholarships, literacy programmes and vocational training for women and girls across Africa — because education is the foundation of every breakthrough.",
    href: "/women-of-africa/programs/education",
    color: "#EC4899",
  },
  {
    icon: "🌍",
    title: "Trade Facilitation",
    tagline: "Borderless Commerce",
    desc: "Connecting women traders to continental and global markets through the AfCFTA framework, digital tools and cross-border matchmaking networks.",
    href: "/women-of-africa/programs/trade",
    color: "#A855F7",
  },
  {
    icon: "💰",
    title: "Access to Finance",
    tagline: "Capital for Change",
    desc: "Bridging the gender finance gap by linking women-led enterprises to microfinance, venture capital, grants and financial literacy training.",
    href: "/women-of-africa/programs/finance",
    color: "#F59E0B",
  },
];

export function HomeProgramsCTA() {
  return (
    <section style={{ background: BG, padding: "100px 64px", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
          width: "80%", height: "160%",
          background: "radial-gradient(ellipse,rgba(236,72,153,0.08) 0%,transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: A, display: "block" }} />
            What We Do
            <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,50px)", fontWeight: 600, color: "#fff", lineHeight: 1.15 }}>
            Three Pillars of{" "}
            <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Transformation</em>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.60)", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.8 }}>
            Every programme we run is designed to unlock the full potential of African women — economically, educationally and socially.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {PROGRAMS.map((prog, i) => (
            <Link
              key={i}
              href={prog.href}
              style={{
                display: "block", textDecoration: "none",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid rgba(236,72,153,0.18)`,
                borderRadius: 6, padding: "36px 28px 32px",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(236,72,153,0.09)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(236,72,153,0.45)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 20px 60px rgba(236,72,153,0.15)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(236,72,153,0.18)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 20 }}>{prog.icon}</div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: A, marginBottom: 8 }}>
                {prog.tagline}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 600, color: "#fff", marginBottom: 12, lineHeight: 1.15 }}>
                {prog.title}
              </h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.62)", lineHeight: 1.8, marginBottom: 24 }}>
                {prog.desc}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, color: A, fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase" }}>
                Explore Program <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link
            href="/women-of-africa/get-involved"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: `linear-gradient(135deg,#9D174D,${A})`,
              color: "#fff", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.10em", textTransform: "uppercase",
              padding: "14px 36px", borderRadius: 2, textDecoration: "none",
              boxShadow: "0 8px 28px rgba(236,72,153,0.35)",
            }}
          >
            Join Our Mission <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
