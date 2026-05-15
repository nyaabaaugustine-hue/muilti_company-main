"use client";
import { useState } from "react";

const A = "#f28d01";
const NAVY = "#000040";

const PILLARS = [
  {
    icon: "🌍",
    title: "Export Trade Facilitation",
    desc: "We deploy all-inclusive support packages for export companies across Africa — removing barriers and opening doors to global markets under AfCFTA.",
  },
  {
    icon: "🤝",
    title: "Business Matchmaking",
    desc: "Connecting African exporters with verified international buyers, distributors and investors through our curated network of 500+ businesses.",
  },
  {
    icon: "📋",
    title: "AfCFTA Compliance",
    desc: "Guiding businesses through rules of origin, tariff schedules and Non-Tariff Barriers to maximise the benefits of the continental free trade area.",
  },
  {
    icon: "🏛️",
    title: "Policy Advocacy",
    desc: "Championing the interests of African exporters at the highest policy levels — bilateral negotiations, government engagements and continental forums.",
  },
];

export function AbecAbout() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section
      id="about"
      style={{
        background: "#fff",
        padding: "110px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative amber stripe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 6,
          height: "100%",
          background: `linear-gradient(180deg,${A},#b36900)`,
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Eyebrow */}
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
          Who We Are
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
            marginBottom: 72,
          }}
          className="about-grid"
        >
          {/* Left: text */}
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(32px,3.5vw,52px)",
                fontWeight: 600,
                color: NAVY,
                lineHeight: 1.1,
                marginBottom: 28,
              }}
            >
              Deploying Africa's{" "}
              <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>
                Export Potential
              </em>
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#555",
                lineHeight: 1.85,
                marginBottom: 20,
              }}
            >
              Africa Business Export Club 500 (ABEC500) is Africa's premier export
              facilitation network, built to connect ambitious African businesses with
              the global market through the African Continental Free Trade Area
              (AfCFTA) framework.
            </p>
            <p
              style={{
                fontSize: 15,
                color: "#555",
                lineHeight: 1.85,
                marginBottom: 32,
              }}
            >
              We deploy all-inclusive support packages — from trade finance and export
              documentation to policy advocacy and business matchmaking — ensuring that
              African enterprises can compete, grow and thrive across 54 nations and
              beyond.
            </p>

            {/* Mission/Vision cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {
                  label: "Our Mission",
                  text: "To be the most comprehensive and effective export support institution for African businesses, removing barriers and deploying all-inclusive packages that drive sustainable export growth.",
                },
                {
                  label: "Our Vision",
                  text: "A continent where every African enterprise has the knowledge, connections and resources to access global markets and contribute to Africa's economic transformation.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "18px 22px",
                    background: "#f8f6f0",
                    borderLeft: `3px solid ${A}`,
                    borderRadius: "0 4px 4px 0",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: A,
                      marginBottom: 6,
                    }}
                  >
                    {item.label}
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#444",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image collage */}
          <div style={{ position: "relative", height: 520 }}>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80"
              alt="African business team"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "72%",
                height: "68%",
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: "0 16px 48px rgba(0,0,64,0.15)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&q=80"
              alt="Export trade"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "58%",
                height: "52%",
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: "0 16px 48px rgba(0,0,64,0.15)",
              }}
            />
            {/* Stats badge */}
            <div
              style={{
                position: "absolute",
                bottom: "30%",
                left: "-8%",
                background: NAVY,
                borderRadius: 4,
                padding: "18px 22px",
                boxShadow: "0 12px 32px rgba(0,0,64,0.35)",
                border: `1px solid rgba(242,141,1,0.35)`,
                zIndex: 10,
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 36,
                  fontWeight: 700,
                  color: A,
                  lineHeight: 1,
                }}
              >
                500+
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.60)",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  marginTop: 4,
                }}
              >
                Export Members
              </div>
            </div>
          </div>
        </div>

        {/* Four pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
            gap: 16,
          }}
        >
          {PILLARS.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                padding: "28px 24px",
                background: hov === i ? NAVY : "#f8f6f0",
                border: `1px solid ${hov === i ? "rgba(242,141,1,0.45)" : "rgba(0,0,64,0.08)"}`,
                borderRadius: 4,
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                transform: hov === i ? "translateY(-4px)" : "none",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{p.icon}</div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: hov === i ? "#fff" : NAVY,
                  marginBottom: 10,
                  lineHeight: 1.2,
                  transition: "color 0.3s",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: hov === i ? "rgba(255,255,255,0.70)" : "#666",
                  lineHeight: 1.75,
                  margin: 0,
                  transition: "color 0.3s",
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
