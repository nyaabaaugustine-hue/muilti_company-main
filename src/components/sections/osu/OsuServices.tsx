"use client";
import { Code2, Cloud, Brain, Shield, Cpu, Globe } from "lucide-react";
import { useState } from "react";

const SERVICES = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Custom AI models, NLP pipelines, predictive analytics and computer vision systems purpose-built for African market data and languages.", color: "#3B82F6" },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Multi-cloud architecture, DevOps pipelines, Kubernetes orchestration and cost-optimised cloud migrations for enterprise scale.", color: "#60A5FA" },
  { icon: Code2, title: "Enterprise Software", desc: "Bespoke ERP, CRM, and workflow automation platforms that integrate deeply with existing operations across any industry.", color: "#3B82F6" },
  { icon: Shield, title: "Cybersecurity", desc: "End-to-end security audits, penetration testing, SOC monitoring and compliance frameworks for regulated industries.", color: "#60A5FA" },
  { icon: Cpu, title: "IoT & Edge Computing", desc: "Connected device networks, real-time sensor analytics and edge processing for smart cities, factories, and agriculture.", color: "#3B82F6" },
  { icon: Globe, title: "Digital Transformation", desc: "Full-spectrum digitisation strategy — from legacy system modernisation to omnichannel customer experience design.", color: "#60A5FA" },
];

export function OsuServices() {
  const [hov, setHov] = useState<number|null>(null);
  return (
    <section id="services" style={{ background:"#0E1B32",padding:"100px 64px" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#3B82F6",marginBottom:16 }}>
          <span style={{ width:28,height:1,background:"#3B82F6",display:"block" }} />What We Build
        </div>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:56 }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:600,color:"#fff",lineHeight:1.15 }}>
            Services Built for{" "}<em style={{ color:"#3B82F6",fontStyle:"italic",fontWeight:400 }}>Scale</em>
          </h2>
          <p style={{ fontSize:13,color:"rgba(255,255,255,0.65)",maxWidth:300,lineHeight:1.75,fontWeight:300 }}>
            From MVP to enterprise — we architect solutions that grow with you.
          </p>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:16 }}>
          {SERVICES.map((s,i) => {
            const Icon = s.icon;
            return (
              <div key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
                style={{
                  background: hov===i ? "rgba(59,130,246,0.09)" : "rgba(18,30,52,0.88)",
                  border: `1px solid ${hov===i ? "rgba(59,130,246,0.45)" : "rgba(59,130,246,0.15)"}`,
                  borderRadius:4, padding:"28px 24px",
                  transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",
                  transform: hov===i ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: hov===i ? "0 24px 48px rgba(0,0,0,0.4)" : "none",
                }}>
                <div style={{ width:44,height:44,background:"rgba(59,130,246,0.14)",border:"1px solid rgba(59,130,246,0.30)",borderRadius:2,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:18 }}>
                  <Icon size={20} style={{ color:"#3B82F6" }} />
                </div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:600,color:"#fff",marginBottom:10 }}>{s.title}</h3>
                <p style={{ fontSize:13,color:"rgba(255,255,255,0.70)",lineHeight:1.75,fontWeight:300 }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
