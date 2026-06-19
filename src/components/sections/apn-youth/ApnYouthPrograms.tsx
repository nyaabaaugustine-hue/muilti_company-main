"use client";

import { BookOpen, Globe, Users, Mic2, Lightbulb, BarChart3 } from "lucide-react";
import { openContactModal } from "@/components/sections/ContactModal";

const ACCENT = "#F4C430";

const OBJECTIVES = [
  {
    num: "01",
    title: "Youth Empowerment for AfCFTA Participation",
    desc: "Providing young Africans with the knowledge, skills, and tools needed to engage in intra-African trade, policy development, and innovation.",
  },
  {
    num: "02",
    title: "Policy Literacy & Advocacy",
    desc: "Promoting youth understanding of AfCFTA rules, protocols, and opportunities while ensuring youth priorities are represented in national and continental policy dialogues.",
  },
  {
    num: "03",
    title: "Entrepreneurship & Innovation Development",
    desc: "Supporting youth-led enterprises in trade, manufacturing, digital economy, agribusiness, creative industries, logistics, and finance.",
  },
  {
    num: "04",
    title: "Cross-Border Youth Collaboration",
    desc: "Creating platforms that link young entrepreneurs, innovators, researchers, and professionals across African countries to drive inclusive trade growth.",
  },
  {
    num: "05",
    title: "Capacity Building Through Clubs & Training",
    desc: "Establishing AfCFTA Youth Clubs, training programs, workshops, and mentorships to build a generation of AfCFTA-ready leaders.",
  },
  {
    num: "06",
    title: "Research, Data & Youth Insights",
    desc: "Producing youth-centered research, publications, and policy recommendations that inform AfCFTA implementation.",
  },
];

const PROGRAMS = [
  {
    icon: BookOpen,
    title: "AfCFTA Youth Trade Clubs",
    desc: "Educational and leadership hubs in schools, universities, and communities focused on policy learning and trade skills development.",
    tag: "Education",
  },
  {
    icon: Globe,
    title: "Youth Trade & Digital Skills Academy",
    desc: "Training programs in e-commerce, digital payments, logistics, innovation, and entrepreneurship for continental trade readiness.",
    tag: "Skills",
  },
  {
    icon: Users,
    title: "Cross-Border Youth Business Missions",
    desc: "Connecting youth-led enterprises across African markets to create partnerships, trade linkages, and lasting commercial relationships.",
    tag: "Trade",
  },
  {
    icon: Mic2,
    title: "Youth Policy & Governance Forum",
    desc: "A platform for youth to engage policymakers, regulators, and private sector leaders on AfCFTA-related issues and opportunities.",
    tag: "Advocacy",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Startup Acceleration",
    desc: "Support for youth in agritech, fintech, creative industries, and manufacturing to scale within the AfCFTA single market.",
    tag: "Innovation",
  },
  {
    icon: BarChart3,
    title: "Youth Research & Knowledge Hub",
    desc: "Generating youth-centered insights, data, and reports that guide AfCFTA implementation and support informed continental policymaking.",
    tag: "Research",
  },
];

export function ApnYouthPrograms() {
  return (
    <>
      {/* Objectives section */}
      <section id="objectives" className="py-24 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ backgroundColor: ACCENT, color: "#000" }}
            >
              Core Objectives
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our <span style={{ color: ACCENT }}>Strategic Focus</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Six objectives anchored to building Africa's most impactful youth-driven AfCFTA ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {OBJECTIVES.map(({ num, title, desc }, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                style={{ backgroundColor: "#fafafa", border: "1.5px solid #f0f0f0" }}
              >
                <div
                  className="text-3xl font-black mb-4 transition-colors duration-200"
                  style={{ color: ACCENT }}
                >
                  {num}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs section */}
      <section id="programs" className="py-24 px-6" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ backgroundColor: ACCENT, color: "#000" }}
            >
              Key Program Areas
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What We <span style={{ color: ACCENT }}>Do</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Five flagship program areas designed to mobilize youth across every dimension of the AfCFTA agenda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {PROGRAMS.map(({ icon: Icon, title, desc, tag }, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                style={{ backgroundColor: "#fff", border: "1.5px solid #efefef" }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <Icon size={22} color="#000" strokeWidth={2.2} />
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#f0f0f0", color: "#555" }}
                  >
                    {tag}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Impact aspirations */}
          <div
            className="mt-16 rounded-3xl p-10"
            style={{ backgroundColor: "#111" }}
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Our <span style={{ color: ACCENT }}>Impact Aspirations</span>
              </h3>
              <p className="text-white/50 text-sm">What we are building toward across the continent</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Increased youth participation in intra-African trade",
                "Higher youth representation in policy conversations",
                "Growth in youth-led exports and cross-border businesses",
                "Enhanced youth access to finance, markets, and skills",
                "Strong continental networks connecting youth across borders",
                "A transformed African economy shaped by young innovators",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <p className="text-gray-500 text-base mb-6 max-w-xl mx-auto">
              Whether you are a student, entrepreneur, innovator, professional, or community leader — there is a place for you in APN Youth.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                openContactModal("APN Youth");
              }}
              className="inline-block px-10 py-4 rounded-full font-bold text-base uppercase tracking-wider transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#111", color: ACCENT, cursor: "pointer" }}
            >
              Join the Movement
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
