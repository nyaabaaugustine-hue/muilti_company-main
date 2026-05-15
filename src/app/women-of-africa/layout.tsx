import type { Metadata } from "next";
import { WANNav } from "@/components/women/WANNav";
import { WANFooter } from "@/components/women/WANFooter";

export const metadata: Metadata = {
  title: {
    template: "%s | Women of Africa Network",
    default: "Women of Africa Network | Positively Impacting Women Across Africa",
  },
  description:
    "A pan-African NGO empowering women through education, trade facilitation, access to finance and advocacy across all 54 African nations.",
  openGraph: {
    siteName: "Women of Africa Network",
    type: "website",
  },
};

export default function WANLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh", background: "#fff" }}>
      <WANNav />
      <main style={{ paddingTop: 70 }}>{children}</main>
      <WANFooter />
    </div>
  );
}
