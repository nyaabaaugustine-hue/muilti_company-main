"use client";
import { ArrowRight } from "lucide-react";

export function VoltaHero() {
  return (
    <section id="overview" style={{ minHeight:"100vh",position:"relative",display:"flex",alignItems:"center",overflow:"hidden",background:"linear-gradient(135deg,#03100A 0%,#051A0F 60%,#072415 100%)" }}>
      <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(16,185,129,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,0.04) 1px,transparent 1px)",backgroundSize:"64px 64px" }} />
      <div style={{ position:"absolute",top:"-20%",right:"-5%",width:"65%",height:"140%",background:"radial-gradient(ellipse,rgba(16,185,129,0.08) 0%,transparent 60%)",pointerEvents:"none" }} />
      <div style={{ position:"absolute",right:0,top:0,width:"46%",height:"100%",overflow:"hidden" }}>
        <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80" alt="Volta Energy" style={{ width:"100%",height:"100%",objectFit:"cover",opacity:0.22,filter:"grayscale(15%)" }} />
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(90deg,#03100A 0%,rgba(3,16,10,0.1) 55%,rgba(3,16,10,0.5) 100%)" }} />
      </div>
      <div style={{ position:"relative",zIndex:2,padding:"130px 64px 80px",maxWidth:720 }}>
        <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:28 }}>
          <div style={{ width:8,height:8,borderRadius:"50%",background:"#10B981",boxShadow:"0 0 10px #10B981" }} />
          <span style={{ fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#10B981" }}>Renewable Energy · UnifiedNexus Group</span>
        </div>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(48px,6.5vw,82px)",fontWeight:600,lineHeight:1.05,color:"#fff",marginBottom:24 }}>
          Clean Power for{" "}
          <em style={{ color:"#10B981",fontStyle:"italic",fontWeight:400 }}>Africa's Tomorrow</em>
        </h1>
        <p style={{ fontSize:16,color:"rgba(255,255,255,0.58)",lineHeight:1.85,fontWeight:300,maxWidth:480,marginBottom:48 }}>
          Building sustainable, resilient energy storage and solar networks across West Africa for a cleaner, brighter industrial future.
        </p>
        <div style={{ display:"flex",gap:14,flexWrap:"wrap",marginBottom:72 }}>
          <a href="#services" style={{ background:"linear-gradient(135deg,#059669,#10B981)",color:"#fff",fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"14px 32px",borderRadius:2,textDecoration:"none",display:"flex",alignItems:"center",gap:8,boxShadow:"0 8px 32px rgba(16,185,129,0.3)" }}>
            Our Solutions <ArrowRight size={14} />
          </a>
          <a href="#projects" style={{ background:"transparent",border:"1px solid rgba(16,185,129,0.4)",color:"#10B981",fontSize:12,fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase",padding:"13px 28px",borderRadius:2,textDecoration:"none" }}>
            View Impact
          </a>
        </div>
        <div style={{ display:"flex",gap:48,paddingTop:36,borderTop:"1px solid rgba(16,185,129,0.15)" }}>
          {[["250MW","Installed Capacity"],["30K+","Homes Powered"],["40%","CO₂ Reduction"]].map(([n,l])=>(
            <div key={l}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:600,color:"#10B981",lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:10,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.15em",marginTop:5 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
