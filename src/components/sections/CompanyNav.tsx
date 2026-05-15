"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";

interface CompanyNavProps {
  companyName: string;
  /** Accept both prop names for backwards-compat */
  companyColor?: string;
  accentColor?: string;
  parentHref?: string;
}

export function CompanyNav({
  companyName,
  companyColor,
  accentColor,
  parentHref = "/",
}: CompanyNavProps) {
  const color = accentColor ?? companyColor ?? "#C9A84C";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["Overview", "Services", "Projects", "Team", "Contact"];

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          height: 68,
          background: scrolled ? "rgba(16,32,50,0.97)" : "rgba(16,32,50,0.78)",
          backdropFilter: "blur(14px)",
          borderBottom: scrolled
            ? "1px solid rgba(201,168,76,0.22)"
            : "1px solid transparent",
          transition: "all 0.4s ease",
          display: "flex", alignItems: "center",
          padding: "0 48px",
          justifyContent: "space-between",
        }}
      >
        {/* Back + Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
          <Link
            href={parentHref}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.62)",
              textDecoration: "none", transition: "color 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = color)}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.62)")}
          >
            <ArrowLeft size={13} /> Group
          </Link>
          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.18)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 8, height: 8, borderRadius: "50%",
                background: color,
                boxShadow: `0 0 10px ${color}`,
              }}
            />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 17, fontWeight: 600, color: "#fff",
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
              }}
            >
              {companyName}
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div
          className="company-nav-links"
          style={{ display: "flex", gap: 28 }}
        >
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.68)",
                textDecoration: "none", transition: "color 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = color)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.68)")}
            >
              {l}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <a
            href="#contact"
            className="company-nav-cta"
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "9px 22px",
              background: `linear-gradient(135deg,${color}bb,${color})`,
              color: "#0A1628", borderRadius: 2, textDecoration: "none",
              transition: "all 0.3s", whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 24px ${color}44`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Get in Touch
          </a>
          <button
            onClick={() => setOpen(p => !p)}
            className="company-nav-hamburger"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,0.75)", padding: 4, display: "none",
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div
          style={{
            position: "fixed", top: 68, left: 0, right: 0,
            background: "rgba(16,32,50,0.98)", backdropFilter: "blur(16px)",
            zIndex: 49, padding: "24px 32px 40px",
            display: "flex", flexDirection: "column", gap: 4,
            borderBottom: "1px solid rgba(201,168,76,0.18)",
          }}
        >
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                padding: "13px 0",
                fontSize: 15, fontWeight: 500,
                color: "rgba(255,255,255,0.82)", textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                transition: "color 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = color)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.82)")}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 16, textAlign: "center",
              background: `linear-gradient(135deg,${color}bb,${color})`,
              color: "#0A1628", padding: "13px 28px", borderRadius: 2,
              fontSize: 12, fontWeight: 700, letterSpacing: "0.10em",
              textTransform: "uppercase", textDecoration: "none",
            }}
          >
            Get in Touch
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .company-nav-links { display: none !important; }
          .company-nav-cta { display: none !important; }
          .company-nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
