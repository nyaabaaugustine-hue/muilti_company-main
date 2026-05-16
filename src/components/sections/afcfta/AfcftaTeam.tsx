"use client";
const TEAM = [
  { name:"Joe Tackie", role:"Board Chairman", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778751233/Joe-Tackie-270x315_hztdld.jpg" },
  { name:"Prudence Sebahizi", role:"Head of Int. Advisory Board", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/prudence-270x315_zoepyu.jpg" },
  { name:"Louis Yaw Afful", role:"Group Executive Director", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/Afful-270x315_a4brbm.jpg" },
  { name:"Emmanuel K Bensah", role:"1st Deputy Executive Director", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/emmanuel-270x315_ho2yl2.jpg" },
  { name:"Kwasi Okyere-Boateng", role:"2nd Deputy Executive Director", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/Kwasi-Okyere-Boateng--270x315_r79yrk.jpg" },
  { name:"Audrey Akua Serwaa Biney", role:"3rd Deputy Executive Director", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Mrs.-Audrey-Akua-Serwaa-Biney-270x315_as4ecq.png" },
  { name:"Ms. Joyce Williams Esq.", role:"Executive Council — Diaspora", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/WhatsApp-Image-2020-09-11-at-5.46.16-AM-1-270x315_gh7r37.jpg" },
];
export function AfcftaTeam() {
  const A="#F59E0B";
  return (
    <section id="team" style={{background:"#1E293B",padding:"100px 64px"}}>
      <style>{`
        @media(max-width:600px){
          #team{padding:60px 20px!important;}
          .afcfta-team-grid{grid-template-columns:repeat(2,1fr)!important;gap:12px!important;}
        }
        @media(max-width:900px) and (min-width:601px){
          #team{padding:80px 32px!important;}
        }
      `}</style>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:A,marginBottom:16}}>
          <span style={{width:28,height:1,background:A,display:"block"}}/>Leadership
        </div>
        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(28px,3.5vw,48px)",fontWeight:600,color:"#fff",marginBottom:52}}>
          The Team <em style={{color:A,fontStyle:"italic",fontWeight:400}}>Driving Change</em>
        </h2>
        <div className="afcfta-team-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:16}}>
          {TEAM.map((m,i)=>(
            <div key={i}
              onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(245,158,11,0.50)";(e.currentTarget as HTMLDivElement).style.transform="translateY(-6px)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor="rgba(245,158,11,0.18)";(e.currentTarget as HTMLDivElement).style.transform="translateY(0)"}}
              style={{background:"rgba(15,23,42,0.90)",border:"1px solid rgba(245,158,11,0.18)",borderRadius:4,overflow:"hidden",transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)"}}>
              <div style={{height:220,overflow:"hidden"}}>
                <img src={m.img} alt={m.name} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/>
              </div>
              <div style={{padding:"16px 18px 20px"}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontWeight:600,color:"#fff",marginBottom:4,lineHeight:1.2}}>{m.name}</div>
                <div style={{fontSize:11,color:A,fontWeight:600,letterSpacing:"0.04em"}}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
