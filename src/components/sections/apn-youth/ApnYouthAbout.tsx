"use client";

import { Target, Eye, Users, Globe, TrendingUp, Zap } from "lucide-react";

const ACCENT = "#F4C430";

// Reuse the same Cloudinary images already in the project
const ALIGNMENT_BG =
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791985/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-sitting-grass-studying-with-laptops_627829-6074_xorbke.avif";

const PILLARS = [
  {
    icon: Users,
    title: "Who We Are",
    text: "APN Youth is the youth development and engagement arm of the AfCFTA Policy Network, established in 2021. We empower young Africans to participate actively and meaningfully in the implementation of the African Continental Free Trade Area (AfCFTA).",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To empower, equip and mobilize African youth to actively participate in and benefit from the AfCFTA by promoting youth-centered policy awareness, entrepreneurship, innovation and cross-border collaboration.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become the leading youth-driven force shaping Africa's economic future — where empowered, innovative, and globally competitive young people drive intra-African trade, industrialization and sustainable development under a unified continental market.",
  },
  {
    icon: Globe,
    title: "Our Purpose",
    text: "Young people form more than 60% of Africa's population, making them the most powerful engine for sustainable trade development. APN Youth bridges the gap between youth participation and continental policy implementation.",
  },
];

const VALUES = [
  { label: "Innovation", desc: "Creative thinking and modern solutions to Africa's economic challenges" },
  { label: "Leadership", desc: "Bold, informed, visionary youth leaders influencing policy" },
  { label: "Collaboration", desc: "Cross-border partnerships unifying Africa's youth under one vision" },
  { label: "Inclusiveness", desc: "Fairness, gender equity, and equal access for all young Africans" },
  { label: "Excellence", desc: "High standards in learning, leadership and AfCFTA advocacy" },
  { label: "Integrity", desc: "Transparent, ethical, and responsible action in all engagements" },
  { label: "Empowerment", desc: "Knowledge, skills, and tools to thrive in the continental ecosystem" },
];

const ALIGNMENT_ITEMS = [
  { icon: TrendingUp, label: "Youth Awareness of AfCFTA Provisions", desc: "Educating young Africans on their rights, opportunities, and roles within the AfCFTA agreement." },
  { icon: Globe, label: "Youth-Led Cross-Border Trade", desc: "Opening pathways for young entrepreneurs to access and operate in African markets beyond borders." },
  { icon: Zap, label: "Skills for the AfCFTA Job Market", desc: "Building technical, digital and professional skills that match continental trade demands." },
  { icon: Target, label: "Policy Engagement & Advocacy", desc: "Ensuring youth priorities are visible and represented in national and continental policy dialogues." },
  { icon: Eye, label: "Entrepreneurial & Digital Innovation", desc: "Supporting youth-led startups in fintech, agritech, creative industries, logistics, and manufacturing." },
  { icon: Users, label: "Partnerships for Youth Empowerment", desc: "Forging strategic partnerships that connect youth to funding, markets, mentors and opportunities." },
];

export function ApnYouthAbout() {
  return (
    <>
      {/* ── About / Mission / Vision ── */}
      <section id="about" className="py-24 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ backgroundColor: ACCENT, color: "#000" }}
            >
              About APN Youth
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
              Anchored on{" "}
              <span style={{ color: ACCENT }}>"One Africa, One Market"</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              APN Youth operates across African countries and the diaspora, mobilizing youth networks, policy clubs,
              entrepreneurial communities, and innovation ecosystems to ensure young people are not only beneficiaries
              of AfCFTA, but central contributors to its success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            {PILLARS.map(({ icon: Icon, title, text }, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: i % 2 === 0 ? "#fafafa" : "#fff",
                  border: "1.5px solid #f0f0f0",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Icon size={26} color="#000" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Stats strip */}
          <div
            className="rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            style={{ backgroundColor: "#111" }}
          >
            {[
              { value: "1.3B+", label: "People in AfCFTA Market" },
              { value: "54", label: "African Countries" },
              { value: "60%+", label: "Youth Share of Africa's Population" },
              { value: "2021", label: "Year Established" },
            ].map(({ value, label }, i) => (
              <div key={i}>
                <div className="text-4xl font-extrabold" style={{ color: ACCENT }}>{value}</div>
                <div className="mt-1 text-sm uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alignment with AfCFTA — IMAGE BACKGROUND ── */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ isolation: "isolate" }}
      >
        {/* Background image */}
        <img
          src={ALIGNMENT_BG}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            zIndex: -2,
            display: "block",
          }}
        />
        {/* Dark + gold gradient overlay so text stays readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            backgroundImage:
              "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(20,14,0,0.82) 50%, rgba(0,0,0,0.88) 100%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ backgroundColor: ACCENT, color: "#000" }}
            >
              Our Alignment
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Aligned With{" "}
              <span style={{ color: ACCENT }}>AfCFTA Goals</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              APN Youth translates continental trade goals into youth-driven action across six focus areas.
            </p>
          </div>

          {/* Cards grid — semi-transparent dark cards over the image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALIGNMENT_ITEMS.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1.5px solid rgba(255,255,255,0.13)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-200 group-hover:scale-110"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Icon size={20} color="#000" strokeWidth={2.2} />
                </div>
                <h4 className="font-bold text-white text-base mb-2 leading-snug">{label}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#111" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ backgroundColor: ACCENT, color: "#000" }}
            >
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              What We <span style={{ color: ACCENT }}>Stand For</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {VALUES.map(({ label, desc }, i) => (
              <div
                key={i}
                className="rounded-2xl px-6 py-5 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.10)",
                  minWidth: 180,
                  maxWidth: 220,
                }}
              >
                <div className="text-sm font-extrabold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
                  {label}
                </div>
                <p className="text-white/60 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
