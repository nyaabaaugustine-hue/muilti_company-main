"use client";
import SafeImage from "../SafeImage";

const GOLD = "#D4A017";
const WAN_LOGO = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099379/1a_zcxsx2.png";

const VALUES = [
  { label: "Collaboration",    desc: "Building partnerships across governments, CSOs and private sector to advance women's empowerment under the AfCFTA framework." },
  { label: "Advocacy Focus",   desc: "Dedicated to influencing policy at continental and national levels for gender-responsive trade and development." },
  { label: "Inclusivity",      desc: "Ensuring every African woman has access to education, trade opportunities and economic power." },
  { label: "Integrity",        desc: "Operating with the highest standards of transparency, accountability and ethical conduct." },
  { label: "Innovation",       desc: "Pioneering new approaches to women's empowerment through technology, trade and capacity-building." },
];

export function WomenAbout() {
  return (
    <section id="about" className="wan-about" style={{ background: "#fff", padding: "clamp(40px, 8vw, 100px) clamp(16px, 4vw, 64px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="wan-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

          {/* ── Left image stack ── */}
          <div style={{ position: "relative" }}>
            <div className="wan-about-image-wrap" style={{ position: "relative", height: "clamp(260px, 45vw, 460px)", borderRadius: 4, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}>
              <SafeImage src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" alt="Women of Africa Network" style={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "100%" }} wrapperStyle={{ position: "absolute", inset: 0 }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(0,0,0,0.22) 0%,transparent 60%)" }} />
            </div>
            {/* Gold badge */}
            <div className="wan-about-badge" style={{ position: "absolute", bottom: -24, right: -24, background: "#0A0A0A", border: `1px solid ${GOLD}44`, borderRadius: 4, padding: "20px 28px", textAlign: "center", minWidth: 140 }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: GOLD, lineHeight: 1 }}>2020</div>
              <div style={{ fontSize: "clamp(8px, 1.5vw, 10px)", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 6 }}>Founded</div>
            </div>
            {/* Secondary image */}
            <div className="wan-about-secondary" style={{ position: "absolute", top: 24, left: -24, width: "clamp(80px, 15vw, 160px)", height: "clamp(60px, 12vw, 120px)", borderRadius: 4, overflow: "hidden", border: "3px solid #fff", boxShadow: "0 8px 32px rgba(0,0,0,0.20)" }}>
              <SafeImage src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80" alt="Women Leadership" style={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "100%" }} wrapperStyle={{ position: "absolute", inset: 0 }} />
            </div>
            {/* Gold accent line */}
            <div style={{ position: "absolute", bottom: -24, left: 0, width: "60%", height: 3, background: `linear-gradient(90deg,${GOLD},transparent)`, borderRadius: 2 }} />
          </div>

          {/* ── Right content ── */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "clamp(9px, 1.5vw, 10px)", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 20 }}>
              <span style={{ width: 28, height: 2, background: GOLD, display: "block", borderRadius: 1 }} />
              Who We Are
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.15, marginBottom: 20 }}>
              Positively Impacting the{" "}
              <em style={{ color: GOLD, fontStyle: "italic", fontWeight: 400 }}>Lives of Women</em>
            </h2>

            <p style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "#444", lineHeight: 1.90, marginBottom: 16 }}>
              At Women of Africa Network, we're raising funds and promoting initiatives under the African Continental Free Trade Agreement (AfCFTA) to serve women businesses and entrepreneurs to thrive and scale under the AfCFTA Protocols on women.
            </p>
            <p style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "#444", lineHeight: 1.90, marginBottom: 32 }}>
              We believe in the advocacy to boost women's inclusion in entrepreneurship and business. We invite you to join us by supporting our efforts to make a measurable difference in women entrepreneurs' lives.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VALUES.map((v, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${GOLD}18`, border: `1.5px solid ${GOLD}66`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD }} />
                  </div>
                  <div>
                    <span style={{ fontSize: "clamp(13px, 2.5vw, 16px)", fontWeight: 700, color: "#0A0A0A" }}>{v.label}: </span>
                    <span style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "#555", lineHeight: 1.65 }}>{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Logo strip */}
            <div style={{ marginTop: 36, paddingTop: 28, borderTop: `1px solid ${GOLD}22`, display: "flex", alignItems: "center", gap: 14 }}>
              <SafeImage src={WAN_LOGO} alt="WAN" style={{ height: 48, width: 48, objectFit: "contain", borderRadius: "50%", background: "#0A0A0A", padding: 3, boxShadow: `0 0 0 1.5px ${GOLD}` }} wrapperStyle={{ width: 48, height: 48, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "clamp(13px, 2.5vw, 16px)", fontWeight: 700, color: "#0A0A0A" }}>Women of Africa Network</div>
                <div style={{ fontSize: "clamp(10px, 2vw, 12px)", color: "#888" }}>Sakumono, Accra — Ghana</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
@media(max-width:767px){
  .wan-about-grid{grid-template-columns:1fr!important;gap:clamp(24px,6vw,48px)!important}
  .wan-about-badge{right:clamp(8px,3vw,16px)!important;bottom:clamp(-16px,3vw,-8px)!important;padding:clamp(12px,3vw,20px) clamp(16px,4vw,28px)!important;min-width:clamp(100px,30vw,140px)!important}
  .wan-about-secondary{top:clamp(12px,3vw,24px)!important;left:clamp(8px,2vw,12px)!important}
}
`}</style>
    </section>
  );
}
