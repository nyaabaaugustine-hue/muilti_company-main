"use client";
const TEAM = [
  { name:"Dr. Emmanuel Kwame Asante", role:"Chairman & Founder", bio:"25 years bridging African capital markets with global investors. Former IMF Advisor, $4.2B+ in cross-border transactions.", img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name:"Amara Diallo", role:"Chief Executive Officer", bio:"18 years in Pan-African development finance, infrastructure investment and PPP structuring across West and Central Africa.", img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name:"Prof. Chidi Okonkwo", role:"Director, Strategic Partnerships", bio:"Former Deputy Governor, Central Bank of Nigeria. Professor of International Finance at Lagos Business School.", img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name:"Fatima Al-Hassan", role:"Director, North Africa Operations", bio:"Dual doctorates from Cairo University and LSE. Specialist in sovereign debt, Islamic finance and MENA–Africa corridors.", img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name:"David Osei-Mensah", role:"Head of Technology & Innovation", bio:"Fintech pioneer, three successful exits in East Africa. Leads AGIF's AI-driven investment intelligence initiatives.", img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name:"Dr. Naledi Dlamini", role:"Director, Southern Africa Hub", bio:"Former Minister of Investment Promotion, Eswatini. Brokered landmark bilateral investment treaties across SADC nations.", img:"https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80" },
];
export function AgifTeam() {
  const A="#10B981";
  return (
    <section id="team" style={{background:"#0A2318",padding:"100px 64px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:A,marginBottom:16}}>
          <span style={{width:28,height:1,background:A,display:"block"}}/>Leadership
        </div>
        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:600,color:"#fff",marginBottom:52}}>
          World-Class <em style={{color:A,fontStyle:"italic",fontWeight:400}}>Leadership</em>
        </h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:16}}>
          {TEAM.map((m,i)=>(
            <div key={i}
              onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(16,185,129,0.50)";(e.currentTarget as HTMLDivElement).style.transform="translateY(-6px)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(16,185,129,0.15)";(e.currentTarget as HTMLDivElement).style.transform="translateY(0)"}}
              style={{background:"rgba(4,47,30,0.80)",border:"1px solid rgba(16,185,129,0.15)",borderRadius:4,overflow:"hidden",transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",display:"flex",gap:0,flexDirection:"column"}}>
              <div style={{height:200,overflow:"hidden"}}>
                <img src={m.img} alt={m.name} style={{width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(10%) brightness(0.90)"}}/>
              </div>
              <div style={{padding:"18px 20px 22px"}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:600,color:"#fff",marginBottom:4}}>{m.name}</div>
                <div style={{fontSize:11,color:A,fontWeight:600,letterSpacing:"0.05em",marginBottom:10}}>{m.role}</div>
                <p style={{fontSize:12,color:"rgba(255,255,255,0.68)",lineHeight:1.7,fontWeight:300}}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
