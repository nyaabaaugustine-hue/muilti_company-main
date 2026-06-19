"use client";
import { Mail, Phone, Globe, MapPin, Send } from "lucide-react";
import { openContactModal } from "@/components/sections/ContactModal";

const A = "#f28d01";
const BG = "#000040";

const INFO = [
  { icon: <MapPin size={18} />, label: "Address", value: "Cita House, Osu, Accra — Ghana" },
  { icon: <Phone size={18} />, label: "Phone", value: "+233 24 486 8395" },
  { icon: <Mail size={18} />, label: "Email", value: "info@abec500.com" },
  { icon: <Globe size={18} />, label: "Website", value: "www.abec500.com" },
];

export function AbecContact() {
  return (
    <section id="contact" style={{ background: "#f8f6f0", padding: "100px 64px" }}>
      <style>{`
        .abec-contact-grid{display:grid;grid-template-columns:1fr 1.5fr;gap:48px;align-items:stretch;}
        @media(max-width:768px){
          #contact{padding:60px 24px!important;}
          .abec-contact-grid{grid-template-columns:1fr!important;gap:32px!important;}
        }
      `}</style>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Get In Touch
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 600, color: BG, lineHeight: 1.15, marginBottom: 56 }}>
          Contact <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>ABEC500</em>
        </h2>

        <div className="abec-contact-grid">
          {/* Info */}
          <div>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, marginBottom: 36 }}>
              Ready to join Africa's premier export network? Reach out to us — our team is here to help you expand your business across 54 African nations and beyond.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {INFO.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 40, height: 40, background: BG, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: A, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: A, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: "#333", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Join CTA */}
            <div style={{ marginTop: 40, padding: "24px 28px", background: BG, borderRadius: 4, borderLeft: `4px solid ${A}` }}>
              <div style={{ fontSize: 11, color: A, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 8 }}>Join ABEC500</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 16 }}>
                Become a member of Africa's fastest-growing export club and unlock access to global markets.
              </p>
              <button
                type="button"
                onClick={() => openContactModal("Africa Business Export Club 500")}
                style={{ display: "inline-block", background: `linear-gradient(135deg,#b36900,${A})`, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", padding: "10px 22px", borderRadius: 2, border: "none", cursor: "pointer" }}
              >
                Register Now →
              </button>
            </div>
          </div>

          {/* Send a Message CTA card (opens the popup form) */}
          <div
            style={{
              background: "#fff",
              borderRadius: 4,
              padding: "clamp(32px,5vw,56px)",
              border: "1px solid rgba(0,0,64,0.08)",
              boxShadow: "0 4px 24px rgba(0,0,64,0.06)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: `${A}1A`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 22,
              }}
            >
              <Mail size={28} color={A} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, color: BG, marginBottom: 12 }}>
              Send Us a Message
            </h3>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 28, maxWidth: 320 }}>
              Tell us about your export needs and our team will get back to you within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => openContactModal("Africa Business Export Club 500")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: `linear-gradient(135deg,#b36900,${A})`,
                color: "#fff",
                border: "none",
                padding: "14px 32px",
                borderRadius: 2,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                boxShadow: "0 8px 28px rgba(242,141,1,0.30)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(242,141,1,0.45)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(242,141,1,0.30)";
              }}
            >
              <Send size={14} /> Open Contact Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
