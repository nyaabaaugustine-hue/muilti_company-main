"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";
import { openContactModal } from "./ContactModal";

interface NavLink {
  label: string;
  href: string;
}

interface CompanyNavProps {
  companyName: string;
  companyColor?: string;
  accentColor?: string;
  parentHref?: string;
  logo?: string;
  links?: NavLink[];
}

const DEFAULT_LINKS: NavLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

/** Inline logo component — no SafeImage wrapper, direct <img> with retry */
function NavLogo({ src, alt, color }: { src: string; alt: string; color: string }) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const attempts = useRef(0)

  // Check cache hit synchronously after mount
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true)
  }, [src])

  const handleError = useCallback(() => {
    if (attempts.current < 3) {
      attempts.current++
      setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.src = src + "?r=" + attempts.current
        }
      }, 600 * attempts.current)
    } else {
      setErrored(true)
    }
  }, [src])

  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: 0,
        backgroundColor: errored ? color : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {errored ? (
        // Fallback: coloured dot with first letter
        <span style={{ fontSize: 14, fontWeight: 800, color: "#000" }}>
          {alt.charAt(0).toUpperCase()}
        </span>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            display: "block",
            padding: 2,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </div>
  )
}

export function CompanyNav({
  companyName,
  companyColor,
  accentColor,
  parentHref = "/",
  logo,
  links = DEFAULT_LINKS,
}: CompanyNavProps) {
  const color = accentColor ?? companyColor ?? "#C9A84C";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      setOpen(false);
      if (href === "#contact") {
        openContactModal(companyName);
        return;
      }
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 68 - 12;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [companyName]
  );

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          height: 68,
          backgroundColor: scrolled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0.80)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: scrolled ? `1px solid ${color}33` : "1px solid transparent",
          transition: "background-color 0.4s ease, border-color 0.4s ease",
          display: "flex", alignItems: "center",
          padding: "0 clamp(16px, 4vw, 48px)",
          justifyContent: "space-between",
        }}
      >
        {/* Left: back link + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
          <Link
            href={parentHref}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.55)",
              textDecoration: "none", transition: "color 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = color)}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
          >
            <ArrowLeft size={13} /> Group
          </Link>

          <div style={{ width: 1, height: 20, backgroundColor: "rgba(255,255,255,0.15)" }} />

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {logo ? (
              <NavLogo src={logo} alt={companyName} color={color} />
            ) : (
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                backgroundColor: color, boxShadow: `0 0 10px ${color}`,
              }} />
            )}
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(13px, 2vw, 16px)",
              fontWeight: 600, color: "#fff",
              letterSpacing: "0.03em", whiteSpace: "nowrap",
            }}>
              {companyName}
            </span>
          </div>
        </div>

        {/* Centre: desktop nav links */}
        <div className="company-nav-links" style={{ display: "flex", gap: 28 }}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={e => handleNavClick(e, href)}
              style={{
                fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.65)",
                textDecoration: "none", transition: "color 0.3s", cursor: "pointer",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = color)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right: CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <a
            href="#contact"
            onClick={e => handleNavClick(e, "#contact")}
            className="company-nav-cta"
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "9px 22px",
              backgroundColor: color, color: "#000",
              borderRadius: 2, textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              whiteSpace: "nowrap", cursor: "pointer",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = `0 8px 24px ${color}55`;
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            Get in Touch
          </a>
          <button
            onClick={() => setOpen(p => !p)}
            className="company-nav-hamburger"
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,0.75)", padding: 4, display: "none",
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            position: "fixed", top: 68, left: 0, right: 0,
            backgroundColor: "rgba(10,10,10,0.98)",
            backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
            zIndex: 49, padding: "24px 32px 40px",
            display: "flex", flexDirection: "column", gap: 4,
            borderBottom: `1px solid ${color}22`,
          }}
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={e => handleNavClick(e, href)}
              style={{
                padding: "13px 0", fontSize: 15, fontWeight: 500,
                color: "rgba(255,255,255,0.82)", textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                transition: "color 0.3s", cursor: "pointer",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = color)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.82)")}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={e => handleNavClick(e, "#contact")}
            style={{
              marginTop: 16, textAlign: "center",
              backgroundColor: color, color: "#000",
              padding: "13px 28px", borderRadius: 2,
              fontSize: 12, fontWeight: 700,
              letterSpacing: "0.10em", textTransform: "uppercase",
              textDecoration: "none", cursor: "pointer",
            }}
          >
            Get in Touch
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .company-nav-links { display: none !important; }
          .company-nav-cta   { display: none !important; }
          .company-nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
