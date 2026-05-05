"use client";

import Image from "next/image";
import { ArrowRight, Cpu, Zap, Home, BarChart3, ExternalLink } from "lucide-react";

/* ─────────────────────────────────────────────
   Company data — edit names / links / colours here
───────────────────────────────────────────── */
const COMPANIES = [
  {
    id: "osu-tech",
    index: "01",
    name: "Osu Digital Hub",
    tagline: "Innovation from Accra",
    sector: "Technology & AI",
    description:
      "Pioneering high-scale software, cloud, and AI solutions tailored for West Africa's growing enterprise sector. From Accra to the world.",
    icon: Cpu,
    // Colour system
    accent: "#2563EB",        // solid brand colour
    accentBg: "#EFF6FF",      // tinted card background
    accentBorder: "#BFDBFE",  // border tint
    accentText: "#1D4ED8",    // dark variant for text
    badgeBg: "#DBEAFE",
    pillText: "#1E40AF",
    // CTA colours
    btnBg: "#2563EB",
    btnHover: "#1D4ED8",
    // Image
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777865847/WhatsApp_Image_2026-05-03_at_7.41.12_PM_buzbtt.jpg",
    imageHint: "tech office ghana",
    href: "/osu-tech",
  },
  {
    id: "volta-energy",
    index: "02",
    name: "Volta Energy",
    tagline: "Powering the Coast",
    sector: "Renewable Energy",
    description:
      "Building sustainable, resilient energy storage and solar networks across West Africa for a cleaner, brighter industrial future.",
    icon: Zap,
    accent: "#059669",
    accentBg: "#ECFDF5",
    accentBorder: "#A7F3D0",
    accentText: "#047857",
    badgeBg: "#D1FAE5",
    pillText: "#065F46",
    btnBg: "#059669",
    btnHover: "#047857",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    imageHint: "solar panels renewable energy",
    href: "/volta-energy",
  },
  {
    id: "kumasi-smart",
    index: "03",
    name: "Kumasi Smart",
    tagline: "Modernity Meets Heritage",
    sector: "Real Estate",
    description:
      "Redefining luxury residential and commercial real estate through smart-home technology, bold architecture, and cultural pride.",
    icon: Home,
    accent: "#D97706",
    accentBg: "#FFFBEB",
    accentBorder: "#FDE68A",
    accentText: "#B45309",
    badgeBg: "#FEF3C7",
    pillText: "#92400E",
    btnBg: "#D97706",
    btnHover: "#B45309",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777870096/2bed-logo_1_somx5l.png",
    imageHint: "modern architecture ghana",
    href: "/kumasi-smart",
  },
  {
    id: "adabraka-media",
    index: "04",
    name: "Adabraka Media",
    tagline: "Resonating Stories",
    sector: "Strategic Marketing",
    description:
      "Amplifying local brand narratives across global markets through data-driven creative strategy, digital campaigns, and storytelling.",
    icon: BarChart3,
    accent: "#E11D48",
    accentBg: "#FFF1F2",
    accentBorder: "#FECDD3",
    accentText: "#BE123C",
    badgeBg: "#FFE4E6",
    pillText: "#9F1239",
    btnBg: "#E11D48",
    btnHover: "#BE123C",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    imageHint: "creative marketing agency",
    href: "/adabraka-media",
  },
];

/* ─────────────────────────────────────────────
   Single Company Card
───────────────────────────────────────────── */
function CompanyCard({
  company,
  delay,
}: {
  company: (typeof COMPANIES)[0];
  delay: number;
}) {
  const Icon = company.icon;

  return (
    <a
      href={company.href}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border card-lift cursor-pointer animate-scale-in focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      style={{
        borderColor: company.accentBorder,
        animationDelay: `${delay}ms`,
        textDecoration: "none",
      }}
    >
      {/* ── TOP: image strip ── */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <Image
          src={company.image}
          alt={company.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          data-ai-hint={company.imageHint}
        />
        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, ${company.accent}22 0%, ${company.accent}55 100%)`,
          }}
        />

        {/* index badge — top left */}
        <div
          className="absolute top-4 left-4 text-xs font-bold tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: "rgba(255,255,255,0.9)", color: company.accentText }}
        >
          {company.index}
        </div>

        {/* sector pill — top right */}
        <div
          className="absolute top-4 right-4 text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full uppercase"
          style={{ background: company.badgeBg, color: company.pillText }}
        >
          {company.sector}
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Icon + name row */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: company.accentBg }}
          >
            <Icon className="w-5 h-5" style={{ color: company.accent }} />
          </div>
          <div>
            <h2
              className="text-xl font-extrabold text-slate-900 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {company.name}
            </h2>
            <p className="text-sm font-medium mt-0.5" style={{ color: company.accent }}>
              {company.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-6">
          {company.description}
        </p>

        {/* CTA */}
        <button
          className="w-full h-12 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 group-hover:gap-3"
          style={{ backgroundColor: company.btnBg }}
          onMouseOver={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              company.btnHover)
          }
          onMouseOut={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              company.btnBg)
          }
        >
          Visit {company.name}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: company.accent }}
      />
    </a>
  );
}

/* ─────────────────────────────────────────────
   Grid
───────────────────────────────────────────── */
export function CompanyGrid() {
  return (
    <div>
      {/* Section label */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-slate-200" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Select a company to explore
        </p>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {COMPANIES.map((company, i) => (
          <CompanyCard key={company.id} company={company} delay={i * 100} />
        ))}
      </div>

      {/* Subtle helper text */}
      <p className="text-center text-xs text-slate-400 mt-8 flex items-center justify-center gap-1.5">
        <ExternalLink className="w-3 h-3" />
        Each company has its own dedicated experience
      </p>
    </div>
  );
}
