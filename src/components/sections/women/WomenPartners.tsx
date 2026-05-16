"use client";
import SafeImage from "../SafeImage";

const GOLD = "#D4A017";

const PARTNERS = [
  "https://womenofafricanetwork.org/wp-content/uploads/2020/05/1.png",
  "https://womenofafricanetwork.org/wp-content/uploads/2020/05/2.png",
  "https://womenofafricanetwork.org/wp-content/uploads/2020/05/3.png",
  "https://womenofafricanetwork.org/wp-content/uploads/2020/05/4.png",
  "https://womenofafricanetwork.org/wp-content/uploads/2020/05/5.png",
];

export function WomenPartners() {
  return (
    <section className="wan-partners" style={{ background: "#F5F5F0", padding: "clamp(40px, 8vw, 80px) clamp(16px, 4vw, 64px)", borderTop: `3px solid ${GOLD}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>
          <span style={{ width: 28, height: 2, background: GOLD, display: "block", borderRadius: 1 }} />
          Support Our Organisation
          <span style={{ width: 28, height: 2, background: GOLD, display: "block", borderRadius: 1 }} />
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(24px,2.8vw,38px)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.15, marginBottom: 48 }}>
          Partners &amp; <em style={{ color: GOLD, fontStyle: "italic", fontWeight: 400 }}>Sponsors</em>
        </h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(16px, 4vw, 40px)", flexWrap: "wrap" }}>
          {PARTNERS.map((src, i) => (
            <div key={i} className="wan-partner"
              style={{ width: 130, height: 80, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.55, filter: "grayscale(1)", transition: "all 0.35s", cursor: "pointer" }}>
              <SafeImage src={src} alt={`Partner ${i + 1}`} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} wrapperStyle={{ width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
.wan-partner:hover { opacity: 1 !important; filter: grayscale(0) !important; transform: scale(1.05); }
@media(max-width:767px){
  .wan-partner{width:clamp(80px,30vw,130px)!important;height:clamp(50px,15vw,80px)!important}
}
`}</style>
    </section>
  );
}
