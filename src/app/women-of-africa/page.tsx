import { WomenHero } from "@/components/sections/women/WomenHero";
import { WomenServices } from "@/components/sections/women/WomenServices";
import { WomenTeam } from "@/components/sections/women/WomenTeam";
import { WomenPartners } from "@/components/sections/women/WomenPartners";
import { WomenNews } from "@/components/sections/women/WomenNews";
import { WomenContact } from "@/components/sections/women/WomenContact";
import { CompanyNav } from "@/components/sections/CompanyNav";
import { CompanyFooter } from "@/components/sections/CompanyFooter";

export const metadata = {
  title: "Women of Africa Network | APN Group",
  description: "Positively impacting the lives of women across Africa through education, trade facilitation, access to finance and advocacy. Boosting women inclusion in entrepreneurship and business under the AfCFTA.",
};

export default function WomenOfAfricaPage() {
  return (
    <main>
      <CompanyNav companyName="Women of Africa Network" accentColor="#EC4899" />
      <WomenHero />
      <WomenServices />
      <WomenPartners />
      <WomenTeam />
      <WomenNews />
      <WomenContact />
      <CompanyFooter
        companyName="Women of Africa Network"
        companyColor="#EC4899"
        tagline="Positively impacting the lives of women"
        email="info@womenofafricanetwork.org"
        phone="+233 24 486 8395"
      />
    </main>
  );
}
