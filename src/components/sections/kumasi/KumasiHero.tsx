"use client";
import { ArrowRight } from "lucide-react";
export function KumasiHero() {
  return (
    <section id="overview" style={{ minHeight:"100vh",position:"relative",display:"flex",alignItems:"center",overflow:"hidden",background:"linear-gradient(135deg,#1A1508 0%,#261E0E 60%,#2E2510 100%)" }}>
      <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(201,168,76,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.06) 1px,transparent 1px)",backgroundSize:"64px 64px" }} />
      <div style={{ position:"absolute",top:"-20%",right:"-5%",width:"65%",height:"140%",background:"radial-gradient(ellipse,rgba(201,168,76,0.12) 0%,transparent 60%)",pointerEvents:"none" }} />
      <div style={{ position:"absolute",right:0,top:0,width:"46%",height:"100%",overflow:"hidden" }}>
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80" alt="Kumasi Smart" style={{ width:"100%",height:"100%",objectFit:"cover",opacity:0.35,filter:"grayscale(10%)" }} />
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(90deg,#1A1508 0%,rgba(26,21,8,0.1) 55%,rgba(26,21,8,0.5) 100%)" }} />
      </div>
      <div style={{ position:"relative",zIndex:2,padding:"130px 64px 80px",maxWidth:720 }}>
        <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:28 }}>
          <div style={{ width:8,height:8,borderRadius:"50%",background:"#C9A84C",boxShadow:"0 0 10px #C9A84C" }} />
          <span style={{ fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#C9A84C" }}>Real Estate · UnifiedNexus Group</span>
        </div>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(48px,6.5vw,82px)",fontWeight:600,lineHeight:1.05,color:"#fff",marginBottom:24 }}>
          Spaces That Tell{" "}
          <em style={{ color:"#C9A84C",fontStyle:"italic",fontWeight:400 }}>Ghana's Story</em>
        </h1>
        <p style={{ fontSize:16,color:"rgba(255,255,255,0.76)",lineHeight:1.85,fontWeight:300,maxWidth:480,marginBottom:48 }}>
          Redefining luxury residential and commercial real estate through smart-home technology, bold architecture, and cultural pride.
        </p>
        <div style={{ display:"flex",gap:14,flexWrap:"wrap",marginBottom:72 }}>
          <a href="#services" style={{ background:"linear-gradient(135deg,#9A7A2E,#C9A84C)",color:"#0C0A04",fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"14px 32px",borderRadius:2,textDecoration:"none",display:"flex",alignItems:"center",gap:8,boxShadow:"0 8px 32px rgba(201,168,76,0.35)" }}>
            Our Properties <ArrowRight size={14} />
          </a>
          <a href="#projects" style={{ background:"transparent",border:"1px solid rgba(201,168,76,0.5)",color:"#C9A84C",fontSize:12,fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase",padding:"13px 28px",borderRadius:2,textDecoration:"none" }}>
            View Portfolio
          </a>
        </div>
        <div style={{ display:"flex",gap:48,paddingTop:36,borderTop:"1px solid rgba(201,168,76,0.20)" }}>
          {[["1,200+","Units Delivered"],["₵2.4B","Portfolio Value"],["8","Active Developments"]].map(([n,l])=>(
            <div key={l}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:600,color:"#C9A84C",lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:10,color:"rgba(255,255,255,0.60)",textTransform:"uppercase",letterSpacing:"0.15em",marginTop:5 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
