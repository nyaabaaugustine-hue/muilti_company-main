"use client";

const PROJECTS = [
  { tag:"Luxury Residential", title:"The Asante Heights", desc:"52 premium smart-home apartments in Kumasi's Ridge district — automated systems, rooftop gardens and panoramic views of the Ashanti capital.", metric:"52", metricLabel:"Units", img:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80" },
  { tag:"Mixed-Use", title:"Adenta Commerce Park", desc:"Grade-A commercial complex combining flexible office floors, ground-floor retail and 200-bay secure parking in Greater Accra's fastest-growing corridor.", metric:"18K m²", metricLabel:"Leasable Space", img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80" },
  { tag:"Gated Community", title:"Kenten Gardens", desc:"Phase-one delivery of 120 detached villas featuring solar microgrids, fibre connectivity and a community clubhouse inspired by traditional Kente weaving motifs.", metric:"120", metricLabel:"Villas Delivered", img:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=80" },
];

export function KumasiProjects() {
  return (
    <section id="projects" style={{ background:"#1A1508",padding:"100px 64px" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#C9A84C",marginBottom:16 }}>
          <span style={{ width:28,height:1,background:"#C9A84C",display:"block" }} />Portfolio
        </div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:600,color:"#fff",lineHeight:1.15,marginBottom:52 }}>
          Developments We&apos;re{" "}<em style={{ color:"#C9A84C",fontStyle:"italic",fontWeight:400 }}>Proud Of</em>
        </h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:20 }}>
          {PROJECTS.map((p,i) => (
            <div key={i}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor="rgba(201,168,76,0.45)"; el.style.transform="translateY(-6px)"; el.style.boxShadow="0 24px 48px rgba(0,0,0,0.5)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor="rgba(201,168,76,0.18)"; el.style.transform="translateY(0)"; el.style.boxShadow="none"; }}
              style={{ transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",background:"#221C0E",border:"1px solid rgba(201,168,76,0.18)",borderRadius:4,overflow:"hidden" }}
            >
              <div style={{ position:"relative",height:185,overflow:"hidden" }}>
                <img src={p.img} alt={p.title} style={{ width:"100%",height:"100%",objectFit:"cover",opacity:0.65,filter:"grayscale(10%)",transition:"transform 0.7s ease" }} />
                <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,#221C0E 0%,rgba(34,28,14,0.2) 100%)" }} />
                <div style={{ position:"absolute",top:14,left:14,background:"rgba(201,168,76,0.92)",color:"#0C0A04",fontSize:9,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",padding:"4px 10px",borderRadius:2 }}>{p.tag}</div>
              </div>
              <div style={{ padding:"20px 22px 24px" }}>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:21,fontWeight:600,color:"#fff",marginBottom:10 }}>{p.title}</h3>
                <p style={{ fontSize:12,color:"rgba(255,255,255,0.70)",lineHeight:1.8,marginBottom:20,fontWeight:300 }}>{p.desc}</p>
                <div style={{ paddingTop:16,borderTop:"1px solid rgba(201,168,76,0.18)" }}>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:32,fontWeight:600,color:"#C9A84C" }}>{p.metric}</span>
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
