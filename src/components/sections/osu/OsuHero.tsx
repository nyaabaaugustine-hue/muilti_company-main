"use client";
import { ArrowRight } from "lucide-react";

export function OsuHero() {
  return (
    <section id="overview" style={{
      minHeight: "100vh", position: "relative",
      display: "flex", alignItems: "center", overflow: "hidden",
      background: "linear-gradient(135deg, #060E1C 0%, #0A1628 60%, #0D1F3C 100%)",
    }}>
      <div style={{ position:"absolute",inset:0, backgroundImage:"linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)", backgroundSize:"64px 64px" }} />
      <div style={{ position:"absolute",top:"-20%",right:"-5%",width:"65%",height:"140%", background:"radial-gradient(ellipse,rgba(59,130,246,0.09) 0%,transparent 60%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute",right:0,top:0,width:"46%",height:"100%",overflow:"hidden" }}>
        <img src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777865847/WhatsApp_Image_2026-05-03_at_7.41.12_PM_buzbtt.jpg"
          alt="Osu Digital Hub" style={{ width:"100%",height:"100%",objectFit:"cover",opacity:0.2,filter:"grayscale(20%)" }} />
        <div style={{ position:"absolute",inset:0, background:"linear-gradient(90deg,#060E1C 0%,rgba(6,14,28,0.1) 60%,rgba(6,14,28,0.5) 100%)" }} />
      </div>
      <div style={{ position:"relative",zIndex:2,padding:"130px 64px 80px",maxWidth:720 }}>
        <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:28 }}>
          <div style={{ width:8,height:8,borderRadius:"50%",background:"#3B82F6",boxShadow:"0 0 10px #3B82F6" }} />
          <span style={{ fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#3B82F6" }}>Technology & AI · UnifiedNexus Group</span>
        </div>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(48px,6.5vw,82px)",fontWeight:600,lineHeight:1.05,color:"#fff",marginBottom:24 }}>
          Where Africa's{" "}
          <em style={{ color:"#3B82F6",fontStyle:"italic",fontWeight:400 }}>Digital Future</em>{" "}
          Is Built
        </h1>
        <p style={{ fontSize:16,color:"rgba(255,255,255,0.58)",lineHeight:1.85,fontWeight:300,maxWidth:480,marginBottom:48 }}>
          Pioneering high-scale software, cloud infrastructure, and AI solutions tailored for West Africa's growing enterprise sector. From Accra to the world.
        </p>
        <div style={{ display:"flex",gap:14,flexWrap:"wrap",marginBottom:72 }}>
          <a href="#services" style={{ background:"linear-gradient(135deg,#1D4ED8,#3B82F6)",color:"#fff",fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"14px 32px",borderRadius:2,textDecoration:"none",display:"flex",alignItems:"center",gap:8,boxShadow:"0 8px 32px rgba(59,130,246,0.3)" }}>
            Our Services <ArrowRight size={14} />
          </a>
          <a href="#projects" style={{ background:"transparent",border:"1px solid rgba(59,130,246,0.4)",color:"#3B82F6",fontSize:12,fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase",padding:"13px 28px",borderRadius:2,textDecoration:"none" }}>
            View Projects
          </a>
        </div>
        <div style={{ display:"flex",gap:48,paddingTop:36,borderTop:"1px solid rgba(59,130,246,0.15)" }}>
          {[["50+","Enterprise Clients"],["8+","Years Building"],["99.9%","Uptime SLA"]].map(([n,l])=>(
            <div key={l}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:600,color:"#3B82F6",lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:10,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.15em",marginTop:5 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
