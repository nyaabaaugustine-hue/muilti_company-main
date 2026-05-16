"use client";
import { useState } from "react";

const A = "#f28d01";
const BG = "#000040";

const STATS = [
  { value: "500+", label: "Active Members" },
  { value: "54", label: "Nations Represented" },
  { value: "$2.4B", label: "Trade Facilitated" },
  { value: "1,200+", label: "Deals Closed" },
];

const MEMBERS = [
  { name: "Akofa Exports Ltd", country: "Ghana 🇬🇭", sector: "Agro-Processing", since: "2020", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80", quote: "ABEC500 opened doors to European buyers we couldn't have reached alone." },
  { name: "NigerTex Industries", country: "Nigeria 🇳🇬", sector: "Textiles & Garments", since: "2021", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", quote: "The AfCFTA compliance support alone is worth the membership fee three times over." },
  { name: "Cape Harvest Co.", country: "South Africa 🇿🇦", sector: "Fresh Produce", since: "2020", img: "https://images.unsplash.com/photo-1506484381205-f7945653044d?w=400&q=80", quote: "Our export volumes grew 40% in the first year after joining ABEC500." },
  { name: "East Africa Minerals", country: "Kenya 🇰🇪", sector: "Mining & Minerals", since: "2022", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80", quote: "The policy advocacy work ABEC500 does protects our entire industry." },
  { name: "Dakar Maritime Group", country: "Senegal 🇸🇳", sector: "Logistics & Shipping", since: "2021", img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&q=80", quote: "ABEC500 gave us credibility and connections across West Africa overnight." },
  { name: "Addis Heritage Crafts", country: "Ethiopia 🇪🇹", sector: "Artisan Goods", since: "2023", img: "https://images.unsplash.com/photo-1471666875520-c75081f42081?w=400&q=80", quote: "Our artisan goods now reach buyers in 12 countries thanks to ABEC500's network." },
];

export function AbecMembers() {
  const [hov, setHov] = useState<number | null>(null);
  return (
    <section id="members" style={{ background: BG, padding: "110px 64px", position: "relative", overflow: "hidden" }}>
      <style>{`
        .abec-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(242,141,1,0.15);border-radius:4px;overflow:hidden;margin-bottom:56px;}
        .abec-members-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px;margin-bottom:52px;}
        .abec-mem-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:56px;flex-wrap:wrap;gap:24px;}
        @media(max-width:600px){
          #members{padding:60px 20px!important;}
          .abec-stats-grid{grid-template-columns:repeat(2,1fr)!important;}
          .abec-members-grid{grid-template-columns:1fr!important;}
          .abec-mem-header{flex-direction:column!important;align-items:flex-start!important;}
        }
        @media(max-width:900px) and (min-width:601px){
          #members{padding:80px 32px!important;}
        }
      `}</style>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,141,1,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(242,141,1,0.04) 1px,transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div className="abec-mem-header">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: A, display: "block" }} />Our Members
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 600, color: "#fff", lineHeight: 1.15, margin: 0 }}>
              500+ Businesses <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Transforming Africa's Trade</em>
            </h2>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", maxWidth: 320, lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
            From agro-processing to minerals, our member network spans every major export sector across 54 African nations.
          </p>
        </div>

        <div className="abec-stats-grid">
          {STATS.map((s, i) => (
            <div key={i} style={{ padding: "28px 24px", background: "rgba(0,0,40,0.85)", textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 38, fontWeight: 700, color: A, lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.50)", textTransform: "uppercase", letterSpacing: "0.15em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="abec-members-grid">
          {MEMBERS.map((m, i) => (
            <div key={i} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${hov === i ? "rgba(242,141,1,0.55)" : "rgba(242,141,1,0.15)"}`, borderRadius: 4, overflow: "hidden", transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)", transform: hov === i ? "translateY(-5px)" : "none", boxShadow: hov === i ? "0 16px 40px rgba(0,0,0,0.35)" : "none" }}>
              <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s", transform: hov === i ? "scale(1.06)" : "scale(1)", filter: "brightness(0.75)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 30%,rgba(0,0,40,0.80) 100%)" }} />
                <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,40,0.85)", border: `1px solid rgba(242,141,1,0.35)`, borderRadius: 2, padding: "3px 10px", fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: A }}>{m.sector}</div>
              </div>
              <div style={{ padding: "18px 20px 22px" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{m.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: 11, color: A, fontWeight: 600 }}>{m.country}</span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.40)", letterSpacing: "0.10em" }}>Member since {m.since}</span>
                </div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.62)", lineHeight: 1.70, fontStyle: "italic", margin: 0, borderLeft: `2px solid rgba(242,141,1,0.35)`, paddingLeft: 12 }}>"{m.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a href="#export-club" style={{ background: `linear-gradient(135deg,#b36900,${A})`, color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", padding: "14px 32px", borderRadius: 2, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: `0 8px 28px rgba(242,141,1,0.35)` }}>Become a Member →</a>
          <a href="#contact" style={{ background: "transparent", border: "1px solid rgba(242,141,1,0.45)", color: A, fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "13px 28px", borderRadius: 2, textDecoration: "none" }}>Contact Us</a>
        </div>
      </div>
    </section>
  );
}
