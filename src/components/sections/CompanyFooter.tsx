"use client";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

interface CompanyFooterProps {
  companyName: string;
  companyColor: string;
  tagline: string;
  email: string;
  phone: string;
}

export function CompanyFooter({ companyName, companyColor, tagline, email, phone }: CompanyFooterProps) {
  return (
    <footer id="contact" style={{ background:"#0A1422",borderTop:`1px solid ${companyColor}30` }}>
      {/* CTA band */}
      <div style={{ background:`linear-gradient(135deg,#102032,#182E52)`,borderBottom:`1px solid ${companyColor}25`,padding:"72px 64px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:32 }}>
          <div>
            <div style={{ display:"inline-flex",alignItems:"center",gap:10,fontSize:10,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:companyColor,marginBottom:14 }}>
              <span style={{ width:24,height:1,background:companyColor,display:"block" }} />Start a Conversation
            </div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(28px,3vw,44px)",fontWeight:600,color:"#fff",lineHeight:1.2 }}>
              Ready to Work{" "}<em style={{ color:companyColor,fontStyle:"italic",fontWeight:400 }}>Together?</em>
            </h2>
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
            <a href={`mailto:${email}`}
              style={{ background:`linear-gradient(135deg,${companyColor}bb,${companyColor})`,color:"#0A1628",fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"14px 32px",borderRadius:2,textDecoration:"none",display:"flex",alignItems:"center",gap:8,boxShadow:`0 8px 24px ${companyColor}40` }}>
              <Mail size={14} /> Send a Message
            </a>
            <div style={{ display:"flex",gap:12 }}>
              <div style={{ display:"flex",alignItems:"center",gap:6,fontSize:12,color:"rgba(255,255,255,0.60)" }}>
                <Phone size={12} style={{ color:companyColor }} />{phone}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ padding:"28px 64px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12 }}>
        <div style={{ display:"flex",alignItems:"center",gap:12 }}>
          <div style={{ width:24,height:24,background:`linear-gradient(135deg,#C9A84C,#E4C876)`,clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }} />
          <span style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:15,fontWeight:600,color:"#fff" }}>{companyName}</span>
          <span style={{ fontSize:10,color:"rgba(255,255,255,0.40)",letterSpacing:"0.1em" }}>· {tagline}</span>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:20 }}>
          <Link href="/" style={{ fontSize:11,color:"rgba(255,255,255,0.48)",textDecoration:"none",display:"flex",alignItems:"center",gap:5,transition:"color 0.3s" }}
            onMouseEnter={e=>(e.currentTarget.style.color=companyColor)}
            onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.48)")}
          >
            ← Back to APNABEC
          </Link>
          <span style={{ fontSize:10,color:"rgba(255,255,255,0.30)" }}>© {new Date().getFullYear()} APNABEC</span>
        </div>
      </div>
    </footer>
  );
}
