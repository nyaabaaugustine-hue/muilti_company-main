"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// ── WAN brand palette ──────────────────────────────────────────────────────
const GOLD = "#D4A017";
const GOLD2 = "#F0C040";
const BLACK = "#0A0A0A";
const WAN_LOGO = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099379/1a_zcxsx2.png";

const SLIDES = [
  { sub: "Trade Facilitation",                   img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957583/tradee_fyywm1.jpg" },
  { sub: "Women in Business",                    img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957583/njhd_wwmgch.avif" },
  { sub: "Education & Scholarships",             img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957584/edu_tdqmm3.jpg" },
  { sub: "Economic Empowerment",                 img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957583/jyy_tyiya0.avif" },
  { sub: "Women Entrepreneurs",                  img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957584/asd_lzvstv.jpg" },
  { sub: "Community Development",                img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778958677/res_glqxi4.jpg" },
  { sub: "Leadership & Mentorship",              img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778957675/uyy_awjku8.avif" },
];

export function WomenHero() {
  const [cur, setCur] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCur(p => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="overview" className="wan-hero" style={{ position: "relative", minHeight: "100vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div key={i} style={{ position: "absolute", inset: 0, transition: "opacity 1s", opacity: i === cur ? 1 : 0 }}>
          <img src={s.img} alt={s.sub} style={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "100%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.40) 100%)" }} />
        </div>
      ))}

      {/* Gold top bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${GOLD},${GOLD2},${GOLD})`, zIndex: 3 }} />

      <div className="wan-hero-content" style={{ position: "relative", zIndex: 2, padding: "clamp(40px, 8vw, 130px) clamp(16px, 4vw, 64px) clamp(40px, 8vw, 80px)", maxWidth: 780 }}>
        {/* Logo + badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <img src={WAN_LOGO} alt="WAN Logo" style={{ height: 52, width: 52, objectFit: "contain", borderRadius: "50%", background: "#fff", padding: 3, boxShadow: `0 0 0 2px ${GOLD}` }} />
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: GOLD }}>APNABEC Group</div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.50)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Since 2020</div>
          </div>
        </div>

        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(48px,6.5vw,84px)", fontWeight: 700, lineHeight: 1.0, color: "#fff", marginBottom: 8 }}>
          Women of
        </h1>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(48px,6.5vw,84px)", fontWeight: 700, lineHeight: 1.0, color: GOLD, fontStyle: "italic", marginBottom: 28 }}>
          Africa Network
        </h1>

        {/* Slide subtitle */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 32, height: 2, background: GOLD }} />
          <span style={{ fontSize: "clamp(10px, 2vw, 12px)", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD }}>{SLIDES[cur].sub}</span>
        </div>

        <p style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "rgba(255,255,255,0.80)", lineHeight: 1.85, fontWeight: 300, maxWidth: 520, marginBottom: "clamp(24px, 5vw, 48px)" }}>
          Raising funds and promoting initiatives under the AfCFTA to serve women businesses and entrepreneurs to thrive and scale across Africa.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: "clamp(36px, 7vw, 72px)" }}>
          <a href="#services" style={{ background: GOLD, color: BLACK, fontSize: "clamp(10px, 2vw, 12px)", fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)", borderRadius: 2, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, boxShadow: `0 8px 32px ${GOLD}55` }}>
            Our Programmes <ArrowRight size={14} />
          </a>
          <a href="#team" style={{ background: "transparent", border: `1.5px solid ${GOLD}`, color: GOLD, fontSize: "clamp(10px, 2vw, 12px)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "clamp(9px, 2vw, 13px) clamp(18px, 3vw, 28px)", borderRadius: 2, textDecoration: "none" }}>
            Meet the Team
          </a>
        </div>

        {/* Stats */}
        <div className="wan-hero-stats" style={{ display: "flex", gap: "clamp(16px, 4vw, 48px)", flexWrap: "wrap", paddingTop: 36, borderTop: `1px solid rgba(212,160,23,0.25)` }}>
          {[["54", "African Nations"], ["10K+", "Women Impacted"], ["2020", "Founded"], ["5", "Core Pillars"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, color: GOLD, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: "clamp(8px, 1.5vw, 9px)", color: "rgba(255,255,255,0.50)", textTransform: "uppercase", letterSpacing: "0.18em", marginTop: 5 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot nav */}
      <div style={{ position: "absolute", bottom: "clamp(16px, 3vw, 32px)", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 3 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCur(i)}
            style={{ width: i === cur ? 28 : 10, height: 10, borderRadius: 5, border: "none", cursor: "pointer", background: i === cur ? GOLD : "rgba(255,255,255,0.30)", transition: "all 0.35s" }} />
        ))}
      </div>
      <style>{`
@media(max-width:767px){
  .wan-hero-stats{justify-content:center}
}
`}</style>
    </section>
  );
}
