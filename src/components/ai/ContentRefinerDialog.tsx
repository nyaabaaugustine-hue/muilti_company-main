
"use client";

import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { refineContent, type ContentRefinerOutput } from "@/ai/flows/content-manager-content-refinement";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const INITIAL_DATA = {
  group: {
    tagline: "One Hub. One Vision.",
    description: "UnifiedNexus is a multi-sector powerhouse delivering innovative solutions."
  },
  companies: [
    { name: "Osu Digital Hub", tagline: "Innovation from Accra.", description: "Pioneering high-scale software and AI solutions tailored for West Africa." },
    { name: "Volta Energy", tagline: "Powering the Coast.", description: "Sustainable energy storage networks for a greener industrial future." },
    { name: "Kumasi Smart", tagline: "Modernity Meets Heritage.", description: "Redefining luxury real estate through the integration of smart home technologies." },
    { name: "Adabraka Media", tagline: "Resonating Stories.", description: "Amplifying local brand narratives across global markets with data-driven marketing." }
  ]
};

export function ContentRefinerDialog() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ContentRefinerOutput | null>(null);
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleRefine = async () => {
    setIsLoading(true);
    try {
      const output = await refineContent(INITIAL_DATA);
      setResult(output);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Refinement Failed",
        description: "There was an error refining your content. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="fixed bottom-6 right-6 z-50 rounded-full shadow-2xl bg-background border-primary/20 hover:border-primary/50 transition-all gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          Content Refiner
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Content Refiner
          </DialogTitle>
          <DialogDescription>
            Elevate your messaging with our AI-powered refinement tool. Perfect for taglines and short descriptions.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {!result && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Target Content</p>
                <p className="text-sm font-medium">Group & 4 Individual Companies</p>
                <p className="text-xs text-muted-foreground mt-1">Refining for premium, corporate, and impactful brand voice.</p>
              </div>
              <Button 
                onClick={handleRefine} 
                className="w-full h-12" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Refining Brand Voice...
                  </>
                ) : (
                  "Generate Suggestions"
                )}
              </Button>
            </div>
          )}

          {result && (
            <div className="space-y-6 animate-in fade-in duration-500">
              {result.group && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Unified Group Suggestions</h3>
                  <div className="grid gap-3">
                    <div className="relative group">
                      <label className="text-[10px] text-muted-foreground uppercase ml-1">Refined Tagline</label>
                      <Textarea 
                        readOnly 
                        value={result.group.refinedTagline} 
                        className="bg-muted/30 resize-none min-h-[40px] pr-10"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute bottom-2 right-2 h-8 w-8"
                        onClick={() => copyToClipboard(result.group?.refinedTagline || '', 'group-tag')}
                      >
                        {copiedId === 'group-tag' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] text-muted-foreground uppercase ml-1">Refined Description</label>
                      <Textarea 
                        readOnly 
                        value={result.group.refinedDescription} 
                        className="bg-muted/30 resize-none min-h-[60px] pr-10"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute bottom-2 right-2 h-8 w-8"
                        onClick={() => copyToClipboard(result.group?.refinedDescription || '', 'group-desc')}
                      >
                        {copiedId === 'group-desc' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {result.companies && result.companies.length > 0 && (
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Company Specific Suggestions</h3>
                  {result.companies.map((c, idx) => (
                    <div key={idx} className="space-y-3 p-4 rounded-lg border bg-muted/20">
                      <h4 className="font-bold text-sm">{c.name}</h4>
                      <div className="grid gap-3">
                        <div className="relative group">
                          <label className="text-[10px] text-muted-foreground uppercase ml-1">Refined Tagline</label>
                          <Textarea 
                            readOnly 
                            value={c.refinedTagline} 
                            className="bg-muted/30 resize-none min-h-[40px] pr-10"
                          />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute bottom-2 right-2 h-8 w-8"
                            onClick={() => copyToClipboard(c.refinedTagline, `c-tag-${idx}`)}
                          >
                            {copiedId === `c-tag-${idx}` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Button variant="outline" onClick={() => setResult(null)} className="w-full">
                Refine Again
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
