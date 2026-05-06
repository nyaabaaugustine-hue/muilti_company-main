import { CompanyNav } from "@/components/sections/CompanyNav";
import { OsuHero } from "@/components/sections/osu/OsuHero";
import { OsuServices } from "@/components/sections/osu/OsuServices";
import { OsuProjects } from "@/components/sections/osu/OsuProjects";
import { OsuTeam } from "@/components/sections/osu/OsuTeam";
import { CompanyFooter } from "@/components/sections/CompanyFooter";

export const metadata = {
  title: "Osu Digital Hub | Technology & AI — UnifiedNexus Group",
  description: "Pioneering high-scale software, cloud, and AI solutions tailored for West Africa's enterprise sector.",
};

export default function OsuTechPage() {
  return (
    <main style={{ background: "#060E1C", minHeight: "100vh", color: "#fff" }}>
      <CompanyNav companyName="Osu Digital Hub" companyColor="#3B82F6" />
      <OsuHero />
      <OsuServices />
      <OsuProjects />
      <OsuTeam />
      <CompanyFooter
        companyName="Osu Digital Hub"
        companyColor="#3B82F6"
        tagline="Innovation from Accra to the World"
        email="hello@osudigitalhub.com"
        phone="+233 30 000 1100"
      />
    </main>
  );
}
