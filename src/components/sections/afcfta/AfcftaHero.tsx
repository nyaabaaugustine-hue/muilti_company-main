"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import SafeImage from "../SafeImage";
const SLIDES = [
  { sub:"AfCFTA Secretariat & APN Group", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group3-1_ufvv5e.jpg" },
  { sub:"Implementation & Advocacy", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/slide111_ptbh1n.jpg" },
  { sub:"Think Tank for AfCFTA", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716827/afctfa-45_dhoyzp.jpg" },
  { sub:"4th Annual Women in Trade Summit", img:"https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/WhatsApp-Image-2020-08-28-at-08.11.21-384x256_vch3ni.jpg" },
];
export function AfcftaHero() {
  const [cur,setCur]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setCur(p=>(p+1)%SLIDES.length),5000);return()=>clearInterval(t);},[]);
  const A="#F59E0B";
  return (
    <section id="overview" style={{position:"relative",minHeight:"100dvh",overflow:"hidden",display:"flex",alignItems:"center"}}>
      <style>{`
        .afcfta-hero-inner{padding:clamp(80px,10vw,130px) clamp(16px,4vw,64px) clamp(40px,8vw,80px);max-width:760px;}
        .afcfta-hero-stats{display:flex;gap:clamp(24px,4vw,48px);padding-top:36px;border-top:1px solid rgba(245,158,11,0.20);flex-wrap:wrap;}
        .afcfta-hero-btns{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:clamp(36px,6vw,72px);}
        .afcfta-hero-stat{flex:1;min-width:120px;}
        @media(max-width:768px){
          .afcfta-hero-btns{flex-direction:column;gap:10px;}
          .afcfta-hero-btns a{text-align:center;justify-content:center;}
        }
        @media(max-width:480px){
          .afcfta-hero-inner{padding:80px 16px 40px;}
          .afcfta-hero-stats{flex-direction:column;gap:16px;}
        }
      `}</style>
      {SLIDES.map((s,i)=>(
        <div key={i} style={{position:"absolute",inset:0,transition:"opacity 1s",opacity:i===cur?1:0}}>
          <SafeImage src={s.img} alt={s.sub} style={{width:"100%",height:"100%",objectFit:"cover",maxWidth:"100%"}} wrapperStyle={{position:"absolute",inset:0}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(15,23,42,0.92) 0%,rgba(15,23,42,0.45) 100%)"}}/>
        </div>
      ))}
      <div className="afcfta-hero-inner" style={{position:"relative",zIndex:2}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:28}}>
          <SafeImage src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778750984/logo-afcfta-policy-network_oyf0rb.png" alt="logo" style={{height:44,objectFit:"contain",maxWidth:"100%"}}/>
          <span style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:A}}>· UnifiedNexus Group</span>
        </div>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(38px,6.5vw,82px)",fontWeight:600,lineHeight:1.05,color:"#fff",marginBottom:24}}>
          Championing Africa's <em style={{color:A,fontStyle:"italic",fontWeight:400}}>Free Trade Future</em>
        </h1>
        <p style={{fontSize:"clamp(14px,2vw,16px)",color:"rgba(255,255,255,0.78)",lineHeight:1.85,fontWeight:300,maxWidth:500,marginBottom:48}}>
          The largest international NGO think tank on AfCFTA implementation — building intra-Africa trade partnerships, economies of scale, and food security across 54 nations since 2019.
        </p>
        <div className="afcfta-hero-btns">
          <a href="#services" style={{background:`linear-gradient(135deg,#B45309,${A})`,color:"#0C0A04",fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"14px 32px",borderRadius:2,textDecoration:"none",display:"flex",alignItems:"center",gap:8}}>Our Activities <ArrowRight size={14}/></a>
          <a href="#team" style={{background:"transparent",border:`1px solid rgba(245,158,11,0.5)`,color:A,fontSize:12,fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase",padding:"13px 28px",borderRadius:2,textDecoration:"none"}}>Meet the Team</a>
        </div>
        <div className="afcfta-hero-stats">
          {[["54","African Nations"],["2019","Established"],["#1","Largest AfCFTA NGO"]].map(([n,l])=>(
            <div key={l} className="afcfta-hero-stat"><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(28px,5vw,36px)",fontWeight:600,color:A,lineHeight:1}}>{n}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.55)",textTransform:"uppercase",letterSpacing:"0.15em",marginTop:5}}>{l}</div></div>
          ))}
        </div>
      </div>
      <div style={{position:"absolute",bottom:"clamp(16px,4vw,32px)",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"clamp(6px,2vw,8px)",zIndex:3}}>
        {SLIDES.map((_,i)=>(<button key={i} onClick={()=>setCur(i)} style={{width:10,height:10,borderRadius:"50%",border:"none",cursor:"pointer",background:i===cur?A:"rgba(255,255,255,0.35)",transition:"background 0.3s"}}/>))}
      </div>
    </section>
  );
}
