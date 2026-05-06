import { CompanyNav } from "@/components/sections/CompanyNav";
import { VoltaHero } from "@/components/sections/volta/VoltaHero";
import { VoltaServices } from "@/components/sections/volta/VoltaServices";
import { VoltaProjects } from "@/components/sections/volta/VoltaProjects";
import { VoltaTeam } from "@/components/sections/volta/VoltaTeam";
import { CompanyFooter } from "@/components/sections/CompanyFooter";

export const metadata = {
  title: "Volta Energy | Renewable Energy — UnifiedNexus Group",
  description: "Building sustainable, resilient energy storage and solar networks across West Africa.",
};

export default function VoltaEnergyPage() {
  return (
    <main style={{ background:"#03100A",minHeight:"100vh",color:"#fff" }}>
      <CompanyNav companyName="Volta Energy" companyColor="#10B981" />
      <VoltaHero />
      <VoltaServices />
      <VoltaProjects />
      <VoltaTeam />
      <CompanyFooter companyName="Volta Energy" companyColor="#10B981" tagline="Powering the Coast" email="hello@voltaenergy.com.gh" phone="+233 30 000 2200" />
    </main>
  );
}
