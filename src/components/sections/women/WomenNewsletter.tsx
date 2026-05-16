"use client";
import { useState } from "react";

const GOLD = "#D4A017";
const GOLD2 = "#F0C040";

export function WomenNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <section className="wan-newsletter" style={{ background: "#0A0A0A", padding: "clamp(40px, 8vw, 80px) clamp(16px, 4vw, 64px)", position: "relative", overflow: "hidden" }}>
      {/* Subtle gold radial glows */}
      <div style={{ position: "absolute", top: "-60%", right: "-5%", width: "45%", height: "220%", background: `radial-gradient(ellipse,${GOLD}12 0%,transparent 65%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60%", left: "-5%",  width: "45%", height: "220%", background: `radial-gradient(ellipse,${GOLD}08 0%,transparent 65%)`, pointerEvents: "none" }} />
      {/* Top/bottom gold lines */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${GOLD},transparent)` }} />

      <div style={{ maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 20 }}>
          <span style={{ width: 28, height: 2, background: GOLD, display: "block", borderRadius: 1 }} />
          Stay Informed
          <span style={{ width: 28, height: 2, background: GOLD, display: "block", borderRadius: 1 }} />
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,50px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>
          Subscribe to Our <em style={{ color: GOLD, fontStyle: "italic", fontWeight: 400 }}>Newsletter</em>
        </h2>
        <p style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "rgba(255,255,255,0.60)", lineHeight: 1.85, maxWidth: 480, margin: "0 auto 40px" }}>
          Get the latest updates on women's empowerment initiatives, trade facilitation programmes, events and funding opportunities delivered to your inbox.
        </p>

        {sent ? (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: `${GOLD}15`, border: `1px solid ${GOLD}55`, borderRadius: 4, padding: "16px 28px" }}>
            <span style={{ fontSize: 20 }}>✅</span>
            <span style={{ color: GOLD, fontWeight: 700, fontSize: "clamp(13px, 2.5vw, 14px)" }}>You're subscribed! Welcome to the WAN community.</span>
          </div>
        ) : (
          <form onSubmit={handle} className="wan-newsletter-form" style={{ display: "flex", gap: 0, maxWidth: 480, margin: "0 auto", boxShadow: `0 8px 40px ${GOLD}18` }}>
            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required
              style={{ flex: 1, padding: "14px 18px", background: "#1A1A1A", border: `1px solid ${GOLD}33`, borderRight: "none", borderRadius: "4px 0 0 4px", fontSize: "clamp(13px, 2.5vw, 16px)", color: "#fff", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
            <button type="submit"
              style={{ padding: "14px 28px", background: GOLD, color: "#000", border: "none", borderRadius: "0 4px 4px 0", cursor: "pointer", fontSize: "clamp(11px, 2vw, 12px)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Subscribe →
            </button>
          </form>
        )}
        <p style={{ fontSize: "clamp(10px, 2vw, 11px)", color: "rgba(255,255,255,0.28)", marginTop: 16 }}>No spam. Unsubscribe at any time.</p>
      </div>
      <style>{`
@media(max-width:767px){
  .wan-newsletter-form{flex-direction:column!important;gap:8px!important}
  .wan-newsletter-form input{width:100%!important;border-radius:4px!important;border:1px solid ${GOLD}44!important}
  .wan-newsletter-form button{width:100%!important;border-radius:4px!important}
}
`}</style>
    </section>
  );
}
