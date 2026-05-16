"use client";
const AGENDA = [
  { day:"Day 1", date:"March 12, 2025", title:"Arrivals & Welcome Gala", desc:"VIP welcome reception, networking dinner, cultural showcase.", tag:"Opening" },
  { day:"Day 2", date:"March 13, 2025", title:"Plenary Sessions & Keynotes", desc:"Heads of state addresses, keynote speakers, ministerial roundtables.", tag:"Keynotes" },
  { day:"Day 3", date:"March 14, 2025", title:"Deal Rooms & Sector Forums", desc:"B2B matchmaking, sector investment forums, PPP deal clinics.", tag:"Deals" },
  { day:"Day 4", date:"March 15, 2025", title:"Closing & Declarations", desc:"Communiqué signing, award ceremony, gala dinner and networking.", tag:"Closing" },
];
export function AgifProjects() {
  const A="#10B981";
  return (
    <section id="projects" style={{background:"#064e3b",padding:"100px 64px"}}>
      <style>{`
        @media(max-width:600px){
          #projects{padding:60px 20px!important;}
          .agif-proj-header{flex-direction:column!important;align-items:flex-start!important;gap:12px!important;}
          .agif-agenda-grid{grid-template-columns:repeat(2,1fr)!important;gap:12px!important;}
        }
        @media(max-width:900px) and (min-width:601px){
          #projects{padding:80px 32px!important;}
        }
      `}</style>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:A,marginBottom:16}}>
          <span style={{width:28,height:1,background:A,display:"block"}}/>The Summit
        </div>
        <div className="agif-proj-header" style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:56,flexWrap:"wrap",gap:16}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(28px,3.5vw,48px)",fontWeight:600,color:"#fff",lineHeight:1.15,margin:0}}>
            Summit <em style={{color:A,fontStyle:"italic",fontWeight:400}}>Agenda</em>
          </h2>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.60)",maxWidth:300,lineHeight:1.75,fontWeight:300,margin:0}}>4 days. 500+ delegates. Billions in deals.</p>
        </div>
        <div className="agif-agenda-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:16}}>
          {AGENDA.map((a,i)=>(
            <div key={i}
              onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.background="rgba(16,185,129,0.12)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.background="rgba(4,47,30,0.60)"}}
              style={{background:"rgba(4,47,30,0.60)",border:"1px solid rgba(16,185,129,0.20)",borderRadius:4,padding:"28px 24px",transition:"background 0.3s"}}>
              <div style={{background:`rgba(16,185,129,0.15)`,color:A,fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"3px 10px",borderRadius:2,display:"inline-block",marginBottom:16}}>{a.tag}</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:42,fontWeight:600,color:A,lineHeight:1,marginBottom:4}}>{i+1}</div>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.45)",marginBottom:12}}>{a.date}</div>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:600,color:"#fff",marginBottom:10,lineHeight:1.25}}>{a.title}</h3>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.72)",lineHeight:1.75,fontWeight:300}}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
