"use client";
import { useState } from "react";
import SafeImage from "../SafeImage";

const GOLD = "#D4A017";

const PILLARS = [
  { title: "Education",          desc: "Access to education is a key component of our mission. Gender mainstreaming in education drives our scholarship programmes, literacy initiatives and vocational training for women and girls across Africa.",   img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957583/njhd_wwmgch.avif" },
  { title: "Trade Facilitation", desc: "Removal of tariffs and other barriers to trade. Utilization of Information Technology, business matchmaking, and cross-border logistics support to connect women-led enterprises to African markets under the AfCFTA.", img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957583/tradee_fyywm1.jpg" },
  { title: "Access to Finance",  desc: "Difficulty connecting to investors, banks, and other fundraising options can be a huge gatekeeper for women entrepreneurs. We bridge this gap through microfinance, grant funding and financial literacy programmes.",   img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957583/jyy_tyiya0.avif" },
  { title: "Our Roots",          desc: "Here at Women of Africa Network, we know that sometimes all it takes to change the world is a little support. Our grassroots programmes nurture women-led community development projects across the continent.",      img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957584/asd_lzvstv.jpg" },
  { title: "Health & Wellbeing", desc: "Advocating for maternal health, reproductive rights, mental wellness and community health programmes that ensure women can fully participate in economic life.",                                                   img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957584/edu_tdqmm3.jpg" },
  { title: "Policy Advocacy",    desc: "Engaging governments, regional bodies and international institutions to champion gender-responsive laws, budgets and policies that create an enabling environment for women across Africa.",                       img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957675/uyy_awj8ku.avif" },
];

export function WomenServices() {
  const [hov, setHov] = useState<number | null>(null);
  return (
    <section id="services" className="wan-services" style={{ background: "#0A0A0A", padding: "clamp(40px, 8vw, 100px) clamp(16px, 4vw, 64px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>
          <span style={{ width: 28, height: 2, background: GOLD, display: "block", borderRadius: 1 }} />
          Our Programmes
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,50px)", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
            Pillars of <em style={{ color: GOLD, fontStyle: "italic", fontWeight: 400 }}>Change</em>
          </h2>
          <p style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "rgba(255,255,255,0.55)", maxWidth: 300, lineHeight: 1.75, fontWeight: 300 }}>
            Holistic programmes transforming lives across Africa.
          </p>
        </div>

        <div className="wan-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 3 }}>
          {PILLARS.map((s, i) => (
            <div key={i} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              className="wan-services-card"
              style={{ position: "relative", height: 270, overflow: "hidden", cursor: "pointer", transition: "transform 0.4s", transform: hov === i ? "scale(1.03)" : "scale(1)" }}>
              <SafeImage src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "100%" }} wrapperStyle={{ position: "absolute", inset: 0 }} />
              <div style={{ position: "absolute", inset: 0, background: hov === i ? "rgba(0,0,0,0.82)" : "rgba(0,0,0,0.58)", transition: "background 0.4s" }} />
              {/* Gold top accent on hover */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: GOLD, opacity: hov === i ? 1 : 0, transition: "opacity 0.3s" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px" }}>
                <div style={{ width: 4, height: 26, background: GOLD, marginBottom: 12, borderRadius: 2 }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(18px, 3vw, 20px)", fontWeight: 700, color: "#fff", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: "clamp(12px, 2.5vw, 14px)", color: "rgba(255,255,255,0.80)", lineHeight: 1.70, fontWeight: 300, display: hov === i ? "block" : "none" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
@media(max-width:767px){
  .wan-services-card{height:clamp(200px,50vw,270px)!important}
}
`}</style>
    </section>
  );
}
