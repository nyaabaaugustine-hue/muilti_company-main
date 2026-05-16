"use client";

const GOLD = "#D4A017";

const INITIATIVES = [
  { title: "Trade Facilitation", year: "Ongoing", desc: "Removal of tariffs and other barriers to trade. Utilization of information technology, business matchmaking, and cross-border logistics support under the AfCFTA.", img: "https://womenofafricanetwork.org/wp-content/uploads/2019/10/Trade-Facilitation.jpg", tag: "Trade" },
  { title: "Our Roots",          year: "Ongoing", desc: "Grassroots community development programmes nurturing women-led initiatives. Building from the ground up to create lasting change across African communities.",       img: "https://womenofafricanetwork.org/wp-content/uploads/2021/08/our-roots.jpg",         tag: "Community" },
  { title: "Access to Finance",  year: "Ongoing", desc: "Bridging the gap between women entrepreneurs and investors, banks, and fundraising opportunities. Building financial independence through targeted programmes.",   img: "https://womenofafricanetwork.org/wp-content/uploads/2019/10/access.jpg",             tag: "Finance" },
  { title: "Education",          year: "Annual",  desc: "Gender mainstreaming in education through scholarship programmes, literacy initiatives and vocational training for women and girls across the continent.",         img: "https://womenofafricanetwork.org/wp-content/uploads/2020/05/be-img8.jpg",           tag: "Education" },
];

export function WomenInitiatives() {
  return (
    <section id="projects" className="wan-initiatives" style={{ background: "#111", padding: "clamp(40px, 8vw, 100px) clamp(16px, 4vw, 64px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>
          <span style={{ width: 28, height: 2, background: GOLD, display: "block", borderRadius: 1 }} />
          Impact
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,3.5vw,50px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Key <em style={{ color: GOLD, fontStyle: "italic", fontWeight: 400 }}>Initiatives</em>
          </h2>
          <p style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "rgba(255,255,255,0.50)", maxWidth: 300, lineHeight: 1.75, margin: 0 }}>Milestones in our mission to empower women across Africa.</p>
        </div>

        <div className="wan-initiatives-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(480px,1fr))", gap: 16 }}>
          {INITIATIVES.map((p, i) => (
            <div key={i}
              className="wan-initiatives-card"
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = GOLD; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `${GOLD}22`; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
              style={{ background: "#1A1A1A", border: `1px solid ${GOLD}22`, borderRadius: 4, overflow: "hidden", display: "flex", transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)" }}>
              <div className="wan-initiatives-img" style={{ width: 180, flexShrink: 0, overflow: "hidden", position: "relative" }}>
                <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "100%" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,transparent,rgba(26,26,26,0.2))" }} />
              </div>
              <div style={{ padding: "24px 24px 24px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
                    <span style={{ background: `${GOLD}20`, color: GOLD, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 2 }}>{p.tag}</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", letterSpacing: "0.05em" }}>{p.year}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(18px, 3vw, 20px)", fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.25 }}>{p.title}</h3>
                  <p style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
@media(max-width:767px){
  .wan-initiatives-grid{grid-template-columns:1fr!important}
  .wan-initiatives-card{flex-direction:column!important}
  .wan-initiatives-img{width:100%!important;height:clamp(160px,40vw,200px)!important}
}
`}</style>
    </section>
  );
}
