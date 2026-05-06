"use client";

const TEAM = [
  { name:"Nana Osei Bonsu", role:"CEO & Founder", bio:"20 years in Ghanaian real estate development; spearheaded ₵1.2B in completed projects across Ashanti and Greater Accra regions.", img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name:"Adwoa Frimpong", role:"Chief Design Officer", bio:"Award-winning architect and alumna of the AA School, London. Fuses Ashanti spatial traditions with contemporary sustainable design.", img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name:"Kwabena Acheampong", role:"Head of Smart Systems", bio:"IoT and building-automation engineer; previously led smart-building rollouts for major hospitality brands across West Africa.", img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name:"Efua Mensah-Bonsu", role:"Investment Director", bio:"CFA charterholder with a decade structuring real-estate investment vehicles for institutional and diaspora investors.", img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
];

export function KumasiTeam() {
  return (
    <section id="team" style={{ background:"#201A0E",padding:"100px 64px" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#C9A84C",marginBottom:16 }}>
          <span style={{ width:28,height:1,background:"#C9A84C",display:"block" }} />The Team
        </div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:600,color:"#fff",marginBottom:52 }}>
          People Who Build{" "}<em style={{ color:"#C9A84C",fontStyle:"italic",fontWeight:400 }}>Ghana's Future</em>
        </h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:16 }}>
          {TEAM.map((m,i) => (
            <div key={i}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor="rgba(201,168,76,0.45)"; el.style.transform="translateY(-6px)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor="rgba(201,168,76,0.18)"; el.style.transform="translateY(0)"; }}
              style={{ background:"rgba(30,22,8,0.90)",border:"1px solid rgba(201,168,76,0.18)",borderRadius:4,overflow:"hidden",transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)" }}
            >
              <div style={{ height:220,overflow:"hidden" }}>
                <img src={m.img} alt={m.name} style={{ width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(10%) brightness(0.95)",transition:"transform 0.6s ease" }} />
              </div>
              <div style={{ padding:"18px 18px 22px" }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:600,color:"#fff",marginBottom:4 }}>{m.name}</div>
                <div style={{ fontSize:11,color:"#C9A84C",fontWeight:600,letterSpacing:"0.06em",marginBottom:10 }}>{m.role}</div>
                <p style={{ fontSize:12,color:"rgba(255,255,255,0.68)",lineHeight:1.7,fontWeight:300 }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
