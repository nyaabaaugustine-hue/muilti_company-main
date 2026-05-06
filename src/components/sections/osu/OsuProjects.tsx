"use client";

const PROJECTS = [
  { tag:"AI Platform", title:"GhanaAgri Intelligence", desc:"ML-powered crop yield prediction platform serving 12,000+ farmers across the Northern Region with mobile-first interfaces.", metric:"12K+", metricLabel:"Farmers Reached", img:"https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&q=80" },
  { tag:"Cloud Migration", title:"FinServ Cloud Transformation", desc:"Migrated a 40-year-old banking core system to AWS with zero downtime, cutting infrastructure costs by 62% annually.", metric:"62%", metricLabel:"Cost Reduction", img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80" },
  { tag:"Enterprise SaaS", title:"LogiGhana ERP", desc:"End-to-end logistics management platform now used by Ghana's three largest freight companies.", metric:"3x", metricLabel:"Operational Efficiency", img:"https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?w=700&q=80" },
];

export function OsuProjects() {
  return (
    <section id="projects" style={{ background:"#0C1A30",padding:"100px 64px" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#3B82F6",marginBottom:16 }}>
          <span style={{ width:28,height:1,background:"#3B82F6",display:"block" }} />Case Studies
        </div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:600,color:"#fff",lineHeight:1.15,marginBottom:52 }}>
          Impact We've{" "}<em style={{ color:"#3B82F6",fontStyle:"italic",fontWeight:400 }}>Delivered</em>
        </h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:20 }}>
          {PROJECTS.map((p,i) => (
            <div key={i} style={{ background:"#102032",border:"1px solid rgba(59,130,246,0.18)",borderRadius:4,overflow:"hidden" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(59,130,246,0.45)";(e.currentTarget as HTMLDivElement).style.transform="translateY(-6px)";(e.currentTarget as HTMLDivElement).style.boxShadow="0 24px 48px rgba(0,0,0,0.4)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(59,130,246,0.18)";(e.currentTarget as HTMLDivElement).style.transform="translateY(0)";(e.currentTarget as HTMLDivElement).style.boxShadow="none"}}
              style={{ transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",background:"#102032",border:"1px solid rgba(59,130,246,0.18)",borderRadius:4,overflow:"hidden" }}
            >
              <div style={{ position:"relative",height:180,overflow:"hidden" }}>
                <img src={p.img} alt={p.title} style={{ width:"100%",height:"100%",objectFit:"cover",opacity:0.65,filter:"grayscale(15%)",transition:"transform 0.7s ease" }} />
                <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,#102032 0%,rgba(16,32,50,0.2) 100%)" }} />
                <div style={{ position:"absolute",top:14,left:14,background:"rgba(59,130,246,0.92)",color:"#fff",fontSize:9,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",padding:"4px 10px",borderRadius:2 }}>{p.tag}</div>
              </div>
              <div style={{ padding:"20px 22px 24px" }}>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:600,color:"#fff",marginBottom:10 }}>{p.title}</h3>
                <p style={{ fontSize:12,color:"rgba(255,255,255,0.70)",lineHeight:1.75,marginBottom:20,fontWeight:300 }}>{p.desc}</p>
                <div style={{ paddingTop:16,borderTop:"1px solid rgba(59,130,246,0.18)" }}>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:32,fontWeight:600,color:"#3B82F6" }}>{p.metric}</span>
                  <span style={{ fontSize:10,color:"rgba(255,255,255,0.60)",textTransform:"uppercase",letterSpacing:"0.15em",marginLeft:10 }}>{p.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
