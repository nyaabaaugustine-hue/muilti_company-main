"use client";
import { useState } from "react";
const SERVICES = [
  { title:"Media Sensitization & Advocacy", desc:"Extensive media and public advocacy through print, electronic and social media platforms to promote AfCFTA awareness across Africa.", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716829/fd2ce89b-3a0e-473d-b42f-d13f1c4eef29-300x212_x4qqnw.jpg" },
  { title:"Institutional Partnerships", desc:"Deep networking with CSOs, private sector organisations, government bodies, and international institutions to strengthen AfCFTA implementation.", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/afcfta-institutional-partnership-384x256_negvck.jpg" },
  { title:"Ongoing Flagship Programs", desc:"The HOPE Project — acquiring land to build a Centre of Excellence in intra-Africa trade, free trade zones and capacity development hubs.", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/slide111_ptbh1n.jpg" },
  { title:"Global Investment Summit", desc:"Connecting investors beyond Africa to take opportunities through AfCFTA, creating linkages between global capital and African enterprise.", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716826/afctfa-132_sq4kvo.jpg" },
  { title:"Policy Research & Think Tank", desc:"Publishing research, white papers and policy briefs on intra-African trade, tariff frameworks, rules of origin and trade facilitation.", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716827/afctfa-45_dhoyzp.jpg" },
  { title:"Capacity Building & Training", desc:"Empowering businesses, SMEs and government officials with the knowledge and tools to leverage AfCFTA opportunities effectively.", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716826/afctfa-132_sq4kvo.jpg" },
];
export function AfcftaServices() {
  const [hov,setHov]=useState<number|null>(null);
  const A="#F59E0B";
  return (
    <section id="services" style={{background:"#0F172A",padding:"clamp(40px, 8vw, 100px) clamp(16px, 4vw, 64px)"}}>
      <style>{`
        .afcfta-svc-grid{display:grid;grid-template-columns:1fr;gap:4px;}
        @media(min-width:640px){
          .afcfta-svc-grid{grid-template-columns:repeat(auto-fill,minmax(280px,1fr));}
        }
        @media(max-width:600px){
          #services{padding:60px 20px!important;}
          .afcfta-svc-header{flex-direction:column!important;align-items:flex-start!important;gap:12px!important;}
        }
        @media(max-width:900px) and (min-width:601px){
          #services{padding:80px 32px!important;}
        }
      `}</style>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:A,marginBottom:16}}>
          <span style={{width:28,height:1,background:A,display:"block"}}/>What We Do
        </div>
        <div className="afcfta-svc-header" style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:56,flexWrap:"wrap",gap:16}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(28px,5vw,48px)",fontWeight:600,color:"#fff",lineHeight:1.15,margin:0}}>
            Our <em style={{color:A,fontStyle:"italic",fontWeight:400}}>Activities</em>
          </h2>
          <p style={{fontSize:"clamp(13px,2.5vw,16px)",color:"rgba(255,255,255,0.60)",maxWidth:300,lineHeight:1.75,fontWeight:300,margin:0}}>
            Building the foundations for Africa's biggest economic transformation.
          </p>
        </div>
        <div className="afcfta-svc-grid">
          {SERVICES.map((s,i)=>(
            <div key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
              style={{position:"relative",height:260,overflow:"hidden",cursor:"pointer",transition:"transform 0.4s",transform:hov===i?"scale(1.02)":"scale(1)"}}>
              <img src={s.img} alt={s.title} style={{width:"100%",height:"100%",objectFit:"cover",maxWidth:"100%"}}/>
              <div style={{position:"absolute",inset:0,background:hov===i?"rgba(15,23,42,0.82)":"rgba(15,23,42,0.65)",transition:"background 0.4s"}}/>
              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"20px 24px"}}>
                <div style={{width:4,height:24,background:A,marginBottom:10}}/>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(16px,3vw,18px)",fontWeight:600,color:"#fff",marginBottom:8}}>{s.title}</h3>
                <p style={{fontSize:"clamp(11px,2vw,13px)",color:"rgba(255,255,255,0.80)",lineHeight:1.7,fontWeight:300,display:hov===i?"block":"none"}}>{s.desc}</p>
              </div>
              <style>{`.afcfta-svc-desc-${i}{display:none;} @media(max-width:600px){.afcfta-svc-desc-${i}{display:block!important;}}`}</style>
              <p className={`afcfta-svc-desc-${i}`} style={{position:"absolute",bottom:0,left:0,right:0,padding:"0 24px 16px",fontSize:"clamp(11px,2vw,13px)",color:"rgba(255,255,255,0.75)",lineHeight:1.6,display:"none"}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
