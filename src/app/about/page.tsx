import * as React from "react";
import { Mail, Code, Compass, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/animations/PageTransition";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-12 flex-grow">
        <Container className="space-y-8 max-w-4xl">
          <SectionHeader
            title="About"
            subtitle="The vision, philosophy, and workspace behind Crafted Co."
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            {/* Main Narrative Column */}
            <div className="md:col-span-8 space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Hello, I&apos;m Aditya. Crafted Co is my long-term personal creative workspace
                and digital archive. It is a permanent home for everything I build—ranging from
                tactile mobile applications and procedural PC games to custom design wikis and web systems.
              </p>
              
              <div className="flex items-start gap-3 my-6 p-4 rounded-xl border border-brand-start/20 bg-brand-start/2% text-foreground">
                <Sparkles className="w-5 h-5 shrink-0 text-brand-start mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-serif font-semibold text-sm">Building in the Open</h4>
                  <p className="text-xs text-muted-foreground">
                    Unlike typical resume portfolios that showcase only final products, Crafted Co documents the entire building journey—complete with technical failures, bugs, design updates, and incremental milestones.
                  </p>
                </div>
              </div>

              <p>
                I believe that real software and products are built on iterations and stories. 
                The development logs in the journal serve as development notes detailing how early prototypes evolve 
                into final releases. Every progress percentage, commit, and change log is cataloged relationally.
              </p>
              <p>
                When I&apos;m not writing code or testing physics collisions in game solvers, I&apos;m usually reading books 
                on visual layout or examining mechanical drawings of early clockwork automation. 
                I enjoy projects that sit at the intersection of architectural structure and aesthetic playfulness.
              </p>
            </div>

            {/* Sidebar Column */}
            <div className="md:col-span-4 space-y-6">
              <Card
                className="overflow-hidden border-border/80 dark:border-border/40 bg-card/30"
                hoverable={false}
              >
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-serif text-sm font-semibold text-foreground border-b border-border/40 pb-2">
                    Connect & Inquire
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Have a question about a project, a bug in my code, or simply want to chat? Reach out through any of these networks.
                  </p>
                  
                  <div className="space-y-3 pt-2 text-xs">
                    <a
                      href="mailto:aditya@example.com"
                      className="flex items-center gap-2 text-muted-foreground hover:text-brand-start transition-colors"
                    >
                      <Mail className="w-4 h-4 text-brand-start" />
                      aditya@example.com
                    </a>
                    <a
                      href="https://github.com/Aditya0973"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-brand-start transition-colors"
                    >
                      <Code className="w-4 h-4 text-brand-start" />
                      GitHub Profile
                    </a>
                    <a
                      href="https://behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-brand-start transition-colors"
                    >
                      <Compass className="w-4 h-4 text-brand-start" />
                      Behance Case Studies
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-xl border border-border/40 p-4 text-[11px] font-mono text-muted-foreground leading-relaxed space-y-1">
                <span className="block font-semibold text-foreground">Stack Details:</span>
                <span>Next.js App Router (16)</span>
                <span className="block">Tailwind CSS v4</span>
                <span className="block">Framer Motion Primitives</span>
                <span className="block">Supabase CMS Backend</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}
