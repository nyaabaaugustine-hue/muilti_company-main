"use client";
import { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const A = "#f28d01";
const NAVY = "#000040";

const ARTICLES = [
  {
    date: "12 March 2024",
    category: "Trade Policy",
    title: "ABEC500 Delegation Meets AfCFTA Secretariat in Accra to Strengthen Export Corridors",
    excerpt:
      "A high-level delegation from the Africa Business Export Club 500 held productive discussions with senior officials at the AfCFTA Secretariat, outlining a five-point plan to accelerate intra-African trade for member businesses.",
    img: "https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=600&q=80",
    readTime: "4 min read",
  },
  {
    date: "28 February 2024",
    category: "Events",
    title: "ABEC500 Hosts Pan-African Export Summit Attracting 800+ Delegates from 38 Nations",
    excerpt:
      "The annual ABEC500 Export Summit brought together more than 800 delegates representing businesses across 38 African nations, with keynote addresses focused on unlocking the $3.4 trillion intra-African trade potential.",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
    readTime: "6 min read",
  },
  {
    date: "14 January 2024",
    category: "Membership",
    title: "New Trade Finance Partnership Unlocks $50M in Export Credit for ABEC500 Members",
    excerpt:
      "ABEC500 has signed a landmark partnership with a consortium of African development finance institutions, providing member businesses access to a $50 million export credit facility at preferential rates.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    readTime: "3 min read",
  },
  {
    date: "5 December 2023",
    category: "Policy",
    title: "ABEC500 Submits Formal Recommendations on Non-Tariff Barriers to AU Commission",
    excerpt:
      "Following extensive consultations with member businesses, ABEC500 has submitted a comprehensive policy brief to the African Union Commission, calling for urgent action on the 14 most common Non-Tariff Barriers affecting intra-African exporters.",
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&q=80",
    readTime: "5 min read",
  },
  {
    date: "20 November 2023",
    category: "Capacity Building",
    title: "ABEC500 Launches AfCFTA Certification Programme — 200 Businesses Complete First Cohort",
    excerpt:
      "The inaugural cohort of the ABEC500 AfCFTA Certification Programme graduated 200 businesses from 22 countries, equipping them with the knowledge and tools to leverage the continental free trade agreement effectively.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    readTime: "4 min read",
  },
  {
    date: "3 October 2023",
    category: "International",
    title: "ABEC500 Signs MOU with European Chamber of Commerce to Boost Africa-EU Trade",
    excerpt:
      "A significant memorandum of understanding signed between ABEC500 and the European Chamber of Commerce will create a dedicated corridor connecting African exporters with over 1,200 European buyers.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    readTime: "3 min read",
  },
];

const CATS = ["All", "Trade Policy", "Events", "Membership", "Policy", "Capacity Building", "International"];

export function AbecPress() {
  const [hov, setHov] = useState<number | null>(null);
  const [activeCat, setActiveCat] = useState("All");

  const filtered =
    activeCat === "All"
      ? ARTICLES
      : ARTICLES.filter(a => a.category === activeCat);

  return (
    <section
      id="press"
      style={{
        background: "#f8f6f0",
        padding: "110px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: A,
                marginBottom: 16,
              }}
            >
              <span style={{ width: 28, height: 1, background: A, display: "block" }} />
              News & Updates
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(32px,3.5vw,48px)",
                fontWeight: 600,
                color: NAVY,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Press <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Release</em>
            </h2>
          </div>
          <p
            style={{
              fontSize: 13,
              color: "#666",
              maxWidth: 300,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            The latest news, events and announcements from Africa Business Export Club 500.
          </p>
        </div>

        {/* Category filter */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 40,
          }}
        >
          {CATS.map(c => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              style={{
                padding: "7px 16px",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                borderRadius: 2,
                border: `1px solid ${activeCat === c ? A : "rgba(0,0,64,0.15)"}`,
                background: activeCat === c ? A : "transparent",
                color: activeCat === c ? "#fff" : "#666",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured article (first) */}
        {filtered.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
              marginBottom: 24,
              border: `1px solid rgba(0,0,64,0.10)`,
              borderRadius: 6,
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 4px 24px rgba(0,0,64,0.06)",
            }}
          >
            <div style={{ position: "relative", minHeight: 320, overflow: "hidden" }}>
              <img
                src={filtered[0].img}
                alt={filtered[0].title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  inset: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg,rgba(0,0,40,0.60) 0%,transparent 70%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  background: A,
                  color: "#fff",
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: 2,
                }}
              >
                {filtered[0].category}
              </div>
            </div>
            <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#999", marginBottom: 16 }}>
                <Calendar size={12} />
                {filtered[0].date} · {filtered[0].readTime}
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 26,
                  fontWeight: 600,
                  color: NAVY,
                  lineHeight: 1.25,
                  marginBottom: 16,
                }}
              >
                {filtered[0].title}
              </h3>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.80, marginBottom: 24 }}>
                {filtered[0].excerpt}
              </p>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: A,
                  textDecoration: "none",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.gap = "12px")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.gap = "6px")}
              >
                Read Full Article <ArrowRight size={13} />
              </a>
            </div>
          </div>
        )}

        {/* Rest of articles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(310px,1fr))",
            gap: 18,
          }}
        >
          {filtered.slice(1).map((a, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                background: "#fff",
                border: `1px solid ${hov === i ? "rgba(242,141,1,0.45)" : "rgba(0,0,64,0.08)"}`,
                borderRadius: 4,
                overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                transform: hov === i ? "translateY(-4px)" : "none",
                boxShadow: hov === i ? "0 12px 36px rgba(242,141,1,0.12)" : "0 2px 12px rgba(0,0,64,0.04)",
              }}
            >
              <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                <img
                  src={a.img}
                  alt={a.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s",
                    transform: hov === i ? "scale(1.06)" : "scale(1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg,transparent 40%,rgba(0,0,40,0.65) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "rgba(0,0,40,0.85)",
                    border: `1px solid rgba(242,141,1,0.35)`,
                    borderRadius: 2,
                    padding: "3px 10px",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: A,
                  }}
                >
                  {a.category}
                </div>
              </div>
              <div style={{ padding: "18px 20px 22px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 10,
                    color: "#aaa",
                    marginBottom: 10,
                  }}
                >
                  <Calendar size={10} />
                  {a.date} · {a.readTime}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 19,
                    fontWeight: 600,
                    color: NAVY,
                    lineHeight: 1.3,
                    marginBottom: 10,
                  }}
                >
                  {a.title}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    color: "#777",
                    lineHeight: 1.70,
                    marginBottom: 14,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {a.excerpt}
                </p>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: A,
                    textDecoration: "none",
                  }}
                >
                  Read More <ArrowRight size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
