"use client";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function AdabrakaMediaPage() {
  useEffect(() => {
    window.location.replace("https://www.abec500.com");
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0A1628",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
      }}
    >
      <Loader2
        className="animate-spin"
        size={48}
        style={{ color: "#E879F9" }}
      />
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22,
          color: "#fff",
          letterSpacing: "0.04em",
        }}
      >
        Redirecting to{" "}
        <em style={{ color: "#E879F9" }}>African Business Export Club</em>
      </p>
      <p
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.4)",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        www.abec500.com
      </p>
    </main>
  );
}
