import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Globe, Award } from "lucide-react";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import SafeImage from "@/components/sections/SafeImage";

const WAN_LOGO = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099379/1a_zcxsx2.png";

export const metadata: Metadata = {
  title: "Education Program",
  description: "WAN's education programme provides scholarships, literacy training and mentorship for women and girls across Africa.",
};

const A = "#EC4899";
const BG = "#1a0520";

const INITIATIVES = [
  {
    icon: <Award size={24} />,
    title: "Scholarship Fund",
    desc: "Merit and need-based scholarships for girls pursuing secondary, tertiary and postgraduate education across African universities.",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Literacy & Skills Training",
    desc: "Community-based literacy programmes and vocational training workshops that equip women with practical, marketable skills.",
  },
  {
    icon: <Users size={24} />,
    title: "Mentorship Circles",
    desc: "Structured mentorship connecting aspiring young women with established African women leaders in business, science and the arts.",
  },
  {
    icon: <Globe size={24} />,
    title: "Digital Learning Access",
    desc: "Technology partnerships that bring online learning platforms, tablets and internet access to women in underserved communities.",
  },
];

export default function EducationPage() {
  return (
    <>
      <LoadingScreen logo={WAN_LOGO} accentColor="#EC4899" companyName="Women of Africa Network" />
      <style>{`
        .wan-initiative-card {
          transition: all 0.3s;
        }
        .wan-initiative-card:hover {
          border-color: #EC4899 !important;
          box-shadow: 0 8px 32px rgba(236,72,153,0.09);
        }
      `}</style>

      {/* Hero */}
      <section
        style={{
          position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
          background: `linear-gradient(135deg,${BG} 0%,#2d0a3e 50%,#3b1155 100%)`,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(236,72,153,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(236,72,153,0.06) 1px,transparent 1px)`, backgroundSize: "64px 64px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, width: "46%", height: "100%", overflow: "hidden" }}>
          <SafeImage src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" alt="Education" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.30 }} wrapperStyle={{ position: "absolute", inset: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,#1a0520 0%,rgba(26,5,32,0.05) 55%,rgba(26,5,32,0.55) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2, padding: "80px 64px", maxWidth: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <Link href="/women-of-africa/programs/education" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Programs</Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>/</span>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: A }}>Education</span>
          </div>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🎓</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(40px,5vw,64px)", fontWeight: 600, lineHeight: 1.05, color: "#fff", marginBottom: 20 }}>
            Education as{" "}
            <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Liberation</em>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", lineHeight: 1.85, maxWidth: 540 }}>
            Access to quality education is the cornerstone of WAN's mission. Through scholarships, skills training, mentorship and digital access, we are dismantling the barriers that keep African women from reaching their full academic and professional potential.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: "100px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
                <span style={{ width: 28, height: 1, background: A, display: "block" }} />Why It Matters
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3vw,42px)", fontWeight: 600, color: BG, lineHeight: 1.2, marginBottom: 20 }}>
                Gender Mainstreaming in{" "}
                <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>African Education</em>
              </h2>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
                Despite significant progress, millions of African girls still face structural barriers to education — from poverty and early marriage to geographic isolation and cultural norms. WAN's Education Programme directly addresses these barriers by funding access, building supportive networks and changing the narrative.
              </p>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 24 }}>
                We work with schools, universities, community organisations and technology partners to ensure that no girl is left behind, and that every woman has the knowledge and confidence to lead.
              </p>
              <div style={{ display: "flex", gap: 32 }}>
                {[["500+", "Scholarships Awarded"], ["20", "Partner Universities"], ["12", "Countries Active"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 600, color: A }}>{n}</div>
                    <div style={{ fontSize: 10, color: "#888", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", height: 420 }}>
              <SafeImage src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" alt="Education" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }} wrapperStyle={{ position: "absolute", inset: 0 }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, background: "rgba(26,5,32,0.88)", borderRadius: 4, padding: "16px 20px", backdropFilter: "blur(8px)" }}>
                <div style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>
                  &ldquo;Education is the most powerful investment we can make in Africa&apos;s future — and women must be at its centre.&rdquo;
                </div>
                <div style={{ fontSize: 10, color: A, marginTop: 6, fontWeight: 600, letterSpacing: "0.1em" }}>DR. GLADYS NKRUMAH · Executive Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section style={{ padding: "80px 64px", background: "#fdf8fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: A, display: "block" }} />Our Initiatives <span style={{ width: 28, height: 1, background: A, display: "block" }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3vw,42px)", fontWeight: 600, color: BG }}>
              Four Pathways to{" "}
              <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Learning</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {INITIATIVES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="wan-initiative-card"
                style={{
                  background: "#fff", border: `1px solid rgba(236,72,153,0.12)`,
                  borderRadius: 6, padding: "32px 28px",
                  display: "flex", gap: 20, alignItems: "flex-start",
                }}
              >
                <div style={{ color: A, flexShrink: 0, marginTop: 4 }}>{icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 600, color: BG, marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.8 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg,${BG},#2d0a3e)`, padding: "72px 64px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3vw,42px)", fontWeight: 600, color: "#fff", marginBottom: 14 }}>
          Support a Girl&apos;s{" "}
          <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Education Today</em>
        </h2>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.8 }}>
          Every contribution funds a scholarship, a workshop or a mentorship programme that changes a life.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          <Link href="/women-of-africa/get-involved" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `linear-gradient(135deg,#9D174D,${A})`, color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", padding: "14px 32px", borderRadius: 2, textDecoration: "none" }}>
            Donate Now <ArrowRight size={14} />
          </Link>
          <Link href="/women-of-africa/programs/trade" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: `1px solid rgba(236,72,153,0.45)`, color: A, fontSize: 12, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", padding: "13px 32px", borderRadius: 2, textDecoration: "none" }}>
            Next: Trade Facilitation →
          </Link>
        </div>
      </section>
    </>
  );
}
