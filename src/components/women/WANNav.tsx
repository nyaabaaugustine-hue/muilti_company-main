"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowLeft, Menu, X } from "lucide-react";

const A = "#EC4899";

const NAV_LINKS = [
  { label: "Home", href: "/women-of-africa" },
  { label: "About", href: "/women-of-africa/about" },
  {
    label: "Programs", href: "#",
    children: [
      { label: "Education", href: "/women-of-africa/programs/education" },
      { label: "Trade Facilitation", href: "/women-of-africa/programs/trade" },
      { label: "Access to Finance", href: "/women-of-africa/programs/finance" },
    ],
  },
  { label: "Get Involved", href: "/women-of-africa/get-involved" },
  { label: "Team", href: "/women-of-africa/team" },
  { label: "News", href: "/women-of-africa/news" },
  { label: "Contact", href: "/women-of-africa/contact" },
];

export function WANNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const pathname = usePathname();
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const isActive = (href: string) =>
    href === "/women-of-africa" ? pathname === href : pathname.startsWith(href);
  const isProgramsActive = pathname.startsWith("/women-of-africa/programs");

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          height: 70,
          background: scrolled ? "rgba(26,5,32,0.97)" : "rgba(26,5,32,0.82)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? `1px solid rgba(236,72,153,0.22)` : "1px solid transparent",
          transition: "all 0.4s ease",
          display: "flex", alignItems: "center",
          padding: "0 40px",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* Left — Back + Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexShrink: 0 }}>
          <Link
            href="/"
            style={{
              display: "flex", alignItems: "center", gap: 5,
              fontSize: 10, fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.45)",
              textDecoration: "none", transition: "color 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = A)}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            <ArrowLeft size={11} /> Group
          </Link>
          <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.15)" }} />
          <Link href="/women-of-africa" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div
              style={{
                width: 34, height: 34, borderRadius: "50%",
                background: `linear-gradient(135deg,#9D174D,${A})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 17, flexShrink: 0,
                boxShadow: `0 0 14px rgba(236,72,153,0.35)`,
              }}
            >
              👩🏾
            </div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 600, color: "#fff", lineHeight: 1 }}>
                Women of Africa Network
              </div>
              <div style={{ fontSize: 9, color: A, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 2 }}>
                Positively Impacting Women
              </div>
            </div>
          </Link>
        </div>

        {/* Centre — Desktop links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 24 }}
          className="wan-desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            if (link.children) {
              return (
                <div key={link.label} ref={dropRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => setProgramsOpen((p) => !p)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 4,
                      fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: isProgramsActive ? A : "rgba(255,255,255,0.68)",
                      transition: "color 0.3s", padding: 0, fontFamily: "inherit",
                      borderBottom: isProgramsActive ? `1px solid ${A}` : "1px solid transparent",
                      paddingBottom: 2,
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={11}
                      style={{
                        transform: programsOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.3s",
                      }}
                    />
                  </button>
                  {programsOpen && (
                    <div
                      style={{
                        position: "absolute", top: "calc(100% + 16px)", left: "50%",
                        transform: "translateX(-50%)",
                        background: "rgba(26,5,32,0.98)", backdropFilter: "blur(14px)",
                        border: `1px solid rgba(236,72,153,0.22)`, borderRadius: 4,
                        padding: "8px 0", minWidth: 210,
                        boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
                      }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setProgramsOpen(false)}
                          style={{
                            display: "flex", alignItems: "center", gap: 10,
                            padding: "11px 18px",
                            fontSize: 11, fontWeight: 500, letterSpacing: "0.08em",
                            textTransform: "uppercase", textDecoration: "none",
                            color: isActive(child.href) ? A : "rgba(255,255,255,0.72)",
                            transition: "all 0.2s",
                            borderLeft: isActive(child.href) ? `3px solid ${A}` : "3px solid transparent",
                            background: isActive(child.href) ? "rgba(236,72,153,0.06)" : "transparent",
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = A;
                            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(236,72,153,0.08)";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = isActive(child.href) ? A : "rgba(255,255,255,0.72)";
                            (e.currentTarget as HTMLAnchorElement).style.background = isActive(child.href) ? "rgba(236,72,153,0.06)" : "transparent";
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
                  textTransform: "uppercase", textDecoration: "none",
                  color: isActive(link.href) ? A : "rgba(255,255,255,0.68)",
                  transition: "color 0.3s",
                  borderBottom: isActive(link.href) ? `1px solid ${A}` : "1px solid transparent",
                  paddingBottom: 2,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = A)}
                onMouseLeave={e => (e.currentTarget.style.color = isActive(link.href) ? A : "rgba(255,255,255,0.68)")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right — CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
          <Link
            href="/women-of-africa/get-involved"
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.10em",
              textTransform: "uppercase", padding: "9px 20px",
              background: `linear-gradient(135deg,#9D174D,${A})`,
              color: "#fff", borderRadius: 2, textDecoration: "none",
              transition: "all 0.3s",
              boxShadow: "0 4px 18px rgba(236,72,153,0.25)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(236,72,153,0.42)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 18px rgba(236,72,153,0.25)";
            }}
          >
            Get Involved
          </Link>
          <button
            onClick={() => setMobileOpen((p) => !p)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,0.75)", padding: 4,
              display: "none",
            }}
            className="wan-hamburger"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed", top: 70, left: 0, right: 0, bottom: 0,
            background: "rgba(26,5,32,0.98)", backdropFilter: "blur(16px)",
            zIndex: 99, overflowY: "auto", padding: "32px 32px 48px",
            display: "flex", flexDirection: "column", gap: 4,
          }}
        >
          {NAV_LINKS.map((link) => {
            if (link.children) {
              return (
                <div key={link.label}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: A, padding: "12px 0 6px" }}>
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block", padding: "10px 16px",
                        fontSize: 14, color: isActive(child.href) ? A : "rgba(255,255,255,0.80)",
                        textDecoration: "none", borderLeft: `2px solid ${isActive(child.href) ? A : "rgba(236,72,153,0.25)"}`,
                        marginBottom: 2,
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: "13px 0",
                  fontSize: 16, fontWeight: 500,
                  color: isActive(link.href) ? A : "rgba(255,255,255,0.82)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(236,72,153,0.10)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/women-of-africa/get-involved"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: 24, display: "block", textAlign: "center",
              background: `linear-gradient(135deg,#9D174D,${A})`,
              color: "#fff", padding: "14px 28px", borderRadius: 2,
              fontSize: 13, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Get Involved
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .wan-desktop-nav { display: none !important; }
          .wan-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
