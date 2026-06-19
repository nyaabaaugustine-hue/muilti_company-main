"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { openContactModal } from "@/components/sections/ContactModal";

const A = "#f28d01";
const NAVY = "#000040";

const TIERS = [
  {
    name: "Standard Member",
    price: "$500",
    period: "/ year",
    tag: "Entry",
    features: [
      "Access to ABEC500 member directory",
      "Participation in trade missions",
      "Monthly export newsletter",
      "AfCFTA compliance guide",
      "Basic trade facilitation support",
    ],
  },
  {
    name: "Premium Member",
    price: "$1,500",
    period: "/ year",
    tag: "Most Popular",
    active: true,
    features: [
      "Everything in Standard",
      "Priority business matchmaking",
      "1-on-1 export advisory sessions",
      "Access to trade finance network",
      "Representation at continental forums",
      "Export documentation assistance",
    ],
  },
  {
    name: "Platinum Member",
    price: "Custom",
    period: "bespoke",
    tag: "Enterprise",
    features: [
      "Everything in Premium",
      "Dedicated account manager",
      "C-suite networking events",
      "Government liaison services",
      "Custom market entry strategy",
      "Board-level advocacy",
      "Media & press representation",
    ],
  },
];

const BENEFITS = [
  { icon: "🌍", title: "54 Nation Reach", desc: "Access all AfCFTA member states through one membership" },
  { icon: "💼", title: "Trade Finance", desc: "Connections to export credit facilities and working capital" },
  { icon: "🤝", title: "Buyer Matchmaking", desc: "Curated introductions to vetted international buyers" },
  { icon: "📋", title: "AfCFTA Compliance", desc: "Expert guidance through rules of origin and tariff schedules" },
  { icon: "📚", title: "Capacity Building", desc: "World-class export training and certification programmes" },
  { icon: "🏛️", title: "Policy Influence", desc: "Your voice in continental trade policy negotiations" },
];

export function AbecExportClub() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section
      id="export-club"
      style={{
        background: "linear-gradient(180deg,#f8f6f0 0%,#fff 100%)",
        padding: "110px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background text watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "clamp(120px,20vw,220px)",
          fontWeight: 700,
          color: "rgba(0,0,64,0.03)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "0.05em",
        }}
      >
        EXPORT
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: A,
              marginBottom: 16,
            }}
          >
            <span style={{ width: 28, height: 1, background: A, display: "block" }} />
            Export Club 500
            <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(32px,3.5vw,52px)",
              fontWeight: 600,
              color: NAVY,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Join Africa's Premier{" "}
            <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>
              Export Network
            </em>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#666",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.80,
            }}
          >
            The Export Club 500 is an exclusive membership community for Africa's most
            ambitious export businesses. Join 500+ companies already transforming
            Africa's trade landscape.
          </p>
        </div>

        {/* Benefits grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: 16,
            marginBottom: 72,
          }}
        >
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 16,
                padding: "22px 20px",
                background: "#fff",
                border: "1px solid rgba(0,0,64,0.08)",
                borderRadius: 4,
                boxShadow: "0 2px 12px rgba(0,0,64,0.04)",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(242,141,1,0.4)`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(242,141,1,0.12)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,64,0.08)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,64,0.04)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: `rgba(242,141,1,0.08)`,
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {b.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: NAVY,
                    marginBottom: 4,
                    fontFamily: "'Cormorant Garamond',serif",
                  }}
                >
                  {b.title}
                </div>
                <p style={{ fontSize: 12, color: "#888", lineHeight: 1.65, margin: 0 }}>
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing tiers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {TIERS.map((t, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                background: t.active ? NAVY : "#fff",
                border: t.active
                  ? `2px solid ${A}`
                  : `1px solid ${hov === i ? "rgba(242,141,1,0.45)" : "rgba(0,0,64,0.10)"}`,
                borderRadius: 6,
                padding: "32px 28px",
                position: "relative",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                transform: hov === i || t.active ? "translateY(-4px)" : "none",
                boxShadow:
                  t.active
                    ? `0 20px 60px rgba(242,141,1,0.25)`
                    : hov === i
                    ? "0 12px 40px rgba(242,141,1,0.12)"
                    : "none",
              }}
            >
              {t.active && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: A,
                    color: "#fff",
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    padding: "4px 14px",
                    borderRadius: 20,
                  }}
                >
                  {t.tag}
                </div>
              )}
              {!t.active && (
                <div
                  style={{
                    display: "inline-block",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: A,
                    border: `1px solid rgba(242,141,1,0.35)`,
                    padding: "3px 10px",
                    borderRadius: 20,
                    marginBottom: 16,
                  }}
                >
                  {t.tag}
                </div>
              )}
              {t.active && <div style={{ height: 28 }} />}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: t.active ? "#fff" : NAVY,
                  marginBottom: 8,
                  lineHeight: 1,
                }}
              >
                {t.name}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 24 }}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 40,
                    fontWeight: 700,
                    color: A,
                    lineHeight: 1,
                  }}
                >
                  {t.price}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: t.active
                      ? "rgba(255,255,255,0.55)"
                      : "rgba(0,0,64,0.45)",
                  }}
                >
                  {t.period}
                </span>
              </div>
              <div
                style={{
                  height: 1,
                  background: t.active
                    ? "rgba(242,141,1,0.25)"
                    : "rgba(0,0,64,0.08)",
                  marginBottom: 22,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 28,
                }}
              >
                {t.features.map((f, fi) => (
                  <div
                    key={fi}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 13,
                      color: t.active ? "rgba(255,255,255,0.80)" : "#555",
                    }}
                  >
                    <CheckCircle
                      size={14}
                      style={{ color: A, marginTop: 2, flexShrink: 0 }}
                    />
                    {f}
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  openContactModal("Africa Business Export Club 500");
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px 0",
                  background: t.active
                    ? `linear-gradient(135deg,#b36900,${A})`
                    : "transparent",
                  border: t.active ? "none" : `1px solid rgba(242,141,1,0.50)`,
                  color: t.active ? "#fff" : A,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  borderRadius: 2,
                  textDecoration: "none",
                  transition: "all 0.3s",
                  boxShadow: t.active ? `0 6px 20px rgba(242,141,1,0.35)` : "none",
                }}
                onMouseEnter={e => {
                  if (!t.active) {
                    (e.currentTarget as HTMLAnchorElement).style.background = `rgba(242,141,1,0.08)`;
                  }
                }}
                onMouseLeave={e => {
                  if (!t.active) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }
                }}
              >
                Get Started <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          style={{
            textAlign: "center",
            padding: "36px 32px",
            background: NAVY,
            borderRadius: 6,
            border: `1px solid rgba(242,141,1,0.25)`,
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.70)",
              marginBottom: 16,
              lineHeight: 1.7,
            }}
          >
            Not sure which membership is right for your business?{" "}
            <strong style={{ color: "#fff" }}>Talk to our export advisory team</strong>{" "}
            and we'll match you to the right tier.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              openContactModal("Africa Business Export Club 500");
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: `linear-gradient(135deg,#b36900,${A})`,
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              padding: "12px 28px",
              borderRadius: 2,
              textDecoration: "none",
              boxShadow: `0 6px 24px rgba(242,141,1,0.35)`,
            }}
          >
            Register Your Business <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
