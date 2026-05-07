import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UnifiedNexus Group | Excellence Across Ghana & Beyond",
  description:
    "UnifiedNexus is a Ghanaian multi-sector powerhouse spanning Technology, Renewable Energy, Real Estate, and Strategic Marketing.",
  icons: {
    icon: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778124971/apn_square_i3pzri.png",
    shortcut: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778124971/apn_square_i3pzri.png",
    apple: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778124971/apn_square_i3pzri.png",
  },
  openGraph: {
    title: "UnifiedNexus Group | Excellence Across Ghana & Beyond",
    description:
      "UnifiedNexus is a Ghanaian multi-sector powerhouse spanning Technology, Renewable Energy, Real Estate, and Strategic Marketing.",
    images: [
      {
        url: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778124971/apn_square_i3pzri.png",
        width: 1200,
        height: 630,
        alt: "UnifiedNexus Group",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UnifiedNexus Group | Excellence Across Ghana & Beyond",
    description:
      "UnifiedNexus is a Ghanaian multi-sector powerhouse spanning Technology, Renewable Energy, Real Estate, and Strategic Marketing.",
    images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778124971/apn_square_i3pzri.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
