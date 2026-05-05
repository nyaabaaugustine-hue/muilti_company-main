"use client";

import { ArrowDown, ArrowRight } from "lucide-react";

const STATS = [
  { n: "4", label: "Companies" },
  { n: "12+", label: "Countries" },
  { n: "400+", label: "Experts" },
  { n: "10yr", label: "Track Record" },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #112240 100%)" }}
    >
      {/* Grid texture */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          right: "-10%",
          width: "70%",
          height: "80%",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          left: "-5%",
          width: "50%",
          height: "60%",
          background: "radial-gradient(ellipse, rgba(17,34,64,0.9) 0%, transparent 70%)",
        }}
      />

      {/* Right image panel */}
      <div
        className="absolute right-0 top-0 h-full hidden lg:block pointer-events-none"
        style={{ width: "48%" }}
      >
        <img
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777865847/WhatsApp_Image_2026-05-03_at_7.41.12_PM_buzbtt.jpg"
          alt="Ghana business"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.18,
            filter: "grayscale(20%) contrast(1.1)",
          }}
        />
        {/* Fade edge */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #0A1628 0%, rgba(10,22,40,0.2) 50%, rgba(10,22,40,0.5) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        {/* Eyebrow */}
        <div className="eyebrow animate-fade-up mb-6">
          Ghanaian Excellence · Est. 2015
        </div>

        {/* Headline */}
        <h1
          className="font-display animate-fade-up delay-100"
          style={{
            fontSize: "clamp(52px, 7.5vw, 96px)",
            fontWeight: 600,
            lineHeight: 1.03,
            maxWidth: 720,
            marginBottom: 28,
            color: "#fff",
          }}
        >
          One Group.{" "}
          <em style={{ color: "#C9A84C", fontStyle: "italic", fontWeight: 400 }}>
            Four Worlds.
          </em>
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up delay-200"
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 480,
            lineHeight: 1.85,
            fontWeight: 300,
            marginBottom: 48,
          }}
        >
          Four specialised companies. One shared vision of excellence across
          Ghana and beyond — in Technology, Energy, Real Estate, and Media.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-300 flex flex-wrap gap-4"
          style={{ marginBottom: 80 }}
        >
          <a href="#companies" className="btn-gold">
            Explore Our Companies
            <ArrowDown size={14} />
          </a>
          <a href="#about" className="btn-outline-gold">
            Our Story
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up delay-400 flex flex-wrap gap-12"
          style={{
            paddingTop: 40,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {STATS.map(({ n, label }) => (
            <div key={label}>
              <div
                className="font-display"
                style={{ fontSize: 46, fontWeight: 600, color: "#C9A84C", lineHeight: 1 }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginTop: 6,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float hidden md:flex flex-col items-center gap-2"
        style={{ opacity: 0.4 }}
      >
        <span style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C" }}>
          Scroll
        </span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #C9A84C, transparent)" }} />
      </div>
    </section>
  );
}
