"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { openContactModal } from "@/components/sections/ContactModal";

const A = "#f28d01";
const NAVY = "#000040";

const QUICK_LINKS = [
  { label: "Home", href: "#overview" },
  { label: "Who We Are", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Meet the Team", href: "#team" },
  { label: "Press Release", href: "#press" },
  { label: "Contact Us", href: "#contact" },
  { label: "Export Club 500", href: "#export-club" },
  { label: "Register Your Business", href: "#contact" },
];

export function AbecFooter() {
  return (
    <footer
      style={{
        background: NAVY,
        borderTop: `1px solid rgba(242,141,1,0.20)`,
        // @ts-ignore
        "--accent": A
      }}
    >
      <style jsx>{`
        .footer-link:hover { color: var(--accent) !important; padding-left: 4px; }
        .social-icon:hover { 
           background: var(--accent) !important; 
           color: #fff !important; 
           border-color: var(--accent) !important; 
        }
      `}</style>

      {/* Main footer body */}
      <div style={{ padding: "72px 64px 48px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 56,
          }}
          className="footer-grid"
        >
          {/* Col 1: Who We Are */}
          <div>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#fff",
                marginBottom: 20,
                paddingBottom: 14,
                borderBottom: `1px solid rgba(242,141,1,0.20)`,
              }}
            >
              Who We Are
            </h4>
            {/* Logo */}
            <div style={{ marginBottom: 18 }}>
              <img
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099874/apn_square-logo_a4nl1q.png"
                alt="ABEC500"
                style={{ height: 52, objectFit: "contain" }}
              />
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.62)",
                lineHeight: 1.80,
                marginBottom: 24,
              }}
            >
              We deploy all inclusive support packages for Export companies across
              Africa — connecting 500+ businesses with global markets through the
              AfCFTA framework across 54 nations.
            </p>
            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: <MapPin size={13} />, text: "Cita House Osu, Accra — Ghana" },
                { icon: <Phone size={13} />, text: "+233 24 486 8395" },
                { icon: <Mail size={13} />, text: "info@abec500.com" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.58)",
                  }}
                >
                  <span style={{ color: A, marginTop: 1, flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#fff",
                marginBottom: 20,
                paddingBottom: 14,
                borderBottom: `1px solid rgba(242,141,1,0.20)`,
              }}
            >
              Quick Links.
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => {
                      if (link.href === "#contact") {
                        e.preventDefault();
                        openContactModal("Africa Business Export Club 500");
                      }
                    }}
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.60)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      transition: "color 0.2s, gap 0.2s",
                    }}
                  >
                    <ArrowRight size={10} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#fff",
                marginBottom: 20,
                paddingBottom: 14,
                borderBottom: `1px solid rgba(242,141,1,0.20)`,
              }}
            >
              Newsletter
            </h4>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.60)",
                lineHeight: 1.75,
                marginBottom: 22,
              }}
            >
              Subscribe to our newsletter for the latest export news, trade policy
              updates and ABEC500 announcements.
            </p>
            <div style={{ marginBottom: 24 }}>
              <h5
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.70)",
                  marginBottom: 12,
                }}
              >
                Subscribe Now
              </h5>
              <div style={{ display: "flex", gap: 0 }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: "11px 14px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(242,141,1,0.30)",
                    borderRight: "none",
                    borderRadius: "2px 0 0 2px",
                    fontSize: 12,
                    color: "#fff",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  style={{
                    padding: "11px 16px",
                    background: A,
                    border: "none",
                    borderRadius: "0 2px 2px 0",
                    cursor: "pointer",
                    color: "#fff",
                    fontSize: 16,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#b36900")}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = A)}
                >
                  🚀
                </button>
              </div>
            </div>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { label: "f", title: "Facebook" },
                { label: "𝕏", title: "Twitter" },
                { label: "◎", title: "Instagram" },
                { label: "in", title: "LinkedIn" },
              ].map(s => (
                <a
                  key={s.title}
                  href="#"
                  title={s.title}
                  className="social-icon"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(242,141,1,0.20)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.60)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        style={{
          borderTop: "1px solid rgba(242,141,1,0.12)",
          padding: "20px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.40)",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Africa Business Export Club 500 | Powered by:{" "}
          <a
            href="https://friisitsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: A, textDecoration: "none" }}
          >
            FRIIS IT Solutions
          </a>
        </p>
        <Link
          href="/"
          className="footer-link"
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.40)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 5,
            transition: "color 0.2s",
          }}
        >
          ← Back to APNABEC Group
        </Link>
      </div>
    </footer>
  );
}
