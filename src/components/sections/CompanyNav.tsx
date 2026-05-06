"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";

interface CompanyNavProps {
  companyName: string;
  companyColor: string;
  parentHref?: string;
}

export function CompanyNav({ companyName, companyColor, parentHref = "/" }: CompanyNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["Overview", "Services", "Projects", "Team", "Contact"];

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        height: 68,
        background: scrolled ? "rgba(10,22,40,0.97)" : "rgba(10,22,40,0.7)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.18)" : "1px solid transparent",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center",
        padding: "0 48px",
        justifyContent: "space-between",
      }}
    >
      {/* Back + Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Link
          href={parentHref}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.45)",
            textDecoration: "none", transition: "color 0.3s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
        >
          <ArrowLeft size={13} /> Group
        </Link>
        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.12)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: companyColor,
            boxShadow: `0 0 8px ${companyColor}`,
          }} />
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 17, fontWeight: 600, color: "#fff", letterSpacing: "0.03em",
          }}>
            {companyName}
          </span>
        </div>
      </div>

      {/* Links */}
      <div className="hidden lg:flex" style={{ gap: 32 }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{
              fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.5)",
              textDecoration: "none", transition: "color 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = companyColor)}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            {l}
          </a>
        ))}
      </div>

      <a href="#contact"
        style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", padding: "9px 22px",
          background: `linear-gradient(135deg, ${companyColor}cc, ${companyColor})`,
          color: "#0A1628", borderRadius: 2, textDecoration: "none",
          transition: "all 0.3s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 24px ${companyColor}44`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
        }}
      >
        Get in Touch
      </a>
    </nav>
  );
}
