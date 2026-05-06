"use client";
const P=[
  { tag:"Solar Farm",title:"Accra Industrial Solar Park",desc:"20MW ground-mounted solar farm supplying clean power to Tema industrial zone, displacing 12,000 tonnes of CO₂ annually.",metric:"20MW",metricLabel:"Peak Output",img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80" },
  { tag:"Community Grid",title:"Northern Ghana Mini-Grid",desc:"Solar-battery hybrid micro-grids delivering first-ever electricity to 18 remote villages across the Upper East Region.",metric:"18",metricLabel:"Villages Electrified",img:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80" },
  { tag:"Storage",title:"Takoradi Port Battery Hub",desc:"12MWh grid-scale battery storage stabilising frequency at Ghana's largest port, reducing diesel backup by 85%.",metric:"85%",metricLabel:"Diesel Reduction",img:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&q=80" },
];
export function VoltaProjects() {
  return (
    <section id="projects" style={{ background:"#03100A",padding:"100px 64px" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#10B981",marginBottom:16 }}>
          <span style={{ width:28,height:1,background:"#10B981",display:"block" }} />Impact Projects
        </div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:600,color:"#fff",marginBottom:52 }}>
          Energy We've{" "}<em style={{ color:"#10B981",fontStyle:"italic",fontWeight:400 }}>Delivered</em>
        </h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:20 }}>
          {P.map((p,i)=>(
            <div key={i} onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(16,185,129,0.35)";(e.currentTarget as HTMLDivElement).style.transform="translateY(-6px)"}} onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(16,185,129,0.12)";(e.currentTarget as HTMLDivElement).style.transform="translateY(0)"}}
              style={{ background:"#051A0F",border:"1px solid rgba(16,185,129,0.12)",borderRadius:4,overflow:"hidden",transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)" }}>
              <div style={{ position:"relative",height:180,overflow:"hidden" }}>
                <img src={p.img} alt={p.title} style={{ width:"100%",height:"100%",objectFit:"cover",opacity:0.5,filter:"grayscale(20%)" }} />
                <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,#051A0F,rgba(5,26,15,0.2))" }} />
                <div style={{ position:"absolute",top:14,left:14,background:"rgba(16,185,129,0.9)",color:"#fff",fontSize:9,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",padding:"4px 10px",borderRadius:2 }}>{p.tag}</div>
              </div>
              <div style={{ padding:"20px 22px 24px" }}>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:600,color:"#fff",marginBottom:10 }}>{p.title}</h3>
                <p style={{ fontSize:12,color:"rgba(255,255,255,0.5)",lineHeight:1.75,marginBottom:20,fontWeight:300 }}>{p.desc}</p>
                <div style={{ paddingTop:16,borderTop:"1px solid rgba(16,185,129,0.12)" }}>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:32,fontWeight:600,color:"#10B981" }}>{p.metric}</span>
                  <span style={{ fontSize:10,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.15em",marginLeft:10 }}>{p.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
