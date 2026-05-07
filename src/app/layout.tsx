import type { Metadata } from "next";
import "./globals.css";

const OG_IMAGE = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778124971/apn_square_i3pzri.png";
const SITE_TITLE = "UnifiedNexus Group | Excellence Across Ghana & Beyond";
const SITE_DESC = "UnifiedNexus is a Ghanaian multi-sector powerhouse spanning Technology, Renewable Energy, Real Estate, and Strategic Marketing.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tgne-groupsite.vercel.app"),
  title: SITE_TITLE,
  description: SITE_DESC,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: OG_IMAGE, type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: OG_IMAGE,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: "https://tgne-groupsite.vercel.app",
    siteName: "UnifiedNexus Group",
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "UnifiedNexus Group",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [OG_IMAGE],
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
        {/* Hard-coded OG tags — WhatsApp/Telegram crawlers read raw HTML and
            sometimes miss Next.js-injected tags. These act as a guaranteed fallback. */}
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESC} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="UnifiedNexus Group" />
        <meta property="og:url" content="https://tgne-groupsite.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="UnifiedNexus Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMAGE} />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href={OG_IMAGE} type="image/png" />
        <link rel="apple-touch-icon" href={OG_IMAGE} />
        {/* Fonts */}
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
