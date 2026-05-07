"use client";

import Image from "next/image";
import { ArrowRight, Cpu, Zap, Home as HomeIcon, BarChart3 } from "lucide-react";

const COMPANIES = [
  {
    id: "osu-tech",
    index: "01",
    name: "AFCFTA Policy Network",
    tagline: "Innovation from Accra",
    sector: "Technology & AI",
    icon: Cpu,
    accentColor: "#3B82F6",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778125277/new121_msodpt.png",
    href: "#",
    visitLabel: "Visit AFCFTA",
  },
  {
    id: "volta-energy",
    index: "02",
    name: "Africa Globalized Investment",
    tagline: "Powering the Coast",
    sector: "Renewable Energy",
    icon: Zap,
    accentColor: "#10B981",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099500/1b_dpkhdt.png",
    href: "#",
    visitLabel: "Visit Africa",
  },
  {
    id: "kumasi-smart",
    index: "03",
    name: "Women of Africa Network",
    tagline: "Modernity Meets Heritage",
    sector: "Real Estate",
    icon: HomeIcon,
    accentColor: "#C9A84C",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099379/1a_zcxsx2.png",
    href: "#",
    visitLabel: "Visit Women",
  },
  {
    id: "adabraka-media",
    index: "04",
    name: "African Business Export Club",
    tagline: "Resonating Stories",
    sector: "Strategic Marketing",
    icon: BarChart3,
    accentColor: "#E879F9",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099874/apn_square-logo_a4nl1q.png",
    href: "#",
    visitLabel: "Visit African",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        width: "100%",
        background: "#0A1628",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Hero: APNABEC title ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "72px 24px 48px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(64px, 13vw, 160px)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#fff",
            margin: 0,
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          APNA<span style={{ color: "#C9A84C" }}>BEC</span>
        </h1>
        <div
          style={{
            width: "100%",
            maxWidth: 480,
            height: 1,
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            margin: "22px 0 18px",
          }}
        />
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(10px, 1.4vw, 13px)",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(201,168,76,0.85)",
            fontWeight: 500,
            margin: 0,
            textAlign: "center",
          }}
        >
          Group · Ghana
        </p>
      </div>

      {/* ── Four Company Cards ── */}
      <div
        style={{
          flex: 1,
          padding: "0 24px 56px",
          maxWidth: 1480,
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* Section label */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(201,168,76,0.65)",
            fontWeight: 600,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Our Companies
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {COMPANIES.map((company, i) => {
            const Icon = company.icon;
            return (
              <a
                key={company.id}
                href={company.href}
                onClick={(e) => {
                  if (company.href === "#") return; // placeholder — do nothing
                  e.preventDefault();
                  window.open(company.href, "_blank", "noopener,noreferrer");
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#1e2f4d",
                  border: "1px solid rgba(201,168,76,0.28)",
                  borderRadius: 4,
                  overflow: "hidden",
                  textDecoration: "none",
                  cursor: company.href === "#" ? "default" : "pointer",
                  transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                  animationDelay: `${i * 120}ms`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "#C9A84C";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.45)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(201,168,76,0.28)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Image strip */}
                <div
                  style={{
                    position: "relative",
                    height: 200,
                    background: "#0d1e35",
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    style={{ objectFit: "contain", padding: "12px" }}
                  />
                  {/* Index badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      background: "rgba(16,32,50,0.88)",
                      color: "#C9A84C",
                      border: "1px solid rgba(201,168,76,0.50)",
                      borderRadius: 2,
                      padding: "3px 8px",
                    }}
                  >
                    {company.index}
                  </div>
                  {/* Sector pill */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      background: "rgba(16,32,50,0.88)",
                      color: company.accentColor,
                      border: `1px solid ${company.accentColor}66`,
                      borderRadius: 2,
                      padding: "3px 8px",
                    }}
                  >
                    {company.sector}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "16px 16px 18px", display: "flex", flexDirection: "column", gap: 6 }}>
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                      lineHeight: 1.25,
                    }}
                  >
                    {company.name}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: "#C9A84C",
                      fontWeight: 500,
                      margin: 0,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {company.tagline}
                  </p>
                  {/* CTA row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 8,
                      color: "rgba(201,168,76,0.80)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.10em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span>{company.visitLabel}</span>
                    <ArrowRight size={13} />
                  </div>
                </div>

                {/* Bottom gold bar */}
                <div
                  style={{
                    height: 2,
                    background: `linear-gradient(90deg, ${company.accentColor}, #C9A84C)`,
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "0")}
                />
              </a>
            );
          })}
        </div>
      </div>

      {/* ── Footer bar ── */}
      <div
        style={{
          background: "#070f1c",
          borderTop: "1px solid rgba(201,168,76,0.12)",
          padding: "7px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <span style={{ width: 20, height: 1, background: "rgba(201,168,76,0.35)", display: "block", flexShrink: 0 }} />
        <p
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          &copy; {new Date().getFullYear()} APNABEC &mdash; All Rights Reserved
        </p>
        <span style={{ width: 20, height: 1, background: "rgba(201,168,76,0.35)", display: "block", flexShrink: 0 }} />
      </div>
    </main>
  );
}
