import { AgifHero } from "@/components/sections/agif/AgifHero";
import { AgifServices } from "@/components/sections/agif/AgifServices";
import { AgifProjects } from "@/components/sections/agif/AgifProjects";
import { AgifTeam } from "@/components/sections/agif/AgifTeam";
import { AgifContact } from "@/components/sections/agif/AgifContact";
import { CompanyNav } from "@/components/sections/CompanyNav";
import { CompanyFooter } from "@/components/sections/CompanyFooter";

export const metadata = {
  title: "Africa Globalized Investment Forum | APNABEC Group",
  description:
    "Premier international investment summit unlocking Africa's $2.5 trillion economic potential through PPP projects, sovereign deals and institutional investment.",
};

export default function AgifPage() {
  return (
    <main>
      <style>{`
        img, video, iframe { max-width: 100%; height: auto; }
        @media (max-width: 640px) {
          main > * { overflow-x: hidden; }
        }
      `}</style>
      <CompanyNav companyName="Africa Globalized Investment Forum" accentColor="#10B981" />
      <AgifHero />
      <AgifServices />
      <AgifProjects />
      <AgifTeam />
      <AgifContact />
      <CompanyFooter companyName="Africa Globalized Investment Forum" accentColor="#10B981" />
    </main>
  );
}
