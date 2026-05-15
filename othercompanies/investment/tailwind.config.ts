import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest:  "#0B3D2E",
          green:   "#145236",
          emerald: "#1A6B47",
          light:   "#2A8A5C",
          gold:    "#C9A44A",
          amber:   "#E8C168",
          cream:   "#FAF6EC",
          offwhite:"#F5F0E8",
          charcoal:"#1C1C1C",
          muted:   "#6B7280",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono:    ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(ellipse at 60% 0%, rgba(201,164,74,0.18) 0%, transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(11,61,46,0.9) 0%, transparent 70%)",
        "gold-gradient": "linear-gradient(135deg, #C9A44A 0%, #E8C168 50%, #C9A44A 100%)",
        "dark-gradient": "linear-gradient(180deg, #0B3D2E 0%, #071E17 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "slide-left": "slideLeft 0.6s ease forwards",
        "float":      "float 6s ease-in-out infinite",
        "shimmer":    "shimmer 2.5s linear infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeUp:   { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:   { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideLeft:{ "0%": { opacity: "0", transform: "translateX(40px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        float:    { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } },
        shimmer:  { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        pulseGold:{ "0%,100%": { boxShadow: "0 0 0 0 rgba(201,164,74,0.4)" }, "50%": { boxShadow: "0 0 0 12px rgba(201,164,74,0)" } },
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up":   { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      boxShadow: {
        gold:     "0 4px 32px -8px rgba(201,164,74,0.35)",
        "gold-lg":"0 8px 48px -12px rgba(201,164,74,0.5)",
        card:     "0 2px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        "card-dark":"0 4px 32px rgba(0,0,0,0.4)",
        glow:     "inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
