"use client";
import { ArrowRight } from "lucide-react";
export function WomenHero() {
  const A="#EC4899";
  return (
    <section id="overview" style={{position:"relative",minHeight:"100vh",overflow:"hidden",display:"flex",alignItems:"center",background:"linear-gradient(135deg,#1a0520 0%,#2d0a3e 50%,#3b1155 100%)"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:`linear-gradient(rgba(236,72,153,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(236,72,153,0.07) 1px,transparent 1px)`,backgroundSize:"64px 64px",pointerEvents:"none"}}/>
      <div style={{position:"absolute",top:"-20%",right:"-5%",width:"65%",height:"140%",background:"radial-gradient(ellipse,rgba(236,72,153,0.14) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",right:0,top:0,width:"46%",height:"100%",overflow:"hidden"}}>
        <img src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099379/1a_zcxsx2.png" alt="Women of Africa Network" style={{width:"100%",height:"100%",objectFit:"cover",opacity:0.35,filter:"grayscale(10%)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,#1a0520 0%,rgba(26,5,32,0.1) 60%,rgba(26,5,32,0.55) 100%)"}}/>
      </div>
      <div style={{position:"relative",zIndex:2,padding:"130px 64px 80px",maxWidth:760}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:28}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:A,boxShadow:`0 0 10px ${A}`}}/>
          <span style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:A}}>Women & Development · APN Group</span>
        </div>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(48px,6.5vw,82px)",fontWeight:600,lineHeight:1.05,color:"#fff",marginBottom:24}}>
          Positively Impacting the{" "}<em style={{color:A,fontStyle:"italic",fontWeight:400}}>Lives of Women</em>
        </h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.78)",lineHeight:1.85,fontWeight:300,maxWidth:560,marginBottom:48}}>
          At Women of Africa Network, we&apos;re raising funds and promoting initiatives under the African Continental Free Trade Agreement (AfCFTA) to serve women businesses and entrepreneurs to thrive and scale. We believe in boosting women&apos;s inclusion in entrepreneurship and business across Africa and the diaspora.
        </p>
        <div style={{display:"flex",gap:14,flexWrap:"wrap",marginBottom:72}}>
          <a href="#services" style={{background:`linear-gradient(135deg,#9D174D,${A})`,color:"#fff",fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"14px 32px",borderRadius:2,textDecoration:"none",display:"flex",alignItems:"center",gap:8,boxShadow:"0 8px 32px rgba(236,72,153,0.35)"}}>Our Programs <ArrowRight size={14}/></a>
          <a href="#contact" style={{background:"transparent",border:`1px solid rgba(236,72,153,0.5)`,color:A,fontSize:12,fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase",padding:"13px 28px",borderRadius:2,textDecoration:"none"}}>Get Involved</a>
        </div>
        <div style={{display:"flex",gap:48,paddingTop:36,borderTop:`1px solid rgba(236,72,153,0.20)`}}>
          {[["54","African Nations"],["10K+","Women Impacted"],["2020","Founded"],["5","Core Pillars"]].map(([n,l])=>(
            <div key={l}><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:32,fontWeight:600,color:A,lineHeight:1}}>{n}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.55)",textTransform:"uppercase",letterSpacing:"0.15em",marginTop:5}}>{l}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
