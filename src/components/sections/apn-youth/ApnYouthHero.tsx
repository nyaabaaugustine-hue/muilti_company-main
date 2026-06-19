"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    url: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791985/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-sitting-grass-studying-with-laptops_627829-6074_xorbke.avif",
    caption: "One Africa, One Market",
    sub: "Empowering young Africans to lead continental trade, policy and innovation under the AfCFTA framework",
  },
  {
    url: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791984/african-american-guy-studies-critical-law-exam-reading-specialty-books_482257-126447_pxvgtb.avif",
    caption: "Policy Literacy & Advocacy",
    sub: "Building a generation of informed young Africans who understand and shape AfCFTA rules and opportunities",
  },
  {
    url: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791984/african-american-girl-studying-with-exhaustion-burnout-all-night-exams_482257-118184_mumpvg.avif",
    caption: "Skills for the AfCFTA Market",
    sub: "Equipping youth with trade skills, digital capabilities and entrepreneurial tools for continental success",
  },
  {
    url: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791984/diverse-students-team-engaging-video-call-with-doctor_482257-123361_wpfkt4.avif",
    caption: "Cross-Border Collaboration",
    sub: "Connecting youth-led enterprises, innovators, and professionals across African markets",
  },
  {
    url: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791984/two-black-african-girlfriends-summer-dresses-drinking-milkshake-cocktails-looking-menu-cafe_627829-14190_w3p7eb.avif",
    caption: "Youth-Driven Transformation",
    sub: "Africa's youth — active stakeholders, future value creators and key drivers of economic integration",
  },
];

export function ApnYouthHero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: 520 }}>
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.url}
            alt={slide.caption}
            className="w-full h-full object-cover"
            style={{ display: "block" }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%)" }}
          />
        </div>
      ))}

      {/* Caption overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ zIndex: 10 }}
      >
        <div
          className="inline-block mb-5 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{ backgroundImage: "none", backgroundColor: "#F4C430", color: "#000" }}
        >
          AfCFTA Policy Network – Youth Directorate
        </div>
        <h1
          className="text-white font-extrabold leading-tight mb-4"
          style={{
            fontSize: "clamp(1.8rem, 5.5vw, 3.75rem)",
            textShadow: "0 2px 28px rgba(0,0,0,0.55)",
            maxWidth: 820,
          }}
        >
          {SLIDES[current].caption}
        </h1>
        <p
          className="text-white/80 font-medium"
          style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.25rem)", maxWidth: 580 }}
        >
          {SLIDES[current].sub}
        </p>
        <div className="mt-9 flex flex-wrap gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#F4C430", color: "#000" }}
          >
            Our Mission
          </a>
          <a
            href="#programs"
            className="px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider border-2 border-white/80 text-white transition-all duration-200 hover:bg-white hover:text-black"
          >
            Join the Movement
          </a>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full w-11 h-11 border border-white/40 text-white transition-all duration-200 hover:bg-black/50"
        style={{ zIndex: 20, backgroundColor: "rgba(0,0,0,0.3)" }}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full w-11 h-11 border border-white/40 text-white transition-all duration-200 hover:bg-black/50"
        style={{ zIndex: 20, backgroundColor: "rgba(0,0,0,0.3)" }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 20 }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 28 : 10,
              height: 10,
              backgroundColor: i === current ? "#F4C430" : "rgba(255,255,255,0.45)",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{ backgroundColor: "rgba(255,255,255,0.12)", zIndex: 20 }}
      >
        <div
          className="h-full"
          style={{
            width: `${((current + 1) / SLIDES.length) * 100}%`,
            backgroundColor: "#F4C430",
            transition: "width 0.6s ease",
          }}
        />
      </div>
    </section>
  );
}
