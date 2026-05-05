"use client";

import Image from "next/image";
import { ArrowRight, Cpu, Zap, Home, BarChart3 } from "lucide-react";

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
    accentColor: "#3B82F6",
    image:
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777865847/WhatsApp_Image_2026-05-03_at_7.41.12_PM_buzbtt.jpg",
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
    accentColor: "#10B981",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
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
    accentColor: "#C9A84C",
    image:
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777870096/2bed-logo_1_somx5l.png",
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
    accentColor: "#E879F9",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    href: "/adabraka-media",
  },
];

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
      className="card-lift animate-scale-in group relative flex flex-col overflow-hidden no-underline"
      style={{
        animationDelay: `${delay}ms`,
        background: "#0F1E38",
        border: "1px solid rgba(201,168,76,0.12)",
        borderRadius: 4,
        textDecoration: "none",
      }}
    >
      {/* Image strip */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 200 }}>
        <Image
          src={company.image}
          alt={company.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transition: "transform 0.7s ease" }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.7) 100%)`,
          }}
        />
        {/* Color accent overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(135deg, ${company.accentColor}44, transparent)`,
          }}
        />

        {/* Index badge */}
        <div
          className="absolute top-4 left-4 font-display text-xs font-semibold px-2.5 py-1"
          style={{
            background: "rgba(10,22,40,0.85)",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 2,
            letterSpacing: "0.12em",
          }}
        >
          {company.index}
        </div>

        {/* Sector pill */}
        <div
          className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 uppercase tracking-wider"
          style={{
            background: "rgba(10,22,40,0.85)",
            color: company.accentColor,
            border: `1px solid ${company.accentColor}44`,
            borderRadius: 2,
            fontSize: 9,
            letterSpacing: "0.15em",
          }}
        >
          {company.sector}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Icon + name */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{
              width: 44,
              height: 44,
              background: `${company.accentColor}18`,
              border: `1px solid ${company.accentColor}33`,
              borderRadius: 2,
            }}
          >
            <Icon size={18} style={{ color: company.accentColor }} />
          </div>
          <div>
            <h2
              className="font-display font-semibold leading-tight"
              style={{ fontSize: 20, color: "#fff" }}
            >
              {company.name}
            </h2>
            <p
              style={{
                fontSize: 12,
                color: "#C9A84C",
                fontWeight: 500,
                marginTop: 2,
                letterSpacing: "0.04em",
              }}
            >
              {company.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          className="flex-1"
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.75,
            marginBottom: 24,
          }}
        >
          {company.description}
        </p>

        {/* CTA row */}
        <div
          className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
          style={{ color: "#C9A84C", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          <span>Visit {company.name.split(" ")[0]}</span>
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      {/* Bottom gold bar on hover */}
      <div
        className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${company.accentColor}, #C9A84C)` }}
      />
    </a>
  );
}

export function CompanyGrid() {
  return (
    <section
      id="companies"
      style={{
        background: "#0A1628",
        padding: "100px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow mb-4">Our Portfolio</div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(36px,4vw,54px)", fontWeight: 600, color: "#fff", lineHeight: 1.15 }}
            >
              Four Companies,{" "}
              <span style={{ color: "#C9A84C", fontStyle: "italic" }}>One Vision</span>
            </h2>
          </div>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 320,
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Each company leads its sector. Together, they form an unrivalled
            force for growth across West Africa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {COMPANIES.map((c, i) => (
            <CompanyCard key={c.id} company={c} delay={i * 120} />
          ))}
        </div>

        {/* Divider note */}
        <div className="gold-divider mt-16 mb-6" />
        <p
          className="text-center"
          style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}
        >
          Each company delivers a dedicated world-class experience
        </p>
      </div>
    </section>
  );
}
