"use client";
const T=[
  { name:"Efia Asare",role:"CEO & Founder",bio:"Renewable energy pioneer, former GNPC executive with 15 years in West African energy.",img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
  { name:"Nii Armah",role:"Chief Engineer",bio:"IET Fellow, designed solar installations totalling 80MW across sub-Saharan Africa.",img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name:"Akosua Frimpong",role:"Head of Finance",bio:"Structured green bonds and energy project finance worth $200M+ for African utilities.",img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name:"Yaw Donkor",role:"VP Operations",bio:"Manages 250+ field technicians and real-time SCADA monitoring of all Volta assets.",img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
];
export function VoltaTeam() {
  return (
    <section id="team" style={{ background:"#051A0F",padding:"100px 64px" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#10B981",marginBottom:16 }}>
          <span style={{ width:28,height:1,background:"#10B981",display:"block" }} />Leadership
        </div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:600,color:"#fff",marginBottom:52 }}>
          Driven by{" "}<em style={{ color:"#10B981",fontStyle:"italic",fontWeight:400 }}>Purpose</em>
        </h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:16 }}>
          {T.map((m,i)=>(
            <div key={i} onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(16,185,129,0.4)";(e.currentTarget as HTMLDivElement).style.transform="translateY(-6px)"}} onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(16,185,129,0.1)";(e.currentTarget as HTMLDivElement).style.transform="translateY(0)"}}
              style={{ background:"rgba(7,26,16,0.8)",border:"1px solid rgba(16,185,129,0.1)",borderRadius:4,overflow:"hidden",transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)" }}>
              <div style={{ height:220,overflow:"hidden" }}><img src={m.img} alt={m.name} style={{ width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(20%) brightness(0.8)" }} /></div>
              <div style={{ padding:"18px 18px 22px" }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:600,color:"#fff",marginBottom:4 }}>{m.name}</div>
                <div style={{ fontSize:11,color:"#10B981",fontWeight:600,letterSpacing:"0.06em",marginBottom:10 }}>{m.role}</div>
                <p style={{ fontSize:12,color:"rgba(255,255,255,0.45)",lineHeight:1.7,fontWeight:300 }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
