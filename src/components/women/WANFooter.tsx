"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ExternalLink } from "lucide-react";

const A = "#EC4899";
const BG = "#1a0520";

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "Home", href: "/women-of-africa" },
    { label: "About Us", href: "/women-of-africa/about" },
    { label: "Our Team", href: "/women-of-africa/team" },
    { label: "News & Updates", href: "/women-of-africa/news" },
    { label: "Contact", href: "/women-of-africa/contact" },
  ],
  "Programs": [
    { label: "Education", href: "/women-of-africa/programs/education" },
    { label: "Trade Facilitation", href: "/women-of-africa/programs/trade" },
    { label: "Access to Finance", href: "/women-of-africa/programs/finance" },
    { label: "Advocacy & Policy", href: "/women-of-africa/about" },
  ],
  "Get Involved": [
    { label: "Volunteer", href: "/women-of-africa/get-involved" },
    { label: "Become a Partner", href: "/women-of-africa/get-involved" },
    { label: "Donate", href: "/women-of-africa/get-involved" },
    { label: "Join Our Network", href: "/women-of-africa/get-involved" },
  ],
};

export function WANFooter() {
  return (
    <footer style={{ background: "#100016", borderTop: `1px solid rgba(236,72,153,0.18)` }}>
      {/* CTA Band */}
      <div
        style={{
          background: `linear-gradient(135deg,#1a0520 0%,#2d0a3e 60%,#3b1155 100%)`,
          borderBottom: `1px solid rgba(236,72,153,0.18)`,
          padding: "72px 64px",
          position: "relative", overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", top: "-40%", right: "-10%",
            width: "50%", height: "180%",
            background: "radial-gradient(ellipse,rgba(236,72,153,0.12) 0%,transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 36, position: "relative", zIndex: 1 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 14 }}>
              <span style={{ width: 24, height: 1, background: A, display: "block" }} />
              Join the Movement
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(26px,3vw,42px)", fontWeight: 600, color: "#fff", lineHeight: 1.2, maxWidth: 480 }}>
              Together We Can Build{" "}
              <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>
                A Stronger Africa
              </em>{" "}for Women
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link
              href="/women-of-africa/get-involved"
              style={{
                background: `linear-gradient(135deg,#9D174D,${A})`,
                color: "#fff", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "14px 32px", borderRadius: 2, textDecoration: "none",
                display: "flex", alignItems: "center", gap: 8,
                boxShadow: "0 8px 28px rgba(236,72,153,0.35)",
              }}
            >
              <Mail size={14} /> Get Involved Today
            </Link>
            <Link
              href="/women-of-africa/contact"
              style={{
                background: "transparent",
                border: `1px solid rgba(236,72,153,0.45)`,
                color: A, fontSize: 12, fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "13px 32px", borderRadius: 2, textDecoration: "none",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div style={{ padding: "64px 64px 48px", maxWidth: 1228, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 40, marginBottom: 56 }}>
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `linear-gradient(135deg,#9D174D,${A})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0,
                }}
              >
                👩🏾
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontWeight: 600, color: "#fff", lineHeight: 1 }}>
                  Women of Africa Network
                </div>
                <div style={{ fontSize: 9, color: A, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 3 }}>
                  Positively Impacting Women
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.58)", lineHeight: 1.85, marginBottom: 24, maxWidth: 280 }}>
              A pan-African network raising the voices, capacities and opportunities of women and girls across the continent and diaspora through education, trade, finance and advocacy.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
              {[
                { icon: <MapPin size={13} />, text: "P.O. Box 2290 Sakumo, Accra — Ghana" },
                { icon: <Phone size={13} />, text: "+233 24 486 8395" },
                { icon: <Mail size={13} />, text: "info@womenofafricanetwork.org" },
              ].map(({ icon, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                  <span style={{ color: A, marginTop: 2, flexShrink: 0 }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { icon: <Facebook size={15} />, href: "https://www.facebook.com/NetworkWoa" },
                { icon: <Twitter size={15} />, href: "https://twitter.com/NetworkWoa" },
                { icon: <Linkedin size={15} />, href: "https://womenofafricanetwork.org" },
              ].map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36, background: "rgba(236,72,153,0.12)",
                    border: `1px solid rgba(236,72,153,0.22)`,
                    borderRadius: 4, display: "flex", alignItems: "center",
                    justifyContent: "center", color: "rgba(255,255,255,0.65)",
                    textDecoration: "none", transition: "all 0.3s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `rgba(236,72,153,0.25)`;
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = A;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(236,72,153,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(236,72,153,0.22)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: A, marginBottom: 20 }}>
                {heading}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    style={{
                      fontSize: 13, color: "rgba(255,255,255,0.58)",
                      textDecoration: "none", transition: "color 0.3s",
                      display: "flex", alignItems: "center", gap: 6,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = A)}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.58)")}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(236,72,153,0.45)", flexShrink: 0 }} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 24, borderTop: `1px solid rgba(236,72,153,0.12)`,
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Link
              href="/"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 11, color: "rgba(255,255,255,0.40)",
                textDecoration: "none", transition: "color 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = A)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.40)")}
            >
              ← Back to APNABEC
            </Link>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.28)" }}>
              Part of the APN Group of Organisations
            </span>
          </div>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.28)" }}>
            © {new Date().getFullYear()} Women of Africa Network · All Rights Reserved · Powered by FRIIS IT Solutions
          </span>
        </div>
      </div>
    </footer>
  );
}
