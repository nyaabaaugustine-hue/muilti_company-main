
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

const STRENGTHS = [
  "Integrated Technological Solutions",
  "Sustainable Infrastructure & Energy",
  "Luxury Living & Lifestyle Mastery",
  "Global Market Amplification",
  "Cross-Sector Strategic Synergy",
  "Unwavering Commitment to Quality"
];

export function GroupOverview() {
  const officeImg = PlaceHolderImages.find(img => img.id === "group-office");

  return (
    <section className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase">
              Unified Leadership
            </div>
            
            <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight">
              A Unified Force Delivering <span className="text-primary italic">Diverse Expertise</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              UnifiedNexus operates at the intersection of industry-defining innovation. By pooling our resources and specialized knowledge across four distinct sectors, we create a ecosystem that is far greater than the sum of its parts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STRENGTHS.map((strength, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">{strength}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 grid grid-cols-3 gap-8 border-t border-white/5">
              <div>
                <div className="text-3xl font-bold font-headline">12+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-headline">400+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Experts</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-headline">150+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Awards</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
            {officeImg && (
              <>
                <Image 
                  src={officeImg.imageUrl} 
                  alt={officeImg.description}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint={officeImg.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-morphism rounded-2xl">
                  <p className="text-sm italic font-medium">
                    "Innovation happens when different perspectives collide. That's the core of the UnifiedNexus philosophy."
                  </p>
                  <p className="mt-2 text-xs font-bold text-primary uppercase tracking-widest">
                    — Julian Vance, Group Chairman
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
