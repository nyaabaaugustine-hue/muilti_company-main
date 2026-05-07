"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Cpu, Zap, Home, BarChart3, Loader2 } from "lucide-react";

const COMPANIES = [
  {
    id: "osu-tech",
    index: "01",
    name: "AFCFTA Policy Network",
    tagline: "Innovation from Accra",
    sector: "Technology & AI",
    
    icon: Cpu,
    accentColor: "#3B82F6",
    image:
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778125277/new121_msodpt.png",
    href: "https://www.afcftapolicy.net",
  },
  {
    id: "volta-energy",
    index: "02",
    name: "Africa Globalized Investment",
    tagline: "Powering the Coast",
    sector: "Renewable Energy",
    
    icon: Zap,
    accentColor: "#10B981",
    image:
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099500/1b_dpkhdt.png",
    href: "https://www.africaglobalizedinvestment.org",
  },
  {
    id: "kumasi-smart",
    index: "03",
    name: "Women of Africa Network",
    tagline: "Modernity Meets Heritage",
    sector: "Real Estate",
    
    icon: Home,
    accentColor: "#C9A84C",
    image:
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099379/1a_zcxsx2.png",
    href: "https://www.womenofafricanetwork.org",
  },
  {
    id: "adabraka-media",
    index: "04",
    name: "African Business Export Club",
    tagline: "Resonating Stories",
    sector: "Strategic Marketing",
    icon: BarChart3,
    accentColor: "#E879F9",
    image:
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099874/apn_square-logo_a4nl1q.png",
    href: "https://www.abec500.com",
  },
];

function CompanyCard({
  company,
  delay,
  onRedirect,
}: {
  company: (typeof COMPANIES)[0];
  delay: number;
  onRedirect: (name: string, url: string) => void;
}) {
  const Icon = company.icon;

  return (
    <a
      href={company.href}
      onClick={(e) => {
        e.preventDefault();
        onRedirect(company.name, company.href);
      }}
      className="card-lift animate-scale-in group relative flex flex-col overflow-hidden no-underline border-gold/30"
      style={{
        animationDelay: `${delay}ms`,
        background: "#1e2f4d",
        border: "1px solid rgba(201,168,76,0.30)",
        borderRadius: 4,
        textDecoration: "none",
      }}
    >
      {/* Image strip */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 200, background: "#0d1e35" }}>
        <Image
          src={company.image}
          alt={company.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-contain transition-transform duration-700"
          style={{ transition: "transform 0.7s ease", padding: "12px" }}
        />
        {/* Index badge */}
        <div
          className="absolute top-4 left-4 font-display text-xs font-semibold px-2.5 py-1"
          style={{
            background: "rgba(16,32,50,0.85)",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.50)",
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
            background: "rgba(16,32,50,0.85)",
            color: company.accentColor,
            border: `1px solid ${company.accentColor}66`,
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
        <div className="flex flex-col gap-1 mb-4">
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
  const [redirecting, setRedirecting] = useState<{ name: string; url: string } | null>(null);

  const handleRedirect = (name: string, url: string) => {
    setRedirecting({ name, url });
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setRedirecting(null);
    }, 1200);
  };

  return (
    <section
      id="companies"
      style={{
        background: "#14253d",
        padding: "60px 0 60px 0", // Reduced top and bottom padding
      }}
    >
      <style>{`
        @keyframes selectorFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* Redirecting Overlay */}
      {redirecting && (
        <div style={{ 
          position: "fixed", inset: 0, zIndex: 10000, 
          background: "rgba(10,22,40,0.96)", backdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: 24, animation: "selectorFadeIn 0.3s ease"
        }}>
          <div style={{ position: "relative" }}>
            <Loader2 className="animate-spin" size={48} style={{ color: "#C9A84C" }} />
            <div style={{ 
              position: "absolute", inset: -10, borderRadius: "50%", 
              boxShadow: "0 0 40px rgba(201,168,76,0.2)", pointerEvents: "none" 
            }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: 28, fontWeight: 600, color: "#fff", margin: 0 
            }}>
              Redirecting to <span style={{ color: "#C9A84C", fontStyle: "italic" }}>{redirecting.name}</span>
            </p>
            <p style={{ 
              fontSize: 10, color: "rgba(255,255,255,0.4)", 
              textTransform: "uppercase", letterSpacing: "0.25em", marginTop: 12 
            }}>
              Preparing your world-class experience
            </p>
          </div>
        </div>
      )}

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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {COMPANIES.map((c, i) => (
            <CompanyCard key={c.id} company={c} delay={i * 120} onRedirect={handleRedirect} />
          ))}
        </div>

        {/* Divider note */}
        <div className="gold-divider mt-10 mb-6" /> {/* Reduced top margin */}
        <p
          className="text-center"
          style={{ fontSize: 11, color: "rgba(255,255,255,0.60)", letterSpacing: "0.15em", textTransform: "uppercase" }}
        >
          Each company delivers a dedicated world-class experience
        </p>
      </div>
    </section>
  );
}
