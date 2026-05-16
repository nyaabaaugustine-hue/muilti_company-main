"use client";
import { useState } from "react";

const A = "#F59E0B";

export function AfcftaNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg,#0F172A 0%,#1E293B 100%)",
        padding: "clamp(40px, 8vw, 80px) clamp(16px, 4vw, 64px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .afcfta-newsletter-form{display:flex;gap:0;max-width:480px;margin:0 auto;box-shadow:0 8px 40px rgba(0,0,0,0.30);}
        .afcfta-newsletter-input{flex:1;padding:14px 18px;background:rgba(255,255,255,0.08);border:1px solid rgba(245,158,11,0.25);border-right:none;border-radius:4px 0 0 4px;font-size:13px;color:#fff;outline:none;font-family:inherit;width:100%;box-sizing:border-box;}
        .afcfta-newsletter-btn{padding:14px 28px;background:linear-gradient(135deg,#B45309,#F59E0B);color:#0C0A04;border:none;border-radius:0 4px 4px 0;cursor:pointer;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;}
        @media(max-width:480px){
          .afcfta-newsletter-form{flex-direction:column;gap:8px;box-shadow:none;}
          .afcfta-newsletter-input{border-radius:4px;border-right:1px solid rgba(245,158,11,0.25);}
          .afcfta-newsletter-btn{border-radius:4px;text-align:center;}
        }
      `}</style>
      <div style={{ position: "absolute", top: "-40%", right: "-10%", width: "50%", height: "200%", background: "radial-gradient(ellipse,rgba(245,158,11,0.08) 0%,transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-40%", left: "-10%", width: "50%", height: "200%", background: "radial-gradient(ellipse,rgba(245,158,11,0.05) 0%,transparent 60%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 20 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Stay Informed
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,5vw,48px)", fontWeight: 600, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
          Subscribe to Our <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Newsletter</em>
        </h2>
        <p style={{ fontSize: "clamp(13px,2.5vw,16px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
          Get the latest updates on AfCFTA implementation, trade policy research, events and capacity-building opportunities delivered directly to your inbox.
        </p>

        {sent ? (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)", borderRadius: 4, padding: "16px 28px" }}>
            <span style={{ fontSize: 20 }}>✅</span>
            <span style={{ color: A, fontWeight: 600, fontSize: "clamp(12px,2.2vw,14px)" }}>You're subscribed! Welcome to the AfCFTA Policy Network community.</span>
          </div>
        ) : (
          <form onSubmit={handle} className="afcfta-newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="afcfta-newsletter-input"
            />
            <button
              type="submit"
              className="afcfta-newsletter-btn"
            >
              Subscribe →
            </button>
          </form>
        )}

        <p style={{ fontSize: "clamp(10px,1.8vw,12px)", color: "rgba(255,255,255,0.35)", marginTop: 16 }}>
          No spam. Unsubscribe at any time. By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
