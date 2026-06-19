import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://africaglobalizedinvestment.com"),
  title: {
    default: "Africa Globalized Investment Forum | AGIF Summit",
    template: "%s | AGIF",
  },
  description:
    "The premier international investment summit connecting global capital with Africa's transformative opportunities. Investments, PPP projects, contracts and guarantees across 54 African nations.",
  keywords: [
    "Africa investment", "AGIF", "African investment forum", "Pan-African summit",
    "PPP Africa", "infrastructure investment Africa", "investment summit",
    "Africa business", "investment opportunities Africa",
  ],
  authors: [{ name: "Africa Globalized Investment Forum" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://africaglobalizedinvestment.com",
    siteName: "Africa Globalized Investment Forum",
    title: "Africa Globalized Investment Forum | AGIF Summit",
    description:
      "Connecting global capital with Africa's transformative opportunities across 54 nations.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AGIF Summit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Globalized Investment Forum",
    description: "Connecting global capital with Africa's transformative opportunities.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0B3D2E",
              border: "1px solid rgba(201,164,74,0.3)",
              color: "#FAF6EC",
            },
          }}
        />
      </body>
    </html>
  );
}
