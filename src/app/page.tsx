import { CompanySelector } from "@/components/sections/CompanySelector";
import { CompanyGrid } from "@/components/sections/CompanyGrid";

const MARQUEE_ITEMS = [
  "Technology & AI",
  "Renewable Energy",
  "Smart Real Estate",
  "Strategic Marketing",
  "Accra · Kumasi · Tema",
  "12+ Countries",
  "400+ Experts",
  "Est. 2015",
  "Technology & AI",
  "Renewable Energy",
  "Smart Real Estate",
  "Strategic Marketing",
  "Accra · Kumasi · Tema",
  "12+ Countries",
  "400+ Experts",
  "Est. 2015",
];

export default function Home() {
  return (
    <main
      style={{ minHeight: "100vh", width: "100%", overflowX: "hidden", background: "#0A1628" }}
    >
      {/* Company selector overlay — shows on load */}
      <CompanySelector />

      {/* Gold ticker marquee */}
      <div
        style={{
          background: "linear-gradient(90deg, #D4B760 0%, #F5E09E 50%, #D4B760 100%)",
          padding: "12px 0",
          overflow: "hidden",
        }}
      >
        <div className="animate-marquee flex gap-16 whitespace-nowrap" style={{ width: "max-content" }}>
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center gap-4">
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#02050C",
                }}
              >
                {item}
              </span>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                background: "rgba(2,5,12,0.45)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* Company portfolio */}
      <CompanyGrid />
    </main>
  );
}
