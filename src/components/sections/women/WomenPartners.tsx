"use client";
const A = "#EC4899";
const BG = "#1a0520";

const PARTNERS = [
  "https://womenofafricanetwork.org/wp-content/uploads/2020/05/1.png",
  "https://womenofafricanetwork.org/wp-content/uploads/2020/05/2.png",
  "https://womenofafricanetwork.org/wp-content/uploads/2020/05/3.png",
  "https://womenofafricanetwork.org/wp-content/uploads/2020/05/4.png",
  "https://womenofafricanetwork.org/wp-content/uploads/2020/05/5.png",
];

export function WomenPartners() {
  return (
    <section style={{ background: "#fff", padding: "80px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Support Our Organization
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(24px,2.8vw,36px)", fontWeight: 600, color: BG, lineHeight: 1.15, marginBottom: 40 }}>
          Partners & <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Sponsors</em>
        </h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          {PARTNERS.map((src, i) => (
            <div key={i} style={{ width: 120, height: 80, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.6, filter: "grayscale(1)", transition: "all 0.3s" }} className="partner-logo">
              <img src={src} alt={`Partner ${i + 1}`} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
      <style>{`.partner-logo:hover { opacity: 1; filter: grayscale(0); }`}</style>
    </section>
  );
}
