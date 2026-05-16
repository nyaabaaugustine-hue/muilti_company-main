import { AfcftaHero } from "@/components/sections/afcfta/AfcftaHero";
import { AfcftaAbout } from "@/components/sections/afcfta/AfcftaAbout";
import { AfcftaServices } from "@/components/sections/afcfta/AfcftaServices";
import { AfcftaActivities } from "@/components/sections/afcfta/AfcftaActivities";
import { AfcftaProjects } from "@/components/sections/afcfta/AfcftaProjects";
import { AfcftaTeam } from "@/components/sections/afcfta/AfcftaTeam";
import { AfcftaNewsletter } from "@/components/sections/afcfta/AfcftaNewsletter";
import { AfcftaContact } from "@/components/sections/afcfta/AfcftaContact";
import { CompanyNav } from "@/components/sections/CompanyNav";
import { CompanyFooter } from "@/components/sections/CompanyFooter";

export const metadata = {
  title: "AfCFTA Policy Network | UnifiedNexus Group",
  description: "The largest international NGO think tank on AfCFTA implementation — building intra-Africa trade partnerships across 54 nations since 2019.",
};

export default function AfcftaPolicyPage() {
  return (
    <main>
      <style>{`
        img, video, iframe { max-width: 100%; height: auto; }
        @media (max-width: 640px) {
          main > * { overflow-x: hidden; }
        }
      `}</style>
      <CompanyNav companyName="AfCFTA Policy Network" accentColor="#F59E0B" />
      <AfcftaHero />
      <AfcftaAbout />
      <AfcftaServices />
      <AfcftaActivities />
      <AfcftaProjects />
      <AfcftaTeam />
      <AfcftaNewsletter />
      <AfcftaContact />
      <CompanyFooter companyName="AfCFTA Policy Network" accentColor="#F59E0B" />
    </main>
  );
}
