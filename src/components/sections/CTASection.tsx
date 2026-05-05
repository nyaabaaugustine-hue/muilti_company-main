"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      style={{ background: "#0A1628", padding: "100px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main CTA block */}
        <div
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #112240 0%, #1A3354 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: 4,
            padding: "80px 64px",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-40%",
              right: "-10%",
              width: "60%",
              height: "200%",
              background:
                "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 60%)",
            }}
          />

          {/* Gold corner accent lines */}
          <div
            className="absolute top-0 left-0 pointer-events-none"
            style={{ width: 80, height: 80 }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 40, height: 1, background: "#C9A84C", opacity: 0.6 }} />
            <div style={{ position: "absolute", top: 0, left: 0, width: 1, height: 40, background: "#C9A84C", opacity: 0.6 }} />
          </div>
          <div
            className="absolute bottom-0 right-0 pointer-events-none"
            style={{ width: 80, height: 80 }}
          >
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 40, height: 1, background: "#C9A84C", opacity: 0.6 }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 1, height: 40, background: "#C9A84C", opacity: 0.6 }} />
          </div>

          <div
            className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10"
          >
            <div style={{ maxWidth: 560 }}>
              <div className="eyebrow mb-5">Ready to Collaborate?</div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(32px,3.5vw,50px)",
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                Ready to Build{" "}
                <em style={{ color: "#C9A84C", fontStyle: "italic", fontWeight: 400 }}>
                  the Future?
                </em>
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                Whether you're seeking a technology partner, sustainable energy
                solutions, premium real estate, or powerful brand growth —
                UnifiedNexus Group is ready to deliver.
              </p>
            </div>

            <div className="flex flex-col gap-4 flex-shrink-0">
              <a href="mailto:hello@unifiednexus.com" className="btn-gold" style={{ minWidth: 220, justifyContent: "center" }}>
                Start a Project
                <ArrowRight size={14} />
              </a>
              <a href="mailto:hello@unifiednexus.com" className="btn-outline-gold" style={{ minWidth: 220, justifyContent: "center" }}>
                Contact HQ
              </a>

              {/* Contact details */}
              <div style={{ marginTop: 8 }}>
                <div
                  className="flex items-center gap-2 mb-2"
                  style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}
                >
                  <Mail size={12} style={{ color: "#C9A84C" }} />
                  hello@unifiednexus.com
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}
                >
                  <Phone size={12} style={{ color: "#C9A84C" }} />
                  +233 (0) 30 000 0000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
