import { AbecNav } from "@/components/sections/abec/AbecNav";
import { AbecFooter } from "@/components/sections/abec/AbecFooter";
import { AbecHero } from "@/components/sections/abec/AbecHero";
import { AbecAbout } from "@/components/sections/abec/AbecAbout";
import { AbecServices } from "@/components/sections/abec/AbecServices";
import { AbecExportClub } from "@/components/sections/abec/AbecExportClub";
import { AbecMembers } from "@/components/sections/abec/AbecMembers";
import { AbecTeam } from "@/components/sections/abec/AbecTeam";
import { AbecPress } from "@/components/sections/abec/AbecPress";
import { AbecContact } from "@/components/sections/abec/AbecContact";

export const metadata = {
  title: "Africa Business Export Club 500 | APNABEC Group",
  description:
    "Africa's premier export facilitation network — connecting 500+ African businesses with global markets through the AfCFTA framework across 54 nations.",
};

export default function Abec500Page() {
  return (
    <main>
      <AbecNav />
      <AbecHero />
      <AbecAbout />
      <AbecServices />
      <AbecExportClub />
      <AbecMembers />
      <AbecTeam />
      <AbecPress />
      <AbecContact />
      <AbecFooter />
    </main>
  );
}
