"use client";
import { useState } from "react";

const A = "#F59E0B";
const BG = "#0F172A";

const INFO = [
  { icon: "📍", label: "Address", value: "P.O. Box SK 2290, Sakumono, Accra — Ghana" },
  { icon: "📞", label: "Phone", value: "+233 244 868 395" },
  { icon: "✉️", label: "Email", value: "info@afcftapolicy.net" },
  { icon: "🌐", label: "Website", value: "afcftapolicy.net" },
];

const OFFICES = [
  { region: "West Africa", city: "Accra, Ghana", flag: "🇬🇭" },
  { region: "East Africa", city: "Nairobi, Kenya", flag: "🇰🇪" },
  { region: "Southern Africa", city: "Johannesburg, SA", flag: "🇿🇦" },
  { region: "North Africa", city: "Cairo, Egypt", flag: "🇪🇬" },
];

export function AfcftaContact() {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: "#1E293B", padding: "100px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Contact Us
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 600, color: "#fff", lineHeight: 1.15, margin: 0 }}>
            Get <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>In Touch</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "start" }}>
          {/* Left */}
          <div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: 32 }}>
              Whether you're a government official, trade practitioner, researcher, CSO or business leader — we want to hear from you. Let's advance Africa's free trade agenda together.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 36 }}>
              {INFO.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 38, height: 38, background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: A, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.80)", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Regional offices */}
            <div style={{ borderTop: "1px solid rgba(245,158,11,0.15)", paddingTop: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: A, marginBottom: 16 }}>Regional Offices</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {OFFICES.map((o, i) => (
                  <div key={i} style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.12)", borderRadius: 3, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 18 }}>{o.flag}</span>
                    <div>
                      <div style={{ fontSize: 10, color: A, fontWeight: 700, letterSpacing: "0.06em" }}>{o.region}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.70)" }}>{o.city}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "rgba(15,23,42,0.80)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: 4, padding: 36 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>📬</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: "#fff", marginBottom: 10 }}>Message Received!</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>Our team will respond within 2 business days.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 20, background: A, color: "#0C0A04", border: "none", padding: "10px 24px", borderRadius: 2, cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handle} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, color: "#fff", marginBottom: 4 }}>Send a Message</h3>
                {[
                  { key: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                  { key: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
                  { key: "org", label: "Organisation", placeholder: "Company / Institution", type: "text" },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,158,11,0.70)", marginBottom: 6 }}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                      required
                      style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(245,158,11,0.20)", borderRadius: 3, fontSize: 13, color: "#fff", outline: "none", fontFamily: "inherit", transition: "border-color 0.2s", boxSizing: "border-box" }}
                      onFocus={e => (e.target.style.borderColor = A)}
                      onBlur={e => (e.target.style.borderColor = "rgba(245,158,11,0.20)")}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,158,11,0.70)", marginBottom: 6 }}>Message</label>
                  <textarea
                    placeholder="How can we assist you?"
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    required
                    rows={4}
                    style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(245,158,11,0.20)", borderRadius: 3, fontSize: 13, color: "#fff", outline: "none", fontFamily: "inherit", resize: "vertical", transition: "border-color 0.2s", boxSizing: "border-box" }}
                    onFocus={e => (e.target.style.borderColor = A)}
                    onBlur={e => (e.target.style.borderColor = "rgba(245,158,11,0.20)")}
                  />
                </div>
                <button
                  type="submit"
                  style={{ background: `linear-gradient(135deg,#B45309,${A})`, color: "#0C0A04", border: "none", padding: "13px 28px", borderRadius: 2, cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", alignSelf: "flex-start" }}
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
