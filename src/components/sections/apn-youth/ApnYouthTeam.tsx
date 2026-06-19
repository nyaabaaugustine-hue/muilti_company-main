"use client";

import { Linkedin, Mail } from "lucide-react";

const ACCENT = "#F4C430";

const TEAM = [
  {
    name: "Divine Mawena",
    role: "Executive Director",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791523/Divine_Mawena_-_Executive_Director_uzh2vz.jpg",
    bio: "A visionary leader driving APN Youth's mission to mobilize young Africans as active stakeholders in the AfCFTA. Divine spearheads the organisation's strategy across entrepreneurship, policy engagement, and continental youth empowerment.",
  },
  {
    name: "Dorothy Adjorkor Osekre",
    role: "Deputy Executive Director",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791523/dorethy_vbau8k.jpg",
    bio: "An accomplished administrator and youth development advocate with expertise in program coordination, cross-border collaboration, and building institutional partnerships that expand APN Youth's continental reach.",
  },
  {
    name: "Dr. Gladys Nkruman",
    role: "Board & Advisory Member",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791523/Dr._Gladys_Nkruman_vc1se1.jpg",
    bio: "A respected professional whose expertise and strategic counsel supports APN Youth in advancing its research, governance, and knowledge production mandate within the AfCFTA policy ecosystem.",
  },
];

export function ApnYouthTeam() {
  return (
    <section id="team" className="py-24 px-6" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: ACCENT, color: "#000" }}
          >
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            The People <span style={{ color: ACCENT }}>Leading the Movement</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Passionate, experienced leaders committed to building the largest youth-centred AfCFTA ecosystem on the continent.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {TEAM.map(({ name, role, image, bio }, i) => (
            <div
              key={i}
              className="group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: "#fafafa", border: "1.5px solid #f0f0f0" }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: 300 }}>
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  style={{ display: "block" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <div
                  className="inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ backgroundColor: ACCENT, color: "#000" }}
                >
                  {role}
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{bio}</p>
                <div className="flex gap-3">
                  <a
                    href="mailto:info@apnyouth.org"
                    className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
                    style={{ backgroundColor: "#111", color: ACCENT }}
                    aria-label={`Email ${name}`}
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
                    style={{ backgroundColor: "#0A66C2", color: "#fff" }}
                    aria-label={`${name} on LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA banner */}
        <div
          className="mt-16 rounded-3xl p-10 md:p-14 text-center"
          style={{ backgroundColor: ACCENT }}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-3">
            Join the Largest Youth-Centred AfCFTA Ecosystem
          </h3>
          <p className="text-black/70 text-base mb-7 max-w-xl mx-auto">
            Together, we will shape a united, prosperous, and globally competitive Africa driven by its youth.
          </p>
          <a
            href="#contact"
            className="inline-block px-9 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#000", color: ACCENT }}
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
