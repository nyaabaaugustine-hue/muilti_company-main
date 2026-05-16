"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// ── WAN brand palette ──────────────────────────────────────────────────────
const GOLD = "#D4A017";
const GOLD2 = "#F0C040";
const BLACK = "#0A0A0A";
const WAN_LOGO = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099379/1a_zcxsx2.png";

const SLIDES = [
  { sub: "Empowering Women Across Africa",       img: "https://womenofafricanetwork.org/wp-content/uploads/2021/10/Women-of-Africa-Network-14.jpeg" },
  { sub: "Education & Scholarships",             img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80" },
  { sub: "Trade Facilitation",                   img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80" },
  { sub: "Economic Empowerment",                 img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80" },
];

export function WomenHero() {
  const [cur, setCur] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCur(p => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="overview" style={{ position: "relative", minHeight: "100vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div key={i} style={{ position: "absolute", inset: 0, transition: "opacity 1s", opacity: i === cur ? 1 : 0 }}>
          <img src={s.img} alt={s.sub} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.40) 100%)" }} />
        </div>
      ))}

      {/* Gold top bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${GOLD},${GOLD2},${GOLD})`, zIndex: 3 }} />

      <div style={{ position: "relative", zIndex: 2, padding: "130px 64px 80px", maxWidth: 780 }}>
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
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD }}>{SLIDES[cur].sub}</span>
        </div>

        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.80)", lineHeight: 1.85, fontWeight: 300, maxWidth: 520, marginBottom: 48 }}>
          Raising funds and promoting initiatives under the AfCFTA to serve women businesses and entrepreneurs to thrive and scale across Africa.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 72 }}>
          <a href="#services" style={{ background: GOLD, color: BLACK, fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", padding: "14px 32px", borderRadius: 2, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, boxShadow: `0 8px 32px ${GOLD}55` }}>
            Our Programmes <ArrowRight size={14} />
          </a>
          <a href="#team" style={{ background: "transparent", border: `1.5px solid ${GOLD}`, color: GOLD, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "13px 28px", borderRadius: 2, textDecoration: "none" }}>
            Meet the Team
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap", paddingTop: 36, borderTop: `1px solid rgba(212,160,23,0.25)` }}>
          {[["54", "African Nations"], ["10K+", "Women Impacted"], ["2020", "Founded"], ["5", "Core Pillars"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 700, color: GOLD, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.50)", textTransform: "uppercase", letterSpacing: "0.18em", marginTop: 5 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot nav */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 3 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCur(i)}
            style={{ width: i === cur ? 28 : 10, height: 10, borderRadius: 5, border: "none", cursor: "pointer", background: i === cur ? GOLD : "rgba(255,255,255,0.30)", transition: "all 0.35s" }} />
        ))}
      </div>
    </section>
  );
}
