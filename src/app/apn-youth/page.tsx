import { ApnYouthHero } from "@/components/sections/apn-youth/ApnYouthHero";
import { ApnYouthAbout } from "@/components/sections/apn-youth/ApnYouthAbout";
import { ApnYouthPrograms } from "@/components/sections/apn-youth/ApnYouthPrograms";
import { ApnYouthTeam } from "@/components/sections/apn-youth/ApnYouthTeam";
import { CompanyNav } from "@/components/sections/CompanyNav";
import { CompanyFooter } from "@/components/sections/CompanyFooter";
import { LoadingScreen } from "@/components/sections/LoadingScreen";

const APN_YOUTH_LOGO =
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781791523/lllogo_qt1wzz.jpg";
const APN_YOUTH_COLOR = "#F4C430";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Objectives", href: "#objectives" },
  { label: "Programs", href: "#programs" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const metadata = {
  title: "APN Youth | AfCFTA Policy Network – Youth Directorate",
  description:
    "APN Youth empowers young Africans to participate actively in the AfCFTA — promoting youth entrepreneurship, policy literacy, cross-border collaboration, and innovation across the continent.",
};

export default function ApnYouthPage() {
  return (
    <main>
      <LoadingScreen
        logo={APN_YOUTH_LOGO}
        accentColor={APN_YOUTH_COLOR}
        companyName="APN Youth"
      />
      <style>{`
        html { scroll-behavior: smooth; }
        img, video, iframe { max-width: 100%; height: auto; }
        @media (max-width: 640px) {
          main > * { overflow-x: hidden; }
        }
      `}</style>
      <CompanyNav
        companyName="APN Youth"
        accentColor={APN_YOUTH_COLOR}
        logo={APN_YOUTH_LOGO}
        links={NAV_LINKS}
      />
      <ApnYouthHero />
      <ApnYouthAbout />
      <ApnYouthPrograms />
      <ApnYouthTeam />
      <CompanyFooter
        companyName="APN Youth International"
        accentColor={APN_YOUTH_COLOR}
        tagline="Empowering Youth, Transforming Africa"
        email="info@apnyouth.org"
      />
    </main>
  );
}
