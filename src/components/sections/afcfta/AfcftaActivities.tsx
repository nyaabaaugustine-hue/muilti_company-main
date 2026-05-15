"use client";
import { useState } from "react";

const A = "#F59E0B";

const ACTIVITIES = [
  {
    title: "Media Sensitization & Advocacy",
    desc: "AfCFTA Policy Network has extensively done media and public advocacy through print, electronic and social media platforms to educate citizens about AfCFTA's transformative potential for African economies.",
    img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716829/fd2ce89b-3a0e-473d-b42f-d13f1c4eef29-300x212_x4qqnw.jpg",
    tag: "Advocacy",
    num: "01",
  },
  {
    title: "Institutional Partnerships",
    desc: "Extensive institutional networking with CSOs, private sector organisations, government bodies, AfCFTA Secretariat and international institutions — culminating in landmark MOU agreements with the AfCFTA Secretariat.",
    img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/afcfta-institutional-partnership-384x256_negvck.jpg",
    tag: "Partnership",
    num: "02",
  },
  {
    title: "Ongoing Flagship Programs",
    desc: "The HOPE Project — acquiring land to build a Centre of Excellence in intra-Africa trade, free trade zones, research hubs and capacity development centres that will serve the continent for generations.",
    img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/slide111_ptbh1n.jpg",
    tag: "Flagship",
    num: "03",
  },
  {
    title: "Global Investment Summit",
    desc: "Connecting investors from beyond Africa to leverage the opportunities created by AfCFTA — creating vital linkages between global capital and African enterprise across all 54 participating nations.",
    img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716826/afctfa-132_sq4kvo.jpg",
    tag: "Investment",
    num: "04",
  },
];

export function AfcftaActivities() {
  const [hov, setHov] = useState<number | null>(null);
  return (
    <section id="activities" style={{ background: "#F8FAFC", padding: "100px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          What We Do
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 600, color: "#0F172A", lineHeight: 1.15, margin: 0 }}>
            Our <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Core Activities</em>
          </h2>
          <p style={{ fontSize: 13, color: "#666", maxWidth: 340, lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Building the foundations for Africa's biggest economic transformation.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(480px,1fr))", gap: 20 }}>
          {ACTIVITIES.map((act, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                background: "#fff",
                border: `1px solid ${hov === i ? "rgba(245,158,11,0.45)" : "rgba(245,158,11,0.12)"}`,
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                transform: hov === i ? "translateY(-3px)" : "none",
                boxShadow: hov === i ? "0 12px 40px rgba(245,158,11,0.10)" : "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ width: 180, flexShrink: 0, overflow: "hidden" }}>
                <img src={act.img} alt={act.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s", transform: hov === i ? "scale(1.06)" : "scale(1)" }} />
              </div>
              <div style={{ padding: "24px 24px 24px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 600, color: "rgba(245,158,11,0.25)", lineHeight: 1 }}>{act.num}</span>
                    <span style={{ background: "rgba(245,158,11,0.10)", color: A, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 2 }}>{act.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 21, fontWeight: 600, color: "#0F172A", marginBottom: 10, lineHeight: 1.25 }}>{act.title}</h3>
                  <p style={{ fontSize: 12.5, color: "#666", lineHeight: 1.75, margin: 0 }}>{act.desc}</p>
                </div>
                <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6, color: A, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                  Read More <span style={{ fontSize: 13 }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
