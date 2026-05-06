"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Companies", href: "#companies" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Newsroom", href: "#" },
  { label: "Investors", href: "#" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(16,32,50,0.97)"
          : "rgba(16,32,50,0.72)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(201,168,76,0.25)"
          : "1px solid transparent",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between"
        style={{ height: "72px" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div
            style={{
              width: 36,
              height: 36,
              background: "linear-gradient(135deg, #C9A84C, #E4C876)",
              clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "transform 0.4s ease",
            }}
            className="group-hover:scale-110"
          />
          <div>
            <span
              className="font-display text-xl font-semibold tracking-wide"
              style={{ color: "#fff", lineHeight: 1.1 }}
            >
              Unified<span style={{ color: "#C9A84C" }}>Nexus</span>
            </span>
            <div
              style={{
                fontSize: 9,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.8)",
                fontWeight: 500,
              }}
            >
              Group · Ghana
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="relative text-xs font-medium tracking-widest uppercase transition-colors duration-300 no-underline"
                style={{ color: "rgba(255,255,255,0.80)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#C9A84C")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.80)")
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="btn-outline-gold"
            style={{ fontSize: "11px", padding: "10px 22px" }}
          >
            Contact HQ
          </a>
          <a
            href="#companies"
            className="btn-gold"
            style={{ fontSize: "11px", padding: "10px 22px" }}
          >
            Explore Group
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          style={{ color: "#C9A84C" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden px-6 pb-6 pt-2"
          style={{
            background: "rgba(16,32,50,0.98)",
            borderTop: "1px solid rgba(201,168,76,0.20)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block py-3 text-sm font-medium tracking-widest uppercase no-underline transition-colors"
              style={{ color: "rgba(255,255,255,0.82)", borderBottom: "1px solid rgba(255,255,255,0.10)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold mt-4 w-full justify-center">
            Contact HQ
          </a>
        </div>
      )}
    </nav>
  );
}
