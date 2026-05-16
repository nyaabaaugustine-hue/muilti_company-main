import { AgifHero } from "@/components/sections/agif/AgifHero";
import { AgifServices } from "@/components/sections/agif/AgifServices";
import { AgifProjects } from "@/components/sections/agif/AgifProjects";
import { AgifTeam } from "@/components/sections/agif/AgifTeam";
import { AgifContact } from "@/components/sections/agif/AgifContact";
import { CompanyNav } from "@/components/sections/CompanyNav";
import { CompanyFooter } from "@/components/sections/CompanyFooter";
import { LoadingScreen } from "@/components/sections/LoadingScreen";

const AGIF_LOGO = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778951617/logo-modified-rcwu8zd15uqvlujv0xasfhjru4gpfjtw9dtv6mfmyo_nq4f79.png";

export const metadata = {
  title: "Africa Globalized Investment Forum | APNABEC Group",
  description:
    "Premier international investment summit unlocking Africa's $2.5 trillion economic potential through PPP projects, sovereign deals and institutional investment.",
};

export default function AgifPage() {
  return (
    <main>
      <LoadingScreen logo={AGIF_LOGO} accentColor="#10B981" companyName="Africa Globalized Investment Forum" />
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
