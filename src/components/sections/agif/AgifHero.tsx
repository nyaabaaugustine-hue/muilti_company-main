"use client";
import { ArrowRight } from "lucide-react";
export function AgifHero() {
  const A="#10B981";
  return (
    <section id="overview" style={{position:"relative",minHeight:"100vh",overflow:"hidden",display:"flex",alignItems:"center",background:"linear-gradient(135deg,#042f1e 0%,#064e3b 50%,#065f46 100%)"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:`linear-gradient(rgba(16,185,129,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,0.07) 1px,transparent 1px)`,backgroundSize:"64px 64px",pointerEvents:"none"}}/>
      <div style={{position:"absolute",top:"-20%",right:"-5%",width:"65%",height:"140%",background:"radial-gradient(ellipse,rgba(16,185,129,0.14) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",right:0,top:0,width:"46%",height:"100%",overflow:"hidden"}}>
        <img src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80" alt="AGIF" style={{width:"100%",height:"100%",objectFit:"cover",opacity:0.30,filter:"grayscale(10%)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,#042f1e 0%,rgba(4,47,30,0.1) 60%,rgba(4,47,30,0.55) 100%)"}}/>
      </div>
      <div style={{position:"relative",zIndex:2,padding:"130px 64px 80px",maxWidth:760}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:28}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:A,boxShadow:`0 0 10px ${A}`}}/>
          <span style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:A}}>Investment & Finance · UnifiedNexus Group</span>
        </div>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(48px,6.5vw,82px)",fontWeight:600,lineHeight:1.05,color:"#fff",marginBottom:24}}>
          Africa's Premier <em style={{color:A,fontStyle:"italic",fontWeight:400}}>Investment Forum</em>
        </h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.78)",lineHeight:1.85,fontWeight:300,maxWidth:500,marginBottom:48}}>
          Convening heads of state, institutional investors, and private sector leaders to unlock Africa's $2.5 trillion economic potential — forging bankable deals across 15+ sectors and 54 nations.
        </p>
        <div style={{display:"flex",gap:14,flexWrap:"wrap",marginBottom:72}}>
          <a href="#services" style={{background:`linear-gradient(135deg,#047857,${A})`,color:"#fff",fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"14px 32px",borderRadius:2,textDecoration:"none",display:"flex",alignItems:"center",gap:8,boxShadow:"0 8px 32px rgba(16,185,129,0.35)"}}>Summit Info <ArrowRight size={14}/></a>
          <a href="#team" style={{background:"transparent",border:`1px solid rgba(16,185,129,0.5)`,color:A,fontSize:12,fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase",padding:"13px 28px",borderRadius:2,textDecoration:"none"}}>Our Team</a>
        </div>
        <div style={{display:"flex",gap:48,paddingTop:36,borderTop:`1px solid rgba(16,185,129,0.20)`}}>
          {[["54+","African Nations"],["500+","Expected Delegates"],["$2.5B+","Deals Facilitated"],["120+","Corporate Partners"]].map(([n,l])=>(
            <div key={l}><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:32,fontWeight:600,color:A,lineHeight:1}}>{n}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.55)",textTransform:"uppercase",letterSpacing:"0.15em",marginTop:5}}>{l}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
