"use client";
import { useState } from "react";
const SECTORS = [
  { title:"Infrastructure & Transport", desc:"Bridging Africa's $100B annual infrastructure financing gap through curated PPP pipelines, green bonds and blended finance structures.", img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { title:"Energy & Renewables", desc:"Africa holds 60% of the world's best solar irradiation. We unlock $250B+ in renewable energy investment across solar, wind and hydro.", img:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80" },
  { title:"Financial Services & Fintech", desc:"Mobile money, embedded finance and digital banking — connecting global capital to Africa's fastest-growing fintech ecosystem.", img:"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80" },
  { title:"Agriculture & Agribusiness", desc:"65% of the world's uncultivated arable land is in Africa. We facilitate investment in food systems, irrigation and value chains.", img:"https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80" },
  { title:"Technology & ICT", desc:"AI, cloud infrastructure, and digital transformation investments that leapfrog traditional development stages across the continent.", img:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80" },
  { title:"Real Estate & Housing", desc:"Structuring affordable housing developments, smart city projects and commercial real estate investments with government partners.", img:"https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&q=80" },
];
export function AgifServices() {
  const [hov,setHov]=useState<number|null>(null);
  const A="#10B981";
  return (
    <section id="services" style={{background:"#0A2318",padding:"100px 64px"}}>
      <style>{`
        @media(max-width:600px){
          #services{padding:60px 20px!important;}
          .agif-svc-header{flex-direction:column!important;align-items:flex-start!important;gap:12px!important;}
          .agif-svc-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:900px) and (min-width:601px){
          #services{padding:80px 32px!important;}
          .agif-svc-grid{grid-template-columns:repeat(2,1fr)!important;}
        }
      `}</style>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:A,marginBottom:16}}>
          <span style={{width:28,height:1,background:A,display:"block"}}/>Investment Sectors
        </div>
        <div className="agif-svc-header" style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:56,flexWrap:"wrap",gap:16}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(28px,3.5vw,48px)",fontWeight:600,color:"#fff",lineHeight:1.15,margin:0}}>
            Where We <em style={{color:A,fontStyle:"italic",fontWeight:400}}>Deploy Capital</em>
          </h2>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.60)",maxWidth:300,lineHeight:1.75,fontWeight:300,margin:0}}>15+ strategic sectors. Bankable deals. Real returns.</p>
        </div>
        <div className="agif-svc-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:16}}>
          {SECTORS.map((s,i)=>(
            <div key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
              style={{background:hov===i?"rgba(16,185,129,0.09)":"rgba(10,52,36,0.80)",border:`1px solid ${hov===i?"rgba(16,185,129,0.45)":"rgba(16,185,129,0.15)"}`,borderRadius:4,overflow:"hidden",transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",transform:hov===i?"translateY(-6px)":"translateY(0)"}}>
              <div style={{height:160,overflow:"hidden"}}>
                <img src={s.img} alt={s.title} style={{width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(20%) brightness(0.75)",transition:"filter 0.4s",...(hov===i?{filter:"grayscale(0%) brightness(0.9)"}:{})}}/>
              </div>
              <div style={{padding:"20px 22px 24px"}}>
                <div style={{width:4,height:20,background:A,marginBottom:10}}/>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:600,color:"#fff",marginBottom:8}}>{s.title}</h3>
                <p style={{fontSize:13,color:"rgba(255,255,255,0.75)",lineHeight:1.75,fontWeight:300}}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
