"use client";
import { useState } from "react";
import SafeImage from "../SafeImage";

const GOLD = "#D4A017";

const ACTIVITIES = [
  { title: "Media Sensitization & Advocacy",   desc: "WAN extensively uses print, electronic and social media platforms to advocate for women's inclusion in entrepreneurship, trade and policy-making across Africa.",                              img: "https://images.unsplash.com/photo-1573164713714-d92f3470f9d3?w=600&q=80", tag: "Advocacy",    num: "01" },
  { title: "Institutional Partnerships",       desc: "Deep networking with CSOs, government bodies, the AfCFTA Secretariat and international institutions to create opportunities for women-led businesses.",                                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", tag: "Partnership",  num: "02" },
  { title: "Women in Trade Conference",        desc: "Annual flagship conference empowering women entrepreneurs with AfCFTA tools, trade networks, market access strategies and cross-border matchmaking.",                               img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", tag: "Flagship",     num: "03" },
  { title: "Capacity Building & Training",     desc: "Multi-city training programmes equipping women-led SMEs with practical knowledge on trade facilitation, export readiness and digital commerce.",                                   img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80", tag: "Training",     num: "04" },
];

export function WomenActivities() {
  const [hov, setHov] = useState<number | null>(null);
  return (
    <section id="activities" className="wan-activities" style={{ background: "#F5F5F0", padding: "clamp(40px, 8vw, 100px) clamp(16px, 4vw, 64px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>
          <span style={{ width: 28, height: 2, background: GOLD, display: "block", borderRadius: 1 }} />
          What We Do
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,50px)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.1, margin: 0 }}>
            Our <em style={{ color: GOLD, fontStyle: "italic", fontWeight: 400 }}>Core Activities</em>
          </h2>
          <p style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "#666", maxWidth: 340, lineHeight: 1.75, margin: 0 }}>
            Driving women's economic empowerment across Africa's trade landscape.
          </p>
        </div>

        <div className="wan-activities-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(480px,1fr))", gap: 20 }}>
          {ACTIVITIES.map((act, i) => (
            <div key={i} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              className="wan-activities-card"
              style={{
                background: "#fff",
                border: `1px solid ${hov === i ? GOLD : "rgba(212,160,23,0.18)"}`,
                borderRadius: 4, overflow: "hidden", display: "flex",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                transform: hov === i ? "translateY(-4px)" : "none",
                boxShadow: hov === i ? `0 16px 48px ${GOLD}22` : "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {/* Gold top bar on hover */}
              <div className="wan-activities-img" style={{ position: "relative", width: 180, flexShrink: 0, overflow: "hidden" }}>
                <SafeImage src={act.img} alt={act.title} style={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "100%", transition: "transform 0.5s", transform: hov === i ? "scale(1.07)" : "scale(1)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: GOLD, opacity: hov === i ? 1 : 0, transition: "opacity 0.3s" }} />
              </div>
              <div style={{ padding: "24px 24px 24px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 700, color: `${GOLD}33`, lineHeight: 1 }}>{act.num}</span>
                    <span style={{ background: `${GOLD}18`, color: GOLD, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 2 }}>{act.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(18px, 3vw, 21px)", fontWeight: 700, color: "#0A0A0A", marginBottom: 10, lineHeight: 1.25 }}>{act.title}</h3>
                  <p style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "#555", lineHeight: 1.75, margin: 0 }}>{act.desc}</p>
                </div>
                <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6, color: GOLD, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                  Read More <span style={{ fontSize: 13 }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
@media(max-width:767px){
  .wan-activities-grid{grid-template-columns:1fr!important}
  .wan-activities-card{flex-direction:column!important}
  .wan-activities-img{width:100%!important;height:clamp(160px,40vw,200px)!important}
}
`}</style>
    </section>
  );
}
