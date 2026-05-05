import { CompanyGrid } from "@/components/sections/CompanyGrid";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative w-full bg-white pt-16 pb-0 px-6 overflow-hidden">
        {/* Soft grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.35,
          }}
        />
        {/* Colour blobs */}
        <div className="absolute top-[-6rem] left-[-4rem] w-[30rem] h-[30rem] rounded-full opacity-[0.12] blur-[80px] bg-blue-500 pointer-events-none" />
        <div className="absolute top-4 right-[-6rem] w-[26rem] h-[26rem] rounded-full opacity-[0.10] blur-[80px] bg-amber-400 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            Ghanaian Excellence · Est. 2015
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-100 text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-slate-900 mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            One Group.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Four Worlds.</span>
              <span
                className="absolute bottom-0 left-0 w-full h-[0.22em] rounded-full bg-amber-400 z-0"
                style={{ bottom: "0.06em" }}
              />
            </span>
          </h1>

          <p className="animate-fade-up delay-200 text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Four specialised companies. One ownership. Choose your destination below.
          </p>

          {/* Stat strip */}
          <div className="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 mb-14">
            {[
              { n: "4", label: "Companies" },
              { n: "12+", label: "Countries" },
              { n: "400+", label: "Experts" },
              { n: "10yr", label: "Track Record" },
            ].map(({ n, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-2xl font-bold text-slate-900"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {n}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY CARDS ── */}
      <section className="relative bg-slate-50 py-14 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CompanyGrid />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
