"use client";

const GOLD = "#D4A017";

const TEAM = [
  { name: "Mr. Louis Yaw Afful",              role: "APN Group Head",                    img: "https://womenofafricanetwork.org/wp-content/uploads/2021/01/NewLouis.jpeg" },
  { name: "Ms. Joyce Williams, ESQ.",          role: "Executive Council",                  img: "https://womenofafricanetwork.org/wp-content/uploads/2020/11/Ms.-Joyce-Williams-ESQ..png" },
  { name: "Ms. Vivian Hervie",                 role: "Acting Executive Director",          img: "https://womenofafricanetwork.org/wp-content/uploads/2021/01/Ms.-Vivian-Hervie2.jpeg" },
  { name: "Agnes Kyerewaa Afful",              role: "International Communications Head", img: "https://womenofafricanetwork.org/wp-content/uploads/2020/10/Agnes01.jpeg" },
  { name: "Mrs. Hannah Amofa-Afriyie Hayford", role: "Head of Administration",            img: "https://womenofafricanetwork.org/wp-content/uploads/2022/01/Mrs-Hannah-Amofa-Afriyie-Hayford.jpeg" },
];

export function WomenTeam() {
  return (
    <section id="team" className="wan-team" style={{ background: "#fff", padding: "clamp(40px, 8vw, 100px) clamp(16px, 4vw, 64px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>
          <span style={{ width: 28, height: 2, background: GOLD, display: "block", borderRadius: 1 }} />
          Leadership
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,50px)", fontWeight: 700, color: "#0A0A0A", marginBottom: 52 }}>
          The Team <em style={{ color: GOLD, fontStyle: "italic", fontWeight: 400 }}>Driving Change</em>
        </h2>

        <div className="wan-team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 20 }}>
          {TEAM.map((m, i) => (
            <div key={i}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = GOLD; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 48px ${GOLD}22`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `${GOLD}22`; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
              style={{ background: "#fff", border: `1px solid ${GOLD}22`, borderRadius: 4, overflow: "hidden", transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              {/* Gold top bar */}
              <div style={{ height: 3, background: `linear-gradient(90deg,${GOLD},#F0C040)` }} />
              <div style={{ height: 220, overflow: "hidden" }}>
                <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", maxWidth: "100%" }} />
              </div>
              <div style={{ padding: "16px 18px 20px", borderTop: `1px solid ${GOLD}18` }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(15px, 2.5vw, 17px)", fontWeight: 700, color: "#0A0A0A", marginBottom: 5, lineHeight: 1.2 }}>{m.name}</div>
                <div style={{ fontSize: "clamp(10px, 2vw, 11px)", color: GOLD, fontWeight: 700, letterSpacing: "0.05em" }}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
@media(max-width:767px){
  .wan-team-grid{grid-template-columns:repeat(auto-fill,minmax(160px,1fr))!important}
}
`}</style>
    </section>
  );
}
