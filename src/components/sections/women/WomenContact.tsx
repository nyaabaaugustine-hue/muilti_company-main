"use client";
import { useState } from "react";

const GOLD = "#D4A017";

const INFO = [
  { icon: "📍", label: "Address", value: "P.O. Box SK 2290, Sakumono, Accra — Ghana" },
  { icon: "📞", label: "Phone",   value: "+233 244 868 395" },
  { icon: "✉️", label: "Email",   value: "info@womenofafricanetwork.org" },
  { icon: "🌐", label: "Website", value: "womenofafricanetwork.org" },
];

const OFFICES = [
  { region: "West Africa",    city: "Accra, Ghana",          flag: "🇬🇭" },
  { region: "East Africa",    city: "Nairobi, Kenya",        flag: "🇰🇪" },
  { region: "Southern Africa",city: "Johannesburg, SA",      flag: "🇿🇦" },
  { region: "North Africa",   city: "Cairo, Egypt",          flag: "🇪🇬" },
];

export function WomenContact() {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" style={{ background: "#0A0A0A", padding: "100px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>
          <span style={{ width: 28, height: 2, background: GOLD, display: "block", borderRadius: 1 }} />
          Contact Us
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,50px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 56 }}>
          Get <em style={{ color: GOLD, fontStyle: "italic", fontWeight: 400 }}>In Touch</em>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "start" }}>
          {/* Left info */}
          <div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.90, marginBottom: 32 }}>
              Whether you want to volunteer, donate, become a member or partner with us — we'd love to hear from you. Here at WAN, we know that sometimes all it takes to change the world is a little support.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 36 }}>
              {INFO.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 40, height: 40, background: `${GOLD}15`, border: `1.5px solid ${GOLD}44`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: GOLD, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: `1px solid ${GOLD}22`, paddingTop: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>Regional Offices</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {OFFICES.map((o, i) => (
                  <div key={i} style={{ background: "#1A1A1A", border: `1px solid ${GOLD}22`, borderRadius: 3, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 18 }}>{o.flag}</span>
                    <div>
                      <div style={{ fontSize: 10, color: GOLD, fontWeight: 700, letterSpacing: "0.06em" }}>{o.region}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{o.city}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div style={{ background: "#1A1A1A", border: `1px solid ${GOLD}33`, borderRadius: 4, padding: 36, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${GOLD},#F0C040,${GOLD})` }} />
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>💌</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: "#fff", marginBottom: 10 }}>Message Received!</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.60)" }}>We'll respond within 24 hours.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 20, background: GOLD, color: "#000", border: "none", padding: "10px 24px", borderRadius: 2, cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handle} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, color: "#fff", marginBottom: 4 }}>Send a Message</h3>
                {[
                  { key: "name",  label: "Full Name",        placeholder: "Your name",              type: "text" },
                  { key: "email", label: "Email Address",     placeholder: "your@email.com",         type: "email" },
                  { key: "org",   label: "Organisation",      placeholder: "Company / Institution",  type: "text" },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: `${GOLD}bb`, marginBottom: 6 }}>{label}</label>
                    <input type={type} placeholder={placeholder} value={form[key as keyof typeof form]} onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))} required
                      style={{ width: "100%", padding: "11px 14px", background: "#0A0A0A", border: `1px solid ${GOLD}33`, borderRadius: 3, fontSize: 13, color: "#fff", outline: "none", fontFamily: "inherit", transition: "border-color 0.2s", boxSizing: "border-box" }}
                      onFocus={e => (e.target.style.borderColor = GOLD)}
                      onBlur={e => (e.target.style.borderColor = `${GOLD}33`)} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: `${GOLD}bb`, marginBottom: 6 }}>Message</label>
                  <textarea placeholder="How can we assist you?" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} required rows={4}
                    style={{ width: "100%", padding: "11px 14px", background: "#0A0A0A", border: `1px solid ${GOLD}33`, borderRadius: 3, fontSize: 13, color: "#fff", outline: "none", fontFamily: "inherit", resize: "vertical", transition: "border-color 0.2s", boxSizing: "border-box" }}
                    onFocus={e => (e.target.style.borderColor = GOLD)}
                    onBlur={e => (e.target.style.borderColor = `${GOLD}33`)} />
                </div>
                <button type="submit"
                  style={{ background: GOLD, color: "#000", border: "none", padding: "13px 28px", borderRadius: 2, cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", alignSelf: "flex-start" }}>
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
