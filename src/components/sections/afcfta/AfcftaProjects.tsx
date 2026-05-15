"use client";
const PROJECTS = [
  { title:"MOU with AfCFTA Secretariat", year:"2023", desc:"Historic Memorandum of Understanding signed between the AfCFTA Secretariat and APN Group — a landmark for civil society in trade policy.", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group3-1_ufvv5e.jpg", tag:"Partnership" },
  { title:"4th Women in Trade Conference", year:"2022", desc:"Annual summit empowering women entrepreneurs across Africa with AfCFTA tools, networks and market access strategies.", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/WhatsApp-Image-2020-08-28-at-08.11.21-384x256_vch3ni.jpg", tag:"Conference" },
  { title:"Capacity Building Programme", year:"2022", desc:"Multi-city training programme equipping SMEs with practical knowledge on rules of origin, tariff schedules and trade facilitation under AfCFTA.", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716826/afctfa-132_sq4kvo.jpg", tag:"Training" },
  { title:"HOPE Project — Centre of Excellence", year:"Ongoing", desc:"Acquiring land across Ghana to build Africa's first dedicated AfCFTA Centre of Excellence for research, training and intra-Africa trade facilitation.", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/slide111_ptbh1n.jpg", tag:"Flagship" },
];
export function AfcftaProjects() {
  const A="#F59E0B";
  return (
    <section id="projects" style={{background:"#0F172A",padding:"100px 64px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:A,marginBottom:16}}>
          <span style={{width:28,height:1,background:A,display:"block"}}/>Impact
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:56}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:600,color:"#fff",lineHeight:1.15}}>
            Key <em style={{color:A,fontStyle:"italic",fontWeight:400}}>Initiatives</em>
          </h2>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.60)",maxWidth:300,lineHeight:1.75,fontWeight:300}}>Milestones in our mission to advance continental free trade.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(480px,1fr))",gap:16}}>
          {PROJECTS.map((p,i)=>(
            <div key={i}
              onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(245,158,11,0.45)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(245,158,11,0.15)"}}
              style={{background:"rgba(30,41,59,0.80)",border:"1px solid rgba(245,158,11,0.15)",borderRadius:4,overflow:"hidden",display:"flex",transition:"border-color 0.4s"}}>
              <div style={{width:180,flexShrink:0,overflow:"hidden"}}>
                <img src={p.img} alt={p.title} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
              </div>
              <div style={{padding:"24px 24px 24px 20px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <div>
                  <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:12}}>
                    <span style={{background:`rgba(245,158,11,0.15)`,color:A,fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"3px 10px",borderRadius:2}}>{p.tag}</span>
                    <span style={{fontSize:11,color:"rgba(255,255,255,0.45)"}}>{p.year}</span>
                  </div>
                  <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:600,color:"#fff",marginBottom:10,lineHeight:1.25}}>{p.title}</h3>
                  <p style={{fontSize:12,color:"rgba(255,255,255,0.70)",lineHeight:1.75,fontWeight:300}}>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
