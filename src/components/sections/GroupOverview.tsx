"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const STRENGTHS = [
  "Integrated Technological Solutions",
  "Sustainable Infrastructure & Energy",
  "Luxury Living & Lifestyle Mastery",
  "Global Market Amplification",
  "Cross-Sector Strategic Synergy",
  "Unwavering Commitment to Quality",
];

const STATS = [
  { n: "12+", label: "Countries" },
  { n: "400+", label: "Experts" },
  { n: "150+", label: "Awards" },
];

export function GroupOverview() {
  return (
    <section
      id="about"
      style={{ background: "#112240", padding: 0 }}
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        style={{ padding: "100px 48px" }}
      >
        {/* Left: text */}
        <div>
          <div className="eyebrow mb-5">Unified Leadership</div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(34px,3.5vw,50px)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#fff",
              marginBottom: 20,
            }}
          >
            A Unified Force Delivering{" "}
            <em style={{ color: "#C9A84C", fontStyle: "italic", fontWeight: 400 }}>
              Diverse Expertise
            </em>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.58)",
              lineHeight: 1.85,
              fontWeight: 300,
              marginBottom: 36,
            }}
          >
            UnifiedNexus operates at the intersection of industry-defining
            innovation. By pooling our resources and specialised knowledge across
            four distinct sectors, we create an ecosystem far greater than the
            sum of its parts.
          </p>

          {/* Strengths */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
          >
            {STRENGTHS.map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={15}
                  style={{ color: "#C9A84C", flexShrink: 0, marginTop: 2 }}
                />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 400, lineHeight: 1.5 }}>
                  {s}
                </span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div
            className="flex gap-10"
            style={{ paddingTop: 32, borderTop: "1px solid rgba(201,168,76,0.15)" }}
          >
            {STATS.map(({ n, label }) => (
              <div key={label}>
                <div
                  className="font-display"
                  style={{ fontSize: 38, fontWeight: 600, color: "#C9A84C", lineHeight: 1 }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    marginTop: 6,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image + quote */}
        <div className="relative" style={{ height: 560 }}>
          <div
            className="overflow-hidden w-full h-full"
            style={{ borderRadius: 4 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
              alt="UnifiedNexus Group headquarters"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.7) contrast(1.05)" }}
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.2) 60%, transparent 100%)",
              }}
            />
          </div>

          {/* Decorative border accent */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: -16,
              right: -16,
              width: 160,
              height: 160,
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: 4,
            }}
          />

          {/* Quote card */}
          <div
            className="absolute bottom-8 left-6 right-6 p-6 glass"
            style={{ borderRadius: 4 }}
          >
            <p
              className="font-display"
              style={{
                fontSize: 14,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.75,
                marginBottom: 12,
              }}
            >
              "Innovation happens when different perspectives collide. That's the
              core of the UnifiedNexus philosophy."
            </p>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: "#C9A84C",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              — Julian Vance, Group Chairman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
