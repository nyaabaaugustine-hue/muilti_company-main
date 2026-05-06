"use client";

const TEAM = [
  { name:"Kwame Asante", role:"CEO & Co-Founder", bio:"Former Google AI engineer, 12 years in enterprise software.", img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name:"Ama Boateng", role:"CTO", bio:"MIT Computer Science, led cloud migrations for 3 Tier-1 African banks.", img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name:"Kofi Mensah", role:"Head of AI Research", bio:"PhD in Machine Learning, specialises in African language models.", img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name:"Abena Darko", role:"VP Engineering", bio:"10+ years scaling distributed systems across fintech and health-tech.", img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
];

export function OsuTeam() {
  return (
    <section id="team" style={{ background:"#080F1E",padding:"100px 64px" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#3B82F6",marginBottom:16 }}>
          <span style={{ width:28,height:1,background:"#3B82F6",display:"block" }} />The Team
        </div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:600,color:"#fff",marginBottom:52 }}>
          Minds Behind{" "}<em style={{ color:"#3B82F6",fontStyle:"italic",fontWeight:400 }}>the Innovation</em>
        </h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:16 }}>
          {TEAM.map((m,i) => (
            <div key={i}
              onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(59,130,246,0.4)";(e.currentTarget as HTMLDivElement).style.transform="translateY(-6px)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(59,130,246,0.1)";(e.currentTarget as HTMLDivElement).style.transform="translateY(0)"}}
              style={{ background:"rgba(13,22,40,0.8)",border:"1px solid rgba(59,130,246,0.1)",borderRadius:4,overflow:"hidden",transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)" }}>
              <div style={{ height:220,overflow:"hidden" }}>
                <img src={m.img} alt={m.name} style={{ width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(20%) brightness(0.8)",transition:"transform 0.6s ease" }} />
              </div>
              <div style={{ padding:"18px 18px 22px" }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:600,color:"#fff",marginBottom:4 }}>{m.name}</div>
                <div style={{ fontSize:11,color:"#3B82F6",fontWeight:600,letterSpacing:"0.06em",marginBottom:10 }}>{m.role}</div>
                <p style={{ fontSize:12,color:"rgba(255,255,255,0.45)",lineHeight:1.7,fontWeight:300 }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
