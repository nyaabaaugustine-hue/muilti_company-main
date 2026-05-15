"use client";
import { STATS } from "@/components/women/data";

const A = "#EC4899";

export function HomeStats() {
  return (
    <section style={{ background: "#fff", padding: "64px" }}>
      <div
        style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24,
        }}
      >
        {STATS.map(({ number, label }) => (
          <div
            key={label}
            style={{
              textAlign: "center", padding: "36px 24px",
              background: "linear-gradient(135deg,#fdf0f7,#fff9fc)",
              borderRadius: 6, border: `1px solid rgba(236,72,153,0.12)`,
              transition: "all 0.3s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 36px rgba(236,72,153,0.10)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(36px,4vw,56px)",
                fontWeight: 600, color: A, lineHeight: 1,
              }}
            >
              {number}
            </div>
            <div
              style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#888", marginTop: 10,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
