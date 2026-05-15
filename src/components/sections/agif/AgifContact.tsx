"use client";
import { useState } from "react";

const A = "#10B981";
const BG = "#042f1e";

const SECTORS = [
  "Infrastructure & Transport", "Energy & Renewables", "Fintech & Banking",
  "Agriculture & Agribusiness", "Real Estate & Housing", "Healthcare",
  "Technology & ICT", "Mining & Natural Resources", "Manufacturing",
  "Tourism & Hospitality", "Trade & Logistics", "Other",
];

const INFO = [
  { icon: "📍", label: "Secretariat", value: "P.O. Box SK 2290, Sakumono, Accra — Ghana" },
  { icon: "✉️", label: "Email", value: "info@africaglobalizedinvestment.com" },
  { icon: "📞", label: "Phone", value: "+233 244 868 395" },
  { icon: "🌐", label: "Website", value: "africaglobalizedinvestment.com" },
];

export function AgifContact() {
  const [form, setForm] = useState({
    name: "", org: "", email: "", phone: "",
    country: "", sector: "", interest: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      style={{ background: "linear-gradient(180deg,#0A2318 0%,#042f1e 100%)", padding: "100px 64px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Contact AGIF
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 600, color: "#fff", lineHeight: 1.15, margin: 0 }}>
            Register Your <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Interest</em>
          </h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.58)", maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
            Whether you're an investor, government official or corporate delegate — connect with the AGIF team today.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48, alignItems: "start" }}>
          {/* Info */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {INFO.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 40, height: 40, background: "rgba(16,185,129,0.10)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: A, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summit CTA */}
            <div style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.22)", borderRadius: 4, padding: "28px 24px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: A, marginBottom: 10 }}>
                🗓 Next Summit
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 600, color: "#fff", marginBottom: 8 }}>
                March 12–15, 2025
              </div>
              <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 20 }}>
                Accra International Conference Centre, Ghana. Register now for early-bird delegate pricing before spaces fill.
              </p>
              <a
                href="#"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `linear-gradient(135deg,#047857,${A})`, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", padding: "11px 22px", borderRadius: 2, textDecoration: "none", boxShadow: "0 6px 24px rgba(16,185,129,0.30)" }}
              >
                Register Now →
              </a>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "rgba(4,47,30,0.60)", border: "1px solid rgba(16,185,129,0.18)", borderRadius: 4, padding: 36 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "50px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 18 }}>📬</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, color: "#fff", marginBottom: 12 }}>
                  Interest Registered!
                </h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
                  Our team will reach out within 48 hours with summit details and delegate packages.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{ marginTop: 24, background: A, color: "#042f1e", border: "none", padding: "11px 28px", borderRadius: 2, cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handle} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: "#fff", marginBottom: 4, gridColumn: "1/-1" }}>
                  Register Your Interest
                </h3>

                {[
                  { key: "name", label: "Full Name", placeholder: "Your full name", type: "text", col: 1 },
                  { key: "org", label: "Organisation", placeholder: "Company / Institution", type: "text", col: 1 },
                  { key: "email", label: "Email", placeholder: "your@email.com", type: "email", col: 1 },
                  { key: "phone", label: "Phone", placeholder: "+1 234 567 8900", type: "tel", col: 1 },
                  { key: "country", label: "Country", placeholder: "Your country", type: "text", col: 1 },
                ].map(({ key, label, placeholder, type, col }) => (
                  <div key={key} style={{ gridColumn: col === 1 ? undefined : "1/-1" }}>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(16,185,129,0.75)", marginBottom: 6 }}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                      required={["name", "email", "country"].includes(key)}
                      style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(16,185,129,0.20)", borderRadius: 3, fontSize: 13, color: "#fff", outline: "none", fontFamily: "inherit", transition: "border-color 0.2s", boxSizing: "border-box" }}
                      onFocus={e => (e.target.style.borderColor = A)}
                      onBlur={e => (e.target.style.borderColor = "rgba(16,185,129,0.20)")}
                    />
                  </div>
                ))}

                {/* Sector select */}
                <div style={{ gridColumn: "1/-1" }}>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(16,185,129,0.75)", marginBottom: 6 }}>Investment Sector</label>
                  <select
                    value={form.sector}
                    onChange={e => setForm(p => ({ ...p, sector: e.target.value }))}
                    style={{ width: "100%", padding: "11px 14px", background: "#042f1e", border: "1px solid rgba(16,185,129,0.20)", borderRadius: 3, fontSize: 13, color: form.sector ? "#fff" : "rgba(255,255,255,0.40)", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
                    onFocus={e => (e.target.style.borderColor = A)}
                    onBlur={e => (e.target.style.borderColor = "rgba(16,185,129,0.20)")}
                  >
                    <option value="" disabled>Select your primary sector</option>
                    {SECTORS.map(s => <option key={s} value={s} style={{ background: "#042f1e", color: "#fff" }}>{s}</option>)}
                  </select>
                </div>

                {/* Interest type */}
                <div style={{ gridColumn: "1/-1" }}>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(16,185,129,0.75)", marginBottom: 8 }}>I'm Interested In</label>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Attending Summit", "Exhibiting", "Speaking", "Sponsorship", "Deal Rooms", "PPP Projects"].map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm(p => ({ ...p, interest: opt }))}
                        style={{
                          padding: "7px 14px", borderRadius: 2, fontSize: 11, fontWeight: 600,
                          cursor: "pointer", transition: "all 0.2s",
                          background: form.interest === opt ? A : "transparent",
                          color: form.interest === opt ? "#042f1e" : "rgba(255,255,255,0.65)",
                          border: `1px solid ${form.interest === opt ? A : "rgba(16,185,129,0.25)"}`,
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div style={{ gridColumn: "1/-1" }}>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(16,185,129,0.75)", marginBottom: 6 }}>Additional Notes</label>
                  <textarea
                    placeholder="Tell us about your investment focus, portfolio size, or any specific requirements..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    rows={3}
                    style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(16,185,129,0.20)", borderRadius: 3, fontSize: 13, color: "#fff", outline: "none", fontFamily: "inherit", resize: "vertical", transition: "border-color 0.2s", boxSizing: "border-box" }}
                    onFocus={e => (e.target.style.borderColor = A)}
                    onBlur={e => (e.target.style.borderColor = "rgba(16,185,129,0.20)")}
                  />
                </div>

                <div style={{ gridColumn: "1/-1" }}>
                  <button
                    type="submit"
                    style={{ background: `linear-gradient(135deg,#047857,${A})`, color: "#fff", border: "none", padding: "13px 32px", borderRadius: 2, cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", boxShadow: "0 6px 24px rgba(16,185,129,0.30)" }}
                  >
                    Submit Interest →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
