import { WomenHero } from "@/components/sections/women/WomenHero";
import { WomenAbout } from "@/components/sections/women/WomenAbout";
import { WomenServices } from "@/components/sections/women/WomenServices";
import { WomenActivities } from "@/components/sections/women/WomenActivities";
import { WomenInitiatives } from "@/components/sections/women/WomenInitiatives";
import { WomenTeam } from "@/components/sections/women/WomenTeam";
import { WomenNewsletter } from "@/components/sections/women/WomenNewsletter";
import { WomenPartners } from "@/components/sections/women/WomenPartners";
import { WomenContact } from "@/components/sections/women/WomenContact";
import { CompanyNav } from "@/components/sections/CompanyNav";
import { CompanyFooter } from "@/components/sections/CompanyFooter";
import { LoadingScreen } from "@/components/sections/LoadingScreen";

const WAN_LOGO = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778099379/1a_zcxsx2.png";
const GOLD = "#D4A017";

export const metadata = {
  title: "Women of Africa Network | APNABEC Group",
  description:
    "Positively impacting the lives of women across Africa through education, trade facilitation, economic empowerment, health and policy advocacy.",
  icons: {
    icon: WAN_LOGO,
    shortcut: WAN_LOGO,
    apple: WAN_LOGO,
  },
};

export default function WomenOfAfricaPage() {
  return (
    <main>
      <LoadingScreen logo={WAN_LOGO} accentColor={GOLD} companyName="Women of Africa Network" />
      <style>{`
        img, video, iframe { max-width: 100%; height: auto; }
        @media (max-width: 640px) {
          main > * { overflow-x: hidden; }
        }
      `}</style>
      <CompanyNav
        companyName="Women of Africa Network"
        accentColor={GOLD}
        logo={WAN_LOGO}
      />
      <WomenHero />
      <WomenAbout />
      <WomenServices />
      <WomenActivities />
      <WomenInitiatives />
      <WomenTeam />
      <WomenNewsletter />
      <WomenPartners />
      <WomenContact />
      <CompanyFooter companyName="Women of Africa Network" accentColor={GOLD} />
    </main>
  );
}
