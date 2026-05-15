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
    name: "AfCFTA Policy Network",
    tagline: "Intra-Africa Trade & Advocacy",
    sector: "Trade Policy",
    description: "Africa's largest AfCFTA NGO think tank — championing free trade implementation, policy research and capacity building across 54 nations since 2019.",
    ctaLabel: "Visit AfCFTA Policy Network",
    icon: Cpu,
    accentColor: "#3B82F6",
    image:
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778125277/new121_msodpt.png",
    href: "/afcfta-policy",
  },
  {
    id: "volta-energy",
    index: "02",
    name: "Africa Globalized Investment",
    tagline: "Powering the Coast",
    sector: "Renewable Energy",
    name: "Africa Globalized Investment Forum",
    tagline: "Connecting Capital to Africa",
    sector: "Investment ↗",
    description: "The premier international investment summit unlocking Africa's $2.5 trillion economic potential through PPP projects, sovereign deals and institutional investment.",
    ctaLabel: "Visit AGIF",
    icon: Zap,
    accentColor: "#10B981",
    image:
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099500/1b_dpkhdt.png",
    href: "/africa-investment",
  },
  {
    id: "adabraka-media",
    index: "03",
    name: "African Business Export Club 500",
    tagline: "Exporting African Excellence",
    sector: "Export & Trade",
    description: "Africa's premier export facilitation network connecting 500+ businesses with global markets through the AfCFTA framework — from trade finance to market entry.",
    ctaLabel: "Visit ABEC500",
    icon: BarChart3,
    accentColor: "#E879F9",
    image:
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099874/apn_square-logo_a4nl1q.png",
    href: "/abec",
  },
  {
    id: "kumasi-smart",
    index: "03",
    index: "04",
    name: "Women of Africa Network",
    tagline: "Modernity Meets Heritage",
    sector: "Real Estate",
    tagline: "Empowering African Women",
    sector: "Empowerment",
    description: "A pan-African network positively impacting women's lives through education, trade facilitation, economic empowerment, health and policy advocacy across the continent.",
    ctaLabel: "Visit WAN",
    icon: Home,
    accentColor: "#C9A84C",
    image:
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099379/1a_zcxsx2.png",
    href: "/women-of-africa",
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
    href: "/abec",
  },
];

function CompanyCard({
  company,
  delay,
  onRedirect,
  isGlobalRedirecting,
}: {
  company: (typeof COMPANIES)[0];
  delay: number;
  onRedirect: (name: string, url: string) => void;
  isGlobalRedirecting: boolean;
}) {
  const Icon = company.icon;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <a
      href={company.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        setIsClicked(true);
        onRedirect(company.name, company.href);
        setTimeout(() => setIsClicked(false), 3000);
      }}
      className={`card-lift animate-scale-in group relative flex flex-col overflow-hidden no-underline border-gold/30 transition-all duration-700 ${
        isClicked ? "scale-95 opacity-50" : isGlobalRedirecting ? "opacity-20 blur-[2px] pointer-events-none" : "opacity-100"
      }`}
      style={{
        animationDelay: `${delay}ms`,
        background: "#1e2f4d",
        border: "1px solid rgba(201,168,76,0.30)",
        borderRadius: 4,
        textDecoration: "none",
        height: "100%",
      }}
    >
      {/* Image strip */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 207, background: "#0d1e35" }}>
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 180, background: "#0d1e35" }}>
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
      <div className="flex flex-col flex-1 p-3">
      <div className="flex flex-col flex-1 p-5">
        {/* Icon + name */}
        <div className="flex flex-col gap-1 mb-2">
            <h2
              className="font-display font-semibold leading-tight"
              style={{ fontSize: 18.5, color: "#fff" }}
            >
              {company.name}
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#C9A84C",
                fontWeight: 500,
                marginTop: 2,
                letterSpacing: "0.04em",
              }}
            >
              {company.tagline}
            </p>
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginTop: 12 }}>
              {company.description}
            </p>
        </div>

        {/* CTA row */}
        <div
          className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
          style={{ color: "#C9A84C", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
          className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3 mt-auto pt-4"
          style={{ color: "#C9A84C", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          <span>{isClicked ? "Entering..." : `Visit ${company.name.split(" ")[0]}`}</span>
          <span>{isClicked ? "Entering..." : company.ctaLabel}</span>
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
        background: "linear-gradient(rgba(20,37,61,0.50), rgba(20,37,61,0.50)), url(https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778125799/gefw_z5bq6y.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "14px 0 10px 0",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes selectorFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes progressLoad {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      {/* Redirecting Overlay */}
      {redirecting && (
        <div style={{ 
          position: "fixed", inset: 0, zIndex: 10000, 
          background: "rgba(10,22,40,0.98)", backdropFilter: "blur(16px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: 24, animation: "selectorFadeIn 0.3s ease"
        }}>
          <Loader2 className="animate-spin" size={48} style={{ color: "#C9A84C" }} />
          <div style={{ textAlign: "center" }}>
            <p style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: 32, fontWeight: 600, color: "#fff", margin: 0 
            }}>
              Entering <span style={{ color: "#C9A84C", fontStyle: "italic" }}>{redirecting.name}</span>
              Entering portal...
            </p>
            <p style={{ 
              fontSize: 9, color: "rgba(255,255,255,0.45)", 
              textTransform: "uppercase", letterSpacing: "0.3em", marginTop: 16 
            }}>
              Initiating secure portal connection
            </p>
          </div>
          {/* Animated Progress Bar */}
          <div style={{ width: 260, height: 1, background: "rgba(255,255,255,0.1)", position: "relative", overflow: "hidden" }}>
            <div style={{ 
              position: "absolute", inset: 0, background: "#C9A84C", 
              animation: "progressLoad 1.2s linear forwards" 
            }} />
          </div>
        </div>
      )}

      <div className="max-w-[1472px] mx-auto px-6 lg:px-12" style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-4">
          <div>
           
            <h2 className="eyebrow mb-2">Portfolio</h2>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(22px,2.8vw,36px)", fontWeight: 600, color: "#fff", lineHeight: 1.1 }}
              style={{ fontSize: "clamp(24px,3vw,42px)", fontWeight: 600, color: "#fff", lineHeight: 1.1 }}
            >
              Four Companies,{" "}
              <span style={{ color: "#C9A84C", fontStyle: "italic" }}>One Vision</span>
              Our Companies
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6" style={{ flex: 1, minHeight: 0 }}>
          {COMPANIES.map((c, i) => (
            <CompanyCard 
              key={c.id} 
              company={c} 
              delay={i * 120} 
              onRedirect={handleRedirect} 
              isGlobalRedirecting={!!redirecting}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="gold-divider mt-3" />
      </div>
    </section>
  );
}
