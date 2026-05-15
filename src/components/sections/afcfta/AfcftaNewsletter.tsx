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
        padding: "80px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <div style={{ position: "absolute", top: "-40%", right: "-10%", width: "50%", height: "200%", background: "radial-gradient(ellipse,rgba(245,158,11,0.08) 0%,transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-40%", left: "-10%", width: "50%", height: "200%", background: "radial-gradient(ellipse,rgba(245,158,11,0.05) 0%,transparent 60%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 20 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Stay Informed
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 600, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
          Subscribe to Our <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Newsletter</em>
        </h2>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
          Get the latest updates on AfCFTA implementation, trade policy research, events and capacity-building opportunities delivered directly to your inbox.
        </p>

        {sent ? (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)", borderRadius: 4, padding: "16px 28px" }}>
            <span style={{ fontSize: 20 }}>✅</span>
            <span style={{ color: A, fontWeight: 600, fontSize: 14 }}>You're subscribed! Welcome to the AfCFTA Policy Network community.</span>
          </div>
        ) : (
          <form onSubmit={handle} style={{ display: "flex", gap: 0, maxWidth: 480, margin: "0 auto", boxShadow: "0 8px 40px rgba(0,0,0,0.30)" }}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ flex: 1, padding: "14px 18px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(245,158,11,0.25)", borderRight: "none", borderRadius: "4px 0 0 4px", fontSize: 13, color: "#fff", outline: "none", fontFamily: "inherit" }}
            />
            <button
              type="submit"
              style={{ padding: "14px 28px", background: `linear-gradient(135deg,#B45309,${A})`, color: "#0C0A04", border: "none", borderRadius: "0 4px 4px 0", cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}
            >
              Subscribe →
            </button>
          </form>
        )}

        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 16 }}>
          No spam. Unsubscribe at any time. By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
