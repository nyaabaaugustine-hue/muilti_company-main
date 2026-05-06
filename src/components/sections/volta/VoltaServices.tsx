"use client";
import { Sun, Battery, Wind, Zap, BarChart3, Wrench } from "lucide-react";
import { useState } from "react";

const SERVICES = [
  { icon:Sun, title:"Solar Farm Development", desc:"Utility-scale solar installations from site assessment to grid connection, delivering clean energy at the lowest cost per kWh." },
  { icon:Battery, title:"Energy Storage Systems", desc:"Li-ion and flow battery storage solutions that stabilise intermittent renewables and provide reliable off-grid power for remote communities." },
  { icon:Wind, title:"Hybrid Renewable Systems", desc:"Solar-wind-diesel hybrid micro-grids engineered for reliability in Ghana's diverse climatic zones." },
  { icon:Zap, title:"Grid Integration", desc:"Smart inverter systems, SCADA monitoring and power quality management for seamless national grid integration." },
  { icon:BarChart3, title:"Energy Analytics", desc:"IoT-powered monitoring platforms delivering real-time performance data, predictive maintenance alerts and carbon accounting." },
  { icon:Wrench, title:"Operations & Maintenance", desc:"24/7 field service teams and remote diagnostics ensuring maximum uptime across all installed assets." },
];

export function VoltaServices() {
  const [hov, setHov] = useState<number|null>(null);
  return (
    <section id="services" style={{ background:"#051A0F",padding:"100px 64px" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#10B981",marginBottom:16 }}>
          <span style={{ width:28,height:1,background:"#10B981",display:"block" }} />Our Solutions
        </div>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:56 }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:600,color:"#fff",lineHeight:1.15 }}>
            Energy for Every{" "}<em style={{ color:"#10B981",fontStyle:"italic",fontWeight:400 }}>Need</em>
          </h2>
          <p style={{ fontSize:13,color:"rgba(255,255,255,0.45)",maxWidth:300,lineHeight:1.75,fontWeight:300 }}>End-to-end renewable energy solutions tailored to Ghana's unique conditions.</p>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:16 }}>
          {SERVICES.map((s,i)=>{
            const Icon=s.icon;
            return (
              <div key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
                style={{ background:hov===i?"rgba(16,185,129,0.07)":"rgba(7,26,16,0.8)",border:`1px solid ${hov===i?"rgba(16,185,129,0.4)":"rgba(16,185,129,0.1)"}`,borderRadius:4,padding:"28px 24px",transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",transform:hov===i?"translateY(-6px)":"translateY(0)" }}>
                <div style={{ width:44,height:44,background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.25)",borderRadius:2,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:18 }}>
                  <Icon size={20} style={{ color:"#10B981" }} />
                </div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:600,color:"#fff",marginBottom:10 }}>{s.title}</h3>
                <p style={{ fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.75,fontWeight:300 }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
