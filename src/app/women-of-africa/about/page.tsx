import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the Women of Africa Network mission, vision and history of empowering women across all 54 African nations.",
};

const A = "#EC4899";
const BG = "#1a0520";

const VALUES = [
  { icon: "🌱", title: "Inclusion", desc: "Every woman and girl, regardless of background, geography or circumstance, deserves access to opportunity." },
  { icon: "🤝", title: "Solidarity", desc: "We build networks of collective action — because together, African women are an unstoppable force for change." },
  { icon: "📣", title: "Advocacy", desc: "We amplify the voices of women in policy spaces, trade negotiations and governance forums across Africa." },
  { icon: "🔬", title: "Innovation", desc: "We leverage technology, data and creative partnerships to find new solutions to old barriers." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative", minHeight: "55vh", display: "flex", alignItems: "center",
          background: `linear-gradient(135deg,${BG} 0%,#2d0a3e 50%,#3b1155 100%)`,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(236,72,153,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(236,72,153,0.06) 1px,transparent 1px)`, backgroundSize: "64px 64px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-20%", right: 0, width: "45%", height: "140%", background: "radial-gradient(ellipse,rgba(236,72,153,0.15) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "80px 64px", maxWidth: 800 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: A, boxShadow: `0 0 10px ${A}` }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A }}>About WAN</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(42px,5.5vw,68px)", fontWeight: 600, lineHeight: 1.05, color: "#fff", marginBottom: 20 }}>
            Who We <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Are</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", lineHeight: 1.85, maxWidth: 560 }}>
            Founded in 2020 and operating across all 54 African nations, Women of Africa Network is a pan-African NGO dedicated to positively impacting the lives of women through education, trade, finance and advocacy.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "100px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: A, display: "block" }} />Our Mission
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 600, color: BG, lineHeight: 1.2, marginBottom: 20 }}>
              Raising the Status and{" "}
              <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Potential of Women</em>{" "}
              Across Africa
            </h2>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
              The Women of Africa Network exists to raise funds and promote initiatives that support women businesses and entrepreneurs to thrive and scale under the African Continental Free Trade Agreement (AfCFTA).
            </p>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9 }}>
              We believe in boosting women's inclusion in entrepreneurship and business across Africa and the diaspora — dismantling barriers, creating pathways and nurturing ecosystems where women lead.
            </p>
          </div>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: A, display: "block" }} />Our Vision
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 600, color: BG, lineHeight: 1.2, marginBottom: 20 }}>
              An Africa Where Every Woman{" "}
              <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Thrives</em>
            </h2>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
              We envision a continent where women are equal participants in every economy — from village markets to international boardrooms — and where the full force of Africa's feminine talent drives sustainable development.
            </p>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9 }}>
              Our vision is rooted in the belief that when women prosper, families, communities and nations flourish — making gender equity not just a moral imperative, but Africa's greatest strategic asset.
            </p>
          </div>
        </div>
      </section>

      {/* Background / Story */}
      <section style={{ padding: "80px 64px", background: "#fdf8fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: A, display: "block" }} />Our Story
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3vw,42px)", fontWeight: 600, color: BG, lineHeight: 1.2, marginBottom: 24 }}>
                Born From a Conviction That{" "}
                <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Africa Cannot Rise Without Its Women</em>
              </h2>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
                Women of Africa Network was founded in 2020 as a direct response to the underrepresentation of women in Africa's growing trade and investment landscape. With the signing of the AfCFTA agreement, our founders saw a once-in-a-generation opportunity to ensure women were at the centre — not the margins — of Africa's economic transformation.
              </p>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
                Beginning with programmes in Ghana, we rapidly expanded operations across West, East and Southern Africa. Our approach is holistic: we meet women where they are — in classrooms, markets, boardrooms and communities — and build the specific capacities they need to advance.
              </p>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9 }}>
                Today, WAN is a proud member of the APN Group of Organisations and operates as Africa's leading NGO dedicated exclusively to women's economic empowerment within the AfCFTA framework.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { num: "2020", label: "Founded" },
                { num: "54", label: "Nations Reached" },
                { num: "10K+", label: "Women Served" },
                { num: "5", label: "Core Pillars" },
              ].map(({ num, label }) => (
                <div key={label} style={{ background: BG, borderRadius: 6, padding: "28px 20px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 38, fontWeight: 600, color: A, lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.60)", letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 8 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: A, display: "block" }} />
              What We Stand For
              <span style={{ width: 28, height: 1, background: A, display: "block" }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 600, color: BG, lineHeight: 1.2 }}>
              Our Core <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Values</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {VALUES.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: "#fdf8fb", border: `1px solid rgba(236,72,153,0.12)`,
                  borderRadius: 6, padding: "32px 24px", textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 36px rgba(236,72,153,0.10)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = A;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(236,72,153,0.12)";
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 600, color: BG, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: `linear-gradient(135deg,${BG},#2d0a3e)`, padding: "80px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(30px,3.5vw,46px)", fontWeight: 600, color: "#fff", lineHeight: 1.2, marginBottom: 18 }}>
            Ready to be Part of{" "}
            <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>the Change?</em>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 36 }}>
            Whether you want to volunteer, donate, partner or simply learn more — we welcome you into the Women of Africa Network family.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link
              href="/women-of-africa/get-involved"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: `linear-gradient(135deg,#9D174D,${A})`,
                color: "#fff", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.10em", textTransform: "uppercase",
                padding: "14px 32px", borderRadius: 2, textDecoration: "none",
                boxShadow: "0 8px 28px rgba(236,72,153,0.35)",
              }}
            >
              Get Involved <ArrowRight size={14} />
            </Link>
            <Link
              href="/women-of-africa/team"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", border: `1px solid rgba(236,72,153,0.45)`,
                color: A, fontSize: 12, fontWeight: 600,
                letterSpacing: "0.10em", textTransform: "uppercase",
                padding: "13px 32px", borderRadius: 2, textDecoration: "none",
              }}
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
