"use client";
import { useState } from "react";

const A = "#EC4899";
const BG = "#1a0520";

const INFO = [
  { icon: "📍", label: "Address", value: "P.O. Box 2290 Sakumo, Accra — Ghana" },
  { icon: "📞", label: "Phone", value: "+233 24 486 8395 / +233 24 347 5029" },
  { icon: "✉️", label: "Email", value: "info@womenofafricanetwork.org" },
  { icon: "🌐", label: "Website", value: "womenofafricanetwork.org" },
];

export function WomenContact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: "#fdf8fb", padding: "100px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Get Involved
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 600, color: BG, lineHeight: 1.15, marginBottom: 56 }}>
          Contact <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>WAN</em>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "start" }}>
          {/* Left info */}
          <div>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 36 }}>
              Here at Women of Africa Network, we know that sometimes all it takes to change the world is a little support. Whether you want to volunteer, donate, become a member or partner with us — we&apos;d love to hear from you.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {INFO.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 40, height: 40, background: BG, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: A, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: "#333", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Social links */}
            <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              <a href="https://www.facebook.com/NetworkWoa" target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, background: BG, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", fontSize: 14 }}>f</a>
              <a href="https://twitter.com/NetworkWoa" target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, background: BG, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", fontSize: 14 }}>𝕏</a>
            </div>
            {/* Donate CTA */}
            <div style={{ marginTop: 32, padding: "24px 28px", background: BG, borderRadius: 4, borderLeft: `4px solid ${A}` }}>
              <div style={{ fontSize: 11, color: A, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 8 }}>Support Our Mission</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 16 }}>
                Every donation directly funds a girl&apos;s education, a woman&apos;s business, or a community&apos;s future.
              </p>
              <a href="#" style={{ display: "inline-block", background: `linear-gradient(135deg,#9D174D,${A})`, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", padding: "10px 22px", borderRadius: 2, textDecoration: "none" }}>
                Donate Now →
              </a>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#fff", borderRadius: 4, padding: 36, border: "1px solid rgba(236,72,153,0.12)", boxShadow: "0 4px 24px rgba(236,72,153,0.06)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>💌</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: BG, marginBottom: 10 }}>Thank You!</h3>
                <p style={{ fontSize: 14, color: "#666" }}>Your message has been received. We&apos;ll respond within 24 hours.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 20, background: A, color: "#fff", border: "none", padding: "10px 24px", borderRadius: 2, cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handle} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, color: BG, marginBottom: 4 }}>Send a Message</h3>
                {[
                  { key: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                  { key: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
                  { key: "subject", label: "Subject", placeholder: "How can we help?", type: "text" },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                      required
                      style={{ width: "100%", padding: "11px 14px", border: "1px solid #e8e0ec", borderRadius: 3, fontSize: 13, outline: "none", fontFamily: "inherit", background: "#fafafa", transition: "border-color 0.2s", boxSizing: "border-box" }}
                      onFocus={e => (e.target.style.borderColor = A)}
                      onBlur={e => (e.target.style.borderColor = "#e8e0ec")}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>Message</label>
                  <textarea
                    placeholder="Tell us how you'd like to get involved..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    required
                    rows={4}
                    style={{ width: "100%", padding: "11px 14px", border: "1px solid #e8e0ec", borderRadius: 3, fontSize: 13, outline: "none", fontFamily: "inherit", resize: "vertical", background: "#fafafa", transition: "border-color 0.2s", boxSizing: "border-box" }}
                    onFocus={e => (e.target.style.borderColor = A)}
                    onBlur={e => (e.target.style.borderColor = "#e8e0ec")}
                  />
                </div>
                <button
                  type="submit"
                  style={{ background: `linear-gradient(135deg,#9D174D,${A})`, color: "#fff", border: "none", padding: "13px 28px", borderRadius: 2, cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", alignSelf: "flex-start", boxShadow: "0 6px 24px rgba(236,72,153,0.30)" }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
