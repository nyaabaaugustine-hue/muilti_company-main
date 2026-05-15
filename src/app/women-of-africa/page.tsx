import { WomenHero } from "@/components/sections/women/WomenHero";
import { WomenServices } from "@/components/sections/women/WomenServices";
import { WomenPartners } from "@/components/sections/women/WomenPartners";
import { WomenTeam } from "@/components/sections/women/WomenTeam";
import { WomenNews } from "@/components/sections/women/WomenNews";
import { WomenContact } from "@/components/sections/women/WomenContact";
import { HomeStats } from "@/components/women/HomeStats";
import { HomeProgramsCTA } from "@/components/women/HomeProgramsCTA";

export const metadata = {
  title: "Home",
  description:
    "Women of Africa Network — positively impacting the lives of women through education, trade facilitation, access to finance and advocacy across Africa.",
};

export default function WANHomePage() {
  return (
    <>
      <WomenHero />
      <HomeStats />
      <WomenServices />
      <HomeProgramsCTA />
      <WomenPartners />
      <WomenTeam />
      <WomenNews />
      <WomenContact />
    </>
  );
}
