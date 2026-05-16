"use client";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

interface CompanyFooterProps {
  companyName: string;
  /** Accept both prop names for backwards-compat */
  companyColor?: string;
  accentColor?: string;
  tagline?: string;
  email?: string;
  phone?: string;
}

const COMPANY_DEFAULTS: Record<string, { tagline: string; email: string; phone: string }> = {
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
};

export function CompanyFooter({
  companyName,
  companyColor,
  accentColor,
  tagline: taglineProp,
  email: emailProp,
  phone: phoneProp,
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
    <footer id="contact" style={{ background: "#0A1422", borderTop: `1px solid ${color}30` }}>
      {/* CTA band */}
      <div
        style={{
          background: "linear-gradient(135deg,#102032,#182E52)",
          borderBottom: `1px solid ${color}25`,
          padding: "clamp(40px, 6vw, 72px) clamp(24px, 4vw, 64px)",
        }}
      >
        <div className="footer-cta-inner"
          style={{
            maxWidth: 1100, margin: "0 auto",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between", gap: 32,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                fontSize: 10, fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color, marginBottom: 14,
              }}
            >
              <span style={{ width: 24, height: 1, background: color, display: "block" }} />
              Start a Conversation
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(28px,3vw,44px)", fontWeight: 600,
                color: "#fff", lineHeight: 1.2,
              }}
            >
              Ready to Work{" "}
              <em style={{ color, fontStyle: "italic", fontWeight: 400 }}>Together?</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href={`mailto:${email}`}
              style={{
                background: `linear-gradient(135deg,${color}bb,${color})`,
                color: "#0A1628", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "14px 32px", borderRadius: 2, textDecoration: "none",
                display: "flex", alignItems: "center", gap: 8,
                boxShadow: `0 8px 24px ${color}40`,
              }}
            >
              <Mail size={14} /> Send a Message
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,0.60)" }}>
              <Phone size={12} style={{ color }} /> {phone}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom"
        style={{
          padding: "clamp(20px, 4vw, 28px) clamp(24px, 4vw, 64px)",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 24, height: 24,
              background: "linear-gradient(135deg,#C9A84C,#E4C876)",
              clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
            }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 15, fontWeight: 600, color: "#fff",
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
              fontSize: 11, color: "rgba(255,255,255,0.48)", textDecoration: "none",
              display: "flex", alignItems: "center", gap: 5, transition: "color 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = color)}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.48)")}
          >
            ← Back to APNABEC
          </Link>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.30)" }}>
            © {new Date().getFullYear()} All Rights Reserved | Powered by: FRIIS IT Solutions
          </span>
        </div>
      </div>
    </footer>
    </>
  );
}
