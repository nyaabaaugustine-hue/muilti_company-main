import { CompanySelector } from "@/components/sections/CompanySelector";
import { CompanyGrid } from "@/components/sections/CompanyGrid";
import { NewsScroller } from "@/components/sections/NewsScroller";

export default function Home() {
  return (
    <main
      style={{
        height: "100dvh",
        width: "100%",
        overflow: "hidden",
        background: "#0A1628",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Company selector overlay */}
      <CompanySelector />

      {/* Company portfolio — grows to fill remaining space */}
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", minHeight: 0 }}>
        <CompanyGrid />
      </div>

      {/* News scroller — fixed at bottom */}
      <NewsScroller />

      {/* All Rights Reserved — very bottom */}
      <div
        style={{
          background: "#070f1c",
          borderTop: "1px solid rgba(201,168,76,0.12)",
          padding: "7px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          flexShrink: 0,
        }}
      >
        <span
          style={{
            width: 20,
            height: 1,
            background: "rgba(201,168,76,0.35)",
            display: "block",
          }}
        />
        <p
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          &copy; {new Date().getFullYear()} UnifiedNexus Group &mdash; All Rights Reserved
        </p>
        <span
          style={{
            width: 20,
            height: 1,
            background: "rgba(201,168,76,0.35)",
            display: "block",
          }}
        />
      </div>
    </main>
  );
}
