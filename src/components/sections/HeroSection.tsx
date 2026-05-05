
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 blur-[120px]">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/40 animate-pulse" />
        <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-md">
          Ghana's Innovation Powerhouse
        </div>
        
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] md:leading-[1]">
          One Hub.<br />
          <span className="text-primary italic">One Vision.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
          UnifiedNexus is a multi-sector powerhouse delivering innovative solutions in Technology, Energy, Real Estate, and Strategic Marketing.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button 
            size="lg" 
            className="h-16 px-10 text-lg rounded-full font-bold group bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(102,87,230,0.3)] transition-all duration-300"
            onClick={() => document.getElementById('company-selector')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Companies
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-white/10 hover:bg-white/5 font-bold transition-all duration-300">
            Partner With HQ
          </Button>
        </div>
      </div>
      
      {/* Subtle indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
