"use client";
import { useState } from "react";

const A = "#f28d01";
const BG = "#000040";

const SERVICES = [
  {
    title: "Export Trade Facilitation",
    desc: "End-to-end support for African businesses to access global markets — from export documentation, customs procedures and trade finance to market entry strategies under the AfCFTA framework.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    icon: "🌍",
  },
  {
    title: "Business Matchmaking & Networking",
    desc: "Connecting African exporters with verified international buyers, distributors and investors through our curated club network of 500+ active export businesses across 54 nations.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    icon: "🤝",
  },
  {
    title: "Capacity Building & Training",
    desc: "Delivering world-class training in export management, AfCFTA compliance, trade finance, quality certification and international standards to build globally competitive African enterprises.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    icon: "📚",
  },
  {
    title: "Policy Advocacy & Representation",
    desc: "Championing the interests of African exporters in policy forums, government engagements and bilateral trade negotiations to create a more enabling environment for cross-border trade.",
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&q=80",
    icon: "🏛️",
  },
  {
    title: "AfCFTA Compliance Advisory",
    desc: "Guiding businesses through AfCFTA rules of origin, tariff schedules, sanitary standards and Non-Tariff Barriers to maximise benefits from the continental free trade agreement.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    icon: "📋",
  },
  {
    title: "Export Finance & Investment",
    desc: "Facilitating access to export credit facilities, working capital finance, guarantee instruments and investor introductions to help African businesses scale their export operations.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    icon: "💼",
  },
];

export function AbecServices() {
  const [hov, setHov] = useState<number | null>(null);
  return (
    <section id="services" style={{ background: "#f8f6f0", padding: "100px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Our Services
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 600, color: BG, lineHeight: 1.15, margin: 0 }}>
            What We <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Deliver</em>
          </h2>
          <p style={{ fontSize: 13, color: "#555", maxWidth: 340, lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            End-to-end export facilitation services for Africa's most ambitious businesses.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 20 }}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                background: "#fff",
                border: `1px solid ${hov === i ? A : "rgba(0,0,64,0.10)"}`,
                borderRadius: 4,
                overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                transform: hov === i ? "translateY(-4px)" : "none",
                boxShadow: hov === i ? "0 12px 40px rgba(242,141,1,0.15)" : "0 2px 12px rgba(0,0,64,0.06)",
              }}
            >
              <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s", transform: hov === i ? "scale(1.06)" : "scale(1)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 30%,rgba(0,0,64,0.75) 100%)" }} />
                <div style={{ position: "absolute", bottom: 12, left: 16, fontSize: 24 }}>{s.icon}</div>
              </div>
              <div style={{ padding: "20px 22px 24px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: BG, marginBottom: 10, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
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
