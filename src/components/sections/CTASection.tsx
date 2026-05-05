
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-[3rem] bg-primary overflow-hidden relative p-12 md:p-24 text-center space-y-8">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

        <div className="relative z-10 space-y-6">
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight">
            Ready to Build the Future?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Whether you're looking for a technology partner, sustainable energy solutions, or premium brand growth, UnifiedNexus is ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" variant="secondary" className="h-14 px-10 rounded-full font-bold text-base hover:scale-105 transition-transform">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 rounded-full font-bold text-base border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors">
              Contact HQ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
