"use client";
import { Mail, Phone, Globe, MapPin, Send } from "lucide-react";
import { openContactModal } from "@/components/sections/ContactModal";

const A = "#10B981";

const INFO = [
  { icon: <MapPin size={17} />, label: "Secretariat", value: "P.O. Box SK 2290, Sakumono, Accra — Ghana" },
  { icon: <Mail size={17} />, label: "Email", value: "info@africaglobalizedinvestment.com" },
  { icon: <Phone size={17} />, label: "Phone", value: "+233 244 868 395" },
  { icon: <Globe size={17} />, label: "Website", value: "africaglobalizedinvestment.com" },
];

export function AgifContact() {
  return (
    <section id="contact" style={{ background: "linear-gradient(180deg,#0A2318 0%,#042f1e 100%)", padding: "100px 64px" }}>
      <style>{`
        .agif-contact-grid{display:grid;grid-template-columns:1fr 1.6fr;gap:48px;align-items:stretch;}
        @media(max-width:768px){
          #contact{padding:60px 20px!important;}
          .agif-contact-grid{grid-template-columns:1fr!important;gap:32px!important;}
          .agif-contact-header{flex-direction:column!important;align-items:flex-start!important;gap:12px!important;}
        }
        @media(max-width:900px) and (min-width:769px){
          #contact{padding:80px 32px!important;}
          .agif-contact-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Contact AGIF
        </div>
        <div className="agif-contact-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 600, color: "#fff", lineHeight: 1.15, margin: 0 }}>
            Register Your <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Interest</em>
          </h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.58)", maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
            Whether you're an investor, government official or corporate delegate — connect with the AGIF team today.
          </p>
        </div>

        <div className="agif-contact-grid">
          {/* Info */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {INFO.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 40, height: 40, background: "rgba(16,185,129,0.10)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: A, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: A, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.22)", borderRadius: 4, padding: "28px 24px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: A, marginBottom: 10 }}>🗓 Next Summit</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 600, color: "#fff", marginBottom: 8 }}>March 12–15, 2025</div>
              <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 20 }}>
                Accra International Conference Centre, Ghana. Register now for early-bird delegate pricing before spaces fill.
              </p>
              <button
                type="button"
                onClick={() => openContactModal("Africa Globalized Investment Forum")}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `linear-gradient(135deg,#047857,${A})`, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", padding: "11px 22px", borderRadius: 2, border: "none", cursor: "pointer", boxShadow: "0 6px 24px rgba(16,185,129,0.30)" }}
              >
                Register Now →
              </button>
            </div>
          </div>

          {/* Send a Message CTA card (opens the popup form) */}
          <div
            style={{
              background: "rgba(4,47,30,0.60)",
              border: "1px solid rgba(16,185,129,0.18)",
              borderRadius: 4,
              padding: "clamp(36px,5vw,56px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                background: "rgba(16,185,129,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <Mail size={30} color={A} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: "#fff", marginBottom: 12 }}>
              Register Your Interest
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 30, maxWidth: 340 }}>
              Tell us about your investment focus, sector and delegate needs — our team will respond within 48 hours with summit details and packages.
            </p>
            <button
              type="button"
              onClick={() => openContactModal("Africa Globalized Investment Forum")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: `linear-gradient(135deg,#047857,${A})`,
                color: "#fff",
                border: "none",
                padding: "15px 34px",
                borderRadius: 2,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                boxShadow: "0 8px 28px rgba(16,185,129,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(16,185,129,0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(16,185,129,0.35)";
              }}
            >
              <Send size={15} /> Open Contact Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
