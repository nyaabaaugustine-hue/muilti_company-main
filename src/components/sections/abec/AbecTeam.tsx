"use client";
import { useState } from "react";

const A = "#f28d01";
const BG = "#000040";

const TEAM = [
  {
    name: "Louis Yaw Afful",
    role: "Group Executive Director",
    img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/Afful-270x315_a4brbm.jpg",
    bio: "Visionary leader driving Africa's export transformation across 54 nations through the AfCFTA framework.",
  },
  {
    name: "Emmanuel K Bensah",
    role: "Deputy Executive Director",
    img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/emmanuel-270x315_ho2yl2.jpg",
    bio: "Trade policy expert and former AfCFTA Secretariat advisor with deep expertise in intra-African commerce.",
  },
  {
    name: "Kwasi Okyere-Boateng",
    role: "Director of Operations",
    img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/Kwasi-Okyere-Boateng--270x315_r79yrk.jpg",
    bio: "Operations strategist overseeing ABEC500's pan-African export facilitation programmes and member services.",
  },
  {
    name: "Audrey Akua Serwaa Biney",
    role: "Director, Member Relations",
    img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Mrs.-Audrey-Akua-Serwaa-Biney-270x315_as4ecq.png",
    bio: "Champion of African women in trade, building networks that connect exporters to global opportunities.",
  },
  {
    name: "Ms. Joyce Williams Esq.",
    role: "Legal & Compliance Director",
    img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/WhatsApp-Image-2020-09-11-at-5.46.16-AM-1-270x315_gh7r37.jpg",
    bio: "International trade law expert ensuring compliance with AfCFTA protocols, WTO rules and bilateral trade agreements.",
  },
  {
    name: "Joe Tackie",
    role: "Board Chairman",
    img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778751233/Joe-Tackie-270x315_hztdld.jpg",
    bio: "Seasoned executive providing strategic governance and global financial advisory to the ABEC500 board.",
  },
];

export function AbecTeam() {
  const [hov, setHov] = useState<number | null>(null);
  return (
    <section id="team" style={{ background: BG, padding: "100px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Leadership
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 600, color: "#fff", lineHeight: 1.15, margin: 0 }}>
            The Team <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Behind the Mission</em>
          </h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.60)", maxWidth: 320, lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
            Seasoned trade professionals and policy experts advancing Africa's export agenda.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16 }}>
          {TEAM.map((m, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${hov === i ? "rgba(242,141,1,0.55)" : "rgba(242,141,1,0.15)"}`,
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
                <div style={{ position: "absolute", inset: 0, background: hov === i ? "rgba(0,0,64,0.60)" : "transparent", transition: "background 0.4s", display: "flex", alignItems: "flex-end", padding: 16 }}>
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
