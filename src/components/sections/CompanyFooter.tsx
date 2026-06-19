"use client";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { ContactModal, openContactModal } from "./ContactModal";

interface CompanyFooterProps {
  companyName: string;
  companyColor?: string;
  accentColor?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  /** Optional image URL to use as CTA band background */
  ctaBgImage?: string;
}

const COMPANY_DEFAULTS: Record<string, { tagline: string; email: string; phone: string; ctaBgImage?: string }> = {
  "AfCFTA Policy Network": {
    tagline: "Building Intra-Africa Trade",
    email: "info@afcftapolicy.net",
    phone: "+233 244 868 395",
  },
  "Africa Globalized Investment Forum": {
    tagline: "Connecting Capital to Africa",
    email: "info@africaglobalizedinvestment.com",
    phone: "+233 244 868 395",
  },
  "Africa Business Export Club 500": {
    tagline: "Exporting African Excellence",
    email: "info@abec500.com",
    phone: "+233 24 486 8395",
  },
  "Women of Africa Network": {
    tagline: "Positively Impacting Women",
    email: "info@womenofafricanetwork.org",
    phone: "+233 244 868 395",
  },
  "APN Youth International": {
    tagline: "Empowering Youth, Transforming Africa",
    email: "info@apnyouth.org",
    phone: "+233 244 868 395",
    ctaBgImage:
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791984/diverse-students-team-engaging-video-call-with-doctor_482257-123361_wpfkt4.avif",
  },
};

export function CompanyFooter({
  companyName,
  companyColor,
  accentColor,
  tagline: taglineProp,
  email: emailProp,
  phone: phoneProp,
  ctaBgImage: ctaBgProp,
}: CompanyFooterProps) {
  const color = accentColor ?? companyColor ?? "#C9A84C";
  const defaults = COMPANY_DEFAULTS[companyName] ?? {
    tagline: "A UnifiedNexus Company",
    email: "info@apnabec.com",
    phone: "+233 244 868 395",
  };
  const tagline = taglineProp ?? defaults.tagline;
  const email = emailProp ?? defaults.email;
  const phone = phoneProp ?? defaults.phone;
  const ctaBgImage = ctaBgProp ?? defaults.ctaBgImage ?? null;

  return (
    <>
      <style>{`
        .footer-cta-inner { flex-direction: column; text-align: center; }
        @media (min-width: 768px) {
          .footer-cta-inner { flex-direction: row; text-align: left; }
        }
        .footer-bottom { flex-direction: column; text-align: center; }
        @media (min-width: 768px) {
          .footer-bottom { flex-direction: row; text-align: left; }
        }
        @media (max-width: 480px) {
          .footer-bottom > div:last-child { flex-direction: column; gap: 8px; }
        }
      `}</style>

      <ContactModal companyName={companyName} accentColor={color} />

      <footer id="contact" style={{ backgroundColor: "#0A1422", borderTop: `1px solid ${color}30` }}>

        {/* ── CTA band — with optional image background ── */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",
            borderBottom: `1px solid ${color}25`,
            padding: "clamp(56px, 8vw, 96px) clamp(24px, 4vw, 64px)",
          }}
        >
          {/* Background image (only rendered when provided) */}
          {ctaBgImage && (
            <>
              <img
                src={ctaBgImage}
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 40%",
                  zIndex: -2,
                  display: "block",
                }}
              />
              {/* Multi-stop overlay: deep navy → near-transparent center → deep navy */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: -1,
                  backgroundImage: `linear-gradient(
                    135deg,
                    rgba(10,20,34,0.95) 0%,
                    rgba(10,20,34,0.75) 45%,
                    rgba(10,20,34,0.90) 100%
                  )`,
                }}
              />
              {/* Gold accent tint strip at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  zIndex: 0,
                  backgroundImage: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                }}
              />
            </>
          )}

          {/* Content */}
          <div
            className="footer-cta-inner"
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 40,
            }}
          >
            {/* Left — text */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color,
                  marginBottom: 14,
                }}
              >
                <span style={{ width: 24, height: 1, backgroundImage: "none", backgroundColor: color, display: "block" }} />
                Start a Conversation
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(28px, 3vw, 48px)",
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.2,
                  maxWidth: 480,
                }}
              >
                Ready to Work{" "}
                <em style={{ color, fontStyle: "italic", fontWeight: 400 }}>Together?</em>
              </h2>
              <p
                style={{
                  marginTop: 14,
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 14,
                  maxWidth: 400,
                  lineHeight: 1.6,
                }}
              >
                Whether you are a student, entrepreneur, innovator or community leader — join the movement shaping Africa's economic future.
              </p>
            </div>

            {/* Right — action buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <button
                type="button"
                onClick={() => openContactModal(companyName)}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${color}cc, ${color})`,
                  color: "#0A1628",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "16px 36px",
                  borderRadius: 3,
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  boxShadow: `0 8px 32px ${color}50`,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = `0 14px 40px ${color}60`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = `0 8px 32px ${color}50`;
                }}
              >
                <Mail size={15} /> Send a Message
              </button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                <Phone size={14} style={{ color }} /> {phone}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="footer-bottom"
          style={{
            padding: "clamp(20px, 4vw, 28px) clamp(24px, 4vw, 64px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 24,
                height: 24,
                backgroundImage: "linear-gradient(135deg,#C9A84C,#E4C876)",
                clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
              }}
            />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#fff",
              }}
            >
              {companyName}
            </span>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.40)", letterSpacing: "0.1em" }}>
              · {tagline}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Link
              href="/"
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.48)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 5,
                transition: "color 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = color)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.48)")}
            >
              ← Back to APNABEC
            </Link>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.30)" }}>
              © {new Date().getFullYear()} All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
