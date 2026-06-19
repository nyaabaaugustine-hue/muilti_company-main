"use client";
import { Mail, Phone, Globe, MapPin, Send } from "lucide-react";
import { openContactModal } from "@/components/sections/ContactModal";

const A = "#F59E0B";

const INFO = [
  { icon: <MapPin size={16} />, label: "Address", value: "P.O. Box SK 2290, Sakumono, Accra — Ghana" },
  { icon: <Phone size={16} />, label: "Phone", value: "+233 244 868 395" },
  { icon: <Mail size={16} />, label: "Email", value: "info@afcftapolicy.net" },
  { icon: <Globe size={16} />, label: "Website", value: "afcftapolicy.net" },
];

const OFFICES = [
  { region: "West Africa", city: "Accra, Ghana", flag: "🇬🇭" },
  { region: "East Africa", city: "Nairobi, Kenya", flag: "🇰🇪" },
  { region: "Southern Africa", city: "Johannesburg, SA", flag: "🇿🇦" },
  { region: "North Africa", city: "Cairo, Egypt", flag: "🇪🇬" },
];

export function AfcftaContact() {
  return (
    <section id="contact" style={{ background: "#1E293B", padding: "clamp(40px, 8vw, 100px) clamp(16px, 4vw, 64px)" }}>
      <style>{`
        .afcfta-contact-grid{display:grid;grid-template-columns:1fr;gap:32px;align-items:stretch;}
        .afcfta-offices-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
        @media(min-width:768px){
          .afcfta-contact-grid{grid-template-columns:1fr 1.4fr;gap:48px;}
        }
        @media(max-width:600px){
          #contact{padding:60px 20px!important;}
          .afcfta-contact-header{flex-direction:column!important;align-items:flex-start!important;gap:12px!important;}
          .afcfta-offices-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:900px) and (min-width:601px){
          #contact{padding:80px 32px!important;}
        }
      `}</style>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Contact Us
        </div>
        <div className="afcfta-contact-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,5vw,48px)", fontWeight: 600, color: "#fff", lineHeight: 1.15, margin: 0 }}>
            Get <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>In Touch</em>
          </h2>
        </div>

        <div className="afcfta-contact-grid">
          <div>
            <p style={{ fontSize: "clamp(13px,2.5vw,16px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: 32 }}>
              Whether you're a government official, trade practitioner, researcher, CSO or business leader — we want to hear from you. Let's advance Africa's free trade agenda together.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 36 }}>
              {INFO.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 38, height: 38, background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: A, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: A, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: "clamp(12px,2.2vw,14px)", color: "rgba(255,255,255,0.80)", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(245,158,11,0.15)", paddingTop: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: A, marginBottom: 16 }}>Regional Offices</div>
              <div className="afcfta-offices-grid">
                {OFFICES.map((o, i) => (
                  <div key={i} style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.12)", borderRadius: 3, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 18 }}>{o.flag}</span>
                    <div>
                      <div style={{ fontSize: 10, color: A, fontWeight: 700, letterSpacing: "0.06em" }}>{o.region}</div>
                      <div style={{ fontSize: "clamp(11px,2vw,13px)", color: "rgba(255,255,255,0.70)" }}>{o.city}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Send a Message CTA card (opens the popup form) */}
          <div
            style={{
              background: "rgba(15,23,42,0.80)",
              border: "1px solid rgba(245,158,11,0.15)",
              borderRadius: 4,
              padding: "clamp(32px,5vw,56px)",
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
                background: "rgba(245,158,11,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 22,
              }}
            >
              <Mail size={28} color={A} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,4vw,26px)", color: "#fff", marginBottom: 12 }}>
              Send Us a Message
            </h3>
            <p style={{ fontSize: "clamp(13px,2.5vw,14px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 28, maxWidth: 320 }}>
              Reach out on policy engagement, partnerships, or research collaboration — our team responds within 2 business days.
            </p>
            <button
              type="button"
              onClick={() => openContactModal("AfCFTA Policy Network")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: `linear-gradient(135deg,#B45309,${A})`,
                color: "#0C0A04",
                border: "none",
                padding: "14px 32px",
                borderRadius: 2,
                cursor: "pointer",
                fontSize: "clamp(12px,2.2vw,14px)",
                fontWeight: 700,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                boxShadow: "0 8px 28px rgba(245,158,11,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(245,158,11,0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,158,11,0.35)";
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
