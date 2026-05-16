"use client";

const A = "#F59E0B";

const VALUES = [
  { label: "Collaboration", desc: "Building bridges between governments, CSOs and private sector actors to implement AfCFTA." },
  { label: "Advocacy Focus", desc: "Dedicated to influencing policy at continental and national levels for free trade implementation." },
  { label: "Inclusivity", desc: "Ensuring all Africans — especially women, youth and SMEs — benefit from continental free trade." },
  { label: "Integrity", desc: "Operating with the highest standards of transparency, accountability and ethical conduct." },
  { label: "Innovation", desc: "Pioneering new approaches to trade facilitation, research and capacity-building across Africa." },
];

export function AfcftaAbout() {
  return (
    <section id="about" style={{ background: "#fff", padding: "clamp(40px, 8vw, 100px) clamp(16px, 4vw, 64px)" }}>
      <style>{`
        .afcfta-about-grid{display:grid;grid-template-columns:1fr;gap:48px;align-items:center;}
        .afcfta-about-imgbox{position:relative;height:clamp(240px,40vw,460px);border-radius:4px;overflow:hidden;}
        .afcfta-about-badge{position:absolute;bottom:-24px;right:-24px;background:#0F172A;border:1px solid rgba(245,158,11,0.30);border-radius:4px;padding:20px 28px;text-align:center;min-width:140px;}
        .afcfta-about-secondimg{position:absolute;top:24px;left:-24px;width:160px;height:120px;border-radius:4px;overflow:hidden;border:3px solid #fff;box-shadow:0 8px 32px rgba(0,0,0,0.2);}
        @media(min-width:768px){
          .afcfta-about-grid{grid-template-columns:1fr 1fr;gap:72px;}
        }
        @media(max-width:600px){
          #about{padding:60px 20px!important;}
          .afcfta-about-imgbox{height:240px;}
          .afcfta-about-badge{bottom:-16px;right:-8px;padding:14px 18px;min-width:100px;}
          .afcfta-about-secondimg{display:none;}
        }
      `}</style>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="afcfta-about-grid">
          <div style={{ position: "relative" }}>
            <div className="afcfta-about-imgbox">
              <img
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group3-1_ufvv5e.jpg"
                alt="AfCFTA MOU Signing"
                style={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "100%" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(15,23,42,0.30) 0%,transparent 60%)" }} />
            </div>
            <div className="afcfta-about-badge">
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,5vw,40px)", fontWeight: 600, color: A, lineHeight: 1 }}>2019</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.60)", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 6 }}>Established</div>
            </div>
            <div className="afcfta-about-secondimg">
              <img
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716827/afctfa-45_dhoyzp.jpg"
                alt="AfCFTA Activity"
                style={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "100%" }}
              />
            </div>
          </div>

          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 20 }}>
              <span style={{ width: 28, height: 1, background: A, display: "block" }} />
              Who We Are
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,5vw,48px)", fontWeight: 600, color: "#0F172A", lineHeight: 1.2, marginBottom: 20 }}>
              Africa's Largest <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>AfCFTA NGO</em>
            </h2>
            <p style={{ fontSize: "clamp(13px,2.5vw,16px)", color: "#555", lineHeight: 1.85, marginBottom: 16 }}>
              The AfCFTA Policy Network (APN) was established in 2019 as the lead and largest international non-governmental organisation focused primarily as a think tank on African Continental Free Trade Area implementation.
            </p>
            <p style={{ fontSize: "clamp(13px,2.5vw,16px)", color: "#555", lineHeight: 1.85, marginBottom: 32 }}>
              The local network of the AfCFTA was established to highlight and uphold the implementation of Intra-Africa trade — championing trade partnerships, economies of scale, linkages, food security, accelerated economic activity and infrastructural development across all 54 African nations.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VALUES.map((v, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: `rgba(245,158,11,0.15)`, border: `1px solid rgba(245,158,11,0.45)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: A }} />
                  </div>
                  <div>
                    <span style={{ fontSize: "clamp(12px,2.2vw,14px)", fontWeight: 700, color: "#0F172A" }}>{v.label}: </span>
                    <span style={{ fontSize: "clamp(12px,2.2vw,14px)", color: "#666", lineHeight: 1.6 }}>{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(245,158,11,0.15)", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <img
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778750984/logo-afcfta-policy-network_oyf0rb.png"
                alt="AfCFTA Policy Network"
                style={{ height: 48, objectFit: "contain", maxWidth: "100%" }}
              />
              <div>
                <div style={{ fontSize: "clamp(11px,2vw,14px)", fontWeight: 600, color: "#0F172A" }}>AfCFTA Policy Network</div>
                <div style={{ fontSize: "clamp(10px,1.8vw,12px)", color: "#888" }}>Sakumono, Accra — Ghana</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
