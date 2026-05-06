"use client";
import { Home,Building2,Wifi,Leaf,Key,BarChart3 } from "lucide-react";
import { useState } from "react";
const S=[
  { icon:Home,title:"Luxury Residential",desc:"High-specification apartments and gated communities blending Ghanaian cultural motifs with contemporary architecture." },
  { icon:Building2,title:"Commercial Developments",desc:"Grade-A office towers, mixed-use complexes and retail destinations designed for Accra and Kumasi's growing business districts." },
  { icon:Wifi,title:"Smart Home Integration",desc:"Automated lighting, security, climate control and energy management systems standard across all Kumasi Smart developments." },
  { icon:Leaf,title:"Green Building",desc:"EDGE-certified developments with solar generation, rainwater harvesting and energy-efficient materials for lower running costs." },
  { icon:Key,title:"Property Management",desc:"Full concierge, maintenance, and facility management services for all completed developments." },
  { icon:BarChart3,title:"Real Estate Investment",desc:"Structured investment vehicles, joint ventures and off-plan purchase programmes with strong GHS and USD returns." },
];
export function KumasiServices() {
  const [hov,setHov]=useState<number|null>(null);
  return (
    <section id="services" style={{ background:"#201A0E",padding:"100px 64px" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#C9A84C",marginBottom:16 }}><span style={{ width:28,height:1,background:"#C9A84C",display:"block" }} />What We Offer</div>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:56 }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:600,color:"#fff",lineHeight:1.15 }}>Living <em style={{ color:"#C9A84C",fontStyle:"italic",fontWeight:400 }}>Redefined</em></h2>
          <p style={{ fontSize:13,color:"rgba(255,255,255,0.65)",maxWidth:300,lineHeight:1.75,fontWeight:300 }}>Every development is a statement of intent — bold, smart, and unmistakably Ghanaian.</p>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:16 }}>
          {S.map((s,i)=>{ const Icon=s.icon; return (
            <div key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
              style={{ background:hov===i?"rgba(201,168,76,0.09)":"rgba(34,26,10,0.85)",border:`1px solid ${hov===i?"rgba(201,168,76,0.45)":"rgba(201,168,76,0.15)"}`,borderRadius:4,padding:"28px 24px",transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",transform:hov===i?"translateY(-6px)":"translateY(0)" }}>
              <div style={{ width:44,height:44,background:"rgba(201,168,76,0.14)",border:"1px solid rgba(201,168,76,0.30)",borderRadius:2,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:18 }}>
                <Icon size={20} style={{ color:"#C9A84C" }} />
              </div>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:600,color:"#fff",marginBottom:10 }}>{s.title}</h3>
              <p style={{ fontSize:13,color:"rgba(255,255,255,0.70)",lineHeight:1.75,fontWeight:300 }}>{s.desc}</p>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}
