import { WANNav } from "@/components/women/WANNav";
import { WANFooter } from "@/components/women/WANFooter";
import { WomenHero } from "@/components/sections/women/WomenHero";
import { WomenServices } from "@/components/sections/women/WomenServices";
import { WomenPartners } from "@/components/sections/women/WomenPartners";
import { WomenTeam } from "@/components/sections/women/WomenTeam";
import { WomenNews } from "@/components/sections/women/WomenNews";
import { WomenContact } from "@/components/sections/women/WomenContact";
import { HomeStats } from "@/components/women/HomeStats";
import { HomeProgramsCTA } from "@/components/women/HomeProgramsCTA";

export const metadata = {
  title: "Women of Africa Network | APNABEC Group",
  description:
    "Positively impacting the lives of women across Africa through education, trade facilitation, economic empowerment, health and policy advocacy.",
};

export default function WANHomePage() {
  return (
    <>
      <WANNav />
      <WomenHero />
      <HomeStats />
      <WomenServices />
      <HomeProgramsCTA />
      <WomenPartners />
      <WomenTeam />
      <WomenNews />
      <WomenContact />
      <WANFooter />
    </>
  );
}
