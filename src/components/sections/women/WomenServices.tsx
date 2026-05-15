"use client";
import { useState } from "react";

const A = "#EC4899";
const BG = "#1a0520";

const PILLARS = [
  {
    title: "Education",
    desc: "Access to education is a key component of the Women of Africa Network's mission. The goal of gender mainstreaming in education ensures that women and girls across Africa have equal opportunities to learn, grow and lead — from primary schooling to university scholarships and vocational training.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    icon: "🎓",
  },
  {
    title: "Trade Facilitation",
    desc: "Removal of tariffs and other barriers to trade. Utilization of Information Technology, business matchmaking and cross-border trade support for women-led enterprises under the AfCFTA framework — connecting African women traders to continental and global markets.",
    img: "https://images.unsplash.com/photo-1573164713706-257e15284b5f?w=600&q=80",
    icon: "🌍",
  },
  {
    title: "Access to Finance",
    desc: "Difficulty connecting to investors, banks, and other fundraising options can be a huge gatekeeper for women entrepreneurs. We bridge this gap by linking women-led businesses with microfinance, venture capital, grant funding and financial literacy programmes.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    icon: "💰",
  },
  {
    title: "Our Roots",
    desc: "Here at Women of Africa Network, we know that sometimes all it takes to change the world is a little support. We honour the heritage, resilience and entrepreneurial spirit of African women — building programmes rooted in community, culture and collective empowerment.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    icon: "🌿",
  },
];

export function WomenServices() {
  const [hov, setHov] = useState<number | null>(null);
  return (
    <section id="services" style={{ background: "#fff", padding: "100px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Who We Are
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 600, color: BG, lineHeight: 1.15, margin: 0 }}>
            Our <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Core Pillars</em>
          </h2>
          <p style={{ fontSize: 13, color: "#666", maxWidth: 340, lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Holistic programmes that transform the lives of women and girls across Africa and the diaspora.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 20 }}>
          {PILLARS.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                background: "#fdf8fb",
                border: `1px solid ${hov === i ? A : "rgba(236,72,153,0.12)"}`,
                borderRadius: 4,
                overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                transform: hov === i ? "translateY(-4px)" : "none",
                boxShadow: hov === i ? "0 12px 40px rgba(236,72,153,0.12)" : "0 2px 12px rgba(236,72,153,0.04)",
              }}
            >
              <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
                <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s", transform: hov === i ? "scale(1.06)" : "scale(1)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 30%,rgba(26,5,32,0.80) 100%)" }} />
                <div style={{ position: "absolute", bottom: 12, left: 16, fontSize: 24 }}>{p.icon}</div>
              </div>
              <div style={{ padding: "20px 22px 24px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: BG, marginBottom: 10, lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
                <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6, color: A, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                  Learn More <span style={{ fontSize: 14 }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
