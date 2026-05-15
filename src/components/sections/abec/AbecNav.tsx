"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X, ChevronDown } from "lucide-react";

const A = "#f28d01";
const NAVY = "#000040";

const NAV_LINKS = [
  { label: "Home", href: "#overview" },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "Who We Are", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Press Release", href: "#press" },
    ],
  },
  { label: "Meet the Team", href: "#team" },
  { label: "Export Club 500", href: "#export-club" },
  { label: "Members", href: "#members" },
  { label: "Contact Us", href: "#contact" },
];

export function AbecNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        // @ts-ignore
        "--accent": A,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? `${NAVY}f7` : `${NAVY}d0`,
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? `1px solid rgba(242,141,1,0.25)`
          : "1px solid rgba(242,141,1,0.10)",
        transition: "all 0.4s ease",
      }}
    >
      <style jsx>{`
        .nav-link:hover { color: var(--accent) !important; }
        .nav-link:hover .icon-rotate { transform: rotate(180deg); }
        .social-icon:hover { color: var(--accent) !important; }
      `}</style>

      {/* Top bar */}
      <div
        style={{
          borderBottom: "1px solid rgba(242,141,1,0.12)",
          padding: "8px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 11,
          color: "rgba(255,255,255,0.55)",
        }}
        className="hidden md:flex"
      >
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <span>📍 Cita House Osu, Accra — Ghana</span>
          <span>📞 +233 24 486 8395</span>
          <span>✉️ info@abec500.com</span>
        </div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <Link href="/" className="social-icon" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4, fontSize: 10, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", transition: "color 0.2s" }}>
            <ArrowLeft size={10} /> Group
          </Link>
          {["facebook-f", "twitter", "instagram", "linkedin"].map(s => (
            <a key={s} href="#" className="social-icon" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: 11, transition: "color 0.2s" }}>
              {s === "facebook-f" ? "f" : s === "twitter" ? "𝕏" : s === "instagram" ? "◎" : "in"}
            </a>
          ))}
        </div>
      </div>

      {/* Main nav row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          height: 68,
        }}
      >
        {/* Logo */}
        <a href="#overview" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099874/apn_square-logo_a4nl1q.png"
            alt="ABEC500"
            style={{ height: 40, objectFit: "contain" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1 }}>ABEC<span style={{ color: A }}>500</span></span>
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.45)", letterSpacing: "0.20em", textTransform: "uppercase" }}>AfCFTA Partner</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_LINKS.map(link => (
            <div key={link.label} style={{ position: "relative" }}
              onMouseEnter={() => link.children && setDropdown(link.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <a
                href={link.href}
                className="nav-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "8px 14px",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  color: "rgba(255,255,255,0.78)",
                  textDecoration: "none",
                  borderRadius: 3,
                  transition: "color 0.2s, background 0.2s",
                  background: dropdown === link.label ? "rgba(242,141,1,0.10)" : "transparent",
                }}
              >
                {link.label}
                {link.children && <ChevronDown size={12} className="icon-rotate" style={{ transition: "transform 0.2s", transform: dropdown === link.label ? "rotate(180deg)" : "rotate(0deg)" }} />}
              </a>
              {link.children && dropdown === link.label && (
                <div style={{
                  position: "absolute", top: "100%", left: 0, minWidth: 180,
                  background: NAVY,
                  border: `1px solid rgba(242,141,1,0.25)`,
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.45)",
                  zIndex: 200,
                }}>
                  {link.children.map(c => (
                    <a key={c.label} href={c.href} className="nav-link" 
                      style={{
                        display: "block",
                        padding: "11px 18px",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.75)",
                        textDecoration: "none",
                        transition: "all 0.2s",
                        borderBottom: "1px solid rgba(242,141,1,0.08)",
                      }}
                    >{c.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#contact"
            className="hidden lg:inline-flex"
            style={{
              background: `linear-gradient(135deg,#b36900,${A})`,
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              padding: "10px 22px",
              borderRadius: 2,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              boxShadow: `0 4px 20px rgba(242,141,1,0.30)`,
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 28px rgba(242,141,1,0.45)`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 4px 20px rgba(242,141,1,0.30)`; }}
          >
            Join
          </a>
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: NAVY,
          borderTop: `1px solid rgba(242,141,1,0.15)`,
          padding: "16px 24px 24px",
        }}>
          {NAV_LINKS.map(link => (
            <div key={link.label}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.80)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(242,141,1,0.08)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = A)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}
              >
                {link.label}
              </a>
              {link.children?.map(c => (
                <a key={c.label} href={c.href} onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "9px 0 9px 16px",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(242,141,1,0.06)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = A)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  — {c.label}
                </a>
              ))}
            </div>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}
            style={{
              display: "block", textAlign: "center", marginTop: 20,
              background: `linear-gradient(135deg,#b36900,${A})`,
              color: "#fff", padding: "12px 0", borderRadius: 2,
              fontSize: 12, fontWeight: 700, letterSpacing: "0.10em",
              textTransform: "uppercase", textDecoration: "none",
            }}
          >
            Join ABEC500
          </a>
        </div>
      )}
    </nav>
  );
}
