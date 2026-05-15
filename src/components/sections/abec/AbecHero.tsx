"use client";
import { ArrowRight, Globe } from "lucide-react";

export function AbecHero() {
  return (
    <section
      id="overview"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg,#00002A 0%,#000040 60%,#00005A 100%)",
        paddingTop: 108,
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(242,141,1,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(242,141,1,0.05) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-5%",
          width: "65%",
          height: "140%",
          background: "radial-gradient(ellipse,rgba(242,141,1,0.10) 0%,transparent 60%)",
          pointerEvents: "none",
        }}
      />
      {/* Right image */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "46%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80"
          alt="Africa Business Export Club"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3, filter: "grayscale(20%)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg,#000040 0%,rgba(0,0,64,0.1) 55%,rgba(0,0,64,0.5) 100%)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 2, padding: "60px 64px 80px", maxWidth: 720 }}>
        {/* Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
          <div
            style={{ width: 8, height: 8, borderRadius: "50%", background: "#f28d01", boxShadow: "0 0 10px #f28d01" }}
          />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#f28d01" }}>
            Trade · Export · AfCFTA — APNABEC Group
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(44px,6vw,78px)",
            fontWeight: 600,
            lineHeight: 1.05,
            color: "#fff",
            marginBottom: 24,
          }}
        >
          Africa's Gateway to{" "}
          <em style={{ color: "#f28d01", fontStyle: "italic", fontWeight: 400 }}>Global Trade</em>
        </h1>

        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.76)",
            lineHeight: 1.85,
            fontWeight: 300,
            maxWidth: 480,
            marginBottom: 48,
          }}
        >
          Africa Business Export Club 500 connects African businesses with global markets through the AfCFTA framework —
          driving export growth, trade facilitation, and economic transformation across 54 nations.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 72 }}>
          <a
            href="#export-club"
            style={{
              background: "linear-gradient(135deg,#b36900,#f28d01)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 32px",
              borderRadius: 2,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 8px 32px rgba(242,141,1,0.35)",
            }}
          >
            Join the Club <ArrowRight size={14} />
          </a>
          <a
            href="#about"
            style={{
              background: "transparent",
              border: "1px solid rgba(242,141,1,0.5)",
              color: "#f28d01",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "13px 28px",
              borderRadius: 2,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Globe size={14} /> Who We Are
          </a>
        </div>

        <div style={{ display: "flex", gap: 48, paddingTop: 36, borderTop: "1px solid rgba(242,141,1,0.20)" }}>
          {[
            ["500+", "Export Members"],
            ["54", "African Nations"],
            ["AfCFTA", "Certified Partner"],
          ].map(([n, l]) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 34,
                  fontWeight: 600,
                  color: "#f28d01",
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.60)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginTop: 5,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
