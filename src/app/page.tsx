"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Globe, TrendingUp, Users, Award, GraduationCap } from "lucide-react";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import { SurveyPopup } from "@/components/sections/SurveyPopup";

const FAVICON = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781861840/favicon_qasbeo.png";

const COMPANIES = [
  {
    id: "afcfta-policy",
    index: "01",
    name: "AfCFTA Policy Network",
    tagline: "Intra-Africa Trade & Advocacy",
    description: "Africa's largest AfCFTA NGO think tank — championing free trade implementation, policy research and capacity building across 54 nations since 2019.",
    sector: "Trade Policy",
    icon: Globe,
    accentColor: "#F59E0B",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/Untitled-design-306x306_uc8rrz.png",
    href: "/afcfta-policy",
    external: false,
    visitLabel: "Visit AfCFTA Policy Network",  
  },
  {
    id: "agif",
    index: "02",
    name: "Africa Globalized Investment Forum",
    tagline: "Connecting Capital to Africa",
    description: "The premier international investment summit unlocking Africa's $2.5 trillion economic potential through PPP projects, sovereign deals and institutional investment.",
    sector: "Investment",
    icon: TrendingUp,
    accentColor: "#10B981",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778951617/logo-modified-rcwu8zd15uqvlujv0xasfhjru4gpfjtw9dtv6mfmyo_nq4f79.png",
    href: "https://africaglobalizedinvestment.com/",
    external: true,
    visitLabel: "Visit AGIF",
   
  },
  {
    id: "abec500",
    index: "03",
    name: "Africa Business Export Club 500",
    tagline: "Exporting African Excellence",
    description: "Africa's premier export facilitation network connecting 500+ businesses with global markets through the AfCFTA framework — from trade finance to market entry.",
    sector: "Export & Trade",
    icon: Award,
    accentColor: "#f28d01",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099874/apn_square-logo_a4nl1q.png",
    href: "https://abec500.com/",
    external: true,
    visitLabel: "Visit ABEC500",
    
  },
  {
    id: "women-of-africa",
    index: "04",
    name: "Women of Africa Network",
    tagline: "Empowering African Women",
    description: "A pan-African network positively impacting women's lives through education, trade facilitation, economic empowerment, health and policy advocacy across the continent.",
    sector: "Empowerment",
    icon: Users,
    accentColor: "#EC4899",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099379/1a_zcxsx2.png",
    href: "/women-of-africa",
    external: false,
    visitLabel: "Visit WAN",
   
  },
  {
    id: "apn-youth",
    index: "05",
    name: "APN Youth International",
    tagline: "Empowering Africa's Next Generation",
    description: "Equipping young Africans with education support, mentorship, wellness programs and leadership development — building a generation of confident, skilled and globally competitive leaders.",
    sector: "Youth Empowerment",
    icon: GraduationCap,
    accentColor: "#F4C430",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791523/lllogo_qt1wzz.jpg",
    href: "/apn-youth",
    external: false,
    visitLabel: "Visit APN Youth",
   
  },
];

export default function Home() {
  const [redirect, setRedirect] = useState<{
    name: string;
    accentColor: string;
    href: string;
  } | null>(null);

  // Swap favicon on the home page only
  useEffect(() => {
    const existing = document.querySelectorAll("link[rel~='icon']");
    existing.forEach(el => el.remove());
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = FAVICON;
    document.head.appendChild(link);
  }, []);

  const handleClick = useCallback(
    (name: string, accentColor: string, href: string, e: React.MouseEvent) => {
      e.preventDefault();
      setRedirect({ name, accentColor, href });
      setTimeout(() => {
        setRedirect(null);
        window.open(href, "_blank", "noopener,noreferrer");
      }, 800);
    },
    []
  );

  return (
    <>
      <LoadingScreen
        logo="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778124971/apn_square_i3pzri.png"
        accentColor="#C9A84C"
        companyName="APNABEC Group"
      />
      <SurveyPopup />
      {/* ════ Redirect overlay ════ */}
      {redirect && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: "#0a1422",
            animation: "wanFadeIn 0.35s ease-out",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              width: "60vmax", height: "60vmax",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${redirect.accentColor}44 0%, transparent 70%)`,
              animation: "wanPulse 0.8s ease-out",
            }}
          />
          {/* Accent bar */}
          <div
            style={{
              width: 0, height: 2,
              background: redirect.accentColor,
              borderRadius: 1,
              marginBottom: 28,
              animation: "wanExpand 0.5s 0.15s ease-out forwards",
            }}
          />
          {/* Company name */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(24px,4vw,42px)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.2,
              textAlign: "center",
              padding: "0 24px",
              opacity: 0,
              animation: "wanFadeUp 0.4s 0.25s ease-out forwards",
              margin: 0,
            }}
          >
            {redirect.name}
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(10px, 1.5vw, 13px)",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: redirect.accentColor,
              marginTop: 12,
              opacity: 0,
              animation: "wanFadeUp 0.4s 0.35s ease-out forwards",
            }}
          >
            Opening in new tab...
          </p>
          <div style={{ display: "flex", gap: 6, marginTop: 36, opacity: 0, animation: "wanFadeUp 0.4s 0.45s ease-out forwards" }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 8, height: 8,
                  borderRadius: "50%",
                  background: redirect.accentColor,
                  animation: `wanBounce 0.6s ${i * 0.12}s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes wanFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes wanFadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes wanExpand { from { width: 0; } to { width: 120px; } }
        @keyframes wanPulse { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes wanBounce { from { transform: translateY(0); opacity: 0.4; } to { transform: translateY(-10px); opacity: 1; } }

        .home-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(64px, 7vw, 128px) clamp(20px, 4vw, 40px) clamp(40px, 5vw, 64px);
        }

        .home-companies-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .home-companies-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1280px) {
          .home-companies-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .home-footer-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: clamp(16px, 3vw, 24px) clamp(16px, 4vw, 24px);
        }
        @media (min-width: 768px) {
          .home-footer-bar { flex-direction: row; gap: 16px; }
        }
      `}</style>

      <main
        style={{
          display: "flex", minHeight: "100dvh", width: "100%",
          flexDirection: "column", position: "relative",
          background:
            "linear-gradient(rgba(8, 18, 34, 0.88), rgba(8, 18, 34, 0.88)), url(https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778125799/gefw_z5bq6y.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ── Hero ── */}
        <div className="home-hero">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.60)",
              fontWeight: 600,
              marginBottom: 18,
              textAlign: "center",
            }}
          >
           
          </p>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(42px, 12vw, 148px)",
              fontWeight: 700,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: "#fff",
              margin: 0,
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            APNA<span style={{ color: "#C9A84C" }}>BEC</span>
          </h1>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(14px, 2.2vw, 20px)",
              color: "rgba(255,255,255,0.55)",
              fontWeight: 300,
              fontStyle: "italic",
              marginTop: 12,
              textAlign: "center",
              letterSpacing: "0.04em",
            }}
          >
            
          </p>

          {/* ── Market Access CTA link ── */}
          <a
            href="https://forms.gle/qcuYxjJKfmjSdBwb6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 28,
              padding: "13px 28px",
              borderRadius: 3,
              background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.06) 100%)",
              border: "1px solid rgba(201,168,76,0.45)",
              textDecoration: "none",
              color: "#C9A84C",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(11px, 1.5vw, 13px)",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              transition: "all 0.25s ease",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "linear-gradient(135deg, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.12) 100%)";
              el.style.borderColor = "#C9A84C";
              el.style.boxShadow = "0 0 32px rgba(201,168,76,0.20), inset 0 0 20px rgba(201,168,76,0.06)";
              el.style.transform = "translateY(-2px)";
              el.style.letterSpacing = "0.22em";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.06) 100%)";
              el.style.borderColor = "rgba(201,168,76,0.45)";
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
              el.style.letterSpacing = "0.18em";
            }}
          >
            {/* Shimmer line */}
            <span style={{
              position: "absolute",
              top: 0, left: "-100%",
              width: "60%", height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent)",
              animation: "mktShimmer 3s ease-in-out infinite",
              pointerEvents: "none",
            }} />
            {/* Left diamond */}
            <span style={{ fontSize: 10, opacity: 0.7 }}>◆</span>
            Sign Up For Market Access Opportunities
            {/* Arrow */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
              <path d="M2 7H12M8 3L12 7L8 11" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <style>{`
            @keyframes mktShimmer {
              0%   { left: -100%; opacity: 0; }
              20%  { opacity: 1; }
              60%  { left: 160%; opacity: 1; }
              61%  { opacity: 0; }
              100% { left: 160%; opacity: 0; }
            }
          `}</style>
        </div>

        {/* ── Company Cards ── */}
        <div style={{
          flex: 1, width: "100%", maxWidth: 1520,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 24px) clamp(40px, 8vw, 80px)",
        }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.55)",
              fontWeight: 600,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Our Companies
          </p>

          <div className="home-companies-grid">
            {COMPANIES.map((company) => {
              const Icon = company.icon;
              return (
                <a
                  key={company.id}
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleClick(company.name, company.accentColor, company.href, e)}
                  className="group bg-[#111e33] border border-[rgba(201,168,76,0.22)] rounded-[3px] overflow-hidden no-underline transition-all duration-300 hover:border-[#C9A84C] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.55)]"
                  style={{
                    display: "flex", flexDirection: "column",
                  }}
                >
                  {/* Image strip */}
                  <div
                    className="h-[188px] bg-[#0a1525] overflow-hidden"
                    style={{
                      position: "relative", flexShrink: 0,
                    }}
                  >
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      style={{ objectFit: "contain", padding: "14px" }}
                    />
                    {/* Index badge */}
                    <div
                      style={{
                        position: "absolute", top: 10, left: 10,
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
                        background: "rgba(10,20,38,0.90)",
                        color: "#C9A84C",
                        border: "1px solid rgba(201,168,76,0.45)",
                        borderRadius: 2, padding: "3px 8px",
                      }}
                    >
                      {company.index}
                    </div>
                    {/* Sector pill */}
                    <div
                      style={{
                        position: "absolute", top: 10, right: 10,
                        fontSize: 9, fontWeight: 600, letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        background: "rgba(10,20,38,0.90)",
                        color: company.accentColor,
                        border: `1px solid ${company.accentColor}55`,
                        borderRadius: 2, padding: "3px 8px",
                      }}
                    >
                      {company.sector}
                    </div>
                    {/* External link indicator */}
                    <div
                      style={{
                        position: "absolute", bottom: 10, right: 10,
                        fontSize: 8, fontWeight: 600, letterSpacing: "0.10em",
                        textTransform: "uppercase",
                        background: "rgba(201,168,76,0.12)",
                        color: "#C9A84C",
                        border: "1px solid rgba(201,168,76,0.25)",
                        borderRadius: 2, padding: "2px 7px",
                      }}
                    >
                      ↗ New Tab
                    </div>
                    {/* Bottom gradient */}
                    <div
                      className="h-12 bg-gradient-to-t from-[#111e33] to-transparent"
                      style={{
                        position: "absolute", left: 0, right: 0, bottom: 0,
                      }}
                    />
                  </div>

                  {/* Body */}
                  <div style={{ padding: "14px 16px 6px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <Icon size={14} style={{ color: company.accentColor, marginTop: 3, flexShrink: 0 }} />
                      <h2
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: 17,
                          fontWeight: 600,
                          color: "#fff",
                          margin: 0,
                          lineHeight: 1.25,
                        }}
                      >
                        {company.name}
                      </h2>
                    </div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        color: company.accentColor,
                        fontWeight: 600,
                        margin: 0,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {company.tagline}
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.52)",
                        lineHeight: 1.65,
                        margin: 0,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {company.description}
                    </p>

                    {/* Stats row */}
                    {company.stats && (company.stats as {v:string;l:string}[]).length > 0 && (
                      <div
                        style={{
                          display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6,
                          borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 10,
                        }}
                      >
                        {(company.stats as {v:string;l:string}[]).map((s, si) => (
                          <div key={si} style={{ flex: "1 1 80px", textAlign: "center", borderRight: si < (company.stats as {v:string;l:string}[]).length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: company.accentColor, lineHeight: 1 }}>{s.v}</div>
                            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.40)", textTransform: "uppercase", letterSpacing: "0.10em", marginTop: 3 }}>{s.l}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CTA row */}
                    <div
                      style={{
                        display: "flex", alignItems: "center", gap: 6, marginTop: 8, marginBottom: 12,
                        color: "rgba(201,168,76,0.75)",
                        fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
                      }}
                    >
                      <span>{company.visitLabel}</span>
                      <ArrowRight size={12} />
                      <span style={{ fontSize: 9, color: "rgba(201,168,76,0.55)" }}>↗</span>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    className="h-[2.5px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${company.accentColor}88, ${company.accentColor}, #C9A84C)` }}
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* ── Footer bar ── */}
        <div className="home-footer-bar border-t border-[rgba(201,168,76,0.10)]" style={{ background: "rgba(5,10,20,0.95)" }}>
          <span style={{ width: 20, height: 1, background: "rgba(201,168,76,0.30)", display: "block", flexShrink: 0 }} />
          <p
            style={{
              fontSize: 10, color: "rgba(255,255,255,0.38)",
              letterSpacing: "0.18em", textTransform: "uppercase", margin: 0, textAlign: "center",
            }}
          >
            &copy; {new Date().getFullYear()} APNABEC — All Rights Reserved
          </p>
          <span style={{ width: 20, height: 1, background: "rgba(201,168,76,0.30)", display: "block", flexShrink: 0 }} />
        </div>
      </main>
    </>
  );
}
