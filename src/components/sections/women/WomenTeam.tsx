"use client";
import { useState } from "react";

const A = "#EC4899";
const BG = "#1a0520";

const TEAM = [
  {
    name: "Mr. Louis Yaw Afful",
    role: "APN Group Head",
    img: "https://womenofafricanetwork.org/wp-content/uploads/2021/01/NewLouis.jpeg",
    bio: "Visionary leader and head of the APN Group, driving pan-African initiatives in trade policy, investment facilitation and women's economic empowerment across the continent.",
  },
  {
    name: "Ms. Joyce Williams, ESQ.",
    role: "Executive Council",
    img: "https://womenofafricanetwork.org/wp-content/uploads/2020/11/Ms.-Joyce-Williams-ESQ..png",
    bio: "Legal expert and executive council member providing strategic governance, policy guidance and legal oversight for WAN's programmes across Africa and the diaspora.",
  },
  {
    name: "Dr. Gladys Nkrumah",
    role: "Executive Director, APN Women of Africa Network",
    img: "https://womenofafricanetwork.org/wp-content/uploads/2021/01/Dr.-Gladys-Nkrumah.jpeg",
    bio: "Executive Director leading WAN's mission to positively impact the lives of women through education, trade facilitation, economic empowerment and policy advocacy.",
  },
  {
    name: "Agnes Kyerewaa Afful",
    role: "International Communications Head",
    img: "https://womenofafricanetwork.org/wp-content/uploads/2020/10/Agnes01.jpeg",
    bio: "Spearheading WAN's global communications strategy, building international partnerships and amplifying African women's voices on the world stage.",
  },
  {
    name: "Mrs. Hannah Amofa-Afriyie Hayford",
    role: "Head of Administration",
    img: "https://womenofafricanetwork.org/wp-content/uploads/2022/01/Mrs-Hannah-Amofa-Afriyie-Hayford.jpeg",
    bio: "Managing WAN's operational excellence, ensuring efficient programme delivery, resource allocation and organizational growth across all African regions.",
  },
];

export function WomenTeam() {
  const [hov, setHov] = useState<number | null>(null);
  return (
    <section id="team" style={{ background: BG, padding: "100px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Our People
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 600, color: "#fff", lineHeight: 1.15, margin: 0 }}>
            Voices of <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Change</em>
          </h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.60)", maxWidth: 320, lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
            Passionate advocates driving gender equality and women's economic empowerment across Africa.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16 }}>
          {TEAM.map((m, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                background: "rgba(236,72,153,0.05)",
                border: `1px solid ${hov === i ? "rgba(236,72,153,0.55)" : "rgba(236,72,153,0.15)"}`,
                borderRadius: 4,
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                transform: hov === i ? "translateY(-6px)" : "none",
              }}
            >
              <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
                <img
                  src={m.img}
                  alt={m.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.5s", transform: hov === i ? "scale(1.05)" : "scale(1)" }}
                />
                <div style={{ position: "absolute", inset: 0, background: hov === i ? "rgba(26,5,32,0.72)" : "transparent", transition: "background 0.4s", display: "flex", alignItems: "flex-end", padding: 16 }}>
                  {hov === i && (
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.88)", lineHeight: 1.65, margin: 0 }}>{m.bio}</p>
                  )}
                </div>
              </div>
              <div style={{ padding: "16px 18px 20px" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontWeight: 600, color: "#fff", marginBottom: 4, lineHeight: 1.2 }}>{m.name}</div>
                <div style={{ fontSize: 11, color: A, fontWeight: 600, letterSpacing: "0.05em" }}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
