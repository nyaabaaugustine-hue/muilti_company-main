import { CompanyNav } from "@/components/sections/CompanyNav";
import { KumasiHero } from "@/components/sections/kumasi/KumasiHero";
import { KumasiServices } from "@/components/sections/kumasi/KumasiServices";
import { KumasiProjects } from "@/components/sections/kumasi/KumasiProjects";
import { KumasiTeam } from "@/components/sections/kumasi/KumasiTeam";
import { CompanyFooter } from "@/components/sections/CompanyFooter";

export const metadata = {
  title: "Kumasi Smart | Real Estate — UnifiedNexus Group",
  description: "Redefining luxury residential and commercial real estate through smart-home technology and bold architecture.",
};

export default function KumasiSmartPage() {
  return (
    <main style={{ background:"#0C0A04",minHeight:"100vh",color:"#fff" }}>
      <CompanyNav companyName="Kumasi Smart" companyColor="#C9A84C" />
      <KumasiHero />
      <KumasiServices />
      <KumasiProjects />
      <KumasiTeam />
      <CompanyFooter companyName="Kumasi Smart" companyColor="#C9A84C" tagline="Modernity Meets Heritage" email="hello@kumasismart.com.gh" phone="+233 30 000 3300" />
    </main>
  );
}
