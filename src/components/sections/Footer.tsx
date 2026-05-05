"use client";

import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Companies",
    links: [
      { label: "Osu Digital Hub", href: "/osu-tech" },
      { label: "Volta Energy", href: "/volta-energy" },
      { label: "Kumasi Smart", href: "/kumasi-smart" },
      { label: "Adabraka Media", href: "/adabraka-media" },
    ],
  },
  {
    title: "Group",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Newsroom", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact HQ", href: "#contact" },
      { label: "Partner Portal", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];

const SOCIALS = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer style={{ background: "#070F1C", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ paddingTop: 72, paddingBottom: 40 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                style={{
                  width: 34,
                  height: 34,
                  background: "linear-gradient(135deg, #C9A84C, #E4C876)",
                  clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
                  flexShrink: 0,
                }}
              />
              <span
                className="font-display text-lg font-semibold"
                style={{ color: "#fff", letterSpacing: "0.04em" }}
              >
                Unified<span style={{ color: "#C9A84C" }}>Nexus</span>
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.85,
                maxWidth: 300,
                marginBottom: 24,
                fontWeight: 300,
              }}
            >
              A unified group of four world-class Ghanaian companies shaping
              the future of technology, energy, real estate, and media.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: 34,
                    height: 34,
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: 2,
                    color: "rgba(255,255,255,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A84C";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.2)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#C9A84C",
                  marginBottom: 20,
                }}
              >
                {group.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-300 no-underline"
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 300 }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} UnifiedNexus Group. All rights reserved. Accra, Ghana.
          </p>
          <p
            style={{
              fontSize: 10,
              color: "rgba(201,168,76,0.4)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Designed for Excellence · Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
