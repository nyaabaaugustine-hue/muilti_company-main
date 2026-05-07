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
    <main className="flex min-h-[100dvh] w-full flex-col relative" style={{
      background: "linear-gradient(rgba(10, 22, 40, 0.85), rgba(10, 22, 40, 0.85)), url(https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778125799/gefw_z5bq6y.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* ── Hero: APNABEC title ── */}
      <div className="flex flex-col items-center justify-center px-5 pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20">
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(42px, 12vw, 150px)",
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
      </div>

      {/* ── Four Company Cards ── */}
      <div className="flex-1 w-full max-w-[1480px] mx-auto px-5 pb-20">
        {/* Section label */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(201,168,76,0.65)",
            fontWeight: 600,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Our Companies
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {COMPANIES.map((company, i) => {
            return (
              <a
                key={company.id}
                href={company.href}
                onClick={(e) => {
                  if (company.href === "#") return; // placeholder — do nothing
                  e.preventDefault();
                  window.open(company.href, "_blank", "noopener,noreferrer");
                }}
                className="group flex flex-col bg-[#1e2f4d] border border-[rgba(201,168,76,0.28)] rounded-[4px] overflow-hidden no-underline transition-all duration-300 hover:border-[#C9A84C] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
                style={{
                  cursor: company.href === "#" ? "default" : "pointer",
                  animationDelay: `${i * 120}ms`,
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
                  className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${company.accentColor}, #C9A84C)`,
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>

      {/* ── Footer bar ── */}
      <div className="bg-[#070f1c] border-t border-[rgba(201,168,76,0.12)] py-5 px-6 flex items-center justify-center gap-4">
        <span style={{ width: 16, height: 1, background: "rgba(201,168,76,0.35)", display: "block", flexShrink: 1 }} />
        <p
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          &copy; {new Date().getFullYear()} APNABEC &mdash; All Rights Reserved
        </p>
        <span style={{ width: 16, height: 1, background: "rgba(201,168,76,0.35)", display: "block", flexShrink: 1 }} />
      </div>
    </main>
  );
}
