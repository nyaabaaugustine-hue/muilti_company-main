"use client";
const A = "#EC4899";
const BG = "#1a0520";

const NEWS = [
  {
    title: "Has Ghana benefited from tourism",
    date: "21 Apr 2025",
    category: "APN",
    img: "https://womenofafricanetwork.org/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-16-at-11.13.57-150x150.jpeg",
  },
  {
    title: "APN GROUP & Eban Capital signs continental MOU",
    date: "28 Aug 2024",
    category: "APN, Publications",
    img: "https://womenofafricanetwork.org/wp-content/uploads/2024/08/Media3-150x150.jpeg",
  },
  {
    title: "An Inspiring Story that Highlights The Resilience Of A Pan-African Woman",
    date: "31 Jul 2024",
    category: "Publications",
    img: "https://womenofafricanetwork.org/wp-content/uploads/2024/05/0-150x150.jpeg",
  },
  {
    title: "APN NEWSLETTER (27th May 2024)",
    date: "31 May 2024",
    category: "Publications",
    img: "https://womenofafricanetwork.org/wp-content/uploads/2024/05/Screenshot-2024-05-30-at-1.50.09-PM-150x150.png",
  },
];

export function WomenNews() {
  return (
    <section style={{ background: "#fdf8fb", padding: "100px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          <span style={{ width: 28, height: 1, background: A, display: "block" }} />
          Latest News
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 600, color: BG, lineHeight: 1.15, margin: 0 }}>
            Updates & <em style={{ color: A, fontStyle: "italic", fontWeight: 400 }}>Events</em>
          </h2>
          <a href="https://womenofafricanetwork.org" target="_blank" rel="noopener noreferrer" style={{ color: A, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            View Updates →
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 20 }}>
          {NEWS.map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 4, overflow: "hidden", border: `1px solid rgba(236,72,153,0.1)`, transition: "all 0.3s" }} className="news-card">
              <div style={{ height: 160, overflow: "hidden" }}>
                <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} className="news-img" />
              </div>
              <div style={{ padding: "16px 18px 20px" }}>
                <div style={{ fontSize: 9, color: A, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{item.category}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 600, color: BG, lineHeight: 1.25, margin: 0 }}>{item.title}</h3>
                <div style={{ fontSize: 10, color: "#999", marginTop: 8 }}>{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.news-card:hover .news-img { transform: scale(1.06); } .news-card:hover { box-shadow: 0 8px 32px rgba(236,72,153,0.1); }`}</style>
    </section>
  );
}
