import type { Metadata } from "next";

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
  return <>{children}</>;
}
