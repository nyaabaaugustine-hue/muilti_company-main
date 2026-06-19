"use client";
import { Mail, Phone, Globe, MapPin, Send } from "lucide-react";
import { openContactModal } from "@/components/sections/ContactModal";

const GOLD = "#D4A017";

const INFO = [
  { icon: <MapPin size={17} />, label: "Address", value: "P.O. Box SK 2290, Sakumono, Accra — Ghana" },
  { icon: <Phone size={17} />, label: "Phone",   value: "+233 244 868 395" },
  { icon: <Mail size={17} />, label: "Email",   value: "info@womenofafricanetwork.org" },
  { icon: <Globe size={17} />, label: "Website", value: "womenofafricanetwork.org" },
];

const OFFICES = [
  { region: "West Africa",    city: "Accra, Ghana",          flag: "🇬🇭" },
  { region: "East Africa",    city: "Nairobi, Kenya",        flag: "🇰🇪" },
  { region: "Southern Africa",city: "Johannesburg, SA",      flag: "🇿🇦" },
  { region: "North Africa",   city: "Cairo, Egypt",          flag: "🇪🇬" },
];

export function WomenContact() {
  return (
    <section id="contact" className="wan-contact" style={{ background: "#0A0A0A", padding: "clamp(40px, 8vw, 100px) clamp(16px, 4vw, 64px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>
          <span style={{ width: 28, height: 2, background: GOLD, display: "block", borderRadius: 1 }} />
          Contact Us
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,50px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 56 }}>
          Get <em style={{ color: GOLD, fontStyle: "italic", fontWeight: 400 }}>In Touch</em>
        </h2>

        <div className="wan-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "stretch" }}>
          {/* Left info */}
          <div>
            <p style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.90, marginBottom: 32 }}>
              Whether you want to volunteer, donate, become a member or partner with us — we'd love to hear from you. Here at WAN, we know that sometimes all it takes to change the world is a little support.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 36 }}>
              {INFO.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 40, height: 40, background: `${GOLD}15`, border: `1.5px solid ${GOLD}44`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: GOLD, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "rgba(255,255,255,0.82)", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: `1px solid ${GOLD}22`, paddingTop: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>Regional Offices</div>
              <div className="wan-contact-offices" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {OFFICES.map((o, i) => (
                  <div key={i} style={{ background: "#1A1A1A", border: `1px solid ${GOLD}22`, borderRadius: 3, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 18 }}>{o.flag}</span>
                    <div>
                      <div style={{ fontSize: "clamp(10px, 2vw, 12px)", color: GOLD, fontWeight: 700, letterSpacing: "0.06em" }}>{o.region}</div>
                      <div style={{ fontSize: "clamp(11px, 2vw, 12px)", color: "rgba(255,255,255,0.65)" }}>{o.city}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Send a Message CTA card (opens the popup form) */}
          <div
            style={{
              background: "#1A1A1A",
              border: `1px solid ${GOLD}33`,
              borderRadius: 4,
              padding: "clamp(32px, 5vw, 56px)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${GOLD},#F0C040,${GOLD})` }} />
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: `${GOLD}1A`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 22,
              }}
            >
              <Mail size={28} color={GOLD} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(24px, 4vw, 28px)", color: "#fff", marginBottom: 12 }}>
              Send Us a Message
            </h3>
            <p style={{ fontSize: "clamp(13px, 2.5vw, 14px)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75, marginBottom: 28, maxWidth: 320 }}>
              Tell us how you'd like to get involved and our team will respond within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => openContactModal("Women of Africa Network")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: `linear-gradient(135deg,#b3850f,${GOLD})`,
                color: "#000",
                border: "none",
                padding: "14px 32px",
                borderRadius: 2,
                cursor: "pointer",
                fontSize: "clamp(11px, 2vw, 12px)",
                fontWeight: 700,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                boxShadow: `0 8px 28px ${GOLD}40`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = `0 14px 36px ${GOLD}55`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 8px 28px ${GOLD}40`;
              }}
            >
              <Send size={14} /> Open Contact Form
            </button>
          </div>
        </div>
      </div>
      <style>{`
@media(max-width:767px){
  .wan-contact-grid{grid-template-columns:1fr!important}
  .wan-contact-offices{grid-template-columns:1fr!important}
}
`}</style>
    </section>
  );
}
