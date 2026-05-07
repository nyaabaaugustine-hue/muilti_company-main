"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        width: "100%",
        background: "#0A1628",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* APNABEC Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          padding: "60px 24px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(72px, 14vw, 180px)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#fff",
            margin: 0,
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          APNA<span style={{ color: "#C9A84C" }}>BEC</span>
        </h1>
        <div
          style={{
            width: "100%",
            maxWidth: 560,
            height: 1,
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            margin: "28px 0 24px",
          }}
        />
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(11px, 1.6vw, 14px)",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(201,168,76,0.85)",
            fontWeight: 500,
            margin: 0,
            textAlign: "center",
          }}
        >
          Group · Ghana
        </p>
      </div>

      {/* Footer bar */}
      <div
        style={{
          background: "#070f1c",
          borderTop: "1px solid rgba(201,168,76,0.12)",
          padding: "7px 24px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <span
          style={{
            width: 20,
            height: 1,
            background: "rgba(201,168,76,0.35)",
            display: "block",
            flexShrink: 0,
          }}
        />
        <p
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          &copy; {new Date().getFullYear()} APNABEC &mdash; All Rights Reserved
        </p>
        <span
          style={{
            width: 20,
            height: 1,
            background: "rgba(201,168,76,0.35)",
            display: "block",
            flexShrink: 0,
          }}
        />
      </div>
    </main>
  );
}
